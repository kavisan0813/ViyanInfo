import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const expertise = [
  "SaaS Platforms",
  "AI Products",
  "High-scale Consumer Apps",
  "Fintech Systems",
  "Enterprise Solutions",
];

export function CredibilitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".credibility-content",
          start: "top 85%",
          once: true,
        },
      });

      tl.from(".credibility-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".credibility-list-item",
        {
          x: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6",
      );

      // --- Magnetic Hover ---
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const section = sectionRef.current;
        const dots = gsap.utils.toArray<HTMLElement>(".credibility-dot");
        
        if (section) {
          section.addEventListener("mousemove", (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            dots.forEach(dot => {
              const rect = dot.getBoundingClientRect();
              const dotCenterX = rect.left + rect.width / 2;
              const dotCenterY = rect.top + rect.height / 2;
              
              const distX = mouseX - dotCenterX;
              const distY = mouseY - dotCenterY;
              const distance = Math.sqrt(distX * distX + distY * distY);
              
              // 60px radius for pull effect
              if (distance < 60) {
                // The closer we are, the stronger the pull
                const pullX = distX * 0.4;
                const pullY = distY * 0.4;
                gsap.to(dot, { x: pullX, y: pullY, duration: 0.3, ease: "power2.out", overwrite: "auto" });
              } else {
                gsap.to(dot, { x: 0, y: 0, duration: 0.4, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
              }
            });
          });

          section.addEventListener("mouseleave", () => {
            gsap.to(dots, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)", overwrite: "auto" });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section bg-deep border-y border-(--color-border-0) will-change-transform"
    >
      <div className="container overflow-hidden">
        <div className="credibility-content grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="credibility-title text-[clamp(32px,4vw,48px)] font-display font-semibold text-text-primary leading-tight mb-6">
              Trusted by founders building the{" "}
              <span className="text-shimmer">future.</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md">
              We partner with ambitious startups and established enterprises to
              turn complex technical challenges into competitive advantages.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-mono text-(--color-text-accent) uppercase tracking-widest mb-6 block">
              Our Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="credibility-list-item flex items-center space-x-3 group"
                >
                  <div className="credibility-dot w-1.5 h-1.5 rounded-full bg-(--color-text-accent) group-hover:scale-150 transition-transform"></div>
                  <span className="text-text-primary font-medium text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
