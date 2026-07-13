import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { burst, onHoverBurst } from "../utils/particleBurst";
import {
  Briefcase,
  Clock,
  ChevronRight,
  TrendingUp,
  BookOpen,
  Cpu,
  Users,
  MapPin,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import carrersImg from "../assets/Carrers img.webp";
import { LiquidFooter } from "../components/LiquidFooter";
import {
  CareersHeroBg,
  LifeAtViyanStrip,
  BenefitFloatIcon,
  PerksRow,
} from "../components/CareersVisuals";

export default function Careers() {
  useEffect(() => {
    const handleEnter = (e: MouseEvent) => {
      burst(
        e.currentTarget as HTMLElement,
        12,
        ["#7B2FF7", "#3B82F6", "#EC4899", "#10B981"],
        80,
        700,
      );
    };

    const btns = document.querySelectorAll<HTMLElement>(".apply-now-btn");
    btns.forEach((btn) => btn.addEventListener("mouseenter", handleEnter));

    return () => {
      btns.forEach((btn) => btn.removeEventListener("mouseenter", handleEnter));
    };
  }, []);

  return (
    <div className="bg-[#FAF7FF] min-h-screen text-[#475569] font-body overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden min-h-[700px]">
        <CareersHeroBg />

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,47,247,0.04)_0%,transparent_60%)] pointer-events-none"></div>

        <div className="container max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[700px]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
                Careers at ViyanInfo
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                Build The Future With ViyanInfo
              </h1>

              <p className="text-lg leading-relaxed text-[#475569] max-w-xl mx-auto lg:mx-0 mb-8">
                Join our mission to build resilient enterprise systems, scalable
                web applications, and automated AI workflows. We value
                operational ownership, direct collaboration, and continuous
                learning.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href="#positions">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="px-6 py-3 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#9333EA] transition-colors cursor-pointer"
                  >
                    Explore Open Positions
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right Large Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              <img
                src="/images/careersimage.webp"
                alt="Careers Illustration"
                className="max-w-[750px] lg:max-w-[500px] h-auto object-contain scale-105 lg:scale-125"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* COMPANY CULTURE SECTION */}
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
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                A Culture Built on Engineering Integrity
              </h2>
              <p className="text-lg leading-relaxed text-[#475569] mb-6">
                We believe in low bureaucracy and high autonomy. Our teams work
                closely in agile sprints, collaborating directly with clients to
                translate complex system requirements into scalable software.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                Whether developing custom APIs, building next-generation web
                dashboards, or integrating automated ML pipelines, we hold
                ourselves to strict quality controls and maintain clean codebase
                structures.
              </p>
            </motion.div>

            {/* Abstract culture graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg overflow-hidden flex flex-col justify-between aspect-video lg:aspect-square"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7]/5 to-[#3B82F6]/5"></div>

              {/* Image Section */}
              <div className="relative w-full h-full">
                <img
                  src="../public/images/team-collab.webp"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Top Overlay Content */}
                <div className="absolute top-0 left-0 w-full z-20 flex justify-between items-start p-5">
                  <div className="p-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white">
                    <Users className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider bg-black/20 backdrop-blur-md px-3 py-2 rounded-lg border border-white/20">
                    Culture Pillars
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 z-20 p-6">
                  <span className="text-2xl font-display font-bold text-white mb-2">
                    Autonomy & Trust
                  </span>

                  <p className="text-xs text-white/80 leading-relaxed max-w-xs">
                    We eliminate unnecessary blockers. We write code, review
                    PRs, and ship features without layers of corporate
                    hierarchy.
                  </p>
                </div>

                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* EMPLOYEE BENEFITS SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Employee Benefits & Perks
            </h2>
            <p className="text-lg text-[#475569]">
              We offer resources, networks, and environments designed to help
              you do your best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Growth",
                desc: "Defined tracks for advancement, skills acquisition budgets, and career progression frameworks.",
                icon: <TrendingUp className="w-6 h-6 text-[#10B981]" />,
                colorClass:
                  "bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]",
              },
              {
                title: "Learning",
                desc: "Bi-weekly tech sharing rounds, specialized certification supports, and developer circles.",
                icon: <BookOpen className="w-6 h-6 text-[#3B82F6]" />,
                colorClass:
                  "bg-blue-500/10 hover:border-blue-500/20 hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)]",
              },
              {
                title: "Innovation",
                desc: "Devote sprints to building internal tools, refactoring legacy items, and exploring automated setups.",
                icon: <Cpu className="w-6 h-6 text-[#7B2FF7]" />,
                colorClass:
                  "bg-purple-500/10 hover:border-[#7B2FF7]/20 hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)]",
              },
              {
                title: "Collaboration",
                desc: "Flexible hybrid working hours, sprint sync layouts, and direct access to team leaders.",
                icon: <Users className="w-6 h-6 text-[#06B6D4]" />,
                colorClass:
                  "bg-cyan-500/10 hover:border-cyan-500/20 hover:shadow-[0_20px_40px_rgba(6,182,212,0.06)]",
              },
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs transition-all duration-300 ${benefit.colorClass}`}
              >
                <BenefitFloatIcon benefitKey={benefit.title} />
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-2xs">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <PerksRow />
        </div>
      </section>

      <SectionDivider />

      {/* LEARNING ENVIRONMENT SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=2074&auto=format&fit=crop"
                alt="Developer workspace"
                className="w-full rounded-3xl shadow-lg aspect-video object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Environment
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
                Our Learning Environment
              </h2>
              <p className="text-lg leading-relaxed text-[#475569] mb-6">
                Technology changes rapidly, and we make sure our engineers are
                always equipped to lead. We support open-source contributions,
                encourage experimentation with new frontend libraries, and run
                internal workshops on modern API optimization.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                You’ll work directly with our senior architects, receiving
                detailed code reviews and participating in product architecture
                planning meetings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-12 bg-[#FAF7FF]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
            Life at ViyanInfo
          </h3>
          <LifeAtViyanStrip />
        </div>
      </section>

      {/* OPEN POSITIONS SECTION */}
      <section id="positions" className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1000px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Current Openings
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-[#475569]">
              Join our engineering and design teams.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto text-left">
            {[
              {
                role: "Frontend Developer",
                exp: "2-4 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Build highly responsive React/TypeScript interfaces, manage state components, and coordinate with API endpoints.",
              },
              {
                role: "Backend Developer",
                exp: "3-5 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Design and implement scalable REST APIs in Java/SpringBoot, map database schemas, and configure container deployments.",
              },
              {
                role: "Python Developer",
                exp: "1-3 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Write automation scripts, develop backend data layers using FastAPI or Django, and integrate AI model endpoints.",
              },
              {
                role: "UI/UX Designer",
                exp: "2-4 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Conduct user research, design wireframes and visual UI assets in Figma, and build interactive high-fidelity web prototypes.",
              },
            ].map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 hover:shadow-[0_15px_35px_rgba(123,47,247,0.08)] hover:border-[#7B2FF7]/20 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-display font-bold text-[#0F172A]">
                      {job.role}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/5 text-[#7B2FF7] font-mono text-[9px] font-bold uppercase tracking-wider">
                      Full Time
                    </span>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4 max-w-2xl">
                    {job.desc}
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-[#8D92B2] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" /> {job.exp}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> {job.loc}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> Hybrid
                    </span>
                  </div>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <Link to="/contact" className="block w-full md:w-auto">
                    <button className="apply-now-btn w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] text-white font-bold text-xs rounded-xl shadow-md hover:shadow-[0_0_15px_rgba(123,47,247,0.4)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-1">
                      Apply Now <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-30 bg-[#FAF7FF]">
        <SectionDivider />
      </div>

      {/* COMBINED CTA + FOOTER SECTION */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "950px",
          paddingTop: "90px",
          paddingBottom: "60px",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={carrersImg}
            alt="Careers Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 10, 25, 0.35), rgba(8, 8, 18, 0.72))",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-[100px] pb-12 px-6 mt-4 md:mt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-8 drop-shadow-xl">
              Don't see your role?
            </span>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
              We are always looking for passionate backend developers, frontend
              engineers, and product designers. Get in touch with us directly.
            </p>
            <motion.div
              whileHover={{ scale: 1.03, translateY: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-[35px] opacity-45 group-hover:opacity-75 transition-opacity duration-300 rounded-full" />
                <button
                  className="relative px-[42px] py-[16px] text-white font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_35px_rgba(147,51,234,0.45)] transition-all duration-300 border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                  }}
                >
                  Send Open Pitch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <LiquidFooter />
      </section>
    </div>
  );
}
