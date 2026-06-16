import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  <div className="phone-illustration-container relative w-full aspect-[4/3] max-w-[500px] mx-auto flex items-center justify-center select-none">
    {/* Floating background blur elements */}
    <div className="absolute w-72 h-72 bg-[#06B6D4]/10 rounded-full blur-3xl top-10 right-10"></div>
    <div className="absolute w-64 h-64 bg-[#7B2FF7]/5 rounded-full blur-3xl bottom-10 left-10"></div>

    {/* Phone Body Frame */}
    <div className="phone-mockup-frame relative z-10 w-[240px] h-[480px] rounded-[36px] border-[6px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden opacity-0">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-slate-900 rounded-b-xl z-30" />

      {/* Screen App Mockup */}
      <div className="absolute inset-0 p-3 pt-8 flex flex-col gap-3.5 bg-slate-900 overflow-hidden">
        {/* App Header */}
        <div className="phone-header flex justify-between items-center px-1 opacity-0">
          <div className="flex flex-col">
            <span className="text-[7px] text-slate-500 uppercase tracking-widest font-mono">Patient App</span>
            <span className="text-[9px] font-bold text-white">ViyanHealth Sync</span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-ping" />
        </div>

        {/* Live Card */}
        <div className="phone-card bg-slate-800/80 border border-slate-700/50 rounded-2xl p-3 flex flex-col gap-2 shadow-md opacity-0 translate-y-8">
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
              <div
                key={idx}
                className="w-1 bg-[#06B6D4] rounded-full heart-wave-bar"
                style={{ height: `${h * 4}%` }}
              />
            ))}
          </div>
        </div>

        {/* Upcoming appointments */}
        <div className="phone-card flex-1 bg-slate-800/80 border border-slate-700/50 rounded-2xl p-3 flex flex-col gap-2.5 opacity-0 translate-y-8">
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
    </div>

    {/* Floating Screen 1 (Left overlay) */}
    <div className="floating-badge badge-left absolute left-[-20px] top-[25%] z-20 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-lg flex items-center gap-3 w-40 opacity-0">
      <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
        <Sparkles size={16} />
      </div>
      <div className="text-left">
        <span className="block text-[10px] font-bold text-slate-900 leading-tight">Fast Sync</span>
        <span className="text-[8px] text-slate-400">Offline-First Engine</span>
      </div>
    </div>

    {/* Floating Screen 2 (Right overlay) */}
    <div className="floating-badge badge-right absolute right-[-20px] bottom-[25%] z-20 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-lg flex items-center gap-3 w-40 opacity-0">
      <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 text-[#06B6D4] flex items-center justify-center shrink-0">
        <Phone size={16} />
      </div>
      <div className="text-left">
        <span className="block text-[10px] font-bold text-slate-900 leading-tight">Cross-Platform</span>
        <span className="text-[8px] text-slate-400">Single Codebase</span>
      </div>
    </div>
  </div>
);

export default function MobileApp() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Wait for a tick to let layout settle
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // 1. Hero Reveal Timeline
      const tl = gsap.timeline();
      tl.from(".hero-content > *", { 
        y: 30, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" 
      })
      .to(".phone-mockup-frame", { 
        y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" 
      }, "-=0.6")
      .to(".phone-header", {
        opacity: 1, duration: 0.4
      }, "-=0.2")
      .to(".phone-card", {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out"
      }, "-=0.2")
      .to(".floating-badge", { 
        y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(1.5)" 
      }, "-=0.4");

      // 2. Floating Animations for phone and badges (Continuous)
      gsap.to(".phone-mockup-frame", {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
      gsap.to(".badge-left", {
        y: -12,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".badge-right", {
        y: 12,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });

      // 3. Heart wave animation
      gsap.to(".heart-wave-bar", {
        scaleY: 0.3,
        duration: 0.8,
        stagger: {
          each: 0.1,
          repeat: -1,
          yoyo: true
        },
        ease: "power1.inOut"
      });

      // 4. Scroll-based parallax for the entire phone illustration container
      gsap.to(".phone-illustration-container", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // 5. Capabilities & Features Scroll Reveal
      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: ".capabilities-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });

      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });

      // 6. Portfolio Showcase Reveal
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out"
      });

      // 7. Tech Stack Sequential Reveal
      gsap.from(".tech-icon", {
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 85%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.5)"
      });

    }, containerRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="hero-section relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Box: Headline */}
            <div className="hero-content lg:col-span-6 text-left">
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
                <a href="/contact">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
              </div>
            </div>
            
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

          <div className="capabilities-grid grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {/* iOS Development */}
            <div className="capability-card group p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl hover:bg-white hover:border-[#06B6D4]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-6 border border-cyan-100 transition-all duration-300 group-hover:bg-[#06B6D4] group-hover:text-white group-hover:scale-110">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#06B6D4] transition-colors duration-300">iOS Development</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Highly secure Apple iOS applications built using Swift and following strict Apple HIG guidelines for smooth store approvals.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600 transition-colors duration-300">
                Swift • Apple App Store • Cocoa Touch
              </div>
            </div>

            {/* Android Development */}
            <div className="capability-card group p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl hover:bg-white hover:border-[#7B2FF7]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7B2FF7] flex items-center justify-center mb-6 border border-purple-100 transition-all duration-300 group-hover:bg-[#7B2FF7] group-hover:text-white group-hover:scale-110">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#7B2FF7] transition-colors duration-300">Android Development</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Performant Android apps built using Kotlin, integrating hardware integrations and Material Design metrics.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600 transition-colors duration-300">
                Kotlin • Google Play Store • Gradle
              </div>
            </div>

            {/* Cross Platform Development */}
            <div className="capability-card group p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-500 flex flex-col justify-between hover:scale-[1.02] hover:shadow-xl hover:bg-white hover:border-[#06B6D4]/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center mb-6 border border-cyan-100 transition-all duration-300 group-hover:bg-[#06B6D4] group-hover:text-white group-hover:scale-110">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#06B6D4] transition-colors duration-300">Cross-Platform</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-6">
                  Single codebase systems built with Flutter or React Native, delivering 95% native performance across iOS and Android.
                </p>
              </div>
              <div className="relative z-10 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:border-slate-300 group-hover:text-slate-600 transition-colors duration-300">
                Flutter • React Native • Single codebase
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION (3-column) */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Mobile Core Capabilities
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Our applications are engineered to meet strict enterprise performance requirements.
            </p>
          </div>

          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Fast Performance",
                desc: "High frame-rate render loops, hardware accelerations, and optimized caching engines.",
                icon: <Zap className="w-6 h-6 text-[#06B6D4] transition-colors duration-300 group-hover:text-white" />,
                bg: "bg-cyan-50 border-cyan-100",
                accent: "rgba(6, 182, 212, 0.6)"
              },
              {
                title: "Secure Architecture",
                desc: "Native biometric locks (FaceID/TouchID), encrypted local keychains, and secure SSL API hooks.",
                icon: <ShieldAlert className="w-6 h-6 text-[#7B2FF7] transition-colors duration-300 group-hover:text-white" />,
                bg: "bg-purple-50 border-purple-100",
                accent: "rgba(123, 47, 247, 0.6)",
                hoverBg: "group-hover:bg-[#7B2FF7]",
                hoverBorder: "group-hover:border-[#7B2FF7]",
                hoverText: "group-hover:text-[#7B2FF7]"
              },
              {
                title: "Scalable Infrastructure",
                desc: "Offline-first databases (SQLite), automatic sync queues, and seamless scaling integrations.",
                icon: <Database className="w-6 h-6 text-[#06B6D4] transition-colors duration-300 group-hover:text-white" />,
                bg: "bg-cyan-50 border-cyan-100",
                accent: "rgba(6, 182, 212, 0.6)"
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="feature-card group relative p-8 rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:scale-[1.03] overflow-hidden"
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundImage: `radial-gradient(circle at top left, ${feature.accent}, transparent 70%)` }}
                />

                {/* Gradient border effect using pseudo inset */}
                <div 
                  className="absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0"
                  style={{ borderColor: feature.accent }}
                />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110 ${feature.hoverBg || 'group-hover:bg-[#06B6D4]'} ${feature.hoverBorder || 'group-hover:border-[#06B6D4]'}`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-base sm:text-lg font-display font-bold text-slate-900 mb-3 transition-colors duration-300 ${feature.hoverText || 'group-hover:text-[#06B6D4]'}`}>{feature.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="projects-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Healthcare Apps",
                desc: "Telehealth portals, patient trackers, and prescription management tools with biometric locks.",
                tag: "ViyanHealth Sync",
                accentColor: "#06B6D4",
                glowColor: "rgba(6, 182, 212, 0.08)",
                hoverText: "group-hover:text-[#06B6D4]"
              },
              {
                title: "Business Apps",
                desc: "ERP companion applications, secure reporting panels, and visual field-data trackers.",
                tag: "Enterprise Portal",
                accentColor: "#7B2FF7",
                glowColor: "rgba(123, 47, 247, 0.08)",
                hoverText: "group-hover:text-[#7B2FF7]"
              },
              {
                title: "Customer Apps",
                desc: "Client-facing portals, subscription platforms, and automated chat messaging clients.",
                tag: "SaaS Mobile Hub",
                accentColor: "#06B6D4",
                glowColor: "rgba(6, 182, 212, 0.08)",
                hoverText: "group-hover:text-[#06B6D4]"
              }
            ].map((app, idx) => (
              <div
                key={idx}
                className="project-card group relative p-8 rounded-3xl bg-slate-50 border border-slate-200 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden hover:bg-white hover:-translate-y-2 hover:scale-[1.02]"
                style={{ boxShadow: `0 4px 10px rgba(0,0,0,0.02)` }}
              >
                {/* Hover Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" 
                  style={{ boxShadow: `0 20px 40px ${app.glowColor}` }} 
                />

                <div className="relative z-10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    {app.tag}
                  </span>
                  <h3 className={`text-xl font-display font-bold text-slate-900 mb-3 transition-colors duration-300 ${app.hoverText}`}>
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                    {app.desc}
                  </p>
                </div>
                
                <div className="relative z-10 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <span className={`text-xs font-bold flex items-center gap-1 group-hover:gap-1.5 transition-all ${app.hoverText}`}>
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
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

          <div className="tech-grid flex flex-wrap justify-center gap-4">
            {[
              { name: "Flutter", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "React Native", glow: "rgba(59, 130, 246, 0.15)" },
              { name: "Firebase", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "SQLite", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "Swift", glow: "rgba(239, 68, 68, 0.15)" },
              { name: "Kotlin", glow: "rgba(124, 58, 237, 0.15)" }
            ].map((tech, i) => (
              <div
                key={i}
                className="tech-icon group bg-white border border-slate-200 rounded-2xl px-6 py-4 cursor-default shadow-xs transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{ boxShadow: `0 4px 6px rgba(0,0,0,0.02)` }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 10px 25px ${tech.glow}`; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = `0 4px 6px rgba(0,0,0,0.02)`; }}
              >
                <TechBadge name={tech.name} />
              </div>
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
