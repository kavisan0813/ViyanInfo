import { motion } from "framer-motion";
import { 
  Smartphone, 
  Layers, 
  Cpu, 
  ArrowRight, 
  Bell,
  ShieldCheck, 
  Cloud, 
  RefreshCw, 
  Fingerprint, 
  Zap, 
  Download 
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import { Link } from "react-router-dom";
import { LiquidFooter } from "../components/LiquidFooter";
import mobileappImg from "../assets/mobileapp_img.webp";
import {
  MobileStack,
  MobileStack3,
  MobileStack4,
} from "../components/ArrayContent";
import { FeatureCardStack } from "../components/MobileVisuals";
import {
  FloatingGlassCard,
  PremiumBankingScreen,
  PremiumEcomScreen,
  PremiumTaskScreen,
} from "../components/MobileScreens";

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
        {/* Screen with scale correction for standard 260x563 viewport */}
        <div className="w-full h-full rounded-[26px] overflow-hidden relative bg-slate-50">
          <div 
            style={{
              width: 260,
              height: 563.33,
              transform: `scale(${120 / 260})`,
              transformOrigin: "top left",
            }}
          >
            {screen}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Screens imported from MobileScreens

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
          screen={<PremiumTaskScreen />}
        />
      </div>
      {/* Center phone */}
      <div className="relative" style={{ zIndex: 3 }}>
        <PhoneFrame
          rotate={0}
          delay={0}
          scale={1}
          z={3}
          screen={<PremiumBankingScreen />}
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
          screen={<PremiumEcomScreen />}
        />
      </div>
      {/* Floating chips */}
      {MobileStack4.map((chip) => (
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

interface AlternatingFeatureProps {
  title: string;
  desc: string;
  tag: string;
  Icon: React.ComponentType<{ size?: number }>;
  reverse?: boolean;
  color: string;
  screen: React.ReactNode;
  badges?: string[];
  floatingElements?: React.ReactNode;
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
  floatingElements,
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
      <div className="w-full lg:w-1/2 flex justify-center relative min-h-[440px] items-center">
        {/* Soft Purple Glow Behind Phone */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-500 group-hover:scale-110"
          style={{
            width: 320,
            height: 320,
            background: "rgba(124,90,255,.12)",
            filter: "blur(90px)",
          }}
        />
        
        {/* Scroll entry animation & Hover wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group cursor-default"
        >
          <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10"
          >
            <PhoneFrame rotate={reverse ? 5 : -5} scale={1} z={1} screen={screen} />
          </motion.div>
          {floatingElements}
        </motion.div>
      </div>
    </div>
  );
}

export default function MobileApp() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden relative">
      <MobileBg />
      {/* HERO SECTION */}
      <section className="relative z-10 pt-28 pb-24">
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

          <div className="flex flex-col gap-12 lg:gap-8">
            <AlternatingFeature
              title="Native iOS Applications"
              desc="Highly secure Apple iOS applications built using Swift and following strict Apple HIG guidelines for smooth store approvals. We deliver fluid animations and deep OS integrations."
              tag="iOS Development"
              Icon={Smartphone}
              color="#06B6D4"
              reverse={false}
              screen={<PremiumBankingScreen />}
              badges={["Swift", "Apple App Store", "Cocoa Touch", "Core Data"]}
              floatingElements={
                <>
                  <FloatingGlassCard top="10%" left="-140px" delay={0.2} className="text-[#10B981]">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200">
                      <Fingerprint size={12} className="text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Face ID</div>
                      <div className="text-[8px] text-emerald-600 font-semibold flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Verified
                      </div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard bottom="35%" right="-140px" delay={0.4} className="text-[#0F172A]">
                    <div className="w-6 h-6 rounded-[6px] bg-black flex items-center justify-center">
                      <span className="text-[10px] text-white font-bold">Pay</span>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Apple Pay</div>
                      <div className="text-[9px] font-bold text-emerald-500">₹2,450</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard top="60%" left="-160px" delay={0.6}>
                    <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200">
                      <ShieldCheck size={12} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Security</div>
                      <div className="text-[8px] text-slate-500">256-bit Encryption</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard top="-5%" right="-120px" delay={0.8}>
                    <div className="w-6 h-6 rounded-[8px] bg-red-100 flex items-center justify-center">
                      <Bell size={12} className="text-red-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Payment Received</div>
                      <div className="text-[9px] font-bold text-emerald-500">₹14,500</div>
                    </div>
                  </FloatingGlassCard>
                </>
              }
            />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            <AlternatingFeature
              title="Native Android Apps"
              desc="Performant Android apps built using Kotlin, featuring robust hardware integrations, offline-first architectures, and strict adherence to Material Design metrics."
              tag="Android Development"
              Icon={Cpu}
              color="#10B981"
              reverse={true}
              screen={<PremiumEcomScreen />}
              badges={["Kotlin", "Google Play", "Gradle", "Jetpack Compose"]}
              floatingElements={
                <>
                  <FloatingGlassCard top="15%" right="-140px" delay={0.3}>
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200">
                      <svg viewBox="0 0 24 24" className="w-3 h-3">
                        <path fill="#EA4335" d="M1.22 0L13.2 12 1.22 24C.55 23.65.1 22.95.1 22.1V1.9C.1 1.05.55.35 1.22 0z"/>
                        <path fill="#FBBC04" d="M17.1 8.05L4.4.35l8.8 11.65 3.9-3.95z"/>
                        <path fill="#4285F4" d="M21.15 10.4c.5.28.85.8.85 1.6s-.35 1.3-.85 1.6L17.1 15.9 13 12l4.1-3.95 4.05 2.35z"/>
                        <path fill="#34A853" d="M4.4 23.65l12.7-7.75-3.9-3.9L4.4 23.65z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Google Play</div>
                      <div className="text-[8px] text-emerald-500 font-semibold">Updated</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard bottom="30%" left="-150px" delay={0.5}>
                    <div className="w-6 h-6 rounded-[8px] bg-[#10B981]/10 flex items-center justify-center">
                       <Zap size={12} className="text-[#10B981]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Material You</div>
                      <div className="text-[8px] text-slate-500">Dynamic UI</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard top="65%" right="-130px" delay={0.7}>
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                      <Cloud size={12} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Offline Sync</div>
                      <div className="text-[8px] text-slate-500">Supported</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard top="-10%" left="-120px" delay={0.9}>
                    <div className="w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
                      <Download size={12} className="text-orange-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Instant App</div>
                      <div className="text-[8px] text-slate-500">No install required</div>
                    </div>
                  </FloatingGlassCard>
                </>
              }
            />
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
            
            <AlternatingFeature
              title="Cross-Platform Solutions"
              desc="Single codebase systems built with React Native or Flutter, delivering 95% native performance across iOS and Android while reducing time-to-market and maintenance costs."
              tag="Cross-Platform"
              Icon={Layers}
              color="#7B2FF7"
              reverse={false}
              screen={<PremiumTaskScreen />}
              badges={["React Native", "Flutter", "Expo", "Single Codebase"]}
              floatingElements={
                <>
                  <FloatingGlassCard top="12%" left="-150px" delay={0.2}>
                    <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center border border-purple-100">
                      <Layers size={12} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">One Codebase</div>
                      <div className="text-[8px] text-slate-500">iOS & Android</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard bottom="25%" right="-150px" delay={0.4}>
                    <div className="w-6 h-6 rounded-[8px] bg-indigo-50 flex items-center justify-center">
                      <Cpu size={12} className="text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Shared UI</div>
                      <div className="text-[8px] text-slate-500">Fast Deployment</div>
                    </div>
                  </FloatingGlassCard>
                  <FloatingGlassCard top="50%" left="-160px" delay={0.6}>
                    <div className="w-6 h-6 rounded-full bg-sky-50 flex items-center justify-center">
                      <RefreshCw size={12} className="text-sky-500 animate-spin-slow" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-800">Cloud Sync</div>
                      <div className="text-[8px] text-emerald-500 font-semibold flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Active
                      </div>
                    </div>
                  </FloatingGlassCard>
                  
                  {/* Connection Lines (SVGs) */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 overflow-visible" style={{ left: '-60px' }}>
                    <motion.path
                      d="M20,60 C50,60 80,100 120,130"
                      fill="none"
                      stroke="#E9D5FF"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                    <motion.path
                      d="M-20,230 C20,230 50,180 100,160"
                      fill="none"
                      stroke="#E9D5FF"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </svg>
                </>
              }
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
            {MobileStack.map((app, idx) => (
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
            {MobileStack3.map((t, i) => (
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
          </motion.div>
        </div>

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <LiquidFooter />
      </section>
    </div>
  );
}
