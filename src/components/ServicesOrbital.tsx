import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Brain,
  Code,
  Paintbrush,
  GraduationCap,
} from "lucide-react";

const services = [
  { Icon: Globe, color: "#3B82F6", label: "Web", angle: 0 },
  { Icon: Smartphone, color: "#06B6D4", label: "Mobile", angle: 60 },
  { Icon: Brain, color: "#EC4899", label: "AI", angle: 120 },
  { Icon: Code, color: "#7B2FF7", label: "SaaS", angle: 180 },
  { Icon: Paintbrush, color: "#F59E0B", label: "Design", angle: 240 },
  { Icon: GraduationCap, color: "#10B981", label: "Intern", angle: 300 },
];

const r1 = 110; // inner orbit radius
const r2 = 175; // outer orbit radius

function polarToCartesian(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

export function ServicesOrbital() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Orbit rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-[#7B2FF7]/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute w-[350px] h-[350px] rounded-full border border-[#06B6D4]/10"
      />

      {/* Background glow */}
      <div className="absolute w-32 h-32 rounded-full bg-[#7B2FF7]/8 blur-3xl" />

      {/* Service nodes on orbits */}
      {services.map((svc, i) => {
        const inner = i % 2 === 0;
        const radius = inner ? r1 : r2;
        const pos = polarToCartesian(svc.angle, radius);
        const orbitDuration = inner ? 28 : 42;
        const orbitDir = inner ? 1 : -1;

        return (
          <motion.div
            key={svc.label}
            animate={{ rotate: 360 * orbitDir }}
            transition={{
              duration: orbitDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{ transformOrigin: "50% 50%" }}
          >
            {/* Node positioned at offset */}
            <motion.div
              animate={{ rotate: -360 * orbitDir }}
              transition={{
                duration: orbitDuration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${pos.x}px - 22px)`,
                top: `calc(50% + ${pos.y}px - 22px)`,
                transformOrigin: "22px 22px",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                className="w-11 h-11 rounded-xl bg-white shadow-lg border border-slate-100 flex items-center justify-center cursor-pointer"
                style={{ boxShadow: `0 4px 16px ${svc.color}20` }}
              >
                <svc.Icon size={18} style={{ color: svc.color }} />
              </motion.div>

              {/* Pulsing glow dot */}
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                className="absolute -inset-1 rounded-xl"
                style={{ background: `${svc.color}20` }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center hub */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-20 h-20 rounded-2xl bg-white shadow-xl border border-slate-100 flex flex-col items-center justify-center gap-1"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7B2FF7] to-[#9333EA] flex items-center justify-center">
          <Code size={16} className="text-white" />
        </div>
        <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider">
          Services
        </span>
      </motion.div>

      {/* Traveling data packets on orbits */}
      {[0, 120, 240].map((startAngle, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-2 h-2 rounded-full bg-[#7B2FF7]"
          style={{
            boxShadow: "0 0 8px #7B2FF7",
            offsetPath: `ellipse(${r1}px ${r1}px at 50% 50%)`,
          }}
          animate={{ rotate: [startAngle, startAngle + 360] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

// ── Service Card Thumbnail Images ──────────────────────────────────
export const SERVICE_THUMBNAILS: Record<string, string> = {
  websites:
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=200&fit=crop&auto=format",
  mobile:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&auto=format",
  saas: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&auto=format",
  ai: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=400&h=200&fit=crop&auto=format",
  uiux: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&auto=format",
  internship:
    "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=400&h=200&fit=crop&auto=format",
};

// ── Process Step Line ──────────────────────────────────────────────
export function ProcessStepLine() {
  const steps = ["Discover", "Design", "Build", "Launch"];
  return (
    <div className="relative flex items-center justify-between max-w-2xl mx-auto px-4 py-8">
      {/* Connecting line */}
      <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-[#7B2FF7]/20 via-[#7B2FF7]/60 to-[#7B2FF7]/20" />

      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative flex flex-col items-center gap-2 z-10"
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="w-10 h-10 rounded-full bg-white border-2 border-[#7B2FF7]/30 flex items-center justify-center shadow-md"
            style={{ boxShadow: "0 0 20px rgba(123,47,247,0.15)" }}
          >
            <span className="text-xs font-bold text-[#7B2FF7]">
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
          <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
            {step}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
