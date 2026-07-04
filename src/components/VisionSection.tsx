import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const data = [
  {
    label: "Vision",
    headline: "Universal Design Language",
    description:
      "Creating a seamless bridge between technical complexity and human intuition through motion and clarity.",
  },
  {
    label: "Mission",
    headline: "Performance First",
    description:
      "Building systems where milliseconds are treated as the primary user experience metric in every build.",
  },
  {
    label: "Aim",
    headline: "Strategic Impact",
    description:
      "Developing technology that doesn't just function, but scales businesses and creates measurable value.",
  },
];

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const quickToRefs = useRef<
    {
      rotationX: (v: number) => void;
      rotationY: (v: number) => void;
      y: (v: number) => void;
      glowX: (v: number) => void;
      glowY: (v: number) => void;
      glowOpacity: (v: number) => void;
    }[]
  >([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      // Reveal animation
      gsap.from(".vision-card", {
        y: 60,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".vision-cards-grid",
          start: "top 80%",
          once: true,
        },
      });

      // Ambient light animation
      gsap.to(".vision-orb", {
        x: 200,
        y: 120,
        scale: 1.2,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Divider line animation
      gsap.from(".vision-divider", {
        scaleX: 0,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: ".vision-divider",
          start: "top 95%",
          end: "top 75%",
          scrub: 1.5,
        },
      });

      // Initialize quickTo for each card
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;
        const glow = card.querySelector(".card-glow") as HTMLDivElement;
        quickToRefs.current[idx] = {
          rotationX: gsap.quickTo(card, "rotationX", {
            duration: 0.3,
            ease: "power2.out",
          }),
          rotationY: gsap.quickTo(card, "rotationY", {
            duration: 0.3,
            ease: "power2.out",
          }),
          y: gsap.quickTo(card, "y", { duration: 0.3, ease: "power2.out" }),
          glowX: gsap.quickTo(glow, "x", { duration: 0.4, ease: "power2.out" }),
          glowY: gsap.quickTo(glow, "y", { duration: 0.4, ease: "power2.out" }),
          glowOpacity: gsap.quickTo(glow, "opacity", {
            duration: 0.4,
            ease: "power2.out",
          }),
        };
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const card = cardsRef.current[index];
    const quickTo = quickToRefs.current[index];
    if (!card || !quickTo) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = gsap.utils.clamp(-10, 10, (y - centerY) / 20);
    const rotateY = gsap.utils.clamp(-10, 10, (centerX - x) / 20);

    quickTo.rotationX(rotateX);
    quickTo.rotationY(rotateY);
    quickTo.y(-8);
    quickTo.glowX(x - 50);
    quickTo.glowY(y - 50);
    quickTo.glowOpacity(0.6);
  };

  const handleMouseLeave = (index: number) => {
    const quickTo = quickToRefs.current[index];
    if (!quickTo) return;

    quickTo.rotationX(0);
    quickTo.rotationY(0);
    quickTo.y(0);
    quickTo.glowOpacity(0);
  };

  return (
    <section
      ref={containerRef}
      className="section bg-abyss relative overflow-hidden perspective-1000"
    >
      {/* Background ambient orbs */}
      <div className="vision-orb absolute top-0 -left-1/4 w-full h-full bg-[radial-gradient(circle,rgba(139,72,120,0.15)_0%,transparent_70%)] pointer-events-none z-0 will-change-transform"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(36px,4.5vw,52px)] font-display font-semibold text-text-primary leading-[1.1] tracking-tight mb-8">
            Our Purpose
          </h2>
          <div
            className="vision-divider w-full h-[2px] opacity-80 mb-16"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-text-accent), transparent)",
            }}
          ></div>
        </div>

        <div className="vision-cards-grid grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="vision-card glass-card-elevated p-8 md:p-10 flex flex-col items-start text-left min-h-[320px] group transition-all duration-500 hover:border-(--color-text-accent)/30 will-change-transform"
              onMouseMove={(e) => handleMouseMove(e, idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Card Glow */}
              <div className="card-glow absolute pointer-events-none opacity-0 w-32 h-32 bg-[radial-gradient(circle,rgba(232,180,208,0.35),transparent)] blur-2xl rounded-full z-0"></div>

              <div className="relative z-10 w-full h-full flex flex-col">
                <span className="text-xs font-mono text-(--color-text-accent) uppercase tracking-[0.3em] mb-6 block">
                  {item.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-text-primary mb-4 leading-tight group-hover:text-(--color-text-accent) transition-colors">
                  {item.headline}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
