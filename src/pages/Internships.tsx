import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Globe,
  Brain,
  Database,
  Palette,
  Briefcase,
  Award,
  Users,
  Star,
  Target,
  ClipboardList,
  FileQuestion,
  Clock,
  CheckCircle2,
  Bookmark,
  BookOpen,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import { CTABlock } from "../components/CTABlock";
import "../index.css";

// Abstract illustration of students collaborating
const StudentsCollaborationIllustration = () => (
  <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center">
    {/* Floating Orbits */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="absolute w-80 h-80 rounded-full border border-purple-500/10 border-dashed"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      className="absolute w-[420px] h-[420px] rounded-full border border-indigo-500/5"
    />

    {/* Glowing particles */}
    <div className="absolute w-56 h-56 bg-purple-500/10 rounded-full blur-3xl top-10 left-10"></div>
    <div className="absolute w-56 h-56 bg-pink-500/5 rounded-full blur-3xl bottom-10 right-10"></div>

    {/* Central Interaction Hub */}
    <motion.div
      animate={{ y: [-12, 12, -12] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl flex flex-col items-center gap-4 w-[280px]"
    >
      <div className="flex gap-[-8px] items-center">
        <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold border-2 border-white text-sm shadow-md">
          S1
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold border-2 border-white text-sm shadow-md ml-[-8px]">
          S2
        </div>
        <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold border-2 border-white text-sm shadow-md ml-[-8px]">
          S3
        </div>
      </div>
      <div className="text-center w-full">
        <div className="text-[10px] font-mono text-[#8D92B2] uppercase tracking-wider mb-2">
          Live Sprint Collaboration
        </div>
        <div className="h-2 w-full bg-gray-200/50 rounded-full overflow-hidden mb-1.5">
          <motion.div
            animate={{ width: ["30%", "85%", "30%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          ></motion.div>
        </div>
        <div className="text-[11px] font-semibold text-[#475569]">
          Backend API: 200 OK
        </div>
      </div>
    </motion.div>

    {/* Floating elements */}
    <motion.div
      animate={{ y: [5, -15, 5], rotate: [0, 10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      }}
      className="absolute top-16 left-12 p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-md text-blue-500"
    >
      <Code className="w-6 h-6" />
    </motion.div>

    <motion.div
      animate={{ y: [-15, 5, -15], rotate: [0, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="absolute bottom-20 right-8 p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-md text-pink-500"
    >
      <Brain className="w-6 h-6" />
    </motion.div>

    <motion.div
      animate={{ scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 right-24 p-3 rounded-full bg-white/70 border border-white shadow-sm text-yellow-500"
    >
      <Award className="w-5 h-5" />
    </motion.div>
  </div>
);

export default function Internships() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const roadmapStages = [
    {
      step: "01",
      title: "Apply",
      desc: "Submit your resume and select your preferred training track.",
      duration: "1-2 Days",
      requirements: "Resume submission & track selection",
      outcome: "Application review & initial tracking link",
      color: "#7B2FF7", // Purple
      shadowColor: "rgba(123, 47, 247, 0.15)",
      bgLight: "bg-purple-50/50",
      borderGlow: "group-hover:border-[#7B2FF7]/40",
      icon: <ClipboardList className="w-6 h-6 text-[#7B2FF7]" />,
    },
    {
      step: "02",
      title: "Interview",
      desc: "Complete a basic logic and coding evaluation review.",
      duration: "30-45 Mins",
      requirements: "Core programming & technical orientation",
      outcome: "Direct feedback & onboarding verification",
      color: "#3B82F6", // Blue
      shadowColor: "rgba(59, 130, 246, 0.15)",
      bgLight: "bg-blue-50/50",
      borderGlow: "group-hover:border-[#3B82F6]/40",
      icon: <FileQuestion className="w-6 h-6 text-[#3B82F6]" />,
    },
    {
      step: "03",
      title: "Training",
      desc: "Spend 2-4 weeks building foundational stack proficiencies.",
      duration: "2-4 Weeks",
      requirements: "Self-paced modules & weekly sandbox tasks",
      outcome: "Foundational stack proficiency certified",
      color: "#EC4899", // Pink
      shadowColor: "rgba(236, 72, 153, 0.15)",
      bgLight: "bg-pink-50/50",
      borderGlow: "group-hover:border-[#EC4899]/40",
      icon: <BookOpen className="w-6 h-6 text-[#EC4899]" />,
    },
    {
      step: "04",
      title: "Projects",
      desc: "Collaborate in sprints to construct production modules.",
      duration: "4-8 Weeks",
      requirements: "Team sprints, Git reviews & deployment setups",
      outcome: "Live features deployed & portfolio contributions",
      color: "#F97316", // Orange
      shadowColor: "rgba(249, 115, 22, 0.15)",
      bgLight: "bg-orange-50/50",
      borderGlow: "group-hover:border-[#F97316]/40",
      icon: <Code className="w-6 h-6 text-[#F97316]" />,
    },
    {
      step: "05",
      title: "Certification",
      desc: "Receive your verified certificate and feedback summary.",
      duration: "1 Day",
      requirements: "Final showcase demo & architect code review",
      outcome: "Verified company certificate & referral channels",
      color: "#10B981", // Green
      shadowColor: "rgba(16, 185, 129, 0.15)",
      bgLight: "bg-emerald-50/50",
      borderGlow: "group-hover:border-[#10B981]/40",
      icon: <Award className="w-6 h-6 text-[#10B981]" />,
    },
  ];

  return (
    <div className="bg-[#FAF7FF] min-h-screen text-[#475569] font-body overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,47,247,0.04)_0%,transparent_60%)] pointer-events-none"></div>
        <div className="container max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
                Viyan Academy
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                Launch Your Career With Real Industry Experience
              </h1>
              <p className="text-lg leading-relaxed text-[#475569] max-w-xl mb-8">
                Work alongside our core product engineers, gain hands-on
                training, build production-grade projects, and earn verified
                industry certificates.
              </p>
              <div className="flex gap-4">
                <a href="#programs">
                  <button className="px-6 py-3 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#9333EA] transition-colors cursor-pointer">
                    Explore Programs
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right Collaborative Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <StudentsCollaborationIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Training Tracks
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Our Internship Programs
            </h2>
            <p className="text-lg text-[#475569]">
              Choose from 5 industry-mapped development and design
              specializations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Python Development",
                icon: (
                  <Code className="w-6 h-6 text-[#3B82F6] group-hover:text-white transition-colors duration-300" />
                ),
                desc: "Learn scripting, backend frameworks (Django/FastAPI), SQL database queries, and algorithmic problem-solving.",
                accent: "#3B82F6",
                glowColor: "rgba(59, 130, 246, 0.18)",
                glowBlob: "rgba(59, 130, 246, 0.15)",
                iconBgDefault: "rgba(59, 130, 246, 0.1)",
                iconBgHover:
                  "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              },
              {
                title: "Full Stack Development",
                icon: (
                  <Globe className="w-6 h-6 text-[#7B2FF7] group-hover:text-white transition-colors duration-300" />
                ),
                desc: "Master frontend components (React/TypeScript) and connect them to secure REST APIs and structured servers.",
                accent: "#7B2FF7",
                glowColor: "rgba(123, 47, 247, 0.18)",
                glowBlob: "rgba(123, 47, 247, 0.15)",
                iconBgDefault: "rgba(123, 47, 247, 0.1)",
                iconBgHover:
                  "linear-gradient(135deg, #7B2FF7 0%, #6366F1 100%)",
              },
              {
                title: "AI & Machine Learning",
                icon: (
                  <Brain className="w-6 h-6 text-[#EC4899] group-hover:text-white transition-colors duration-300" />
                ),
                desc: "Integrate LLM API endpoints, compile Retrieval Augmented Generation (RAG) frameworks, and build model pipelines.",
                accent: "#EC4899",
                glowColor: "rgba(236, 72, 153, 0.18)",
                glowBlob: "rgba(236, 72, 153, 0.15)",
                iconBgDefault: "rgba(236, 72, 153, 0.1)",
                iconBgHover:
                  "linear-gradient(135deg, #EC4899 0%, #D946EF 100%)",
              },
              {
                title: "Data Science",
                icon: (
                  <Database className="w-6 h-6 text-[#06B6D4] group-hover:text-white transition-colors duration-300" />
                ),
                desc: "Query data warehouses, compile predictive analytics models, and build visual insight dashboards.",
                accent: "#06B6D4",
                glowColor: "rgba(6, 182, 212, 0.18)",
                glowBlob: "rgba(6, 182, 212, 0.15)",
                iconBgDefault: "rgba(6, 182, 212, 0.1)",
                iconBgHover:
                  "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
              },
              {
                title: "UI/UX Design",
                icon: (
                  <Palette className="w-6 h-6 text-[#F59E0B] group-hover:text-white transition-colors duration-300" />
                ),
                desc: "Master research methods, wireframes, user flows, high-fidelity prototypes, and component visual UI assets.",
                accent: "#F59E0B",
                glowColor: "rgba(245, 158, 11, 0.18)",
                glowBlob: "rgba(245, 158, 11, 0.15)",
                iconBgDefault: "rgba(245, 158, 11, 0.1)",
                iconBgHover:
                  "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
              },
            ].map((program, idx) => (
              <div key={idx} className="relative group">
                {/* Background glow blob behind card */}
                <motion.div
                  className="absolute inset-0 rounded-3xl blur-2xl pointer-events-none opacity-0"
                  style={{
                    background: program.glowBlob,
                  }}
                  variants={{
                    hover: {
                      opacity: 0.15,
                    },
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  whileHover="hover"
                  variants={{
                    hover: {
                      y: -8,
                      boxShadow: `0 20px 40px ${program.glowColor}`,
                    },
                  }}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "transparent",
                    borderWidth: "1px",
                    borderStyle: "solid",
                  }}
                  className="p-8 rounded-3xl shadow-xs transition-all duration-300 flex flex-col justify-between h-full relative z-10 overflow-hidden"
                >
                  {/* Inside gradient hover overlay (like home page services) */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${program.accent}1a, ${program.accent}05)`,
                    }}
                  />

                  <div>
                    {/* Icon container */}
                    <motion.div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: program.iconBgDefault,
                      }}
                      variants={{
                        hover: {
                          background: program.iconBgHover,
                          scale: 1.08,
                          rotate: 2,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      {program.icon}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-display font-semibold text-[#0F172A] mb-3"
                      variants={{
                        hover: {
                          fontWeight: 700,
                          color: "#000000",
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {program.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-[#475569] mb-6">
                      {program.desc}
                    </p>
                  </div>

                  {/* Footer Line */}
                  <div className="pt-4 border-t border-purple-500/5">
                    <motion.span
                      className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block"
                      style={{ textShadow: "0 0 0px transparent" }}
                      variants={{
                        hover: {
                          color: program.accent,
                          letterSpacing: "0.15em",
                          textShadow: `0 0 8px ${program.accent}40`,
                        },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    >
                      Interactive Track
                    </motion.span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Why Intern With ViyanInfo?
            </h2>
            <p className="text-lg text-[#475569]">
              Gain core technical capabilities that set you apart in the
              recruitment landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {[
              {
                title: "Live Projects",
                desc: "Write production code, commit pull requests, and compile modules.",
                icon: <Code className="w-6 h-6 text-[#7B2FF7]" />,
                bg: "bg-purple-500/10",
              },
              {
                title: "Mentorship",
                desc: "Work directly with core software architects on code reviews.",
                icon: <Users className="w-6 h-6 text-[#3B82F6]" />,
                bg: "bg-blue-500/10",
              },
              {
                title: "Certificate",
                desc: "Earn a verified company internship certification outlining achievements.",
                icon: <Award className="w-6 h-6 text-[#EC4899]" />,
                bg: "bg-pink-500/10",
              },
              {
                title: "Portfolio Building",
                desc: "Draft clean project architecture maps and host real demo applications.",
                icon: <Target className="w-6 h-6 text-[#06B6D4]" />,
                bg: "bg-cyan-500/10",
              },
              {
                title: "Placement Support",
                desc: "Resume audit sessions, mock technical interviews, and reference paths.",
                icon: <Briefcase className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-500/10",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#475569]">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROGRAM FLOW (ROADMAP) */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1000px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Program Flow Roadmap
            </h2>
            <p className="text-lg text-[#475569]">
              How we guide you from application to certification.
            </p>
          </div>

          {/* Roadmap timeline structure */}
          <div className="relative">
            {/* Center connector line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E9D5FF] -translate-x-1/2 z-0"></div>

            <div className="space-y-12">
              {roadmapStages.map((flow, idx) => {
                const isHovered = hoveredIdx === idx;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row relative z-10 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Glowing Bullet Node */}
                    <div
                      className="absolute left-8 md:left-1/2 top-6 w-8 h-8 rounded-full bg-white -translate-x-1/2 flex items-center justify-center shadow-md z-20 transition-all duration-300"
                      style={{
                        border: `4px solid ${flow.color}`,
                        boxShadow: isHovered
                          ? `0 0 16px ${flow.color}`
                          : "none",
                        transform: isHovered
                          ? "translateX(-50%) scale(1.25)"
                          : "translateX(-50%)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: flow.color }}
                      />
                    </div>

                    {/* Card container */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 text-left">
                      <motion.div
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs hover:shadow-xl transition-all duration-500 relative group overflow-hidden"
                        style={{
                          boxShadow: isHovered
                            ? `0 20px 40px ${flow.shadowColor}`
                            : "none",
                          borderColor: isHovered
                            ? `${flow.color}30`
                            : "rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        {/* Glassmorphism Background Gradients */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at top right, ${flow.color}, transparent 60%)`,
                          }}
                        />

                        {/* Floating Icon */}
                        <motion.div
                          animate={
                            isHovered
                              ? {
                                  y: [-4, 4, -4],
                                  scale: 1.08,
                                  rotate: [0, 5, -5, 0],
                                }
                              : {
                                  y: 0,
                                  scale: 1,
                                }
                          }
                          transition={{
                            repeat: isHovered ? Infinity : 0,
                            duration: 3,
                            ease: "easeInOut",
                          }}
                          className={`absolute top-6 right-8 w-14 h-14 rounded-2xl ${flow.bgLight} border border-white/20 shadow-xs flex items-center justify-center z-10`}
                        >
                          {flow.icon}
                        </motion.div>

                        <span
                          className="text-4xl font-mono font-black mb-2 block transition-colors duration-300"
                          style={{
                            color: isHovered ? flow.color : `${flow.color}30`,
                          }}
                        >
                          {flow.step}
                        </span>

                        <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3 transition-colors duration-300">
                          {flow.title}
                        </h3>

                        <p className="text-sm text-[#475569] leading-relaxed mb-4">
                          {flow.desc}
                        </p>

                        {/* Expandable Details Container */}
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={
                            isHovered
                              ? { height: "auto", opacity: 1, marginTop: 24 }
                              : { height: 0, opacity: 0, marginTop: 0 }
                          }
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-slate-200/50"
                        >
                          <div className="pt-4 space-y-3.5">
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1 rounded-md bg-slate-50 border border-slate-100">
                                <Clock className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div>
                                <span className="block text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  Duration
                                </span>
                                <span className="text-xs font-semibold text-slate-700">
                                  {flow.duration}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1 rounded-md bg-slate-50 border border-slate-100">
                                <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div>
                                <span className="block text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  Requirements
                                </span>
                                <span className="text-xs font-semibold text-slate-700">
                                  {flow.requirements}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1 rounded-md bg-slate-50 border border-slate-100">
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div>
                                <span className="block text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  Outcome
                                </span>
                                <span className="text-xs font-semibold text-slate-700">
                                  {flow.outcome}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Empty column placeholder for alternate timeline layout */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* STUDENT SUCCESS STORIES */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-[#475569]">
              Hear from graduates who converted training into software careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {[
              {
                text: "The Python program at ViyanInfo was incredibly structured. I committed API endpoints that are being used in production today.",
                name: "Rahul Verma",
                role: "Software Developer, HCL",
                track: "Python Track",
              },
              {
                text: "Mastering React and TypeScript during the full-stack internship helped me pass my technical evaluations and land a frontend engineer role.",
                name: "Anjali K.",
                role: "Frontend Engineer, Cognizant",
                track: "Full Stack Track",
              },
              {
                text: "Building real LLM chat agents gave me the practical portfolio I needed. Mentors corrected my architecture in every PR review.",
                name: "Vikram Sen",
                role: "Associate AI Developer, TCS",
                track: "AI & ML Track",
              },
            ].map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 hover:shadow-[0_15px_30px_rgba(123,47,247,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm italic leading-relaxed text-[#475569] mb-6">
                    "{story.text}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-[#0F172A] text-sm">
                      {story.name}
                    </h4>
                    <span className="text-xs text-[#7B2FF7] font-semibold">
                      {story.role}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-purple-500/5 text-[#7B2FF7] font-mono text-[9px] font-bold uppercase tracking-wider">
                    {story.track}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CERTIFICATE SHOWCASE SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Certificate Showcase
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              Every graduate receives a verified, secure credential outlining
              key stack proficiencies and project achievements.
            </p>
          </div>

          {/* Certificate design box (Gold + Purple combination) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto p-1 rounded-[36px] bg-gradient-to-tr from-amber-400 via-[#7B2FF7] to-amber-500 shadow-2xl relative overflow-hidden group"
          >
            {/* Inner background card */}
            <div className="bg-[#15173A] rounded-[32px] p-8 sm:p-12 text-left relative overflow-hidden flex flex-col justify-between aspect-video min-h-[380px] text-white">
              {/* Certificate decorations */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none"></div>
              <div className="absolute left-[-50px] bottom-[-50px] w-[200px] h-[200px] rounded-full bg-amber-500/5 blur-2xl pointer-events-none"></div>

              {/* Header */}
              <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl tracking-tight text-white mb-1">
                    VIYAN INFOTECH
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400 tracking-[0.2em] uppercase font-bold">
                    VERIFIED GRADUATE
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                  <Award className="w-8 h-8" />
                </div>
              </div>

              {/* Content body */}
              <div className="mb-8 flex-1">
                <span className="text-[10px] font-mono text-[#8D92B2] uppercase tracking-wider block mb-2">
                  THIS CERTIFIES THAT
                </span>
                <span className="text-2xl sm:text-3xl intern-card font-bold mb-3 text-white-400 ">
                  Rithick
                </span>
                <p className="text-xs sm:text-sm text-[#C7C9D9] max-w-xl leading-relaxed">
                  has successfully completed the 3-month Full Stack Developer
                  Internship track, constructing scalable React interfaces and
                  Node.js microservices.
                </p>
              </div>

              {/* Signatures / Verify ID */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-xs text-[#8D92B2]">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-white/80">
                    ID: VIYAN-2026-FSD-982
                  </span>
                  <span>Issued: June 12, 2026</span>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <span className="h-6 w-20 border-b border-white/20 italic font-serif text-white/90 text-center text-sm">
                      Viyan Tech
                    </span>
                    <span>Engineering Director</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* FINAL CTA */}
      <CTABlock
        title="Ready to start your journey?"
        subtitle="Submit your application to secure a spot in our next internship cohort. Cohorts begin quarterly."
        primaryLabel="Apply Now"
      />
    </div>
  );
}
