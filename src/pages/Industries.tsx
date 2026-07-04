import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Building2, HeartPulse, ShoppingBag, Briefcase } from "lucide-react";
import { CTABlock } from "../components/CTABlock";
import { LiquidFooter } from "../components/LiquidFooter";

export default function Industries() {
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !heroContentRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP ANIMATIONS
      mm.add("(min-width: 769px)", () => {
        const h1Lines = gsap.utils.toArray<HTMLElement>(
          ".line-inner",
          heroContentRef.current,
        );

        gsap.from(h1Lines, {
          y: "110%",
          duration: 1.2,
          stagger: 0.1,
          ease: "expo.out",
          delay: 0.2,
        });

        gsap.from(".industry-card", {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".industries-grid",
            start: "top 75%",
          },
        });
      });

      // MOBILE ANIMATIONS (SIMPLIFIED)
      mm.add("(max-width: 768px)", () => {
        gsap.from(".line-inner", {
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.1,
        });

        gsap.from(".industry-card", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".industries-grid",
            start: "top 85%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-abyss">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-10 md:pb-6 overflow-hidden md:min-h-[60vh]"
      >
        <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-surface)_0%,transparent_60%)] opacity-60 top-0 right-0 z-0"></div>
        <div
          ref={heroContentRef}
          className="container relative z-10 text-center"
        >
          <h1 className="text-[clamp(32px,8vw,72px)] font-display font-bold text-text-primary leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="line-inner">Industries</div>
            </div>
            <div className="overflow-hidden">
              <div className="line-inner">We Serve</div>
            </div>
          </h1>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-grid bg-deep py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="industry-card glass-card p-6 sm:p-8 md:p-12 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-glass-2 border border-border-2 flex items-center justify-center text-(--color-text-accent) mb-8 group-hover:scale-110 transition-transform duration-500">
                <Building2 size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-text-primary mb-4">
                SaaS & Inventory Management
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                Scalable inventory management systems with billing, real-time
                tracking, and automated workflows for modern SaaS businesses.
              </p>
            </div>

            <div className="industry-card glass-card p-6 sm:p-8 md:p-12 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-glass-2 border border-border-2 flex items-center justify-center text-(--color-text-accent) mb-8 group-hover:scale-110 transition-transform duration-500">
                <HeartPulse size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-text-primary mb-4">
                Healthcare & MedTech
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                HIPAA-compliant medical records software, patient portal
                telemedicine platforms, and IoT clinical hardware integrations.
              </p>
            </div>

            <div className="industry-card glass-card p-6 sm:p-8 md:p-12 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-glass-2 border border-border-2 flex items-center justify-center text-(--color-text-accent) mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShoppingBag size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-text-primary mb-4">
                E-Commerce & Retail
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                Headless Shopify storefronts, custom ERP-synced commerce
                platforms, and AI-driven personalized shopping experiences with
                Algolia search.
              </p>
            </div>

            <div className="industry-card glass-card p-6 sm:p-8 md:p-12 group">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-glass-2 border border-border-2 flex items-center justify-center text-(--color-text-accent) mb-8 group-hover:scale-110 transition-transform duration-500">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-text-primary mb-4">
                Enterprise SaaS
              </h3>
              <p className="text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
                B2B multi-tenant applications with complex RBAC, workflow
                automation, data orchestration, and enterprise SSO (SAML/OIDC)
                integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABlock
        title="Don't see your industry?"
        subtitle="Our engineering principles apply universally. Let's talk about your domain."
      />
      <LiquidFooter />
    </div>
  );
}
