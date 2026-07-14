import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionDivider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const divider = containerRef.current?.querySelector(".divider-line");
    if (!divider) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        divider,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "center center",
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            end: "bottom 75%",
            scrub: 1.5,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="container relative z-20 pointer-events-none my-6 md:my-10 h-[2px]"
    >
      <div
        className="divider-line w-full h-[2px] opacity-80"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-text-accent), transparent)",
        }}
      />
    </div>
  );
}
