import { useRef, useState, useEffect, useMemo } from "react";
import { onHoverBurst } from "../utils/particleBurst";
import { glitchText } from "../utils/charGlitch";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  Cpu,
  Linkedin,
  Github,
  Mail,
  Instagram,
  Star,
  Users,
  TrendingUp,
  Target,
  Compass,
  CheckCircle2,
  Layers,
  Activity,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import { CTABlock } from "../components/CTABlock";
import rithick from "../assets/Rithick.jpg";
import naren from "../assets/Naren.png";
import peter from "../assets/peter.webp";

// 1. Company Story: Software Team Collaboration / Project Architecture
const CompanyStoryIllustration = () => (
  <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,47,247,0.03)_0%,transparent_65%)] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full h-full flex items-center justify-center"
    >
      <svg
        className="absolute w-[90%] h-[90%] pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Connection paths */}
        <motion.path
          d="M 200,200 L 100,100 M 200,200 L 300,100 M 200,200 L 100,300 M 200,200 L 300,300"
          stroke="rgba(123,47,247,0.15)"
          strokeWidth="2"
          strokeDasharray="6,6"
        />
        {/* Animated particles */}
        <motion.circle
          cx="200"
          cy="200"
          r="4"
          fill="#7B2FF7"
          animate={{ cx: [200, 100], cy: [200, 100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="200"
          cy="200"
          r="4"
          fill="#3B82F6"
          animate={{ cx: [200, 300], cy: [200, 100] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
        />
      </svg>

      {/* Central Database / Repository Node */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-20 h-20 rounded-2xl bg-white border border-purple-500/20 shadow-lg flex flex-col items-center justify-center text-[#7B2FF7] z-20"
      >
        <Layers className="w-8 h-8 mb-1" />
        <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-slate-400">
          Main Repo
        </span>
      </motion.div>

      {/* Satellite Node 1: Desktop Wireframe UI */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-12 left-12 p-3 bg-white border border-slate-200 shadow-md rounded-2xl text-[#3B82F6] flex gap-2 items-center"
      >
        <Code2 className="w-5 h-5" />
        <div className="text-left leading-none">
          <span className="block text-[10px] font-bold text-slate-800">
            App.tsx
          </span>
          <span className="text-[8px] text-slate-400">Committed</span>
        </div>
      </motion.div>

      {/* Satellite Node 2: System API Server */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-12 right-12 p-3 bg-white border border-slate-200 shadow-md rounded-2xl text-[#EC4899] flex gap-2 items-center"
      >
        <Cpu className="w-5 h-5" />
        <div className="text-left leading-none">
          <span className="block text-[10px] font-bold text-slate-800">
            GraphQL Server
          </span>
          <span className="text-[8px] text-slate-400">99.9% Online</span>
        </div>
      </motion.div>

      {/* Satellite Node 3: Interactive Code Editor snippet */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-12 left-12 p-3.5 bg-slate-900 border border-slate-800 shadow-xl rounded-2xl text-[#10B981] w-40 text-left font-mono"
      >
        <div className="flex gap-1 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
        <span className="block text-[8px] text-purple-400">
          const viyanCode = () =&gt; &#123;
        </span>
        <span className="block text-[8px] text-cyan-400 pl-2">
          return &quot;impact&quot;;
        </span>
        <span className="block text-[8px] text-purple-400">&#125;;</span>
      </motion.div>

      {/* Satellite Node 4: Git branch graph preview */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-12 right-12 p-3 bg-white border border-slate-200 shadow-md rounded-2xl text-[#F59E0B]"
      >
        <div className="flex gap-1.5 items-center">
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="text-[9px] font-mono font-bold text-slate-700">
            Sprint 12 Approved
          </span>
        </div>
      </motion.div>
    </motion.div>
  </div>
);

// 2. Mission Section: Digital Transformation & Tech Ecosystem
const MissionIllustration = () => (
  <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_65%)] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full h-full flex items-center justify-center"
    >
      <svg
        className="absolute w-[95%] h-[95%]"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Orbit paths */}
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="rgba(59,130,246,0.1)"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
        <circle
          cx="200"
          cy="200"
          r="80"
          stroke="rgba(123,47,247,0.1)"
          strokeWidth="1.5"
        />

        {/* Animated orbit nodes */}
        <motion.circle
          cx={200 + 80 * Math.cos(0)}
          cy={200 + 80 * Math.sin(0)}
          r="6"
          fill="#3B82F6"
          animate={{
            cx: [200 + 80 * Math.cos(0), 200 + 80 * Math.cos(2 * Math.PI)],
            cy: [200 + 80 * Math.sin(0), 200 + 80 * Math.sin(2 * Math.PI)],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx={200 + 120 * Math.cos(Math.PI)}
          cy={200 + 120 * Math.sin(Math.PI)}
          r="6"
          fill="#EC4899"
          animate={{
            cx: [
              200 + 120 * Math.cos(Math.PI),
              200 + 120 * Math.cos(3 * Math.PI),
            ],
            cy: [
              200 + 120 * Math.sin(Math.PI),
              200 + 120 * Math.sin(3 * Math.PI),
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Central Glowing Core */}
      <motion.div
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#7B2FF7] to-[#3B82F6] flex items-center justify-center shadow-xl text-white relative"
      >
        <div className="absolute inset-0 rounded-full bg-[#7B2FF7]/20 animate-ping" />
        <Target className="w-10 h-10" />
      </motion.div>

      {/* Transformation details */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 p-2 px-3 rounded-lg bg-white border border-slate-100 shadow-sm text-xs font-mono font-bold text-slate-500">
        Legacy Monolith
      </div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 p-2 px-3 rounded-lg bg-slate-900 border border-slate-800 shadow-md text-xs font-mono font-bold text-[#10B981] flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />{" "}
        Cloud Native SaaS
      </div>
    </motion.div>
  </div>
);

// 3. Culture Section: Agile Kanban Collaboration Board
const CultureIllustration = () => (
  <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.03)_0%,transparent_65%)] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative z-10 w-[90%] bg-white border border-slate-200/80 rounded-2xl shadow-xl p-4 flex flex-col gap-4 overflow-hidden"
    >
      {/* Board Header */}
      <div className="flex justify-between items-center border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
          <span className="text-[10px] font-mono font-bold text-slate-400">
            Team Board / Active Sprint
          </span>
        </div>
        <span className="text-[8px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
          Sprint 24
        </span>
      </div>

      {/* Kanban Grid */}
      <div className="grid grid-cols-3 gap-3">
        {/* Column 1: To Do */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-left pl-1">
            To Do
          </span>
          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left flex flex-col gap-1.5 shadow-3xs">
            <span className="h-2 w-3/4 bg-slate-200 rounded" />
            <span className="h-1.5 w-1/2 bg-slate-200 rounded" />
            <div className="flex justify-between items-center mt-1">
              <span className="px-1.5 py-0.5 rounded text-[6px] font-mono font-bold bg-pink-50 text-pink-600 border border-pink-100">
                Low
              </span>
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>

        {/* Column 2: In Progress */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-left pl-1">
            In Progress
          </span>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white border border-purple-200 p-2.5 rounded-xl text-left flex flex-col gap-1.5 shadow-2xs relative"
          >
            <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-purple-500 animate-ping" />
            <span className="h-2 w-11/12 bg-slate-200 rounded" />
            <span className="h-1.5 w-2/3 bg-slate-200 rounded" />
            <div className="flex justify-between items-center mt-1">
              <span className="px-1.5 py-0.5 rounded text-[6px] font-mono font-bold bg-purple-50 text-[#7B2FF7] border border-purple-100">
                High
              </span>
              <div className="w-3.5 h-3.5 rounded-full bg-[#7B2FF7] text-white text-[6px] font-black flex items-center justify-center">
                R
              </div>
            </div>
          </motion.div>
        </div>

        {/* Column 3: Done */}
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider text-left pl-1">
            Done
          </span>
          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-left flex flex-col gap-1.5 opacity-60">
            <span className="h-2 w-5/6 bg-slate-200 rounded line-through" />
            <span className="h-1.5 w-1/2 bg-slate-200 rounded" />
            <div className="flex justify-between items-center mt-1">
              <span className="px-1.5 py-0.5 rounded text-[6px] font-mono font-bold bg-emerald-50 text-emerald-600 border border-emerald-100">
                Complete
              </span>
              <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] text-white text-[6px] font-black flex items-center justify-center">
                N
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

// 4. Why Choose Us: Analytics UI dashboard / dashboard visuals
const WhyChooseUsIllustration = () => (
  <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center select-none">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.03)_0%,transparent_65%)] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative z-10 w-[95%] bg-slate-900 border border-slate-800 rounded-2xl shadow-xl p-5 flex flex-col gap-4"
    >
      {/* Metric summary */}
      <div className="flex justify-between items-center">
        <div className="text-left">
          <span className="block text-[8px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            Operational Health
          </span>
          <span className="text-xl font-display font-extrabold text-white">
            99.98% Sync
          </span>
        </div>
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-[#06B6D4] border border-cyan-500/20">
          <Activity className="w-5 h-5 animate-pulse" />
        </div>
      </div>

      {/* SVG Line Graph */}
      <div className="h-24 w-full bg-slate-950/40 rounded-xl relative overflow-hidden p-2 border border-slate-800/40">
        <svg className="w-full h-full" viewBox="0 0 300 80">
          {/* Grid lines */}
          <line
            x1="0"
            y1="20"
            x2="300"
            y2="20"
            stroke="rgba(255,255,255,0.03)"
          />
          <line
            x1="0"
            y1="50"
            x2="300"
            y2="50"
            stroke="rgba(255,255,255,0.03)"
          />
          {/* Curve */}
          <motion.path
            d="M 0,60 Q 50,40 100,55 T 200,20 T 300,10"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-950/30 border border-slate-800 p-3 rounded-xl text-left">
          <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">
            Average API Latency
          </span>
          <span className="text-sm font-bold text-white mt-1 block">12ms</span>
        </div>
        <div className="bg-slate-950/30 border border-slate-800 p-3 rounded-xl text-left">
          <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">
            Security Auditing
          </span>
          <span className="text-sm font-bold text-emerald-400 mt-1 block flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> Passing
          </span>
        </div>
      </div>
    </motion.div>
  </div>
);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeFounder, setActiveFounder] = useState(0);
  const [scrollVal, setScrollVal] = useState(0);
  const activeFounderRef = useRef(0);

  const foundersData = useMemo(() => [
    { name: "Rithick" },
    { name: "Peter" },
    { name: "Narendhiran" },
  ], []);

  useEffect(() => {
    return scrollYProgress.on("change", (val) => {
      setScrollVal(val);
      let nextFounder = 0;
      if (val < 0.25) {
        nextFounder = 0;
      } else if (val < 0.55) {
        nextFounder = 1;
      } else {
        nextFounder = 2;
      }

      if (nextFounder !== activeFounderRef.current) {
        activeFounderRef.current = nextFounder;
        const nameEl = document.querySelector<HTMLElement>(
          `#founder-name-${nextFounder}`,
        );
        if (nameEl) glitchText(nameEl, foundersData[nextFounder].name, 400, 8);
      }

      setActiveFounder(nextFounder);
    });
  }, [scrollYProgress, foundersData]);

  const getFounderStyle = (idx: number, progress: number) => {
    let opacity = 0;
    let y = 80;
    let scale = 0.95;

    if (idx === 0) {
      if (progress <= 0.2) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress <= 0.3) {
        const p = (progress - 0.2) / 0.1; // 0 -> 1
        opacity = 1 - p;
        y = -80 * p;
        scale = 1 - 0.05 * p;
      } else {
        opacity = 0;
        y = -80;
        scale = 0.95;
      }
    } else if (idx === 1) {
      if (progress < 0.2) {
        opacity = 0;
        y = 80;
        scale = 0.95;
      } else if (progress <= 0.3) {
        const p = (progress - 0.2) / 0.1; // 0 -> 1
        opacity = p;
        y = 80 * (1 - p);
        scale = 0.95 + 0.05 * p;
      } else if (progress <= 0.5) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress <= 0.6) {
        const p = (progress - 0.5) / 0.1; // 0 -> 1
        opacity = 1 - p;
        y = -80 * p;
        scale = 1 - 0.05 * p;
      } else {
        opacity = 0;
        y = -80;
        scale = 0.95;
      }
    } else if (idx === 2) {
      if (progress < 0.5) {
        opacity = 0;
        y = 80;
        scale = 0.95;
      } else if (progress <= 0.6) {
        const p = (progress - 0.5) / 0.1; // 0 -> 1
        opacity = p;
        y = 80 * (1 - p);
        scale = 0.95 + 0.05 * p;
      } else {
        opacity = 1;
        y = 0;
        scale = 1;
      }
    }

    return {
      opacity,
      transform: `translateY(${y}px) scale(${scale})`,
      transition:
        "opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
      pointerEvents:
        activeFounder === idx ? ("auto" as const) : ("none" as const),
    };
  };

  const founders = [
    {
      name: "Rithick",
      role: "Founder & CEO",
      image: rithick,
      bio: "Oversees core product architectures, DevOps strategy, and backend engineering pipelines.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:rithick@viyaninfo.com",
      instagram: "https://instagram.com",
      accent: "#7B2FF7",
      glowColor: "rgba(123, 47, 247, 0.15)",
      bgLight: "bg-purple-500/5 border-purple-500/10",
      badges: ["5+ Years Exp", "50+ Projects", "30+ Clients"],
    },
    {
      name: "Peter",
      role: "Co-Founder & COO",
      image: peter,
      bio: "Manages global corporate strategy, partnerships, and market scaling channels.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:peter@viyaninfo.com",
      instagram: "https://instagram.com",
      accent: "#3B82F6",
      glowColor: "rgba(59, 130, 246, 0.15)",
      bgLight: "bg-blue-500/5 border-blue-500/10",
      badges: ["3+ Years Exp", "8+ Projects", "3+ Clients"],
    },
    {
      name: "Narendhiran",
      role: "Co-Founder & CTO",
      image: naren,
      bio: "Directs client operations, business development, and software delivery frameworks.",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:naren@viyaninfo.com",
      instagram: "https://instagram.com",
      accent: "#06B6D4",
      glowColor: "rgba(6, 182, 212, 0.15)",
      bgLight: "bg-cyan-500/5 border-cyan-500/10",
      badges: ["2+ Years Exp", "20+ Projects", "10+ Clients"],
    },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#FAF7FF] min-h-screen text-[#475569] font-body relative"
    >
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,47,247,0.04)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="container relative z-10 max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
                About Our Company
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                Building Technology That Creates Impact
              </h1>
              <p className="text-lg leading-relaxed text-[#475569] max-w-xl mb-8">
                ViyanInfo is dedicated to architecting resilient digital
                ecosystems that empower brands to launch, expand, and run
                operations efficiently. We focus strictly on clean codebases.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="px-6 py-3.5 bg-[#7B2FF7] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:bg-[#9333EA] transition-colors cursor-pointer"
                  >
                    Contact Our Team
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right Abstract Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <CompanyStoryIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* STATS SECTION */}
      <section className="py-20 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              {
                val: "6+",
                label: "Projects Delivered",
                color: "text-[#7B2FF7]",
                bg: "bg-purple-500/5 border-purple-500/10",
              },
              {
                val: "5+",
                label: "Happy Clients",
                color: "text-[#3B82F6]",
                bg: "bg-blue-500/5 border-blue-500/10",
              },
              {
                val: "1+",
                label: "Experience",
                color: "text-[#06B6D4]",
                bg: "bg-cyan-500/5 border-cyan-500/10",
              },
              {
                val: "98%",
                label: "Success Rate",
                color: "text-[#10B981]",
                bg: "bg-emerald-500/5 border-emerald-500/10",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl border ${stat.bg} backdrop-blur-md text-center`}
              >
                <span
                  className={`block text-4xl sm:text-5xl font-display font-extrabold ${stat.color} mb-2`}
                >
                  {stat.val}
                </span>
                <span className="text-xs font-bold text-[#8D92B2] uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* OUR STORY SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Engineering Digital Growth
              </h2>
              <p className="text-lg leading-relaxed text-[#475569] mb-6">
                Founded with a vision to build clean, high-performance
                applications, ViyanInfo has evolved into an agile software
                development company. We solve architectural complexity so our
                clients can focus entirely on scaling their core operations.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                We partner with modern startups and forward-thinking enterprises
                alike, building custom backends, fluid user experiences, and
                automated intelligence layers that drive measurable digital
                value.
              </p>
            </motion.div>

            {/* Developers discussing project architecture */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg overflow-hidden flex flex-col justify-between aspect-video lg:aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7]/5 to-[#3B82F6]/5"></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-[#7B2FF7]">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#8D92B2] uppercase tracking-wider">
                    Metrics Overview
                  </span>
                </div>
                <div>
                  <div className="text-4xl font-display font-extrabold text-[#0F172A] mb-2">
                    +240%
                  </div>
                  <div className="text-xs font-bold text-[#8D92B2] uppercase tracking-wider">
                    Yearly Growth Efficacy
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* MISSION & VISION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left mb-20">
            {/* Mission/Transformation illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MissionIllustration />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Mission & Vision
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Architecting Resilient Futures
              </h2>
              <p className="text-lg leading-relaxed text-[#475569] mb-6">
                To engineer stable, transparent, and scalable digital solutions
                that eliminate operational friction and enable businesses to
                expand systematically in the modern economy.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                We envision becoming a premier global software architecture
                partner recognized for strict quality controls, continuous
                engineering innovation, and product-focused delivery frameworks.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(123,47,247,0.01)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)] hover:border-[#7B2FF7]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[#7B2FF7] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed text-[#475569]">
                To engineer stable, transparent, and scalable digital solutions
                that eliminate operational friction and enable businesses to
                expand systematically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(59,130,246,0.01)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)] hover:border-[#3B82F6]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-[#3B82F6] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed text-[#475569]">
                To become a premier global software architecture partner
                recognized for strict quality controls and product-focused
                delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CULTURE SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Agile Sprints & Collaborative Workflows
              </h2>
              <p className="text-lg leading-relaxed text-[#475569] mb-6">
                At ViyanInfo, we promote an engineering-first culture. Our team
                relies on continuous feedback loops, strict Git branch checks,
                and structured task boards to maintain alignment.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                We value technical curiosity, creative layout designs, and clean
                database normalization. Here, every engineer takes code
                ownership, commits directly to key modules, and participates in
                structural reviews.
              </p>
            </motion.div>

            {/* Kanban / Task board illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <CultureIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* WHY CHOOSE US (BENTO GRID STYLE) */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left mb-20">
            {/* Dashboard / Analytics illustration */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <WhyChooseUsIllustration />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Engineered For Strict Performance
              </h2>
              <p className="text-lg leading-relaxed text-[#475569] mb-6">
                Every application we configure is audited for execution speed,
                security vulnerability mitigation, and clean user experience. We
                build to last.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-cyan-500/10 rounded-md text-[#06B6D4]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 text-sm">
                      Automated Security Audits
                    </span>
                    <span className="text-xs text-slate-500">
                      Continuous dependency checking and vulnerability scanning
                      hooks.
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-cyan-500/10 rounded-md text-[#06B6D4]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 text-sm">
                      Scalable Node Structures
                    </span>
                    <span className="text-xs text-slate-500">
                      Architectures designed to balance traffic loads
                      dynamically across server nodes.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CORE VALUES */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ECFEFF] border border-[#CFFAFE] text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              What Guides Us
            </h2>
            <p className="text-lg text-[#475569]">
              Our engineering values steer every line of code we write and
              design decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Performance Absolute",
                desc: "We focus on clean architecture, optimized database queries, and lightweight assets to deliver absolute execution speed.",
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                title: "Visual Excellence",
                desc: "We believe functional tools must feel gorgeous and responsive. Design is not just skin deep; it defines the product.",
                icon: <Star className="w-6 h-6" />,
              },
              {
                title: "Direct Transparency",
                desc: "Honest timelines, clear updates, and shared repositories form the foundation of our trusted client partnerships.",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(6,182,212,0.01)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.06)] hover:border-[#06B6D4]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-[#06B6D4] mb-6 group-hover:scale-105 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-4">
                  {val.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SCROLL STORYTELLING FOUNDERS SECTION */}
      <section ref={sectionRef} className="relative h-[350vh] bg-[#FAF7FF]">
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="container max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center relative">
            {/* Section Header (Fades out when scrolling) */}
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
                y: useTransform(scrollYProgress, [0, 0.15], [0, -30]),
              }}
              className="absolute top-16 left-6 right-6 text-center z-20"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-3">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
                The Founders
              </h2>
            </motion.div>

            {/* Founders Stories Map */}
            <div className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center">
              {founders.map((founder, idx) => {
                const styleObj = getFounderStyle(idx, scrollVal);
                return (
                  <div
                    key={idx}
                    style={styleObj}
                    className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                  >
                    {/* Left Side: Circular Portrait (col-span-5) */}
                    <div className="lg:col-span-5 flex justify-center relative">
                      {/* Floating background blobs */}
                      <div
                        className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle, ${founder.accent}, transparent 60%)`,
                          transform: "scale(1.2)",
                        }}
                      />

                      {/* Circular Portrait Frame (300px) */}
                      <motion.div
                        animate={{ y: [-6, 6, -6] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-full p-2 flex items-center justify-center"
                      >
                        {/* Animated rotating outer gradient ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${founder.accent}, #9333EA)`,
                            padding: "3px",
                          }}
                        >
                          <div className="w-full h-full bg-[#FAF7FF] rounded-full" />
                        </motion.div>

                        {/* Glass Layer Inner Ring */}
                        <div className="absolute inset-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-inner z-10 pointer-events-none" />

                        {/* Founder Portrait Image */}
                        <div className="w-[88%] h-[88%] rounded-full overflow-hidden z-0 bg-purple-50 shadow-md">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Right Side: Content (col-span-7) */}
                    <div className="lg:col-span-7 text-left flex flex-col justify-center z-10">
                      <span
                        className="text-xs font-mono font-black uppercase tracking-wider mb-2 block"
                        style={{ color: founder.accent }}
                      >
                        {founder.role}
                      </span>
                      <h3
                        id={`founder-name-${idx}`}
                        className="text-4xl sm:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight mb-4"
                      >
                        {founder.name}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-[#475569] mb-6 max-w-xl">
                        {founder.bio}
                      </p>

                      {/* Highlight Badges */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {founder.badges.map((badge, bIdx) => (
                          <div
                            key={bIdx}
                            className="px-4 py-2 rounded-xl backdrop-blur-md border border-white/60 text-xs font-bold text-slate-700 shadow-3xs"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.4)",
                              borderLeft: `3px solid ${founder.accent}`,
                            }}
                          >
                            {badge}
                          </div>
                        ))}
                      </div>

                      {/* Social handles */}
                      <div className="flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#0A66C2" }}
                        >
                          <Linkedin className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#181717" }}
                        >
                          <Github className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.email}
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#EA4335" }}
                        >
                          <Mail className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all text-white"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                          }}
                        >
                          <Instagram className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-30 bg-[#FAF7FF]">
        <SectionDivider />
      </div>

      {/* FINAL CTA */}
      <CTABlock
        title="Want to join our team?"
        subtitle="Join us in building scalable software and our in-house ERP platform. You’ll work closely with the core team, take ownership, and ship meaningful features."
        primaryLabel="Contact Us"
      />
    </div>
  );
}
