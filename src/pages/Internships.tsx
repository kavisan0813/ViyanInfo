import { useState, useRef, useLayoutEffect } from "react";
import { onHoverBurst } from "../utils/particleBurst";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  BrainCircuit,
  Database,
  Palette,
  Award,
  ClipboardList,
  FileQuestion,
  Clock,
  CheckCircle2,
  Bookmark,
  BookOpen,
} from "lucide-react";
import { FaPython } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { SectionDivider } from "../components/SectionDivider";
import { CTABlock } from "../components/CTABlock";
import {
  InternshipSkillTree,
  InternTestimonials,
  InternshipHeroBg,
  LearningTrackCards,
} from "../components/InternshipVisuals";
import "../styles/ExpertiseSection.css";
import "../index.css";

// Abstract illustration of students collaborating

export default function Internships() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
      <section className="relative pt-24 pb-24 overflow-hidden">
        <InternshipHeroBg />
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
                  <button
                    onMouseEnter={onHoverBurst}
                    className="px-6 py-3 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#9333EA] transition-colors cursor-pointer"
                  >
                    Explore Programs
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right — Interactive Skill Tree */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InternshipSkillTree />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROGRAMS SECTION — LUSION CARD FLIP */}
      <InternshipExpertiseSection />

      <SectionDivider />

      {/* LEARNING TRACKS SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Learning Tracks
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-[#475569]">
              Specialization tracks mapped to industry demand — pick your focus
              and master it.
            </p>
          </div>

          <LearningTrackCards />
        </div>
      </section>

      <SectionDivider />

      {/* INTERN JOURNEY TIMELINE */}
      {/* <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Your Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              From Day One to Placement
            </h2>
            <p className="text-lg text-[#475569]">
              A structured path that takes you from onboarding to career readiness.
            </p>
          </div>

          <InternJourneyTimeline />
        </div>
      </section> */}

      <SectionDivider />

      {/* PROGRAM FLOW (ROADMAP) */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1000px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Learning Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-[#475569]">
              How we guide you from application to certification.
            </p>
          </div>

          {/* Roadmap timeline structure */}
          <div ref={timelineRef} className="relative pb-12">
            {/* Center connector line background */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E9D5FF]/50 -translate-x-1/2 z-0"></div>
            {/* Animated progress line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B2FF7] to-[#EC4899] -translate-x-1/2 z-0 origin-top"
              style={{ scaleY: lineHeight }}
            />

            <div className="space-y-12">
              {roadmapStages.map((flow, idx) => {
                const isHovered = hoveredIdx === idx;
                const isActive = activeIdx === idx;
                const isHighlighted = isHovered || isActive;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    onViewportEnter={() => setActiveIdx(idx)}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row relative z-10 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Glowing Bullet Node */}
                    <motion.div
                      animate={{
                        scale: isHighlighted ? 1.25 : 1,
                        boxShadow: isHighlighted
                          ? `0 0 20px ${flow.color}`
                          : "none",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="absolute left-8 md:left-1/2 top-6 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md z-20"
                      style={{
                        border: `4px solid ${flow.color}`,
                        x: "-50%",
                      }}
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? [1, 1.5, 1] : 1,
                          opacity: isActive ? [1, 0.5, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                        }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: flow.color }}
                      />
                    </motion.div>

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
                          boxShadow: isHighlighted
                            ? `0 20px 40px ${flow.shadowColor}`
                            : "0 4px 6px -1px rgba(0,0,0,0.05)",
                          borderColor: isHighlighted
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
                            isHighlighted
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
                            repeat: isHighlighted ? Infinity : 0,
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
                            color: isHighlighted
                              ? flow.color
                              : `${flow.color}30`,
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

      {/* STUDENT SUCCESS STORIES — TESTIMONIAL CAROUSEL */}
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

          <InternTestimonials />
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
              {/* Shimmer Light Sweep */}
              <motion.div
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] z-50 pointer-events-none"
                animate={{ left: ["-100%", "200%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              />

              {/* Certificate decorations */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none z-0"></div>
              <div className="absolute left-[-50px] bottom-[-50px] w-[200px] h-[200px] rounded-full bg-amber-500/5 blur-2xl pointer-events-none z-0"></div>

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

      <div className="pb-24">
        <SectionDivider />
      </div>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/jja1XS9zZD3ZZ4MSCCeXllTRGjQ.png?width=2048&height=1536')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Fog & Mist Layers fading into the footer
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#D6BADB] via-[#E4D1E8]/60 to-transparent z-0 pointer-events-none" />
        <motion.div 
          className="absolute inset-x-0 bottom-0 h-40 bg-[#D6BADB] blur-3xl z-0 opacity-70 pointer-events-none"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
         */}
        {/* Floating Fog Particles
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`fog-${i}`}
            className="absolute rounded-full bg-white/20 blur-3xl pointer-events-none z-0"
            style={{
              width: `${Math.random() * 400 + 300}px`,
              height: `${Math.random() * 200 + 100}px`,
              left: `${Math.random() * 80}%`,
              bottom: `-50px`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 40 - 20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))} */}

        {/* CTA Content */}
        <div className="relative z-10 pt-16 pb-32 md:pb-48 pl-4 md:pl-12 lg:pl-24">
          <CTABlock
            title="Ready to start your journey?"
            subtitle="Submit your application to secure a spot in our next internship cohort. Cohorts begin quarterly."
            primaryLabel="Apply Now"
            transparent={true}
            align="left"
          />
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────────────────────
   LUSION "AREA OF EXPERTISE" – ALL CARDS VISIBLE,
   SIMULTANEOUS SCROLL-DRIVEN FLIP
   ───────────────────────────────────────── */
const expertisePrograms = [
  {
    title: "Python Development",
    badgeText: "Python",
    icon: FaPython,
    glow: "#22C55E",
    glowRgba: "rgba(34,197,94,.25)",
    badgeBg: "rgba(34,197,94,.12)",
    badgeColor: "#16A34A",
    gradient: "linear-gradient(180deg, #F2FFF8 0%, #E8FFF2 100%)",
    backGradient: "linear-gradient(135deg, #E8FFF2 0%, #FFFFFF 100%)",
    skills: ["Django", "FastAPI", "PostgreSQL", "Algorithms", "REST APIs"],
  },
  {
    title: "Full Stack Development",
    badgeText: "Full Stack",
    icon: TbWorldCode,
    glow: "#F97316",
    glowRgba: "rgba(249,115,22,.25)",
    badgeBg: "rgba(249,115,22,.12)",
    badgeColor: "#EA580C",
    gradient: "linear-gradient(180deg, #FFF8F3 0%, #FFF2EA 100%)",
    backGradient: "linear-gradient(135deg, #FFF2EA 0%, #FFFFFF 100%)",
    skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind"],
  },
  {
    title: "AI & Machine Learning",
    badgeText: "AI",
    icon: BrainCircuit,
    glow: "#8B5CF6",
    glowRgba: "rgba(124,58,237,.25)",
    badgeBg: "rgba(124,58,237,.12)",
    badgeColor: "#7C3AED",
    gradient: "linear-gradient(180deg, #FCF8FF 0%, #F3E8FF 100%)",
    backGradient: "linear-gradient(135deg, #F3E8FF 0%, #FFFFFF 100%)",
    skills: ["OpenAI", "LangChain", "RAG", "HuggingFace", "Automation"],
  },
  {
    title: "Data Science",
    badgeText: "Data",
    icon: Database,
    glow: "#06B6D4",
    glowRgba: "rgba(6,182,212,.25)",
    badgeBg: "rgba(6,182,212,.12)",
    badgeColor: "#0891B2",
    gradient: "linear-gradient(180deg, #F3FCFF 0%, #E8F8FF 100%)",
    backGradient: "linear-gradient(135deg, #E8F8FF 0%, #FFFFFF 100%)",
    skills: ["Pandas", "Scikit-Learn", "Tableau", "SQL", "Power BI"],
  },
  {
    title: "UI/UX Design",
    badgeText: "UI/UX",
    icon: Palette,
    glow: "#F59E0B",
    glowRgba: "rgba(245,158,11,.25)",
    badgeBg: "rgba(245,158,11,.12)",
    badgeColor: "#D97706",
    gradient: "linear-gradient(180deg, #FFFDF4 0%, #FFF7E6 100%)",
    backGradient: "linear-gradient(135deg, #FFF7E6 0%, #FFFFFF 100%)",
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "User Research",
      "Design Systems",
    ],
  },
];

function InternshipExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cardInners = gsap.utils.toArray(
      section.querySelectorAll(".expertise-card-inner"),
    ) as HTMLElement[];

    if (cardInners.length === 0) return;

    const ctx = gsap.context(() => {
      // Heading mask reveal
      gsap.from(".expertise-heading", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });

      // The main scroll-driven flip timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // All cards flip simultaneously with staggered offsets
      // This is the core Lusion feel — each card starts its flip
      // slightly after the previous one (i * 0.15)
      cardInners.forEach((cardInner, i) => {
        tl.to(
          cardInner,
          {
            rotateY: 180,
            rotateX: -6,
            z: 100,
            duration: 1,
            ease: "none",
          },
          i * 0.15,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="programs" ref={sectionRef} className="expertise-section">
      <div className="expertise-viewport">
        {/* Heading */}
        <div className="expertise-heading">
          <span className="label">Training Tracks</span>
          <h2>Our Internship Programs</h2>
          <p>
            Choose from 5 industry-mapped development and design
            specializations.
          </p>
        </div>

        {/* All cards visible in a row */}
        <div className="expertise-cards-row">
          {expertisePrograms.map((program, idx) => {
            const IconComp = program.icon;
            return (
              <div 
                key={idx} 
                className="expertise-card"
                style={{ '--card-glow': program.glow } as React.CSSProperties}
              >
                <div className="expertise-card-inner">
                  {/* FRONT FACE — Tarot Playing Card Style */}
                  <div
                    className="expertise-card-front tarot-front"
                    style={{ background: program.gradient }}
                  >
                    {/* SVG Geometric Decorations */}
                    <svg
                      className="tarot-geometry"
                      viewBox="0 0 240 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      {/* Outer border */}
                      <rect x="8" y="8" width="224" height="334" rx="16" stroke="currentColor" strokeWidth="1.5" />
                      {/* Inner border */}
                      <rect x="16" y="16" width="208" height="318" rx="12" stroke="currentColor" strokeWidth="1.5" />

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
                      className="expertise-icon-glow" 
                      style={{ background: program.glow }}
                    ></div>

                    {/* Top Badge */}
                    <div 
                      className="expertise-top-badge"
                      style={{ background: program.badgeBg, color: program.badgeColor }}
                    >
                      {program.badgeText}
                    </div>

                    {/* Render Icon with Circular Glass Container */}
                    <div className="expertise-icon-glass">
                      <IconComp
                        className="expertise-icon"
                        style={{ color: program.glow }}
                      />
                    </div>

                    {/* Title positioned at bottom */}
                    <h3>{program.title}</h3>
                    <p className="card-label">Hover to reveal</p>
                  </div>

                  {/* BACK FACE — Skills list */}
                  <div
                    className="expertise-card-back"
                    style={{ background: program.backGradient }}
                  >
                    {/* SVG Blueprint Decorations */}
                    <svg
                      className="blueprint-geometry"
                      style={{ color: program.glow }}
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

                    <div className="back-content-wrapper z-10 relative flex flex-col items-center w-full">
                      <span className="back-title" style={{ color: program.badgeColor }}>{program.title}</span>
                      <ul>
                        {program.skills.map((skill, sIdx) => (
                          <li key={sIdx}>{skill}</li>
                        ))}
                      </ul>
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
