import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

// Concept scene illustrations
import erpImg from "../assets/work_erp_concept.png";
import inventoryImg from "../assets/work_inventory_concept.png";
import pharmacyImg from "../assets/work_pharmacy_concept.png";
import billingImg from "../assets/work_billing_concept.png";
import employmentImg from "../assets/work_employment_concept.png";
import crmImg from "../assets/work_crm_concept.png";
import aiImg from "../assets/work_ai_concept.png";
import trainingImg from "../assets/work_training_concept.png";

// ─────────────────────────────────────────
// SLIDE DATA
// ─────────────────────────────────────────
export interface HeroSlide {
  id: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  tech: string[];
  image: string;
  accent: string;       // Primary accent
  accentDark: string;   // Darker shade
  gradientFrom: string;
  gradientTo: string;
  floatCards: string[];
}

export const heroSlides: HeroSlide[] = [
  {
    id: "erp",
    category: "Enterprise",
    title: "ERP Platform",
    headline: "Enterprise Resource Planning for modern businesses.",
    description: "Centralized system connecting HR, CRM, Finance, Procurement, and Inventory into one intelligent platform with real-time analytics.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: erpImg,
    accent: "#7c3aed",
    accentDark: "#6d28d9",
    gradientFrom: "rgba(124, 58, 237, 0.95)",
    gradientTo: "rgba(79, 70, 229, 0.85)",
    floatCards: ["Finance Module", "HR Dashboard", "Live Analytics"],
  },
  {
    id: "inventory",
    category: "Logistics",
    title: "Inventory Management",
    headline: "Smart warehouse automation.",
    description: "Real-time inventory tracking with autonomous scanning, supplier management, stock predictions, and supply chain visualization.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    image: inventoryImg,
    accent: "#3b82f6",
    accentDark: "#2563eb",
    gradientFrom: "rgba(59, 130, 246, 0.95)",
    gradientTo: "rgba(37, 99, 235, 0.85)",
    floatCards: ["Stock Tracker", "Barcode Scan", "Supply Chain"],
  },
  {
    id: "medassist",
    category: "Healthcare",
    title: "MedAssist Pharmacy",
    headline: "Digital healthcare management.",
    description: "Pharmacy management with prescription tracking, medicine inventory, patient records, billing, and doctor consultations.",
    tech: ["React", "Node.js", "MongoDB"],
    image: pharmacyImg,
    accent: "#06b6d4",
    accentDark: "#0891b2",
    gradientFrom: "rgba(6, 182, 212, 0.95)",
    gradientTo: "rgba(8, 145, 178, 0.85)",
    floatCards: ["Prescriptions", "Medicine DB", "Patient Care"],
  },
  {
    id: "billing",
    category: "Retail",
    title: "Billing & POS",
    headline: "Modern retail payment ecosystem.",
    description: "Smart billing with POS terminals, GST-compliant invoices, inventory sync, multi-gateway payments, and sales reporting.",
    tech: ["React", "Node.js", "MongoDB"],
    image: billingImg,
    accent: "#f59e0b",
    accentDark: "#d97706",
    gradientFrom: "rgba(245, 158, 11, 0.92)",
    gradientTo: "rgba(217, 119, 6, 0.85)",
    floatCards: ["POS Terminal", "GST Invoice", "Sales Report"],
  },
  {
    id: "employment",
    category: "HR Tech",
    title: "Employment Management",
    headline: "Modern HR software.",
    description: "Comprehensive platform for attendance tracking, payroll processing, leave management, department hierarchy, and performance reviews.",
    tech: ["React", "Node.js", "MongoDB"],
    image: employmentImg,
    accent: "#10b981",
    accentDark: "#059669",
    gradientFrom: "rgba(16, 185, 129, 0.93)",
    gradientTo: "rgba(5, 150, 105, 0.85)",
    floatCards: ["Attendance", "Payroll", "Performance"],
  },
  {
    id: "crm",
    category: "SaaS",
    title: "Viyan CRM",
    headline: "Customer relationship platform.",
    description: "Lead pipeline management, customer interaction tracking, sales forecasting, task automation, and business growth analytics.",
    tech: ["React", "Node.js", "MongoDB"],
    image: crmImg,
    accent: "#8b5cf6",
    accentDark: "#7c3aed",
    gradientFrom: "rgba(139, 92, 246, 0.94)",
    gradientTo: "rgba(124, 58, 237, 0.85)",
    floatCards: ["Lead Pipeline", "Sales Growth", "Automation"],
  },
  {
    id: "ai-dashboard",
    category: "AI / ML",
    title: "AI Analytical Dashboard",
    headline: "Business Intelligence.",
    description: "AI-powered analytics delivering predictive insights, neural-network-driven forecasting, interactive charts, and automated reports.",
    tech: ["Python", "OpenAI", "React", "LangChain"],
    image: aiImg,
    accent: "#ec4899",
    accentDark: "#db2777",
    gradientFrom: "rgba(236, 72, 153, 0.94)",
    gradientTo: "rgba(219, 39, 119, 0.85)",
    floatCards: ["AI Predictions", "Neural Net", "Data Streams"],
  },
  {
    id: "training",
    category: "EdTech",
    title: "Training Portal",
    headline: "Digital learning ecosystem.",
    description: "LMS for students and mentors with assignments, progress tracking, attendance, certifications, and internship management.",
    tech: ["React", "Python", "MongoDB"],
    image: trainingImg,
    accent: "#22c55e",
    accentDark: "#16a34a",
    gradientFrom: "rgba(34, 197, 94, 0.93)",
    gradientTo: "rgba(22, 163, 74, 0.85)",
    floatCards: ["Certificates", "Mentors", "Progress"],
  },
];

// ─────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────
const bgVariants: Variants = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.98, filter: "blur(8px)", transition: { duration: 0.5 } },
};

const contentVariants: Variants = {
  enter: { opacity: 0, y: 40 },
  center: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

const childVariants: Variants = {
  enter: { opacity: 0, y: 20 },
  center: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -10 },
};

const imageVariants: Variants = {
  enter: { opacity: 0, scale: 0.85, rotate: 3 },
  center: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.15 } },
  exit: { opacity: 0, scale: 0.9, rotate: -2, transition: { duration: 0.4 } },
};

// ─────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────
export function WorkHeroCarousel() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const SLIDE_DURATION = 6000; // 6 seconds

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setProgress(0);
  }, []);

  // Auto-advance
  useEffect(() => {
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= SLIDE_DURATION) {
        setActive((prev) => (prev + 1) % heroSlides.length);
        setProgress(0);
        return;
      }
      progressRef.current = requestAnimationFrame(tick);
    };

    progressRef.current = requestAnimationFrame(tick);

    return () => {
      if (progressRef.current) cancelAnimationFrame(progressRef.current);
    };
  }, [active]);

  // Mouse parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x, y });
  }, []);

  // Cleanup timer
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const slide = heroSlides[active];

  return (
    <section
      ref={containerRef}
      className="work-hero"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id + "-bg"}
          className="work-hero__bg"
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div
            className="work-hero__bg-gradient"
            style={{
              background: `linear-gradient(135deg, ${slide.gradientFrom} 0%, ${slide.gradientTo} 40%, rgba(15, 23, 42, 0.92) 100%)`,
            }}
          />
          {/* Animated blobs */}
          <div
            className="work-hero__blob"
            style={{
              width: 500,
              height: 500,
              top: "10%",
              right: "20%",
              background: `radial-gradient(circle, ${slide.accent}40 0%, transparent 70%)`,
              animationDelay: "0s",
            }}
          />
          <div
            className="work-hero__blob"
            style={{
              width: 350,
              height: 350,
              bottom: "15%",
              left: "10%",
              background: `radial-gradient(circle, ${slide.accent}25 0%, transparent 70%)`,
              animationDelay: "-4s",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide content */}
      <div className="work-hero__slide">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-content"}
            className="work-hero__content"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {/* Category */}
            <motion.div variants={childVariants} className="work-hero__category">
              <span
                className="work-hero__category-badge"
                style={{ background: `${slide.accent}80` }}
              >
                {slide.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 variants={childVariants} className="work-hero__title">
              {slide.title}
            </motion.h1>

            {/* Headline */}
            <motion.p variants={childVariants} className="work-hero__headline">
              {slide.headline}
            </motion.p>

            {/* Description */}
            <motion.p variants={childVariants} className="work-hero__desc">
              {slide.description}
            </motion.p>

            {/* Tech chips */}
            <motion.div variants={childVariants} className="work-hero__chips">
              {slide.tech.map((t) => (
                <span key={t} className="work-hero__chip">{t}</span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={childVariants} className="work-hero__buttons">
              <Link to="/contact" className="work-hero__btn work-hero__btn--primary">
                View Project <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="work-hero__btn work-hero__btn--secondary">
                <Sparkles size={14} /> Explore Solution
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Visual side */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id + "-visual"}
            className="work-hero__visual"
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div
              className="work-hero__illustration-wrapper"
              style={{
                transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 10}px)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Glow */}
              <div
                className="work-hero__glow"
                style={{ background: `radial-gradient(circle, ${slide.accent}50 0%, transparent 70%)` }}
              />

              {/* Rings */}
              <div className="work-hero__ring work-hero__ring--1" />
              <div className="work-hero__ring work-hero__ring--2" />
              <div className="work-hero__ring work-hero__ring--3" />

              {/* Illustration */}
              <img
                src={slide.image}
                alt={slide.title}
                className="work-hero__illustration"
                style={{
                  transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 5}px)`,
                  transition: "transform 0.15s ease-out",
                }}
              />

              {/* Floating glass cards */}
              {slide.floatCards.map((card, i) => (
                <div
                  key={card}
                  className={`work-hero__float-card work-hero__float-card--${i + 1}`}
                  style={{
                    transform: `translate(${mousePos.x * (12 + i * 5)}px, ${mousePos.y * (8 + i * 3)}px)`,
                    transition: "transform 0.2s ease-out",
                  }}
                >
                  <Sparkles size={10} style={{ display: "inline", marginRight: 6, opacity: 0.7 }} />
                  {card}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="work-hero__indicators">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`work-hero__indicator ${i === active ? "work-hero__indicator--active" : ""}`}
            aria-label={`Go to slide ${i + 1}: ${s.title}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div
        className="work-hero__progress"
        style={{ width: `${progress}%` }}
      />
    </section>
  );
}
