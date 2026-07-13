import { useRef, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { ServiceCardProps } from "../types";

export function ServiceCard({
  icon,
  title,
  description,
  href,
  tag,
  elevated = false,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlowPosition({ x, y });

    // Tilt effect
    const tiltX = (y - 50) * 0.15;
    const tiltY = (x - 50) * -0.15;
    // Magnetic translation
    const translateX = (x - 50) * 0.1;
    const translateY = (y - 50) * 0.1;
    setTilt({ x: tiltX, y: tiltY });
    cardRef.current.style.setProperty("--tx", `${translateX}px`);
    cardRef.current.style.setProperty("--ty", `${translateY}px`);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    if (cardRef.current) {
      cardRef.current.style.setProperty("--tx", `0px`);
      cardRef.current.style.setProperty("--ty", `0px`);
    }
  };

  return (
    <Link
      ref={cardRef}
      to={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${elevated ? "glass-card-elevated" : "glass-card"
        } p-6 md:p-7 flex flex-col h-full group relative overflow-hidden transition-transform duration-300 ease-out`}
      style={
        {
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translate3d(var(--tx, 0), var(--ty, 0), 0)`,
        } as React.CSSProperties
      }
    >
      {/* Premium Glow Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(196, 160, 184, 0.15), transparent 40%)`,
        }}
      />
      {tag && (
        <span className="absolute top-5 right-6 font-display font-semibold text-[10px] text-text-accent uppercase tracking-wider bg-glass-2 px-2.5 py-0.5 rounded-full border border-border-1">
          {tag}
        </span>
      )}

      <div className="w-[44px] h-[44px] md:w-[48px] md:h-[48px] rounded-full bg-glass-2 border border-border-2 flex items-center justify-center text-text-accent mb-4 group-hover:scale-110 transition-transform duration-500 ease-out">
        {icon}
      </div>

      <h3 className="text-[18px] md:text-[20px] font-display font-semibold text-text-primary mb-2.5 leading-snug">
        {title}
      </h3>

      <p className="text-[14px] md:text-[15px] text-text-secondary mb-5 flex-1 leading-relaxed">
        {description}
      </p>

      <div className="flex items-center text-text-accent font-body font-semibold text-xs mt-auto">
        Explore
        <ArrowRight
          size={14}
          className="ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300"
        />
      </div>
    </Link>
  );
}
