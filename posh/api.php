<?php
header("Content-Type: application/json; charset=utf-8");
header("X-Content-Type-Options: nosniff");
header("Cache-Control: no-store");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
  http_response_code(204);
  exit;
}

$adminSalt = "ad9eb7bcfa62f0e7c4309af1bdf50b29";
$adminHash = "a2e779b1f2933a51d654b6ecdf94f502f88065f1ebfcd07f11e6dd273a4d6db3";

function respond($code, $payload) {
  http_response_code($code);
  echo json_encode($payload);
  exit;
}

function clean_text($value, $max) {
  $value = trim(str_replace("\0", "", (string)$value));
  $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', "", $value);
  if (function_exists("mb_substr")) return mb_substr($value, 0, $max, "UTF-8");
  return substr($value, 0, $max);
}

function store_file() {
  $private = dirname(__DIR__, 2) . DIRECTORY_SEPARATOR . "posh-private";
  if (!is_dir($private)) @mkdir($private, 0700, true);
  if (is_dir($private) && is_writable($private)) return $private . DIRECTORY_SEPARATOR . "registrations.json";
  $local = __DIR__ . DIRECTORY_SEPARATOR . "data";
  if (!is_dir($local)) @mkdir($local, 0700, true);
  return $local . DIRECTORY_SEPARATOR . "registrations.json";
}

function with_records($fn) {
  $file = store_file();
  $dir = dirname($file);
  if (!is_dir($dir) || !is_writable($dir)) respond(500, array("ok" => false, "error" => "The register could not be saved."));
  $lockPath = $file . ".lock";
  $lock = fopen($lockPath, "c");
  if (!$lock) respond(500, array("ok" => false, "error" => "The register could not be saved."));
  flock($lock, LOCK_EX);
  $data = array("people" => array());
  if (is_file($file)) {
    $parsed = json_decode(file_get_contents($file), true);
    if (is_array($parsed) && isset($parsed["people"]) && is_array($parsed["people"])) $data = $parsed;
  }
  $result = $fn($data);
  $tmp = $file . ".tmp";
  $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  if ($json === false || file_put_contents($tmp, $json) === false || !rename($tmp, $file)) {
    flock($lock, LOCK_UN);
    fclose($lock);
    respond(500, array("ok" => false, "error" => "The register could not be saved."));
  }
  flock($lock, LOCK_UN);
  fclose($lock);
  return $result;
}

function password_ok($password) {
  global $adminSalt, $adminHash;
  $check = hash_pbkdf2("sha256", (string)$password, $adminSalt, 120000, 64, false);
  return is_string($check) && hash_equals($adminHash, $check);
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") respond(405, array("ok" => false));

$raw = file_get_contents("php://input");
if ($raw === false || strlen($raw) > 20000) respond(400, array("ok" => false));
$body = json_decode($raw, true);
if (!is_array($body)) respond(400, array("ok" => false));
$action = isset($body["action"]) ? $body["action"] : "";

if ($action === "ping") respond(200, array("ok" => true));

if ($action === "list") {
  if (!password_ok(isset($body["password"]) ? $body["password"] : "")) respond(401, array("ok" => false));
  $people = with_records(function ($data) { return array_values($data["people"]); });
  usort($people, function ($a, $b) {
    $at = isset($a["registeredAt"]) ? $a["registeredAt"] : "";
    $bt = isset($b["registeredAt"]) ? $b["registeredAt"] : "";
    if ($at === $bt) return 0;
    return $at < $bt ? 1 : -1;
  });
  respond(200, array("ok" => true, "people" => $people));
}

if ($action !== "sync" || !isset($body["person"]) || !is_array($body["person"])) respond(400, array("ok" => false));

$in = $body["person"];
$id = isset($in["id"]) ? $in["id"] : "";
if (!preg_match('/^[A-Za-z0-9]{8,40}$/', $id)) respond(400, array("ok" => false));
$name = clean_text(isset($in["name"]) ? $in["name"] : "", 120);
$org = clean_text(isset($in["org"]) ? $in["org"] : "", 160);
if ($name === "" || $org === "") respond(400, array("ok" => false));

$topic = isset($in["topic"]) ? intval($in["topic"]) : 1;
$passed = isset($in["passed"]) ? intval($in["passed"]) : 0;
$total = isset($in["total"]) ? intval($in["total"]) : 15;
if ($topic < 1) $topic = 1;
if ($topic > 30) $topic = 30;
if ($passed < 0) $passed = 0;
if ($passed > 30) $passed = 30;
if ($total < 1) $total = 15;
if ($total > 30) $total = 30;

$certificate = null;
if (isset($in["certificate"]) && is_array($in["certificate"]) && !empty($in["certificate"]["downloaded"])) {
  $certId = clean_text(isset($in["certificate"]["id"]) ? $in["certificate"]["id"] : "", 40);
  $iso = clean_text(isset($in["certificate"]["iso"]) ? $in["certificate"]["iso"] : "", 10);
  if (preg_match('/^POSH-[A-Za-z0-9-]+$/', $certId) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $iso)) {
    $certificate = array("id" => $certId, "iso" => $iso, "downloaded" => true);
  }
}

$record = array(
  "id" => $id,
  "name" => $name,
  "employeeId" => clean_text(isset($in["employeeId"]) ? $in["employeeId"] : "", 40),
  "designation" => clean_text(isset($in["designation"]) ? $in["designation"] : "", 80),
  "division" => clean_text(isset($in["division"]) ? $in["division"] : "", 80),
  "org" => $org,
  "registeredAt" => clean_text(isset($in["registeredAt"]) ? $in["registeredAt"] : "", 40),
  "updatedAt" => gmdate("c"),
  "topic" => $topic,
  "passed" => $passed,
  "total" => $total,
  "finished" => !empty($in["finished"]),
  "certificate" => $certificate
);

with_records(function (&$data) use ($id, $record) {
  $existing = isset($data["people"][$id]) && is_array($data["people"][$id]) ? $data["people"][$id] : null;
  if ($existing && !empty($existing["registeredAt"])) $record["registeredAt"] = $existing["registeredAt"];
  if ($existing && !empty($existing["certificate"]["downloaded"])) $record["certificate"] = $existing["certificate"];
  $data["people"][$id] = $record;
  return true;
});

respond(200, array("ok" => true));
