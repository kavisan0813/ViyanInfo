import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LiquidFooter } from "../components/LiquidFooter";
import workImg from "../assets/work img.webp";
import {
  PortfolioHeroCarousel,
  PortfolioFilterPills,
  DarkProjectCard,
  type DarkProjectData,
} from "../components/PortfolioVisuals";

// Import existing image assets
import inventryImg from "../assets/inventry.webp";
import emsImg from "../assets/ems.webp";
import aboutImg from "../assets/about_what_we_do.webp";
import saasHeroImg from "../assets/saas_hero_server.webp";
import websitesImg from "../assets/website_final_product.webp";

// ─────────────────────────────────────────
// PROJECT DATA — real ViyanInfo projects
// ─────────────────────────────────────────
const projects: DarkProjectData[] = [
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
    accentColor: "#06B6D4",
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
    accentColor: "#F59E0B",
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
    accentColor: "#3B82F6",
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
    accentColor: "#F59E0B",
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
    accentColor: "#22C55E",
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
    accentColor: "#EC4899",
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
    accentColor: "#06B6D4",
    industry: "Healthcare",
  },
];

// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div
      className="bg-[#FAF7FF] relative min-h-screen text-[#0F172A] overflow-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── HERO SECTION ── */}
      <section className="relative z-10 pt-28 pb-16">
        <div className="container max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7B2FF7] mb-3 block">
              Our Work
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0F172A] mb-4 leading-tight">
              Products that{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#7B2FF7,#EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                move needles
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              End-to-end digital products shipped from discovery to production
              for ambitious teams.
            </p>
          </motion.div>

          {/* Hero Carousel */}
          <PortfolioHeroCarousel />
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="relative">
        <div className="container max-w-[1280px] mx-auto px-6">
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="relative py-16">
        <div className="container max-w-[1280px] mx-auto px-6">
          {/* Filter pills */}
          <div className="mb-10">
            <PortfolioFilterPills
              active={activeFilter}
              onChange={setActiveFilter}
            />
          </div>

          {/* Project grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
            >
              {filteredProjects.map((p) => (
                <DarkProjectCard key={p.id} project={p} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-slate-500 text-sm">
                No projects in this category yet — check back soon.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── CTA + FOOTER SECTION ── */}
      <section
        className="relative w-[94%] md:w-full mx-auto overflow-hidden rounded-[32px] md:rounded-[40px] z-10"
        style={{
          minHeight: "950px",
          marginTop: "80px",
          paddingTop: "70px",
          paddingBottom: "40px",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={workImg}
            alt="Work Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "rgba(10, 10, 20, 0.45)" }}
        />

        {/* CTA */}
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
                  className="relative px-[48px] py-[18px] text-white font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_40px_rgba(124,58,237,0.55)] transition-all duration-300 border border-white/10 flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #9333ea, #6366f1)",
                  }}
                >
                  Start Project <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Glassmorphism Footer */}
        <LiquidFooter />
      </section>
    </div>
  );
}
