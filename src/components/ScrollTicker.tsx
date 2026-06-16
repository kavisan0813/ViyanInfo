import { useState, useEffect } from "react";
import type { ScrollTickerProps } from "../types";

export function ScrollTicker({ items, speed = 2 }: ScrollTickerProps) {
  const allItems = [...items, ...items];
  const [duration, setDuration] = useState(items.length * speed);

  useEffect(() => {
    const update = () => {
      const multiplier = window.innerWidth < 768 ? speed * 3 : speed;
      setDuration(items.length * multiplier);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length, speed]);

  return (
    <div className="w-full overflow-hidden bg-glass-0 border-y border-(--color-border-0) py-4 flex items-center group">
      <div
        className="flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]"
        style={{ animation: `ticker-left ${duration}s linear infinite` }}
      >
        {allItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="text-[15px] font-display font-semibold text-text-muted uppercase tracking-wider px-8">
              {item}
            </span>
            <span className="text-(--color-text-accent) text-[10px] opacity-50">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
