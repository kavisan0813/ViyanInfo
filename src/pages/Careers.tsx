import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { burst, onHoverBurst } from "../utils/particleBurst";
import {
  Briefcase,
  MapPin,
  Clock,
  ChevronRight,
  TrendingUp,
  BookOpen,
  Cpu,
  Users,
  Compass,
  Star,
  Facebook,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import carrersImg from "../assets/Carrers img.webp";
import logo1 from "../assets/Logo image 1.svg";

// Abstract illustration of team collaboration for the Hero right side
const TeamCollaborationIllustration = () => (
  <div className="relative w-full aspect-square max-w-[480px] mx-auto flex items-center justify-center">
    {/* Floating Orbiting Boundaries */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      className="absolute w-80 h-80 rounded-full border border-purple-500/10 border-dashed"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      className="absolute w-[400px] h-[400px] rounded-full border border-indigo-500/5"
    />
    
    {/* Radial Blur Backdrops */}
    <div className="absolute w-52 h-52 bg-purple-500/10 rounded-full blur-3xl top-1/4 left-1/4"></div>
    <div className="absolute w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl bottom-1/4 right-1/4"></div>

    {/* Central Interaction Node (Representing Team Hub) */}
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-xl flex flex-col items-center gap-4 w-[280px]"
    >
      <div className="flex gap-[-8px] items-center justify-center">
        <div className="w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold border-2 border-white text-xs shadow-md">T1</div>
        <div className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold border-2 border-white text-xs shadow-md ml-[-8px]">T2</div>
        <div className="w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold border-2 border-white text-xs shadow-md ml-[-8px]">T3</div>
      </div>
      <div className="text-center w-full">
        <span className="text-[10px] font-mono text-[#8D92B2] uppercase tracking-wider block mb-1">Collaboration Velocity</span>
        <div className="text-sm font-display font-extrabold text-[#0F172A] mb-1">98 Sprints Executed</div>
        <div className="text-[11px] font-medium text-[#7B2FF7]">Velocity: Optimal</div>
      </div>
    </motion.div>

    {/* Floating Cultural Icons */}
    <motion.div
      animate={{ y: [5, -15, 5] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute top-16 right-12 p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-md text-[#7B2FF7]"
    >
      <Compass className="w-5 h-5" />
    </motion.div>

    <motion.div
      animate={{ y: [-15, 5, -15] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      className="absolute bottom-20 left-10 p-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 shadow-md text-[#3B82F6]"
    >
      <Users className="w-5 h-5" />
    </motion.div>

    <motion.div
      animate={{ scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-20 p-3 rounded-full bg-white/70 border border-white shadow-sm text-yellow-500"
    >
      <Star className="w-4 h-4" />
    </motion.div>
  </div>
);

export default function Careers() {
  useEffect(() => {
    const handleEnter = (e: MouseEvent) => {
      burst(e.currentTarget as HTMLElement, 12, ["#7B2FF7", "#3B82F6", "#EC4899", "#10B981"], 80, 700);
    };

    const btns = document.querySelectorAll<HTMLElement>(".apply-now-btn");
    btns.forEach(btn => btn.addEventListener("mouseenter", handleEnter));

    return () => {
      btns.forEach(btn => btn.removeEventListener("mouseenter", handleEnter));
    };
  }, []);

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
                Careers at ViyanInfo
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                Build The Future With ViyanInfo
              </h1>
              <p className="text-lg leading-relaxed text-[#475569] max-w-xl mb-8">
                Join our mission to build resilient enterprise systems, scalable web applications, and automated AI workflows. We value operational ownership, direct collaboration, and continuous learning.
              </p>
              <div className="flex gap-4">
                <a href="#positions">
                  <button onMouseEnter={onHoverBurst} className="px-6 py-3 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#9333EA] transition-colors cursor-pointer">
                    Explore Open Positions
                  </button>
                </a>
              </div>
            </motion.div>
            
            {/* Right Collaboration Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TeamCollaborationIllustration />
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
                We believe in low bureaucracy and high autonomy. Our teams work closely in agile sprints, collaborating directly with clients to translate complex system requirements into scalable software.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                Whether developing custom APIs, building next-generation web dashboards, or integrating automated ML pipelines, we hold ourselves to strict quality controls and maintain clean codebase structures.
              </p>
            </motion.div>

            {/* Abstract culture graphic */}
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
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#8D92B2] uppercase tracking-wider">Culture Pillars</span>
                </div>
                <div>
                  <h4 className="text-2xl font-display font-bold text-[#0F172A] mb-2">Autonomy & Trust</h4>
                  <p className="text-xs text-[#475569] leading-relaxed max-w-xs">
                    We eliminate unnecessary blockers. We write code, review PRs, and ship features without layers of corporate hierarchy.
                  </p>
                </div>
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
              We offer resources, networks, and environments designed to help you do your best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Growth",
                desc: "Defined tracks for advancement, skills acquisition budgets, and career progression frameworks.",
                icon: <TrendingUp className="w-6 h-6 text-[#10B981]" />,
                colorClass: "bg-emerald-500/10 hover:border-emerald-500/20 hover:shadow-[0_20px_40px_rgba(16,185,129,0.06)]"
              },
              {
                title: "Learning",
                desc: "Bi-weekly tech sharing rounds, specialized certification supports, and developer circles.",
                icon: <BookOpen className="w-6 h-6 text-[#3B82F6]" />,
                colorClass: "bg-blue-500/10 hover:border-blue-500/20 hover:shadow-[0_20px_40px_rgba(59,130,246,0.06)]"
              },
              {
                title: "Innovation",
                desc: "Devote sprints to building internal tools, refactoring legacy items, and exploring automated setups.",
                icon: <Cpu className="w-6 h-6 text-[#7B2FF7]" />,
                colorClass: "bg-purple-500/10 hover:border-[#7B2FF7]/20 hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)]"
              },
              {
                title: "Collaboration",
                desc: "Flexible hybrid working hours, sprint sync layouts, and direct access to team leaders.",
                icon: <Users className="w-6 h-6 text-[#06B6D4]" />,
                colorClass: "bg-cyan-500/10 hover:border-cyan-500/20 hover:shadow-[0_20px_40px_rgba(6,182,212,0.06)]"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs transition-all duration-300 ${benefit.colorClass}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-2xs">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-[#475569]">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
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
                Technology changes rapidly, and we make sure our engineers are always equipped to lead. We support open-source contributions, encourage experimentation with new frontend libraries, and run internal workshops on modern API optimization.
              </p>
              <p className="text-sm leading-relaxed text-[#475569]">
                You’ll work directly with our senior architects, receiving detailed code reviews and participating in product architecture planning meetings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

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
                desc: "Build highly responsive React/TypeScript interfaces, manage state components, and coordinate with API endpoints."
              },
              {
                role: "Backend Developer",
                exp: "3-5 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Design and implement scalable REST APIs in Java/SpringBoot, map database schemas, and configure container deployments."
              },
              {
                role: "Python Developer",
                exp: "1-3 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Write automation scripts, develop backend data layers using FastAPI or Django, and integrate AI model endpoints."
              },
              {
                role: "UI/UX Designer",
                exp: "2-4 Years Exp",
                loc: "Chennai / Hybrid",
                desc: "Conduct user research, design wireframes and visual UI assets in Figma, and build interactive high-fidelity web prototypes."
              }
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
                    <h3 className="text-xl font-display font-bold text-[#0F172A]">{job.role}</h3>
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/5 text-[#7B2FF7] font-mono text-[9px] font-bold uppercase tracking-wider">Full Time</span>
                  </div>
                  <p className="text-sm text-[#475569] leading-relaxed mb-4 max-w-2xl">{job.desc}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-[#8D92B2] font-semibold">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5" /> {job.exp}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> {job.loc}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Hybrid</span>
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
        style={{ minHeight: "950px", paddingTop: "90px", paddingBottom: "60px" }}
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
            background: "linear-gradient(to bottom, rgba(10, 10, 25, 0.35), rgba(8, 8, 18, 0.72))",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-[100px] pb-12 px-6 mt-4 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-8 drop-shadow-xl">
              Don't see your role?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 drop-shadow-md">
              We are always looking for passionate backend developers, frontend engineers, and product designers. Get in touch with us directly.
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
        <div
          className="relative z-10 w-[94%] md:w-[88%] max-w-[1450px] mx-auto mt-[70px] mb-10 rounded-[32px] p-8 md:p-[50px_60px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] text-center md:text-left">
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/" className="block w-fit mb-6">
                <img
                  src={logo1}
                  alt="ViyanInfo"
                  className="h-10 w-auto object-contain select-none"
                />
              </Link>
              <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)] max-w-xs mb-8">
                Building scalable software, AI solutions, and digital products
                that help businesses grow faster and operate smarter.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
                  { icon: <Github size={18} />, href: "https://github.com" },
                  { icon: <Instagram size={18} />, href: "https://instagram.com" },
                  { icon: <Facebook size={18} />, href: "https://facebook.com" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 22px rgba(168,85,247,0.45)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.background = "rgba(168, 85, 247, 0.4)";
                      e.currentTarget.style.borderColor = "rgba(168, 85, 247, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Services
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Custom Software Development", path: "/services" },
                  { name: "Web Applications", path: "/services/websites" },
                  { name: "Mobile Applications", path: "/services/mobile" },
                  { name: "AI Solutions", path: "/services" },
                  { name: "UI/UX Design", path: "/services" },
                  { name: "Internship Programs", path: "/internship" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.88)] hover:text-[#c084fc] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Resources
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Case Studies", path: "/portfolio" },
                  { name: "Careers", path: "/careers" },
                  { name: "Blog", path: "/blog" },
                  { name: "Technology Stack", path: "/tech-stack" },
                  { name: "Contact", path: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.88)] hover:text-[#c084fc] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col items-center md:items-start text-[rgba(255,255,255,0.82)]">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Contact
              </span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    admin@viyaninfo.com
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    +91 6379723465
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    Tiruvallur, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    www.viyaninfo.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="h-px bg-[rgba(255,255,255,0.12)] w-full mb-6 mt-12" />

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-[rgba(255,255,255,0.62)] pb-8">
            <p>© 2026 ViyanInfo. All rights reserved.</p>

            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/about"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
