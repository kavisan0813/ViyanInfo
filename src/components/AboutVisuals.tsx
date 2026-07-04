import { motion } from "framer-motion";

// ─────────────────────────────────────────
// 1. STATS SECTION BACKGROUND
// ─────────────────────────────────────────
export function AboutStatsBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
      {/* Office photo tinted */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-3xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&q=50)",
          opacity: 0.06,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FAF7FF]/95 to-[#FAF7FF]/90 rounded-3xl" />
      {/* Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="sg" width="32" height="32" patternUnits="userSpaceOnUse">
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="#7B2FF7"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sg)" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────
// 2. FOUNDER PHOTO HALO RING
//    Drop this around each founder <img> tag
// ─────────────────────────────────────────
export function FounderHalo({
  accentColor = "#7B2FF7",
  children,
}: {
  accentColor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative inline-block">
      {/* Outer animated gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full p-[3px]"
        style={{
          background: `conic-gradient(from 0deg, ${accentColor}, transparent 40%, ${accentColor}80 70%, transparent 100%)`,
        }}
      >
        <div className="w-full h-full rounded-full bg-[#FAF7FF]" />
      </motion.div>

      {/* Particle halo ring */}
      <svg
        className="absolute pointer-events-none"
        style={{
          inset: -12,
          width: "calc(100% + 24px)",
          height: "calc(100% + 24px)",
        }}
        viewBox="0 0 200 200"
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * 360;
          const rad = (angle * Math.PI) / 180;
          const cx = 100 + Math.cos(rad) * 90;
          const cy = 100 + Math.sin(rad) * 90;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              fill={accentColor}
              opacity="0.25"
            >
              <animate
                attributeName="opacity"
                values="0.1;0.5;0.1"
                dur="2.5s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values="2;4;2"
                dur="2.5s"
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}
      </svg>

      {/* Glow blob */}
      <div
        className="absolute inset-[-20%] rounded-full blur-2xl opacity-15 pointer-events-none"
        style={{ background: accentColor }}
      />

      {/* Content (the img) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const teamPhotos = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&auto=format",
    caption: "Sprint planning",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop&auto=format",
    caption: "Architecture review",
  },
  {
    src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=400&h=300&fit=crop&auto=format",
    caption: "Pair programming",
  },
];

export function TeamPhotoStrip() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
      {teamPhotos.map((photo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          whileHover={{ scale: 1.03, y: -4 }}
          className="flex-shrink-0 relative rounded-2xl overflow-hidden shadow-md border border-white/60"
          style={{ width: 220, height: 150 }}
        >
          <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <span className="absolute bottom-2 left-3 text-[9px] font-semibold text-white/90 tracking-wide">
            {photo.caption}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// 5. MISSION SECTION — animated orbit core
// ─────────────────────────────────────────
export function MissionOrbGlow({ color = "#7B2FF7" }: { color?: string }) {
  return (
    <>
      {/* Layered glow rings */}
      {[1.0, 1.3, 1.6].map((scale, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ border: `1px solid ${color}`, scale, opacity: 0.08 }}
          animate={{
            scale: [scale, scale + 0.05, scale],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </>
  );
}

// ─────────────────────────────────────────
// 6. PAGE HERO BACKGROUND TREATMENT
// ─────────────────────────────────────────
export function AboutHeroBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Top-right ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7B2FF7]/4 blur-3xl -translate-y-1/4 translate-x-1/4" />
      {/* Bottom-left ambient */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/4 blur-3xl translate-y-1/4 -translate-x-1/4" />

      {/* Faint dot grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="adots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="#7B2FF7" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#adots)" />
      </svg>
    </div>
  );
}
