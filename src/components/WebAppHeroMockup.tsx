import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// ── Web App Page — Hero Laptop Mockup ─────────────────────────────
export function WebAppHeroMockup() {
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full max-w-[520px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* Glow behind laptop */}
      <div className="absolute inset-0 bg-[#7B2FF7]/10 blur-3xl rounded-full scale-75 translate-y-8" />

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Laptop lid/screen */}
        <div
          className="relative w-full"
          style={{
            transform: "rotateX(6deg) rotateY(-4deg)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Screen bezel */}
          <div className="relative w-full aspect-[16/10] bg-[#1a1a1f] rounded-t-2xl border-[6px] border-[#2A2A32] shadow-2xl overflow-hidden">
            {/* Browser chrome */}
            <div className="bg-[#242428] px-3 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 bg-[#1a1a1f] rounded px-3 py-0.5 text-[9px] text-slate-500 font-mono">
                https://yourdomain.com
              </div>
            </div>

            {/* Screen content — scrolling dashboard */}
            <div
              className="bg-[#fafafa] overflow-hidden relative"
              style={{ height: "calc(100% - 28px)" }}
            >
              {/* Shimmer overlay */}
              {shimmer && (
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                />
              )}

              {/* Simulated scrolling content */}
              <motion.div
                animate={{ y: [0, -120, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2,
                }}
              >
                {/* Navbar */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-slate-100">
                  <div className="w-16 h-3 rounded bg-[#7B2FF7]/20" />
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-2 rounded bg-slate-200" />
                    ))}
                  </div>
                </div>

                {/* Hero banner */}
                <div className="bg-gradient-to-br from-[#7B2FF7]/10 to-[#3B82F6]/5 px-4 py-4">
                  <div className="w-3/4 h-4 rounded bg-[#7B2FF7]/20 mb-2" />
                  <div className="w-1/2 h-3 rounded bg-slate-200 mb-3" />
                  <div className="w-16 h-6 rounded-lg bg-[#7B2FF7]/30" />
                </div>

                {/* Cards row */}
                <div className="flex gap-2 px-4 py-3">
                  {["#7B2FF7", "#3B82F6", "#10B981"].map((color, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-lg p-2 border border-slate-100"
                      style={{ background: `${color}08` }}
                    >
                      <div
                        className="w-full h-2 rounded mb-1"
                        style={{ background: `${color}30` }}
                      />
                      <div className="w-2/3 h-1.5 rounded bg-slate-200" />
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="px-4 py-2">
                  <div className="w-1/3 h-2 rounded bg-slate-200 mb-2" />
                  <div className="h-16 bg-slate-50 rounded-lg border border-slate-100 flex items-end px-2 pb-2 gap-1">
                    {[60, 80, 45, 90, 70, 85, 65, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h * 0.6}%`,
                          background: `linear-gradient(to top, #7B2FF7, #9333EA80)`,
                          opacity: 0.7 + i * 0.03,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Table rows */}
                {[1, 2, 3, 4].map((row) => (
                  <div
                    key={row}
                    className="flex items-center gap-3 px-4 py-2 border-b border-slate-50"
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-100" />
                    <div className="flex-1 h-2 rounded bg-slate-100" />
                    <div className="w-12 h-2 rounded bg-[#7B2FF7]/20" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Keyboard base */}
          <div className="w-[106%] -ml-[3%] h-3 bg-gradient-to-r from-[#2A2A32] via-[#3a3a42] to-[#2A2A32] rounded-b-xl shadow-lg border-t border-white/5" />
          <div className="w-[20%] h-1 bg-black/50 mx-auto rounded-b-sm" />
        </div>
      </motion.div>

      {/* Floating performance badge */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute -right-4 top-1/4"
      >
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
            <span className="text-sm font-black text-emerald-600">98</span>
          </div>
          <div>
            <div className="text-[9px] font-bold text-slate-700">
              Lighthouse
            </div>
            <div className="text-[8px] text-emerald-600 font-semibold">
              Performance
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating speed badge */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute -left-4 bottom-1/3"
      >
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-[#7B2FF7] animate-pulse" />
          <div>
            <div className="text-[9px] font-bold text-slate-700">
              Core Web Vitals
            </div>
            <div className="text-[8px] text-[#7B2FF7] font-semibold">
              All green ✓
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ── Tech Stack Logo Grid ───────────────────────────────────────────
const techStack = [
  { name: "React", color: "#61DAFB", bg: "#61DAFB15" },
  { name: "Next.js", color: "#000000", bg: "#00000008" },
  { name: "TypeScript", color: "#3178C6", bg: "#3178C615" },
  { name: "Tailwind", color: "#06B6D4", bg: "#06B6D415" },
  { name: "GSAP", color: "#88CE02", bg: "#88CE0215" },
  { name: "Three.js", color: "#7B2FF7", bg: "#7B2FF715" },
  { name: "Framer", color: "#FF0055", bg: "#FF005515" },
  { name: "Vite", color: "#BD34FE", bg: "#BD34FE15" },
];

export function TechStackGrid() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {techStack.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          whileHover={{ scale: 1.08, y: -3 }}
          className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-slate-100 cursor-default"
          style={{ background: tech.bg }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
            style={{ background: `${tech.color}20`, color: tech.color }}
          >
            {tech.name.slice(0, 2)}
          </div>
          <span className="text-[9px] font-semibold text-slate-500">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ── Code Rain Background ───────────────────────────────────────────
export function CodeRainBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);
    const cols = Math.floor(W / 18);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエオカキクケコ</>{}[]";

    const draw = () => {
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = "rgba(123,47,247,0.08)";
      ctx.font = "12px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 18, y * 18);
        if (y * 18 > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const id = setInterval(draw, 80);
    return () => clearInterval(id);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
    />
  );
}
