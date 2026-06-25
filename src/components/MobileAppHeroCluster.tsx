import { motion } from "framer-motion";
import { Bell, Star, MapPin, CreditCard, Heart } from "lucide-react";

// ── Phone Frame SVG ────────────────────────────────────────────────
function PhoneFrame({
  rotate = 0,
  delay = 0,
  scale = 1,
  zIndex = 0,
  screenContent,
}: {
  rotate?: number;
  delay?: number;
  scale?: number;
  zIndex?: number;
  screenContent: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      style={{
        rotate,
        scale,
        zIndex,
        perspective: "1200px",
      }}
      className="relative"
    >
      {/* Phone shell */}
      <div
        className="relative w-[160px] h-[320px] rounded-[32px] border-[6px] border-[#1a1a1f] bg-[#1a1a1f] shadow-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.35), 0 0 40px rgba(123,47,247,0.1)",
        }}
      >
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-[#1a1a1f] rounded-full z-20" />

        {/* Dynamic island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full z-20" />

        {/* Screen */}
        <div className="w-full h-full rounded-[26px] overflow-hidden bg-white relative">
          {screenContent}
        </div>
      </div>
    </motion.div>
  );
}

// Screen content variants
const DashboardScreen = () => (
  <div className="bg-gradient-to-b from-[#1a0535] to-[#2a0550] h-full p-4 pt-8 text-left">
    <div className="text-[9px] text-purple-300 mb-1">Good morning 👋</div>
    <div className="text-[12px] font-bold text-white mb-4">Your Portfolio</div>
    <div className="bg-white/10 rounded-xl p-3 mb-3">
      <div className="text-[9px] text-purple-300">Total Balance</div>
      <div className="text-[15px] font-bold text-white">$24,831.50</div>
      <div className="text-[8px] text-green-400">+12.4% this month</div>
    </div>
    {/* Bar chart container with height to make percentage height bars visible! */}
    <div className="flex gap-2 mb-3 items-end h-[50px]">
      {[
        ["#7B2FF7", 70],
        ["#3B82F6", 45],
        ["#10B981", 85],
        ["#EC4899", 55],
      ].map(([c, h], i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{ height: `${h}%`, background: c as string, opacity: 0.8 }}
        />
      ))}
    </div>
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="flex items-center gap-2 py-1.5 border-t border-white/10"
      >
        <div className="w-5 h-5 rounded-full bg-white/20" />
        <div className="flex-1 h-2 rounded bg-white/15" />
        <div className="w-8 h-2 rounded bg-purple-400/40" />
      </div>
    ))}
  </div>
);

const SocialScreen = () => (
  <div className="bg-white h-full pt-6 text-left">
    <div className="flex items-center justify-between px-3.5 py-2 border-b border-slate-50">
      <div className="w-12 h-2.5 rounded bg-[#7B2FF7]/30" />
      <div className="flex gap-1">
        <div className="w-5 h-5 rounded bg-slate-100" />
        <div className="w-5 h-5 rounded bg-slate-100" />
      </div>
    </div>
    <div className="flex gap-2.5 px-3.5 py-2.5 overflow-x-hidden">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex-shrink-0 flex flex-col items-center gap-1">
          <div
            className="w-10 h-10 rounded-full border-2 border-[#7B2FF7]"
            style={{ background: `hsl(${i * 60 + 200},60%,75%)` }}
          />
          <div className="w-8 h-1.5 rounded bg-slate-200" />
        </div>
      ))}
    </div>
    {[1, 2].map((i) => (
      <div
        key={i}
        className="mx-3.5 mb-2.5 rounded-xl border border-slate-100 overflow-hidden"
      >
        <div className="h-16 bg-gradient-to-br from-purple-100 to-blue-100" />
        <div className="p-2">
          <div className="w-3/4 h-2 rounded bg-slate-200 mb-1.5" />
          <div className="flex justify-between items-center">
            <div className="w-1/2 h-1.5 rounded bg-slate-100" />
            <div className="flex gap-1 items-center">
              <Heart size={10} className="text-red-400" />
              <span className="text-[9px] text-slate-400">24</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const EcomScreen = () => (
  <div className="bg-[#FAF7FF] h-full pt-6 text-left">
    <div className="px-3.5 py-2">
      <div className="bg-slate-100 rounded-lg px-2.5 py-1.5 text-[9px] text-slate-400 mb-3">
        🔍 Search products...
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 px-3.5">
      {[
        { color: "#7B2FF7", price: "$29" },
        { color: "#3B82F6", price: "$45" },
        { color: "#10B981", price: "$18" },
        { color: "#EC4899", price: "$67" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-lg overflow-hidden border border-slate-100"
        >
          <div
            className="h-16"
            style={{
              background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
            }}
          >
            <div
              className="w-10 h-10 m-auto mt-3 rounded-lg"
              style={{ background: `${item.color}30` }}
            />
          </div>
          <div className="p-2">
            <div className="w-full h-1.5 rounded bg-slate-100 mb-1.5" />
            <div className="text-[9px] font-bold" style={{ color: item.color }}>
              {item.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Floating UI chips
const floatingChips = [
  {
    Icon: Bell,
    label: "Push notif",
    color: "#7B2FF7",
    x: -30,
    y: 50,
    delay: 0,
  },
  {
    Icon: Star,
    label: "4.9 rating",
    color: "#F59E0B",
    x: 370,
    y: 40,
    delay: 1,
  },
  {
    Icon: MapPin,
    label: "Live map",
    color: "#10B981",
    x: -40,
    y: 260,
    delay: 0.7,
  },
  {
    Icon: CreditCard,
    label: "Payments",
    color: "#3B82F6",
    x: 360,
    y: 260,
    delay: 1.4,
  },
  {
    Icon: Heart,
    label: "Wishlist",
    color: "#EC4899",
    x: 185,
    y: -20,
    delay: 2,
  },
];

export function MobileAppHeroCluster() {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ height: 400, width: "100%", maxWidth: 500 }}
      aria-hidden="true"
    >
      {/* Background blob */}
      <div className="absolute w-72 h-72 rounded-full bg-[#7B2FF7]/8 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Left phone */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2"
        style={{ marginLeft: 30 }}
      >
        <PhoneFrame
          rotate={-12}
          delay={1.2}
          scale={0.88}
          zIndex={1}
          screenContent={<SocialScreen />}
        />
      </div>

      {/* Center phone */}
      <div className="relative" style={{ zIndex: 3 }}>
        <PhoneFrame
          rotate={0}
          delay={0}
          scale={1.05}
          zIndex={3}
          screenContent={<DashboardScreen />}
        />
      </div>

      {/* Right phone */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        style={{ marginRight: 30 }}
      >
        <PhoneFrame
          rotate={12}
          delay={2.4}
          scale={0.88}
          zIndex={1}
          screenContent={<EcomScreen />}
        />
      </div>

      {/* Floating UI chips */}
      {floatingChips.map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: chip.delay + 0.5 }}
          style={{ position: "absolute", left: chip.x, top: chip.y + 80 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3 + chip.delay * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: chip.delay,
            }}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white shadow-md border border-slate-100 whitespace-nowrap"
            style={{ boxShadow: `0 4px 16px ${chip.color}20` }}
          >
            <chip.Icon size={10} style={{ color: chip.color }} />
            <span className="text-[9px] font-semibold text-slate-600">
              {chip.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

// ── App Store Badges ───────────────────────────────────────────────
export function AppStoreBadges() {
  return (
    <div className="flex gap-3 flex-wrap">
      {/* App Store */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.04, y: -2 }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white border border-white/10"
        style={{ minWidth: 140 }}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div>
          <div className="text-[7px] text-white/60">Download on the</div>
          <div className="text-[11px] font-bold leading-tight">App Store</div>
        </div>
      </motion.a>

      {/* Play Store */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.04, y: -2 }}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white border border-white/10"
        style={{ minWidth: 140 }}
      >
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
          <path fill="#34A853" d="M4.4 23.65l12.7-7.75-3.9-3.9L4.4 23.65z" />
        </svg>
        <div>
          <div className="text-[7px] text-white/60">Get it on</div>
          <div className="text-[11px] font-bold leading-tight">Google Play</div>
        </div>
      </motion.a>
    </div>
  );
}

// ── Mobile Features with Phone Screenshots ─────────────────────────
export const MOBILE_FEATURE_IMAGES = [
  {
    title: "Real-time Sync",
    desc: "Offline-first architecture with instant background sync",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=600&fit=crop&auto=format",
  },
  {
    title: "Push Notifications",
    desc: "Smart notification system with user preference controls",
    image:
      "https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=300&h=600&fit=crop&auto=format",
  },
  {
    title: "Secure Auth",
    desc: "Biometric login with multi-factor authentication",
    image:
      "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=300&h=600&fit=crop&auto=format",
  },
];
