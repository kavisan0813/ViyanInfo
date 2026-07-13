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
import { TechBadge } from "../components/TechBadge";
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
    icon: Search,
    accent: "#F59E0B",
    backGradient: "linear-gradient(135deg, #FFFBEB, #FEF3C7)",
    iconBg: "rgba(245, 158, 11, 0.1)",
    description:
      "Perform comprehensive interviews, mapping custom personas, and finding layout friction zones to align design specs.",
    tags: "Personas • User Testing • Surveys",
  },
  {
    title: "Wireframing",
    icon: Layers,
    accent: "#7B2FF7",
    backGradient: "linear-gradient(135deg, #F5F3FF, #EDE9FE)",
    iconBg: "rgba(123, 47, 247, 0.1)",
    description:
      "Drafting structural screen maps and navigation hierarchies to establish clean page logic before visual design.",
    tags: "Low-fi Mockups • User Flows • Miro",
  },
  {
    title: "UI Design",
    icon: Palette,
    accent: "#EC4899",
    backGradient: "linear-gradient(135deg, #FDF2F8, #FCE7F3)",
    iconBg: "rgba(236, 72, 153, 0.1)",
    description:
      "Applying premium typographic structures, grid alignments, customized SVGs, and consistent color pallets in Figma.",
    tags: "Figma • Visual Styling • Vectors",
  },
  {
    title: "UX Optimization",
    icon: Eye,
    accent: "#06B6D4",
    backGradient: "linear-gradient(135deg, #ECFEFF, #CFFAFE)",
    iconBg: "rgba(6, 182, 212, 0.1)",
    description:
      "Refining checkout steps, form completions, and interaction states to remove user friction and improve retention.",
    tags: "Heuristics • Friction Audits • Analytics",
  },
  {
    title: "Design Systems",
    icon: Settings,
    accent: "#10B981",
    backGradient: "linear-gradient(135deg, #ECFDF5, #D1FAE5)",
    iconBg: "rgba(16, 185, 129, 0.1)",
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
                  <div className="dp-card-front tarot-front">
                    {/* SVG Geometric Decorations */}
                    <svg
                      className="tarot-geometry"
                      viewBox="0 0 240 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      {/* Outer border */}
                      <rect
                        x="8"
                        y="8"
                        width="224"
                        height="334"
                        rx="16"
                        stroke="rgba(255,255,255,0.8)"
                        strokeWidth="1.5"
                      />
                      {/* Inner border */}
                      <rect
                        x="16"
                        y="16"
                        width="208"
                        height="318"
                        rx="12"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                      />

                      {/* Corner circles */}
                      <circle
                        cx="28"
                        cy="28"
                        r="4"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="212"
                        cy="28"
                        r="4"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="28"
                        cy="322"
                        r="4"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="212"
                        cy="322"
                        r="4"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="2"
                      />

                      {/* Corner dot fills */}
                      <circle
                        cx="28"
                        cy="28"
                        r="1"
                        fill="rgba(255,255,255,0.8)"
                      />
                      <circle
                        cx="212"
                        cy="28"
                        r="1"
                        fill="rgba(255,255,255,0.8)"
                      />
                      <circle
                        cx="28"
                        cy="322"
                        r="1"
                        fill="rgba(255,255,255,0.8)"
                      />
                      <circle
                        cx="212"
                        cy="322"
                        r="1"
                        fill="rgba(255,255,255,0.8)"
                      />

                      {/* Connecting lines from corners */}
                      <line
                        x1="34"
                        y1="28"
                        x2="80"
                        y2="28"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="160"
                        y1="28"
                        x2="206"
                        y2="28"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="34"
                        y1="322"
                        x2="80"
                        y2="322"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="160"
                        y1="322"
                        x2="206"
                        y2="322"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="28"
                        y1="34"
                        x2="28"
                        y2="80"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="28"
                        y1="270"
                        x2="28"
                        y2="316"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="212"
                        y1="34"
                        x2="212"
                        y2="80"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />
                      <line
                        x1="212"
                        y1="270"
                        x2="212"
                        y2="316"
                        stroke="rgba(255,255,255,0.5)"
                        strokeWidth="1"
                      />

                      {/* Top semi-circle */}
                      <path
                        d="M100 16 A20 20 0 0 1 140 16"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1"
                        fill="none"
                      />
                      {/* Bottom semi-circle */}
                      <path
                        d="M100 334 A20 20 0 0 0 140 334"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1"
                        fill="none"
                      />

                      {/* Top heart/chevron */}
                      <path
                        d="M115 40 L120 34 L125 40"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Bottom heart/chevron (inverted) */}
                      <path
                        d="M115 310 L120 316 L125 310"
                        stroke="rgba(255,255,255,0.7)"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                      />

                      {/* Left diamond arrow */}
                      <path
                        d="M20 155 L28 145 L28 165 Z"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.2)"
                      />
                      <path
                        d="M20 195 L28 185 L28 205 Z"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.2)"
                      />

                      {/* Right diamond arrow */}
                      <path
                        d="M220 155 L212 145 L212 165 Z"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.2)"
                      />
                      <path
                        d="M220 195 L212 185 L212 205 Z"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1"
                        fill="rgba(255,255,255,0.2)"
                      />

                      {/* Layer 2: Four tiny dots around the diamond */}
                      <circle
                        cx="120"
                        cy="85"
                        r="1.5"
                        fill="rgba(255,255,255,0.8)"
                      />
                      <circle
                        cx="120"
                        cy="265"
                        r="1.5"
                        fill="rgba(255,255,255,0.8)"
                      />
                      <circle
                        cx="30"
                        cy="175"
                        r="1.5"
                        fill="rgba(255,255,255,0.8)"
                      />
                      <circle
                        cx="210"
                        cy="175"
                        r="1.5"
                        fill="rgba(255,255,255,0.8)"
                      />

                      {/* Layer 2: Short rays extending outward */}
                      <line
                        x1="120"
                        y1="92"
                        x2="120"
                        y2="102"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="120"
                        y1="248"
                        x2="120"
                        y2="258"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="42"
                        y1="175"
                        x2="52"
                        y2="175"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="188"
                        y1="175"
                        x2="198"
                        y2="175"
                        stroke="rgba(255,255,255,0.6)"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Circular Badge perfectly centered */}
                    <div className="tarot-icon-badge">
                      <IconComp
                        className="w-[32px] h-[32px]"
                        style={{
                          color: pillar.accent,
                        }}
                      />
                    </div>

                    {/* Title positioned at bottom */}
                    <h3>{pillar.title}</h3>
                    <span
                      className="dp-card-label"
                      style={{ color: pillar.accent }}
                    >
                      !
                    </span>
                  </div>

                  {/* BACK — Description + Tags */}
                  <div
                    className="dp-card-back"
                    style={{ background: pillar.backGradient }}
                  >
                    <span className="dp-back-title">{pillar.title}</span>
                    <p className="dp-back-desc">{pillar.description}</p>
                    <div className="dp-back-tags">{pillar.tags}</div>
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

      {/* TECHNICAL STANDARDS */}
      <section className="py-24 bg-[#FAF7FF]">
        <div className="container max-w-[1000px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
            Design Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Interactive Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-12">
            We use industry-standard design programs and coordinate closely with
            development teams.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Figma", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "Miro", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "Adobe Illustrator", glow: "rgba(236, 72, 153, 0.15)" },
              { name: "Lottie Files", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "Prototyping", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "Design Tokens", glow: "rgba(124, 58, 237, 0.15)" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: `0 10px 25px ${tech.glow}`,
                }}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-4 cursor-default shadow-xs transition-all duration-300"
              >
                <TechBadge name={tech.name} />
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to design your product?
            </h2>
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
