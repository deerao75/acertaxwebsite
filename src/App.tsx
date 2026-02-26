/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Scale, 
  Globe, 
  Briefcase, 
  FileText, 
  Building2, 
  Home as HomeIcon, 
  Users,
  Phone,
  Mail,
  ChevronRight,
  ArrowRight,
  Linkedin,
  Menu,
  X
} from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'team' | 'contact';

const servicesData = [
  {
    id: 'indirect-tax',
    title: "Indirect Taxation",
    description: "End-to-End GST compliance, advisory and litigation services. Compliance, advisory and litigation services on customs and other indirect taxes.",
    details: [
      "End-to-End GST compliance, advisory and litigation services",
      "Compliance, advisory and litigation services on customs and other indirect taxes",
      "Indirect Tax implication analysis and optimisation",
      "Indirect Tax risk mitigation",
      "Assessment, audit and representation services",
      "Supply chain analysis and improvement support for tax efficiency"
    ],
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'direct-tax',
    title: "Direct Taxation",
    description: "Tax advisory – both personal and corporate, including tax planning. Tax withholding advisory – both for domestic and international transactions.",
    details: [
      "Tax advisory – both personal and corporate, including tax planning",
      "Tax withholding advisory – both for domestic transactions and international transactions",
      "Tax advisory for payroll tax withholding and compliance",
      "Assistance in Tax Compliance including withholding tax returns, annual tax returns etc.",
      "Tax advisory for expatriate employee taxation and assistance in compliance",
      "Assistance in tax assessment including submissions and representation",
      "Assistance in tax appeals including representation up to Tribunal"
    ],
    icon: <Scale className="w-6 h-6" />
  },
  {
    id: 'transfer-pricing',
    title: "Transfer Pricing",
    description: "Benchmarking Study, Documentation, Certification, Consultancy, and Assessment before Transfer Pricing Officer.",
    details: [
      "Transfer Pricing Benchmarking Study",
      "Transfer Pricing Documentation – Study Report",
      "Transfer Pricing Certification",
      "Transfer Pricing Consultancy",
      "Transfer Pricing Assessment before Transfer Pricing Officer",
      "Litigation services before Dispute Resolution Panel & ITAT"
    ],
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 'legal-corporate',
    title: "Legal and Corporate Services",
    description: "Legal advisory on doing business in India, FDI, ODI, strategic business partnerships, and capital structuring.",
    details: [
      "Legal advisory and Consultancy on landscape of doing business in India/Foreign Direct Investment",
      "Advisory and consultancy on Overseas Direct Investment",
      "Strategic advisory on Industrial policy, business partnering through strategic investment/technology partnership",
      "Capital structuring, fundraising and advisory",
      "Review and finalization of commercial and collaboration agreements",
      "Corporate restructuring, acquisitions, and foreign trade policy compliance",
      "Review and risk mitigation advisory on bids and proposals",
      "Advisory on employment law and labour law compliance",
      "Review /Drafting of Employment agreements, compensation structuring",
      "Advisory on social welfare regulations, and employee welfare compliance",
      "Drafting and review of manufacturing, sub-contracting and service contracts",
      "Drafting and review of intercompany agreement",
      "Drafting and review of Consultancy and vendor contracts"
    ],
    icon: <Briefcase className="w-6 h-6" />
  },
  {
    id: 'regulatory',
    title: "Regulatory Services",
    description: "SEZ unit setup, renewals, exits, and ongoing compliance. Exchange control compliance under FEMA regulations.",
    details: [
      "SEZ unit setup, renewals, exits, and ongoing compliance and reporting",
      "Exchange control compliance under FEMA regulations",
      "Compliance in connection with international assignees",
      "Drafting/Review of employee hand book and corporate policies"
    ],
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 'corporate-law',
    title: "Corporate Law and Governance",
    description: "Setting up corporate entities, secretarial compliance, due diligence, ESOP management, and CSR compliance.",
    details: [
      "Setting up and formation of corporate entities",
      "Corporate secretarial compliance management",
      "Due diligence, corporate restructuring, compliance with regard to ESOP, and share issuance",
      "Designing CSR compliance processes",
      "Providing legal opinions, and ensuring corporate governance compliance",
      "Compliance review and health check and due diligence"
    ],
    icon: <Building2 className="w-6 h-6" />
  },
  {
    id: 'real-estate',
    title: "Comprehensive Real Estate Services",
    description: "Title scrutiny, due diligence, document validation, litigation, and transaction management.",
    details: [
      "Title scrutiny and due diligence",
      "Document validation",
      "Litigation and dispute resolution",
      "Drafting of deeds/Agreements/notices",
      "Assistance in computation of duty, cess and other cost",
      "Assistance for registration, obtaining title documents",
      "Paper publication",
      "Succession documentation",
      "Compliance documentation and filing under exchange control regulations",
      "Tax implication advisory for residents and non residents",
      "FEMA implications on real-estate investment and divestment",
      "Financial implication and management",
      "Property valuation",
      "Assistance in documentation for availing loan facility"
    ],
    icon: <HomeIcon className="w-6 h-6" />
  },
  {
    id: 'hr-services',
    title: "Human Resource Services",
    description: "Advisory on HR policies, system audits, staffing strategies, recruitment, and leadership development.",
    details: [
      "Advisory on HR policies, procedures and practices",
      "System diagnosis and audits",
      "Staffing strategies and deploying and managing HRMS tools",
      "Design and develop recruitment and staff selection system",
      "Developing and deploying performance evaluation system",
      "Designing training and development programs and calendar",
      "Develop and execute leadership programs",
      "Succession planning",
      "Exit management"
    ],
    icon: <Users className="w-6 h-6" />
  }
];

const teamData = [
  { 
    name: "Jayaram Hiregange", 
    role: "Partner – Indirect Taxation",
    image: "/input_file_3.png",
    linkedin: "https://www.linkedin.com/in/jayaram-hiregange-91b9211/",
    bio: "Jayaram holds a Bachelor’s degree in Law (LLB) from the University of Karnataka and a degree in Cost and Management Accountant (CMA) from The Institute of Cost & Management Accountants of India (ICMAI). Jayaram is a veteran in the field of indirect taxation with more than 25+ years of experience in Industry and Big 4 consulting firm. He has spent close to 13 years at PricewaterhouseCoopers (PwC) tax and advisory practice before leaving PwC to setup Acer Tax & Corporate Services LLP in the year 2014. \n\nJayaram over the years has advised numerous multi-national and Indian companies on a wide variety of matters covering GST, VAT, Service Tax, Excise and Customs. He also has rich experience in dealing with compliance, advisory and litigation matters across the indirect tax spectrum and has advised clients on critical and complex indirect tax matters. Further, he is specialized in supply-chain related advisory and structuring and has worked with various industries / sectors including IT / ITES, Manufacturing, Real-Estate, E-Commerce, SME’s, PSU’s etc. \n\nJayaram is a reputed name in the industry circles for his knowledge in indirect taxation and is a regular speaker on indirect tax matters at various industry forums."
  },
  { 
    name: "Vani S", 
    role: "Partner – Legal & Regulatory Services",
    image: "/input_file_4.png",
    linkedin: "https://www.linkedin.com/in/vanishri-shankaranarayana-2593475b/",
    bio: "Vani has over 20 plus years of professional experience in the field of Corporate Laws, Investments, Regulatory matters, Greenfield Projects, Labour Laws, Intellectual Property laws and Arbitration. She has extensive experience in advising clients in the areas of Mergers / Demergers and Reorganisation, Corporate Restructuring, Foreign Investment Consulting / Establishment of WoS, LLP, Joint Ventures, Corporate Law and other Regulatory matters.\n\nVani’s core area of expertise involves setting up Joint Ventures, Technical Collaborations, M&A, FDI, Real Estate, Secretarial Audit & Compliance, Regulatory Audit & Compliance, Legal Compliance Audit, Litigation Strategies including Arbitration, Due Diligence, drafting various Contracts, Advising on Corporate, Commercial, Labour & Industrial Laws, Employment Laws, Shareholders Agreements, Consortium Agreements, Bids & Tenders, Environmental Compliances etc. Her experience ranges across sectors – IT, Manufacturing, Automotive OEMs & Auto Components.\n\nVani has rolled out several training programs on Prevention of Sexual Harassment against Women at workplace etc. She has been involved in several workshops relating to foreign investments in India across sectors, and had represented numerous international companies in setting up industrial corridors and hand holding them on their legal requirements."
  },
  { 
    name: "Prakash Hegde", 
    role: "Principal Consultant – Direct Taxation",
    image: "/input_file_1.png",
    linkedin: "https://www.linkedin.com/in/prakash-hegde-3416a8b/",
    bio: "Prakash graduated in Commerce [B.Com.] and Law [LL.B. (Special)] from Karnataka University. He was a University topper both in B.Com. (2nd Rank) and LL.B (1st Rank). He is a Fellow member of the Institute of Chartered Accountants of India (ICAI). He also holds a Masters’ in Business Administration [M.B.A.] from Indira Gandhi National Open University.\n\nPrakash initially worked with a leading Co-Operative giant in South India, The Totgars’ Co-operative Sale Society Ltd. Sirsi as its Chief Executive Officer for about 6 years besides his practice as a Chartered Accountant. Later, he worked with PricewaterhouseCoopers (PwC) for about 10 years in the field of direct taxation and with Deloitte Haskins and Sells for about a year as a Director.\n\nPrakash has advised many leading Indian and multi-national companies on a wide variety of matters covering corporate taxation, expatriate taxation, international taxation etc. He also has rich experience in dealing with compliance, advisory and litigation matters across the direct tax spectrum.\n\nHe is a well-known speaker and has conducted many seminars and sessions to clients and co-professionals. He regularly contributes to leading financial newspapers on various direct tax matters."
  },
  { 
    name: "Deepak Rao", 
    role: "Partner – Indirect Taxation",
    image: "/input_file_0.png",
    linkedin: "https://www.linkedin.com/in/deepak-rao-ab6b7834/",
    bio: "Deepak holds a degree in law (LLB) from the Karnataka State Law University, a degree in Cost and Management Accountant (CMA) from The Institute of Cost & Management Accountants of India (ICMAI) and also holds a degree in Management in Business Administration (MBA) from the Institute of Chartered Financial Analyst of India (ICFAI). Deepak is a veteran in the field of indirect taxation with more than 25+ years of experience in Industry and Big 4 consulting.\n\nDeepak spent close to 10 years with the global consumer goods giant Procter & Gamble (P&G) and another 10 years with the leading Big 4 consulting firms, PricewaterhouseCoopers (PwC) and Ernst & Young (EY) before joining Acer Tax & Corporate Services LLP in the year 2016.\n\nDeepak over the years has advised numerous multinational and Indian companies on a wide variety of matters covering GST, VAT, Service Tax, Excise and Customs. Deepak has rich experience in dealing with compliance, advisory and litigation matters across the indirect tax spectrum and has advised clients on critical and complex indirect tax matters. Deepak is specialized in supply-chain related advisory and structuring and has worked with various industries / sectors including IT / ITES, Manufacturing, Real- Estate, Retail, Automobile, E-Commerce, SME’s etc.\n\nDeepak is a prolific speaker and has conducted various seminars and sessions to clients across the industry and in association with CII, FICCI and other industry forms."
  },
  { 
    name: "Bishnu Agarwal", 
    role: "Partner – Indirect Taxation",
    image: "/input_file_2.png",
    linkedin: "https://www.linkedin.com/in/bishnu-agarwal-13b39217/",
    bio: "Bishnu holds a Bachelor’s Degree in Commerce (B.Com) from Bangalore University, fellow membership of Institute of Chartered Accountants (FCA), qualified Company Secretary from Institute of Company Secretaries (CS) and Certified Information System Auditor (CISA) from Information System Audit and Control Association, USA.\n\nHe has more than 15 years of experience in the various areas such as Indirect Tax, Internal Financial Control, Audit & CFO Services which includes his stint of about four years with PricewaterhouseCoopers (PwC) dealing in indirect taxes and audits. He has handled matters of clients from diverse industries and has conducted many tax reviews. He has also represented clients in many tax forums.\n\nHe has served various fortune 500 companies in the area of indirect taxes and various types of audit.\n\nHe is rendering comprehensive professional services in the areas of Indirect Taxes, FTP, Internal Audit including Internal Financial Control and Other Regulatory Compliances."
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', id: 'home' as Page },
    { name: 'About Us', id: 'about' as Page },
    { name: 'Services', id: 'services' as Page },
    { name: 'Our Team', id: 'team' as Page },
    { name: 'Contact Us', id: 'contact' as Page },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-orange-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-orange-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setCurrentPage('home')}
            >
              <img src="/input_file_5.png" alt="Acer Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-black font-display leading-none">Acer Tax</span>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Tax and Corporate Services</span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => setCurrentPage(link.id)}
                  className={`text-base font-bold transition-all relative py-1 ${
                    currentPage === link.id ? 'text-orange-500' : 'text-black hover:text-orange-400'
                  }`}
                >
                  {link.name}
                  {currentPage === link.id && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-400"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-black hover:text-orange-500 transition-colors"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-orange-50 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => {
                      setCurrentPage(link.id);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left text-lg font-bold ${
                      currentPage === link.id ? 'text-orange-600' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
            <div className="col-span-1 md:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                <img src="/input_file_5.png" alt="Acer Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold tracking-tight text-white font-display leading-none">Acer Tax</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Tax and Corporate Services</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed text-sm">
                Expert tax advisory, compliance, and litigation services. Our team of professionals ensures seamless tax solutions for businesses of all sizes.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/acer-tax-&-corporate-services-llp/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-400 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-orange-400 font-bold mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                {navLinks.map(link => (
                  <li key={link.id}>
                    <button onClick={() => setCurrentPage(link.id)} className="hover:text-white transition-colors">{link.name}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-orange-400 font-bold mb-4 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-orange-400" />
                  +91-80-2346-6288
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-orange-400" />
                  info@acertax.com
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
            <p>© {new Date().getFullYear()} Acer Tax & Corporate Services LLP. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-8 md:py-12 lg:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 lg:mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Expert Tax Advisory
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 leading-[1.1] font-display">
                Tax. Regulatory. <span className="text-orange-400 underline decoration-yellow-300 decoration-4 underline-offset-8">Corporate.</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-8 leading-relaxed max-w-xl">
                Expert tax advisory, compliance, and litigation services. Our team of professionals ensures seamless tax solutions for businesses of all sizes.
              </p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setPage('services')}
                  className="bg-orange-400 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-orange-500 transition-all shadow-lg shadow-orange-400/20 text-sm"
                >
                  Our Services <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setPage('about')}
                  className="bg-white border-2 border-black text-black px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all text-sm"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video lg:aspect-square bg-yellow-400 rounded-2xl rotate-2 absolute inset-0 -z-10 opacity-20" />
              <div className="aspect-video lg:aspect-square bg-orange-500 rounded-2xl -rotate-2 absolute inset-0 -z-10 opacity-10" />
              <img 
                src="https://picsum.photos/seed/indian-corporate-meeting/800/800" 
                alt="Indian Corporate Professionals Discussion" 
                className="rounded-2xl shadow-xl object-cover w-full h-full aspect-video lg:aspect-square max-h-[400px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4 lg:mb-6 font-display">Our Journey</h2>
              <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-slate-600 leading-relaxed">
                <p>
                  Acer Tax & Corporate Services LLP is a firm of professionals with deep technical expertise in indirect taxation, direct taxation, regulatory, real estate, human resources and corporate services.
                </p>
                <p>
                  The partners and consultants of the firm have combined experience of more than 60 years in global organizations such as PwC, E&Y, Deloitte and P&G.
                </p>
                <p>
                  The team has extensive interactions with various tax & regulatory authorities and has hands-on experience with numerous multi-national clients. We are proactive in understanding the needs and expectations of clients and have wide spread engagement management experience across sectors.
                </p>
              </div>
              <div className="mt-6 lg:mt-8 grid grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">60+</div>
                  <div className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-orange-400 mb-1">100%</div>
                  <div className="text-[10px] lg:text-xs font-bold text-slate-500 uppercase tracking-widest">Client Delight</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-3 bg-orange-50 rounded-2xl -z-10" />
              <img 
                src="https://picsum.photos/seed/journey/800/600" 
                alt="Our Journey" 
                className="rounded-2xl shadow-md object-cover w-full h-[250px] lg:h-[350px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-12 gap-4"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-2 font-display">What We Do</h2>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">We partner with our clients to manage their end-to-end tax and regulatory needs.</p>
            </div>
            <button 
              onClick={() => setPage('services')}
              className="text-orange-500 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {servicesData.map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => {
                  setPage('services');
                  setTimeout(() => {
                    const el = document.getElementById(service.id);
                    if (el) {
                      const offset = 120; // Account for sticky header
                      const elementPosition = el.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;

                      window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                      });
                    }
                  }, 400); // Increased timeout to ensure page transition completes
                }}
                className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 hover:border-orange-400 transition-all group shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-50 text-orange-400 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-orange-400 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-base lg:text-lg font-bold mb-2 lg:mb-3 font-display leading-tight">{service.title}</h3>
                <p className="text-slate-500 text-[11px] lg:text-xs leading-relaxed mb-4 lg:mb-6 line-clamp-3">{service.description}</p>
                <div className="text-orange-500 font-bold text-[11px] lg:text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  const valueProps = [
    "Deep technical expertise in indirect taxation, direct taxation, regulatory, real estate, human resources and corporate services",
    "Supported by team of experts / specialist in tax advisory, compliance and litigation",
    "60 years of combined experience in global organizations such as PwC, E&Y, Deloitte and P&G",
    "Extensive interactions with various tax & regulatory authorities",
    "Hands-on experience with numerous multi-national clients",
    "Proactive approach in understanding the needs and expectations of clients",
    "Wide spread engagement management experience across sectors",
    "Cost conscious and win-win proposition delivery"
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 font-display leading-tight">Get to Know <span className="text-orange-400">Us</span></h1>
            <p className="text-lg lg:text-xl text-slate-700 font-medium leading-relaxed mb-4 lg:mb-6">
              Your One-Stop Solution for Tax, Regulatory, and Corporate Excellence.
            </p>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
              Acer Tax & Corporate Services LLP is built on a foundation of trust, excellence, and deep industry knowledge. We pride ourselves on being more than just consultants; we are strategic partners in our clients' growth journeys.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-orange-50 rounded-2xl -z-10" />
            <img 
              src="https://picsum.photos/seed/professional-team/800/600" 
              alt="Professional Team" 
              className="rounded-2xl shadow-lg object-cover w-full h-[300px] lg:h-[400px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 p-6 lg:p-8 rounded-2xl border-t-4 border-orange-400 shadow-sm"
          >
            <h3 className="text-[10px] font-bold mb-3 uppercase tracking-widest text-orange-500">Our Vision</h3>
            <p className="text-base lg:text-lg font-semibold text-black leading-relaxed">Client delight with exceptional services and value creation.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 p-6 lg:p-8 rounded-2xl border-t-4 border-slate-900 shadow-sm"
          >
            <h3 className="text-[10px] font-bold mb-3 uppercase tracking-widest text-slate-600">Our Mission</h3>
            <p className="text-base lg:text-lg font-semibold text-black leading-relaxed">To be the preferred service provider on India tax, regulatory and corporate matters.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 p-6 lg:p-8 rounded-2xl border-t-4 border-white text-white shadow-xl"
          >
            <h3 className="text-[10px] font-bold mb-3 uppercase tracking-widest text-slate-400">Our Core Values</h3>
            <p className="text-base lg:text-lg font-semibold leading-relaxed">Service with excellence, honesty and integrity.</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-2xl lg:rounded-[2rem] p-6 md:p-10 lg:p-12 border border-slate-100"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-10 font-display">Our Value Proposition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {valueProps.map((prop, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-3 items-start group"
              >
                <div className="mt-1 w-4 h-4 lg:w-5 lg:h-5 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ChevronRight className="w-2.5 h-2.5 lg:w-3 h-3 text-white" />
                </div>
                <p className="text-sm lg:text-base text-slate-700 leading-relaxed">{prop}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-16"
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 font-display leading-tight">Our <span className="text-orange-400">Services</span></h1>
          <p className="text-slate-600 text-sm lg:text-base leading-relaxed">Comprehensive tax and compliance services to help businesses navigate complex challenges efficiently.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:gap-10">
          {servicesData.map((service, idx) => (
            <motion.div 
              key={idx} 
              id={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="p-6 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                  <div className="lg:w-1/3">
                    <div className="w-10 h-10 lg:w-14 lg:h-14 bg-slate-50 text-orange-400 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:bg-orange-400 group-hover:text-white transition-all">
                      {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 lg:w-7 lg:h-7" })}
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold mb-3 font-display leading-tight text-black">{service.title}</h2>
                    <p className="text-slate-500 text-[13px] leading-relaxed">{service.description}</p>
                  </div>
                  <div className="lg:w-2/3 lg:pl-10 lg:border-l border-slate-100">
                    <h3 className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4 lg:mb-6">Key Offerings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 lg:gap-y-3">
                      {service.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex gap-2.5 items-start">
                          <div className="mt-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0" />
                          <p className="text-slate-600 text-[12px] lg:text-[13px] leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof teamData[0] | null>(null);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-10 lg:mb-16"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 font-display leading-tight">Passionate. Committed. <span className="text-orange-400">Experienced.</span></h1>
          <p className="text-base lg:text-lg text-slate-600 leading-relaxed">Meet our expert team of tax professionals dedicated to delivering top-tier tax and compliance solutions.</p>
        </motion.div>

        <div className="flex flex-col gap-6 lg:gap-10">
          {/* First Row: 3 Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {teamData.slice(0, 3).map((member, idx) => (
              <TeamCard key={idx} member={member} idx={idx} onClick={() => { setSelectedMember(member); }} />
            ))}
          </div>
          
          {/* Second Row: 2 Members Centered */}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
            {teamData.slice(3).map((member, idx) => (
              <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-27px)]">
                <TeamCard member={member} idx={idx + 3} onClick={() => { setSelectedMember(member); }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2rem] overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-black transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-slate-100 shadow-md">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-black mb-1 font-display">{selectedMember.name}</h3>
                    <p className="text-orange-500 font-bold text-sm sm:text-base uppercase tracking-widest">{selectedMember.role}</p>
                  </div>
                </div>

                <div className="h-px w-full bg-slate-100 mb-8" />
                
                <div className="space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed text-justify whitespace-pre-line">
                    {selectedMember.bio}
                  </p>
                  
                  <div className="pt-4">
                    <a 
                      href={selectedMember.linkedin} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TeamCard({ member, idx, onClick }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="bg-white rounded-3xl border border-orange-50 overflow-hidden group shadow-sm hover:shadow-2xl transition-all cursor-pointer max-w-sm mx-auto w-full"
    >
      <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 lg:p-8">
          <div className="bg-orange-400 text-white p-2 lg:p-3 rounded-xl shadow-lg">
            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        </div>
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl lg:text-2xl font-bold text-black mb-1 lg:mb-2 font-display">{member.name}</h3>
        <p className="text-orange-500 font-bold text-[11px] lg:text-sm uppercase tracking-widest">{member.role}</p>
      </div>
    </motion.div>
  );
}

function Contact() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 font-display leading-tight">Contact <span className="text-orange-400">Us</span></h1>
            <p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-10 leading-relaxed">
              We are here to help you with your tax, regulatory, and corporate needs. Reach out to us for expert guidance.
            </p>
            
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-orange-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-400/20">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Call Us</h4>
                  <p className="text-lg lg:text-xl font-bold text-black">+91-80-2346-6288</p>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-4 p-4 lg:p-5 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h4 className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">Mail Us</h4>
                  <p className="text-lg lg:text-xl font-bold text-black">info@acertax.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 lg:p-12 rounded-2xl lg:rounded-[2rem] text-black border border-slate-200 shadow-xl relative overflow-hidden"
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 font-display">Send a Message</h3>
            <form className="space-y-3 lg:space-y-4">
              <div className="space-y-1.5">
                <label className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500">Your Name</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-orange-400 transition-colors text-sm" placeholder="Enter your name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-orange-400 transition-colors text-sm" placeholder="Enter your email" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 lg:py-3 focus:outline-none focus:border-orange-400 transition-colors text-sm" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-orange-400 text-white py-3 lg:py-4 rounded-lg font-bold text-sm lg:text-base hover:bg-orange-500 transition-all shadow-lg shadow-orange-400/30">
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
