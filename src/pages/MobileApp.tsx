import { useRef, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Smartphone,
  ShieldAlert,
  Zap,
  Layers,
  Cpu,
  Database,
  ArrowRight,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import { Link } from "react-router-dom";
import { LiquidFooter } from "../components/LiquidFooter";
import mobileappImg from "../assets/mobileapp_img.webp";
import { Bell, Star, MapPin, CreditCard, Heart, Wifi } from "lucide-react";

// ─────────────────────────────────────────
// BACKGROUND BLOBS
// ─────────────────────────────────────────
function MobileBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg,#0A0718 0%,#0D0B1A 50%,#050B18 100%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(123,47,247,.12) 0%,transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(6,182,212,.08) 0%,transparent 70%)",
        }}
      />
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle,rgba(236,72,153,.06) 0%,transparent 70%)",
        }}
      />
      {/* Curved SVG blob shapes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7B2FF7" stopOpacity=".8" />
            <stop offset="100%" stopColor="#7B2FF7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="1100" cy="200" rx="400" ry="300" fill="url(#blob1)" />
        <ellipse
          cx="300"
          cy="700"
          rx="350"
          ry="250"
          fill="url(#blob1)"
          opacity=".6"
        />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────
// PHONE FRAME COMPONENT
// ─────────────────────────────────────────
function PhoneFrame({
  rotate = 0,
  delay = 0,
  scale = 1,
  z = 0,
  screen,
}: {
  rotate?: number;
  delay?: number;
  scale?: number;
  z?: number;
  screen: React.ReactNode;
}) {
  return (
    <motion.div
      style={{ rotate, scale, zIndex: z }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className="relative"
    >
      <div
        className="relative rounded-[32px] border-[6px] border-[#1F1F2E] bg-[#1F1F2E] shadow-2xl overflow-hidden"
        style={{
          width: 132,
          height: 272,
          boxShadow: `0 32px 80px rgba(0,0,0,.5),0 0 40px rgba(123,47,247,.15)`,
        }}
      >
        {/* Dynamic island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20" />
        {/* Screen */}
        <div className="w-full h-full rounded-[26px] overflow-hidden">
          {screen}
        </div>
      </div>
    </motion.div>
  );
}

const FinanceScreen = () => (
  <div className="h-full bg-gradient-to-b from-[#1A0535] to-[#120325] p-3 pt-6">
    <div className="text-[7px] text-purple-300 mb-0.5">Portfolio</div>
    <div className="text-[14px] font-black text-white mb-1">$24,831</div>
    <div className="text-[7px] text-emerald-400 mb-3">▲ 12.4% this month</div>
    <div className="bg-white/10 rounded-xl p-2 mb-2">
      <div className="flex items-end gap-0.5 h-10">
        {[40, 60, 45, 80, 55, 90, 70, 85, 65, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: `rgba(139,92,246,${0.5 + i * 0.04})`,
            }}
          />
        ))}
      </div>
    </div>
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="flex items-center gap-1.5 py-1 border-t border-white/10"
      >
        <div className="w-4 h-4 rounded-full bg-white/20" />
        <div className="flex-1 h-1 rounded bg-white/15" />
        <div className="w-5 h-1 rounded bg-purple-400/40" />
      </div>
    ))}
  </div>
);

const SocialScreen = () => (
  <div className="h-full bg-white pt-6">
    <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
      <div className="w-12 h-2 rounded bg-[#7B2FF7]/20" />
      <div className="flex gap-1">
        <div className="w-4 h-4 rounded bg-slate-100" />
        <div className="w-4 h-4 rounded bg-slate-100" />
      </div>
    </div>
    <div className="flex gap-2 px-3 py-2">
      {["#7B2FF7", "#3B82F6", "#EC4899", "#10B981"].map((c, i) => (
        <div
          key={i}
          className="flex-shrink-0 flex flex-col items-center gap-0.5"
        >
          <div
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            style={{ background: c, opacity: 0.7 }}
          />
          <div className="w-5 h-1 rounded bg-slate-200" />
        </div>
      ))}
    </div>
    {[1, 2].map((i) => (
      <div
        key={i}
        className="mx-3 mb-2 rounded-xl border border-slate-100 overflow-hidden"
      >
        <div className="h-12 bg-gradient-to-r from-purple-50 to-blue-50" />
        <div className="p-1.5 flex items-center justify-between">
          <div className="w-2/3 h-1.5 rounded bg-slate-200" />
          <div className="flex items-center gap-0.5">
            <Heart size={8} className="text-red-400 fill-red-400" />
            <span className="text-[7px] text-slate-400">24</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const EcomScreen = () => (
  <div className="h-full bg-[#F8F5FF] pt-6">
    <div className="px-3 mb-2">
      <div className="bg-white rounded-lg px-2 py-1 text-[7px] text-slate-400 border border-slate-100">
        🔍 Search...
      </div>
    </div>
    <div className="grid grid-cols-2 gap-1.5 px-3">
      {[
        { c: "#7B2FF7", p: "$29" },
        { c: "#3B82F6", p: "$45" },
        { c: "#10B981", p: "$18" },
        { c: "#EC4899", p: "$67" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-xl overflow-hidden border border-slate-100"
        >
          <div
            className="h-10 flex items-center justify-center"
            style={{ background: `${item.c}15` }}
          >
            <div
              className="w-6 h-6 rounded-lg"
              style={{ background: `${item.c}30` }}
            />
          </div>
          <div className="p-1.5">
            <div className="w-full h-1 rounded bg-slate-100 mb-1" />
            <div className="text-[8px] font-bold" style={{ color: item.c }}>
              {item.p}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const chips = [
  { Icon: Bell, label: "Push notif", color: "#7B2FF7", x: -55, y: 60, d: 0 },
  { Icon: Star, label: "4.9 rating", color: "#F59E0B", x: 310, y: 40, d: 1 },
  { Icon: MapPin, label: "Live GPS", color: "#10B981", x: -65, y: 190, d: 0.7 },
  {
    Icon: CreditCard,
    label: "Payments",
    color: "#3B82F6",
    x: 305,
    y: 210,
    d: 1.4,
  },
  { Icon: Heart, label: "Wishlist", color: "#EC4899", x: 120, y: -25, d: 2 },
  {
    Icon: Wifi,
    label: "Offline sync",
    color: "#06B6D4",
    x: 10,
    y: 320,
    d: 1.8,
  },
];

function PhoneClusterHero() {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ height: 380, width: "100%", maxWidth: 480 }}
      aria-hidden
    >
      {/* Background blob */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-72 h-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle,rgba(123,47,247,.15) 0%,rgba(6,182,212,.08) 60%,transparent 100%)",
          }}
        />
      </div>
      {/* SVG curved blobs behind phones */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
        viewBox="0 0 480 380"
      >
        <ellipse
          cx="240"
          cy="200"
          rx="220"
          ry="140"
          fill="none"
          stroke="rgba(123,47,247,.2)"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
        <ellipse
          cx="240"
          cy="200"
          rx="170"
          ry="100"
          fill="none"
          stroke="rgba(6,182,212,.15)"
          strokeWidth="1"
        />
      </svg>
      {/* Left phone */}
      <div
        className="absolute"
        style={{ left: 10, top: "50%", transform: "translateY(-50%)" }}
      >
        <PhoneFrame
          rotate={-13}
          delay={1.2}
          scale={0.84}
          z={1}
          screen={<SocialScreen />}
        />
      </div>
      {/* Center phone */}
      <div className="relative" style={{ zIndex: 3 }}>
        <PhoneFrame
          rotate={0}
          delay={0}
          scale={1}
          z={3}
          screen={<FinanceScreen />}
        />
        {/* Glow under center phone */}
        <div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 rounded-full blur-2xl"
          style={{ background: "rgba(123,47,247,.4)" }}
        />
      </div>
      {/* Right phone */}
      <div
        className="absolute"
        style={{ right: 10, top: "50%", transform: "translateY(-50%)" }}
      >
        <PhoneFrame
          rotate={13}
          delay={2.4}
          scale={0.84}
          z={1}
          screen={<EcomScreen />}
        />
      </div>
      {/* Floating chips */}
      {chips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: chip.d * 0.4 + 0.5 }}
          style={{ position: "absolute", left: chip.x, top: chip.y + 80 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + chip.d * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.d,
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl whitespace-nowrap text-[9px] font-semibold"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: `1px solid ${chip.color}30`,
              backdropFilter: "blur(12px)",
              color: "rgba(255,255,255,0.85)",
              boxShadow: `0 4px 16px ${chip.color}20`,
            }}
          >
            <chip.Icon size={10} style={{ color: chip.color }} />
            {chip.label}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

function AppStoreBadges() {
  return (
    <div className="flex gap-3 flex-wrap">
      {[
        {
          store: "App Store",
          sub: "Download on the",
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          ),
        },
        {
          store: "Google Play",
          sub: "Get it on",
          icon: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path
                fill="#EA4335"
                d="M1.22 0L13.2 12 1.22 24C.55 23.65.1 22.95.1 22.1V1.9C.1 1.05.55.35 1.22 0z"
              />
              <path fill="#FBBC04" d="M17.1 8.05L4.4.35l8.8 11.65 3.9-3.95z" />
              <path
                fill="#4285F4"
                d="M21.15 10.4c.5.28.85.8.85 1.6s-.35 1.3-.85 1.6L17.1 15.9 13 12l4.1-3.95 4.05 2.35z"
              />
              <path
                fill="#34A853"
                d="M4.4 23.65l12.7-7.75-3.9-3.9L4.4 23.65z"
              />
            </svg>
          ),
        },
      ].map((b) => (
        <motion.div
          key={b.store}
          whileHover={{ scale: 1.05, y: -2 }}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            backdropFilter: "blur(12px)",
          }}
        >
          {b.icon}
          <div>
            <div className="text-[7px] text-white/50">{b.sub}</div>
            <div className="text-[11px] font-bold text-white leading-tight">
              {b.store}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

interface BlobProps {
  color: string;
  size: number;
  x: string;
  y: string;
  delay?: number;
  dur?: number;
}

/* ── Liquid blob ─────────────────────────────────────────────────── */
function Blob({ color, size, x, y, delay = 0, dur = 8 }: BlobProps) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none mix-blend-multiply"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: "blur(90px)",
        opacity: 0.17,
      }}
      animate={{
        borderRadius: [
          "50% 50% 50% 50%",
          "62% 38% 56% 44%",
          "44% 56% 38% 62%",
          "56% 44% 62% 38%",
          "50% 50% 50% 50%",
        ],
        scale: [1, 1.14, 0.96, 1.07, 1],
        x: [0, 28, -20, 14, 0],
        y: [0, -20, 32, -10, 0],
      }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function BlobBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {children}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(1px)",
          background: "rgba(248,247,255,.87)",
        }}
      />
    </div>
  );
}

const TECH = [
  { n: "React Native", c: "#61DAFB" },
  { n: "Expo", c: "#000000" },
  { n: "TypeScript", c: "#3178C6" },
  { n: "Firebase", c: "#FFA000" },
  { n: "Redux Toolkit", c: "#764ABC" },
  { n: "Stripe", c: "#635BFF" },
  { n: "Fastlane", c: "#E74430" },
  { n: "Jest", c: "#C21325" },
];

interface AlternatingFeatureProps {
  title: string;
  desc: string;
  tag: string;
  Icon: React.ComponentType<{ size?: number }>;
  reverse?: boolean;
  color: string;
  screen: React.ReactNode;
  badges?: string[];
}

function AlternatingFeature({
  title,
  desc,
  tag,
  Icon,
  reverse,
  color,
  screen,
  badges,
}: AlternatingFeatureProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} gap-12 lg:gap-20 items-center py-16`}
    >
      <div className="w-full lg:w-1/2">
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6"
          style={{
            background: `${color}15`,
            color: color,
            border: `1px solid ${color}30`,
          }}
        >
          <Icon size={14} /> {tag}
        </span>
        <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-slate-500 mb-8 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {badges?.map((b: string) => (
            <span
              key={b}
              className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-500 shadow-sm"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
          }}
        />
        <PhoneFrame rotate={reverse ? 5 : -5} scale={1} z={1} screen={screen} />
      </div>
    </div>
  );
}

// =====================================================
// Feature Data
// =====================================================
const featureCards = [
  {
    title: "Fast Performance",
    desc: "High frame-rate render loops, hardware accelerations, and optimized caching engines that keep your app running at 60fps.",
    accentColor: "#06B6D4",
    gradientFrom: "#06B6D4",
    gradientTo: "#3B82F6",
    tag: "SPEED",
    icon: Zap,
    phoneBg: "from-cyan-900 to-slate-900",
    phoneApp: "Performance Monitor",
    phoneMetric: "60",
    phoneUnit: "FPS",
    phoneStatus: "Stable",
  },
  {
    title: "Secure Architecture",
    desc: "Native biometric locks (FaceID/TouchID), encrypted local keychains, and secure SSL API hooks for enterprise-grade protection.",
    accentColor: "#7B2FF7",
    gradientFrom: "#7B2FF7",
    gradientTo: "#EC4899",
    tag: "SECURITY",
    icon: ShieldAlert,
    phoneBg: "from-purple-900 to-slate-900",
    phoneApp: "Security Shield",
    phoneMetric: "256",
    phoneUnit: "BIT",
    phoneStatus: "Encrypted",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Offline-first databases (SQLite), automatic sync queues, and seamless scaling integrations that grow with your user base.",
    accentColor: "#EC4899",
    gradientFrom: "#EC4899",
    gradientTo: "#F59E0B",
    tag: "SCALE",
    icon: Database,
    phoneBg: "from-pink-900 to-slate-900",
    phoneApp: "Data Sync Engine",
    phoneMetric: "99.9",
    phoneUnit: "%",
    phoneStatus: "Synced",
  },
];

// =====================================================
// Floating geometric background symbols
// =====================================================
const geoSymbols = [
  {
    char: "✦",
    x: "8%",
    y: "15%",
    size: 20,
    delay: 0,
    color: "rgba(123,47,247,0.12)",
  },
  {
    char: "○",
    x: "85%",
    y: "20%",
    size: 28,
    delay: 1.2,
    color: "rgba(6,182,212,0.10)",
  },
  {
    char: "◇",
    x: "12%",
    y: "75%",
    size: 22,
    delay: 0.6,
    color: "rgba(236,72,153,0.10)",
  },
  {
    char: "△",
    x: "90%",
    y: "70%",
    size: 18,
    delay: 1.8,
    color: "rgba(6,182,212,0.08)",
  },
  {
    char: "✦",
    x: "50%",
    y: "10%",
    size: 14,
    delay: 0.3,
    color: "rgba(123,47,247,0.08)",
  },
  {
    char: "○",
    x: "75%",
    y: "85%",
    size: 16,
    delay: 2.2,
    color: "rgba(236,72,153,0.07)",
  },
  {
    char: "◇",
    x: "25%",
    y: "90%",
    size: 24,
    delay: 1.5,
    color: "rgba(123,47,247,0.09)",
  },
  {
    char: "△",
    x: "60%",
    y: "5%",
    size: 20,
    delay: 0.9,
    color: "rgba(6,182,212,0.06)",
  },
];

// =====================================================
// Mini phone mockup for each card
// =====================================================
function FeaturePhoneMockup({ card }: { card: (typeof featureCards)[0] }) {
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

// =====================================================
// FeatureCardStack Component — Scroll-Pinned 3D Card Stack
// =====================================================
function FeatureCardStack() {
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
        {geoSymbols.map((sym, i) => (
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
        {featureCards.map((card, idx) => {
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
                    {featureCards.map((_, dotIdx) => (
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
                      {String(featureCards.length).padStart(2, "0")}
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

export default function MobileApp() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden relative">
      <MobileBg />
      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-16">
        <div className="container max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6"
                style={{
                  background: "rgba(123,47,247,.12)",
                  border: "1px solid rgba(123,47,247,.3)",
                  color: "#A78BFA",
                }}
              >
                <Smartphone size={11} /> Mobile App Development
              </span>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-[1.1] tracking-tight mb-5">
                <span className="text-white" style={{ color: "#ffffff" }}>
                  Apps That Feel
                </span>{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#7B2FF7,#06B6D4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Native & Fast
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                Cross-platform iOS & Android apps built with React Native. Fluid
                animations, offline-first architecture, and production-grade
                security.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="px-7 py-3.5 rounded-full text-sm font-bold text-white cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg,#7B2FF7,#9333EA)",
                      boxShadow: "0 0 32px rgba(123,47,247,.4)",
                    }}
                  >
                    Start Your App →
                  </motion.button>
                </Link>
              </div>
              <AppStoreBadges />
            </motion.div>
            {/* Right — phone cluster */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <PhoneClusterHero />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PLATFORMS SECTION (iOS, Android, Cross-Platform) */}
      <section className="relative z-10 py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Native & Cross-Platform Development
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              We compile reliable mobile stacks targeted for native execution.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <AlternatingFeature
              title="Native iOS Applications"
              desc="Highly secure Apple iOS applications built using Swift and following strict Apple HIG guidelines for smooth store approvals. We deliver fluid animations and deep OS integrations."
              tag="iOS Development"
              Icon={Smartphone}
              color="#06B6D4"
              reverse={false}
              screen={<FinanceScreen />}
              badges={["Swift", "Apple App Store", "Cocoa Touch", "Core Data"]}
            />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <AlternatingFeature
              title="Native Android Apps"
              desc="Performant Android apps built using Kotlin, featuring robust hardware integrations, offline-first architectures, and strict adherence to Material Design metrics."
              tag="Android Development"
              Icon={Cpu}
              color="#10B981"
              reverse={true}
              screen={<EcomScreen />}
              badges={["Kotlin", "Google Play", "Gradle", "Jetpack Compose"]}
            />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            <AlternatingFeature
              title="Cross-Platform Solutions"
              desc="Single codebase systems built with React Native or Flutter, delivering 95% native performance across iOS and Android while reducing time-to-market and maintenance costs."
              tag="Cross-Platform"
              Icon={Layers}
              color="#7B2FF7"
              reverse={false}
              screen={<SocialScreen />}
              badges={["React Native", "Flutter", "Expo", "Single Codebase"]}
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION — Lusion-Style Scroll Storytelling Card Stack */}
      <FeatureCardStack />

      {/* APP SHOWCASE */}
      <section className="relative z-10 py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Mobile App Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Explore custom mobile products built and deployed by our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Healthcare Apps",
                desc: "Telehealth portals, patient trackers, and prescription management tools with biometric locks.",
                tag: "ViyanHealth Sync",
                glowColor: "rgba(6, 182, 212, 0.08)",
              },
              {
                title: "Business Apps",
                desc: "ERP companion applications, secure reporting panels, and visual field-data trackers.",
                tag: "Enterprise Portal",
                glowColor: "rgba(123, 47, 247, 0.08)",
              },
              {
                title: "Customer Apps",
                desc: "Client-facing portals, subscription platforms, and automated chat messaging clients.",
                tag: "SaaS Mobile Hub",
                glowColor: "rgba(236, 72, 153, 0.08)",
              },
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 40px ${app.glowColor}`,
                }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 relative group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    {app.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#06B6D4] transition-colors duration-200">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                    {app.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="relative py-20 overflow-hidden">
        <BlobBg>
          <Blob color="#7B2FF7" size={400} x="65%" y="-5%" delay={1} dur={11} />
          <Blob color="#06B6D4" size={320} x="-5%" y="50%" delay={3} dur={9} />
        </BlobBg>
        <div className="container max-w-[900px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Mobile Tech Stack
          </h2>
          <p className="text-slate-400 text-sm mb-10">
            Everything needed to ship to the App Store and Google Play.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH.map((t, i) => (
              <motion.div
                key={t.n}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 rounded-xl text-sm font-semibold cursor-default bg-white"
                style={{
                  border: `1.5px solid ${t.c}30`,
                  color: t.c === "#000000" ? "#334155" : t.c,
                  boxShadow: `0 4px 16px ${t.c}12`,
                }}
              >
                {t.n}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* COMBINED CTA + FOOTER SECTION */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          borderRadius: "30px",
          marginTop: "100px",
          backgroundImage: `url(${mobileappImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingBottom: "40px",
        }}
      >
        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8, 10, 30, 0.25), rgba(5, 8, 25, 0.75))",
          }}
        />

        {/* TOP RIGHT & BOTTOM LEFT NEON GLOWS */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#6366f1]/10 blur-[120px] pointer-events-none z-0" />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-[100px] pb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto flex flex-col items-center w-full"
          >
            <h2
              className="text-[28px] sm:text-[36px] md:text-[44px] font-bold tracking-[-0.5px] text-center mb-6 leading-tight drop-shadow-xl"
              style={{ color: "#ffffff" }}
            >
              Ready to build your mobile application?
            </h2>
            <p
              className="text-lg md:text-xl text-center mb-10 max-w-2xl mx-auto drop-shadow-md"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Let's transform your ideas into an intuitive, high-performance app
              that users will love.
            </p>
            <motion.div
              whileHover={{ scale: 1.04, y: -3 }}
              transition={{ duration: 0.35 }}
              className="mb-12 w-full flex justify-center"
            >
              <Link
                to="/contact"
                className="w-full max-w-[320px] sm:w-auto block"
              >
                <button
                  className="w-full sm:w-auto px-[54px] py-[18px] text-white font-semibold text-[20px] rounded-full border-none transition-all duration-350 cursor-pointer shadow-[0_0_25px_rgba(139,92,246,0.6),_0_0_60px_rgba(99,102,241,0.4)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #8b5cf6, #6366f1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 35px rgba(139, 92, 246, 0.8), 0 0 80px rgba(99, 102, 241, 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(139, 92, 246, 0.6), 0 0 60px rgba(99, 102, 241, 0.4)";
                  }}
                >
                  Start Project
                </button>
              </Link>
            </motion.div>

            {/* 5 FEATURE CARDS ROW */}
            {/* <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-[22px] max-w-5xl mx-auto px-4 w-full">
              {[
                {
                  title: "Real Projects",
                  icon: <Briefcase className="w-6 h-6 text-white" />,
                },
                {
                  title: "Expert Mentors",
                  icon: <Users className="w-6 h-6 text-white" />,
                },
                {
                  title: "Career Growth",
                  icon: <Trophy className="w-6 h-6 text-white" />,
                },
                {
                  title: "Certification",
                  icon: <Award className="w-6 h-6 text-white" />,
                },
                {
                  title: "Placements",
                  icon: <Rocket className="w-6 h-6 text-white" />,
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="w-[145px] h-[115px] mx-auto md:mx-0 flex flex-col items-center justify-center gap-2.5 rounded-[18px] transition-all duration-300 select-none col-span-1 last:col-span-2 last:justify-self-center"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.18)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    boxShadow: "0 0 18px rgba(124, 58, 237, 0.18)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 25px rgba(139, 92, 246, 0.4)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(124, 58, 237, 0.18)";
                    e.currentTarget.style.borderColor =
                      "rgba(255, 255, 255, 0.18)";
                  }}
                >
                  <div className="flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-white text-[15px] font-medium text-center">
                    {card.title}
                  </span>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
        </div>

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <LiquidFooter />
      </section>
    </div>
  );
}
