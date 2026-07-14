import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

// Dashboard images for featured solutions
import erpImg from "../assets/erp_dashboard.png";
import inventoryImg from "../assets/inventory_dashboard.png";
import medassistImg from "../assets/medassist_dashboard.png";
import billingImg from "../assets/billing_dashboard.png";
import employmentImg from "../assets/employment_dashboard.png";
import crmImg from "../assets/crm_dashboard.png";

import aiDashImg from "../assets/work_ai_concept.png";
import trainingImg from "../assets/work_training_concept.png";

// ─────────────────────────────────────────
// SOLUTION DATA
// ─────────────────────────────────────────
interface FeaturedSolution {
  id: string;
  category: string;
  name: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  timeline: string;
  industry: string;
  status: string;
  image: string;
  accent: string;
  accentBg: string;
  floatInfo: [string, string];
}

const solutions: FeaturedSolution[] = [
  {
    id: "erp",
    category: "Enterprise",
    name: "ERP Platform",
    description: "Enterprise Resource Planning platform that centralizes HR, CRM, Finance, Procurement, Inventory, and Business Operations into one intelligent system with real-time analytics and automated workflows.",
    problem: "Businesses operating across disconnected spreadsheets and legacy software, causing data silos, manual reconciliation, and delayed decision-making.",
    solution: "Unified multi-module platform with role-based dashboards, automated workflows, and real-time cross-department analytics reducing operational overhead by 60%.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    timeline: "6 months",
    industry: "Enterprise",
    status: "Live",
    image: erpImg,
    accent: "#7c3aed",
    accentBg: "rgba(124, 58, 237, 0.08)",
    floatInfo: ["10K+ Active Users", "99.9% Uptime"],
  },
  {
    id: "inventory",
    category: "Logistics",
    name: "Inventory Management System",
    description: "Smart warehouse automation with real-time stock tracking, supplier management, barcode scanning, predictive restocking, and end-to-end supply chain visibility.",
    problem: "Manual stock counting leading to overstocking, stockouts, and blind spots in the supply chain costing thousands monthly.",
    solution: "Automated barcode-driven tracking with ML-powered demand forecasting, reducing stockouts by 45% and cutting warehouse costs by 30%.",
    tech: ["React", "Express", "MongoDB"],
    timeline: "4 months",
    industry: "Logistics",
    status: "Live",
    image: inventoryImg,
    accent: "#3b82f6",
    accentBg: "rgba(59, 130, 246, 0.08)",
    floatInfo: ["45% Less Stockouts", "Real-time Sync"],
  },
  {
    id: "medassist",
    category: "Healthcare",
    name: "MedAssist Pharmacy System",
    description: "Digital pharmacy management designed for hospitals and medical stores — handling prescriptions, medicine inventory, patient records, billing, and doctor consultation scheduling.",
    problem: "Paper-based prescription management causing dispensing errors, inventory mismatches, and poor patient follow-up tracking.",
    solution: "Digital prescription flow with drug interaction checks, automated reorder points, and patient history tracking reducing errors by 80%.",
    tech: ["React", "Node.js", "MongoDB"],
    timeline: "5 months",
    industry: "Healthcare",
    status: "Live",
    image: medassistImg,
    accent: "#06b6d4",
    accentBg: "rgba(6, 182, 212, 0.08)",
    floatInfo: ["80% Fewer Errors", "HIPAA Ready"],
  },
  {
    id: "billing",
    category: "Retail",
    name: "Billing & POS System",
    description: "Smart billing software with POS terminals, GST-compliant invoicing, inventory integration, multi-payment support, and comprehensive sales analytics.",
    problem: "Slow manual billing causing long checkout queues, GST compliance issues, and disconnected sales-inventory data.",
    solution: "Lightning-fast POS with 0.8s transaction time, auto-GST calculation, and real-time inventory deduction on every sale.",
    tech: ["React", "Node.js", "MongoDB"],
    timeline: "3 months",
    industry: "Retail",
    status: "Live",
    image: billingImg,
    accent: "#f59e0b",
    accentBg: "rgba(245, 158, 11, 0.08)",
    floatInfo: ["0.8s Transactions", "GST Compliant"],
  },
  {
    id: "employment",
    category: "HR Tech",
    name: "Employment Management System",
    description: "Comprehensive HR platform covering employee onboarding, attendance tracking, payroll automation, leave management, department hierarchy, and performance reviews.",
    problem: "HR teams drowning in Excel sheets for attendance, manual payroll calculations, and no visibility into employee performance trends.",
    solution: "Automated attendance capture with biometric integration, one-click payroll processing, and visual performance dashboards.",
    tech: ["React", "Node.js", "MongoDB"],
    timeline: "4 months",
    industry: "HR Tech",
    status: "Live",
    image: employmentImg,
    accent: "#10b981",
    accentBg: "rgba(16, 185, 129, 0.08)",
    floatInfo: ["500+ Employees", "Auto Payroll"],
  },
  {
    id: "crm",
    category: "SaaS",
    name: "Viyan CRM Platform",
    description: "Customer relationship platform for managing leads, tracking sales pipeline stages, automating follow-ups, and analyzing business growth with visual dashboards.",
    problem: "Sales teams losing leads in scattered notes and emails, with no pipeline visibility or automated follow-up reminders.",
    solution: "Visual pipeline management with drag-and-drop stages, automated email sequences, and 2.4x improvement in lead conversion rates.",
    tech: ["React", "Node.js", "MongoDB"],
    timeline: "5 months",
    industry: "SaaS",
    status: "Live",
    image: crmImg,
    accent: "#8b5cf6",
    accentBg: "rgba(139, 92, 246, 0.08)",
    floatInfo: ["2.4x Conversions", "Auto Follow-ups"],
  },
  {
    id: "ai-dashboard",
    category: "AI / ML",
    name: "AI Analytical Dashboard",
    description: "AI-powered business intelligence dashboard delivering predictive insights, neural-network-driven forecasting, interactive data visualization, and automated reporting.",
    problem: "Decision-makers relying on stale monthly reports with no predictive capabilities, missing market trends and opportunities.",
    solution: "GPT-4o powered analytics with real-time RAG search, predictive models saving 120+ hours per week in manual analysis.",
    tech: ["Python", "OpenAI", "React", "LangChain"],
    timeline: "4 months",
    industry: "AI / ML",
    status: "Beta",
    image: aiDashImg,
    accent: "#ec4899",
    accentBg: "rgba(236, 72, 153, 0.08)",
    floatInfo: ["120h Saved/Week", "GPT-4o Powered"],
  },
  {
    id: "training",
    category: "EdTech",
    name: "Training & Internship Portal",
    description: "Learning Management System for students and mentors — course management, assignment tracking, attendance, certifications, progress analytics, and internship lifecycle management.",
    problem: "Training institutions using paper registers and WhatsApp groups, with no centralized progress tracking or certificate generation.",
    solution: "Digital LMS with auto-attendance, assignment pipelines, progress dashboards, and one-click certificate generation.",
    tech: ["React", "Python", "MongoDB"],
    timeline: "5 months",
    industry: "EdTech",
    status: "Live",
    image: trainingImg,
    accent: "#22c55e",
    accentBg: "rgba(34, 197, 94, 0.08)",
    floatInfo: ["1000+ Students", "Auto Certificates"],
  },
];

// ─────────────────────────────────────────
// SINGLE SOLUTION CARD
// ─────────────────────────────────────────
function SolutionCard({ data, index }: { data: FeaturedSolution; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isReverse = index % 2 === 1;

  // Scroll reveal with Intersection Observer
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("work-reveal--visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`work-solution work-reveal ${isReverse ? "work-solution--reverse" : ""}`}
    >
      <div className="work-solution__inner">
        {/* Background mesh */}
        <div className="work-solution__mesh">
          <div
            className="work-solution__mesh-orb work-solution__mesh-orb--1"
            style={{ background: `radial-gradient(circle, ${data.accent}15 0%, transparent 70%)` }}
          />
          <div
            className="work-solution__mesh-orb work-solution__mesh-orb--2"
            style={{ background: `radial-gradient(circle, ${data.accent}10 0%, transparent 70%)` }}
          />
        </div>

        {/* Content side */}
        <div className="work-solution__content">
          {/* Badge */}
          <span
            className="work-solution__badge"
            style={{ background: `linear-gradient(135deg, ${data.accent}, ${data.accent}cc)` }}
          >
            <Sparkles size={10} />
            {data.category}
          </span>

          {/* Name */}
          <h3 className="work-solution__name">{data.name}</h3>

          {/* Description */}
          <p className="work-solution__desc">{data.description}</p>

          {/* Problem / Solution */}
          <div className="work-solution__blocks">
            <div className="work-solution__block">
              <div
                className="work-solution__block-label"
                style={{ color: data.accent }}
              >
                Business Problem
              </div>
              <p className="work-solution__block-text">{data.problem}</p>
            </div>
            <div className="work-solution__block">
              <div
                className="work-solution__block-label"
                style={{ color: data.accent }}
              >
                Our Solution
              </div>
              <p className="work-solution__block-text">{data.solution}</p>
            </div>
          </div>

          {/* Tech chips */}
          <div className="work-solution__tech">
            {data.tech.map((t) => (
              <span
                key={t}
                className="work-solution__tech-chip"
                style={{
                  color: data.accent,
                  backgroundColor: data.accentBg,
                  borderColor: `${data.accent}20`,
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Metadata */}
          <div className="work-solution__meta">
            <div className="work-solution__meta-item">
              <span className="work-solution__meta-label">Timeline</span>
              <span className="work-solution__meta-value">{data.timeline}</span>
            </div>
            <div className="work-solution__meta-item">
              <span className="work-solution__meta-label">Industry</span>
              <span className="work-solution__meta-value">{data.industry}</span>
            </div>
            <div className="work-solution__meta-item">
              <span className="work-solution__meta-label">Status</span>
              <span className="work-solution__meta-value" style={{ color: data.status === "Live" ? "#10b981" : data.accent }}>
                ● {data.status}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="work-solution__buttons">
            <Link
              to="/contact"
              className="work-solution__btn work-solution__btn--primary"
              style={{ background: `linear-gradient(135deg, ${data.accent}, ${data.accent}dd)` }}
            >
              View Project <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/contact"
              className="work-solution__btn work-solution__btn--secondary"
            >
              Start Project <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Visual side */}
        <div className="work-solution__visual">
          <div className="work-solution__image-wrapper">
            {/* Glow */}
            <div
              className="work-solution__image-glow"
              style={{ background: `radial-gradient(circle, ${data.accent}30 0%, transparent 70%)` }}
            />

            <motion.img
              src={data.image}
              alt={`${data.name} Dashboard`}
              className="work-solution__image"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />

            {/* Floating info cards */}
            <div className="work-solution__float-info work-solution__float-info--1">
              <Sparkles size={10} style={{ display: "inline", marginRight: 6, opacity: 0.6 }} />
              {data.floatInfo[0]}
            </div>
            <div className="work-solution__float-info work-solution__float-info--2">
              <Sparkles size={10} style={{ display: "inline", marginRight: 6, opacity: 0.6 }} />
              {data.floatInfo[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────
export function WorkFeaturedSolutions() {
  return (
    <section className="work-featured">
      <div className="work-featured__header">
        <motion.h2
          className="work-featured__heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Featured{" "}
          <span style={{ color: "#7c3aed" }}>
            Solutions
          </span>
        </motion.h2>
        <motion.p
          className="work-featured__sub"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Each product is crafted with precision, from discovery to production — built for scale and designed for impact.
        </motion.p>
      </div>

      {solutions.map((s, i) => (
        <SolutionCard key={s.id} data={s} index={i} />
      ))}
    </section>
  );
}
