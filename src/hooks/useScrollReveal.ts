import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function useScrollReveal(selector: string = ".reveal-item") {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(selector);
      if (items.length > 0) {
        gsap.from(items, {
          y: 70,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
}
