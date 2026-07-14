import { useRef, useCallback, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MobileStack1, MobileStack2 } from "./ArrayContent";
import { motion } from "framer-motion";

function FeaturePhoneMockup({ card }: { card: (typeof MobileStack2)[0] }) {
  return (
    <div className="relative w-[180px] h-[360px] mx-auto shrink-0 select-none">
      {/* Phone body */}
      <div
        className={`absolute inset-0 rounded-[32px] border-[5px] border-slate-800 bg-gradient-to-b ${card.phoneBg} shadow-2xl overflow-hidden`}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-800 rounded-b-lg z-10" />

        {/* Screen content */}
        <div className="absolute inset-0 p-3 pt-7 flex flex-col gap-3">
          {/* App header */}
          <div className="flex justify-between items-center px-1">
            <div className="flex flex-col">
              <span className="text-[6px] text-slate-500 uppercase tracking-widest font-mono">
                {card.tag}
              </span>
              <span className="text-[8px] font-bold text-white">
                {card.phoneApp}
              </span>
            </div>
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: card.accentColor }}
            />
          </div>

          {/* Metric card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col gap-1.5">
            <span className="text-[7px] text-slate-400">Primary Metric</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-display text-white">
                {card.phoneMetric}
              </span>
              <span className="text-[8px] text-slate-500">
                {card.phoneUnit}
              </span>
            </div>
            <div className="h-5 flex items-end justify-around gap-0.5 pt-1">
              {[4, 8, 14, 6, 18, 10, 5, 12, 7].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["20%", `${h * 4}%`, "20%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.12,
                  }}
                  className="w-0.5 rounded-full"
                  style={{ backgroundColor: card.accentColor, height: "30%" }}
                />
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-between">
            <span className="text-[7px] text-slate-400">Status</span>
            <span
              className="text-[6px] font-bold px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${card.accentColor}15`,
                color: card.accentColor,
              }}
            >
              {card.phoneStatus}
            </span>
          </div>

          {/* Bottom nav */}
          <div className="mt-auto flex justify-around items-center pt-2 border-t border-white/5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === 1 ? "bg-white/40" : "bg-white/10"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating glow */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-4 rounded-[40px] blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${card.accentColor}20, transparent 70%)`,
        }}
      />
    </div>
  );
}

export function FeatureCardStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeTiltRef = useRef<HTMLDivElement | null>(null);

  // Mouse tilt handler for the active card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = activeTiltRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    gsap.to(card, {
      rotateY: xPct * 5,
      rotateX: -yPct * 5,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });

    // Dynamic shadow
    const shadowX = -xPct * 15;
    const shadowY = yPct * 15;
    gsap.to(card, {
      boxShadow: `${shadowX}px ${shadowY}px 40px rgba(123,47,247,0.15), 0 0 60px rgba(6,182,212,0.08)`,
      duration: 0.3,
      overwrite: "auto",
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = activeTiltRef.current;
    if (!card) return;
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!section || cards.length === 0) return;

    const numCards = cards.length;

    const ctx = gsap.context(() => {
      // Set initial states: only first card visible, rest hidden behind
      cards.forEach((card, i) => {
        gsap.set(card, {
          position: "absolute",
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
          rotateY: i === 0 ? 0 : 15,
          rotateX: 0,
          scale: i === 0 ? 1 : 0.85,
          autoAlpha: i === 0 ? 1 : 0,
          zIndex: numCards - i,
          x: i === 0 ? 0 : 200,
          transformPerspective: 1200,
          transformStyle: "preserve-3d",
        });
      });

      // Track active card for tilt
      activeTiltRef.current = cards[0];

      // Create the scroll-driven timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${numCards * 150}vh`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
        },
      });

      // Add initial pause so Card 1 is fully visible before scrolling away
      tl.to({}, { duration: 0.8 });

      // Transition between cards
      for (let i = 0; i < numCards - 1; i++) {
        const current = cards[i];
        const next = cards[i + 1];

        // Move current card to the left/back
        tl.to(
          current,
          {
            rotateY: -15,
            x: -200,
            scale: 0.85,
            autoAlpha: 0,
            zIndex: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          `card${i}`,
        );

        // Bring next card to center/active
        tl.to(
          next,
          {
            rotateY: 0,
            x: 0,
            scale: 1,
            autoAlpha: 1,
            zIndex: numCards,
            duration: 1.5,
            ease: "power2.inOut",
            onStart: () => {
              activeTiltRef.current = next;
            },
            onReverseComplete: () => {
              activeTiltRef.current = current;
            },
          },
          `card${i}`,
        );

        // Add a breathing pause between card transitions
        tl.to({}, { duration: 0.8 });
      }

      // Add final pause so the last card stays visible for a moment before unpinning
      tl.to({}, { duration: 0.8 });

      // Float the geometric symbols
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.utils.toArray<HTMLElement>(".geo-symbol").forEach((el) => {
          gsap.to(el, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-15, 15)",
            duration: "random(4, 7)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: parseFloat(el.dataset.delay || "0"),
          });
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-slate-50 overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Floating Geometric Symbols */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {MobileStack1.map((sym, i) => (
          <div
            key={i}
            className="geo-symbol absolute font-display select-none"
            data-delay={sym.delay}
            style={{
              left: sym.x,
              top: sym.y,
              fontSize: `${sym.size}px`,
              color: sym.color,
              willChange: "transform",
            }}
          >
            {sym.char}
          </div>
        ))}
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(123,47,247,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Section Header — Positioned in flow, not absolute */}
      <div className="relative z-20 text-center px-6 pt-16 pb-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
          Core Pillars
        </span>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-3">
          Mobile Core Capabilities
        </h2>
        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
          Our applications are engineered to meet strict enterprise performance
          requirements.
        </p>
      </div>

      {/* Card Stack Container — fills remaining viewport height below header */}
      <div
        ref={cardsContainerRef}
        className="relative w-full flex items-center justify-center"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          height: "calc(100vh - 200px)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {MobileStack2.map((card, idx) => {
          const IconComp = card.icon;
          return (
            <div
              key={idx}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              className="w-[90vw] max-w-[820px] rounded-3xl bg-white border border-slate-200/80 shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden will-change-transform cursor-default"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: Content */}
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  {/* Tag */}
                  <div className="flex items-center gap-2 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${card.accentColor}12` }}
                    >
                      <IconComp
                        className="w-5 h-5"
                        style={{ color: card.accentColor }}
                      />
                    </div>
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-widest"
                      style={{ color: card.accentColor }}
                    >
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4 leading-tight">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base leading-relaxed text-slate-500 mb-8 max-w-md">
                    {card.desc}
                  </p>

                  {/* Card progress indicator */}
                  <div className="flex items-center gap-3 mt-auto">
                    {MobileStack2.map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className="h-1 rounded-full transition-all duration-500"
                        style={{
                          width: dotIdx === idx ? "32px" : "8px",
                          backgroundColor:
                            dotIdx === idx ? card.accentColor : "#e2e8f0",
                        }}
                      />
                    ))}
                    <span className="text-xs text-slate-400 font-mono ml-auto">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(MobileStack2.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Right: Phone Mockup */}
                <div
                  className="relative flex items-center justify-center p-8 lg:p-12 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${card.gradientFrom}08, ${card.gradientTo}04)`,
                  }}
                >
                  {/* Soft background glow behind phone */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-3xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle, ${card.accentColor}15, transparent 70%)`,
                    }}
                  />
                  <FeaturePhoneMockup card={card} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
