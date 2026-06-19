import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { onHoverBurst } from "../utils/particleBurst";
import { gsap } from "gsap";
import type { CTABlockProps } from "../types/index";

export function CTABlock({
  title,
  subtitle,
  primaryLabel = "Engage With Us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
  transparent = false,
  align = "center",
}: CTABlockProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".cta-word");
      gsap.from(words, {
        y: "110%",
        duration: 1,
        ease: "expo.out",
        stagger: 0.05,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });
      gsap.from(".cta-sub", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [title]);

  const words = title.split(" ");

  return (
    <section
      ref={sectionRef}
      className={`${transparent ? "" : "section bg-deep"} relative overflow-hidden`}
    >
      {!transparent && (
        <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-surface)_0%,transparent_60%)] opacity-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      )}

      <div className="container relative z-10">
        <div
          className={`${transparent ? "bg-transparent border-none shadow-none p-0 md:p-0" : "glass-card p-10 md:p-20"} rounded-3xl ${align === "left" ? "text-center lg:ml-12 max-w-2xl" : "text-center max-w-4xl mx-auto"} relative`}
        >
          {/* Top glow edge */}
          {!transparent && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-(--color-rose-bright) to-transparent opacity-60 shadow-[0_0_20px_rgba(232,180,208,0.7)]"></div>
          )}

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight tracking-tight flex flex-wrap justify-center overflow-hidden">
            {words.map((word, i) => (
              <div key={i} className="overflow-hidden inline-block">
                <span className="cta-word inline-block">
                  {word}
                  {"\u00A0"}
                </span>
              </div>
            ))}
          </h2>

          <p className="cta-sub text-lg md:text-xl mb-10 max-w-2xl mx-auto text-text-secondary">
            {subtitle}
          </p>

          <div className="cta-sub flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={primaryHref}>
              <button
                onMouseEnter={onHoverBurst}
                className="btn-glass w-full sm:w-auto"
              >
                {primaryLabel}
              </button>
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link to={secondaryHref}>
                <button className="btn-glass w-full sm:w-auto">
                  {secondaryLabel}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
