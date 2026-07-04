import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

// ─── Background ───────────────────────────
export function WebBg() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        style={{
          background:
            "linear-gradient(160deg,#050E1A 0%,#0A1628 55%,#060D1C 100%)",
        }}
        className="absolute inset-0"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(6,182,212,.09) 0%,transparent 68%)",
        }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 68%)",
        }}
      />
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(123,47,247,.05) 0%,transparent 68%)",
        }}
      />
      {/* Blueprint grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="bg" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M40 0L0 0 0 40"
              fill="none"
              stroke="#06B6D4"
              strokeWidth=".5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg)" />
      </svg>
    </div>
  );
}

// ─── Code Rain Canvas ──────────────────────
export function CodeRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;
    const cols = Math.floor(c.width / 18);
    const drops = Array(cols).fill(1);
    const chars = "01アイウエ</>{}[]=>const async await";
    const id = setInterval(() => {
      ctx.fillStyle = "rgba(5,14,26,0.06)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "rgba(6,182,212,0.07)";
      ctx.font = "11px monospace";
      drops.forEach((y, i) => {
        ctx.fillText(
          chars[Math.floor(Math.random() * chars.length)],
          i * 18,
          y * 18,
        );
        if (y * 18 > c.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 90);
    return () => clearInterval(id);
  }, []);
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
    />
  );
}

// ─── Laptop Mockup Hero ────────────────────
export function LaptopMockup() {
  const [shimmer, setShimmer] = useState(false);
  useEffect(() => {
    const id = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 700);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full max-w-[540px] mx-auto select-none"
      aria-hidden
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[#06B6D4]/10 blur-3xl scale-75 translate-y-10" />
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div style={{ perspective: "1000px" }}>
          <div
            style={{
              transform: "rotateX(6deg) rotateY(-4deg)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Screen */}
            <div className="relative w-full aspect-[16/10] rounded-t-2xl border-[6px] border-[#1A2540] bg-[#0D1929] shadow-2xl overflow-hidden">
              {/* Browser bar */}
              <div className="bg-[#131F35] px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  {["#EF4444", "#EAB308", "#22C55E"].map((c) => (
                    <div
                      key={c}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ background: c }}
                    />
                  ))}
                </div>
                <div className="flex-1 bg-[#0D1929] rounded px-3 py-0.5 text-[9px] text-cyan-900 font-mono">
                  https://admin@viyaninfo.com
                </div>
                <div className="w-5 h-5 rounded bg-cyan-500/10 flex items-center justify-center">
                  <Monitor size={10} className="text-cyan-500" />
                </div>
              </div>
              {/* Dashboard content */}
              <div
                className="bg-[#0A1628] overflow-hidden relative"
                style={{ height: "calc(100% - 32px)" }}
              >
                {shimmer && (
                  <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                    className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent pointer-events-none"
                  />
                )}
                <motion.div
                  animate={{ y: [0, -100, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 3,
                  }}
                >
                  {/* Nav */}
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
                    <div className="w-14 h-2.5 rounded bg-cyan-500/20" />
                    <div className="flex gap-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-7 h-1.5 rounded bg-white/10"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-2 p-3">
                    {[
                      { v: "$48K", l: "Revenue", c: "#06B6D4" },
                      { v: "1.2K", l: "Users", c: "#7B2FF7" },
                      { v: "98%", l: "Uptime", c: "#10B981" },
                    ].map((s) => (
                      <div
                        key={s.l}
                        className="rounded-lg p-2 border border-white/5"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                      >
                        <div
                          className="text-sm font-black mb-0.5"
                          style={{ color: s.c }}
                        >
                          {s.v}
                        </div>
                        <div className="text-[7px] text-slate-600">{s.l}</div>
                      </div>
                    ))}
                  </div>
                  {/* Chart */}
                  <div className="px-3 pb-2">
                    <div
                      className="rounded-lg p-2 border border-white/5"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="h-14 flex items-end gap-0.5 px-1 pb-1">
                        {[35, 55, 40, 75, 50, 90, 65, 80, 60, 95, 70, 88].map(
                          (h, i) => (
                            <div
                              key={i}
                              className="flex-1 rounded-sm"
                              style={{
                                height: `${h}%`,
                                background: `linear-gradient(to top,#06B6D4,#7B2FF780)`,
                                opacity: 0.7 + i * 0.02,
                              }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Table */}
                  {[1, 2, 3, 4].map((r) => (
                    <div
                      key={r}
                      className="flex items-center gap-2 px-3 py-1.5 border-t border-white/4"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/8" />
                      <div className="flex-1 h-1.5 rounded bg-white/8" />
                      <div className="w-10 h-1.5 rounded bg-cyan-500/20" />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
            {/* Keyboard */}
            <div
              className="w-[106%] -ml-[3%] h-3 rounded-b-xl"
              style={{
                background: "linear-gradient(90deg,#1A2540,#243050,#1A2540)",
              }}
            />
            <div className="w-[18%] h-1 mx-auto rounded-b bg-black/40" />
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      {[
        {
          label: "98 Perf Score",
          color: "#10B981",
          x: -20,
          y: "25%",
          delay: 0,
        },
        {
          label: "Core Vitals ✓",
          color: "#06B6D4",
          x: -20,
          y: "60%",
          delay: 0.8,
        },
        {
          label: "TypeScript",
          color: "#3B82F6",
          x: "auto",
          y: "20%",
          delay: 1.2,
          right: -20,
        },
        {
          label: "GSAP Animated",
          color: "#7B2FF7",
          x: "auto",
          y: "58%",
          delay: 1.8,
          right: -20,
        },
      ].map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: b.right ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: b.delay + 0.5, duration: 0.5 }}
          style={{
            position: "absolute",
            top: b.y,
            [b.right ? "right" : "left"]: b.right ?? b.x,
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap text-[9px] font-semibold"
            style={{
              background: "rgba(10,22,40,0.9)",
              border: `1px solid ${b.color}40`,
              backdropFilter: "blur(12px)",
              color: b.color,
              boxShadow: `0 4px 16px ${b.color}20`,
            }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: b.color }}
            />
            {b.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
