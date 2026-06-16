import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Code2,
  Brain,
  Palette,
  GraduationCap,
  ChevronRight,
  Check,
  Cpu,
  Database,
  Cloud,
  Layers,
  ArrowRight,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";

export default function ServicesOverview() {
  const [activeOrbitTech, setActiveOrbitTech] = useState<string>("AI");

  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      icon: Code2,
      desc: "Tailored enterprise solutions built from scratch to solve your unique operational bottlenecks.",
      features: [
        "Scalable microservices backend architectures",
        "Legacy software migration and refactoring",
        "Robust enterprise API integrations",
        "Real-time event driven messaging systems",
      ],
      link: "/contact",
      colorClass: "text-[#7B2FF7]",
      hoverBorderClass: "hover:border-[#7B2FF7]/20",
      hoverTextClass: "hover:text-[#7B2FF7] hover:border-[#7B2FF7]",
      bgClass: "bg-[#7B2FF7]/5",
      borderClass: "border-[#7B2FF7]/10",
      badgeClass: "bg-[#7B2FF7]/10 text-[#7B2FF7]",
      accentColor: "#7B2FF7"
    },
    {
      id: "web-apps",
      title: "Web Applications",
      icon: Globe,
      desc: "High-performance React & Next.js applications engineered for speed, search optimization, and scaling.",
      features: [
        "Next.js server-side rendering & static generation",
        "State-of-the-art UI/UX responsiveness",
        "Stripe and billing system integrations",
        "Core Web Vitals scores above 95",
      ],
      link: "/services/websites",
      colorClass: "text-[#3B82F6]",
      hoverBorderClass: "hover:border-[#3B82F6]/20",
      hoverTextClass: "hover:text-[#3B82F6] hover:border-[#3B82F6]",
      bgClass: "bg-[#3B82F6]/5",
      borderClass: "border-[#3B82F6]/10",
      badgeClass: "bg-[#3B82F6]/10 text-[#3B82F6]",
      accentColor: "#3B82F6"
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      icon: Smartphone,
      desc: "Native iOS and Android smart applications built with React Native to ensure rapid feature deployment.",
      features: [
        "Single codebase cross-platform deployments",
        "Offline-first local database architecture",
        "Secure push notification integration",
        "App Store and Google Play submissions",
      ],
      link: "/services/mobile",
      colorClass: "text-[#06B6D4]",
      hoverBorderClass: "hover:border-[#06B6D4]/20",
      hoverTextClass: "hover:text-[#06B6D4] hover:border-[#06B6D4]",
      bgClass: "bg-[#06B6D4]/5",
      borderClass: "border-[#06B6D4]/10",
      badgeClass: "bg-[#06B6D4]/10 text-[#06B6D4]",
      accentColor: "#06B6D4"
    },
    {
      id: "ai-solutions",
      title: "AI Solutions",
      icon: Brain,
      desc: "Intelligent workflows, Large Language Model integrations, custom chatbots, and business automation pipelines.",
      features: [
        "OpenAI API & Anthropic model integration",
        "Vector database indexing (Pinecone, pgvector)",
        "Retrieval-Augmented Generation (RAG) pipelines",
        "Automated intelligence data extraction tools",
      ],
      link: "/contact",
      colorClass: "text-[#EC4899]",
      hoverBorderClass: "hover:border-[#EC4899]/20",
      hoverTextClass: "hover:text-[#EC4899] hover:border-[#EC4899]",
      bgClass: "bg-[#EC4899]/5",
      borderClass: "border-[#EC4899]/10",
      badgeClass: "bg-[#EC4899]/10 text-[#EC4899]",
      accentColor: "#EC4899"
    },
    {
      id: "ui-ux",
      title: "UI/UX Design",
      icon: Palette,
      desc: "Research-driven, gorgeous user interfaces and delightful digital experiences tailored to your audience.",
      features: [
        "Detailed wireframes & interactive prototypes",
        "Comprehensive user journey research",
        "Atomic design system foundations",
        "Interactive micro-animations & layout feedback",
      ],
      link: "/contact",
      colorClass: "text-[#F97316]",
      hoverBorderClass: "hover:border-[#F97316]/20",
      hoverTextClass: "hover:text-[#F97316] hover:border-[#F97316]",
      bgClass: "bg-[#F97316]/5",
      borderClass: "border-[#F97316]/10",
      badgeClass: "bg-[#F97316]/10 text-[#F97316]",
      accentColor: "#F97316"
    },
    {
      id: "internship",
      title: "Internship Programs",
      icon: GraduationCap,
      desc: "Empowering the next generation of engineers with hands-on projects, modern stack mentorship, and codebase exposure.",
      features: [
        "Real-world project pairing and reviews",
        "Mentorship from senior software developers",
        "Git worktree & pull request training",
        "Career development and reference reviews",
      ],
      link: "/about",
      colorClass: "text-[#10B981]",
      hoverBorderClass: "hover:border-[#10B981]/20",
      hoverTextClass: "hover:text-[#10B981] hover:border-[#10B981]",
      bgClass: "bg-[#10B981]/5",
      borderClass: "border-[#10B981]/10",
      badgeClass: "bg-[#10B981]/10 text-[#10B981]",
      accentColor: "#10B981"
    },
  ];

  const orbitTechs = [
    {
      name: "Frontend",
      icon: <Globe className="w-5 h-5" />,
      desc: "React, Next.js, TailwindCSS, TypeScript",
    },
    {
      name: "Backend",
      icon: <Cpu className="w-5 h-5" />,
      desc: "Node.js, Express, Python, Django, FastAPI",
    },
    {
      name: "Cloud",
      icon: <Cloud className="w-5 h-5" />,
      desc: "AWS (S3, Lambda, EC2), Docker, Vercel",
    },
    {
      name: "Database",
      icon: <Database className="w-5 h-5" />,
      desc: "PostgreSQL, MongoDB, MySQL, Redis",
    },
    {
      name: "AI",
      icon: <Brain className="w-5 h-5" />,
      desc: "OpenAI, LangChain, Vector Databases",
    },
  ];

  return (
    <div className="bg-[#FAF7FF] relative overflow-hidden min-h-screen text-[#0F172A]">
      {/* Background radial soft light purple glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/5 blur-3xl pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Col */}
            <div className="lg:col-span-6 text-left flex flex-col items-start">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
                What We Deliver
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                Technology Solutions <br />
                <span className="bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] bg-clip-text text-transparent">
                  Built For Growth
                </span>
              </h1>
              <p className="text-lg text-[#475569] mb-10 max-w-readable leading-relaxed">
                Scalable software solutions designed for startups and
                enterprises. We pair clean code patterns with outstanding user
                experiences.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#6D28D9] transition-all duration-300 flex items-center gap-2 cursor-pointer">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <a href="#services-list">
                  <button className="px-8 py-4 bg-white border border-[#E9D5FF] hover:border-[#7B2FF7] text-[#0F172A] font-bold text-sm rounded-xl transition-all duration-300 cursor-pointer">
                    Explore Services
                  </button>
                </a>
              </div>
            </div>

            {/* Right Col: 3D Software development visual representation */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-[460px] aspect-square">
                {/* Spinning orbital ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#7B2FF7]/15 animate-[spin-slow_30s_linear_infinite]" />
                <div className="absolute inset-8 rounded-full border border-dotted border-[#9333EA]/20 animate-[spin-counter-clockwise_20s_linear_infinite]" />

                {/* Floating center board representating software build */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-16 rounded-3xl bg-white/60 backdrop-blur-md border border-white shadow-xl p-6 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center mb-4 border-b border-[#E9D5FF]/30 pb-3">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <span className="text-[10px] font-mono text-[#7B2FF7] font-bold">
                      viyan-build.log
                    </span>
                  </div>

                  <div className="flex-1 font-mono text-[11px] text-[#475569] space-y-2 text-left">
                    <p className="text-[#7B2FF7] font-semibold">
                      {"$ npm run build"}
                    </p>
                    <p>{"✔ transforming files (2267 modules)..."}</p>
                    <p className="text-green-600">
                      {"✔ index.js (262.7 kB) - gzip 86.0 kB"}
                    </p>
                    <p className="text-green-600">
                      {"✔ vendor.js (257.3 kB) - gzip 90.8 kB"}
                    </p>
                    <p className="text-indigo-500">
                      {"✔ deploy pipeline: SUCCESSful (0.4s)"}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E9D5FF]/30 flex justify-between items-center text-[10px] font-mono text-[#9333EA]">
                    <span>CPU usage: 12%</span>
                    <span>All systems green</span>
                  </div>
                </motion.div>

                {/* Floating orbits badge elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute top-4 left-6 px-4 py-2.5 rounded-2xl bg-white border border-[#E9D5FF] shadow-md flex items-center gap-2"
                >
                  <Globe className="w-4 h-4 text-[#7B2FF7]" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    React
                  </span>
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute bottom-12 right-0 px-4 py-2.5 rounded-2xl bg-white border border-[#E9D5FF] shadow-md flex items-center gap-2"
                >
                  <Brain className="w-4 h-4 text-[#7B2FF7]" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    AI Automation
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST GRID */}
      <section
        id="services-list"
        className="py-24 bg-white/40 backdrop-blur-md border-y border-[#E9D5FF]/40"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Explore Our Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Comprehensive Technology Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-8 rounded-3xl bg-white border border-[#E9D5FF]/50 shadow-[0_8px_30px_rgba(123,47,247,0.02)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.08)] transition-all duration-500 flex flex-col justify-between text-left overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none z-0"
                  style={{ backgroundImage: `radial-gradient(circle at top left, ${service.accentColor}, transparent 70%)` }}
                />

                {/* Gradient border effect using pseudo inset */}
                <div 
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
                  style={{ borderColor: `${service.accentColor}33` }}
                />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${service.bgClass} ${service.borderClass}`}>
                    <service.icon className={`w-8 h-8 transition-colors duration-300 ${service.colorClass}`} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-[13px] text-[#475569]"
                      >
                        <Check className={`w-4 h-4 ${service.colorClass} mt-0.5 shrink-0`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={service.link} className="relative z-10">
                  <button className={`w-full py-3 rounded-xl bg-white border border-[#E9D5FF] text-sm font-semibold text-[#0F172A] transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer ${service.hoverTextClass} group-hover:border-[${service.accentColor}]/30`}>
                    Learn More <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<SectionDivider />

      {/* ALTERNATING DETAIL SECTIONS WITH ABSTRACT ILLUSTRATIONS */}
      <section className="py-24 relative space-y-32">
        {/* Connection Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E9D5FF]/80 to-transparent hidden lg:block -translate-x-1/2 pointer-events-none z-0" />

        {services.map((service, idx) => (
          <motion.div 
            key={service.id} 
            className="container relative z-10"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Center Node dot on the connection line */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full hidden lg:block border-[3px] border-white z-20" 
              style={{ backgroundColor: service.accentColor, boxShadow: `0 0 15px ${service.accentColor}80` }} 
            />

            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
            >
              {/* Content box */}
              <div
                className={`lg:col-span-6 text-left ${idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-6 ${service.bgClass} ${service.borderClass}`}>
                  <service.icon className={`w-6 h-6 ${service.colorClass}`} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
                  {service.title}
                </h3>
                <p className="text-base text-[#475569] leading-relaxed mb-8">
                  {service.desc} We build it with modular engineering processes
                  to guarantee that the system handles spikes in demand cleanly.
                </p>

                <div className="space-y-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${service.bgClass} ${service.colorClass}`}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm text-[#475569] font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to={service.link}>
                  <button className={`px-6 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer bg-white ${service.borderClass} ${service.colorClass} ${service.hoverTextClass}`}>
                    Consult an Engineer <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>

              {/* Abstract Illustration box */}
              <div
                className={`lg:col-span-6 flex justify-center ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full max-w-md aspect-video rounded-3xl bg-white border border-[#E9D5FF] p-8 flex flex-col justify-between overflow-hidden shadow-xs"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(123,47,247,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(123,47,247,0.01)_1px,transparent_1px)] bg-size:[24px_24px]"></div>

                  <div className="relative z-10 flex justify-between items-start">
                    <span className={`text-[10px] font-mono uppercase tracking-widest font-bold ${service.colorClass}`}>
                      {service.title.split(" ")[0]} Flow
                    </span>
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: service.accentColor }}></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: service.accentColor }}></span>
                    </span>
                  </div>

                  {/* Abstract graphic representation */}
                  <div className="relative z-10 flex items-center justify-center my-6 h-24">
                    <svg className="w-full h-full" viewBox="0 0 200 80">
                      <motion.path
                        d="M10,40 Q50,0 100,40 T190,40"
                        fill="none"
                        stroke={service.accentColor}
                        strokeWidth="2.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                      <circle cx="100" cy="40" r="5" fill={service.accentColor} />
                      <circle cx="10" cy="40" r="4" fill={service.accentColor} />
                      <circle cx="190" cy="40" r="4" fill={service.accentColor} />
                    </svg>
                  </div>

                  <div className="relative z-10 flex justify-between text-[10px] font-mono text-[#475569]">
                    <span>STATUS: ACTIVE</span>
                    <span>ENCRYPTION: AES-256</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

<SectionDivider />

      {/* TECHNOLOGY ORBIT SECTION */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden border-t border-[#E9D5FF]/40">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Col */}
            <div className="lg:col-span-5 text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
                Technology Stack
              </h2>
              <p className="text-base text-[#475569] leading-relaxed mb-8">
                Explore our stack categories. Select a tier to review details.
              </p>

              <div className="flex flex-col gap-3">
                {orbitTechs.map((tech) => (
                  <button
                    key={tech.name}
                    onClick={() => setActiveOrbitTech(tech.name)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between cursor-pointer ${activeOrbitTech === tech.name ? "bg-white border-[#7B2FF7] shadow-md" : "bg-white/40 border-[#E9D5FF] hover:border-[#7B2FF7]/30"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeOrbitTech === tech.name ? "bg-[#7B2FF7]/10 text-[#7B2FF7]" : "bg-[#E9D5FF]/10 text-[#475569]"}`}
                      >
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-[#0F172A]">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-[#475569] mt-0.5">
                          {tech.desc}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${activeOrbitTech === tech.name ? "text-[#7B2FF7] translate-x-1" : "text-[#475569]"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col: Animated Tech Orbit Visualizer */}
            <div className="lg:col-span-7 flex justify-center items-center relative h-[420px]">
              <div className="relative w-[360px] h-[360px]">
                {/* Center Core node */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#7B2FF7] to-[#9333EA] flex flex-col items-center justify-center text-white shadow-xl z-20">
                    <Layers className="w-6 h-6 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold mt-1">
                      VIYAN
                    </span>
                  </div>
                </div>

                {/* Rotating Orbit circle paths */}
                <div className="absolute inset-0 rounded-full border border-dashed border-[#7B2FF7]/20 animate-[spin-slow_25s_linear_infinite]" />
                <div className="absolute inset-12 rounded-full border border-dotted border-[#9333EA]/20 animate-[spin-counter-clockwise_15s_linear_infinite]" />

                {/* Tech node indicators floating around */}
                {orbitTechs.map((tech, idx) => {
                  const angle = (idx * 360) / orbitTechs.length;
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 40 * Math.cos(rad);
                  const y = 50 + 40 * Math.sin(rad);

                  const isActive = activeOrbitTech === tech.name;

                  return (
                    <button
                      key={tech.name}
                      onClick={() => setActiveOrbitTech(tech.name)}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl flex flex-col items-center justify-center border transition-all duration-300 shadow-sm cursor-pointer z-20 ${isActive ? "bg-[#7B2FF7] text-white border-[#7B2FF7] scale-110" : "bg-white text-[#475569] border-[#E9D5FF] hover:border-[#7B2FF7]"}`}
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {tech.icon}
                      <span className="text-[9px] font-bold font-mono mt-1">
                        {tech.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

<SectionDivider />

      {/* CTA SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-[#7B2FF7] to-[#9333EA] text-center text-white relative overflow-hidden shadow-xl"
          >
            {/* Ambient background particles */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl top-[-100px] left-[-100px]" />
              <div className="absolute w-80 h-80 bg-white rounded-full blur-3xl bottom-[-100px] right-[-100px]" />
            </div>

            <span className="relative z-10 inline-block px-3 py-1 rounded-full bg-white/20 border border-white/30 text-xs font-mono font-extrabold tracking-wider uppercase mb-6">
              Connect With Us
            </span>
            <h2 className="relative z-10 text-4xl sm:text-5xl font-display font-black tracking-tight mb-4">
              Build With Modern Technology
            </h2>
            <p className="relative z-10 text-lg text-purple-100 max-w-xl mx-auto mb-10">
              Let's create scalable, secure software powered by the latest technologies.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#7B2FF7] font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
              >
                Start Project <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
