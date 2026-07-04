import { useRef } from "react";
import { motion } from "framer-motion";
import "../styles/LiquidGlassCard.css";

/**
 * LiquidGlassCard
 * -----------------
 * Real Apple-style "Liquid Glass" surface — NOT flat backdrop-blur glassmorphism.
 * Uses an SVG feDisplacementMap to refract whatever sits behind the card,
 * plus a rotating specular highlight and an edge-light rim.
 *
 * Drop this around any footer column (Company / Links / Contact / Social)
 * inside LiquidFooter.tsx without touching existing footer markup.
 *
 * Usage:
 *   <LiquidGlassCard>
 *     <h4>Company</h4>
 *     <ul>...</ul>
 *   </LiquidGlassCard>
 */

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  /** brand accent driving the rim-light + specular tint. Defaults to your purple token. */
  accent?: string;
}

export const LiquidGlassCard = ({
  children,
  className = "",
  accent = "#7B2FF7",
}: LiquidGlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Subtle pointer-tracked tilt — reuses the same low-cost approach as your tilt3d util,
  // kept local here so this component has zero coupling to other utils.
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--px", `${px * 100}%`);
    el.style.setProperty("--py", `${py * 100}%`);
    el.style.setProperty("--rx", `${(py - 0.5) * -6}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 6}deg`);
  };

  const handlePointerLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`liquid-glass-card ${className}`}
      style={{ ["--accent" as string]: accent }}
    >
      {/* Distortion layer — this is what makes it "liquid" rather than blurred */}
      <svg className="liquid-glass-distortion" aria-hidden="true">
        <filter id="liquid-glass-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="liquid-glass-card__backdrop" />
      <div className="liquid-glass-card__specular" />
      <div className="liquid-glass-card__rim" />
      <div className="liquid-glass-card__content">{children}</div>
    </motion.div>
  );
};

export default LiquidGlassCard;
