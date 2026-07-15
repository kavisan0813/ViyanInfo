import { useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import {
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  CheckCircle,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import flowerImg from "../assets/sakura.webp";
import dashboardImg from "../assets/Strategy.webp";
import { motion } from "framer-motion";
import { burst } from "../utils/particleBurst";
import visionImg from "../assets/Vision.png";
import { HorizontalTiltCard } from "../components/HorizontalTiltCard";
import {
  Homecontent1,
  Homecontent2,
  Homecontent3,
  Homecontent4,
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

function BackgroundEffects() {
  return (
    <div className="bg-effects-wrapper" aria-hidden="true">
      {/* Soft animated grid */}
      <div className="bg-effects-grid"></div>
    </div>
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
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F8F5FF]"
      >
        {/* Content */}
        <div ref={heroContentRef} className="container-fluid relative z-10">
          <div className="flex justify-between items-center p-15">
            {/* Left Box: Typographic Content (5/12 equivalent) */}
            <div className="lg:col-span-5 text-left flex flex-col items-start">
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

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/portfolio" className="hero-cta">
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
            <div className="lg:col-span-7 w-full flex justify-end relative select-none mt-16 lg:mt-0">
              {/* Main Dashboard Wrapper */}
              <div className="relative w-full lg:translate-x-[40px]">
                {/* Layer 2: Premium 3D Translucent Flower Backdrop Image */}
                <img
                  ref={flowerRef}
                  src={flowerImg}
                  alt="Translucent Flower Decor"
                  style={{ bottom: "10px", left: "-50px", width: "500px" }}
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
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
              A Simple Process.
              <br />
              Built for Successful Products.
            </h2>
            <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
              Every successful digital product follows a clear path. Our
              engineering process keeps projects transparent, efficient, and
              focused on delivering measurable value.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative max-w-6xl mx-auto px-4">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute left-12 right-12 top-[44px] h-[3px] bg-gradient-to-r from-blue-300 via-purple-300 to-amber-300 z-0 rounded-full"></div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
              {Homecontent4.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="relative flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Circle Node on Desktop Line / Icon Container */}
                    <div
                      className={`relative w-20 h-20 rounded-2xl bg-white border-2 border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-6 z-10 group-hover:border-purple-300 group-hover:shadow-[0_15px_35px_rgba(124,58,237,0.1)] transition-all duration-300`}
                    >
                      {/* Step Number Badge */}
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#9D5CFF] text-[10px] font-mono font-bold text-white flex items-center justify-center shadow-md">
                        {step.step}
                      </span>

                      {/* Icon */}
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent size={22} className={step.iconColor} />
                      </div>
                    </div>

                    {/* Step Card */}
                    <div className="w-full flex-1">
                      <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-purple-600 transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-[13px] text-[#475569] leading-relaxed max-w-[200px] mx-auto">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="mt-24 max-w-2xl mx-auto text-center border-t border-[#E9D5FF] pt-16 relative z-10">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0F172A] mb-3">
              Want to See How We Build Software?
            </h3>
            <p className="text-base text-[#475569] mb-10 max-w-lg mx-auto leading-relaxed">
              Explore our complete engineering methodology, delivery framework,
              quality standards, and collaboration process.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/process"
                className="bg-[#6D28D9] text-white font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 w-full sm:w-auto"
              >
                How We Work
              </Link>
              <Link
                to="/services"
                className="bg-white/80 border border-[#E9D5FF] text-[#1F1430] font-semibold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
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
              Building Long-Term Partnerships.
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              ViyanInfo combines product thinking, modern engineering, and
              long-term technical partnership to help businesses build software
              that grows with them.
            </p>
          </div>

          {/* Hero Statement Block */}
          <div className="max-w-4xl mx-auto mb-16 p-8 sm:p-10 rounded-3xl bg-white border border-[#E9D5FF]/50 shadow-[0_10px_30px_rgba(123,47,247,0.03)] text-left relative overflow-hidden">
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
          </div>

          {/* Microcopy Quote */}
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-slate-400 italic text-sm sm:text-base font-medium">
              "Every software company can build features. Great technology
              partners build products that continue creating value long after
              launch."
            </p>
          </div>

          {/* 6 Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {Homecontent6.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group relative p-8 rounded-3xl bg-white border border-[#E9D5FF]/40 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)] transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Icon with float animation */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7FF] border border-[#E9D5FF] flex items-center justify-center text-[#7B2FF7] mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComp
                        size={22}
                        className="group-hover:rotate-6 transition-transform"
                      />
                    </div>

                    <h4 className="text-xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#7B2FF7] transition-colors">
                      {card.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                      {card.desc}
                    </p>

                    {/* Divider */}
                    <div className="w-full h-px bg-slate-100 mb-5" />

                    {/* Key Benefits */}
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                        What This Means
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {card.benefits.map((benefit, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center gap-1.5 text-xs text-slate-600 font-medium"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Gradient Glow */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 border border-[#7B2FF7]/20 pointer-events-none transition-opacity duration-300" />
                </motion.div>
              );
            })}
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
