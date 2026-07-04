import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

import inventryImg from "../assets/inventry.webp";
import aboutImg from "../assets/about_what_we_do.webp";
import saasHeroImg from "../assets/saas_hero_server.webp";

// ─────────────────────────────────────────
// 1. PAGE BACKGROUND — dark charcoal with grain + orbs
// ─────────────────────────────────────────
export function PortfolioBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg,#0F0A1A 0%,#0D0B1A 60%,#080510 100%)",
        }}
      />
      {/* Noise grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />
      {/* Ambient orbs */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(123,47,247,.08) 0%,transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(59,130,246,.06) 0%,transparent 65%)",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────
// 2. HERO PROJECT SHOWCASE CAROUSEL
// ─────────────────────────────────────────
const heroProjects = [
  {
    id: "erp",
    title: "Enterprise ERP Platform",
    category: "SaaS",
    year: "2025",
    desc: "Custom multi-tenant ERP with billing, inventory, HR, and real-time analytics. Built on React + Node.js + PostgreSQL.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=800&fit=crop&auto=format",
    color: "#7B2FF7",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    stat: { val: "10K+", label: "Active users" },
  },
  {
    id: "medassist",
    title: "MedAssist Pharmacy System",
    category: "Web Apps",
    year: "2025",
    desc: "A local-first offline-capable system syncing ledger logs with clinic databases in real-time.",
    image: inventryImg,
    color: "#06B6D4",
    tags: ["React", "Node.js", "PostgreSQL"],
    stat: { val: "45%", label: "Faster Checkout" },
  },
  {
    id: "billing",
    title: "Viyan Ledger POS & Billing",
    category: "Custom Software",
    year: "2025",
    desc: "A distributed point-of-sale compiler with automated offline queues and multi-gateway settlement logic.",
    image: saasHeroImg,
    color: "#EC4899",
    tags: ["React", "Python", "PostgreSQL"],
    stat: { val: "0.8s", label: "Ledger Writes" },
  },
  {
    id: "crm",
    title: "Viyan CRM Platform",
    category: "Custom Software",
    year: "2025",
    desc: "A client tracker pipeline mapping lead status from initial touchpoint to contract settlement.",
    image: aboutImg,
    color: "#3B82F6",
    tags: ["React", "Node.js", "PostgreSQL"],
    stat: { val: "2.4x", label: "Conversions" },
  },
  {
    id: "ai-dash",
    title: "AI Analytics Dashboard",
    category: "AI",
    year: "2026",
    desc: "GPT-4o powered analytics with RAG document search and predictive forecasting for a logistics startup.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1400&h=800&fit=crop&auto=format",
    color: "#10B981",
    tags: ["OpenAI", "LangChain", "Next.js", "Pinecone"],
    stat: { val: "120h", label: "Saved per week" },
  },
];

export function PortfolioHeroCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (idx: number) => {
    setDir(idx > active ? 1 : -1);
    setActive(idx);
  };

  // Auto-advance every 5 s
  useEffect(() => {
    const id = setInterval(() => {
      setDir(1);
      setActive((p) => (p + 1) % heroProjects.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const p = heroProjects[active];

  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden shadow-2xl"
      style={{ height: "min(520px,60vw)", minHeight: 340 }}
    >
      {/* BG image with animated transition */}
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={p.id}
          custom={dir}
          initial={{ opacity: 0, x: dir * 60, scale: 1.04 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -dir * 60 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-full object-cover"
          />
          {/* Dynamic color gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(105deg,${p.color}E0 0%,${p.color}90 25%,rgba(0,0,0,.7) 55%,rgba(0,0,0,.85) 100%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.id + "-copy"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            {/* Category + year */}
            <div className="flex items-center gap-3 mb-4">
              <span
                className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-white"
                style={{
                  background: `${p.color}60`,
                  border: `1px solid ${p.color}80`,
                }}
              >
                {p.category}
              </span>
              <span className="text-white/40 text-xs font-mono">{p.year}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white mb-3 leading-tight">
              {p.title}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm">
              {p.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white/80"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Stat + CTA */}
            <div className="flex items-center gap-5">
              <div>
                <div className="text-2xl font-display font-black text-white leading-none">
                  {p.stat.val}
                </div>
                <div className="text-[9px] text-white/50 font-mono uppercase tracking-wider">
                  {p.stat.label}
                </div>
              </div>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
                style={{ background: "white", color: p.color }}
              >
                View Case Study <ExternalLink size={12} />
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots + Arrow controls */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {heroProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="cursor-pointer transition-all rounded-full"
                style={{
                  width: i === active ? 28 : 8,
                  height: 8,
                  background: i === active ? "white" : "rgba(255,255,255,.3)",
                }}
              />
            ))}
          </div>
          <div className="flex gap-2 ml-auto">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                onClick={() =>
                  go((active + d + heroProjects.length) % heroProjects.length)
                }
                className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all hover:bg-white/20"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <span className="text-white text-sm">
                  {d === -1 ? "←" : "→"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 4. ANIMATED FILTER PILLS — dark variant
//    Categories match the real project data in Portfolio.tsx
// ─────────────────────────────────────────
const filterCategories = [
  "All",
  "Web Apps",
  "Custom Software",
  "Mobile Apps",
  "AI Solutions",
  "Internship Platforms",
];
const filterColors: Record<string, string> = {
  All: "#7B2FF7",
  "Web Apps": "#3B82F6",
  "Custom Software": "#06B6D4",
  "Mobile Apps": "#10B981",
  "AI Solutions": "#EC4899",
  "Internship Platforms": "#F59E0B",
};

export function PortfolioFilterPills({
  active,
  onChange,
}: {
  active: string;
  onChange: (cat: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filterCategories.map((cat) => {
        const isActive = active === cat;
        const color = filterColors[cat];
        return (
          <motion.button
            key={cat}
            onClick={() => onChange(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-5 py-2 rounded-full text-sm font-semibold cursor-pointer overflow-hidden transition-all"
            style={{
              background: isActive ? color : "white",
              color: isActive ? "white" : "#64748B",
              border: `1.5px solid ${isActive ? color : "#E2E8F0"}`,
              boxShadow: isActive ? `0 4px 20px ${color}40` : "none",
            }}
          >
            {/* Active shimmer sweep */}
            {isActive && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
              />
            )}
            {cat}
          </motion.button>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────
// 5. LEGACY EXPORTS (backward compat)
// ─────────────────────────────────────────
export function PortfolioHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1A] via-[#0F0A1A]/95 to-[#FAF7FF]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7B2FF7]/10 blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/8 blur-3xl" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pg" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pg)" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────
// 6. 3D TILT PROJECT CARD — dark themed
// ─────────────────────────────────────────
export interface DarkProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  accentColor: string;
  industry: string;
  technologies: string[];
  challenge: string;
  solution: string;
  results: string;
  metrics: { value: string; label: string }[];
}

export function DarkProjectCard({ project }: { project: DarkProjectData }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "challenge" | "solution" | "results"
  >("challenge");

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) / (r.width / 2);
    const y = (e.clientY - r.top - r.height / 2) / (r.height / 2);
    setTilt({ x: y * 6, y: -x * 6 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseMove={onMove}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => {
        setHov(false);
        setTilt({ x: 0, y: 0 });
      }}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform .15s ease-out",
      }}
      whileHover={{ y: -8 }}
      className="relative rounded-2xl overflow-hidden cursor-pointer group flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Hover color wash */}
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: `${project.accentColor}20` }}
        />
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[9px] font-bold text-white uppercase tracking-wider"
          style={{
            background: `${project.accentColor}90`,
            border: `1px solid ${project.accentColor}60`,
          }}
        >
          {project.category}
        </span>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <ExternalLink size={14} className="text-white" />
        </div>
      </div>

      {/* Body */}
      <div
        className="p-5 flex flex-col flex-1 bg-white border border-[#E9D5FF]/60 rounded-b-2xl"
        style={{ borderTop: "none" }}
      >
        {/* Title + industry */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-display font-bold text-[#0F172A] text-sm leading-tight group-hover:text-[#7B2FF7] transition-colors flex-1 mr-2">
            {project.title}
          </h3>
          <span
            className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border flex-shrink-0"
            style={{
              color: project.accentColor,
              borderColor: `${project.accentColor}30`,
              backgroundColor: `${project.accentColor}08`,
            }}
          >
            {project.industry}
          </span>
        </div>

        {/* Mini tabs */}
        <div className="flex gap-1.5 mb-3 border-b border-slate-100 pb-1.5">
          {(["challenge", "solution", "results"] as const).map((tab) => (
            <button
              key={tab}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(tab);
              }}
              className="px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider transition-all cursor-pointer"
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

        {/* Tab content */}
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

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.metrics.map((m, i) => (
            <div
              key={i}
              className="p-2 rounded-xl text-center border border-slate-100"
              style={{ backgroundColor: `${project.accentColor}05` }}
            >
              <span
                className="block text-xs sm:text-[13px] font-display font-black leading-none mb-1"
                style={{ color: project.accentColor }}
              >
                {m.value}
              </span>
              <span className="block text-[8px] font-medium text-slate-400 uppercase tracking-wider truncate">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Footer: tech stack + CTA */}
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
          <a href="/contact">
            <button
              className="px-3.5 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider text-white shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-1 cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}dd)`,
              }}
            >
              Start Project{" "}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* Accent bottom border on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg,transparent,${project.accentColor},transparent)`,
          opacity: hov ? 1 : 0,
        }}
      />
    </motion.div>
  );
}
