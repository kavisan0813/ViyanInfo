import { motion } from "framer-motion";
import {
  TrendingUp,
  BookOpen,
  Cpu,
  Users,
  Zap,
  Coffee,
  Globe,
  Award,
} from "lucide-react";

// ─────────────────────────────────────────
// 1. HERO SPLIT — RIGHT SIDE WORKPLACE IMAGE
// ─────────────────────────────────────────
export function CareersHeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-[480px] mx-auto"
    >
      {/* Main image */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/60">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=560&fit=crop&auto=format"
          alt="Developer team collaborating"
          className="w-full object-cover"
          style={{ height: 340 }}
        />
        {/* Dark tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/50 via-transparent to-transparent" />

        {/* Bottom badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 px-4 py-3 flex items-center justify-between">
            <div>
              <div className="text-[9px] text-white/60 font-mono uppercase tracking-wider">
                Open Positions
              </div>
              <div className="text-lg font-bold text-white">4 Roles</div>
            </div>
            <div className="flex -space-x-2">
              {["#7B2FF7", "#3B82F6", "#10B981", "#EC4899"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center text-white text-[9px] font-bold"
                  style={{ background: c }}
                >
                  {["FE", "BE", "PY", "UX"][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 flex items-center gap-2"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center">
          <TrendingUp size={14} className="text-emerald-600" />
        </div>
        <div>
          <div className="text-[9px] text-slate-400">Growth Rate</div>
          <div className="text-sm font-bold text-slate-800">+240% YoY</div>
        </div>
      </motion.div>

      {/* Floating culture chip */}
      <motion.div
        animate={{ y: [6, -6, 6] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-3 -left-4 bg-white rounded-xl shadow-md border border-slate-100 px-3 py-2 flex items-center gap-1.5"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#7B2FF7] animate-pulse" />
        <span className="text-[10px] font-semibold text-slate-600">
          Hybrid friendly
        </span>
      </motion.div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// 2. LIFE AT VIYAN — PHOTO COLLAGE STRIP
// ─────────────────────────────────────────
const lifePhotos = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=280&fit=crop&auto=format",
    label: "Team standup",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=280&fit=crop&auto=format",
    label: "Code review",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&h=280&fit=crop&auto=format",
    label: "Pair programming",
    span: true,
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=280&fit=crop&auto=format",
    label: "Office workspace",
    span: false,
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop&auto=format",
    label: "Sprint retro",
    span: false,
  },
];

export function LifeAtViyanStrip() {
  return (
    <div className="flex gap-3 overflow-x-auto pb-3 hide-scrollbar">
      {lifePhotos.map((photo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ scale: 1.04, y: -4 }}
          className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-white/60 cursor-pointer group"
          style={{ width: photo.span ? 280 : 200, height: 160 }}
        >
          <img
            src={photo.src}
            alt={photo.label}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-3 text-[9px] font-semibold text-white/90 tracking-wide uppercase">
            {photo.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// 3. BENEFIT CARDS WITH FLOATING ICON ANIM
// ─────────────────────────────────────────
const benefitExtras = [
  {
    key: "Growth",
    floatIcon: TrendingUp,
    color: "#10B981",
    sparks: ["Promotions", "+30% salary", "L&D budget"],
  },
  {
    key: "Learning",
    floatIcon: BookOpen,
    color: "#3B82F6",
    sparks: ["Certifications", "Workshops", "Tech talks"],
  },
  {
    key: "Innovation",
    floatIcon: Cpu,
    color: "#7B2FF7",
    sparks: ["Hack weeks", "OSS contrib", "Side projects"],
  },
  {
    key: "Collaboration",
    floatIcon: Users,
    color: "#06B6D4",
    sparks: ["Hybrid hours", "Team events", "Direct access"],
  },
];

export function BenefitFloatIcon({ benefitKey }: { benefitKey: string }) {
  const extra = benefitExtras.find((b) => b.key === benefitKey);
  if (!extra) return null;
  const Icon = extra.floatIcon;

  return (
    <div className="relative h-16 flex items-center justify-center mb-2">
      {/* Abstract floating shape */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-md"
        style={{
          background: `linear-gradient(135deg, ${extra.color}20, ${extra.color}10)`,
          border: `1px solid ${extra.color}30`,
        }}
      >
        <Icon size={22} style={{ color: extra.color }} />
      </motion.div>

      {/* Orbiting micro-dots */}
      {[0, 120, 240].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const ox = Math.cos(rad) * 28;
        const oy = Math.sin(rad) * 14;
        return (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 6 + i, repeat: Infinity, ease: "linear" }}
            className="absolute"
            style={{ transformOrigin: "center", top: "50%", left: "50%" }}
          >
            <div
              className="absolute rounded-full"
              style={{
                width: 6,
                height: 6,
                background: extra.color,
                opacity: 0.3,
                left: ox - 3,
                top: oy - 3,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────
// 4. ADDITIONAL PERKS ICONS ROW
// ─────────────────────────────────────────
const perks = [
  { Icon: Coffee, label: "Snacks & Coffee", color: "#F59E0B" },
  { Icon: Globe, label: "Remote Options", color: "#3B82F6" },
  { Icon: Award, label: "Certification Fund", color: "#7B2FF7" },
  { Icon: Zap, label: "Fast Promotions", color: "#10B981" },
];

export function PerksRow() {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {perks.map((perk, i) => (
        <motion.div
          key={perk.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          whileHover={{ scale: 1.08, y: -3 }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-100 shadow-sm cursor-default"
          style={{ boxShadow: `0 4px 16px ${perk.color}12` }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: `${perk.color}15` }}
          >
            <perk.Icon size={14} style={{ color: perk.color }} />
          </div>
          <span className="text-xs font-semibold text-slate-600">
            {perk.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// 5. CAREERS PAGE HERO BACKGROUND
// ─────────────────────────────────────────
export function CareersHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#7B2FF7]/4 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/4 blur-3xl translate-y-1/3 -translate-x-1/4" />
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="cg" width="36" height="36" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.8" fill="#7B2FF7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cg)" />
      </svg>
    </div>
  );
}
