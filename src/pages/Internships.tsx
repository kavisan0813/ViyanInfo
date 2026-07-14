import { useState, useRef } from "react";
import { onHoverBurst } from "../utils/particleBurst";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Clock, CheckCircle2, Bookmark } from "lucide-react";
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
import { Intern } from "../components/ArrayContent";
import { InternshipExpertiseSection } from "../components/Internship";

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
              {Intern.map((flow, idx) => {
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
