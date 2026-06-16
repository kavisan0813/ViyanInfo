import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export function useMouseParallax(intensity: number = 20) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const xPos = (clientX / innerWidth - 0.5) * intensity;
        const yPos = (clientY / innerHeight - 0.5) * intensity;

        const layers = gsap.utils.toArray<HTMLElement>(
          ".mouse-parallax-layer",
          container,
        );
        if (layers.length > 0) {
          gsap.to(layers, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out",
          });
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
    }, container);

    return () => {
      ctx.revert();
    };
  }, [intensity]);

  return containerRef;
}
