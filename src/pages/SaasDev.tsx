import { useLayoutEffect, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { CTABlock } from "../components/CTABlock";
import { SectionDivider } from "../components/SectionDivider";
import { Database, ShieldCheck, CreditCard, Activity, Cpu, Code2, Layers, Rocket } from "lucide-react";

import saasDashboard from "../assets/saas_dashboard_ui.webp";

export default function SaasDev() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Animation (Text reveal)
      const tl = gsap.timeline();
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(".hero-title-line", { y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: "power3.out" }, "-=0.4")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
        .from(".hero-btn", { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-image-wrapper", { x: 50, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1");

      // Hero Parallax on mouse move
      if (heroRef.current && heroImageRef.current) {
        heroRef.current.addEventListener("mousemove", (e) => {
          const { clientX, clientY } = e;
          const xPos = (clientX / window.innerWidth - 0.5) * 30; // Move up to 15px
          const yPos = (clientY / window.innerHeight - 0.5) * 30;
          
          gsap.to(heroImageRef.current, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out"
          });
        });
      }

      // 2. Technology Cards: Reveal on Scroll
      gsap.from(".tech-card", {
        scrollTrigger: {
          trigger: ".tech-cards-section",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)"
      });

      // 3. Architecture Diagram: Animated Connecting Lines
      const archTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".arch-diagram",
          start: "top 75%",
        },
      });
      archTl
        .from(".arch-node", { y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" })
        .from(".arch-line-v", { scaleY: 0, transformOrigin: "top center", duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.4")
        .from(".arch-line-h", { scaleX: 0, transformOrigin: "center center", duration: 0.8, ease: "power2.out" }, "-=0.6");

      // 4. Process Section: Step-by-step progress animation
      const processSteps = gsap.utils.toArray<HTMLElement>(".process-step");
      
      ScrollTrigger.create({
        trigger: ".process-section",
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.to(".process-progress-line", { scaleY: 1, transformOrigin: "top center", ease: "none" }),
        scrub: 0.5,
      });

      processSteps.forEach((step, i) => {
        ScrollTrigger.create({
          trigger: step,
          start: "top 60%",
          onEnter: () => {
            gsap.to(step, { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" });
            gsap.to(step.querySelector(".step-indicator"), { 
              backgroundColor: "#7B2FF7", 
              borderColor: "#7B2FF7",
              color: "white", 
              boxShadow: "0 0 20px rgba(123,47,247,0.5)",
              duration: 0.4 
            });
          },
        });
        // Initial state
        gsap.set(step, { opacity: 0.3, x: i % 2 === 0 ? 30 : -30 });
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const techCards = [
    { icon: Database, title: "Multi-Tenant DBs", desc: "Postgres with robust row-level security and strict tenant isolation.", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10", border: "border-[#3B82F6]/20" },
    { icon: ShieldCheck, title: "Enterprise Auth", desc: "Enterprise SSO, biometric MFA, and granular role-based access control.", color: "text-[#7B2FF7]", bg: "bg-[#7B2FF7]/10", border: "border-[#7B2FF7]/20" },
    { icon: CreditCard, title: "Smart Billing", desc: "Complex Stripe subscriptions and automated metered usage reconciliation.", color: "text-[#06B6D4]", bg: "bg-[#06B6D4]/10", border: "border-[#06B6D4]/20" },
    { icon: Activity, title: "Real-Time Sync", desc: "Live updates with sub-millisecond latency via WebSockets and Redis.", color: "text-[#EC4899]", bg: "bg-[#EC4899]/10", border: "border-[#EC4899]/20" },
  ];

  const processes = [
    { title: "Discovery & Architecture", desc: "We map out your complex business logic and design a scalable microservices architecture before writing a single line of code.", icon: Layers },
    { title: "Agile Engineering", desc: "Our engineers build your application in structured sprints, providing you with continuous visibility and demonstrable progress.", icon: Code2 },
    { title: "Rigorous QA & Security", desc: "Automated end-to-end testing and manual security audits ensure your enterprise software is impenetrable and stable.", icon: ShieldCheck },
    { title: "Deployment & Scale", desc: "We deploy to AWS/Vercel with CI/CD pipelines, autoscaling groups, and multi-region database redundancy.", icon: Rocket },
  ];

  return (
    <div ref={containerRef} className="bg-[#FAF7FF] selection:bg-[#7B2FF7]/20 text-[#0F172A] min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Ambience */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#7B2FF7]/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/5 blur-3xl pointer-events-none"></div>

        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-left">
              <div className="hero-badge inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
                Enterprise Grade
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-[#0F172A] leading-[1.1] tracking-tight mb-6">
                <div className="overflow-hidden"><div className="hero-title-line">Scalable SaaS</div></div>
                <div className="overflow-hidden"><div className="hero-title-line">Architectures</div></div>
                <div className="overflow-hidden">
                  <div className="hero-title-line">
                    That <span className="bg-gradient-to-r from-[#7B2FF7] to-[#3B82F6] bg-clip-text text-transparent">Endure</span>
                  </div>
                </div>
              </h1>
              <p className="hero-subtitle text-lg text-[#475569] mb-10 max-w-lg leading-relaxed">
                We build robust, multi-tenant platforms designed to handle millions of requests while maintaining sub-second response times.
              </p>
              <div className="flex gap-4">
                <button className="hero-btn px-8 py-4 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#6D28D9] transition-all duration-300 cursor-pointer">
                  Start Your Build
                </button>
                <button className="hero-btn px-8 py-4 bg-white border border-[#E9D5FF] text-[#0F172A] font-bold text-sm rounded-xl hover:border-[#7B2FF7] transition-all duration-300 cursor-pointer">
                  View Architecture
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-2xl relative">
              <div ref={heroImageRef} className="hero-image-wrapper relative aspect-4/3 rounded-3xl overflow-hidden bg-white border border-[#E9D5FF] shadow-[0_20px_50px_rgba(123,47,247,0.1)]">
                <img
                  src={saasDashboard}
                  alt="SaaS Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
                {/* Floating Elements on Image */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#E9D5FF] shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0F172A]">Real-Time Telemetry</p>
                      <p className="text-xs text-[#475569]">99.99% Uptime SLA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 2. TECHNOLOGY CARDS SECTION */}
      <section className="tech-cards-section py-24 bg-white relative">
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-4">
              Uncompromising <span className="text-[#7B2FF7]">Performance</span>
            </h2>
            <p className="text-[#475569]">
              Built on modern stacks to ensure your software remains fast, secure, and infinitely scalable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCards.map((card, idx) => (
              <div key={idx} className="tech-card p-8 rounded-3xl bg-[#FAF7FF] border border-[#E9D5FF] hover:border-[#7B2FF7]/30 hover:shadow-[0_10px_30px_rgba(123,47,247,0.05)] transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${card.bg} ${card.border} border`}>
                  <card.icon className={`w-7 h-7 ${card.color}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">{card.title}</h3>
                <p className="text-sm text-[#475569] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. ARCHITECTURE DIAGRAM SECTION */}
      <section className="arch-diagram py-32 bg-[#FAF7FF] border-y border-[#E9D5FF]/40 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A] mb-4">
              Microservices Architecture
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto text-lg">
              Decoupled, independently scalable nodes connected via high-speed asynchronous event buses.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative flex flex-col items-center">
            {/* Top Node */}
            <div className="arch-node bg-white p-8 min-w-[320px] rounded-2xl text-center relative z-20 border border-[#E9D5FF] shadow-[0_10px_30px_rgba(123,47,247,0.05)]">
              <h4 className="font-mono text-[#3B82F6] mb-2 text-sm tracking-widest uppercase font-bold">Client Layer</h4>
              <p className="text-[#0F172A] font-bold text-xl">React / Next.js SPA</p>
            </div>

            <div className="arch-line-v w-1 h-16 bg-[#E9D5FF] relative z-10"></div>

            {/* Gateway */}
            <div className="arch-node bg-white p-8 min-w-[380px] rounded-2xl text-center relative z-20 border-2 border-[#7B2FF7]/40 shadow-[0_0_30px_rgba(123,47,247,0.1)]">
              <h4 className="font-mono text-[#7B2FF7] mb-2 text-sm tracking-widest uppercase font-bold">Edge Network</h4>
              <p className="text-[#0F172A] font-bold text-xl">GraphQL API Gateway</p>
            </div>

            <div className="arch-line-v w-1 h-16 bg-[#E9D5FF] relative z-10"></div>

            {/* Horizontal Bus */}
            <div className="arch-line-h w-[85%] md:w-[70%] h-1 bg-[#E9D5FF] relative z-10">
              <div className="absolute left-0 top-0 w-1 h-16 bg-[#E9D5FF]"></div>
              <div className="absolute right-0 top-0 w-1 h-16 bg-[#E9D5FF]"></div>
            </div>
            <div className="arch-line-v w-1 h-16 bg-[#E9D5FF] relative z-10 -mt-1"></div>

            {/* Microservices */}
            <div className="flex w-full md:w-[85%] justify-between flex-col md:flex-row gap-6 md:gap-10 relative z-20">
              <div className="arch-node bg-white p-8 rounded-2xl text-center border border-[#E9D5FF] shadow-lg flex-1">
                <ShieldCheck size={32} className="mx-auto text-[#7B2FF7] mb-4" />
                <h4 className="font-mono text-[#475569] mb-2 text-xs tracking-widest uppercase font-bold">Service</h4>
                <p className="text-lg font-bold text-[#0F172A]">IAM & Auth</p>
              </div>
              <div className="arch-node bg-white p-8 rounded-2xl text-center border border-[#3B82F6]/30 shadow-[0_0_30px_rgba(59,130,246,0.1)] flex-1">
                <Cpu size={32} className="mx-auto text-[#3B82F6] mb-4" />
                <h4 className="font-mono text-[#475569] mb-2 text-xs tracking-widest uppercase font-bold">Service</h4>
                <p className="text-lg font-bold text-[#0F172A]">Core Logic</p>
              </div>
              <div className="arch-node bg-white p-8 rounded-2xl text-center border border-[#E9D5FF] shadow-lg flex-1">
                <CreditCard size={32} className="mx-auto text-[#7B2FF7] mb-4" />
                <h4 className="font-mono text-[#475569] mb-2 text-xs tracking-widest uppercase font-bold">Worker</h4>
                <p className="text-lg font-bold text-[#0F172A]">Stripe Billing</p>
              </div>
            </div>

            {/* Down to DB */}
            <div className="hidden md:flex w-[85%] justify-between relative z-10 h-20">
              <div className="arch-line-v w-1 h-20 bg-[#E9D5FF] ml-[10%]"></div>
              <div className="arch-line-v w-1 h-28 bg-[#E9D5FF]"></div>
              <div className="arch-line-v w-1 h-20 bg-[#E9D5FF] mr-[10%]"></div>
            </div>
            <div className="md:hidden h-16 w-1 bg-[#E9D5FF] arch-line-v"></div>

            {/* DB Layer */}
            <div className="arch-node bg-white p-8 rounded-2xl min-w-[360px] text-center relative z-20 border border-[#E9D5FF] shadow-lg md:-mt-8">
              <Database size={28} className="mx-auto text-[#475569] mb-4" />
              <div className="flex items-center justify-center gap-10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#3B82F6] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
                  <span className="text-[#0F172A] font-bold text-lg">Postgres</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#EC4899] shadow-[0_0_10px_rgba(236,72,153,0.5)]"></span>
                  <span className="text-[#0F172A] font-bold text-lg">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. PROCESS SECTION (NEW) */}
      <section className="process-section py-32 bg-white relative">
        <div className="container max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0F172A] mb-4">
              Our Development <span className="text-[#3B82F6]">Process</span>
            </h2>
            <p className="text-[#475569] max-w-2xl mx-auto text-lg">
              A battle-tested methodology to take your enterprise software from concept to production.
            </p>
          </div>

          <div className="relative pl-8 md:pl-0">
            {/* Progress Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#E9D5FF] md:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="process-progress-line w-full h-full bg-gradient-to-b from-[#7B2FF7] to-[#3B82F6] scale-y-0 origin-top"></div>
            </div>

            {processes.map((proc, idx) => (
              <div key={idx} className={`process-step relative flex flex-col md:flex-row items-center justify-between mb-16 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Indicator */}
                <div className="absolute left-[-16px] md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-[#E9D5FF] text-[#E9D5FF] flex items-center justify-center z-10 step-indicator font-bold transition-all duration-300">
                  {idx + 1}
                </div>

                <div className="w-full md:w-[45%] pl-8 md:pl-0">
                  <div className={`p-8 bg-[#FAF7FF] rounded-3xl border border-[#E9D5FF] shadow-sm text-left ${idx % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${idx % 2 === 0 ? "" : "md:ml-auto"} bg-white border border-[#E9D5FF]`}>
                      <proc.icon className="w-6 h-6 text-[#7B2FF7]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">{proc.title}</h3>
                    <p className="text-[#475569] leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <CTABlock
        title="Building the next big SaaS?"
        subtitle="Let's architect a platform that scales with your ambition."
      />
    </div>
  );
}
