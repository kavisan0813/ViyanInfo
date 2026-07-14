import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LiquidFooter } from "../components/LiquidFooter";
import workImg from "../assets/Workimg.webp";
import { PortfolioHeroCarousel } from "../components/PortfolioVisuals";
import "../styles/PremiumShowcase.css";
import erpImg from "../assets/erp_dashboard.png";
import inventoryImg from "../assets/inventory_dashboard.png";
import medassistImg from "../assets/medassist_dashboard.png";
import billingImg from "../assets/billing_dashboard.png";
import crmImg from "../assets/crm_dashboard.png";

interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  features: string[];
  techStack: string[];
  accentColor: string;
  accentBg: string;
}

const projects: ShowcaseProject[] = [
  {
    id: "erp-platform-finflow",
    title: "ERP Platform for FinFlow",
    description:
      "Enterprise Resource Planning platform designed to automate bookkeeping, employee payroll cycles, and real-time ledger reporting.",
    category: "Financial Services",
    image: erpImg,
    features: [
      "Automated Ledger",
      "Payroll Engine",
      "Department Controls",
      "Audit Logs",
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    accentColor: "#7c3aed",
    accentBg: "rgba(124, 58, 237, 0.12)",
  },
  {
    id: "medassist-medgroup",
    title: "MedAssist for MedGroup",
    description:
      "Real-time inventory solution with warehouse tracking, supplier management, barcode scanning, and stock analytics.",
    category: "Logistics",
    image: inventoryImg,
    features: [
      "Warehouse",
      "Barcode",
      "Reports",
      "Stock",
      "Supplier",
      "Analytics",
    ],
    techStack: ["React", "Express", "MongoDB"],
    accentColor: "#3b82f6",
    accentBg: "rgba(59, 130, 246, 0.12)",
  },
  {
    id: "medassist",
    title: "MedAssist Pharmacy System",
    description:
      "Digital pharmacy management software designed for hospitals and medical stores with prescription and medicine tracking.",
    category: "Healthcare",
    image: medassistImg,
    features: [
      "Prescriptions",
      "GST Billing",
      "Expiry Alert Engine",
      "Supplier Portal",
    ],
    techStack: ["React", "Express.js", "MongoDB"],
    accentColor: "#06b6d4",
    accentBg: "rgba(6, 182, 212, 0.12)",
  },
  {
    id: "billing-ledgertech",
    title: "POS Ecosystem for LedgerTech",
    description:
      "High-volume sales and checkout terminal network shipped to LedgerTech retail branches, integrated with real-time stock sync.",
    category: "Retail Operations",
    image: billingImg,
    features: [
      "Sales Registers",
      "Offline Mode",
      "Cloud Sync",
      "Multi-branch GST",
    ],
    techStack: ["React", "Fastify", "PostgreSQL"],
    accentColor: "#f59e0b",
    accentBg: "rgba(245, 158, 11, 0.12)",
  },
  {
    id: "crm-propgroup",
    title: "CRM System for PropGroup",
    description:
      "Lead tracking dashboard and agent communication workflow platform with automated email follow-up templates.",
    category: "Real Estate Tech",
    image: crmImg,
    features: [
      "Lead Tracker",
      "Agent Assignment",
      "Email Automation",
      "Metrics",
    ],
    techStack: ["React", "Node.js", "MongoDB"],
    accentColor: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.12)",
  },
];

// ─────────────────────────────────────────
// PREMIUM PRODUCT CARD
// ─────────────────────────────────────────
function PremiumProductCard({
  project,
  index,
}: {
  project: ShowcaseProject;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll-reveal
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="showcase-card"
      style={
        {
          "--card-accent": project.accentBg,
          opacity: 0,
          transform: "translateY(40px) scale(0.95)",
          transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
        } as React.CSSProperties
      }
    >
      <div className="showcase-card__inner">
        {/* Image Section */}
        <div className="showcase-card__image">
          <img
            src={project.image}
            alt={`${project.title} Dashboard`}
            loading="lazy"
          />
          {/* Category Badge */}
          <span
            className="showcase-card__badge"
            style={{
              background: `${project.accentColor}cc`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Content Section */}
        <div className="showcase-card__content">
          <span className="showcase-card__title">{project.title}</span>
          <p className=" showcase-card__desc">{project.description}</p>

          {/* Feature Chips */}
          <div className="showcase-card__chips">
            {project.features.map((f) => (
              <span key={f} className="showcase-card__chip">
                {f}
              </span>
            ))}
          </div>

          {/* Footer: Tech stack + CTA */}
          <div className="showcase-card__footer">
            <div className="showcase-card__tech">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="showcase-card__tech-chip"
                  style={{
                    color: project.accentColor,
                    backgroundColor: `${project.accentColor}08`,
                    borderColor: `${project.accentColor}20`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <Link to="/contact">
              <button className="showcase-card__cta">
                View Project
                <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
export default function Portfolio() {
  return (
    <div
      className="bg-[#FAF7FF] relative min-h-screen text-[#0F172A] overflow-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── HERO SECTION (unchanged) ── */}
      <section className="relative z-10 pt-28 pb-16">
        <div className="container max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7B2FF7] mb-3 block">
              Client Case Studies
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0F172A] mb-4 leading-tight">
              Software Shipped for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg,#7B2FF7,#EC4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Clients
              </span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Custom software, specialized enterprise platforms, and
              integrations designed and engineered by ViyanInfo for businesses.
            </p>
          </motion.div>

          {/* Hero Carousel (unchanged) */}
          <PortfolioHeroCarousel />
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      <section className="relative">
        <div className="container max-w-[1280px] mx-auto px-6"></div>
      </section>

      {/* ── PREMIUM SHOWCASE GRID (redesigned) ── */}
      <section className="showcase-section py-16">
        <div className="container max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="showcase-section__heading text-3xl sm:text-4xl font-display font-extrabold mb-4">
              Client{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Case Studies
              </span>
            </h2>
            <p className="showcase-section__sub text-slate-500 max-w-xl mx-auto">
              Tailored digital transformations shipped from discovery to
              production.
            </p>
          </motion.div>

          <div className="showcase-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <PremiumProductCard
                key={project.id}
                project={project}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + FOOTER SECTION (unchanged) ── */}
      <section
        className="relative w-[94%] md:w-full mx-auto overflow-hidden rounded-t-[32px] rounded-b-none md:rounded-t-[40px] md:rounded-b-none z-10"
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
        <div className="relative z-10 flex justify-end px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl flex flex-col items-end text-right"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to build your solution?
            </span>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
              Let's coordinate on requirements and construct your application.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="self-center"
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

        {/* Footer remains unchanged */}
        <LiquidFooter />
      </section>
    </div>
  );
}
