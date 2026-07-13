import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CTABlock } from "../components/CTABlock";
import { SectionDivider } from "../components/SectionDivider";
import { LiquidFooter } from "../components/LiquidFooter";
import { Database, ShieldCheck, CreditCard, Activity, Cpu } from "lucide-react";
import saasHero from "../assets/saas_hero_server.webp";
import saasDashboard from "../assets/saas_dashboard_ui.webp";

gsap.registerPlugin(ScrollTrigger);

export default function SaasDev() {
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animation
      const badge = heroContentRef.current?.querySelector(".hero-badge");
      const h1Lines = gsap.utils.toArray<HTMLElement>(
        ".line-inner",
        heroContentRef.current,
      );
      const subtitle = heroContentRef.current?.querySelector(".hero-subtitle");

      if (badge && subtitle) {
        const tl = gsap.timeline();
        tl.from(badge, { y: 30, scale: 0.9, duration: 1, delay: 0.2 })
          .from(
            h1Lines,
            { y: "110%", duration: 1.3, stagger: 0.1, ease: "expo.out" },
            "-=0.7",
          )
          .from(subtitle, { y: 30, duration: 0.9 }, "-=0.7")
          .from(
            ".hero-image",
            { x: 50, duration: 1.2, ease: "power3.out" },
            "-=1",
          );
      }

      // 2. Features Section Animation via Timeline
      const featuresTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
      });
      featuresTl.from(".feature-anim", {
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // 3. Architecture Diagram Animation via Timeline
      const archTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".arch-diagram",
          start: "top 80%",
        },
      });
      archTl
        .from(".arch-node", {
          y: 30,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        })
        .from(
          ".arch-line",
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4",
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-abyss selection:bg-(--color-rose)/30">
      {/* 1. NEW HERO SECTION */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-20 overflow-hidden min-h-[85vh] flex items-center"
      >
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-void z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-rose-bright)_0%,transparent_50%)] opacity-10 mix-blend-screen pointer-events-none z-0 blur-[60px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container relative z-10" ref={heroContentRef}>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left Box: Typography */}
            <div className="flex-1 text-left">
              <div className="hero-badge inline-block glass-card px-5 py-2.5 rounded-full mb-8 border border-border-2 shadow-[0_4px_32px_rgba(224,195,252,0.15)]">
                <span className="text-sm font-mono font-semibold text-text-accent tracking-widest uppercase">
                  Enterprise Grade
                </span>
              </div>
              <h1 className="text-[clamp(44px,6vw,84px)] font-display font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-white/70 leading-[1.05] tracking-tight mb-8">
                <div className="overflow-hidden pb-2 -mb-2">
                  <div className="line-inner">Scalable SaaS</div>
                </div>
                <div className="overflow-hidden pb-2 -mb-2">
                  <div className="line-inner">Architectures</div>
                </div>
                <div className="overflow-hidden pb-2 -mb-2">
                  <div className="line-inner">
                    That{" "}
                    <span className="text-shimmer italic font-serif">
                      Endure
                    </span>
                  </div>
                </div>
              </h1>
              <p className="hero-subtitle body-copy text-text-secondary max-w-readable font-light">
                We build robust, multi-tenant platforms designed to handle
                millions of requests while maintaining sub-second response
                times.
              </p>
            </div>

            {/* Right Box: Photorealistic Image */}
            <div className="hero-image flex-1 w-full max-w-2xl relative">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden glass-card border border-border-2 shadow-[0_20px_80px_rgba(0,0,0,0.8)] group">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-linear-to-tr from-(--color-rose)/30 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                <img
                  src={saasHero}
                  alt="Futuristic Server Room"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-2 ring-inset ring-white/20 rounded-3xl z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 2. DUAL LAYOUT: IMAGE ON LEFT, FEATURES ON RIGHT */}
      <section className="features-section bg-deep py-32 relative overflow-hidden border-t border-border-1">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,237,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,237,233,0.03)_1px,transparent_1px)] bg-size:[40px_40px] z-0 pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left Box: Dashboard Image */}
            <div className="feature-anim flex-1 w-full order-2 lg:order-1 relative">
              <div className="relative aspect-square md:aspect-4/3 lg:aspect-square rounded-3xl overflow-hidden glass-card border border-border-2 shadow-[0_20px_80px_rgba(0,0,0,0.8)] group">
                <img
                  src={saasDashboard}
                  alt="SaaS Analytics Dashboard"
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-bl from-transparent via-deep/40 to-deep/90 z-10 pointer-events-none"></div>
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="glass-card-elevated p-6 backdrop-blur-2xl border-border-2 shadow-xl">
                    <p className="text-white font-display font-medium text-lg">
                      Real-Time Telemetry
                    </p>
                    <p className="text-text-muted text-sm mt-1">
                      Live updates with sub-millisecond latency.
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 ring-2 ring-inset ring-white/20 rounded-3xl z-30 pointer-events-none"></div>
              </div>
            </div>

            {/* Right Box: Feature List */}
            <div className="flex-1 order-1 lg:order-2">
              <h2 className="feature-anim text-[clamp(32px,4vw,52px)] font-display font-semibold text-text-primary leading-[1.1] tracking-tight mb-12">
                Uncompromising <br />
                <span className="text-text-accent">Performance</span>
              </h2>

              <div className="space-y-10">
                {/* Feature 1 */}
                <div className="feature-anim flex gap-6 group">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-glass-2 flex items-center justify-center text-text-accent border border-border-2 group-hover:bg-(--color-text-accent)/20 transition-colors duration-300 shadow-lg">
                    <Database size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                      Multi-Tenant Databases
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Postgres with robust row-level security, strict tenant
                      isolation, and intelligent connection pooling.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="feature-anim flex gap-6 group">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-glass-2 flex items-center justify-center text-text-accent border border-border-2 group-hover:bg-(--color-text-accent)/20 transition-colors duration-300 shadow-lg">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                      Enterprise Auth & RBAC
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Enterprise SSO, biometric MFA, and granular role-based
                      access control out of the box.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="feature-anim flex gap-6 group">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-glass-2 flex items-center justify-center text-text-accent border border-border-2 group-hover:bg-(--color-text-accent)/20 transition-colors duration-300 shadow-lg">
                    <CreditCard size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                      Billing & Monetization
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      Complex Stripe subscriptions, automated metered usage, and
                      seamless webhook reconciliation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 3. CLOUD ARCHITECTURE DIAGRAM */}
      <section className="arch-diagram bg-abyss py-32 border-y border-border-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-surface)_0%,transparent_70%)] opacity-50 blur-[100px] pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-[clamp(36px,4vw,56px)] font-display font-semibold text-text-primary leading-[1.1] tracking-tight">
              Microservices Architecture
            </h2>
            <p className="text-text-secondary mt-4 max-w-2xl mx-auto text-lg">
              Decoupled, independently scalable nodes connected via high-speed
              asynchronous event buses.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative flex flex-col items-center">
            {/* Top Node */}
            <div className="arch-node glass-card-elevated p-8 min-w-[320px] text-center relative z-20 border-2 border-border-3 shadow-[0_10px_50px_rgba(0,0,0,0.8)] bg-surface">
              <h4 className="font-mono text-text-accent mb-2 text-sm tracking-widest uppercase font-bold">
                Client Layer
              </h4>
              <p className="text-text-primary font-bold text-xl">
                React / Next.js SPA
              </p>
            </div>

            <div className="arch-line w-1 h-16 bg-border-3 relative z-10"></div>

            {/* Gateway */}
            <div className="arch-node glass-card-elevated p-8 min-w-[380px] text-center relative z-20 border-2 border-(--color-text-accent) shadow-[0_0_40px_rgba(232,180,208,0.2)] bg-surface">
              <h4 className="font-mono text-text-accent mb-2 text-sm tracking-widest uppercase font-bold">
                Edge Network
              </h4>
              <p className="text-text-primary font-bold text-xl">
                GraphQL API Gateway
              </p>
            </div>

            <div className="arch-line w-1 h-16 bg-border-3 relative z-10"></div>

            {/* Horizontal Bus */}
            <div className="arch-line w-[85%] md:w-[70%] h-1 bg-border-3 relative z-10">
              <div className="absolute left-0 top-0 w-1 h-16 bg-border-3"></div>
              <div className="absolute right-0 top-0 w-1 h-16 bg-border-3"></div>
            </div>
            <div className="arch-line w-1 h-16 bg-border-3 relative z-10 -mt-1"></div>

            {/* Microservices */}
            <div className="flex w-full md:w-[85%] justify-between flex-col md:flex-row gap-6 md:gap-10 relative z-20">
              <div className="arch-node glass-card p-8 text-center border-2 border-border-3 bg-deep shadow-2xl flex-1">
                <ShieldCheck
                  size={32}
                  className="mx-auto text-text-accent mb-4"
                />
                <h4 className="font-mono text-text-muted mb-2 text-xs tracking-widest uppercase font-bold">
                  Service
                </h4>
                <p className="text-lg font-bold text-text-primary mt-1">
                  IAM & Auth
                </p>
              </div>
              <div className="arch-node glass-card-elevated p-8 text-center border-2 border-border-bright bg-surface shadow-[0_0_50px_rgba(237,237,233,0.1)] flex-1">
                <Cpu size={32} className="mx-auto text-white mb-4" />
                <h4 className="font-mono text-text-muted mb-2 text-xs tracking-widest uppercase font-bold">
                  Service
                </h4>
                <p className="text-lg font-bold text-text-primary mt-1">
                  Core Logic Engine
                </p>
              </div>
              <div className="arch-node glass-card p-8 text-center border-2 border-border-3 bg-deep shadow-2xl flex-1">
                <Activity size={32} className="mx-auto text-text-accent mb-4" />
                <h4 className="font-mono text-text-muted mb-2 text-xs tracking-widest uppercase font-bold">
                  Worker
                </h4>
                <p className="text-lg font-bold text-text-primary mt-1">
                  Stripe Billing
                </p>
              </div>
            </div>

            {/* Down to DB */}
            <div className="hidden md:flex w-[85%] justify-between relative z-10 h-20">
              <div className="arch-line w-1 h-20 bg-border-3 ml-[10%]"></div>
              <div className="arch-line w-1 h-28 bg-border-3"></div>
              <div className="arch-line w-1 h-20 bg-border-3 mr-[10%]"></div>
            </div>
            <div className="md:hidden h-16 w-1 bg-border-3"></div>

            {/* DB Layer */}
            <div className="arch-node glass-card p-8 min-w-[360px] text-center relative z-20 border-2 border-border-3 bg-void shadow-2xl md:-mt-8">
              <Database size={28} className="mx-auto text-text-muted mb-4" />
              <div className="flex items-center justify-center gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
                  <span className="text-text-primary font-bold text-lg">
                    Postgres
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></span>
                  <span className="text-text-primary font-bold text-lg">
                    Redis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* 4. Impact / Scale Section */}
      <section className="bg-deep py-32 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(237,237,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(237,237,233,0.02)_1px,transparent_1px)] bg-size:[30px_30px] z-0"></div>
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[radial-gradient(circle,var(--color-rose)_0%,transparent_60%)] opacity-20 blur-[60px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[radial-gradient(circle,var(--color-text-accent)_0%,transparent_60%)] opacity-20 blur-[80px] pointer-events-none mix-blend-screen"></div>

        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* The main card */}
            <div className="glass-card-elevated border border-border-bright rounded-[40px] p-10 md:p-16 lg:p-20 relative overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent z-0 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-glass-2 border border-border-2 mb-8 shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                    <span className="text-sm font-mono text-text-primary uppercase tracking-widest font-semibold">
                      Proven Scale
                    </span>
                  </div>
                  <h2 className="text-[clamp(28px,4vw,42px)] font-display font-semibold text-text-primary leading-[1.3] mb-6">
                    We've rebuilt systems crashing at{" "}
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-(--color-rose) to-white/70">
                      5K MAU
                    </span>
                  </h2>
                  <p className="text-xl text-text-secondary leading-relaxed max-w-lg mx-auto lg:mx-0">
                    into concurrent microservices effortlessly handling
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <div className="text-[clamp(56px,8vw,100px)] font-display font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-(--color-text-accent) leading-none tracking-tight drop-shadow-sm">
                      2M+
                    </div>
                    <div className="text-text-muted font-medium text-2xl uppercase tracking-widest text-left leading-tight">
                      Daily <br /> Requests
                    </div>
                  </div>
                </div>

                {/* Stats grid on right */}
                <div className="w-full lg:w-[420px] shrink-0 grid grid-cols-2 gap-5 z-20">
                  <div className="glass-card p-6 md:p-8 rounded-3xl border border-border-2 bg-void/50 text-center shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      99.99<span className="text-xl text-text-accent">%</span>
                    </div>
                    <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest">
                      Uptime SLA
                    </div>
                  </div>
                  <div className="glass-card p-6 md:p-8 rounded-3xl border border-border-2 bg-surface/50 text-center shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-display font-bold text-text-accent mb-2">
                      &lt;50<span className="text-xl text-white">ms</span>
                    </div>
                    <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest">
                      Latency
                    </div>
                  </div>
                  <div className="glass-card p-6 md:p-8 rounded-3xl border border-border-2 bg-surface/50 text-center shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-display font-bold text-(--color-rose) mb-2">
                      Zero
                    </div>
                    <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest">
                      Downtime
                    </div>
                  </div>
                  <div className="glass-card p-6 md:p-8 rounded-3xl border border-border-2 bg-void/50 text-center shadow-lg transform transition-transform hover:-translate-y-1">
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      Auto
                    </div>
                    <div className="text-xs md:text-sm text-text-secondary font-mono uppercase tracking-widest">
                      Scaling
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      <CTABlock
        title="Building the next big SaaS?"
        subtitle="Let's architect a platform that scales with your ambition."
      />
      <LiquidFooter />
    </div>
  );
}
