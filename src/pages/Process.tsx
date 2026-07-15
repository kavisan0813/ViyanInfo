import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProcessStep } from "../components/ProcessStep";
import { CTABlock } from "../components/CTABlock";
import { LiquidFooter } from "../components/LiquidFooter";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const badge = heroContentRef.current?.querySelector(".hero-badge");
      const h1Lines = gsap.utils.toArray<HTMLElement>(
        ".line-inner",
        heroContentRef.current,
      );

      if (badge && h1Lines.length) {
        const tl = gsap.timeline();
        tl.from(badge, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: 0.2,
        }).from(
          h1Lines,
          { y: "110%", duration: 1.3, stagger: 0.1, ease: "expo.out" },
          "-=0.7",
        );
      }

      gsap.from(".promise-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".promises-section", start: "top 80%" },
      });
      gsap.fromTo(
        ".promise-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ".promises-section", start: "top 80%" },
        },
      );

      // Background text parallax
      gsap.to(".bg-text", {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: ".process-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-abyss relative overflow-hidden">
      {/* Hero */}
      <section className="relative pt-24 pb-6 overflow-hidden min-h-[60vh]">
        <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-surface)_0%,transparent_60%)] opacity-60 top-0 right-0 z-0"></div>
        <div
          ref={heroContentRef}
          className="container relative z-10 text-center"
        >
          <div className="hero-badge inline-block glass-card px-4 py-2 rounded-full mb-8 border border-border-2">
            <span className="text-sm font-body font-semibold text-text-primary">
              Methodology
            </span>
          </div>
          <h1 className="text-[clamp(40px,6vw,80px)] font-display font-bold text-text-primary leading-[1.05] tracking-tight max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="line-inner">How We Build.</div>
            </div>
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="process-section relative bg-deep overflow-hidden py-20">
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-[0.02] select-none">
          <h2 className="bg-text text-[25vw] font-display font-bold text-(--color-text-accent) opacity-[0.03] whitespace-nowrap tracking-tighter">
            PROCESS
          </h2>
        </div>

        <div className="container max-w-4xl relative z-10">
          <ProcessStep
            number="01"
            title="Discover"
            description="We understand your business goals, users, challenges, and project requirements before writing a single line of code."
            deliverables={[
              "Stakeholder Workshops",
              "Business Analysis",
              "Requirement Gathering",
              "Competitor Research",
              "Product Vision",
            ]}
          />
          <ProcessStep
            number="02"
            title="Design"
            description="We transform ideas into intuitive user experiences, scalable architecture, and clear implementation plans."
            deliverables={[
              "UX Research",
              "Wireframes",
              "UI Design",
              "Prototyping",
              "Architecture Planning",
            ]}
          />
          <ProcessStep
            number="03"
            title="Build"
            description="Our engineering team develops secure, scalable, and maintainable software using modern technologies and best practices."
            deliverables={[
              "Sprint Planning",
              "Development",
              "API Design",
              "Testing",
              "Documentation",
            ]}
          />
          <ProcessStep
            number="04"
            title="Validate"
            description="Every feature is tested for functionality, usability, security, and performance before release."
            deliverables={[
              "QA",
              "Automation Testing",
              "Performance Testing",
              "Security Review",
              "User Acceptance Testing",
            ]}
          />
          <ProcessStep
            number="05"
            title="Launch"
            description="We deploy your application with reliable infrastructure, monitoring, and production-ready environments."
            deliverables={[
              "Production Deployment",
              "Monitoring",
              "Optimization",
              "Training",
              "Go-Live Support",
            ]}
          />
          <ProcessStep
            number="06"
            title="Scale"
            description="After launch, we continue improving your product through feature enhancements, performance optimization, and long-term technical support."
            deliverables={[
              "Continuous Development",
              "Maintenance",
              "Feature Releases",
              "Infrastructure Scaling",
              "AI Enhancements",
              "Business Analytics",
            ]}
            isLast
          />
        </div>
      </section>

      {/* Promises */}
      <section className="promises-section section bg-abyss border-y border-(--color-border-0) py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="promise-card glass-card-elevated p-8 text-center flex items-center justify-center min-h-[120px]">
              <h4 className="text-lg font-display font-semibold text-text-primary">
                Weekly demos and progress updates
              </h4>
            </div>
            <div className="promise-card glass-card-elevated p-8 text-center flex items-center justify-center min-h-[120px]">
              <h4 className="text-lg font-display font-semibold text-text-primary">
                Shared workspace on Notion or Linear
              </h4>
            </div>
            <div className="promise-card glass-card-elevated p-8 text-center flex items-center justify-center min-h-[120px]">
              <h4 className="text-lg font-display font-semibold text-text-primary">
                Direct Slack access to your lead engineer
              </h4>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Ready to start the process?"
        subtitle="Let's turn your vision into a concrete plan."
      />
      <LiquidFooter />
    </div>
  );
}
