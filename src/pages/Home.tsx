import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ChevronRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import flowerImg from "../assets/sakura.webp";
import dashboardImg from "../assets/Strategy.webp";
import { motion } from "framer-motion";
import { burst } from "../utils/particleBurst";
import visionImg from "../assets/Vision.png";
import { HorizontalTiltCard } from "../components/HorizontalTiltCard";
import { HomeProcess } from "../components/HomeProcess";
import {
  Homecontent1,
  Homecontent2,
  Homecontent3,
  Homecontent5,
  Homecontent6,
  Homecontent7,
  TestimonialCarousel,
  CountUp,
  Ourtools,
  HomecontentProducts,
} from "../components/ArrayContent";
import { HomeVisuals } from "../components/HomeVisuals";
import "../styles/BackgroundEffects.css";
import "../styles/HomeHero.css";

function BackgroundEffects() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes shimmer {
          100% { transform: translateX(300%); }
        }
      `}</style>
      <div className="bg-effects-wrapper" aria-hidden="true">
        {/* Soft animated grid */}
        <div className="bg-effects-grid"></div>
      </div>
    </>
  );
}

export default function Home() {
  const onHoverBurst = (e: React.MouseEvent<HTMLElement>) => {
    burst(e.currentTarget);
  };
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLImageElement>(null);
  const flowerRef = useRef<HTMLImageElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const servicesBlob1Ref = useRef<HTMLDivElement>(null);
  const servicesBlob2Ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="bg-abyss relative">
      <BackgroundEffects />
      {/* SECTION 1 - HERO (UNTOUCHED) */}
      <section
        ref={heroRef}
        className="home-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F8F5FF]"
      >
        {/* Content */}
        <div ref={heroContentRef} className="container-fluid relative z-10">
          <div className="home-hero-inner flex justify-between items-center p-15">
            {/* Left Box: Typographic Content (5/12 equivalent) */}
            <div className="home-hero-content lg:col-span-5 text-left flex flex-col items-start">
              <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-[#E9D5FF] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                <span className="text-[12px] font-body font-semibold text-[#7C3AED]">
                  We Build Digital Excellence
                </span>
              </div>

              <h1 className="text-[clamp(34px,4.5vw,56px)] font-display font-bold text-[#1F1430] leading-[1.1] tracking-tight mb-6">
                <div
                  className="flex gap-[0.3em] flex-wrap"
                  style={{ perspective: "1000px" }}
                >
                  {Homecontent7.map((wordObj, i) => (
                    <span
                      key={i}
                      className={`inline-block overflow-hidden pb-2`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span
                        className={`word-inner inline-block ${wordObj.color} ${i === 1 || i === 2 ? "playfairDisplay" : ""}`}
                        style={{ transformOrigin: "bottom center" }}
                      >
                        {wordObj.text}
                      </span>
                    </span>
                  ))}
                </div>
              </h1>

              <p className="hero-subtitle body-copy text-[#6B7280] max-w-readable mb-10 text-[15px] leading-relaxed">
                ViyanInfo is a technology company building scalable software
                products and delivering custom web, mobile, cloud, AI, and
                enterprise solutions for businesses.
              </p>

              <div className="home-hero-actions flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/products" className="hero-cta">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-4 rounded-2xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                  >
                    Explore Our Products{" "}
                    <span className="text-lg leading-none font-normal">→</span>
                  </button>
                </Link>
                <Link to="/contact" className="hero-cta">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-4 rounded-2xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer"
                  >
                    Start a Project
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Box: Coded Premium Glass Dashboard */}
            <div className="home-hero-visual lg:col-span-7 w-full flex justify-end relative select-none mt-16 lg:mt-0">
              {/* Main Dashboard Wrapper */}
              <div className="relative w-full lg:translate-x-[40px]">
                {/* Layer 2: Premium 3D Translucent Flower Backdrop Image */}
                <img
                  ref={flowerRef}
                  src={flowerImg}
                  alt="Translucent Flower Decor"
                  style={{ bottom: "8px", left: "-60px", width: "500px" }}
                  className=" absolute  h-auto pointer-events-none z-10 opacity-90 object-contain"
                />

                {/* Layer 3: Dashboard Image (Foreground) */}
                <img
                  ref={dashRef}
                  src={dashboardImg}
                  alt="Dashboard Showcase"
                  style={{ width: "1000px" }}
                  className="object-contain z-20 relative rounded-2xl img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 1: TRUST & ACHIEVEMENTS */}
      <section className="relative py-28 overflow-hidden bg-[#FAF7FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,47,247,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-x-10 lg:gap-y-8">
            {Homecontent2.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={(e) => {
                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                  )
                    return;
                  const currentCard = e.currentTarget;
                  const allCards =
                    gsap.utils.toArray<HTMLElement>(".stat-card");
                  const siblings = allCards.filter(
                    (card) => card !== currentCard,
                  );

                  gsap.to(siblings, { y: -6, scale: 0.97, duration: 0.3 });
                  gsap.to(currentCard, {
                    filter: "brightness(1.15)",
                    y: -8,
                    scale: 1.02,
                    duration: 0.2,
                  });
                }}
                onMouseLeave={() => {
                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                  )
                    return;
                  const allCards =
                    gsap.utils.toArray<HTMLElement>(".stat-card");

                  gsap.to(allCards, {
                    y: 0,
                    scale: 1,
                    filter: "brightness(1)",
                    duration: 0.3,
                  });
                }}
                className="stat-card relative group p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(123,47,247,0.03)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.08)]"
              >
                {/* Persistent Subtle Pulse Glow */}
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${stat.borderGlow} opacity-[0.05] blur-md animate-pulse pointer-events-none z-0`}
                ></div>

                {/* Hover Glow background effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
                ></div>
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${stat.borderGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xs z-0`}
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

      {/* SECTION 1.5: OUR PRODUCTS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Products Built by ViyanInfo
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              We design, engineer, and deploy proprietary software products to
              solve operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {HomecontentProducts.map((product, idx) => {
              const IconComponent = product.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative overflow-hidden p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(123,47,247,0.08)] hover:border-[#7B2FF7]/20 transition-all duration-300 group flex flex-col justify-between h-full text-left"
                >
                  <div>
                    {/* Top Header & Status */}
                    <div className="flex justify-between items-center mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white"
                        style={{
                          background: `linear-gradient(135deg, ${product.color}, ${product.color}aa)`,
                          boxShadow: `0 8px 20px ${product.color}25`,
                        }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span
                        className={`text-[10px] font-semibold font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${product.statusColor}`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Product Metadata */}
                    <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#7B2FF7] mb-4">
                      {product.tagline}
                    </p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                          The Problem It Solves
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {product.problem}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                          Who It Is For
                        </span>
                        <p className="text-xs text-slate-600 font-semibold">
                          {product.who}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Action button */}
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <Link to={product.path} className="inline-block w-full">
                      <button
                        onMouseEnter={onHoverBurst}
                        className="w-full py-3 bg-[#FAF7FF] text-[#7B2FF7] hover:bg-[#7B2FF7] hover:text-white border border-[#E9D5FF] hover:border-transparent font-bold text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Explore Product <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 2: OUR SERVICES */}
      <section
        ref={servicesSectionRef}
        className="relative py-24 lg:py-0 lg:h-screen lg:flex lg:items-center bg-[#FAF7FF] overflow-hidden"
      >
        {/* Parallax Blobs */}
        <div
          ref={servicesBlob1Ref}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px] pointer-events-none"
        ></div>
        <div
          ref={servicesBlob2Ref}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none"
        ></div>

        <div className="w-full relative z-10">
          <div className="container lg:pl-[5%] xl:pl-[10%] lg:pr-12 text-center lg:text-left mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
              Our Services
            </h2>
            <p className="text-lg text-[#475569] max-w-xl mx-auto lg:mx-0">
              We construct high-performing digital solutions using modern
              engineering workflows and state-of-the-art architectures.
            </p>
          </div>

          <div className="w-full overflow-hidden pb-12 pt-4">
            <div
              ref={servicesTrackRef}
              className="flex flex-col lg:flex-row flex-nowrap gap-8 px-6 lg:px-[5%] xl:px-[10%] lg:w-max"
            >
              {Homecontent1.map((service, idx) => (
                <HorizontalTiltCard key={idx} service={service} idx={idx} />
              ))}
            </div>
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
            {Homecontent3.map((project, idx) => (
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
      <HomeProcess />

      <section className="relative pb-24 bg-[#FAF7FF]">
        <div className="container relative z-10">{/* Bottom CTA Block */}</div>
      </section>

      <SectionDivider />

      {/* SECTION 5: TECHNOLOGY STACK */}
      <Ourtools />

      <SectionDivider />

      {/* SECTION 6: WHY CHOOSE VIYANINFO */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        {/* Background blobs for premium glassmorphism */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-purple-200/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
          {/* Badge & Headers */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
              Why Choose ViyanInfo
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight mb-4">
              Engineering Products.
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #9D5CFF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Building Long-Term Partnerships.
              </span>
            </h2>
          </div>

          {/* Hero Statement Block */}
          {/* <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-white border border-[#E9D5FF]/50 shadow-[0_10px_30px_rgba(123,47,247,0.03)] text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B2FF7]/5 rounded-bl-full pointer-events-none" />
            <h3 className="text-2xl font-display font-extrabold text-[#0F172A] mb-4 flex items-center gap-2">
              <span className="w-2.5 h-6 bg-[#7B2FF7] rounded-full inline-block" />
              We Build Products. Not Just Projects.
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              Unlike traditional software agencies, ViyanInfo doesn't only
              develop software for clients. We build, operate, maintain, and
              continuously improve our own software products. That experience
              gives us a deeper understanding of product architecture,
              scalability, security, user adoption, and long-term software
              evolution.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When we build for our clients, we apply the same engineering
              standards we use for our own platforms.
            </p>
          </div> */}

          {/* Microcopy Quote */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-slate-400 italic text-sm sm:text-base font-medium">
              "ViyanInfo combines product thinking, modern engineering, and
              long-term technical partnership to help businesses build software
              that grows with them."
            </p>
          </div>

          {/* 6 Value Cards Grid */}
          <div className="relative max-w-[1400px] mx-auto mb-20">
            {/* Background Effects Behind Cards */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden rounded-[40px] z-0">
              <div className="absolute w-[80%] h-[80%] bg-[#7B2FF7] opacity-[0.03] blur-[180px] rounded-full"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#EDE9FE_1px,transparent_1px),linear-gradient(to_bottom,#EDE9FE_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-[#7B2FF7]/5 to-[#9333EA]/5"></div>
              {/* Particles simulation with a few fixed faint dots */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#7B2FF7]/20 rounded-full blur-[1px]"></div>
              <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-[#9333EA]/20 rounded-full blur-[1px]"></div>
              <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#7B2FF7]/20 rounded-full blur-[1px]"></div>
              <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#9333EA]/20 rounded-full blur-[2px]"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
              {Homecontent6.map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.12 }}
                    className="w-full mx-auto flex justify-center h-full"
                  >
                    {/* Floating wrapper */}
                    <div
                      className="group relative w-full max-w-[380px] h-full min-h-[340px] flex flex-col justify-between bg-[rgba(255,255,255,0.72)] backdrop-blur-[18px] rounded-2xl p-8 transition-all duration-500 hover:-translate-y-[12px] hover:scale-[1.02] hover:shadow-[0_30px_80px_rgba(123,47,247,0.18)]"
                      style={{
                        border: "1px solid rgba(123,47,247,0.18)",
                        boxShadow:
                          "inset 0 0 0 1px rgba(255,255,255,0.4), 0 4px 20px rgba(0,0,0,0.02)",
                        animation: `float 6s ease-in-out infinite ${idx * 0.5}s`,
                      }}
                    >
                      {/* Hover Animated Border Glow */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#7B2FF7]/0 via-[#7B2FF7]/10 to-[#9333EA]/20 pointer-events-none transition-opacity duration-500" />

                      {/* Engineering Details */}
                      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#7B2FF7]/30 rounded-tl-sm -translate-x-[1px] -translate-y-[1px]"></div>
                      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#7B2FF7]/30 rounded-tr-sm translate-x-[1px] -translate-y-[1px]"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#7B2FF7]/30 rounded-bl-sm -translate-x-[1px] translate-y-[1px]"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#7B2FF7]/30 rounded-br-sm translate-x-[1px] translate-y-[1px]"></div>

                      {/* Measurement Dots */}
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex gap-[3px] opacity-30 pointer-events-none">
                        <div className="w-[1.5px] h-[1.5px] rounded-full bg-[#7B2FF7]"></div>
                        <div className="w-[1.5px] h-[1.5px] rounded-full bg-[#7B2FF7]"></div>
                        <div className="w-[1.5px] h-[1.5px] rounded-full bg-[#7B2FF7]"></div>
                      </div>

                      {/* Top Row: Module Label & Badge */}
                      <div className="flex justify-between items-center z-10 relative mb-4">
                        <span className="text-[10px] font-mono font-bold text-slate-500 tracking-[0.15em]">
                          MODULE 0{idx + 1}
                        </span>
                        <div className="px-2.5 py-1 rounded-full bg-white/60 backdrop-blur-md border border-[#E9D5FF] flex items-center gap-1.5 shadow-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7] opacity-80"></div>
                          <span className="text-[9px] font-bold text-[#7B2FF7] tracking-widest">
                            VERIFIED
                          </span>
                        </div>
                      </div>

                      {/* Center Icon */}
                      <div className="relative w-[72px] h-[72px] mx-auto mb-4 z-10 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.5)] backdrop-blur-md border border-[#E9D5FF] shadow-[0_8px_32px_rgba(123,47,247,0.08)] group-hover:scale-[1.08] transition-transform duration-500">
                        {/* Icon Background Glow */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B2FF7]/15 to-[#9333EA]/15 blur-md opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-125"></div>
                        <IconComp
                          size={28}
                          strokeWidth={1.5}
                          className="text-[#7B2FF7] group-hover:rotate-[8deg] transition-transform duration-500 relative z-10"
                        />
                        {/* Pulse animation ring */}
                        <div className="absolute inset-0 rounded-full border border-[#7B2FF7]/30 opacity-0 animate-[ping_6s_ease-in-out_infinite]"></div>
                      </div>

                      {/* Title & Description */}
                      <div className="text-center z-10 relative flex-1 flex flex-col justify-center">
                        <h4 className="text-[17px] font-display font-bold text-[#0F172A] uppercase tracking-wide mb-2 group-hover:text-[#7B2FF7] transition-colors duration-300">
                          {card.title}
                        </h4>
                        <p className="text-[13px] font-body font-normal text-slate-600 leading-[1.8] line-clamp-3">
                          {card.desc}
                        </p>
                      </div>

                      {/* Bottom Section */}
                      <div className="mt-auto pt-4 z-10 relative">
                        {/* Animated Gradient Divider */}
                        <div className="w-full h-[1px] bg-slate-100 mb-4 overflow-hidden relative">
                          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#7B2FF7]/60 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite_linear]"></div>
                        </div>

                        {/* Tags */}
                        <div className="flex justify-center gap-2 mb-3">
                          {card.benefits.slice(0, 3).map((benefit, bIdx) => {
                            const word = benefit
                              .split(" ")[0]
                              .replace(/[^a-zA-Z]/g, "");
                            return (
                              <span
                                key={bIdx}
                                className="px-2.5 py-1 rounded-md bg-[#FAF7FF] border border-[#E9D5FF] text-[9.5px] font-mono font-semibold text-slate-500 tracking-wider hover:bg-white transition-colors cursor-default"
                              >
                                {word}
                              </span>
                            );
                          })}
                        </div>

                        {/* Footer: Date & Status Dot */}
                        <div className="flex justify-between items-center px-1">
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                            UPDATED: TODAY
                          </span>
                          <div className="relative flex items-center justify-center w-1.5 h-1.5">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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
                {Homecontent5.map((val, idx) => (
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
              <motion.img
                src={visionImg}
                alt="ViyanInfo Vision"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-lg rounded-3xl shadow-lg object-cover"
              />
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
      <HomeVisuals
        heroRef={heroRef}
        heroContentRef={heroContentRef}
        containerRef={containerRef}
        dashRef={dashRef}
        flowerRef={flowerRef}
        servicesSectionRef={servicesSectionRef}
        servicesTrackRef={servicesTrackRef}
        servicesBlob1Ref={servicesBlob1Ref}
        servicesBlob2Ref={servicesBlob2Ref}
      />
    </div>
  );
}
