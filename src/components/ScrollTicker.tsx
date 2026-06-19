import { useState, useEffect, useRef } from "react";
import type { ScrollTickerProps } from "../types";

export function ScrollTicker({ items, speed = 2 }: ScrollTickerProps) {
  const allItems = [...items, ...items];
  const [duration, setDuration] = useState(items.length * speed);
  const trackRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const skewRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const update = () => {
      const multiplier = window.innerWidth < 768 ? speed * 3 : speed;
      setDuration(items.length * multiplier);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length, speed]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    function loop() {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      lastScrollY.current = currentY;

      // Target skew based on scroll velocity, clamped to ±8deg
      const targetSkew = Math.max(-8, Math.min(8, -delta * 0.25));

      // Lerp toward target
      skewRef.current += (targetSkew - skewRef.current) * 0.12;

      if (trackRef.current) {
        trackRef.current.style.transform = `skewX(${skewRef.current.toFixed(3)}deg)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-glass-0 border-y border-(--color-border-0) py-4 flex items-center group">
      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ animation: `ticker-left ${duration}s linear infinite` }}
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[15px] font-display font-semibold text-text-muted uppercase tracking-wider px-8">
              {item}
            </span>
            <span className="text-(--color-text-accent) text-[10px] opacity-50">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
