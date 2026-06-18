import { useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  Sparkles,
  ShieldAlert,
  Zap,
  Phone,
  Layers,
  Cpu,
  Database,
  ArrowRight,
} from "lucide-react";
import { TechBadge } from "../components/TechBadge";
import { CTABlock } from "../components/CTABlock";
import { SectionDivider } from "../components/SectionDivider";

// Premium Interactive Phone Mockup Illustration
const PhoneMockupIllustration = () => (
  <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto flex items-center justify-center select-none">
    {/* Floating background blur elements */}
    <div className="absolute w-72 h-72 bg-[#06B6D4]/10 rounded-full blur-3xl top-10 right-10"></div>
    <div className="absolute w-64 h-64 bg-[#7B2FF7]/5 rounded-full blur-3xl bottom-10 left-10"></div>

    {/* Phone Body Frame */}
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 w-[240px] h-[480px] rounded-[36px] border-[6px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden"
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-30" />

      {/* Screen App Mockup */}
      <div className="absolute inset-0 p-3 pt-8 flex flex-col gap-3.5 bg-slate-900">
        {/* App Header */}
        <div className="flex justify-between items-center px-1">
          <div className="flex flex-col">
            <span className="text-[7px] text-slate-500 uppercase tracking-widest font-mono">Patient App</span>
            <span className="text-[9px] font-bold text-white">ViyanHealth Sync</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-ping" />
        </div>

        {/* Live Card */}
        <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl p-3 flex flex-col gap-2 shadow-md">
          <div className="flex justify-between items-center">
            <span className="text-[8px] text-slate-400">Heart Rate</span>
            <span className="text-[6px] font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-1.5 py-0.5 rounded-full font-bold">Live</span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold font-display text-white">72</span>
            <span className="text-[8px] text-slate-500">BPM</span>
          </div>
          {/* Pulsing heart wave */}
          <div className="h-6 flex items-center justify-around gap-0.5 pt-1">
            {[4, 10, 18, 5, 22, 12, 6, 15, 8].map((h, idx) => (
              <motion.div
                key={idx}
                animate={{ height: ["20%", `${h * 4}%`, "20%"] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.1 }}
                className="w-1 bg-[#06B6D4] rounded-full"
                style={{ height: "30%" }}
              />
            ))}
          </div>
        </div>

        {/* Upcoming appointments */}
        <div className="flex-1 bg-slate-800/80 border border-slate-700/50 rounded-2xl p-3 flex flex-col gap-2.5">
          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Today's Schedule</span>
          
          {[
            { title: "Dr. Anita Rajan", time: "10:30 AM", status: "Confirmed" },
            { title: "Lab Diagnostics", time: "02:15 PM", status: "Pending" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center bg-slate-900/60 p-2 rounded-xl border border-slate-800">
              <div className="flex flex-col">
                <span className="text-[8px] font-bold text-white">{item.title}</span>
                <span className="text-[6px] text-slate-500">{item.time}</span>
              </div>
              <span className={`text-[6px] font-bold px-1.5 py-0.5 rounded-full ${idx === 0 ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Floating Screen 1 (Left overlay) */}
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[-20px] top-[25%] z-20 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-lg flex items-center gap-3 w-40"
    >
      <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
        <Sparkles size={16} />
      </div>
      <div className="text-left">
        <span className="block text-[10px] font-bold text-slate-900 leading-tight">Fast Sync</span>
        <span className="text-[8px] text-slate-400">Offline-First Engine</span>
      </div>
    </motion.div>

    {/* Floating Screen 2 (Right overlay) */}
    <motion.div
      animate={{ y: [8, -8, 8] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute right-[-20px] bottom-[25%] z-20 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-lg flex items-center gap-3 w-40"
    >
      <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
        <Phone size={16} />
      </div>
      <div className="text-left">
        <span className="block text-[10px] font-bold text-slate-900 leading-tight">Cross-Platform</span>
        <span className="text-[8px] text-slate-400">Single Codebase</span>
      </div>
    </motion.div>
  </div>
);

// =====================================================
// Feature Data
// =====================================================
const featureCards = [
  {
    title: "Fast Performance",
    desc: "High frame-rate render loops, hardware accelerations, and optimized caching engines that keep your app running at 60fps.",
    accentColor: "#06B6D4",
    gradientFrom: "#06B6D4",
    gradientTo: "#3B82F6",
    tag: "SPEED",
    icon: Zap,
    phoneBg: "from-cyan-900 to-slate-900",
    phoneApp: "Performance Monitor",
    phoneMetric: "60",
    phoneUnit: "FPS",
    phoneStatus: "Stable",
  },
  {
    title: "Secure Architecture",
    desc: "Native biometric locks (FaceID/TouchID), encrypted local keychains, and secure SSL API hooks for enterprise-grade protection.",
    accentColor: "#7B2FF7",
    gradientFrom: "#7B2FF7",
    gradientTo: "#EC4899",
    tag: "SECURITY",
    icon: ShieldAlert,
    phoneBg: "from-purple-900 to-slate-900",
    phoneApp: "Security Shield",
    phoneMetric: "256",
    phoneUnit: "BIT",
    phoneStatus: "Encrypted",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Offline-first databases (SQLite), automatic sync queues, and seamless scaling integrations that grow with your user base.",
    accentColor: "#EC4899",
    gradientFrom: "#EC4899",
    gradientTo: "#F59E0B",
    tag: "SCALE",
    icon: Database,
    phoneBg: "from-pink-900 to-slate-900",
    phoneApp: "Data Sync Engine",
    phoneMetric: "99.9",
    phoneUnit: "%",
    phoneStatus: "Synced",
  },
];

// =====================================================
// Floating geometric background symbols
// =====================================================
const geoSymbols = [
  { char: "✦", x: "8%", y: "15%", size: 20, delay: 0, color: "rgba(123,47,247,0.12)" },
  { char: "○", x: "85%", y: "20%", size: 28, delay: 1.2, color: "rgba(6,182,212,0.10)" },
  { char: "◇", x: "12%", y: "75%", size: 22, delay: 0.6, color: "rgba(236,72,153,0.10)" },
  { char: "△", x: "90%", y: "70%", size: 18, delay: 1.8, color: "rgba(6,182,212,0.08)" },
  { char: "✦", x: "50%", y: "10%", size: 14, delay: 0.3, color: "rgba(123,47,247,0.08)" },
  { char: "○", x: "75%", y: "85%", size: 16, delay: 2.2, color: "rgba(236,72,153,0.07)" },
  { char: "◇", x: "25%", y: "90%", size: 24, delay: 1.5, color: "rgba(123,47,247,0.09)" },
  { char: "△", x: "60%", y: "5%", size: 20, delay: 0.9, color: "rgba(6,182,212,0.06)" },
];

// =====================================================
// Mini phone mockup for each card
// =====================================================
function FeaturePhoneMockup({ card }: { card: typeof featureCards[0] }) {
  return (
    <div className="relative w-[180px] h-[360px] mx-auto shrink-0 select-none">
      {/* Phone body */}
      <div className={`absolute inset-0 rounded-[32px] border-[5px] border-slate-800 bg-gradient-to-b ${card.phoneBg} shadow-2xl overflow-hidden`}>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-b-lg z-10" />

        {/* Screen content */}
        <div className="absolute inset-0 p-3 pt-7 flex flex-col gap-3">
          {/* App header */}
          <div className="flex justify-between items-center px-1">
            <div className="flex flex-col">
              <span className="text-[6px] text-slate-500 uppercase tracking-widest font-mono">{card.tag}</span>
              <span className="text-[8px] font-bold text-white">{card.phoneApp}</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: card.accentColor }} />
          </div>

          {/* Metric card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-1.5">
            <span className="text-[7px] text-slate-400">Primary Metric</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-display text-white">{card.phoneMetric}</span>
              <span className="text-[8px] text-slate-500">{card.phoneUnit}</span>
            </div>
            <div className="h-5 flex items-end justify-around gap-0.5 pt-1">
              {[4, 8, 14, 6, 18, 10, 5, 12, 7].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", `${h * 4}%`, "20%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
                  className="w-0.5 rounded-full"
                  style={{ backgroundColor: card.accentColor, height: "30%" }}
                />
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-between">
            <span className="text-[7px] text-slate-400">Status</span>
            <span
              className="text-[6px] font-bold px-2 py-0.5 rounded-full"
              style={{ backgroundColor: `${card.accentColor}15`, color: card.accentColor }}
            >
              {card.phoneStatus}
            </span>
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex justify-around items-center pt-2 border-t border-white/5">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? "bg-white/40" : "bg-white/10"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating glow */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-[40px] blur-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${card.accentColor}20, transparent 70%)` }}
      />
    </div>
  );
}

// =====================================================
// FeatureCardStack Component — Scroll-Pinned 3D Card Stack
// =====================================================
function FeatureCardStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeTiltRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt handler for the active card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = activeTiltRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    gsap.to(card, {
      rotateY: xPct * 5,
      rotateX: -yPct * 5,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });

    // Dynamic shadow
    const shadowX = -xPct * 15;
    const shadowY = yPct * 15;
    gsap.to(card, {
      boxShadow: `${shadowX}px ${shadowY}px 40px rgba(123,47,247,0.15), 0 0 60px rgba(6,182,212,0.08)`,
      duration: 0.3,
      overwrite: "auto",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = activeTiltRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || cards.length === 0) return;

    const numCards = cards.length;

    const ctx = gsap.context(() => {
      // Set initial states: only first card visible, rest hidden behind
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          rotateY: i === 0 ? 0 : 15,
          rotateX: 0,
          scale: i === 0 ? 1 : 0.85,
          autoAlpha: i === 0 ? 1 : 0,
          zIndex: numCards - i,
          x: i === 0 ? 0 : 200,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        });
      });

      // Track active card for tilt
      activeTiltRef.current = cards[0];

      // Create the scroll-driven timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${numCards * 150}vh`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Add initial pause so Card 1 is fully visible before scrolling away
      tl.to({}, { duration: 0.8 });

      // Transition between cards
      for (let i = 0; i < numCards - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];

        // Move current card to the left/back
        tl.to(current, {
          rotateY: -15,
          x: -200,
          scale: 0.85,
          autoAlpha: 0,
          zIndex: 1,
          duration: 1.5,
          ease: "power2.inOut",
        }, `card${i}`);

        // Bring next card to center/active
        tl.to(next, {
          rotateY: 0,
          x: 0,
          scale: 1,
          autoAlpha: 1,
          zIndex: numCards,
          duration: 1.5,
          ease: "power2.inOut",
          onStart: () => { activeTiltRef.current = next; },
          onReverseComplete: () => { activeTiltRef.current = current; },
        }, `card${i}`);

        // Add a breathing pause between card transitions
        tl.to({}, { duration: 0.8 });
      }

      // Add final pause so the last card stays visible for a moment before unpinning
      tl.to({}, { duration: 0.8 });

      // Float the geometric symbols
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.utils.toArray<HTMLElement>(".geo-symbol").forEach((el) => {
          gsap.to(el, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-15, 15)",
            duration: "random(4, 7)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: parseFloat(el.dataset.delay || "0"),
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Floating Geometric Symbols */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {geoSymbols.map((sym, i) => (
          <div
            key={i}
            className="geo-symbol absolute font-display select-none"
            data-delay={sym.delay}
            style={{
              left: sym.x,
              top: sym.y,
              fontSize: `${sym.size}px`,
              color: sym.color,
              willChange: "transform",
            }}
          >
            {sym.char}
          </div>
        ))}
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(123,47,247,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Section Header — Positioned in flow, not absolute */}
      <div className="relative z-20 text-center px-6 pt-16 pb-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
          Core Pillars
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-3">
          Mobile Core Capabilities
        </h2>
        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
          Our applications are engineered to meet strict enterprise performance requirements.
        </p>
      </div>

      {/* Card Stack Container — fills remaining viewport height below header */}
      <div
        ref={cardsContainerRef}
        className="relative w-full flex items-center justify-center"
        style={{ perspective: "1200px", transformStyle: "preserve-3d", height: "calc(100vh - 200px)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {featureCards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div
              key={idx}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="w-[90vw] max-w-[820px] rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden will-change-transform cursor-default"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Content */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${card.accentColor}12` }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: card.accentColor }} />
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest"
                      style={{ color: card.accentColor }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-500 mb-8 max-w-md">
                    {card.desc}
                  </p>

                  {/* Card progress indicator */}
                  <div className="flex items-center gap-3 mt-auto">
                    {featureCards.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className="h-1 rounded-full transition-all duration-500"
                        style={{
                          width: dotIdx === idx ? "32px" : "8px",
                          backgroundColor: dotIdx === idx ? card.accentColor : "#e2e8f0",
                        }}
                      />
                    ))}
                    <span className="text-xs text-slate-400 font-mono ml-auto">
                      {String(idx + 1).padStart(2, "0")} / {String(featureCards.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Right: Phone Mockup */}
                <div
                  className="relative flex items-center justify-center p-8 lg:p-12 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradientFrom}08, ${card.gradientTo}04)`,
                  }}
                >
                  {/* Soft background glow behind phone */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-3xl pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${card.accentColor}15, transparent 70%)` }}
                  />
                  <FeaturePhoneMockup card={card} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function MobileApp() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Box: Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Mobile Development Services</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Build Mobile Apps <br />
                <span className="bg-gradient-to-r from-[#06B6D4] via-cyan-600 to-indigo-600 bg-clip-text text-transparent">That Users Love</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
                Cross-platform and native applications delivering seamless user experiences. We create fast, secure, and offline-first mobile products.
              </p>
              <div className="flex gap-4">
                <a href="#contactform">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
              </div>
            </motion.div>
            
            {/* Right Box: Phone Mockups */}
            <div className="lg:col-span-6">
              <PhoneMockupIllustration />
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PLATFORMS SECTION (iOS, Android, Cross-Platform) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Native & Cross-Platform Development
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              We compile reliable mobile stacks targeted for native execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* iOS Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-6 border border-cyan-100">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">iOS Development</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Highly secure Apple iOS applications built using Swift and following strict Apple HIG guidelines for smooth store approvals.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Swift • Apple App Store • Cocoa Touch
              </div>
            </motion.div>

            {/* Android Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-6 border border-cyan-100">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Android Development</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Performant Android apps built using Kotlin, integrating hardware integrations and Material Design metrics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Kotlin • Google Play Store • Gradle
              </div>
            </motion.div>

            {/* Cross Platform Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-6 border border-cyan-100">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Cross-Platform</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Single codebase systems built with Flutter or React Native, delivering 95% native performance across iOS and Android.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Flutter • React Native • Single codebase
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION — Lusion-Style Scroll Storytelling Card Stack */}
      <FeatureCardStack />

      {/* APP SHOWCASE */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Mobile App Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Explore custom mobile products built and deployed by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Healthcare Apps",
                desc: "Telehealth portals, patient trackers, and prescription management tools with biometric locks.",
                tag: "ViyanHealth Sync",
                glowColor: "rgba(6, 182, 212, 0.08)"
              },
              {
                title: "Business Apps",
                desc: "ERP companion applications, secure reporting panels, and visual field-data trackers.",
                tag: "Enterprise Portal",
                glowColor: "rgba(123, 47, 247, 0.08)"
              },
              {
                title: "Customer Apps",
                desc: "Client-facing portals, subscription platforms, and automated chat messaging clients.",
                tag: "SaaS Mobile Hub",
                glowColor: "rgba(236, 72, 153, 0.08)"
              }
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${app.glowColor}` }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 relative group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    {app.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#06B6D4] transition-colors duration-200">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                    {app.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="py-24 bg-[#FAF7FF]">
        <div className="container max-w-[1000px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Modern Mobile Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-12">
            We employ modern cross-platform languages and reliable cloud backends.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Flutter", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "React Native", glow: "rgba(59, 130, 246, 0.15)" },
              { name: "Firebase", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "SQLite", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "Swift", glow: "rgba(239, 68, 68, 0.15)" },
              { name: "Kotlin", glow: "rgba(124, 58, 237, 0.15)" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2, boxShadow: `0 10px 25px ${tech.glow}` }}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-4 cursor-default shadow-xs transition-all duration-300"
              >
                <TechBadge name={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABlock
        title="Ready to build your mobile application?"
        subtitle="Let's transform your ideas into an intuitive, high-performance app that users will love."
      />
    </div>
  );
}
