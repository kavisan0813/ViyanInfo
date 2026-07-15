import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code2,
  Cpu,
  Database,
  Terminal,
  ShieldCheck,
  TrendingUp,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  TechStacks,
  TechStacks1,
  TechStacks2,
  TechStacks3,
  TechStacks4,
  TechStacks5,
  DockerIcon,
  PostgreSQLIcon,
  AwsIcon,
  RedisIcon,
} from "../components/ArrayContent";
import { SectionDivider } from "../components/SectionDivider";
import { LiquidFooter } from "../components/LiquidFooter";
import techstackImg from "../assets/techstack_img.webp";

export default function TechStack() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Ecosystem nodes layout data (angles in radians, radii)
  const nodes = TechStacks3;

  return (
    <div className="bg-[#FAF7FF] min-h-screen text-[#475569] font-body overflow-x-hidden relative">
      <section className="relative min-h-screen flex justify-center items-center overflow-hidden bg-[#FAF7FF]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(15)].map((_, i) => {
            const rand1 = ((i * 17) % 100) / 100;
            const rand2 = ((i * 23) % 100) / 100;
            const rand3 = ((i * 29) % 100) / 100;
            const rand4 = ((i * 31) % 100) / 100;
            const rand5 = ((i * 41) % 100) / 100;
            return (
              <motion.div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: i % 2 === 0 ? "#7B2FF7" : "#9333EA",
                  opacity: 0.15,
                  left: `${rand1 * 100}%`,
                  top: `${rand2 * 100}%`,
                }}
                animate={{
                  y: [0, -120, 0],
                  x: [0, rand3 * 60 - 30, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 6 + rand4 * 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: rand5 * 4,
                }}
              />
            );
          })}
        </div>

        <div className="container relative z-10 max-w-[1300px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
              Our Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
              Our Technology Stack
            </h1>
            <p className="text-lg leading-relaxed text-[#475569] max-w-2xl mx-auto mb-8">
              We leverage modern technologies, cloud infrastructure, and
              AI-powered solutions to build scalable, secure, and beautiful
              digital products.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 1: TECHNOLOGY ECOSYSTEM NETWORK */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Ecosystem Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Interactive Synergy Network
            </h2>
            <p className="text-[#475569] text-base">
              Hover over the technology nodes to see how they connect to
              ViyanInfo.
            </p>
          </div>

          {/* Interactive Network Diagram */}
          <div className="relative w-full aspect-square max-w-[650px] mx-auto flex items-center justify-center select-none">
            {/* SVG Connecting Lines with dashes flowing to center */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 600 600"
            >
              <defs>
                <radialGradient id="g-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7B2FF7" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="300" cy="300" r="280" fill="url(#g-glow)" />
              {nodes.map((node, i) => {
                const x = 300 + 220 * Math.cos(node.angle);
                const y = 300 + 220 * Math.sin(node.angle);
                const isHovered = hoveredNode === node.name;
                return (
                  <g key={i}>
                    {/* Connection line */}
                    <motion.line
                      x1="300"
                      y1="300"
                      x2={x}
                      y2={y}
                      stroke={
                        isHovered ? node.color : "rgba(147, 51, 234, 0.15)"
                      }
                      strokeWidth={isHovered ? "3.5" : "2"}
                      strokeDasharray="6, 6"
                      animate={
                        isHovered
                          ? { strokeDashoffset: [0, -36] }
                          : { strokeDashoffset: [0, -20] }
                      }
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    {/* Flow particle */}
                    <motion.circle
                      r="4"
                      fill={node.color}
                      animate={{
                        cx: [x, 300],
                        cy: [y, 300],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeOut",
                        delay: i * 0.25,
                      }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central VIYANINFO Node */}
            <motion.div
              animate={{ scale: [0.97, 1.03, 0.97] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-[#7B2FF7] to-[#9333EA] flex flex-col items-center justify-center text-white z-20 shadow-xl border border-white/20"
            >
              <div className="absolute inset-0 rounded-full bg-[#7B2FF7]/20 animate-ping pointer-events-none" />
              <span className="text-sm font-display font-black tracking-widest uppercase">
                VIYAN
              </span>
              <span className="text-[10px] font-mono tracking-widest text-purple-200">
                SYSTEMS
              </span>
            </motion.div>

            {/* Orbiting Tech Nodes */}
            {nodes.map((node, i) => {
              const x = 300 + 220 * Math.cos(node.angle);
              const y = 300 + 220 * Math.sin(node.angle);
              const isHovered = hoveredNode === node.name;

              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `${(x / 600) * 100}%`,
                    top: `${(y / 600) * 100}%`,
                  }}
                >
                  <motion.div
                    onMouseEnter={() => setHoveredNode(node.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    whileHover={{ scale: 1.15 }}
                    animate={{
                      y: [0, Math.sin(i * 45) * 6, 0],
                      x: [0, Math.cos(i * 45) * 6, 0],
                    }}
                    transition={{
                      duration: 4 + (i % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`w-16 h-16 rounded-2xl bg-white shadow-md border flex items-center justify-center cursor-pointer transition-all duration-300 relative ${
                      isHovered ? "shadow-lg" : "border-slate-200"
                    }`}
                    style={{
                      boxShadow: isHovered
                        ? `0 10px 25px -5px ${node.color}25, 0 0 15px ${node.color}15`
                        : "0 4px 6px -1px rgb(0 0 0 / 0.05)",
                      borderColor: isHovered
                        ? node.color
                        : "rgb(226, 232, 240)",
                    }}
                  >
                    {node.icon}

                    {/* Tooltip Hover Overlay */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-20 w-44 bg-slate-900 border border-slate-800 text-white rounded-xl p-3 shadow-xl pointer-events-none z-30 leading-tight"
                        >
                          <span
                            className="block text-xs font-extrabold"
                            style={{ color: node.color }}
                          >
                            {node.name}
                          </span>
                          <span className="text-[10px] text-slate-400 mt-1 block">
                            {node.desc}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2: FRONTEND TECHNOLOGIES */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              User Interfaces
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Frontend Development Stack
            </h2>
            <p className="text-base text-[#475569]">
              We configure responsive, accessible, and fast web layers mapping
              to premium interface criteria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TechStacks5.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-3xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${tech.bg}`}
                  >
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-slate-500 mb-4 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 mt-4 text-[10px] font-mono">
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Level:</span>
                    <span className="font-extrabold text-[#7B2FF7]">
                      {tech.level}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Usage:</span>
                    <span className="text-slate-700 text-right truncate max-w-[120px]">
                      {tech.usage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3: BACKEND TECHNOLOGIES */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] text-xs font-semibold uppercase tracking-wider mb-4">
                Core Engines
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Backend Infrastructure
              </h2>
              <p className="text-[#475569] leading-relaxed mb-6">
                Our servers are configured for zero-downtime scalability, using
                light event loops, clean database queries, and modular API
                structures.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="p-1 bg-[#339933]/10 text-[#339933] rounded">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-800">
                      API Speed Latency
                    </span>
                    <span className="text-xs text-slate-500">
                      Fast database query execution with Redis data caches.
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="p-1 bg-[#3776AB]/10 text-[#3776AB] rounded">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-slate-800">
                      Strict Auth Rules
                    </span>
                    <span className="text-xs text-slate-500">
                      JWT security keys and scoped RBAC verification protocols.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column grid cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {TechStacks2.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex gap-4 items-start text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-[#0F172A] text-lg mb-1">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4: MOBILE DEVELOPMENT */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Visual Mockup */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1 relative">
              {/* Floating ambient elements */}
              <div className="absolute w-60 h-60 bg-[#02569B]/10 rounded-full blur-2xl top-[-20px] left-[-20px] pointer-events-none" />
              <div className="absolute w-44 h-44 bg-[#00D8FF]/10 rounded-full blur-xl bottom-[-10px] right-[-10px] pointer-events-none" />

              {/* High Fidelity Phone Vector Screen */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-[280px] h-[550px] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800"
              >
                {/* Speaker/Camera notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-slate-800 rounded-full mb-1" />
                </div>

                {/* Inner Screen */}
                <div className="w-full h-full bg-[#FAF7FF] rounded-[32px] overflow-hidden p-4 relative flex flex-col justify-between pt-8">
                  {/* Dashboard header mock */}
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <span className="block text-[8px] font-mono text-slate-400">
                          Welcome Back
                        </span>
                        <span className="text-xs font-bold text-slate-800">
                          Flutter App
                        </span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-[#02569B] text-white text-[8px] font-bold flex items-center justify-center">
                        V
                      </div>
                    </div>

                    {/* Chart visual mock */}
                    <div className="bg-white rounded-xl p-3 shadow-3xs border border-slate-100 mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-[7px] text-slate-400">
                          Weekly Health
                        </span>
                        <span className="text-[8px] font-bold text-[#02569B]">
                          +12.4%
                        </span>
                      </div>
                      <div className="h-12 w-full flex items-end gap-1 pb-1">
                        {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                          <div
                            key={i}
                            className="bg-[#02569B] rounded-xs flex-1"
                            style={{
                              height: `${h}%`,
                              opacity: 0.3 + (h / 100) * 0.7,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Feature badges list */}
                    <div className="space-y-2">
                      <div className="bg-white rounded-lg p-2.5 border border-slate-100 flex justify-between items-center">
                        <span className="text-[8px] font-extrabold text-slate-700">
                          Database Sync
                        </span>
                        <span className="text-[7px] bg-[#FFC229]/20 text-[#FFA000] px-1.5 py-0.5 rounded font-mono font-bold">
                          Firebase
                        </span>
                      </div>
                      <div className="bg-white rounded-lg p-2.5 border border-slate-100 flex justify-between items-center">
                        <span className="text-[8px] font-extrabold text-slate-700">
                          Native Speed
                        </span>
                        <span className="text-[7px] bg-[#00D8FF]/20 text-[#00D8FF] px-1.5 py-0.5 rounded font-mono font-bold">
                          C++ Native
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation bar mock */}
                  <div className="bg-white rounded-full p-2 border border-slate-100 flex justify-around items-center">
                    <div className="w-5 h-5 rounded-full bg-[#02569B]/10 flex items-center justify-center text-[#02569B]">
                      <Code2 className="w-3 h-3" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Cpu className="w-3 h-3" />
                    </div>
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Database className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Text and Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 text-left order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#3B82F6] text-xs font-semibold uppercase tracking-wider mb-4">
                Mobile Platforms
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Native & Cross-Platform Engines
              </h2>
              <p className="text-[#475569] leading-relaxed mb-10">
                We engineer mobile applications that feel fluid, responsive, and
                compile directly to ARM assembly layers.
              </p>

              <div className="space-y-6">
                {TechStacks4.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 items-start p-5 rounded-2xl bg-white border border-slate-200/60 shadow-2xs"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-extrabold text-[#0F172A]">
                          {tech.name}
                        </span>
                        <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 uppercase">
                          {tech.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5: AI & AUTOMATION */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-4">
              Intelligence Layers
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              AI & Workflow Automation
            </h2>
            <p className="text-base text-[#475569]">
              We build custom intelligence modules, utilizing large language
              models and vector data databases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {TechStacks1.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#FAF7FF] border border-slate-200/80 shadow-3xs hover:shadow-2xs transition-shadow text-left flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-3xs">
                    {tech.icon}
                  </div>
                  <h4 className="font-display font-extrabold text-[#0F172A] mb-1">
                    {tech.name}
                  </h4>
                  <span className="text-[8px] font-mono font-black text-pink-600 block mb-3 uppercase tracking-wider">
                    {tech.badge}
                  </span>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 6: DATABASE & CLOUD ARCHITECTURE */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[#FF9900] text-xs font-semibold uppercase tracking-wider mb-4">
                Cloud Architectures
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Databases & Cloud Hosting
              </h2>
              <p className="text-[#475569] leading-relaxed mb-8">
                We engineer scalable cloud architecture paths, running data
                pipelines, container pods, and distributed databases safely.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
                  <span className="block text-[8px] font-mono text-slate-400 uppercase">
                    Load Balancers
                  </span>
                  <span className="text-base font-extrabold text-slate-800">
                    AWS ALB
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-left">
                  <span className="block text-[8px] font-mono text-slate-400 uppercase">
                    Deployment
                  </span>
                  <span className="text-base font-extrabold text-slate-800">
                    Docker Compose
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Architecture visualization diagram */}
            <div className="lg:col-span-7 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm relative overflow-hidden"
              >
                {/* SVG Visual Flow Schematic */}
                <div className="relative h-64 w-full flex items-center justify-center">
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 500 240"
                  >
                    {/* Flows paths */}
                    <path
                      d="M 50,120 L 150,120 M 230,120 L 330,80 M 230,120 L 330,160 M 390,80 L 450,120 M 390,160 L 450,120"
                      stroke="#E2E8F0"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                    />

                    {/* Dynamic flow particles */}
                    <motion.circle
                      cx="50"
                      cy="120"
                      r="3"
                      fill="#FF9900"
                      animate={{ cx: [50, 150], cy: [120, 120] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.circle
                      cx="230"
                      cy="120"
                      r="3"
                      fill="#2496ED"
                      animate={{ cx: [230, 330], cy: [120, 80] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5,
                      }}
                    />
                    <motion.circle
                      cx="230"
                      cy="120"
                      r="3"
                      fill="#336791"
                      animate={{ cx: [230, 330], cy: [120, 160] }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    />
                  </svg>

                  {/* Node 1: Client Request */}
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 shadow-3xs">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <span className="text-[8px] font-mono mt-1 text-slate-400">
                      Client UI
                    </span>
                  </div>

                  {/* Node 2: Load Balancer (Docker Pod) */}
                  <div className="absolute left-[150px] top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#2496ED]/5 border border-[#2496ED]/30 flex items-center justify-center text-[#2496ED] shadow-2xs">
                      <DockerIcon />
                    </div>
                    <span className="text-[8px] font-mono mt-1 text-[#2496ED] font-extrabold">
                      Docker Container
                    </span>
                  </div>

                  {/* Node 3: PostgreSQL Database */}
                  <div className="absolute right-[130px] top-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#336791]/5 border border-[#336791]/20 flex items-center justify-center text-[#336791] shadow-3xs">
                      <PostgreSQLIcon />
                    </div>
                    <span className="text-[8px] font-mono mt-1 text-slate-500">
                      Postgres Relational
                    </span>
                  </div>

                  {/* Node 4: Redis Cache */}
                  <div className="absolute right-[130px] bottom-4 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#DC382D]/5 border border-[#DC382D]/20 flex items-center justify-center text-[#DC382D] shadow-3xs">
                      <RedisIcon />
                    </div>
                    <span className="text-[8px] font-mono mt-1 text-slate-500">
                      Redis Cache Memory
                    </span>
                  </div>

                  {/* Node 5: AWS Cloud Hosting */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF9900]/5 border border-[#FF9900]/30 flex items-center justify-center text-[#FF9900] shadow-2xs">
                      <AwsIcon />
                    </div>
                    <span className="text-[8px] font-mono mt-1 text-[#FF9900] font-extrabold">
                      AWS Virtual Node
                    </span>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="flex justify-around items-center border-t border-slate-100 pt-6 mt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#47A248]" />
                    <span className="text-[9px] font-mono font-bold text-slate-500">
                      MongoDB Clusters
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF9900]" />
                    <span className="text-[9px] font-mono font-bold text-slate-500">
                      AWS VPC Security
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 7: DEVELOPMENT PROCESS ROADMAP */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Sprint Roadmap
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Our Development Lifecycle
            </h2>
            <p className="text-base text-[#475569]">
              How we translate code designs into production-ready software
              solutions.
            </p>
          </div>

          {/* Horizontal Roadmap Timeline */}
          <div className="relative w-full overflow-x-auto pt-4 pb-12 select-none min-w-[700px]">
            {/* Connecting progress line */}
            <div className="absolute top-14 left-12 right-12 h-1 bg-slate-100 z-0">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#7B2FF7] via-[#3B82F6] to-[#06B6D4]"
              />
            </div>

            {/* Steps Row */}
            <div className="relative z-10 grid grid-cols-6 gap-4">
              {TechStacks.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center px-3"
                >
                  {/* Container for step bubble and index label */}
                  <div className="relative">
                    {/* Step bubble */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center shadow-sm relative z-10 cursor-pointer"
                      style={{
                        borderColor: step.color,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </motion.div>

                    {/* Index label */}
                    <span className="absolute -top-1.5 -right-1.5 text-[8px] font-mono font-extrabold text-white bg-slate-900 w-5 h-5 rounded-full flex items-center justify-center shadow-3xs z-20 pointer-events-none">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="font-display font-extrabold text-[#0F172A] text-sm mt-4 mb-2">
                    {step.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 leading-normal max-w-[140px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 8: WHY OUR STACK (BENTO GRID) */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Why Our Technology Stack?
            </h2>
            <p className="text-base text-[#475569]">
              We curate tools engineered for execution speed, scale bounds, and
              security parameters.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-5xl mx-auto">
            {/* Bento Card 1: Performance (Col span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs md:col-span-7 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                  Performance Absolute
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  We build with light frameworks, compiled architectures, and
                  asset compressions. Your page loading speeds remain under
                  15ms.
                </p>
              </div>
              <div className="text-[9px] font-mono text-blue-600 font-extrabold uppercase bg-blue-500/5 p-3 rounded-xl border border-blue-500/10">
                Performance Target: 99+ PageSpeed Score
              </div>
            </motion.div>

            {/* Bento Card 2: Scalability (Col span 5) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs md:col-span-5 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-[#7B2FF7] flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                  Scale Bounds
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Distributed cluster containers balancing request loads
                  dynamically to prevent outages under heavy usage.
                </p>
              </div>
              <div className="text-[9px] font-mono text-[#7B2FF7] font-extrabold uppercase bg-purple-500/5 p-3 rounded-xl border border-purple-500/10 mt-6">
                Elastic Scaling Enabled
              </div>
            </motion.div>

            {/* Bento Card 3: Security (Col span 5) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs md:col-span-5 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                  Vulnerability Auditing
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Continuous security scans, SSL protection keys, JWT auth
                  headers, and strict database query controls.
                </p>
              </div>
              <div className="text-[9px] font-mono text-emerald-600 font-extrabold uppercase bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10 mt-6">
                ISO Compliance Standardized
              </div>
            </motion.div>

            {/* Bento Card 4: Innovation (Col span 7) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-2xs md:col-span-7 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                  AI Powered Innovation
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  We integrate semantic vector indexing databases and LLM model
                  prompts directly into core backend software.
                </p>
              </div>
              <div className="text-[9px] font-mono text-orange-500 font-extrabold uppercase bg-orange-500/5 p-3 rounded-xl border border-orange-500/10">
                Cognitive Agents Support
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA + FOOTER SECTION ── */}
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
            src={techstackImg}
            alt="Tech Stack Background"
            className="w-full h-full object-cover object-center opacity-80"
          />
        </div>

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 10, 25, 0.2), rgba(8, 8, 18, 0.6))",
          }}
        />

        {/* CTA */}
        <div className="relative z-10 flex justify-start px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl flex flex-col items-start text-left"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to build with modern tech?
            </span>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
              Let's coordinate on requirements and engineer a custom, scalable
              solution for your business.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="self-start"
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
        <LiquidFooter />
      </section>
    </div>
  );
}
