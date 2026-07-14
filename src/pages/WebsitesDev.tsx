import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LiquidFooter } from "../components/LiquidFooter";
import {
  Sparkles,
  Layers,
  Monitor,
  Search,
  Maximize,
  ArrowRight,
  Database,
  Globe,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import webdevImg from "../assets/webdev img.webp";
import { WebBg, LaptopMockup } from "../components/WebVisuals";

const techStack = [
  { n: "React 19", c: "#61DAFB" },
  { n: "Next.js", c: "#0F172A" },
  { n: "TypeScript", c: "#3178C6" },
  { n: "Tailwind", c: "#06B6D4" },
  { n: "GSAP", c: "#88CE02" },
  { n: "Three.js", c: "#0F172A" },
  { n: "Framer", c: "#FF0055" },
  { n: "Vite", c: "#BD34FE" },
  { n: "Node.js", c: "#339933" },
  { n: "PostgreSQL", c: "#4169E1" },
  { n: "Redis", c: "#DC382D" },
  { n: "Docker", c: "#2496ED" },
];

// Browser illustration removed in favor of WebAppHeroMockup

export default function WebsitesDev() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-16 overflow-hidden">
        <WebBg />
        <div className="container relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6"
                style={{
                  background: "rgba(6,182,212,.1)",
                  border: "1px solid rgba(6,182,212,.3)",
                  color: "#67E8F9",
                }}
              >
                <Globe size={11} /> Web Applications
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight mb-5">
                <span className="text-white" style={{ color: "#ffffff" }}>
                  Blazing-fast
                </span>{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#06B6D4,#3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  web experiences
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                React, Next.js, and TypeScript apps built with atomic design
                systems, cinematic GSAP animations, and lighthouse-perfect
                performance scores.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="px-7 py-3.5 rounded-full text-sm font-bold text-white cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg,#06B6D4,#3B82F6)",
                      boxShadow: "0 0 32px rgba(6,182,212,.4)",
                    }}
                  >
                    Start Your Web Project →
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="px-7 py-3.5 rounded-full text-sm font-bold border border-white/15 text-slate-300 cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    See Case Studies
                  </motion.button>
                </Link>
              </div>
              {/* Quick stats */}
              <div className="flex gap-6 flex-wrap">
                {[
                  { v: "50+", l: "Sites shipped" },
                  { v: "98", l: "Avg Lighthouse" },
                  { v: "<50ms", l: "TTFB" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-xl font-black text-white">{s.v}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <LaptopMockup />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FRONTEND & BACKEND ARCHITECTURE DETAILS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Stack Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Modern Engineering Layers
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              We design modular architectures for fast response, high safety
              thresholds, and robust scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Frontend Development */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#3B82F6] flex items-center justify-center mb-6 border border-blue-100">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                Frontend Development
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                We craft fluid, components-driven web frontends focusing on
                pixel-perfect designs, light bundles, and instantaneous page
                loadings.
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  {
                    name: "React",
                    desc: "For dynamic component nesting and solid state flows.",
                  },
                  {
                    name: "Next.js",
                    desc: "For static serverless functions and optimized server rendering.",
                  },
                  {
                    name: "TypeScript",
                    desc: "For compile-time type-safety and codebase reliability.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#3B82F6] flex items-center justify-center mt-0.5 shrink-0 border border-blue-100">
                      <span className="text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 text-sm block">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: Backend Development */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7B2FF7] flex items-center justify-center mb-6 border border-purple-100">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                Backend Development
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                We implement fast, scalable backends supporting heavy database
                transactions, third-party hooks, and concurrent client requests.
              </p>

              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  {
                    name: "Node.js",
                    desc: "For sub-second event loop handling and fast API runtimes.",
                  },
                  {
                    name: "Python",
                    desc: "For robust logic workflows and ML integration.",
                  },
                  {
                    name: "Django",
                    desc: "For secure schemas, migrations, and database administration.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-50 text-[#7B2FF7] flex items-center justify-center mt-0.5 shrink-0 border border-purple-100">
                      <span className="text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 text-sm block">
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-400">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Engineered For Results
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Why clients partner with ViyanInfo to launch their core web
              systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[16px] items-stretch pt-[22px] text-left">
            {[
              {
                title: "Fast Performance",
                desc: "Sub-second database calls, caching layers, and lightweight CSS/JS code.",
                Icon: Sparkles,
                baseColor: "#3B82F6",
                bgBase: "rgba(59,130,246,0.08)",
                bgHover: "rgba(59,130,246,0.92)",
                borderHover: "rgba(59,130,246,0.55)",
                shadowHover: "0 12px 32px rgba(59,130,246,0.14)",
              },
              {
                title: "SEO Friendly",
                desc: "SSR components, semantic structures, and fast load stats for high Google ranks.",
                Icon: Search,
                baseColor: "#10B981",
                bgBase: "rgba(16,185,129,0.08)",
                bgHover: "rgba(16,185,129,0.92)",
                borderHover: "rgba(16,185,129,0.55)",
                shadowHover: "0 12px 32px rgba(16,185,129,0.14)",
              },
              {
                title: "Responsive Layouts",
                desc: "Seamless responsive alignments built to scale across mobile, tablet, and widescreen systems.",
                Icon: Monitor,
                baseColor: "#F43F5E",
                bgBase: "rgba(244,63,94,0.08)",
                bgHover: "rgba(244,63,94,0.92)",
                borderHover: "rgba(244,63,94,0.55)",
                shadowHover: "0 12px 32px rgba(244,63,94,0.14)",
              },
              {
                title: "Scalable Logic",
                desc: "Modular folder structures and serverless designs that adjust to rising user counts.",
                Icon: Maximize,
                baseColor: "#7B2FF7",
                bgBase: "rgba(123,47,247,0.08)",
                bgHover: "rgba(123,47,247,0.92)",
                borderHover: "rgba(123,47,247,0.55)",
                shadowHover: "0 12px 32px rgba(123,47,247,0.14)",
              },
            ].map((benefit, idx) => {
              const isHovered = hoveredIdx === idx;
              const Icon = benefit.Icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <div
                    className="feature-card"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "14px",
                      padding: "24px 20px",
                      background: "#ffffff",
                      height: isHovered ? "calc(100% + 12px)" : "100%",
                      transform: isHovered
                        ? "translateY(-16px)"
                        : "translateY(0px)",
                      transition:
                        "height 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.22s ease, box-shadow 0.22s ease",
                      willChange: "transform, height",
                      border: `1px solid ${isHovered ? benefit.borderHover : "rgba(241, 245, 249, 1)"}`,
                      boxShadow: isHovered
                        ? benefit.shadowHover
                        : "0 1px 2px 0 rgba(0,0,0,0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "24px",
                        background: isHovered
                          ? benefit.bgHover
                          : benefit.bgBase,
                        transition: "background 0.22s ease",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{
                          color: isHovered ? "#ffffff" : benefit.baseColor,
                          transition: "color 0.22s ease",
                        }}
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Web Applications Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Browse successful custom applications we have engineered and
              launched.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "MedAssist Pharmacy",
                desc: "Integrated pharmacy inventory control, transaction ledgers, and fast billing pipelines.",
                tag: "Healthcare SaaS",
                accentColor: "#3B82F6",
                glowColor: "rgba(59, 130, 246, 0.08)",
              },
              {
                title: "Business Portal",
                desc: "Modular internal dashboards supporting analytics parsing, data reports, and scheduling.",
                tag: "Enterprise App",
                accentColor: "#7B2FF7",
                glowColor: "rgba(123, 47, 247, 0.08)",
              },
              {
                title: "Admin Dashboard",
                desc: "Telemetry tracker showing system load, database readouts, and webhook statuses.",
                tag: "System Tooling",
                accentColor: "#06B6D4",
                glowColor: "rgba(6, 182, 212, 0.08)",
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 40px ${project.glowColor}`,
                }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 relative group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#3B82F6] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                    {project.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 py-24 bg-[#FAF7FF]">
        <div className="container max-w-[960px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4">
            Our Web Tech Stack
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
        className="relative flex flex-col justify-between w-full overflow-hidden"
        style={{
          backgroundImage: `url(${webdevImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "min(100vh, 950px)",
        }}
      >
        {/* Dark Cinematic Overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8, 6, 20, 0.15), rgba(8, 6, 20, 0.55), rgba(8, 6, 20, 0.82))",
          }}
        />

        {/* Parallax / Floating subtle motion on background can be achieved by the scroll fade up */}

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-16 pb-12 px-6 mt-4 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to build something amazing?
            </span>
            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
              Let's engineer a custom web application that scales seamlessly
              with your business.
            </p>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Link to="/contact">
                <button
                  className="px-8 py-4 rounded-full text-white font-bold text-base md:text-lg transition-all duration-350"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.45)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  Start a Project
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <LiquidFooter />
      </section>
    </div>
  );
}
