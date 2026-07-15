import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import type { ProcessStepProps } from "../types";

export function ProcessStep({
  number,
  title,
  description,
  deliverables,
  isLast,
}: ProcessStepProps) {
  const stepRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!isLast) {
        gsap.fromTo(
          ".timeline-line",
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: stepRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
            },
          },
        );
      }

      gsap.fromTo(
        ".timeline-dot",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          scrollTrigger: { trigger: stepRef.current, start: "top 65%" },
        },
      );

      gsap.fromTo(
        ".step-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: stepRef.current, start: "top 85%" },
        },
      );
    }, stepRef);
    return () => ctx.revert();
  }, [isLast]);

  return (
    <div ref={stepRef} className="flex gap-4 md:gap-8 relative group">
      {/* Left Col - Number & Timeline */}
      <div className="flex flex-col items-center relative w-16 md:w-24 shrink-0">
        <div className="text-[clamp(40px,6vw,80px)] font-mono font-bold text-(--color-text-accent) opacity-20 leading-none relative z-10 bg-deep py-4 transition-opacity duration-300 group-hover:opacity-50">
          {number}
        </div>

        <div className="timeline-dot absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-(--color-surface) shadow-[0_0_15px_rgba(136,184,171,0.6)] z-20"></div>

        {!isLast && (
          <div className="timeline-line absolute top-1/2 bottom-[-50%] w-[2px] bg-border-2 z-0"></div>
        )}
      </div>

      {/* Right Col - Content */}
      <div className="py-6 md:py-8 flex-1">
        <div className="step-card glass-card p-6 md:p-10 border border-border-1 hover:border-border-2/30 transition-colors duration-300">
          <h3 className="text-2xl md:text-[28px] font-display font-semibold text-text-primary mb-4">
            {title}
          </h3>
          <p className="text-[17px] text-text-secondary leading-relaxed mb-6">
            {description}
          </p>
          {deliverables && deliverables.length > 0 && (
            <div className="border-t border-border-1 pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-text-muted block mb-3">Key Focus & Deliverables</span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-text-secondary text-[15px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--color-text-accent) shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
