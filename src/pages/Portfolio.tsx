import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CTABlock } from "../components/CTABlock";

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
    challenge: "Fragmented inventory records, slow checkout, and high order error rates in regional clinics.",
    solution: "A local-first offline-capable system syncing ledger logs with clinic databases in real-time.",
    results: "99.9% data sync uptime, 45% decrease in customer checkout times, and complete elimination of prescription dispensing errors.",
    metrics: [
      { value: "99.9%", label: "Uptime Sync" },
      { value: "45%", label: "Faster Checkout" },
      { value: "0", label: "Dispensing Errors" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#06B6D4", // Healthcare Cyan
    industry: "Healthcare"
  },
  {
    id: "erp-platform",
    title: "ERP Operations Ecosystem",
    category: "Custom Software",
    image: emsImg,
    challenge: "Inability to schedule team tasks, compile reports, or track resources dynamically across multiple branch operations.",
    solution: "A centralized dashboard with automated report compile pipelines and custom visual calendar tracking.",
    results: "Over 3,000 active daily operator sessions, 30% reduction in branch overhead costs, and 3x faster billing compilation.",
    metrics: [
      { value: "3,000+", label: "Daily Sessions" },
      { value: "30%", label: "Cost Reduction" },
      { value: "3x", label: "Faster Billing" }
    ],
    technologies: ["React", "Python", "PostgreSQL"],
    accentColor: "#F59E0B", // Business Orange
    industry: "Business"
  },
  {
    id: "viyan-crm",
    title: "Viyan CRM Platform",
    category: "Custom Software",
    image: aboutImg,
    challenge: "Lead leakages, uncoordinated client followups, and absent sales pipeline visibility.",
    solution: "A client tracker pipeline mapping lead status from initial touchpoint to contract settlement.",
    results: "2.4x increase in lead-to-conversion rates, automated email follow-up flows, and fully visual customer history records.",
    metrics: [
      { value: "2.4x", label: "Conversions" },
      { value: "100%", label: "Lead Visibility" },
      { value: "0", label: "Missed Followups" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#3B82F6", // SaaS Blue
    industry: "SaaS"
  },
  {
    id: "billing-software",
    title: "Viyan Ledger POS & Billing",
    category: "Custom Software",
    image: saasHeroImg,
    challenge: "Payment processor dropouts and high transaction delays during peak store retail hours.",
    solution: "A distributed point-of-sale compiler with automated offline queues and multi-gateway settlement logic.",
    results: "Sub-second ledger write confirmation, 0% transactions lost during power drops, and integrated card/UPI receipts.",
    metrics: [
      { value: "0.8s", label: "Ledger Writes" },
      { value: "0%", label: "Lost Transact." },
      { value: "100%", label: "UPI Success" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL"],
    accentColor: "#F59E0B", // Business Orange
    industry: "Business"
  },
  {
    id: "internship-portal",
    title: "Training & Internship Portal",
    category: "Internship Platforms",
    image: websitesImg,
    challenge: "Manual grading, uncoordinated course flows, and slow credential generation for trainees.",
    solution: "An automated student portal supporting online code exercises, mentor reviews, and digital certificate issuing.",
    results: "500+ student certificates issued automatically, 12,000 practice runs compiled, and 80% decrease in evaluation delays.",
    metrics: [
      { value: "500+", label: "Certificates" },
      { value: "12k+", label: "Compilations" },
      { value: "80%", label: "Faster Evaluation" }
    ],
    technologies: ["React", "Python", "PostgreSQL"],
    accentColor: "#22C55E", // Education Green
    industry: "Education"
  },
  {
    id: "ai-assistant",
    title: "Enterprise AI Assistant",
    category: "AI Solutions",
    image: saasHeroImg,
    challenge: "High support volume leading to delayed response cycles and low customer success metrics.",
    solution: "Designed a vector-backed virtual assistant referencing 10k+ pages using semantic retrieval (RAG).",
    results: "40% reduction in support tickets, 24/7 automated instant responses, and high accuracy user satisfaction.",
    metrics: [
      { value: "40%", label: "Ticket Reduction" },
      { value: "24/7", label: "Uptime Support" },
      { value: "10k+", label: "Pages Indexed" }
    ],
    technologies: ["Python", "OpenAI", "Vector DB"],
    accentColor: "#EC4899", // AI Pink
    industry: "AI"
  },
  {
    id: "health-app",
    title: "Patient Care Companion App",
    category: "Mobile Apps",
    image: inventryImg,
    challenge: "Lack of a unified mobile channel for patients to access lab results, appointments, and doctors.",
    solution: "Created a secure, cross-platform mobile app with end-to-end encrypted chat and instant push updates.",
    results: "98% user engagement rating, secure fingerprint access, and over 15,000 downloads within 3 months.",
    metrics: [
      { value: "98%", label: "Engagement" },
      { value: "15k+", label: "Downloads" },
      { value: "E2E", label: "Encryption" }
    ],
    technologies: ["React Native", "Firebase", "Node.js"],
    accentColor: "#06B6D4", // Healthcare Cyan
    industry: "Healthcare"
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
}

function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"challenge" | "solution" | "results">("challenge");

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
                borderColor: `${project.accentColor}20`
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
              backgroundColor: `${project.accentColor}05`
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
                backgroundColor: activeTab === tab ? `${project.accentColor}15` : "transparent",
                color: activeTab === tab ? project.accentColor : "#64748B"
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
                backgroundColor: `${project.accentColor}03`
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
                borderColor: `${project.accentColor}15`
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
              backgroundImage: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}dd)`
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

  const filters = ["All", "Web Apps", "Mobile Apps", "AI Solutions", "Custom Software", "Internship Platforms"];

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
            Our <span className="bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] bg-clip-text text-transparent">Work</span>
          </h1>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto mb-12 leading-relaxed">
            Real software solutions delivering measurable business impact. Explore our portfolio of custom systems, cross-platform portals, and artificial intelligence integration.
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

      <CTABlock
        title="Ready to build your solution?"
        subtitle="Let's coordinate on requirements and construct your application."
      />
    </div>
  );
}
