import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Layers,
  Cpu,
  Monitor,
  Search,
  Maximize,
  ArrowRight,
  Database,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import { TechBadge } from "../components/TechBadge";
import { SectionDivider } from "../components/SectionDivider";
import logo1 from "../assets/Logoimage.svg";
import webdevImg from "../assets/webdev img.webp";

// Premium SVG Browser / SaaS Dashboard Illustration
const BrowserDashboardIllustration = () => (
  <div className="relative w-full aspect-[4/3] max-w-[540px] mx-auto flex items-center justify-center">
    {/* Floating backdrop blur elements */}
    <div className="absolute w-72 h-72 bg-[#3B82F6]/10 rounded-full blur-3xl top-10 right-10"></div>
    <div className="absolute w-64 h-64 bg-[#7B2FF7]/5 rounded-full blur-3xl bottom-10 left-10"></div>

    {/* Main Browser Card */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-full bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Browser Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 max-w-xs mx-auto bg-slate-200/50 rounded-lg h-5 text-[10px] text-slate-400 flex items-center justify-center px-4 font-mono select-none">
          https://app.viyaninfo.com/dashboard
        </div>
      </div>

      {/* Browser Body / Dashboard Content */}
      <div className="p-5 bg-white flex flex-col gap-4">
        {/* Top metric row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: "94.2k", label: "Api Requests", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/5" },
            { val: "99.99%", label: "System Uptime", color: "text-emerald-500", bg: "bg-emerald-50" },
            { val: "1.2s", label: "Avg Load Speed", color: "text-[#7B2FF7]", bg: "bg-[#7B2FF7]/5" }
          ].map((stat, i) => (
            <div key={i} className={`${stat.bg} p-3 rounded-xl border border-slate-100/50`}>
              <span className={`block text-base sm:text-lg font-bold font-display ${stat.color}`}>{stat.val}</span>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Chart + mini sidebar mockup */}
        <div className="grid grid-cols-12 gap-3">
          {/* Main Visual Chart */}
          <div className="col-span-8 bg-slate-50 border border-slate-100 rounded-xl p-3 flex flex-col justify-between h-40">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-700">Performance Metrics</span>
              <span className="text-[8px] font-mono text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded-full font-bold">Real-time</span>
            </div>
            {/* Chart bars */}
            <div className="flex items-end justify-around h-24 pt-2">
              {[40, 65, 35, 80, 50, 95, 70].map((h, i) => (
                <div key={i} className="w-5 bg-slate-200/50 rounded-t-md h-full relative flex items-end">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.1 }}
                    className={`w-full rounded-t-md ${i === 5 ? "bg-[#3B82F6]" : "bg-gradient-to-t from-slate-300 to-slate-400"}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mini sidebar details */}
          <div className="col-span-4 flex flex-col gap-2.5">
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex-1 flex flex-col justify-center gap-1.5">
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">Storage Node</span>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-[#3B82F6]" />
              </div>
              <span className="text-[9px] font-bold text-slate-700">75% Used</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 flex-1 flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-800">SSL Sec</span>
                <span className="text-[7px] text-slate-400">Cert Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

    {/* Floating Badge */}
    <motion.div
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-8 right-[-16px] z-20 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-2.5"
    >
      <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
        <Cpu size={14} />
      </div>
      <div>
        <span className="block text-xs font-bold text-slate-900">Next.js Edge</span>
        <span className="text-[9px] text-slate-400">Serverless API</span>
      </div>
    </motion.div>
  </div>
);

export default function WebsitesDev() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Box: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Web Application Services</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Build Modern <br />
                <span className="bg-gradient-to-r from-[#3B82F6] via-blue-600 to-indigo-600 bg-clip-text text-transparent">Web Experiences</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
                Scalable, secure, and high-performance web applications engineered for growth. We combine modern engineering workflows with next-gen architectures.
              </p>
              <div className="flex gap-4">
                <a href="#contactform">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
              </div>
            </motion.div>
            
            {/* Right Box: SVG dashboard */}
            <div className="lg:col-span-6">
              <BrowserDashboardIllustration />
            </div>

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
              We design modular architectures for fast response, high safety thresholds, and robust scalability.
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
                We craft fluid, components-driven web frontends focusing on pixel-perfect designs, light bundles, and instantaneous page loadings.
              </p>
              
              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  { name: "React", desc: "For dynamic component nesting and solid state flows." },
                  { name: "Next.js", desc: "For static serverless functions and optimized server rendering." },
                  { name: "TypeScript", desc: "For compile-time type-safety and codebase reliability." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-blue-50 text-[#3B82F6] flex items-center justify-center mt-0.5 shrink-0 border border-blue-100">
                      <span className="text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 text-sm block">{item.name}</span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
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
                We implement fast, scalable backends supporting heavy database transactions, third-party hooks, and concurrent client requests.
              </p>
              
              <div className="flex flex-col gap-3.5 mb-8">
                {[
                  { name: "Node.js", desc: "For sub-second event loop handling and fast API runtimes." },
                  { name: "Python", desc: "For robust logic workflows and ML integration." },
                  { name: "Django", desc: "For secure schemas, migrations, and database administration." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-50 text-[#7B2FF7] flex items-center justify-center mt-0.5 shrink-0 border border-purple-100">
                      <span className="text-[10px] font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-800 text-sm block">{item.name}</span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
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
              Why clients partner with ViyanInfo to launch their core web systems.
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
                shadowHover: "0 12px 32px rgba(59,130,246,0.14)"
              },
              {
                title: "SEO Friendly",
                desc: "SSR components, semantic structures, and fast load stats for high Google ranks.",
                Icon: Search,
                baseColor: "#10B981",
                bgBase: "rgba(16,185,129,0.08)",
                bgHover: "rgba(16,185,129,0.92)",
                borderHover: "rgba(16,185,129,0.55)",
                shadowHover: "0 12px 32px rgba(16,185,129,0.14)"
              },
              {
                title: "Responsive Layouts",
                desc: "Seamless responsive alignments built to scale across mobile, tablet, and widescreen systems.",
                Icon: Monitor,
                baseColor: "#F43F5E",
                bgBase: "rgba(244,63,94,0.08)",
                bgHover: "rgba(244,63,94,0.92)",
                borderHover: "rgba(244,63,94,0.55)",
                shadowHover: "0 12px 32px rgba(244,63,94,0.14)"
              },
              {
                title: "Scalable Logic",
                desc: "Modular folder structures and serverless designs that adjust to rising user counts.",
                Icon: Maximize,
                baseColor: "#7B2FF7",
                bgBase: "rgba(123,47,247,0.08)",
                bgHover: "rgba(123,47,247,0.92)",
                borderHover: "rgba(123,47,247,0.55)",
                shadowHover: "0 12px 32px rgba(123,47,247,0.14)"
              }
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
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '14px',
                    padding: '24px 20px',
                    background: '#ffffff',
                    height: isHovered ? 'calc(100% + 12px)' : '100%',
                    transform: isHovered ? 'translateY(-16px)' : 'translateY(0px)',
                    transition: 'height 0.35s cubic-bezier(0.34,1.56,0.64,1), transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.22s ease, box-shadow 0.22s ease',
                    willChange: 'transform, height',
                    border: `1px solid ${isHovered ? benefit.borderHover : 'rgba(241, 245, 249, 1)'}`,
                    boxShadow: isHovered ? benefit.shadowHover : '0 1px 2px 0 rgba(0,0,0,0.05)'
                  }}
                >
                  <div 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      background: isHovered ? benefit.bgHover : benefit.bgBase,
                      transition: 'background 0.22s ease'
                    }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ 
                        color: isHovered ? '#ffffff' : benefit.baseColor,
                        transition: 'color 0.22s ease'
                      }} 
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500">{benefit.desc}</p>
                </div>
              </motion.div>
            )})}
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
              Browse successful custom applications we have engineered and launched.
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
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${project.glowColor}` }}
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

      {/* TECHNOLOGY SHOWCASE SECTION */}
      <section className="py-24 bg-[#FAF7FF]">
        <div className="container max-w-[1000px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-4">
            Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Interactive Stack Showcase
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-12">
            Hover over elements to see how we configure our web tech stacks.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", glow: "rgba(59, 130, 246, 0.15)" },
              { name: "Next.js", glow: "rgba(15, 23, 42, 0.15)" },
              { name: "TypeScript", glow: "rgba(37, 99, 235, 0.15)" },
              { name: "Node.js", glow: "rgba(34, 197, 94, 0.15)" },
              { name: "Python", glow: "rgba(59, 130, 246, 0.15)" },
              { name: "Django", glow: "rgba(16, 185, 129, 0.15)" },
              { name: "TailwindCSS", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "GSAP", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "PostgreSQL", glow: "rgba(37, 99, 235, 0.15)" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2, boxShadow: `0 10px 25px ${tech.glow}` }}
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
            background: "linear-gradient(to bottom, rgba(8, 6, 20, 0.15), rgba(8, 6, 20, 0.55), rgba(8, 6, 20, 0.82))"
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to build something amazing?
            </h2>
            <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
              Let's engineer a custom web application that scales seamlessly with your business.
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
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.45)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
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

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 w-[90%] max-w-[1450px] mx-auto mb-12 rounded-[32px]"
          style={{
            background: "rgba(18, 18, 30, 0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
           
          }}
        >
          {/* Gentle footer glass glow pulse */}
          <motion.div
            className="absolute inset-0 rounded-[32px] pointer-events-none"
            animate={{ boxShadow: ["inset 0 0 0px rgba(124,58,237,0)", "inset 0 0 40px rgba(124,58,237,0.15)", "inset 0 0 0px rgba(124,58,237,0)"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="py-[40px] md:py-[70px] px-[30px] md:px-[60px]">
            {/* 4-COLUMN FOOTER GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 text-center md:text-left">
              {/* Column 1: Company Info */}
              <div className="flex flex-col items-center md:items-start gap-5">
                <Link to="/" className="block w-fit">
                  <img
                    src={logo1}
                    alt="ViyanInfo"
                    className="h-10 w-auto object-contain select-none"
                  />
                </Link>

                <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)] max-w-xs">
                  Building scalable software, AI solutions, and digital products
                  that help businesses grow faster and operate smarter.
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-2">
                  {[
                    { icon: <Linkedin className="w-[20px] h-[20px]" />, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: <Github className="w-[20px] h-[20px]" />, href: "https://github.com", label: "GitHub" },
                    { icon: <Instagram className="w-[20px] h-[20px]" />, href: "https://instagram.com", label: "Instagram" },
                    { icon: <Facebook className="w-[20px] h-[20px]" />, href: "https://facebook.com", label: "Facebook" },
                  ].map((social, sIdx) => (
                    <a
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 flex items-center justify-center rounded-xl text-white transition-all duration-350"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(124,58,237,0.35)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Column 2: Services */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <span className="font-display font-bold text-[#ffffff] text-[15px] uppercase tracking-wider mb-2">
                  Services
                </span>
                {[
                  { label: "Custom Software Development", path: "/services" },
                  { label: "Web Applications", path: "/services/websites" },
                  { label: "Mobile Applications", path: "/services/mobile" },
                  { label: "AI Solutions", path: "/services" },
                  { label: "UI/UX Design", path: "/services" },
                  { label: "Internship Programs", path: "/internship" },
                ].map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    to={link.path}
                    className="text-sm text-[rgba(255,255,255,0.82)] hover:text-[#ffffff] transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 3: Resources */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <span className="font-display font-bold text-[#ffffff] text-[15px] uppercase tracking-wider mb-2">
                  Resources
                </span>
                {[
                  { label: "Portfolio", path: "/portfolio" },
                  { label: "Case Studies", path: "/portfolio" },
                  { label: "Careers", path: "/careers" },
                  { label: "Blog", path: "/blog" },
                  { label: "Technology Stack", path: "/tech-stack" },
                  { label: "Contact", path: "/contact" },
                ].map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    to={link.path}
                    className="text-sm text-[rgba(255,255,255,0.82)] hover:text-[#ffffff] transition-colors duration-200 block py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Column 4: Contact */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <span className="font-display font-bold text-[#ffffff] text-[15px] uppercase tracking-wider mb-2">
                  Contact
                </span>
                
                <a href="mailto:admin@viyaninfo.com" className="text-sm text-[rgba(255,255,255,0.82)] hover:text-[#ffffff] transition-colors flex items-center gap-3 py-1">
                  <Mail className="w-[18px] h-[18px] text-[rgba(255,255,255,0.62)]" />
                  <span>admin@viyaninfo.com</span>
                </a>

                <a href="tel:+916379723465" className="text-sm text-[rgba(255,255,255,0.82)] hover:text-[#ffffff] transition-colors flex items-center gap-3 py-1">
                  <Phone className="w-[18px] h-[18px] text-[rgba(255,255,255,0.62)]" />
                  <span>+91 6379723465</span>
                </a>

                <span className="text-sm text-[rgba(255,255,255,0.82)] flex items-start gap-3 py-1">
                  <MapPin className="w-[18px] h-[18px] text-[rgba(255,255,255,0.62)] mt-0.5" />
                  <span>Tiruvallur, Tamil Nadu</span>
                </span>

                <a href="https://www.viyaninfo.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[rgba(255,255,255,0.82)] hover:text-[#ffffff] transition-colors flex items-center gap-3 py-1">
                  <Globe className="w-[18px] h-[18px] text-[rgba(255,255,255,0.62)]" />
                  <span>www.viyaninfo.com</span>
                </a>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="h-px bg-[rgba(255,255,255,0.12)] w-full mb-6" />

            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-[rgba(255,255,255,0.62)]">
              <p>© 2026 ViyanInfo. All rights reserved.</p>

              <div className="flex flex-wrap gap-5 justify-center">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/about" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
