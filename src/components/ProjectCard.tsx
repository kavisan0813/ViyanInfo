import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import type { ProjectCardProps } from "../types";

export function ProjectCard({
  title,
  category,
  image,
  href,
  tags,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1.4,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      const img = cardRef.current?.querySelector("img");
      if (img) {
        gsap.from(img, {
          scale: 1.15,
          duration: 1.8,
          ease: "expo.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      }
    }, cardRef);
    return () => ctx.revert();
  }, []);

  const isMobileProject =
    category.toLowerCase().includes("mobile") ||
    tags.some(
      (t) =>
        t.toLowerCase().includes("flutter") ||
        t.toLowerCase().includes("react native"),
    );

  return (
    <Link
      ref={cardRef}
      to={href}
      className="project-card glass-card block p-6 rounded-3xl overflow-hidden relative cursor-pointer group bg-glass-1 border border-border-1"
    >
      {/* Premium Glass Device Viewport */}
      <div className="relative w-full aspect-4/3 mb-6 bg-glass-dark/30 rounded-2xl overflow-hidden border border-border-1 shadow-inner flex items-center justify-center p-4">
        {/* Ambient background glow inside viewport */}
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(138,29,58,0.04)_0%,transparent_70%) z-0 pointer-events-none"></div>

        {isMobileProject ? (
          /* Phone Frame */
          <div className="relative w-[180px] h-[320px] bg-[#1a1a1c] rounded-[36px] border-[8px] border-[#2A2A2A] shadow-2xl overflow-hidden flex flex-col justify-start z-10 transition-transform duration-500 group-hover:scale-105">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-20"></div>
            {/* Screen Content */}
            <div className="w-full h-full overflow-hidden relative rounded-[28px]">
              <img
                src={image}
                alt={title}
                className="w-full absolute top-0 left-0 transition-all duration-[4s] ease-in-out group-hover:top-[calc(100%_-_304px)]"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          /* Premium Glass Laptop Frame */
          <div className="w-full h-full flex flex-col items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-102">
            {/* Laptop Screen / Lid */}
            <div className="relative w-[85%] aspect-16/10 bg-[#161618] rounded-t-2xl border-[6px] border-[#2A2A2A] shadow-2xl overflow-hidden">
              <div className="w-full h-full overflow-hidden relative bg-[#1c1c1f]">
                <img
                  src={image}
                  alt={title}
                  className="w-full absolute top-0 left-0 transition-all duration-[6s] ease-in-out group-hover:translate-y-[calc(-100%_+_155px)]"
                  loading="lazy"
                />
              </div>
            </div>
            {/* Laptop Keyboard Base */}
            <div className="w-[96%] h-3 bg-gradient-to-r from-[#2A2A2A] via-[#4d4d4d] to-[#2A2A2A] rounded-b-lg shadow-lg border-t border-white/10 z-10"></div>
            <div className="w-[20%] h-1 bg-black/60 mx-auto rounded-b-sm"></div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-2 transform transition-transform duration-500 ease-out">
        <span className="inline-block px-3 py-1 rounded-full bg-glass-2 border border-border-1 text-(--color-text-accent) text-xs font-semibold uppercase tracking-wider mb-4">
          {category}
        </span>

        <h3 className="text-xl md:text-2xl font-display font-semibold text-text-primary mb-4 leading-tight">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body text-text-secondary bg-glass-1 px-2.5 py-1 rounded-md border border-border-0"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-text-accent font-semibold text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
          View Case Study <span className="text-lg leading-none">→</span>
        </div>
      </div>
    </Link>
  );
}
