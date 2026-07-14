import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export function CTAParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Create particles
    const particles = Array.from({ length: 30 }).map(() => {
      const el = document.createElement("div");
      const size = Math.random() * 6 + 2;
      el.className =
        "absolute bg-white/40 rounded-full pointer-events-none z-0";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      container.appendChild(el);

      // Floating animation
      gsap.to(el, {
        y: `+=${Math.random() * 100 - 50}`,
        x: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return el;
    });

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          particles.forEach((p) => {
            const pRect = p.getBoundingClientRect();
            const pX = pRect.left - rect.left + pRect.width / 2;
            const pY = pRect.top - rect.top + pRect.height / 2;

            const distX = pX - mouseX;
            const distY = pY - mouseY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            // Repel if within 150px
            if (distance < 150) {
              const angle = Math.atan2(distY, distX);
              const force = (150 - distance) / 150;
              const pushX = Math.cos(angle) * force * 50;
              const pushY = Math.sin(angle) * force * 50;

              gsap.to(p, {
                x: `+=${pushX}`,
                y: `+=${pushY}`,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto w-100"
    />
  );
}