import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from "lucide-react";
import logo1 from "../assets/Logo image 1.svg";
import workImg from "../assets/work img.webp";

// Import existing image assets
import inventryImg from "../assets/inventry.webp";
import emsImg from "../assets/ems.webp";
import aboutImg from "../assets/about_what_we_do.webp";
import saasHeroImg from "../assets/saas_hero_server.webp";
import websitesImg from "../assets/website_final_product.webp";

const projects = [
  {
    id: "medassist",
    title: "MedAssist Pharmacy System",
    category: "Web Apps",
    image: inventryImg,
    challenge:
      "Fragmented inventory records, slow checkout, and high order error rates in regional clinics.",
    solution:
      "A local-first offline-capable system syncing ledger logs with clinic databases in real-time.",
    results:
      "99.9% data sync uptime, 45% decrease in customer checkout times, and complete elimination of prescription dispensing errors.",
    metrics: [
      { value: "99.9%", label: "Uptime Sync" },
      { value: "45%", label: "Faster Checkout" },
      { value: "0", label: "Dispensing Errors" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#06B6D4", // Healthcare Cyan
    industry: "Healthcare",
  },
  {
    id: "erp-platform",
    title: "ERP Operations Ecosystem",
    category: "Custom Software",
    image: emsImg,
    challenge:
      "Inability to schedule team tasks, compile reports, or track resources dynamically across multiple branch operations.",
    solution:
      "A centralized dashboard with automated report compile pipelines and custom visual calendar tracking.",
    results:
      "Over 3,000 active daily operator sessions, 30% reduction in branch overhead costs, and 3x faster billing compilation.",
    metrics: [
      { value: "3,000+", label: "Daily Sessions" },
      { value: "30%", label: "Cost Reduction" },
      { value: "3x", label: "Faster Billing" },
    ],
    technologies: ["React", "Python", "PostgreSQL"],
    accentColor: "#F59E0B", // Business Orange
    industry: "Business",
  },
  {
    id: "viyan-crm",
    title: "Viyan CRM Platform",
    category: "Custom Software",
    image: aboutImg,
    challenge:
      "Lead leakages, uncoordinated client followups, and absent sales pipeline visibility.",
    solution:
      "A client tracker pipeline mapping lead status from initial touchpoint to contract settlement.",
    results:
      "2.4x increase in lead-to-conversion rates, automated email follow-up flows, and fully visual customer history records.",
    metrics: [
      { value: "2.4x", label: "Conversions" },
      { value: "100%", label: "Lead Visibility" },
      { value: "0", label: "Missed Followups" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#3B82F6", // SaaS Blue
    industry: "SaaS",
  },
  {
    id: "billing-software",
    title: "Viyan Ledger POS & Billing",
    category: "Custom Software",
    image: saasHeroImg,
    challenge:
      "Payment processor dropouts and high transaction delays during peak store retail hours.",
    solution:
      "A distributed point-of-sale compiler with automated offline queues and multi-gateway settlement logic.",
    results:
      "Sub-second ledger write confirmation, 0% transactions lost during power drops, and integrated card/UPI receipts.",
    metrics: [
      { value: "0.8s", label: "Ledger Writes" },
      { value: "0%", label: "Lost Transact." },
      { value: "100%", label: "UPI Success" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#F59E0B", // Business Orange
    industry: "Business",
  },
  {
    id: "internship-portal",
    title: "Training & Internship Portal",
    category: "Internship Platforms",
    image: websitesImg,
    challenge:
      "Manual grading, uncoordinated course flows, and slow credential generation for trainees.",
    solution:
      "An automated student portal supporting online code exercises, mentor reviews, and digital certificate issuing.",
    results:
      "500+ student certificates issued automatically, 12,000 practice runs compiled, and 80% decrease in evaluation delays.",
    metrics: [
      { value: "500+", label: "Certificates" },
      { value: "12k+", label: "Compilations" },
      { value: "80%", label: "Faster Evaluation" },
    ],
    technologies: ["React", "Python", "PostgreSQL"],
    accentColor: "#22C55E", // Education Green
    industry: "Education",
  },
  {
    id: "ai-assistant",
    title: "Enterprise AI Assistant",
    category: "AI Solutions",
    image: saasHeroImg,
    challenge:
      "High support volume leading to delayed response cycles and low customer success metrics.",
    solution:
      "Designed a vector-backed virtual assistant referencing 10k+ pages using semantic retrieval (RAG).",
    results:
      "40% reduction in support tickets, 24/7 automated instant responses, and high accuracy user satisfaction.",
    metrics: [
      { value: "40%", label: "Ticket Reduction" },
      { value: "24/7", label: "Uptime Support" },
      { value: "10k+", label: "Pages Indexed" },
    ],
    technologies: ["Python", "OpenAI", "Vector DB"],
    accentColor: "#EC4899", // AI Pink
    industry: "AI",
  },
  {
    id: "health-app",
    title: "Patient Care Companion App",
    category: "Mobile Apps",
    image: inventryImg,
    challenge:
      "Lack of a unified mobile channel for patients to access lab results, appointments, and doctors.",
    solution:
      "Created a secure, cross-platform mobile app with end-to-end encrypted chat and instant push updates.",
    results:
      "98% user engagement rating, secure fingerprint access, and over 15,000 downloads within 3 months.",
    metrics: [
      { value: "98%", label: "Engagement" },
      { value: "15k+", label: "Downloads" },
      { value: "E2E", label: "Encryption" },
    ],
    technologies: ["React Native", "Firebase", "Node.js"],
    accentColor: "#06B6D4", // Healthcare Cyan
    industry: "Healthcare",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<
    "challenge" | "solution" | "results"
  >("challenge");

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-[#E9D5FF] rounded-3xl p-6 shadow-[0_10px_30px_rgba(123,47,247,0.01)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)] hover:border-[#7B2FF7]/20 transition-all duration-300 text-left flex flex-col justify-between h-[495px] max-h-[500px] overflow-hidden group relative"
    >
      <div>
        {/* Image mockup preview */}
        <div className="w-full h-[150px] rounded-2xl overflow-hidden mb-4 relative bg-purple-50">
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4 }}
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 left-3">
            <span
              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold border shadow-2xs"
              style={{
                color: project.accentColor,
                backgroundColor: `${project.accentColor}10`,
                borderColor: `${project.accentColor}20`,
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Header */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-display font-extrabold text-[#0F172A] group-hover:text-[#7B2FF7] transition-colors leading-tight line-clamp-1">
            {project.title}
          </h3>
          <span
            className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border"
            style={{
              color: project.accentColor,
              borderColor: `${project.accentColor}30`,
              backgroundColor: `${project.accentColor}05`,
            }}
          >
            {project.industry}
          </span>
        </div>

        {/* Mini Tab Selectors */}
        <div className="flex gap-1.5 mb-3 border-b border-slate-100 pb-1.5">
          {(["challenge", "solution", "results"] as const).map((tab) => (
            <button
              key={tab}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab);
              }}
              className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
              style={{
                backgroundColor:
                  activeTab === tab
                    ? `${project.accentColor}15`
                    : "transparent",
                color: activeTab === tab ? project.accentColor : "#64748B",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content area with fixed height to prevent card stretching */}
        <div className="h-[48px] overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="text-[11px] leading-relaxed text-[#475569]"
            >
              {project[activeTab]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Compact Metrics Grid */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.metrics.map((metric, mIdx) => (
            <div
              key={mIdx}
              className="p-2 rounded-xl border border-slate-100 text-center"
              style={{
                backgroundColor: `${project.accentColor}03`,
              }}
            >
              <span
                className="block text-xs sm:text-[13px] font-display font-black leading-none mb-1"
                style={{ color: project.accentColor }}
              >
                {metric.value}
              </span>
              <span className="block text-[8px] font-medium text-slate-400 uppercase tracking-wider truncate">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer block: Tech Stack & CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
        <div className="flex flex-wrap gap-1.5 max-w-[65%]">
          {project.technologies.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 rounded text-[9px] font-bold font-mono border"
              style={{
                color: project.accentColor,
                backgroundColor: `${project.accentColor}08`,
                borderColor: `${project.accentColor}15`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <Link to="/contact">
          <button
            className="px-3.5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1 cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}dd)`,
            }}
          >
            Start Project <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Apps",
    "Mobile Apps",
    "AI Solutions",
    "Custom Software",
    "Internship Platforms",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-[#FAF7FF] relative min-h-screen text-[#0F172A] overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/5 blur-3xl pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container relative z-10 text-center max-w-[1200px] mx-auto px-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
            Case Studies
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-6 max-w-4xl mx-auto">
            Our{" "}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] bg-clip-text text-transparent">
              Work
            </span>
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-12 leading-relaxed">
            Real software solutions delivering measurable business impact.
            Explore our portfolio of custom systems, cross-platform portals, and
            artificial intelligence integration.
          </p>

          {/* Filtering buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#7B2FF7] text-white shadow-md"
                    : "bg-white border border-[#E9D5FF] text-[#475569] hover:border-[#7B2FF7]/30 hover:bg-[#FAF7FF]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS MASONRY/FLEX GRID */}
      <section className="py-12 bg-white/40 backdrop-blur-md border-y border-[#E9D5FF]/40 min-h-[500px]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* COMBINED CTA + FOOTER SECTION */}
      <section
        className="relative w-[94%] md:w-full mx-auto overflow-hidden rounded-[32px] md:rounded-[40px] z-10"
        style={{
          minHeight: "950px",
          marginTop: "80px",
          paddingTop: "70px",
          paddingBottom: "40px",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={workImg}
            alt="Work Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "rgba(10, 10, 20, 0.45)",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-[80px] pb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to build your solution?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
              Let's coordinate on requirements and construct your application.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/contact" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-[40px] opacity-55 group-hover:opacity-85 transition-opacity duration-300 rounded-full" />
                <button
                  className="relative px-[48px] py-[18px] text-white font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_40px_rgba(124,58,237,0.55)] transition-all duration-300 border border-white/10"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #9333ea, #6366f1)",
                  }}
                >
                  Start Project
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <div
          className="relative z-10 w-[94%] md:w-[88%] max-w-[1450px] mx-auto mt-[70px] mb-10 rounded-[32px] p-8 md:p-[50px_60px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] text-center md:text-left">
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/" className="block w-fit mb-6">
                <img
                  src={logo1}
                  alt="ViyanInfo"
                  className="h-10 w-auto object-contain select-none"
                />
              </Link>
              <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)] max-w-xs mb-8">
                Building scalable software, AI solutions, and digital products
                that help businesses grow faster and operate smarter.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin size={18} />,
                    href: "https://linkedin.com",
                  },
                  { icon: <Github size={18} />, href: "https://github.com" },
                  {
                    icon: <Instagram size={18} />,
                    href: "https://instagram.com",
                  },
                  {
                    icon: <Facebook size={18} />,
                    href: "https://facebook.com",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 22px rgba(168,85,247,0.45)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.background =
                        "rgba(168, 85, 247, 0.4)";
                      e.currentTarget.style.borderColor =
                        "rgba(168, 85, 247, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Services
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Custom Software Development", path: "/services" },
                  { name: "Web Applications", path: "/services/websites" },
                  { name: "Mobile Applications", path: "/services/mobile" },
                  { name: "AI Solutions", path: "/services" },
                  { name: "UI/UX Design", path: "/services" },
                  { name: "Internship Programs", path: "/internship" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.88)] hover:text-[#c084fc] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Resources
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Case Studies", path: "/portfolio" },
                  { name: "Careers", path: "/careers" },
                  { name: "Blog", path: "/blog" },
                  { name: "Technology Stack", path: "/tech-stack" },
                  { name: "Contact", path: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.88)] hover:text-[#c084fc] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col items-center md:items-start text-[rgba(255,255,255,0.82)]">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Contact
              </span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    admin@viyaninfo.com
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    +91 6379723465
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    Tiruvallur, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    www.viyaninfo.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="h-px bg-[rgba(255,255,255,0.12)] w-full mb-6 mt-12" />

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-[rgba(255,255,255,0.62)] pb-8">
            <p>© 2026 ViyanInfo. All rights reserved.</p>

            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
