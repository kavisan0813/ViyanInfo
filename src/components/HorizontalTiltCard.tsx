import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  desc: string;
  tag: string;
  bg: string;
  tagColor: string;
  learnMoreColor: string;
  btnBg: string;
  btnDot: string;
  gradientBorder: string;
  path: string;
}

export function HorizontalTiltCard({
  service,
  idx,
}: {
  service: ServiceCard;
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: 8,
        rotateX: -4,
        scale: 1.03,
        y: -4,
        duration: 0.4,
        ease: "power2.out",
      });

      const glow = cardRef.current.querySelector(
        ".dynamic-glow",
      ) as HTMLElement;
      if (glow) {
        gsap.to(glow, { opacity: 0.5, duration: 0.4 });
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
      });

      const glow = cardRef.current.querySelector(
        ".dynamic-glow",
      ) as HTMLElement;
      if (glow) {
        gsap.to(glow, { opacity: 0, duration: 0.4 });
      }
    }
  };

  return (
    <div className="shrink-0" style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        className="service-card group w-full lg:w-[400px] h-full p-8 flex flex-col justify-between cursor-pointer"
      >
        {/* Dynamic Background Glow */}
        <div
          className="dynamic-glow absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none z-0 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${service.tagColor.replace("text-", "bg-").replace(/\[|\]/g, "")}30, transparent 70%)`,
          }}
        />

        {/* Gradient border pseudo-inset */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradientBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`}
        />

        <div
          className="relative z-20"
          style={{ transform: "translateZ(30px)" }}
        >
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
          >
            {service.icon}
          </div>
          <span
            className={`text-[10px] uppercase tracking-widest ${service.tagColor} font-bold font-mono`}
          >
            {service.tag}
          </span>
          <h3 className="text-2xl font-display font-bold text-[#0F172A] mt-2 mb-3">
            {service.title}
          </h3>
          <p className="text-[#475569] text-[15px] leading-relaxed mb-6">
            {service.desc}
          </p>
        </div>

        <div
          className="relative z-20 pt-4 border-t border-purple-500/10 flex items-center justify-between"
          style={{ transform: "translateZ(20px)" }}
        >
          <Link
            to={service.path}
            className={`text-sm font-semibold ${service.learnMoreColor} flex items-center gap-1 group-hover:gap-2 transition-all`}
          >
            Learn More{" "}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <div
            className={`w-8 h-8 rounded-full ${service.btnBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${service.btnDot}`}
            ></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
