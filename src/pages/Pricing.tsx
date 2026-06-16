import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Check } from "lucide-react";
import { CTABlock } from "../components/CTABlock";
import { EstimateCalculator } from "../components/EstimateCalculator";

export default function Pricing() {
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const badge = heroContentRef.current?.querySelector(".hero-badge");
      const h1Lines = gsap.utils.toArray<HTMLElement>(
        ".line-inner",
        heroContentRef.current,
      );

      if (!badge) return;

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

      gsap.from(".pricing-card", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".pricing-grid", start: "top 80%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-abyss">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-16 pb-6 overflow-hidden min-h-[60vh]"
      >
        <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-surface)_0%,transparent_60%)] opacity-60 top-0 left-1/2 -translate-x-1/2 z-0"></div>
        <div
          ref={heroContentRef}
          className="container relative z-10 text-center"
        >
          <div className="hero-badge inline-block glass-card px-4 py-2 rounded-full mb-8 border border-border-2">
            <span className="text-sm font-body font-semibold text-text-primary">
              Transparent Pricing
            </span>
          </div>
          <h1 className="text-[clamp(40px,6vw,80px)] font-display font-bold text-text-primary leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="line-inner">Investment</div>
            </div>
            <div className="overflow-hidden">
              <div className="line-inner">in Excellence</div>
            </div>
          </h1>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pricing-grid bg-deep py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Tier 1 */}
            <div className="pricing-card glass-card-elevated p-8 md:p-10 flex flex-col h-full">
              <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                Fixed Scope
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                For defined V1 projects
              </p>
              <div className="text-3xl font-mono font-bold text-(--color-text-accent) mb-8">
                Custom Quote
              </div>

              <div className="flex flex-col gap-4 mb-10 flex-1">
                {[
                  "Detailed SOW & Timeline",
                  "Fixed deliverables",
                  "Dedicated PM",
                  "30-day warranty",
                  "Full IP transfer",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-(--color-text-accent) shrink-0 mt-0.5"
                    />
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full">
                <button className="btn-glass w-full">Request Estimate</button>
              </Link>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="pricing-card glass-card-elevated p-8 md:p-10 flex flex-col h-full border-2 border-border-2 shadow-[0_0_40px_rgba(136,184,171,0.15)] relative lg:-translate-y-6">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-(--color-surface) text-void text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Popular
              </div>

              <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                Dedicated Team
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                For funded startups scaling continuously
              </p>
              <div className="text-3xl font-mono font-bold text-(--color-text-accent) mb-8">
                Starts at $15,000
                <span className="text-lg text-text-muted font-body font-normal">
                  /mo
                </span>
              </div>

              <div className="flex flex-col gap-4 mb-10 flex-1">
                {[
                  "Full-stack React/Node engineers",
                  "UX/UI lead designer",
                  "Continuous agile sprints",
                  "Direct Slack access",
                  "Priority bug SLA",
                  "Dedicated account lead",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-(--color-text-accent) shrink-0 mt-0.5"
                    />
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full">
                <button className="btn-glass w-full">Book Consultation</button>
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="pricing-card glass-card-elevated p-8 md:p-10 flex flex-col h-full">
              <h3 className="text-2xl font-display font-semibold text-text-primary mb-2">
                Architecture Consulting
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                For internal teams needing senior guidance
              </p>
              <div className="text-3xl font-mono font-bold text-(--color-text-accent) mb-8">
                $250
                <span className="text-lg text-text-muted font-body font-normal">
                  /hour
                </span>
              </div>

              <div className="flex flex-col gap-4 mb-10 flex-1">
                {[
                  "Codebase audits",
                  "Cloud infra review",
                  "Database scaling strategies",
                  "Senior technical hiring support",
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className="text-(--color-text-accent) shrink-0 mt-0.5"
                    />
                    <span className="text-text-secondary text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="w-full">
                <button className="btn-glass w-full">Book a Block</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Estimate Calculator */}
      <section className="section bg-abyss pt-0 pb-16">
        <div className="container">
          <EstimateCalculator />
        </div>
      </section>

      {/* Explanation */}
      <section className="section bg-abyss">
        <div className="container max-w-3xl text-center">
          <p className="body-copy text-text-secondary max-w-readable mx-auto mb-6">
            We don't believe in one-size-fits-all pricing. Every engagement is
            structured around your business goals, team size, and timeline
            constraints.
          </p>
          <p className="body-copy text-text-muted max-w-readable mx-auto">
            Fixed-scope projects are ideal for clearly scoped V1 builds.
            Dedicated teams are how we work best with growth-stage startups.
            Consulting is available for companies with internal teams who need
            strategic senior guidance.
          </p>
        </div>
      </section>

      <CTABlock
        title="Not sure which model fits?"
        subtitle="Let's talk for 15 minutes."
      />
    </div>
  );
}
