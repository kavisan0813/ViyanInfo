import { useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  Sparkles,
  ShieldAlert,
  Zap,
  Layers,
  Cpu,
  Database,
  ArrowRight,
  Briefcase,
  Users,
  Trophy,
  Award,
  Rocket,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from "lucide-react";
import { TechBadge } from "../components/TechBadge";
import { SectionDivider } from "../components/SectionDivider";
import { Link } from "react-router-dom";
import logo1 from "../assets/Logo image 1.svg";
import mobileappImg from "../assets/mobileapp_img.webp";
import {
  MobileAppHeroCluster,
  AppStoreBadges,
} from "../components/MobileAppHeroCluster";

// Phone illustration replaced by MobileAppHeroCluster

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
  {
    char: "✦",
    x: "8%",
    y: "15%",
    size: 20,
    delay: 0,
    color: "rgba(123,47,247,0.12)",
  },
  {
    char: "○",
    x: "85%",
    y: "20%",
    size: 28,
    delay: 1.2,
    color: "rgba(6,182,212,0.10)",
  },
  {
    char: "◇",
    x: "12%",
    y: "75%",
    size: 22,
    delay: 0.6,
    color: "rgba(236,72,153,0.10)",
  },
  {
    char: "△",
    x: "90%",
    y: "70%",
    size: 18,
    delay: 1.8,
    color: "rgba(6,182,212,0.08)",
  },
  {
    char: "✦",
    x: "50%",
    y: "10%",
    size: 14,
    delay: 0.3,
    color: "rgba(123,47,247,0.08)",
  },
  {
    char: "○",
    x: "75%",
    y: "85%",
    size: 16,
    delay: 2.2,
    color: "rgba(236,72,153,0.07)",
  },
  {
    char: "◇",
    x: "25%",
    y: "90%",
    size: 24,
    delay: 1.5,
    color: "rgba(123,47,247,0.09)",
  },
  {
    char: "△",
    x: "60%",
    y: "5%",
    size: 20,
    delay: 0.9,
    color: "rgba(6,182,212,0.06)",
  },
];

// =====================================================
// Mini phone mockup for each card
// =====================================================
function FeaturePhoneMockup({ card }: { card: (typeof featureCards)[0] }) {
  return (
    <div className="relative w-[180px] h-[360px] mx-auto shrink-0 select-none">
      {/* Phone body */}
      <div
        className={`absolute inset-0 rounded-[32px] border-[5px] border-slate-800 bg-gradient-to-b ${card.phoneBg} shadow-2xl overflow-hidden`}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-b-lg z-10" />

        {/* Screen content */}
        <div className="absolute inset-0 p-3 pt-7 flex flex-col gap-3">
          {/* App header */}
          <div className="flex justify-between items-center px-1">
            <div className="flex flex-col">
              <span className="text-[6px] text-slate-500 uppercase tracking-widest font-mono">
                {card.tag}
              </span>
              <span className="text-[8px] font-bold text-white">
                {card.phoneApp}
              </span>
            </div>
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: card.accentColor }}
            />
          </div>

          {/* Metric card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-1.5">
            <span className="text-[7px] text-slate-400">Primary Metric</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-display text-white">
                {card.phoneMetric}
              </span>
              <span className="text-[8px] text-slate-500">
                {card.phoneUnit}
              </span>
            </div>
            <div className="h-5 flex items-end justify-around gap-0.5 pt-1">
              {[4, 8, 14, 6, 18, 10, 5, 12, 7].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", `${h * 4}%`, "20%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.12,
                  }}
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
              style={{
                backgroundColor: `${card.accentColor}15`,
                color: card.accentColor,
              }}
            >
              {card.phoneStatus}
            </span>
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex justify-around items-center pt-2 border-t border-white/5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 1 ? "bg-white/40" : "bg-white/10"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating glow */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-[40px] blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${card.accentColor}20, transparent 70%)`,
        }}
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
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

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
        tl.to(
          current,
          {
            rotateY: -15,
            x: -200,
            scale: 0.85,
            autoAlpha: 0,
            zIndex: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          `card${i}`,
        );

        // Bring next card to center/active
        tl.to(
          next,
          {
            rotateY: 0,
            x: 0,
            scale: 1,
            autoAlpha: 1,
            zIndex: numCards,
            duration: 1.5,
            ease: "power2.inOut",
            onStart: () => {
              activeTiltRef.current = next;
            },
            onReverseComplete: () => {
              activeTiltRef.current = current;
            },
          },
          `card${i}`,
        );

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
          Our applications are engineered to meet strict enterprise performance
          requirements.
        </p>
      </div>

      {/* Card Stack Container — fills remaining viewport height below header */}
      <div
        ref={cardsContainerRef}
        className="relative w-full flex items-center justify-center"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          height: "calc(100vh - 200px)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {featureCards.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
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
                      <IconComp
                        className="w-5 h-5"
                        style={{ color: card.accentColor }}
                      />
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
                          backgroundColor:
                            dotIdx === idx ? card.accentColor : "#e2e8f0",
                        }}
                      />
                    ))}
                    <span className="text-xs text-slate-400 font-mono ml-auto">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(featureCards.length).padStart(2, "0")}
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
                    style={{
                      background: `radial-gradient(circle, ${card.accentColor}15, transparent 70%)`,
                    }}
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
                <span className="bg-gradient-to-r from-[#06B6D4] via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                  That Users Love
                </span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
                Cross-platform and native applications delivering seamless user
                experiences. We create fast, secure, and offline-first mobile
                products.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <a href="#contactform" className="shrink-0">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
                <AppStoreBadges />
              </div>
            </motion.div>

            {/* Right Box: Phone Mockup Cluster */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <MobileAppHeroCluster />
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
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                  iOS Development
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Highly secure Apple iOS applications built using Swift and
                  following strict Apple HIG guidelines for smooth store
                  approvals.
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
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                  Android Development
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Performant Android apps built using Kotlin, integrating
                  hardware integrations and Material Design metrics.
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
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                  Cross-Platform
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Single codebase systems built with Flutter or React Native,
                  delivering 95% native performance across iOS and Android.
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
                glowColor: "rgba(6, 182, 212, 0.08)",
              },
              {
                title: "Business Apps",
                desc: "ERP companion applications, secure reporting panels, and visual field-data trackers.",
                tag: "Enterprise Portal",
                glowColor: "rgba(123, 47, 247, 0.08)",
              },
              {
                title: "Customer Apps",
                desc: "Client-facing portals, subscription platforms, and automated chat messaging clients.",
                tag: "SaaS Mobile Hub",
                glowColor: "rgba(236, 72, 153, 0.08)",
              },
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 40px ${app.glowColor}`,
                }}
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
            We employ modern cross-platform languages and reliable cloud
            backends.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Flutter", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "React Native", glow: "rgba(59, 130, 246, 0.15)" },
              { name: "Firebase", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "SQLite", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "Swift", glow: "rgba(239, 68, 68, 0.15)" },
              { name: "Kotlin", glow: "rgba(124, 58, 237, 0.15)" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: `0 10px 25px ${tech.glow}`,
                }}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-4 cursor-default shadow-xs transition-all duration-300"
              >
                <TechBadge name={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-30 bg-slate-50">
        <SectionDivider />
      </div>

      {/* COMBINED CTA + FOOTER SECTION */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "30px",
          marginTop: "100px",
          backgroundImage: `url(${mobileappImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "40px",
        }}
      >
        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8, 10, 30, 0.25), rgba(5, 8, 25, 0.75))",
          }}
        />

        {/* TOP RIGHT & BOTTOM LEFT NEON GLOWS */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#6366f1]/10 blur-[120px] pointer-events-none z-0" />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-[100px] pb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto flex flex-col items-center w-full"
          >
            <h2
              className="text-[28px] sm:text-[36px] md:text-[44px] font-bold tracking-[-0.5px] text-center mb-6 leading-tight drop-shadow-xl"
              style={{ color: "#ffffff" }}
            >
              Ready to build your mobile application?
            </h2>
            <p
              className="text-lg md:text-xl text-center mb-10 max-w-2xl mx-auto drop-shadow-md"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Let's transform your ideas into an intuitive, high-performance app
              that users will love.
            </p>
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ duration: 0.35 }}
              className="mb-12 w-full flex justify-center"
            >
              <Link
                to="/contact"
                className="w-full max-w-[320px] sm:w-auto block"
              >
                <button
                  className="w-full sm:w-auto px-[54px] py-[18px] text-white font-semibold text-[20px] rounded-full border-none transition-all duration-350 cursor-pointer shadow-[0_0_25px_rgba(139,92,246,0.6),_0_0_60px_rgba(99,102,241,0.4)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #8b5cf6, #6366f1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(139, 92, 246, 0.8), 0 0 80px rgba(99, 102, 241, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(139, 92, 246, 0.6), 0 0 60px rgba(99, 102, 241, 0.4)";
                  }}
                >
                  Start Project
                </button>
              </Link>
            </motion.div>

            {/* 5 FEATURE CARDS ROW */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-[22px] max-w-5xl mx-auto px-4 w-full">
              {[
                {
                  title: "Real Projects",
                  icon: <Briefcase className="w-6 h-6 text-white" />,
                },
                {
                  title: "Expert Mentors",
                  icon: <Users className="w-6 h-6 text-white" />,
                },
                {
                  title: "Career Growth",
                  icon: <Trophy className="w-6 h-6 text-white" />,
                },
                {
                  title: "Certification",
                  icon: <Award className="w-6 h-6 text-white" />,
                },
                {
                  title: "Placements",
                  icon: <Rocket className="w-6 h-6 text-white" />,
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="w-[145px] h-[115px] mx-auto md:mx-0 flex flex-col items-center justify-center gap-2.5 rounded-[18px] transition-all duration-300 select-none col-span-1 last:col-span-2 last:justify-self-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    boxShadow: "0 0 18px rgba(124, 58, 237, 0.18)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(139, 92, 246, 0.4)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(124, 58, 237, 0.18)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.18)";
                  }}
                >
                  <div className="flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-white text-[15px] font-medium text-center">
                    {card.title}
                  </span>
                </motion.div>
              ))}
            </div>
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
            boxShadow:
              "0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(255, 255, 255, 0.05)",
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
                  {
                    icon: <Linkedin size={18} />,
                    href: "https://linkedin.com",
                    name: "linkedin",
                  },
                  {
                    icon: <Github size={18} />,
                    href: "https://github.com",
                    name: "github",
                  },
                  {
                    icon: <Instagram size={18} />,
                    href: "https://instagram.com",
                    name: "instagram",
                  },
                  {
                    icon: <Facebook size={18} />,
                    href: "https://facebook.com",
                    name: "facebook",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                    onMouseEnter={(e) => {
                      if (social.name === "instagram") {
                        e.currentTarget.style.background =
                          "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)";
                        e.currentTarget.style.borderColor = "transparent";
                      } else {
                        e.currentTarget.style.background =
                          "rgba(168, 85, 247, 0.4)";
                        e.currentTarget.style.borderColor =
                          "rgba(168, 85, 247, 0.4)";
                      }
                      e.currentTarget.style.boxShadow =
                        "0 0 22px rgba(168,85,247,0.45)";
                      e.currentTarget.style.transform =
                        "scale(1.08) translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform =
                        "scale(1) translateY(0)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.borderColor =
                        "rgba(255, 255, 255, 0.08)";
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
                  { name: "UI/UX Design", path: "/services/uiux" },
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
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
