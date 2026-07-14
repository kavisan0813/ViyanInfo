import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Layers,
  Palette,
  Eye,
  Settings,
  TrendingUp,
  Heart,
  UserCheck,
} from "lucide-react";
import { LiquidFooter } from "../components/LiquidFooter";
import uiuxImg from "../assets/uiux_img.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionDivider } from "../components/SectionDivider";
import "../styles/DesignPillarsFlip.css";
import {
  FigmaCanvasHero,
  DesignShowcaseGallery,
  BeforeAfterSlider,
  DesignProcessSVG,
} from "../components/FigmaCanvasHero";

gsap.registerPlugin(ScrollTrigger);

/* ─────────────────────────────────────────
   LUSION 3D FLIP — Design Pillars
   ───────────────────────────────────────── */

const designPillars = [
  {
    title: "User Research",
    badgeText: "Research",
    icon: Search,
    glow: "#8B5CF6", // Purple (from AI)
    glowRgba: "rgba(124,58,237,.25)",
    badgeBg: "rgba(124,58,237,.12)",
    badgeColor: "#7C3AED",
    gradient: "linear-gradient(180deg, #FCF8FF 0%, #F3E8FF 100%)",
    backGradient: "linear-gradient(135deg, #F3E8FF 0%, #FFFFFF 100%)",
    description:
      "Perform comprehensive interviews, mapping custom personas, and finding layout friction zones to align design specs.",
    tags: "Personas • User Testing • Surveys",
  },
  {
    title: "Wireframing",
    badgeText: "Wireframes",
    icon: Layers,
    glow: "#22C55E", // Green (from Python)
    glowRgba: "rgba(34,197,94,.25)",
    badgeBg: "rgba(34,197,94,.12)",
    badgeColor: "#16A34A",
    gradient: "linear-gradient(180deg, #F2FFF8 0%, #E8FFF2 100%)",
    backGradient: "linear-gradient(135deg, #E8FFF2 0%, #FFFFFF 100%)",
    description:
      "Drafting structural screen maps and navigation hierarchies to establish clean page logic before visual design.",
    tags: "Low-fi Mockups • User Flows • Miro",
  },
  {
    title: "UI Design",
    badgeText: "UI",
    icon: Palette,
    glow: "#F59E0B", // Amber (from UI/UX)
    glowRgba: "rgba(245,158,11,.25)",
    badgeBg: "rgba(245,158,11,.12)",
    badgeColor: "#D97706",
    gradient: "linear-gradient(180deg, #FFFDF4 0%, #FFF7E6 100%)",
    backGradient: "linear-gradient(135deg, #FFF7E6 0%, #FFFFFF 100%)",
    description:
      "Applying premium typographic structures, grid alignments, customized SVGs, and consistent color pallets in Figma.",
    tags: "Figma • Visual Styling • Vectors",
  },
  {
    title: "UX Optimization",
    badgeText: "UX",
    icon: Eye,
    glow: "#06B6D4", // Cyan (from Data Science)
    glowRgba: "rgba(6,182,212,.25)",
    badgeBg: "rgba(6,182,212,.12)",
    badgeColor: "#0891B2",
    gradient: "linear-gradient(180deg, #F3FCFF 0%, #E8F8FF 100%)",
    backGradient: "linear-gradient(135deg, #E8F8FF 0%, #FFFFFF 100%)",
    description:
      "Refining checkout steps, form completions, and interaction states to remove user friction and improve retention.",
    tags: "Heuristics • Friction Audits • Analytics",
  },
  {
    title: "Design Systems",
    badgeText: "Systems",
    icon: Settings,
    glow: "#F97316", // Orange (from Full Stack)
    glowRgba: "rgba(249,115,22,.25)",
    badgeBg: "rgba(249,115,22,.12)",
    badgeColor: "#EA580C",
    gradient: "linear-gradient(180deg, #FFF8F3 0%, #FFF2EA 100%)",
    backGradient: "linear-gradient(135deg, #FFF2EA 0%, #FFFFFF 100%)",
    description:
      "Building modular, component-based Figma libraries and styleguides to coordinate design changes and developer handoffs.",
    tags: "Figma Tokens • Component Kits",
  },
];

function DesignPillarsFlip() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".dp-card-inner") as HTMLElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      });

      cards.forEach((card, i) => {
        tl.to(
          card,
          {
            rotateY: 180,
            rotateX: -6,
            z: 100,
            duration: 1,
          },
          i * 0.15,
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="dp-section">
      <div className="dp-viewport">
        {/* Heading */}
        <div className="dp-heading">
          <span className="dp-label">Our Process Layers</span>
          <h2>Human-Centered Design Pillars</h2>
          <p>
            We design modular layouts starting from user research all the way up
            to system codebases.
          </p>
        </div>

        {/* Cards row */}
        <div className="dp-cards-row">
          {designPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div key={idx} className="dp-card">
                <div className="dp-card-inner">
                  {/* FRONT FACE — Tarot Playing Card Style */}
                  <div 
                    className="dp-card-front tarot-front"
                    style={{ background: pillar.gradient, "--card-glow": pillar.glow, "--card-glow-rgba": pillar.glowRgba } as React.CSSProperties}
                  >
                    {/* SVG Geometric Decorations */}
                    <svg
                      className="tarot-geometry"
                      style={{ color: pillar.glowRgba }}
                      viewBox="0 0 240 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      {/* Outer border */}
                      <rect x="8" y="8" width="224" height="334" rx="16" stroke="currentColor" strokeWidth="1.5" />
                      {/* Inner border */}
                      <rect x="16" y="16" width="208" height="318" rx="12" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

                      {/* Corner circles */}
                      <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="212" cy="28" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="28" cy="322" r="4" stroke="currentColor" strokeWidth="2" />
                      <circle cx="212" cy="322" r="4" stroke="currentColor" strokeWidth="2" />

                      {/* Corner dot fills */}
                      <circle cx="28" cy="28" r="1" fill="currentColor" />
                      <circle cx="212" cy="28" r="1" fill="currentColor" />
                      <circle cx="28" cy="322" r="1" fill="currentColor" />
                      <circle cx="212" cy="322" r="1" fill="currentColor" />

                      {/* Connecting lines from corners */}
                      <line x1="34" y1="28" x2="80" y2="28" stroke="currentColor" strokeWidth="1" />
                      <line x1="160" y1="28" x2="206" y2="28" stroke="currentColor" strokeWidth="1" />
                      <line x1="34" y1="322" x2="80" y2="322" stroke="currentColor" strokeWidth="1" />
                      <line x1="160" y1="322" x2="206" y2="322" stroke="currentColor" strokeWidth="1" />
                      <line x1="28" y1="34" x2="28" y2="80" stroke="currentColor" strokeWidth="1" />
                      <line x1="28" y1="270" x2="28" y2="316" stroke="currentColor" strokeWidth="1" />
                      <line x1="212" y1="34" x2="212" y2="80" stroke="currentColor" strokeWidth="1" />
                      <line x1="212" y1="270" x2="212" y2="316" stroke="currentColor" strokeWidth="1" />

                      {/* Top semi-circle */}
                      <path d="M100 16 A20 20 0 0 1 140 16" stroke="currentColor" strokeWidth="1" fill="none" />
                      {/* Bottom semi-circle */}
                      <path d="M100 334 A20 20 0 0 0 140 334" stroke="currentColor" strokeWidth="1" fill="none" />

                      {/* Top heart/chevron */}
                      <path d="M115 40 L120 34 L125 40" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />
                      {/* Bottom heart/chevron (inverted) */}
                      <path d="M115 310 L120 316 L125 310" stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" />

                      {/* Left diamond arrow */}
                      <path d="M20 155 L28 145 L28 165 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
                      <path d="M20 195 L28 185 L28 205 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" />

                      {/* Right diamond arrow */}
                      <path d="M220 155 L212 145 L212 165 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" />
                      <path d="M220 195 L212 185 L212 205 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" />

                      {/* Layer 2: Four tiny dots around the diamond */}
                      <circle cx="120" cy="85" r="1.5" fill="currentColor" />
                      <circle cx="120" cy="265" r="1.5" fill="currentColor" />
                      <circle cx="30" cy="175" r="1.5" fill="currentColor" />
                      <circle cx="210" cy="175" r="1.5" fill="currentColor" />

                      {/* Layer 2: Short rays extending outward */}
                      <line x1="120" y1="92" x2="120" y2="102" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="120" y1="248" x2="120" y2="258" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="42" y1="175" x2="52" y2="175" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="188" y1="175" x2="198" y2="175" stroke="currentColor" strokeWidth="1.5" />
                    </svg>

                    {/* Radial Glow Behind Icon */}
                    <div 
                      className="dp-icon-glow" 
                      style={{ background: pillar.glow }}
                    ></div>

                    {/* Top Badge */}
                    <div 
                      className="dp-top-badge"
                      style={{ background: pillar.badgeBg, color: pillar.badgeColor }}
                    >
                      {pillar.badgeText}
                    </div>

                    {/* Render Icon with Circular Glass Container */}
                    <div className="dp-icon-glass">
                      <IconComp
                        className="dp-icon"
                        style={{ color: pillar.glow }}
                      />
                    </div>

                    {/* Title positioned at bottom */}
                    <h3>{pillar.title}</h3>
                    <p className="dp-card-label">Hover to reveal</p>
                  </div>

                  {/* BACK — Description + Tags */}
                  <div
                    className="dp-card-back"
                    style={{ background: pillar.backGradient }}
                  >
                    {/* SVG Blueprint Decorations */}
                    <svg
                      className="blueprint-geometry"
                      style={{ color: pillar.glow }}
                      viewBox="0 0 240 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      {/* Double rounded border */}
                      <rect x="8" y="8" width="224" height="334" rx="16" stroke="currentColor" strokeWidth="1" strokeOpacity="0.8" />
                      <rect x="14" y="14" width="212" height="322" rx="12" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />

                      {/* Decorative engineering corner brackets */}
                      <path d="M 24 14 L 14 14 L 14 24" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 216 14 L 226 14 L 226 24" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 24 336 L 14 336 L 14 326" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M 216 336 L 226 336 L 226 326" stroke="currentColor" strokeWidth="1.5" />

                      {/* Tiny circular anchor points */}
                      <circle cx="28" cy="28" r="2" fill="currentColor" opacity="0.6" />
                      <circle cx="212" cy="28" r="2" fill="currentColor" opacity="0.6" />
                      <circle cx="28" cy="322" r="2" fill="currentColor" opacity="0.6" />
                      <circle cx="212" cy="322" r="2" fill="currentColor" opacity="0.6" />

                      {/* Vertical center guide line */}
                      <line x1="120" y1="14" x2="120" y2="336" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
                      
                      {/* Horizontal measurement lines */}
                      <line x1="14" y1="60" x2="226" y2="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                      <line x1="14" y1="290" x2="226" y2="290" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

                      {/* Small arrows on each side */}
                      <path d="M 14 175 L 18 171 L 18 179 Z" fill="currentColor" opacity="0.5" />
                      <path d="M 226 175 L 222 171 L 222 179 Z" fill="currentColor" opacity="0.5" />
                      <path d="M 120 14 L 116 18 L 124 18 Z" fill="currentColor" opacity="0.5" />
                      <path d="M 120 336 L 116 332 L 124 332 Z" fill="currentColor" opacity="0.5" />

                      {/* Minimal HUD decorations */}
                      <rect x="20" y="70" width="4" height="4" fill="currentColor" opacity="0.4" />
                      <rect x="20" y="80" width="4" height="4" fill="currentColor" opacity="0.4" />
                      <rect x="20" y="90" width="4" height="4" fill="currentColor" opacity="0.4" />
                    </svg>
                    
                    <div className="back-content-wrapper z-10 relative flex flex-col items-center w-full justify-center h-full">
                      <span className="dp-back-title" style={{ color: pillar.badgeColor }}>{pillar.title}</span>
                      <p className="dp-back-desc">{pillar.description}</p>
                      <div className="dp-back-tags">{pillar.tags}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const techStack = [
  { n: "Figma", c: "#F24E1E" },
  { n: "Miro", c: "#2563EB" },
  { n: "Adobe Illustrator", c: "#FF9A00" },
  { n: "Lottie Files", c: "#019FB6" },
  { n: "Prototyping", c: "#EC4899" },
  { n: "Design Tokens", c: "#7B2FF7" },
];

export default function UiUxDesign() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Creative Design Services</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Design Experiences <br />
                <span className="bg-gradient-to-r from-[#F59E0B] via-amber-600 to-indigo-600 bg-clip-text text-transparent">
                  Users Love
                </span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
                Human-centered design focused on usability, engagement, and
                business outcomes. We compile custom UI assets and structural
                Figma libraries.
              </p>
              <div className="flex gap-4">
                <a href="#contactform">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right Content: Design board */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <FigmaCanvasHero />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* DESIGN SPECIALIZATION PILLARS — Lusion 3D Flip */}
      <DesignPillarsFlip />

      <SectionDivider />

      {/* DESIGN PROCESS TIMELINE */}
      <section className="py-24 bg-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Structured Design Process
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              How we take your product concept from low-fidelity wireframe to
              high-fidelity production handoff.
            </p>
          </div>
          <DesignProcessSVG />
        </div>
      </section>

      <SectionDivider />

      {/* BEFORE / AFTER WIREFRAME TO PRODUCTION SLIDER */}
      <section className="py-24 bg-[#FAF7FF]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Visual Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Wireframe vs Final Interface
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Slide to see how we refine low-fidelity wireframe blueprints into
              polished, interactive user interfaces.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Design Engineered For Conversion
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Why business layouts require premium usability metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Higher Conversions",
                desc: "Decrease checkout friction, clear call-to-actions, and intuitive content hierarchies.",
                icon: <TrendingUp className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-50 border-amber-100",
              },
              {
                title: "Better Experience",
                desc: "Fluid transitions, satisfying tactile feedback, and highly legible text options.",
                icon: <Heart className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-50 border-amber-100",
              },
              {
                title: "Improved Retention",
                desc: "Clear visual setups and simple layouts that invite customers to return.",
                icon: <UserCheck className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-50 border-amber-100",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 border`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Design Portfolio Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Browse successful custom applications we have engineered and
              launched.
            </p>
          </div>

          <DesignShowcaseGallery />
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 py-24 bg-[#FAF7FF]">
        <div className="container max-w-[960px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Our Design Tech Stack
          </h2>
          <p className="text-slate-500 text-base sm:text-lg mb-12">
            Modern tools, proven in production.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold cursor-default"
                style={{
                  background: "#ffffff",
                  border: `1px solid ${t.c}25`,
                  color: t.c,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                {t.n}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM CINEMATIC CTA + FOOTER SECTION */}
      <section
        className="relative w-full flex flex-col justify-between overflow-hidden uiux-cta-footer-section"
        style={{
          minHeight: "max(100vh, 950px)", // Desktop height approx 950px
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={uiuxImg}
            alt="UI/UX Design Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* DARK CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(20, 10, 45, 0.45), rgba(25, 10, 50, 0.55), rgba(10, 10, 25, 0.75))",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16 pb-12 px-6 mt-4 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to design your product?
            </span>
            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
              Let's engineer a gorgeous, intuitive design system that scales
              seamlessly with your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="#contactform" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 rounded-full" />
                <button
                  className="relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-2xl transition-all duration-300 border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                  }}
                >
                  Start Project
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
        <LiquidFooter />
      </section>
    </div>
  );
}
