/**
 * POSH training course content.
 * Source for the slide deck and the self-paced course.
 * Awareness material based on the Sexual Harassment of Women at Workplace
 * (Prevention, Prohibition and Redressal) Act, 2013 and the Rules, 2013.
 * It is not legal advice. The Internal Committee decides on the full facts.
 */
const COURSE = {
  passNeed: 3,
  askCount: 4,
  title: "POSH Training Course",
  statute: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013",
  rules: "Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Rules, 2013",
  passLabel: "3 out of 4 (75%)",
  topics: [
    {
      n: 1,
      short: "Unwelcome behaviour",
      title: "Understanding \u2018Unwelcome\u2019 Behaviour",
      objective: "This topic is about the word unwelcome, which sits at the centre of the definition of sexual harassment. It explains whose experience the Internal Committee has to understand, and why a stated intention, a joke, or silence at the time does not settle the question on its own.",
      lookAt: ["Her experience, not only his intention", "Welcome can be withdrawn", "Silence is not always consent"],
      discuss: "Section 2(n) defines sexual harassment through unwelcome acts or behaviour of a sexual nature, whether directly or by implication. The Internal Committee asks whether the conduct was unwelcome to her. He may say he meant to be kind, funny, or complimentary. That account is heard, and it is then set against what she experienced and against whether she was in a position to refuse.",
      cards: [
        { h: "Her experience is the test", p: "The Act asks whether the act or behaviour was unwelcome to her. He may call the remark a joke, a compliment, or the way the team usually talks. The Committee can hear that explanation. It still has to decide how the conduct landed on her. A name he gives his own behaviour does not answer that question." },
        { h: "Welcome can be withdrawn", p: "Conduct both people once accepted can become unwelcome later. She may say so in words, or show it by stepping back, changing the subject, or no longer replying. Once that is clear, the same sexual remark, request, or touch raises a fresh question under the definition. An earlier welcome covers only what she was still accepting." },
        { h: "A single act can qualify", p: "Section 2(n) speaks of any one or more unwelcome acts or behaviour. A long pattern is not required before conduct can be sexual harassment. One demand for a sexual favour, one unwelcome advance, or one display of pornography can fall within the definition. Repeated conduct can make the facts easier to see. The section adds no minimum number of incidents." },
        { h: "Silence where there is power", p: "Where he controls her appraisal, her shifts, her confirmation, or her daily work, she may stay quiet because speaking carries a cost. Silence in that setting is weak evidence of welcome. The Committee looks at the difference in power, at what was said and done, and at whether she had a real chance to refuse. From the outside, fear can look like agreement." }
      ],
      leftTitle: "May amount to sexual harassment",
      left: [
        "Comments on her body or clothes after she looks away or says she is uncomfortable",
        "Repeated requests for a date or a drink after a clear no",
        "A hug, a pat, or a hand on the waist that she did not invite",
        "Sexual jokes aimed at her, or continued in her presence after she shows discomfort"
      ],
      rightTitle: "May not, by itself",
      right: [
        "A sincere thank-you for a piece of work, with no sexual content",
        "A disagreement about a deadline or about the quality of work",
        "A friendship both people still welcome, with no sexual conduct at work",
        "A truly accidental brush in a crowd, if it is not sexual and not repeated"
      ],
      caseTitle: "The festival remark",
      caseFacts: "At a client dinner a team lead tells a woman colleague, \u201cYou look very hot in that saree. I have been waiting all year to see you dressed like this.\u201d She smiles tightly and changes the subject. He messages later, \u201cDo not be so serious. It was a compliment.\u201d He repeats a similar remark at the next offsite.",
      caseRead: [
        "The words are sexual, not a comment on her work",
        "Her change of subject is a signal. The repeat shows he did not stop",
        "He is her team lead, so silence is weak evidence of welcome"
      ],
      caseClose: "Illustration, not a reported judgment. This can be unwelcome verbal conduct of a sexual nature. Calling it a compliment does not decide the issue.",
      lawAnchor: "In Apparel Export Promotion Council v. A.K. Chopra (1999), the Supreme Court treated unwelcome sexual behaviour by a superior as sexual harassment. The conduct did not have to be a completed physical assault.",
      questions: [
        {
          q: "He says the remark was only a joke. What decides the issue?",
          options: ["Whether the team laughed", "Whether she found the conduct unwelcome", "Whether he used email or speech", "Whether she complained the same day"],
          a: 1,
          why: "The test is whether the conduct was unwelcome to her. A joke, a compliment, or a later apology does not by itself end the question."
        },
        {
          q: "She once agreed to a friendly coffee. She then asks him to stop sexual messages.",
          options: ["The coffee means later acts cannot be unwelcome", "Welcome can be withdrawn. Later messages can still qualify", "Only a written warning can make a message unwelcome", "The Act covers only a first meeting"],
          a: 1,
          why: "Welcome is not permanent. Sexual messages after she has asked him to stop can still be sexual harassment."
        },
        {
          q: "Which statement about a single incident is correct?",
          options: ["One incident can never qualify", "The Act always needs three witnesses", "A single serious unwelcome act can be enough", "Only conduct over six months qualifies"],
          a: 2,
          why: "Section 2(n) does not require a series. One unwelcome act of the kinds the Act lists can be sexual harassment."
        },
        {
          q: "Her manager comments on her body. She stays silent. Why can that still be unwelcome?",
          options: ["Managers are outside the Act", "Silence where he controls her work is not welcome", "A one-to-one talk is not the workplace", "The Act ignores seniority"],
          a: 1,
          why: "Hierarchy matters. Where he influences her work, a failure to object out loud is not the same as consent."
        },
        {
          q: "Which is least likely, by itself, to be sexual harassment?",
          options: ["\u201cThat report was clear and on time. Thank you.\u201d", "\u201cYour neckline is distracting. Change it for me.\u201d", "A hand placed on her waist at her desk", "A message describing a sexual act he wants"],
          a: 0,
          why: "Feedback on the work, with no sexual content and no sting attached, is ordinary management. The other three are sexual and unwelcome on these facts."
        }
      ]
    },
    {
      n: 2,
      short: "Physical and virtual",
      title: "Sexual Harassment: Physical vs. Virtual",
      objective: "This topic is about sexual harassment in person and sexual harassment through a screen. The Act has one definition. It covers a remark across a desk, a comment on a video call, and a message on a work chat or on a personal app that people use for work.",
      lookAt: ["Physical forms", "Digital forms", "Work channels and personal apps"],
      discuss: "The Act uses the same definition for conduct in a room and conduct through a device. Physical contact, a sexual remark, a demand for a sexual favour, showing pornography, and other unwelcome conduct of a sexual nature can take either form. Official email, a team chat, a video call, and a phone the employer provides are part of how work is done. A personal messaging app used to reach a colleague about work can be examined in the same way.",
      cards: [
        { h: "One definition, every setting", p: "Section 2(n) lists unwelcome physical contact and advances, a demand or request for sexual favours, sexually coloured remarks, showing pornography, and any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature. None of those limbs says the conduct must happen inside the office building. A sexual remark on a video call is still a sexually coloured remark." },
        { h: "Work channels and personal apps", p: "Official email, the team chat, a video meeting, and a device issued for work are workplace channels. Teams also use a personal messaging app because that is how the work is actually coordinated. Using a personal app for a work purpose keeps the conversation connected to the workplace. The Committee looks at that connection, and at whether the conduct was unwelcome and sexual in nature." },
        { h: "Conduct in the room", p: "In-person forms include an unwelcome touch, standing so close that she cannot move comfortably, blocking her path, a sexual gesture, staring at her body, and putting pornography on a screen she has to see. These can be a single incident. They can also build across a day, in an open office, a meeting room, a corridor, or on a site visit." },
        { h: "Conduct on a screen", p: "On a screen, the same definition covers sexual messages and voice notes, images she did not ask for, comments on her body or her clothes while she is on camera, and a group chat that rates colleagues or describes them in sexual terms. A message sent after working hours can still be examined. The hour does not give a sexual message a separate, unprotected status." }
      ],
      leftTitle: "May amount to sexual harassment",
      left: [
        "An unsolicited sexual image on Teams, WhatsApp, or email",
        "A comment on her body during a video call",
        "A group chat created to rate the looks of women colleagues",
        "Standing so close at her desk that she moves away, and then doing it again"
      ],
      rightTitle: "May not, by itself",
      right: [
        "A short after-hours message about a real deadline",
        "Accepting her request to keep the camera off because of bandwidth",
        "Sharing a project file in the team channel",
        "A professional greeting at the start of a call"
      ],
      caseTitle: "The voice note after the call",
      caseFacts: "After a work call, a senior sends a voice note: \u201cYou looked beautiful on camera. Send me a photo in what you are wearing now.\u201d She does not reply. The next day he writes in the team chat, \u201cSome people do not know how to take a compliment.\u201d",
      caseRead: [
        "The request is sexual, and it was not invited",
        "The team-chat line punishes her for not playing along",
        "A personal number does not take it outside work if it arose from work"
      ],
      caseClose: "Illustration. This can be virtual sexual harassment, followed by conduct that makes the environment hostile. The screen does not make it private or harmless.",
      lawAnchor: "Section 2(n) covers verbal and non-verbal conduct of a sexual nature. It is not limited to physical touch.",
      questions: [
        {
          q: "Which statement about online conduct is correct?",
          options: ["The Act applies only inside the office building", "Unwelcome sexual conduct on a work call can qualify", "Chat messages are outside the definition", "Only emails sent from a company ID count"],
          a: 1,
          why: "The definition is about the conduct, not the device. A work call, a chat, or a message arising out of work can be sexual harassment."
        },
        {
          q: "Which of these is most likely to qualify?",
          options: ["A file shared in the project channel", "\u201cPlease send the deck before 6.\u201d", "An unsolicited sexual image sent after a meeting", "\u201cGood morning, shall we start?\u201d"],
          a: 2,
          why: "Showing or sending sexual images without her welcome falls within the definition. Ordinary work messages do not."
        },
        {
          q: "He says he used his personal WhatsApp, so it is not work. What is the better view?",
          options: ["A personal app is always outside the Act", "If the contact arose from work, the app does not immunise it", "Only SMS sent by the employer can qualify", "Virtual conduct needs a witness in the room"],
          a: 1,
          why: "People often move work conversations to personal apps. The channel does not erase a workplace connection."
        },
        {
          q: "Which physical pattern can qualify even without a lasting touch?",
          options: ["Passing a document across a table once", "Repeatedly standing so close that she has to move away", "Sitting in an assigned seat in a meeting", "Holding a door open as she walks through"],
          a: 1,
          why: "Unwelcome proximity and advances are physical conduct. Ordinary courtesy, without a sexual edge, is not."
        },
        {
          q: "A colleague accepts her request to switch her camera off. She gives bandwidth as the reason.",
          options: ["His acceptance is, by itself, harassment", "A sexual comment is different from accepting this request", "Cameras are legally compulsory on every call", "Bandwidth can never be a real reason"],
          a: 1,
          why: "Agreeing to a practical request is not sexual conduct. A comment on her body, or pressure to display herself, would be a different case."
        }
      ]
    },
    {
      n: 3,
      short: "What may constitute",
      title: "What May Constitute Sexual Harassment?",
      objective: "This topic is about the conduct that can amount to sexual harassment under section 2(n). It walks through the five kinds of unwelcome behaviour the section names, including behaviour that is expressed as a hint rather than in plain words.",
      lookAt: ["The five statutory limbs", "Implied conduct", "Context, not a slogan"],
      discuss: "Section 2(n) says sexual harassment includes any one or more of the following unwelcome acts or behaviour, whether directly or by implication. Any one limb is enough. The word includes means the list is not a closed catalogue, so sexual conduct that the first four limbs do not name can still fall under the fifth. A hint can be enough. The section does not wait for a crude sentence before the Committee can look at what was meant.",
      cards: [
        { h: "Physical contact and advances", p: "The first limb is physical contact and advances. It covers an unwelcome touch, a hug she did not invite, brushing against her, a hand on her waist or shoulder in a sexual way, blocking her path, and moving into her space with a sexual purpose. Contact in a crowded lift is a different set of facts. The Committee looks at what was done, the manner of it, and how she received it." },
        { h: "A demand for sexual favours", p: "The second limb is a demand or request for sexual favours. It can be spoken in plain words. It can also be a hint tied to a shift, a confirmation, a rating, or a client meeting, because the section includes conduct by implication. She does not have to agree, and the favour does not have to be carried out, before the demand itself can be examined." },
        { h: "Sexually coloured remarks", p: "The third limb is sexually coloured remarks. It covers comments on her body, her clothes, or her personal or sexual life, sexual jokes told at her, and nicknames with a sexual meaning. He may call this banter. The section looks at the sexual colour of the remark. A comment on her work, with no sexual content, sits outside this limb." },
        { h: "Pornography and other conduct", p: "The fourth limb is showing pornography. The fifth is any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature. A gesture, a stare directed at her body, a sound, an image, or a message can fall here when it is sexual and unwelcome. The fifth limb is there so that a narrow reading of the first four does not exhaust the definition." }
      ],
      leftTitle: "May amount to sexual harassment",
      left: [
        "A sexually explicit song or video played at her desk after she objects",
        "A nickname about her body used in meetings",
        "Leering, a sexual gesture, or a message with sexual emojis sent to her",
        "Asking her to \u201cbe nice after hours\u201d in a way that means a sexual favour"
      ],
      rightTitle: "May not, by itself",
      right: [
        "A medical or training discussion of the body, done professionally and only as far as the work needs",
        "Correcting an error in a client note, with no sexual content and no humiliation",
        "A dress-code reminder that is general, evenly applied, and not sexual",
        "One polite refusal of leave, explained on roster grounds, with no sexual sting"
      ],
      caseTitle: "The shared screen",
      caseFacts: "During a late working session a colleague plugs his phone into the meeting-room screen \u201cas a joke\u201d and plays a pornographic clip for several seconds. Two people laugh. A woman in the room asks him to stop. He says, \u201cEveryone watches this. Do not be difficult,\u201d and forwards the clip to the team chat.",
      caseRead: [
        "Showing pornography is named in section 2(n)",
        "Her objection makes the \u201cjoke\u201d defence even weaker",
        "Forwarding it extends the conduct and widens the harm"
      ],
      caseClose: "Illustration. Playing and then circulating pornography at work can constitute sexual harassment. Laughter from others does not make it welcome to her.",
      lawAnchor: "Section 2(n) of the Act. Conduct may be direct or by implication. One limb is enough.",
      questions: [
        {
          q: "How many of the section 2(n) limbs must be present?",
          options: ["All five, together", "Any one is enough", "At least one physical and one verbal", "Only a demand for a favour counts"],
          a: 1,
          why: "The definition says \u201cany one or more\u201d. A sexually coloured remark alone, or pornography alone, can be sexual harassment if it is unwelcome."
        },
        {
          q: "Which is the best reading of \u201cby implication\u201d?",
          options: ["Only written words count", "A hint that seeks a sexual favour can be enough", "Implication applies only to clients", "A hint is outside the Act until a second incident"],
          a: 1,
          why: "The Act expressly covers conduct directly or by implication. A coded demand is still a demand."
        },
        {
          q: "Which of these may fall outside, if these are truly all the facts?",
          options: ["A pornographic clip shown in the meeting room", "A sexual nickname used about her in a standup", "A professional correction of a calculation error", "A sexual gesture made toward her"],
          a: 2,
          why: "Work criticism with no sexual content is not sexual harassment. The other three sit on the statutory list."
        },
        {
          q: "A trainer uses an anatomical diagram in a clinical session, with no personal remarks. Which view is better?",
          options: ["Any image of a body is pornography", "Work content, kept professional, is not harassment by itself", "Diagrams are banned under section 2(n)", "Only women trainers may show such a diagram"],
          a: 1,
          why: "The Act targets unwelcome sexual conduct, not the subject matter of a genuine professional task. A personal sexual remark in that session would be different."
        },
        {
          q: "He says the nickname is \u201cjust banter\u201d and others use it too. She has asked him to stop.",
          options: ["Banter is exempt if the group joins in", "A sexual nickname she rejected can be a sexually coloured remark", "Nicknames are covered only on email", "The Act applies only when a client hears it"],
          a: 1,
          why: "Group humour is not a defence. A sexual nickname, continued after she objects, can be unwelcome verbal conduct."
        }
      ]
    },
    {
      n: 4,
      short: "Quid pro quo and hostile environment",
      title: "Understanding Quid Pro Quo and Hostile Work Environment",
      objective: "This topic is about two patterns that come up often in complaints. Quid pro quo is a bargain in which a sexual favour is tied to a benefit or a loss. A hostile work environment is work made intimidating, offensive, or humiliating. Section 3(2) connects both to sexual harassment.",
      lookAt: ["This for that", "The hostile environment", "Either one can be enough"],
      discuss: "Section 3 prohibits sexual harassment of a woman at any workplace. Section 3(2) then lists circumstances which, if they are connected with sexual harassment, may amount to it. Quid pro quo is a this-for-that bargain. A hostile environment is work made intimidating, offensive, or humiliating. Either pattern can be present without the other. The Committee still looks for the connection with unwelcome conduct of a sexual nature.",
      cards: [
        { h: "Quid pro quo: this for that", p: "Quid pro quo means something is offered, or something is threatened, in exchange for sexual conduct. The link may be said aloud, such as a better rating if she agrees, or a lost project if she refuses. The link may also be a hint she is meant to understand. Section 3(2) covers both an implied and an explicit promise or threat. She need not accept the bargain before it can be looked at." },
        { h: "A promise of better treatment", p: "Section 3(2)(i) names an implied or explicit promise of preferential treatment in her employment. That can be a promotion, a confirmation, a softer target, a desired shift, a training, or a client that helps her career, held out in connection with a sexual favour. The promise is part of the case even where the preferential treatment never actually arrives." },
        { h: "A threat of detriment", p: "Section 3(2)(ii) names a threat of detrimental treatment in her employment. Section 3(2)(iii) names a threat about her present or future employment status. A warning that her confirmation, her posting, or her continuation depends on how she responds to a sexual advance is the circumstance these clauses describe. The threat may concern the job she holds, or the job she hopes to hold." },
        { h: "A hostile work environment", p: "Section 3(2)(iv) covers interference with her work, or an intimidating, offensive, or hostile work environment. Section 3(2)(v) covers humiliating treatment likely to affect her health or safety. A running set of sexual remarks, pornography left where she works, or humiliation in front of the team can build this environment. One severe act can do so as well. The section fixes no minimum number of incidents." }
      ],
      leftTitle: "May amount to sexual harassment",
      left: [
        "\u201cPeople who have dinner with me are the ones I remember at appraisal.\u201d",
        "A good shift or a client account offered in exchange for sexual compliance",
        "Sexual jokes in every standup, continued after women in the team go quiet",
        "A sexual image as the team-channel wallpaper, so she sees it to do her work"
      ],
      rightTitle: "May not, by itself",
      right: [
        "A documented rating based on missed targets, explained, with no sexual content",
        "A roster change applied to the whole team for a genuine operational reason",
        "A hard but professional argument about a client strategy",
        "Refusing a reimbursement that the policy does not allow, with the rule stated"
      ],
      caseTitle: "The rating conversation",
      caseFacts: "In a closed-door review her manager says the promotion list is tight and \u201cpeople who have dinner with me tend to be remembered.\u201d She declines. The next cycle her rating drops from \u201cexceeds\u201d to \u201cmeets\u201d. No new performance facts are recorded. He tells her the year was \u201cless warm.\u201d",
      caseRead: [
        "The dinner line links a personal sexual bargain to a work benefit",
        "The later rating drop is consistent with a threat of detriment",
        "Quid pro quo does not need a crude demand if the implication is clear"
      ],
      caseClose: "Illustration. This is the pattern of quid pro quo. The rating, if it is retaliation for her refusal, is part of the same story and not a neutral appraisal.",
      lawAnchor: "Section 3(2) of the Act. The circumstances listed there are not an exhaustive list.",
      questions: [
        {
          q: "What does quid pro quo mean in this law?",
          options: ["Any strict manager", "A work benefit or loss linked to a sexual demand", "A difference of opinion on quality", "A transfer the IC recommends during an inquiry"],
          a: 1,
          why: "Quid pro quo is an exchange: sexual compliance tied to preferential treatment, or to a threat of harm in employment."
        },
        {
          q: "A sexual joke is not aimed at her, but it is constant, and it makes the room hostile. Can that still qualify?",
          options: ["No, because her name was not used", "Yes. A hostile environment can exist without a direct demand", "Only if a client is present", "Only if someone also touches her"],
          a: 1,
          why: "Section 3(2)(iv) covers interference with work and an intimidating, offensive, or hostile environment. She does not have to be the named target of every remark."
        },
        {
          q: "Which fact pattern is least likely, by itself, to be quid pro quo?",
          options: ["\u201cDinner with me, and I will remember you at appraisal.\u201d", "Rating falls after she refuses him, with no new facts on her work", "A rating cut for three missed deadlines, with no sexual content", "A better shift offered for sexual compliance"],
          a: 2,
          why: "A documented performance decision, with no sexual link, is not quid pro quo. The link to a sexual demand is what changes the other three."
        },
        {
          q: "Must both quid pro quo and a hostile environment be proved?",
          options: ["Yes, the Act requires both", "No. Either pattern can be enough if tied to sexual harassment", "Only a hostile environment is in the Act", "Only quid pro quo is in the Act"],
          a: 1,
          why: "They are different circumstances under section 3(2). A case may have one, the other, or both."
        },
        {
          q: "Humiliating treatment connected with sexual harassment may also be covered when it does what?",
          options: ["Speeds up a project", "Is likely to affect her health or safety", "Is approved by a client", "Happens only once a year at a festival"],
          a: 1,
          why: "Section 3(2)(v) names humiliating treatment likely to affect her health or safety, when it is connected with sexual harassment."
        }
      ]
    },
    {
      n: 5,
      short: "Key terms",
      title: "Understanding Key Terms",
      objective: "This topic is about the definitions the Act uses for the people and the places it covers. It explains who an aggrieved woman is, how wide the word employee is, what counts as a workplace, and who can be named as a respondent.",
      lookAt: ["Who can complain", "How wide the workplace is", "Who a respondent can be"],
      discuss: "The Act draws these definitions widely, and it does so on purpose. A woman need not be on the payroll to be an aggrieved woman. An employee includes people who are temporary, unpaid, or supplied through a contractor. The workplace includes a place she visits because of the work, and transport the employer provides. A respondent need not himself be an employee. A reading limited to permanent staff inside the head office is narrower than the sections.",
      cards: [
        { h: "Who may file a complaint", p: "Section 2(a) defines an aggrieved woman, in relation to a workplace, as a woman of any age, whether employed or not, who alleges sexual harassment by the respondent. The complaint this Act creates is hers. A man who is harassed may have a route under the organisation's conduct rules, its service rules, or the criminal law. That route stands apart from the complaint the Act gives to her." },
        { h: "Who counts as an employee", p: "Section 2(f) includes a person employed on a regular, temporary, ad hoc, or daily-wage basis, whether directly or through an agent or a contractor, and whether paid or unpaid. It expressly includes a contract worker, a probationer, a trainee, an apprentice, and a person called a volunteer. An intern who is not on the permanent roll is still inside this definition." },
        { h: "How wide the workplace is", p: "Section 2(o) covers the place of work, and any place visited by the employee arising out of or during the course of employment, including transportation the employer provides for that journey. A client site, an offsite, a conference, and official travel sit inside those words. A dwelling place or a house is also included, which is how a domestic worker's household is a workplace." },
        { h: "The respondent and employer", p: "Section 2(m) defines a respondent as the person against whom she has complained. He may be a colleague, a manager, a client, or a visitor. He need not be on the employer's rolls. Section 2(g) defines an employer to include the person responsible for the management, supervision, and control of the workplace. That person carries the duties in section 19 even where the respondent is not an employee." }
      ],
      leftTitle: "The Act\u2019s route can cover",
      left: [
        "A woman visitor harassed at your office",
        "A trainee, apprentice, probationer, or contract worker",
        "Conduct in the office cab, or at a client site during the work",
        "Harassment by a vendor or visitor while she is at work"
      ],
      rightTitle: "Read this carefully",
      right: [
        "Fewer than ten workers: the forum is the Local Committee, not \u201cno remedy\u201d",
        "A purely private dispute with no link to work may be a police matter, not an IC case",
        "The statutory complaint is for an aggrieved woman. Conduct rules can still bind everyone",
        "A respondent who is not on the payroll can still trigger the employer\u2019s duty to keep her safe"
      ],
      caseTitle: "The server room",
      caseFacts: "A vendor\u2019s engineer is in the office to service a server. He blocks the doorway, comments on a woman employee\u2019s body, and tells her to \u201clock the room if she wants the server priority.\u201d He is not on the company payroll. She is.",
      caseRead: [
        "The office is a workplace, and the incident arises during her employment",
        "He can be a respondent even though he is not an employee",
        "Her employer still owes her a safe workplace and help if she wants a criminal complaint"
      ],
      caseClose: "Illustration. This can be sexual harassment at the workplace. Where the respondent is not an employee, the employer\u2019s duties under section 19 still apply, including help with a criminal complaint if she chooses.",
      lawAnchor: "Definitions are in section 2. Workplace includes a place visited arising out of or during employment, and transportation for that journey.",
      questions: [
        {
          q: "Who is an aggrieved woman under the Act?",
          options: ["Only a permanent employee", "A woman of any age who alleges sexual harassment at a workplace", "Any person of any gender", "Only a woman manager"],
          a: 1,
          why: "Section 2(a) is wide. She need not be on the payroll. The statutory right to complain under this Act is hers, as a woman."
        },
        {
          q: "Which person can be an employee under section 2(f)?",
          options: ["Only a confirmed employee on the payroll", "A trainee, apprentice, or worker engaged through a contractor", "Only someone with a written appointment letter", "Only someone who has completed one year"],
          a: 1,
          why: "The definition includes contract workers, probationers, trainees, apprentices, daily-wage workers, and people engaged through an agent."
        },
        {
          q: "An incident happens in the cab the company arranged after a late client visit. Is that capable of being the workplace?",
          options: ["No. The workplace ends at the office door", "Yes. Transport for a work journey is included", "Only if the driver is on the payroll", "Only if the cab is owned by the company"],
          a: 1,
          why: "Section 2(o) includes any place visited arising out of or during employment, including transportation provided by the employer for that journey."
        },
        {
          q: "The workplace has eight workers and no Internal Committee. What is the right forum?",
          options: ["She has no statutory forum", "The Local Committee notified for the district", "Only the police, and never a committee", "Any manager who volunteers"],
          a: 1,
          why: "An Internal Committee is required where there are ten or more workers. Below that, the Local Committee is the statutory forum. The conduct can still be sexual harassment."
        },
        {
          q: "A man colleague is subjected to sexual comments. What is the accurate statement?",
          options: ["The 2013 Act\u2019s complaint right belongs to an aggrieved woman", "The Act gives him the same IC complaint as a woman", "Men cannot be bound by workplace conduct rules", "Sexual comments at work are outside every law"],
          a: 0,
          why: "The Act is drafted for an aggrieved woman. An organisation may still set conduct rules for everyone and use service rules. Criminal law can also apply. Do not describe the Act as gender-neutral."
        }
      ]
    },
    {
      n: 6,
      short: "Internal Committee",
      title: "Internal Committee (IC)",
      objective: "This topic is about the Internal Committee. It explains when an employer must constitute one, who its members are, how long they serve, what the Committee does, and the grounds on which a member is removed and replaced.",
      lookAt: ["Composition", "Three-year tenure", "Removal and replacement"],
      discuss: "An employer with ten or more workers must constitute an Internal Committee by a written order under section 4. Where work is carried on at more than one place, a Committee is required at every administrative unit or office. The Committee inquires and recommends. The employer acts on the recommendation, within the time the Act sets. A workplace with fewer than ten workers does not constitute this Committee. The complaint there goes to the Local Committee.",
      cards: [
        { h: "The Presiding Officer", p: "The Presiding Officer is a woman employed at a senior level at that workplace. If that office has no senior woman, she is nominated from another office or administrative unit. If that too is not available, she is nominated from any other workplace of the same employer, or from another organisation. The fallback is there so that the absence of a senior woman in one office is not a reason to leave the Committee unconstituted." },
        { h: "Members from the employees", p: "The Committee has not less than two members from amongst the employees. The Act says they are preferably committed to the cause of women, or have experience in social work, or have legal knowledge. Preferably is the word the section uses. It guides the employer in choosing. An inquiry does not fail merely because one of those two members does not hold a law degree." },
        { h: "The external member", p: "One member comes from a non-governmental organisation or an association committed to the cause of women, or is a person familiar with issues relating to sexual harassment. This member is from outside the workplace, so the Committee is not composed only of people who report to the same management. The employer pays the fees or allowances the Rules prescribe for this member." },
        { h: "Half women, three-year term", p: "At least half the members must be women, and the Presiding Officer and every member serve for no more than three years. Section 4(5) requires removal for a breach of section 16, a conviction or a pending criminal case, guilt in disciplinary proceedings or such proceedings pending, or abuse of the position that would harm the public interest. The seat is then filled by a fresh nomination." }
      ],
      leftTitle: "The IC\u2019s work",
      left: [
        "Receive a complaint and help her put it in writing if she needs help",
        "Conciliate only if she asks, and never on the basis of a money settlement",
        "Inquire fairly, recommend interim relief, and recommend action or no action",
        "Keep confidentiality, and submit an annual report to the employer and the District Officer"
      ],
      rightTitle: "A member must be removed if",
      right: [
        "The member contravenes the confidentiality duty in section 16",
        "The member is convicted, or a criminal inquiry is pending against the member",
        "The member is found guilty in disciplinary proceedings, or such proceedings are pending",
        "The member has abused the position so that staying would harm the public interest"
      ],
      caseTitle: "The committee that cannot sit",
      caseFacts: "A workplace notifies a five-member \u201cIC\u201d. The chair is a man. Four members are men. The only woman is a junior executive. There is no external member. The order says members will serve \u201cuntil further notice\u201d, with no term. One member is facing a pending criminal case, and he remains on the committee.",
      caseRead: [
        "The Presiding Officer must be a woman at a senior level",
        "At least half the members must be women, and one member must be external",
        "A pending criminal inquiry is itself a ground to remove a member"
      ],
      caseClose: "Illustration. This body does not meet section 4. A vacancy, including one created by removal, has to be filled by a fresh nomination under that section. Tenure cannot be open-ended: it must not exceed three years.",
      lawAnchor: "Section 4. Where the prescribed inquiry procedure applies, the quorum is three members, including the Presiding Officer (Rule 7).",
      questions: [
        {
          q: "Which composition meets section 4?",
          options: ["Any three senior men", "Senior woman as chair, two staff, one external member, half women", "Only an external lawyer", "The HR head alone"],
          a: 1,
          why: "Section 4 fixes the Presiding Officer, a minimum of two employee members, one external member, and a minimum of one-half women."
        },
        {
          q: "What is the maximum tenure of an IC member?",
          options: ["One year", "Three years", "Five years", "Until retirement"],
          a: 1,
          why: "Section 4(3): the Presiding Officer and every member hold office for a period not exceeding three years, as specified by the employer."
        },
        {
          q: "Which of these is a ground to remove an IC member?",
          options: ["The member took ordinary earned leave", "The member breached section 16 on confidentiality", "The member works in a different team", "The member asked a witness a relevant question"],
          a: 1,
          why: "Section 4(5) requires removal if a member contravenes section 16, among other listed grounds. The vacancy is then filled by fresh nomination."
        },
        {
          q: "A criminal inquiry is pending against a member. What does the Act require?",
          options: ["Nothing, until the trial ends in conviction", "Removal from the Committee", "Removal only if the IC votes to keep the member", "A transfer of the member into the role of Presiding Officer"],
          a: 1,
          why: "Section 4(5)(b) covers both a conviction and a pending inquiry into an offence. Removal is mandatory, not optional."
        },
        {
          q: "Who acts on the IC\u2019s recommendation after the inquiry?",
          options: ["The IC itself imposes the final employment penalty", "The employer acts on the recommendation, within sixty days", "The external member alone", "The complainant, by choosing the penalty"],
          a: 1,
          why: "The IC finds and recommends. Section 13(4) requires the employer to act on the recommendation within sixty days of receiving it."
        }
      ]
    },
    {
      n: 7,
      short: "Complaint and redressal",
      title: "Complaint Filing and Redressal Mechanism",
      objective: "This topic is about the path a complaint takes. It covers how a complaint is filed and who may help to file it, the time limits, conciliation, the inquiry, the recommendation, the action the employer must take, and the appeal.",
      lookAt: ["Time limits", "A fair inquiry", "What redressal can look like"],
      discuss: "Section 9 starts with a written complaint. The ordinary period is three months from the incident, or from the last incident in a series. The Committee may extend that period by up to three further months, and it records the reasons in writing. She may ask for conciliation before the inquiry. No monetary settlement can be the basis of that conciliation. If the matter proceeds, the Committee inquires and recommends, and the employer acts.",
      cards: [
        { h: "How and when to file", p: "The complaint is in writing, to the Internal Committee, or to the Local Committee where there is no Internal Committee. Three months run from the date of the incident, or from the last incident in a series. An extension cannot exceed three further months, and the reasons are written down. Delay is a fact the Committee can consider. It is not a direction to her to stay silent about what happened." },
        { h: "Help to put it in writing", p: "Where she cannot write the complaint, the Presiding Officer or any member must give reasonable assistance to put it in writing. The Rules also name who may file where physical or mental incapacity, or death, prevents her from filing. Written consent is required in the situations the Rules specify. Where she has died, a person who knows of the incident may file with the written consent of her legal heir." },
        { h: "Conciliation, then inquiry", p: "She may request conciliation before the inquiry, and the Committee takes that step only at her request. A settlement cannot be based on money. If one is reached, it is recorded and sent to the employer. If she does not ask, or a term is not met, the Committee inquires. Where he is an employee, the inquiry follows the service rules, or the Rules where those rules set no procedure." },
        { h: "Time, hearing, and action", p: "Where the Rules set the procedure, he receives the complaint within seven working days and replies within ten. The inquiry finishes within ninety days, the report follows within ten, and the employer acts within sixty. An appeal lies within ninety days of the recommendations. Under that procedure the parties are heard without a legal practitioner, and at least three members sit, including the Presiding Officer." }
      ],
      leftTitle: "Steps and time",
      left: [
        "Write to the IC within three months, extendable by up to three more",
        "Respondent\u2019s copy in seven working days, and a reply in ten, where Rule 7 applies",
        "Inquiry finished in ninety days, report within ten days after that",
        "Employer acts within sixty days. Either side may appeal within ninety days"
      ],
      rightTitle: "Protections on the way",
      right: [
        "On her written request, the IC may recommend transfer of either person, leave of up to three months, or other prescribed relief",
        "That leave is in addition to the leave she already has",
        "Both sides are heard where both are employees. The findings are shared so they can respond",
        "If the allegation is not proved, the recommendation is that no action is required. That is not a finding of malice"
      ],
      caseTitle: "Three months, and a request for leave",
      caseFacts: "The last message in a series arrived on 1 March. She files a written complaint on 20 June. She explains that she was afraid of the respondent, who is her reporting manager, and was looking for another internal role before she could write. She also asks, in writing, not to report to him while the inquiry is on, and for leave if a transfer cannot be done quickly.",
      caseRead: [
        "The IC can extend time by up to three months if the circumstances prevented her from filing, and it must record reasons",
        "Interim relief is available on a written request during the inquiry. It can cover him, not only her",
        "Transferring only her, against her wishes, to \u201ccool things down\u201d, is not what the section is for"
      ],
      caseClose: "Illustration. A late complaint is not automatically dead. Fear of a reporting manager is the kind of circumstance an IC should examine. Interim measures are protective. They are not a punishment imposed before the finding.",
      lawAnchor: "Sections 9 to 13 and 18, section 12 on interim relief, and Rule 7 on the manner of inquiry where no service rules set the process.",
      questions: [
        {
          q: "What is the ordinary time limit for a written complaint?",
          options: ["Seven days, with no extension", "Three months, extendable by up to three more, with reasons recorded", "One year, as a matter of right", "Only during the same working day"],
          a: 1,
          why: "Section 9: three months from the incident, or from the last in a series. The IC may extend the limit by a further period not exceeding three months, for reasons recorded in writing."
        },
        {
          q: "When is conciliation permitted?",
          options: ["Whenever the manager prefers it", "Only if she asks, before the inquiry, and not based on money", "After the inquiry report, in place of a finding", "Only if the respondent offers a payment"],
          a: 1,
          why: "Section 10. Conciliation is at the request of the aggrieved woman, before the inquiry. No monetary settlement shall be the basis of conciliation."
        },
        {
          q: "Which sequence matches the Act?",
          options: ["Inquiry 90 days, report in 10 days, employer acts within 60", "Employer punishes first, and the IC reviews later", "Report within ninety days, inquiry within ten", "Appeal first, complaint later"],
          a: 0,
          why: "Section 11(4), section 13(1) and section 13(4). An appeal is then available within ninety days under section 18."
        },
        {
          q: "She asks in writing for interim relief. Which recommendation is within section 12?",
          options: ["Dismiss him that day, with no inquiry", "Transfer either person, or extra leave of up to three months", "Publish his name on the notice board", "Cut her pay until the inquiry ends"],
          a: 1,
          why: "Section 12 allows a recommendation to transfer the woman or the respondent, to grant her leave up to three months, or to grant other prescribed relief. The leave is additional."
        },
        {
          q: "The allegation is not proved. What does the IC recommend?",
          options: ["That no action is required in the matter", "Automatic action against her for a false complaint", "A public apology from her", "That the file be sent to the press"],
          a: 0,
          why: "Section 13(2). A complaint that is not proved leads to a recommendation of no action. It does not, by itself, become a malicious complaint. That is a separate question under section 14."
        }
      ]
    },
    {
      n: 8,
      short: "Malicious complaints",
      title: "Consequences of Malicious Complaints",
      objective: "This topic is about section 14, on a malicious complaint, a complaint known to be false, and a forged or misleading document. It explains the difference between a complaint that is not proved and a complaint found to have been made with malicious intent.",
      lookAt: ["Malice is a separate finding", "Lack of proof is not enough", "Action only after inquiry"],
      discuss: "Section 14 is a narrow power. It applies where the Internal Committee concludes that the allegation was malicious, or that the complaint was made knowing it to be false, or that a forged or misleading document was produced. The section then says, in terms, that a mere inability to substantiate the complaint, or to provide adequate proof, need not attract action against her. Malicious intent has to be established after an inquiry before any action is recommended.",
      cards: [
        { h: "What section 14 requires", p: "Action against her can be recommended only for a conclusion section 14 names: the allegation was malicious, the complaint was made knowing it to be false, or a forged or misleading document was produced. A strong denial at the first hearing is his defence, not that conclusion. Malice is established by the inquiry. It is not assumed because the complaint is inconvenient." },
        { h: "When the proof falls short", p: "The proviso to section 14 says that a mere inability to substantiate a complaint, or to provide adequate proof, need not attract action against the complainant. Complaints often fail because the conduct was private, messages were deleted, or a witness will not speak. Those are failures of proof. The Act tells the Committee that a failure of proof need not be treated as a malicious complaint." },
        { h: "Inquiry before any action", p: "Section 14 requires malicious intent to be established after an inquiry, in the manner prescribed, before any action is recommended. That inquiry into malice is its own inquiry. It is not a remark made when her complaint is first received, and it is not a reason to refuse to register what she has filed. Only after that inquiry may the Committee recommend action to the employer." },
        { h: "A witness who misleads", p: "Section 14(2) is a separate provision. During the inquiry a witness may give false evidence, or produce a forged or misleading document. The Committee may then recommend action against that witness, under the service rules or in the manner prescribed. This consequence is about the witness. An imperfect memory, honestly described, is a different matter from evidence the witness knows to be false." }
      ],
      leftTitle: "Can attract section 14",
      left: [
        "She produces a chat screenshot that the inquiry finds she forged",
        "Evidence shows she knew the allegation was false and filed it to force a transfer",
        "A witness admits he invented a scene and sticks to the invention",
        "A document is misleading on purpose, and the inquiry establishes that purpose"
      ],
      rightTitle: "Does not, by itself, attract section 14",
      right: [
        "There was no eyewitness because the incident was in a closed room",
        "Her phone was changed and the messages cannot be recovered",
        "The IC believes her but finds the proof short of its standard",
        "She is upset, angry, or slow to remember a date"
      ],
      caseTitle: "Not proved, and a demand for punishment",
      caseFacts: "She complains of sexual messages from her manager. By the time of the inquiry her phone has been replaced and the messages are gone. There is no witness. The IC concludes that the allegation is not proved. Her manager writes to the CEO that she must be dismissed for a false case, and he calls her a liar in a leadership meeting.",
      caseRead: [
        "Section 13(2) stops at \u201cno action\u201d when the allegation is not proved",
        "Section 14 needs a further conclusion of malice, knowledge of falsity, or a forged or misleading document",
        "The proviso was written for this exact confusion. Lack of proof is not malice"
      ],
      caseClose: "Illustration. Punishing her because the case was not proved would invert the proviso. Malice, if anyone alleges it, itself requires an inquiry before a recommendation. Naming her in a leadership meeting also breaches confidentiality.",
      lawAnchor: "Section 14, including both provisos. Inability to substantiate a complaint need not attract action. Malice must be established after an inquiry.",
      questions: [
        {
          q: "A complaint is not proved because there is no witness. What follows?",
          options: ["She is presumed to have lied", "Lack of proof does not, by itself, make the complaint malicious", "Section 14 applies automatically", "The IC must recommend her dismissal"],
          a: 1,
          why: "The proviso to section 14(1) says a mere inability to substantiate a complaint, or to provide adequate proof, need not attract action under that section."
        },
        {
          q: "When can the IC recommend action under section 14?",
          options: ["As soon as he denies the allegation", "Only after inquiry finds malice, known falsity, or forgery", "Whenever the complaint is over a month old", "If the respondent is senior to her"],
          a: 1,
          why: "The second proviso requires malicious intent to be established after an inquiry, before any action is recommended."
        },
        {
          q: "Which fact pattern can fall under section 14?",
          options: ["She cannot recover deleted genuine messages", "Inquiry finds a forged screenshot and that she knew it was false", "She cries while giving evidence", "Two dates in her account do not match"],
          a: 1,
          why: "A forged document, and knowledge that the complaint is false, are what section 14 is aimed at. Gaps in genuine proof are not."
        },
        {
          q: "A witness invents a scene. Who can section 14(2) apply to?",
          options: ["Only the complainant", "The witness who gave false evidence or produced a forged document", "Every person who sat near them", "The Presiding Officer"],
          a: 1,
          why: "Section 14(2) is about a witness who gives false evidence or produces a forged or misleading document. It is not a shortcut against the complainant."
        },
        {
          q: "At the first hearing the respondent says, \u201cThis is malicious.\u201d What is the right response?",
          options: ["Close her complaint immediately", "Continue a fair inquiry. Malice is not assumed at the start", "Publish both names and invite views", "Transfer her out the same day as a penalty"],
          a: 1,
          why: "A label is not a finding. The IC inquires into the complaint. A section 14 inquiry into malice is a later and separate conclusion, not the opening presumption."
        }
      ]
    },
    {
      n: 9,
      short: "Confidentiality",
      title: "Importance of Confidentiality",
      objective: "This topic is about the duty of confidentiality in section 16. It covers the identity of the woman, the respondent, and the witnesses, the contents of the complaint, the proceedings, the recommendations, and the action taken, and the one situation in which an outcome may be shared.",
      lookAt: ["What stays confidential", "The narrow exception", "Consequences of a leak"],
      discuss: "Section 16 requires that the contents of the complaint, the identity and addresses of the woman, the respondent and the witnesses, the conciliation and the inquiry, the recommendations, and the action taken are not published or made known to the public, the press, or the media. The section applies notwithstanding the Right to Information Act. People come forward when they can trust that the file will not become canteen talk or a message in a management group.",
      cards: [
        { h: "What stays inside the process", p: "The protected material is wide. It includes what the complaint says, who she is, who he is, who the witnesses are, and where any of them live. It includes what was said in conciliation and in the inquiry, what the Committee recommended, and what the employer did. Sharing any of that with people outside the process, including on a workplace chat or a social-media post, is the publication the section is written to prevent." },
        { h: "Who may still be told", p: "The respondent has to be told the case he has to meet. Giving him the complaint, and hearing both parties, is fairness in the inquiry. Telling the floor, the client, or a journalists' group is a different act. She may also go to the Committee, the police, a doctor, or a person who is helping her to file. Confidentiality binds the people entrusted with the process. It leaves those routes of help open to her." },
        { h: "When an outcome may be shared", p: "Section 16 has one exception. Information on the justice secured may be disseminated, provided the dissemination does not disclose her name, address, or identity, or any other particular that could identify her or the witnesses. A town-hall announcement that names her, or a mail that describes facts from which colleagues can tell who she is, falls outside that exception." },
        { h: "What a breach can cost", p: "Section 17 provides a penalty in accordance with the service rules, or in the manner prescribed. Rule 12 provides that the employer shall recover Rs 5,000 as a penalty from a person who contravenes section 16, subject to section 17. A member of the Internal Committee who breaches section 16 is liable to be removed under section 4(5). Those consequences sit on top of the harm a leak does to her and to the process." }
      ],
      leftTitle: "Keep this confidential",
      left: [
        "Her name, his name, witness names, and their addresses",
        "What the complaint says, and what happens in the hearings",
        "The IC\u2019s recommendation and the action the employer takes",
        "Screenshots circulated \u201conly inside management\u201d"
      ],
      rightTitle: "This is still allowed",
      right: [
        "Telling the respondent the case he has to meet, so the inquiry is fair",
        "She approaches the IC, a doctor, the police, or the person helping her file",
        "A later statement that justice was secured, with no identifying detail",
        "The IC taking and storing the record it needs to do its work"
      ],
      caseTitle: "The management group",
      caseFacts: "An HR manager receives the complaint. He forwards the PDF, with her name and the respondent\u2019s name, to a WhatsApp group of eight managers \u201cso that everyone is careful\u201d. One manager tells his team \u201ca case has been filed by A against B\u201d. By evening the names are in a client office.",
      caseRead: [
        "Identity and the contents of the complaint are exactly what section 16 protects",
        "A management group is not a private exception. Need-to-know is very small",
        "The HR manager was entrusted with the complaint, so section 17 and Rule 12 are in play"
      ],
      caseClose: "Illustration. This is a breach. The respondent must be given the complaint so he can respond. The rest of the building must not. An IC member who does this can also be removed under section 4(5).",
      lawAnchor: "Section 16 and section 17, read with Rule 12. Section 16 begins with a non obstante clause over the RTI Act, 2005.",
      questions: [
        {
          q: "Which information does section 16 protect from publicity?",
          options: ["Only the final punishment", "Identities, complaint, inquiry, recommendation, and action taken", "Only the external member\u2019s fees", "Only documents marked \u201csecret\u201d by HR"],
          a: 1,
          why: "Section 16 lists the complaint, identities and addresses, conciliation and inquiry information, recommendations, and the action taken."
        },
        {
          q: "The office wants to announce that a case ended. What may be shared?",
          options: ["Her name, as an example of courage", "That justice was secured, with nothing that could identify her", "The full report on the intranet", "The respondent\u2019s photo and the findings"],
          a: 1,
          why: "The proviso allows dissemination of the fact that justice was secured, without name, address, identity, or any particular that could identify the aggrieved woman or the witnesses."
        },
        {
          q: "Sending named complaint papers to a managers\u2019 WhatsApp group is:",
          options: ["Good coordination", "A breach of section 16", "Required by the RTI Act", "Harmless if the group is unofficial"],
          a: 1,
          why: "Making identities and the complaint known beyond the people who must handle the case is prohibited. An unofficial group makes the breach worse, not better."
        },
        {
          q: "Why is the respondent given the complaint?",
          options: ["So he can discuss it with clients", "So he can answer the case. That is fairness, not publicity", "So he can negotiate a payment to withdraw it", "The Act requires him to publish a reply"],
          a: 1,
          why: "A fair inquiry means he is told the allegation and gets a chance to respond. Copying people who have no role in the inquiry is a different act."
        },
        {
          q: "An IC member discloses the inquiry to the press. What can follow?",
          options: ["Nothing, because the member is a volunteer", "Removal under section 4(5), plus a penalty under the rules", "A reward for transparency", "Automatic dismissal of the complaint"],
          a: 1,
          why: "Contravention of section 16 is a ground of removal. Section 17 and Rule 12 deal with the penalty, including recovery of \u20b95,000 where that rule applies."
        }
      ]
    },
    {
      n: 10,
      short: "Bystander intervention",
      title: "Bystander Intervention",
      objective: "This topic is about what a colleague can do on seeing or learning of sexual harassment. It covers safe ways to interrupt what is happening, how to support her afterwards, and how to place a factual account with the Internal Committee, while the decision to complain remains hers.",
      lookAt: ["Safe ways to step in", "What not to do", "Her decision to complain"],
      discuss: "Many incidents are seen by someone other than the two people involved. That person is not the Internal Committee and is not the police. There are ways to interrupt what is happening, to support her afterwards, and to place a factual note where the Committee can use it. Investigating on your own, spreading screenshots, pressing her to file, or promising a result, makes the matter worse. The decision to complain remains hers.",
      cards: [
        { h: "Speak, when it is safe", p: "A direct response is a short, calm line about the behaviour, such as: that comment is not acceptable, please stop. Use it when you judge that speaking will not put her, or you, at greater risk. In front of a senior person who controls the work of both of you, a public challenge can sometimes increase the harm. Safety is part of the judgement. A private check-in, and a word to the Committee, can follow." },
        { h: "Interrupt the moment", p: "A distraction stops the conduct without a confrontation. Call her into a genuine work conversation, bring the meeting back to the agenda, or create a reason for her to leave the room with you. The aim is to end the moment. It is not to embarrass anyone or to stage a scene. Afterwards you can ask her, in private, whether she is all right and whether she wants to know how to reach the Committee." },
        { h: "Tell the Committee, write it", p: "Taking what you saw to a member of the Internal Committee is different from running your own inquiry. Write down the date, the time, the place, the words used, and who was present, while the memory is fresh, and keep that note for the inquiry. Do not post it, and do not forward screenshots around the team. A secret recording of a private act can itself be voyeurism. A contemporaneous note is the safer record." },
        { h: "Leave the decision with her", p: "A later conversation is private. Ask whether she is all right, tell her that an Internal Committee exists, and tell her how to reach it. You may offer to go with her if she wants that. The choice to file, and the choice of when to file, stays with her. Pressing her to complain, or saying you will complain whether she agrees or not, takes that choice away. You also cannot promise a particular result." }
      ],
      leftTitle: "A responsible response",
      left: [
        "Interrupt a sexual joke without making her the spectacle",
        "Tell the IC what you saw, and then stop talking about it",
        "Keep your own note of date, time, and words",
        "Ask her, in private, whether she wants information about the IC"
      ],
      rightTitle: "Makes matters worse",
      right: [
        "Laughing, starring the message, or adding an emoji",
        "Forwarding the screenshot to another group",
        "Confronting him in a way that exposes her without her consent",
        "Secretly recording her, or him, in a private space"
      ],
      caseTitle: "The chat she is not in",
      caseFacts: "A colleague posts a sexual comment about a woman who is on leave. Others add emojis. One person forwards the screenshot to a friends\u2019 group. Another person messages an IC member that the chat exists, does not add a comment in the group, and later asks the woman, privately, if she wants the IC\u2019s contact.",
      caseRead: [
        "The post can itself be sexual harassment, even though she was not in the chat",
        "Forwarding the screenshot spreads the harm",
        "Telling the IC, and then letting her decide, is the responsible line"
      ],
      caseClose: "Illustration. Bystander duty is not vigilante duty. The useful acts are to stop the spread, preserve what you saw, and use the IC. The harmful act is to entertain the group.",
      lawAnchor: "A bystander who is later a witness must tell the truth. False evidence can itself lead to a recommendation under section 14(2).",
      questions: [
        {
          q: "You see a sexual comment in a team chat. Which response is the most responsible?",
          options: ["Add a laughing emoji so you are not the odd one out", "Forward it to another group as evidence", "Avoid adding to it, keep a record, and inform the IC", "Reply with a worse joke to shame the sender"],
          a: 2,
          why: "Do not join the conduct, do not spread it, and get it to the IC. A private record of what you saw may matter later."
        },
        {
          q: "She says she does not want to complain today. What should you do?",
          options: ["File in her name anyway, to be safe", "Threaten to resign unless she files", "Leave the decision with her, and tell her the IC route remains", "Announce her decision in the team meeting"],
          a: 2,
          why: "The complaint is hers. Tell her the route exists. Pressuring her, or filing against her wishes, takes the Act\u2019s design away from her."
        },
        {
          q: "Which act can itself become an offence, rather than help?",
          options: ["Writing down the date and the words you heard", "Asking an IC member how to share information", "Secretly filming her in a restroom to \u201ccatch\u201d someone", "Interrupting a meeting to end an uncomfortable moment"],
          a: 2,
          why: "Secret recording of a private act can be voyeurism under the criminal law. Help does not require, and does not excuse, that."
        },
        {
          q: "A direct intervention is appropriate when:",
          options: ["It is safe, and it stops the behaviour without adding risk", "You want the largest possible audience", "You are angry and want a scene", "You have not thought about what happens to her next"],
          a: 0,
          why: "Direct words can stop conduct. They are the wrong tool if they will escalate risk to her or to you. Distraction or reporting may be safer."
        },
        {
          q: "You are later called as a witness. What is your duty?",
          options: ["To support whoever you like, even if you invent a detail", "To tell the truth about what you saw and heard", "To refuse because bystanders are exempt", "To discuss your evidence in the team chat first"],
          a: 1,
          why: "A witness tells the truth. Invented evidence can lead to a recommendation under section 14(2), and discussing it publicly can breach confidentiality."
        }
      ]
    },
    {
      n: 11,
      short: "Vision, values, mission",
      title: "Organisational Vision, Values and Mission",
      objective: "This topic is about the link between a safe workplace and the vision, values, and mission an organisation says it stands for. The words used here are a model. Replace them with your organisation's own vision, values, and mission, and then test daily conduct against those words.",
      lookAt: ["Words that need conduct", "A model commitment", "What undermines the words"],
      discuss: "A vision, a set of values, and a mission are credible when a woman can do her work without unwelcome sexual conduct, and can use the complaint process without being punished for using it. The model commitment in this topic is respect, fairness, the courage to speak, confidentiality, and accountability. It is a model because this course is written for any organisation. Put your own words in its place, and ask whether the working day matches them.",
      cards: [
        { h: "A vision people can test", p: "A usable vision for this subject is concrete enough to test. One model is a workplace where every woman can work with equality, dignity, and safety. People can ask whether meetings, travel, chats, and appraisals look like that sentence. Where the daily experience contradicts it, the work is to change the experience. Printing the sentence in a larger font does not do that work." },
        { h: "Values that show in conduct", p: "The model values are respect, fairness, courage to speak, confidentiality, and accountability. Respect is how colleagues speak about one another's bodies and private lives. Fairness is an inquiry in which both sides are heard. Courage to speak is a path a junior employee can actually use. Confidentiality is section 16 observed in practice. Accountability is a recommendation the employer carries out." },
        { h: "A mission with a method", p: "A model mission is to prevent sexual harassment, to respond promptly and fairly when it is raised, and to support the person who comes forward. The method is already in the Act: the policy, the Internal Committee, the time limits, interim protection, and training of this kind. Section 19 asks the employer to organise workshops and awareness programmes at regular intervals. This course is one way of doing that." },
        { h: "Words beside the working week", p: "Take a practice of the week and set it beside the values. A group chat that rates colleagues, a manager who asks the Committee for her name, or a transfer imposed on her alone so that things can cool, can be read against respect, confidentiality, and fairness. Where the practice cannot be defended beside the values, the practice is what changes. The values stay in place." }
      ],
      leftTitle: "Values in action",
      left: [
        "Leaders attend the same training and follow the same rules",
        "The IC\u2019s constitution and the penal consequences are displayed, as section 19 requires",
        "A complaint is routed to the IC, not managed quietly to protect a client",
        "People who retaliate, or who leak names, are dealt with"
      ],
      rightTitle: "Values in name only",
      right: [
        "\u201cWe are a family, so nobody complains\u201d",
        "\u201cResults first. Conduct can wait until after the quarter\u201d",
        "A star performer is shielded because the revenue is his",
        "The policy is a file. Nobody can name a single IC member"
      ],
      caseTitle: "The family story",
      caseFacts: "The company\u2019s value card says \u201cRespect\u201d and \u201cOne family\u201d. At a closing dinner a senior tells a new joiner that family members do not \u201cmake a legal issue\u201d out of jokes, and that people who complain do not last. The jokes that evening are about her body. Nobody interrupts.",
      caseRead: [
        "A value of respect is being used to stop her using the law",
        "The jokes are the conduct the value was supposed to prevent",
        "The senior\u2019s warning about people who complain is a threat, and it chills every person at the table"
      ],
      caseClose: "Illustration. Culture eats a poster. The organisation\u2019s mission on dignity is real only if someone at that table stops the conduct and if she can reach the IC without losing her place.",
      lawAnchor: "Section 19 requires a safe workplace, display of penal consequences and of the IC order, and regular sensitisation. The values have to match those duties.",
      questions: [
        {
          q: "When is a vision statement on safety real?",
          options: ["When it is printed on a card", "When conduct, the IC, and the policy match the sentence", "When revenue targets are met", "When nobody has ever complained"],
          a: 1,
          why: "A vision is credible when people can work without harassment and can use the redressal path. Silence can also mean people are afraid."
        },
        {
          q: "A senior says, \u201cWe are a family. Do not take a joke to the IC.\u201d What is the better view?",
          options: ["Family culture overrides the Act", "No value statement can take away her right to complain", "The IC can sit only if the senior agrees", "Jokes are outside the values"],
          a: 1,
          why: "Organisational language cannot contract out of the Act. Using \u201cfamily\u201d to block a complaint contradicts a value of respect."
        },
        {
          q: "A high performer is shielded after a sexual complaint, to save a deal. Which value fails?",
          options: ["Accountability. The rules have to apply to him too", "Speed. The deal should always win", "Secrecy. His name should go on the intranet", "Seniority. Seniors are exempt"],
          a: 0,
          why: "Accountability means the redressal path does not bend for revenue or rank. Shielding him tells the rest of the workplace that the policy is decorative."
        },
        {
          q: "What should you do with the model vision in this topic?",
          options: ["Ignore it. Culture is outside POSH", "Use your own vision and values, and test them against conduct", "Read it once and delete the IC", "Use it only for the external member"],
          a: 1,
          why: "The model is a teaching device. The organisation should state its own words, and then check that meetings, travel, chats, and appraisals live up to them."
        },
        {
          q: "Nobody can name an IC member, and the notice board is blank. What does that say?",
          options: ["The workplace is definitely free of harassment", "Not operational. Section 19 requires display and awareness", "Training can replace the committee", "The Local Committee then becomes optional decoration"],
          a: 1,
          why: "Section 19 requires the order constituting the IC, and the penal consequences, to be displayed, and it requires regular sensitisation. An invisible committee cannot serve the mission."
        }
      ]
    },
    {
      n: 12,
      short: "Purpose of the Act and policy",
      title: "Purpose of the POSH Act and Organisational Policy",
      objective: "This topic is about why the Act exists, and about what an organisational policy is meant to do beside it. The law requires prevention, prohibition, and redressal. The policy tells people how this workplace will meet that duty. It cannot take away a right the Act gives.",
      lookAt: ["Prevention, prohibition, redressal", "Where the Act came from", "What a policy may and may not do"],
      discuss: "The long title states the purpose: protection against sexual harassment of women at the workplace, and the prevention and redressal of complaints. The preamble ties that purpose to equality, to life and liberty with dignity, and to the right to practise a profession or carry on an occupation in a safe environment. The policy makes those duties known, names the Committee, and sets a standard for everyday conduct. It may ask more of daily behaviour. It cannot cut down a right the Act confers.",
      cards: [
        { h: "Rights the preamble names", p: "The preamble records that sexual harassment violates equality under Articles 14 and 15, the right to life and to live with dignity under Article 21, and the right to practise any profession, or to carry on any occupation, trade, or business, in a safe environment. These are the reasons the Act gives for existing. A complaint mechanism is part of the right to work. It is not an optional staff-welfare scheme." },
        { h: "From Vishaka to this Act", p: "In Vishaka v. State of Rajasthan (1997) the Supreme Court laid down guidelines on workplace sexual harassment and treated them as binding until Parliament acted. The 2013 Act gives that protection a statutory form. It defines the conduct, creates the Internal Committee and the Local Committee, fixes time limits, and places duties on the employer. The judgment explains the origin. The Act is what the Committee applies." },
        { h: "Prevent, prohibit, redress", p: "Prevention means stopping the conduct before a complaint, through the policy, through training, and through the way managers meet the first sign of it. Prohibition means it is forbidden whatever the person's rank or value to the business. Redressal means a written complaint, a fair inquiry, a recommendation, and action by the employer within the time the Act sets. All three words are in the name of the law." },
        { h: "What the policy is for", p: "A usable policy states what is prohibited, names the Internal Committee, says how to reach it, and sets out the time limits. Section 19 requires the penal consequences, and the order constituting the Committee, to be displayed where people will see them. The policy may hold daily conduct to a higher standard. It cannot shorten her time to complain, or replace the Committee with a talk that never becomes an inquiry." }
      ],
      leftTitle: "The Act and the policy do this",
      left: [
        "Prohibit sexual harassment of women at the workplace",
        "Require an IC, an inquiry, and action on recommendations",
        "Tell every employee where to go and what will be kept confidential",
        "Commit the organisation to workshops and to treating sexual harassment as misconduct"
      ],
      rightTitle: "They do not do this",
      right: [
        "They do not replace a criminal case if she chooses to file one",
        "They do not let a policy give her less than the Act gives her",
        "They do not make a payment the basis of conciliation",
        "They do not protect a respondent from a fair inquiry because he is senior"
      ],
      caseTitle: "The policy that shrinks the Act",
      caseFacts: "A draft policy says complaints must be filed within fifteen days, that the IC will not look at anything on a personal phone, and that conciliation will \u201cnormally be closed by a goodwill payment\u201d. It also says awareness sessions are optional for senior staff.",
      caseRead: [
        "The statutory filing period is three months, extendable by up to three. A policy cannot shorten it",
        "A money settlement cannot be the basis of conciliation",
        "Section 19(c) requires sensitisation at regular intervals. Seniors are not exempt"
      ],
      caseClose: "Illustration. A policy is how the organisation implements the Act. It is not a private statute. Where the draft is narrower than the Act, the Act prevails, and the draft should be corrected.",
      lawAnchor: "Preamble and long title of the Act. Vishaka v. State of Rajasthan (1997). Employer duties are in section 19.",
      questions: [
        {
          q: "What are the Act\u2019s stated purposes?",
          options: ["Revenue protection and brand control", "Protection, prevention, prohibition, and redressal", "Only punishment after a criminal trial", "Replacing all other workplace rules"],
          a: 1,
          why: "The long title seeks protection against sexual harassment and the prevention and redressal of complaints. Prohibition is the rule in section 3."
        },
        {
          q: "What did Vishaka do, in 1997?",
          options: ["It repealed the Act of 2013", "It laid down guidelines which the 2013 Act put into statute", "It held that only physical assault counts", "It abolished Internal Committees"],
          a: 1,
          why: "Vishaka v. State of Rajasthan supplied binding guidelines at a time when there was no dedicated statute. The 2013 Act is the statutory framework that followed."
        },
        {
          q: "A policy sets a seven-day limit to complain. What is the right view?",
          options: ["The policy prevails because she signed it", "The three-month period and its extension cannot be cut by policy", "Time limits are only for the Local Committee", "Seven days is what section 9 says"],
          a: 1,
          why: "The policy can explain the Act and can set a higher behavioural standard. It cannot take away a period, or a protection, that the Act confers."
        },
        {
          q: "Why does this training exist as an organisational duty, not only as a good idea?",
          options: ["Section 19(c) requires awareness programmes at regular intervals", "The Rules ban written policies", "Only the external member needs to know the law", "Training is compulsory only after a complaint"],
          a: 0,
          why: "Sensitising employees, and orienting IC members, is an employer duty under section 19(c), read with the Rules."
        },
        {
          q: "Does a POSH inquiry replace a criminal complaint?",
          options: ["Yes. She must choose only one, at the start", "No. She may also go to the police, and the employer must assist", "Yes, if the IC has already been constituted", "Criminal law was repealed by the Act"],
          a: 1,
          why: "The Act is a workplace redressal law. Section 19 requires assistance if she chooses to file a complaint under criminal law. One path does not cancel the other."
        }
      ]
    },
    {
      n: 13,
      short: "Rights and duties",
      title: "Rights and Duties of Employees",
      objective: "This topic is about what an employee may expect from the process, and what the process may expect in return. It covers the rights of an aggrieved woman, the employer's duty to keep the workplace safe, and the duties of every employee, including a person called as a witness.",
      lookAt: ["Rights of an aggrieved woman", "Duties of every employee", "Witnesses and retaliation"],
      discuss: "An aggrieved woman is entitled to a fair and confidential process, from the written complaint through to the findings and, where she chooses, an appeal. Every person called into that process owes it an honest account, and owes the people in it freedom from gossip. The employer owes a safe workplace, including in relation to people who come into contact with it and are not on the rolls. A detriment connected with the sexual harassment can itself form part of the case under section 3(2).",
      cards: [
        { h: "What she may expect", p: "She may file a written complaint, and she may ask for help to put it in writing. She decides whether to request conciliation. She may ask in writing for interim relief while the inquiry is pending, such as a transfer of either person or leave of up to three months. She is heard, the findings are shared with her, and she may appeal within ninety days. If she chooses a criminal remedy, section 19 requires the employer to assist her." },
        { h: "A workplace kept safe", p: "Section 3 prohibits sexual harassment of a woman at any workplace. Section 19 requires a safe working environment, including from people she meets there who are not on the rolls. Sexual harassment must be treated as misconduct under the service rules. Where the respondent is not an employee, the employer causes action under the criminal law if she so desires." },
        { h: "What a witness owes", p: "A witness who is called attends, tells the truth as he or she knows it, and keeps the matter confidential under section 16. An account should be the witness's own memory, rather than a version shaped to protect a friend, a manager, or the reputation of the team. Section 14(2) allows action where a witness gives false evidence or produces a forged or misleading document. An incomplete memory, honestly described, is proper evidence." },
        { h: "Freedom from retaliation", p: "The Act has no section with the heading retaliation. Section 3(2) treats detrimental treatment, and a threat to her job, as circumstances that may amount to sexual harassment when they are connected with it. Punishing her, or a witness, for using the process defeats that mechanism. A transfer, a poor rating, or isolation because she complained can go before the Committee as part of the case." }
      ],
      leftTitle: "You may",
      left: [
        "Ask the IC to help you put a complaint in writing",
        "Request interim protection in writing while the inquiry is pending",
        "Ask for the findings, and appeal within ninety days if you are aggrieved by the recommendation",
        "Seek a criminal remedy as well, and ask the employer for help"
      ],
      rightTitle: "You must",
      right: [
        "Not subject a woman colleague to unwelcome sexual conduct",
        "Tell the truth if the IC calls you, and not produce a misleading document",
        "Keep names and proceedings off chats, social media, and the press",
        "Not threaten, isolate, or \u201cmanage out\u201d a person because they complained or gave evidence"
      ],
      caseTitle: "The witness who goes quiet",
      caseFacts: "Two colleagues saw a manager corner a woman employee and heard the words he used. After she complains, he tells both of them that their confirmations are \u201cdue next month\u201d and that \u201cmemory is a flexible thing.\u201d One of them then tells the IC he \u201csaw nothing\u201d. The other stays away from her in the cafeteria and tells the team she is \u201ctrouble\u201d.",
      caseRead: [
        "A witness owes the inquiry the truth. A knowingly false account can fall under section 14(2)",
        "The hint about confirmation is pressure, and it is a form of retaliation",
        "Isolating her and labelling her is a further harm, and it can be humiliating treatment connected with the complaint"
      ],
      caseClose: "Illustration. Employees do not have a duty to protect a manager from a true account. They do have a duty not to invent one, and a duty not to punish her for having spoken.",
      lawAnchor: "Sections 3, 9, 12, 13, 14, 18 and 19. The appeal period is ninety days from the recommendations.",
      questions: [
        {
          q: "She cannot write the complaint herself. What is the IC\u2019s duty?",
          options: ["To refuse the complaint", "To give reasonable assistance to put it in writing", "To insist on a lawyer before anything is written", "To wait until a relative publishes it"],
          a: 1,
          why: "Section 9 requires the Presiding Officer or a member to render all reasonable assistance to her to make the complaint in writing."
        },
        {
          q: "Which of these is a right during the inquiry?",
          options: ["To edit the respondent\u2019s reply", "To request interim relief in writing, which the IC may recommend", "To have the press in the room", "To decide the final punishment herself"],
          a: 1,
          why: "Section 12: on her written request, the IC may recommend interim measures. The employer implements a recommendation. She does not impose the final penalty."
        },
        {
          q: "What is a witness\u2019s duty?",
          options: ["To support the more senior person", "To tell the truth and keep the matter confidential", "To refuse to attend if the story is unpleasant", "To discuss the evidence with the team first"],
          a: 1,
          why: "The inquiry depends on honest evidence. False evidence can lead to a recommendation under section 14(2). Public discussion breaks section 16."
        },
        {
          q: "A manager drops a witness from a project because the witness gave evidence. How should that be seen?",
          options: ["As ordinary team design", "As retaliation, and it may be a detriment connected with the case", "As a duty under section 16", "As conciliation"],
          a: 1,
          why: "Punishing participation undermines redressal. Detrimental treatment connected with the sexual harassment is within the circumstances section 3(2) describes."
        },
        {
          q: "How long does a person aggrieved by the recommendation have to appeal?",
          options: ["Seven days", "Thirty days", "Ninety days", "Three years"],
          a: 2,
          why: "Section 18(2): the appeal is to be preferred within ninety days of the recommendations."
        }
      ]
    },
    {
      n: 14,
      short: "Outside the office",
      title: "Harassment Outside the Physical Workplace",
      objective: "This topic is about sexual harassment and related harm away from the office floor. It covers places the work takes her, stalking, voyeurism, recording, and the sharing of intimate images. She may use the Internal Committee and she may go to the police. Each route stands on its own.",
      lookAt: ["The extended workplace", "Criminal law alongside POSH", "Where to report"],
      discuss: "Section 2(o) extends the workplace to any place visited arising out of or during employment, including transport the employer provides. A client office, an offsite, a hotel on a work trip, and the journey can be the workplace. Stalking, voyeurism, and the sharing of intimate images may be sexual harassment where there is a work connection, and they may also be criminal offences. Using the Committee does not cancel the police, and going to the police does not cancel the Committee.",
      cards: [
        { h: "Places the work takes her", p: "The extended workplace includes a client's office, a site, a conference, a training venue, an offsite, and a hotel booked because of the work. It includes the journey where the employer provides the transport. Conduct in a car between the office and a client, or at a team dinner that is part of the work trip, can be examined under the Act. The questions are the connection with employment, and the definition of sexual harassment." },
        { h: "Stalking after a clear no", p: "Section 78 of the Bharatiya Nyaya Sanhita deals with stalking. One form is following a woman and contacting her, or attempting to contact her, repeatedly, to foster personal interaction, despite a clear indication of disinterest. Another is monitoring her use of the internet, email, or other electronic communication. Where the person is connected with her work, the Internal Committee can hear the conduct as well as the police." },
        { h: "Voyeurism and shared images", p: "Section 77 of the Bharatiya Nyaya Sanhita covers voyeurism: watching or capturing a woman in a private act where she would expect privacy, and sharing that image. Sharing is its own offence, including where she agreed to the capture and did not agree to the sharing. Sections 66E, 67 and 67A of the Information Technology Act deal with capturing, transmitting, and publishing such images." },
        { h: "Committee and the police", p: "She may complain to the Internal Committee, and she may go to the police. Section 19 requires the employer to help if she files a criminal complaint, and to set criminal action in motion where he is not an employee, if she wishes. SHe-Box, at shebox.wcd.gov.in, forwards a complaint to the Committee she indicates. The portal does not conduct the inquiry." }
      ],
      leftTitle: "Can be reported",
      left: [
        "A colleague follows her home after a shift despite being told to stop",
        "Someone at work circulates an intimate image, or a morphed image, of her",
        "A manager on a work trip asks her to come to his hotel room for a sexual reason",
        "A colleague monitors her social media and then turns up wherever she is"
      ],
      rightTitle: "May not, by itself",
      right: [
        "One professional message about a role, with no sexual content and no repeat after a no",
        "A client dinner that is ordinary hosting, with no sexual conduct",
        "A fleet log used for vehicle safety under a known policy, and used only for that",
        "A work call placed to her official number about a live incident"
      ],
      caseTitle: "The trip and the photograph",
      caseFacts: "On an official trip a colleague takes a photo of a woman employee changing in the reflection of a hotel mirror, without her knowledge. Back at the office he shares it in a small group with a sexual caption. He also starts commenting on every personal photo she posts, and he messages her from new numbers after she blocks him.",
      caseRead: [
        "The trip is connected to employment, so the workplace definition can cover it",
        "The capture and the sharing fit voyeurism. The sharing is a separate harm",
        "The repeated contact after she has shown disinterest fits stalking. She can go to the IC and to the police"
      ],
      caseClose: "Illustration. This is not \u201coffsite, so private\u201d. It can be sexual harassment at the workplace and a criminal offence at the same time. Forwarding the image is not banter.",
      lawAnchor: "Section 2(o) and section 19. Bharatiya Nyaya Sanhita sections 75, 77 and 78. Penal Code references in the Act are now read with that code from 1 July 2024. IT Act sections 66E, 67 and 67A can apply to images.",
      questions: [
        {
          q: "Which place can be a workplace under the Act?",
          options: ["Only the desk she is assigned", "A client site visited for work, and transport for that journey", "Only a branch listed in the rental deed", "Only a place inside the city of posting"],
          a: 1,
          why: "Section 2(o)(v) includes any place visited arising out of or during employment, including transportation provided by the employer for that journey."
        },
        {
          q: "She blocks him. He messages from new numbers and comments on every personal post. What can this be?",
          options: ["Ordinary networking", "Stalking, where contact continues after she has shown disinterest", "Permitted monitoring, because the posts are visible", "A matter only for the IT team"],
          a: 1,
          why: "Section 78 of the Bharatiya Nyaya Sanhita covers repeated contact despite disinterest, and monitoring of electronic communication in the circumstances the section describes."
        },
        {
          q: "She agreed to a private photo. She did not agree to his sharing it. He shares it in a group.",
          options: ["Her earlier agreement covers any later sharing", "The dissemination itself can be voyeurism", "Sharing is fine if the group is small", "The Act covers capture and never covers sharing"],
          a: 1,
          why: "Under section 77 of the Bharatiya Nyaya Sanhita, dissemination is an offence where she consented to capture but not to dissemination."
        },
        {
          q: "She wants both an IC complaint and a police complaint. Can she?",
          options: ["No. The Act forbids the police route", "Yes. The employer must assist if she chooses a criminal complaint", "Only after the IC has acquitted someone", "Only through a newspaper"],
          a: 1,
          why: "Section 19(g) and (h) require assistance with a criminal complaint. The workplace inquiry and the criminal case are different routes."
        },
        {
          q: "Which message is least likely, by itself, to be harassment?",
          options: ["\u201cCome to my hotel room. This is not about the slides.\u201d", "A sexual caption under her photo in a team chat", "\u201cThe client has moved Friday\u2019s meeting to 3. Can you join?\u201d", "A stream of messages after she has said stop"],
          a: 2,
          why: "A single work message with no sexual content is not sexual harassment. The hotel-room line, the sexual caption, and the repeated contact after a no are in a different category."
        }
      ]
    },
    {
      n: 15,
      short: "Prevention and conduct",
      title: "Preventive Measures and Workplace Conduct",
      objective: "This topic is about prevention in ordinary working life. It covers how people speak to one another, where a professional boundary sits, how digital channels are used, and how the same standard applies when work is done from home or on a video call.",
      lookAt: ["Everyday do\u2019s and don\u2019ts", "Digital etiquette", "The home office"],
      discuss: "Prevention is the first purpose the Act names. Most harm is avoided by ordinary conduct, before anyone has to file. Keep sexual comment, images, and intimate questions out of work channels, and treat a clear no as the end of that subject. Working from home, and working on camera, follows the same standard as the office. The standard is about conduct. It is not a dress code, and it does not blame her clothes for his behaviour.",
      cards: [
        { h: "Speech and boundaries", p: "Comment on the work, the deadline, and the idea. Comments on a colleague's body, clothes, or sexual life belong outside a workplace conversation. Sexual or intimate subjects are kept out of a one-to-one meeting, a car, and a hotel lounge on a work trip. If she looks away, changes the subject, or says she is uncomfortable, stop. Raising it once more, and calling the second attempt a joke, is a further incident." },
        { h: "How digital channels are used", p: "Work chat, email, and video meetings are not places for sexual jokes, sexual images, or sexual nicknames. A colleague is free to decline a connection on a personal social network. Moving a work conversation into a private thread in order to make it sexual changes the channel and leaves the definition where it was. A message sent late at night is still a message from a colleague about her." },
        { h: "Conduct on a video call", p: "The camera is there for the meeting. Comments on her appearance, her room, or her clothes are unnecessary, and they can become sexually coloured remarks. Asking her to change clothes, to stand, or to tilt the camera for a reason that has nothing to do with the work is a misuse of the call. If she turns the camera off for a practical reason, such as bandwidth or a shared room, the meeting continues on the agenda." },
        { h: "The same standard at home", p: "A work call made from a kitchen or a bedroom is still a work call. The words and the images that are unacceptable in the office are unacceptable on that call. A recording of a call is not made, and not shared, for a personal purpose. Both people being physically outside the office does not move the conversation outside the workplace, where the call exists because of the employment." }
      ],
      leftTitle: "Do",
      left: [
        "Keep work channels professional, including after hours",
        "Accept a no, and do not reopen it as a joke",
        "Use a visible, professional setting for work meetings",
        "Know the IC members, and use the committee rather than a rumour"
      ],
      rightTitle: "Do not",
      right: [
        "Send pornography, sexual jokes, or comments on a colleague\u2019s body",
        "Treat a home background on video as an invitation to personal remarks",
        "Retaliate, or discuss a live complaint in a group",
        "Decide that a star performer, a client, or a festival is an exception"
      ],
      caseTitle: "The camera",
      caseFacts: "During a work-from-home call, after the client logs off, a manager says to a woman employee, \u201cTilt the camera down. I want to see more of you.\u201d She freezes. He messages her that evening, \u201cDo not make the next call awkward. It was light.\u201d A colleague who heard the line says nothing, then later laughs about it in another chat.",
      caseRead: [
        "The call is the workplace. The instruction is sexual, and her freeze is not welcome",
        "\u201cIt was light\u201d does not rewrite what he asked for",
        "The colleague\u2019s later laugh extends the hostile environment instead of stopping it"
      ],
      caseClose: "Illustration. Prevention here was simple. He does not say it. If he does, he stops, he does not follow up, and the colleague who heard it does not entertain it. She can take it to the IC.",
      lawAnchor: "Section 3 prohibits sexual harassment at any workplace. Section 19(a) and (c) require a safe environment and regular sensitisation. Display of penal consequences and of the IC\u2019s constitution belongs on a conspicuous notice, under section 19(b).",
      questions: [
        {
          q: "A sexual comment is made on a work call while both people are at home. What is the better view?",
          options: ["Home offices are outside the Act", "Home working does not remove the standard. The call is still work", "Only comments typed in email can qualify", "It counts only if a client heard it"],
          a: 1,
          why: "The duty travels with the work. A work call is not a private social space, and unwelcome sexual conduct on it can be sexual harassment."
        },
        {
          q: "She declines a drink after work and asks him not to ask again. He asks twice more \u201cas a joke\u201d.",
          options: ["A joke can reopen a no as often as he likes", "Repeating the invitation after a clear no can be unwelcome conduct", "Off-site invitations are never relevant", "Only the first no in a year counts"],
          a: 1,
          why: "A no is complete. Repeating a personal sexual or social pressure after that, including under the label of a joke, can be harassment."
        },
        {
          q: "Which instruction on a video call is a preventive \u201cdo not\u201d?",
          options: ["\u201cPlease share the sheet.\u201d", "\u201cTilt the camera down. I want to see more of you.\u201d", "\u201cShall we take a five-minute break?\u201d", "\u201cI cannot hear you. Can you repeat the number?\u201d"],
          a: 1,
          why: "Directions that sexualise the camera are unwelcome conduct, not meeting management. Ordinary instructions about the work are not."
        },
        {
          q: "Where should an employee be able to find the IC\u2019s constitution?",
          options: ["Nowhere. It is confidential under section 16", "At a conspicuous place, with the penal consequences of harassment", "Only in the external member\u2019s office", "Only after a complaint is filed"],
          a: 1,
          why: "Section 19(b) requires the employer to display, at a conspicuous place, the penal consequences of sexual harassment and the order constituting the Internal Committee."
        },
        {
          q: "Which habit actually prevents harm?",
          options: ["Keep sexual content off work channels, and stop if she is uneasy", "Send the joke only to people who might agree", "Wait to see if a junior will object", "Use a personal app so there is no record"],
          a: 0,
          why: "Prevention is upstream of the inquiry. Professional channels, and an immediate stop at discomfort, are the practical content of the duty."
        }
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) module.exports = COURSE;
if (typeof window !== "undefined") window.COURSE = COURSE;
