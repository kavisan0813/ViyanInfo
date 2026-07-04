import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import type { StatCounterProps } from "../types";

export function StatCounter({ value, suffix, label }: StatCounterProps) {
  const statsRef = useRef<HTMLDivElement>(null);
  const elRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!statsRef.current) return;
    const ctx = gsap.context(() => {
      const obj = { val: 0 };

      gsap.from(statsRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.to(obj, {
        val: value,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (elRef.current) {
            elRef.current.textContent = Math.round(obj.val) + suffix;
          }
        },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, statsRef);
    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <div
      ref={statsRef}
      className="glass-card p-8 flex flex-col items-center justify-center text-center"
    >
      <div
        ref={elRef}
        className="text-[clamp(48px,5vw,80px)] font-mono font-bold text-(--color-text-accent) leading-none mb-3"
      >
        0{suffix}
      </div>
      <div className="text-[13px] font-body font-semibold text-text-muted uppercase tracking-widest">
        {value === 1 && label.toLowerCase().endsWith("s")
          ? label.slice(0, -1)
          : label}
      </div>
      <div className="w-[40%] h-[2px] bg-(--color-surface) mt-6 opacity-50"></div>
    </div>
  );
}
