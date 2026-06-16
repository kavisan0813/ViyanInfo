import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Brain,
  GraduationCap,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import inventryImg from "../assets/inventry.webp";
import emsImg from "../assets/ems.webp";
import flowerImg from "../assets/sakura.webp";
import dashboardImg from "../assets/intro.jpeg";
import { motion } from "framer-motion";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLImageElement>(null);
  const flowerRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Force a ScrollTrigger sort and refresh shortly after mount to ensure correct layout/height calculations
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ALL DESKTOP / TABLET UP ANIMATIONS (>= 769px)
      mm.add("(min-width: 769px)", () => {
        // --- Hero Entrance ---
        const badge = ".hero-badge";
        const h1Lines = gsap.utils.toArray<HTMLElement>(
          ".line-inner",
          heroContentRef.current,
        );
        const subtitle = ".hero-subtitle";
        const ctaButtons = gsap.utils.toArray<HTMLElement>(
          ".hero-cta",
          heroContentRef.current,
        );

        const tl = gsap.timeline();
        tl.from(badge, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: 0.5,
        })
          .from(
            h1Lines,
            { y: "110%", duration: 1.3, stagger: 0.1, ease: "expo.out" },
            "-=0.7",
          )
          .from(subtitle, { y: 30, opacity: 0, duration: 0.9 }, "-=0.7")
          .from(
            ctaButtons,
            { y: 25, opacity: 0, stagger: 0.1, duration: 0.8 },
            "-=0.6",
          );

        // --- Hero Scroll Exit ---
        gsap.to(heroContentRef.current, {
          y: -140,
          opacity: 0,
          scale: 0.96,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: () => `+=${(heroRef.current?.offsetHeight || 600) * 0.7}`,
            scrub: 1.2,
          },
        });

        // Floating Animations
        gsap.to(dashRef.current, {
          y: -15,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
        gsap.to(flowerRef.current, {
          y: 15,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        // Mouse Parallax
        const handleMouseMove = (e: MouseEvent) => {
          const x = (e.clientX / window.innerWidth - 0.5) * 30;
          const y = (e.clientY / window.innerHeight - 0.5) * 30;
          gsap.to(dashRef.current, {
            x: x,
            y: y,
            duration: 1,
            ease: "power2.out",
          });
          gsap.to(flowerRef.current, {
            x: -x * 1.5,
            y: -y * 1.5,
            duration: 1,
            ease: "power2.out",
          });
        };

        if (heroRef.current) {
          heroRef.current.addEventListener("mousemove", handleMouseMove);
          return () => {
            if (heroRef.current) {
              heroRef.current.removeEventListener("mousemove", handleMouseMove);
            }
          };
        }
      });

      // MOBILE ANIMATIONS (< 769px)
      mm.add("(max-width: 768px)", () => {
        const badge = ".hero-badge";
        const h1Lines = gsap.utils.toArray<HTMLElement>(
          ".line-inner",
          heroContentRef.current,
        );
        const ctaButtons = gsap.utils.toArray<HTMLElement>(
          ".hero-cta",
          heroContentRef.current,
        );

        const tl = gsap.timeline();
        tl.from(badge, { opacity: 0, duration: 0.5 })
          .from(
            h1Lines,
            { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 },
            "-=0.2",
          )
          .from(ctaButtons, { opacity: 0, duration: 0.5 }, "-=0.3");
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-abyss">
      {/* SECTION 1 - HERO (UNTOUCHED) */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden pt-8 pb-16 bg-[#F8F5FF]"
      >
        {/* Soft Ambient Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_left,rgba(240,230,255,0.6)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(220,200,255,0.4)_0%,transparent_60%)]"></div>

        {/* Dot Grid Pattern in Top-Right Corner */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(#C084FC_1.5px,transparent_1.5px)] [bg-size:24px_24px] opacity-[0.15] pointer-events-none z-0 mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_70%)]"></div>

        {/* Content */}
        <div
          ref={heroContentRef}
          className="container relative z-10 w-full max-w-[1300px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-20 lg:pt-0">
            {/* Left Box: Typographic Content (5/12 equivalent) */}
            <div className="lg:col-span-5 text-left flex flex-col items-start pr-4">
              <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-[#E9D5FF] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                <span className="text-[12px] font-body font-semibold text-[#7C3AED]">
                  We Build Digital Excellence
                </span>
              </div>

              <h1 className="text-[clamp(34px,4.5vw,56px)] font-display font-bold text-[#1F1430] leading-[1.1] tracking-tight mb-6">
                <div className="flex gap-[0.3em] overflow-hidden">
                  <div className="line-inner">We</div>
                  <div className="line-inner">Engineer</div>
                </div>
                <div className="flex gap-[0.3em] overflow-hidden">
                  <div className="line-inner text-[#9333ea]">Digital</div>
                  <div className="line-inner text-[#9333ea]">Excellence</div>
                </div>
                <div className="flex gap-[0.3em] overflow-hidden">
                  <div className="line-inner">From</div>
                  <div className="line-inner">Day</div>
                  <div className="line-inner">One.</div>
                </div>
              </h1>

              <p className="hero-subtitle body-copy text-[#6B7280] max-w-readable mb-10 text-[15px] leading-relaxed">
                VIYAN Infotech delivers elite websites, mobile apps, and SaaS
                platforms for ambitious businesses. We turn complex ideas into
                scalable digital products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/portfolio" className="hero-cta">
                  <button className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer">
                    Explore Our Work{" "}
                    <span className="text-lg leading-none font-normal">→</span>
                  </button>
                </Link>
                <Link to="/contact" className="hero-cta">
                  <button className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Box: Coded Premium Glass Dashboard */}
            <div className="lg:col-span-7 w-full flex justify-end relative select-none mt-16 lg:mt-0 pb-12">
              {/* Main Dashboard Wrapper */}
              <div className="relative w-full max-w-[820px] lg:translate-x-[40px]">
                {/* Premium 3D Translucent Flower Backdrop Image */}
                <img
                  ref={flowerRef}
                  src={flowerImg}
                  alt="Translucent Flower Decor"
                  className="absolute left-[-120px] bottom-[-100px] w-[540px] h-auto pointer-events-none z-0 opacity-90 object-contain"
                />

                {/* Dashboard Image */}
                <img
                  ref={dashRef}
                  src={dashboardImg}
                  alt="Dashboard Showcase"
                  className="w-full h-auto object-contain z-10 relative rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 1: TRUST & ACHIEVEMENTS */}
      <section className="relative py-24 overflow-hidden bg-[#FAF7FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,47,247,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                val: 6,
                suffix: "+",
                label: "Projects Delivered",
                desc: "Enterprise and startup applications shipped globally.",
                color: "text-[#7B2FF7]",
                divider: "from-[#7B2FF7] to-purple-400",
                glow: "from-purple-500/5 to-indigo-500/5",
                borderGlow: "from-[#7B2FF7]/20 to-[#9333EA]/20",
              },
              {
                val: 5,
                suffix: "+",
                label: "Happy Clients",
                desc: "Long-term partnerships built on engineering excellence.",
                color: "text-[#3B82F6]",
                divider: "from-[#3B82F6] to-blue-400",
                glow: "from-blue-500/5 to-cyan-500/5",
                borderGlow: "from-[#3B82F6]/20 to-[#60A5FA]/20",
              },
              {
                val: 1,
                suffix: "+",
                label: "Years Experience",
                desc: "Years of refining processes and modern technology stacks.",
                color: "text-[#06B6D4]",
                divider: "from-[#06B6D4] to-cyan-400",
                glow: "from-cyan-500/5 to-teal-500/5",
                borderGlow: "from-[#06B6D4]/20 to-[#22D3EE]/20",
              },
              {
                val: 98,
                suffix: "%",
                label: "Client Satisfaction",
                desc: "Uncompromising quality, transparency, and delivery speed.",
                color: "text-[#10B981]",
                divider: "from-[#10B981] to-emerald-400",
                glow: "from-emerald-500/5 to-green-500/5",
                borderGlow: "from-[#10B981]/20 to-[#34D399]/20",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(123,47,247,0.03)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.08)] transition-all duration-300"
              >
                {/* Glow background effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                ></div>
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${stat.borderGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xs`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3
                    className={`text-5xl font-display font-extrabold ${stat.color} mb-2 tracking-tight`}
                  >
                    <CountUp end={stat.val} />
                    {stat.suffix}
                  </h3>
                  <div
                    className={`h-0.5 w-12 bg-gradient-to-r ${stat.divider} my-3 rounded-full`}
                  ></div>
                  <span className="text-lg font-display font-bold text-[#0F172A] mb-2">
                    {stat.label}
                  </span>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2: OUR SERVICES */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              We construct high-performing digital solutions using modern
              engineering workflows and state-of-the-art architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Software Development",
                icon: <Code2 className="w-8 h-8 text-[#7B2FF7]" />,
                desc: "Tailored enterprise solutions built from scratch to streamline your business workflows.",
                tag: "Custom",
                bg: "from-purple-500/10 to-indigo-500/10",
                tagColor: "text-[#7B2FF7]",
                learnMoreColor: "text-[#7B2FF7]",
                btnBg: "bg-purple-500/5",
                btnDot: "bg-[#7B2FF7]",
                gradientBorder: "from-[#7B2FF7]/10 to-[#9333EA]/10",
                path: "/services",
              },
              {
                title: "Web Application Development",
                icon: <Globe className="w-8 h-8 text-[#3B82F6]" />,
                desc: "High-performance React & Next.js applications engineered for scalability and speed.",
                tag: "Web",
                bg: "from-blue-500/10 to-indigo-500/10",
                tagColor: "text-[#3B82F6]",
                learnMoreColor: "text-[#3B82F6]",
                btnBg: "bg-blue-500/5",
                btnDot: "bg-[#3B82F6]",
                gradientBorder: "from-[#3B82F6]/10 to-blue-500/10",
                path: "/services/websites",
              },
              {
                title: "Mobile App Development",
                icon: <Smartphone className="w-8 h-8 text-[#06B6D4]" />,
                desc: "Native iOS and Android smart applications built with React Native for cross-platform efficiency.",
                tag: "Mobile",
                bg: "from-cyan-500/10 to-indigo-500/10",
                tagColor: "text-[#06B6D4]",
                learnMoreColor: "text-[#06B6D4]",
                btnBg: "bg-cyan-500/5",
                btnDot: "bg-[#06B6D4]",
                gradientBorder: "from-[#06B6D4]/10 to-cyan-500/10",
                path: "/services/mobile",
              },
              {
                title: "AI & Automation Solutions",
                icon: <Brain className="w-8 h-8 text-[#EC4899]" />,
                desc: "Intelligent workflows, LLM integrations, OpenAI chatbots, and business automation pipelines.",
                tag: "Artificial Intelligence",
                bg: "from-pink-500/10 to-indigo-500/10",
                tagColor: "text-[#EC4899]",
                learnMoreColor: "text-[#EC4899]",
                btnBg: "bg-pink-500/5",
                btnDot: "bg-[#EC4899]",
                gradientBorder: "from-[#EC4899]/10 to-pink-500/10",
                path: "/services",
              },
              {
                title: "UI/UX Design",
                icon: <Palette className="w-8 h-8 text-[#F97316]" />,
                desc: "Research-driven, gorgeous user interfaces and delightful digital experiences.",
                tag: "Design",
                bg: "from-orange-500/10 to-indigo-500/10",
                tagColor: "text-[#F97316]",
                learnMoreColor: "text-[#F97316]",
                btnBg: "bg-orange-500/5",
                btnDot: "bg-[#F97316]",
                gradientBorder: "from-[#F97316]/10 to-orange-500/10",
                path: "/services",
              },
              {
                title: "Internship & Training Programs",
                icon: <GraduationCap className="w-8 h-8 text-[#10B981]" />,
                desc: "Empowering the next generation of engineers with hands-on projects and mentorship.",
                tag: "Education",
                bg: "from-green-500/10 to-indigo-500/10",
                tagColor: "text-[#10B981]",
                learnMoreColor: "text-[#10B981]",
                btnBg: "bg-green-500/5",
                btnDot: "bg-[#10B981]",
                gradientBorder: "from-[#10B981]/10 to-emerald-500/10",
                path: "/internship",
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgba(123,47,247,0.02)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Gradient border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradientBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                ></div>

                <div>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-widest ${service.tagColor} font-bold font-mono`}
                  >
                    {service.tag}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mt-2 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#475569] text-[15px] leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-purple-500/5 flex items-center justify-between">
                  <Link
                    to={service.path}
                    className={`text-sm font-semibold ${service.learnMoreColor} flex items-center gap-1 group-hover:gap-2 transition-all`}
                  >
                    Learn More <ChevronRight className="w-4 h-4" />
                  </Link>
                  <div
                    className={`w-8 h-8 rounded-full ${service.btnBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${service.btnDot}`}
                    ></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-sm font-semibold text-[#7B2FF7] flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Horizontal scroll container with beautiful custom scrollbar */}
          <div className="flex gap-8 overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory">
            {[
              {
                title: "MedAssist Pharmacy Management",
                category: "Healthcare SaaS",
                desc: "Integrated pharmacy inventory control and smart billing engine used by medical franchises.",
                image: inventryImg,
                tags: ["React.js", "Node.js", "PostgreSQL", "WebSockets"],
              },
              {
                title: "ERP Management Platform",
                category: "Enterprise System",
                desc: "Comprehensive operations ecosystem supporting resource planning, scheduling, and custom reporting.",
                image: emsImg,
                tags: ["Next.js", "Python", "Django", "TailwindCSS"],
              },
              {
                title: "Billing Software",
                category: "Fintech",
                desc: "Sub-second ledger calculations, invoice generator pipelines, and automated multi-gate payment settlement.",
                image: inventryImg,
                tags: ["React.js", "Express", "MongoDB", "ChartJS"],
              },
              {
                title: "CRM Solution",
                category: "SaaS Dashboard",
                desc: "Complete client communication tracking, automated pipelines, and conversion visualizers.",
                image: emsImg,
                tags: ["TypeScript", "Next.js", "Firebase", "Framer Motion"],
              },
              {
                title: "Internship Management Portal",
                category: "Education Tech",
                desc: "Tracking metrics, automated certifications, and course delivery timelines for students.",
                image: emsImg,
                tags: ["React.js", "TailwindCSS", "Node.js", "MySQL"],
              },
              {
                title: "Custom Business Automation",
                category: "Business Intelligence",
                desc: "Scrape, structure, analyze, and automate manual administrative tasks into clean background cron pipelines.",
                image: inventryImg,
                tags: ["Python", "FastAPI", "Docker", "AWS Lambda"],
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-[320px] sm:w-[420px] shrink-0 snap-start bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-[0_10px_30px_rgba(123,47,247,0.02)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Zoom mockup container */}
                  <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-6 relative bg-purple-50">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#7B2FF7] border border-[#E9D5FF] shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#7B2FF7] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#E9D5FF]/30 text-[#7B2FF7] text-[11px] font-semibold font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/portfolio" className="w-full">
                  <button className="w-full py-3 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#7B2FF7] hover:bg-[#7B2FF7]/5 text-sm font-semibold text-[#0F172A] hover:text-[#7B2FF7] transition-all duration-300 flex items-center justify-center gap-2">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4: DEVELOPMENT PROCESS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              A structured lifecycle designed to transform vague requirements
              into scalable, robust digital platforms.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Timeline Path Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#E9D5FF] -translate-x-1/2 z-0"></div>

            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We map business goals, technical limits, and analyze your competitive space.",
                },
                {
                  step: "02",
                  title: "Planning",
                  desc: "Drafting user flows, system specifications, sprint milestones, and data structures.",
                },
                {
                  step: "03",
                  title: "UI/UX Design",
                  desc: "Constructing pixel-perfect interface wireframes, component styles, and functional prototypes.",
                },
                {
                  step: "04",
                  title: "Development",
                  desc: "Agile, code-reviewed engineering utilizing modern frontend libraries, safe REST APIs, and database migrations.",
                },
                {
                  step: "05",
                  title: "Testing",
                  desc: "Unit testing, manual QA pipelines, integration sanity audits, and cross-platform verification.",
                },
                {
                  step: "06",
                  title: "Deployment",
                  desc: "Production release setup on scalable cloud hosts with zero-downtime, continuous monitoring, and optimization.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row relative z-10 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Icon Indicator Circle */}
                  <div className="absolute left-8 lg:left-1/2 top-0 w-8 h-8 rounded-full bg-white border-4 border-[#7B2FF7] -translate-x-1/2 flex items-center justify-center shadow-md z-20"></div>

                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 text-left">
                    <div
                      className={`p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs hover:border-[#7B2FF7]/30 transition-colors duration-300 relative group`}
                    >
                      <span className="absolute top-4 right-6 text-4xl font-mono font-extrabold text-[#7B2FF7]/10 group-hover:text-[#7B2FF7]/20 transition-colors">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#475569] leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5: TECHNOLOGY STACK */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Tools
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              We leverage modern language frameworks and cloud standards to
              deploy resilient services.
            </p>
          </div>

          {/* Categorized Tech Badges */}
          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {[
              {
                category: "Frontend",
                items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
              },
              {
                category: "Backend Language",
                items: ["Java", "Python", "JavaScript", "Go"],
              },
              {
                category: "Framework",
                items: ["SpringBoot", "FastAPI", "NodeJS", "Fiber, Gin"],
              },
              {
                category: "Database",
                items: ["PostgreSQL", "MongoDB", "MySQL", "SpaceTime DB"],
              },
              {
                category: "Cloud",
                items: ["AWS", "Docker", "Firebase", "Vercel"],
              },
              {
                category: "AI & ML",
                items: [
                  "Fine Tuning`",
                  "LangChain",
                  "Vector DBs",
                  "LlamaIndex",
                ],
              },
            ].map((cat, idx) => {
              const techColors: Record<string, string> = {
                "react": "#61DAFB",
                "next.js": "#000000",
                "typescript": "#3178C6",
                "tailwindcss": "#06B6D4",
                "java": "#ED8B00",
                "python": "#3776AB",
                "javascript": "#F7DF1E",
                "go": "#00ADD8",
                "springboot": "#6DB33F",
                "fastapi": "#009688",
                "nodejs": "#339933",
                "node.js": "#339933",
                "fiber, gin": "#00ADD8",
                "postgresql": "#336791",
                "mongodb": "#47A248",
                "mysql": "#00758F",
                "spacetime db": "#7B2FF7",
                "aws": "#FF9900",
                "docker": "#2496ED",
                "firebase": "#FFCA28",
                "vercel": "#000000",
                "fine tuning`": "#A855F7",
                "langchain": "#00A389",
                "vector dbs": "#8B5CF6",
                "llamaindex": "#E24A8D",
                "django": "#092E20",
                "openai": "#10A37F"
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 text-left flex flex-col justify-between"
                >
                  <h3 className="font-display font-bold text-[#7B2FF7] text-sm uppercase tracking-wider border-b border-[#E9D5FF] pb-3 mb-4">
                    {cat.category}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {cat.items.map((item, iIdx) => {
                      const cleanKey = item.toLowerCase().trim();
                      const color = techColors[cleanKey] || "#7B2FF7";
                      return (
                        <div
                          key={iIdx}
                          className="flex items-center gap-2 text-sm text-[#0F172A] font-semibold"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          ></span>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div> */}

          {/* Marquee Row */}
          <div className="mt-16 relative w-full overflow-hidden py-4 border-y border-[#E9D5FF]/30">
            <div className="flex w-[200%] gap-12 animate-[ticker-left_30s_linear_infinite]">
              {Array(2)
                .fill([
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Django",
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "AWS",
                  "Docker",
                  "Firebase",
                  "TailwindCSS",
                  "TypeScript",
                  "OpenAI",
                ])
                .flat()
                .map((tech, idx) => {
                  const techColors: Record<string, string> = {
                    react: "#61DAFB",
                    "next.js": "#000000",
                    typescript: "#3178C6",
                    tailwindcss: "#06B6D4",
                    java: "#ED8B00",
                    python: "#3776AB",
                    javascript: "#F7DF1E",
                    go: "#00ADD8",
                    springboot: "#6DB33F",
                    fastapi: "#009688",
                    nodejs: "#339933",
                    "node.js": "#339933",
                    "fiber, gin": "#00ADD8",
                    postgresql: "#336791",
                    mongodb: "#47A248",
                    mysql: "#00758F",
                    "spacetime db": "#7B2FF7",
                    aws: "#FF9900",
                    docker: "#2496ED",
                    firebase: "#FFCA28",
                    vercel: "#000000",
                    "fine tuning`": "#A855F7",
                    langchain: "#00A389",
                    "vector dbs": "#8B5CF6",
                    llamaindex: "#E24A8D",
                    django: "#092E20",
                    openai: "#10A37F",
                  };
                  const cleanKey = tech.toLowerCase().trim();
                  const color = techColors[cleanKey] || "#7B2FF7";
                  return (
                    <div
                      key={idx}
                      className="px-6 py-2.5 rounded-xl bg-white/70 border border-white font-mono font-bold text-sm shadow-2xs shrink-0"
                      style={{ color: color }}
                    >
                      {tech}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 6: WHY CHOOSE VIYANINFO */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Value Proposition
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Why ViyanInfo
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              We stand apart through our commitment to pixel-perfect design,
              clean code architecture, and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Startup Friendly",
                desc: "Speed is our default. We help build MVP drafts and iteratively expand them as you validate coordinates.",
                icon: "🚀",
              },
              {
                title: "Enterprise Ready",
                desc: "We follow industry security practices, data encryption standards, and construct clean, modular systems.",
                icon: "🛡️",
              },
              {
                title: "Scalable Architecture",
                desc: "Modular designs and serverless setups built to handle traffic growth effortlessly.",
                icon: "🏗️",
              },
              {
                title: "Fast Delivery",
                desc: "Weekly reviews, continuous delivery pipelines, and optimized coordination to launch on time.",
                icon: "⚡",
              },
              {
                title: "Dedicated Support",
                desc: "Direct communication channels with the engineering team. Quick response times without red tape.",
                icon: "🤝",
              },
              {
                title: "Affordable Pricing",
                desc: "Highly optimized engineering overheads allow us to offer world-class developer talent at realistic costs.",
                icon: "💎",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 hover:border-[#7B2FF7]/20 shadow-xs hover:shadow-[0_15px_30px_rgba(123,47,247,0.04)] transition-all duration-300 flex items-start gap-5 text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E9D5FF]/30 border border-[#E9D5FF] flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 7: ABOUT VIYANINFO */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
                About ViyanInfo
              </h2>
              <p className="text-[#475569] leading-relaxed mb-8">
                At ViyanInfo, we build software products that help companies
                grow. We merge design aesthetics with clean engineering
                architectures to solve complex business problems.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Our Mission",
                    desc: "To engineer digital tools that simplify operations, increase efficiency, and scale seamlessly.",
                  },
                  {
                    title: "Our Vision",
                    desc: "To become a world-leading technology agency defined by quality, visual design precision, and speed.",
                  },
                  {
                    title: "Core Values",
                    desc: "Transparency, performance-first code, collaboration, and continuous iteration.",
                  },
                ].map((val, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#7B2FF7]/10 text-[#7B2FF7]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#0F172A] mb-1">
                        {val.title}
                      </h4>
                      <p className="text-sm text-[#475569]">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Illustrative Box */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-lg aspect-square rounded-3xl bg-gradient-to-br from-[#7B2FF7]/5 to-[#9333EA]/5 border border-purple-500/10 p-8 flex flex-col justify-between overflow-hidden group shadow-lg"
              >
                {/* Tech grid line graphics */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(123,47,247,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(123,47,247,0.03)_1px,transparent_1px)] bg-size:[30px_30px]"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E9D5FF] flex items-center justify-center text-xl">
                    🌟
                  </div>
                  <span className="font-mono text-xs text-[#7B2FF7] uppercase tracking-widest font-bold">
                    Viyan Efficacy
                  </span>
                </div>

                {/* Animated graphic mockup */}
                <div className="relative z-10 my-8 flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full border-4 border-dashed border-[#7B2FF7]/20 flex items-center justify-center animate-[spin-slow_40s_linear_infinite]">
                    <div className="w-28 h-28 rounded-full border-4 border-dotted border-[#9333EA]/30 flex items-center justify-center animate-[spin-counter-clockwise_25s_linear_infinite]">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#7B2FF7] to-[#9333EA] flex items-center justify-center text-white text-lg font-bold shadow-md">
                        V
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-center text-xs text-[#475569] font-mono">
                  <span>Growth Indicator: +240%</span>
                  <span>Timeline: 2026</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* SECTION 9: CLIENT TESTIMONIALS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Client Testimonials
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 10: FAQ */}
      {/* <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <SectionDivider /> */}

      {/* SECTION 11: FINAL CTA */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1000px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-3xl bg-gradient-to-tr from-[#7B2FF7] via-[#9333EA] to-[#5B21B6] text-center text-white relative overflow-hidden shadow-2xl"
          >
            {/* Glowing particle blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-3xl animate-[float-y_15s_ease-in-out_infinite] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/20 blur-3xl animate-[float-y_12s_ease-in-out_infinite] pointer-events-none"></div>

            {/* Floating CSS particles */}
            {Array.from({ length: 20 }).map((_, i) => {
              const rand1 = ((i * 13) % 100) / 100;
              const rand2 = ((i * 27) % 100) / 100;
              const rand3 = ((i * 31) % 100) / 100;
              const rand4 = ((i * 37) % 100) / 100;
              return (
                <div
                  key={i}
                  className={`absolute bg-white/30 rounded-full pointer-events-none animate-[float-y_${10 + (i % 5)}s_ease-in-out_infinite]`}
                  style={{
                    width: `${rand1 * 6 + 2}px`,
                    height: `${rand1 * 6 + 2}px`,
                    top: `${rand2 * 100}%`,
                    left: `${rand3 * 100}%`,
                    animationDelay: `${i * 0.7}s`,
                    opacity: rand4 * 0.5 + 0.1,
                  }}
                ></div>
              );
            })}

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(15,23,42,0.15)_100%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center justify-center">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                Let's Partner Up
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-purple-100 max-w-xl mx-auto mb-10 leading-relaxed">
                Transform your ideas into scalable digital products with our
                engineering and design teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#7B2FF7] font-bold text-sm rounded-xl shadow-lg hover:bg-purple-50 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer">
                    Start Your Project
                  </button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/20 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer">
                    Schedule Call
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// ============================================================================
// HELPER SUB-COMPONENTS
// ============================================================================

/**
 * Pure React CountUp animation component triggered by viewport intersection.
 */
function CountUp({ end, duration = 2.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}</span>;
}

/**
 * Client Testimonial Carousel component as an infinite marquee.
 */
function TestimonialCarousel() {
  const reviews = [
    {
      text: "ViyanInfo developed our ERP platform. The design is beautiful, and the API speeds are outstanding. They delivered a week ahead of schedule.",
      name: "Sarah Jenkins",
      role: "Operations Director, MedGroup",
      stars: 5,
    },
    {
      text: "The web application we built together has scaled to 10k daily users without issue. Excellent engineering work and reliable customer support.",
      name: "David K.",
      role: "Founder, LedgerTech",
      stars: 5,
    },
    {
      text: "Invaluable partners for custom backend tools. Their team writes clean code, sets up CI/CD pipelines, and keeps architecture extremely tidy.",
      name: "Michelle Ross",
      role: "CTO, FinFlow",
      stars: 5,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden flex pt-4 pb-8">
      {/* Left/Right Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAF7FF] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAF7FF] to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-6 w-max animate-[ticker-left_40s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedReviews.map((review, idx) => (
          <div
            key={idx}
            className="w-[350px] sm:w-[450px] p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(123,47,247,0.03)] flex flex-col justify-between shrink-0"
          >
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {Array(review.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <p className="text-lg text-[#0F172A] font-display leading-relaxed">
                "{review.text}"
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-[#0F172A] text-[15px]">
                {review.name}
              </h4>
              <span className="text-sm text-[#7B2FF7] font-medium">
                {review.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
