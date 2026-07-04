import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Brain,
  Code2,
  Paintbrush,
  GraduationCap,
  ArrowRight,
  Zap,
  Shield,
  Users,
  TrendingUp,
} from "lucide-react";

/* ── Liquid morphism blob ────────────────────────────────────────── */
function LiquidBlob({
  color,
  size,
  x,
  y,
  delay = 0,
  duration = 8,
}: {
  color: string;
  size: number;
  x: string;
  y: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: "blur(80px)",
        opacity: 0.18,
      }}
      animate={{
        borderRadius: [
          "50% 50% 50% 50%",
          "60% 40% 55% 45%",
          "45% 55% 40% 60%",
          "55% 45% 60% 40%",
          "50% 50% 50% 50%",
        ],
        scale: [1, 1.15, 0.95, 1.08, 1],
        x: [0, 30, -20, 15, 0],
        y: [0, -20, 30, -10, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ── Services list ───────────────────────────────────────────────── */
const SERVICES = [
  {
    Icon: Globe,
    title: "Web Applications",
    href: "/services/websites",
    color: "#3B82F6",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=280&fit=crop&auto=format",
    desc: "React/Next.js apps with GSAP animations, atomic design, and sub-50ms TTFB.",
    tag: "Most Popular",
  },
  {
    Icon: Smartphone,
    title: "Mobile Apps",
    href: "/services/mobile",
    color: "#06B6D4",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=280&fit=crop&auto=format",
    desc: "Cross-platform React Native apps with offline sync and 4.9★ ratings.",
  },
  {
    Icon: Brain,
    title: "AI Solutions",
    href: "/services/ai",
    color: "#EC4899",
    img: "https://media.gettyimages.com/id/2176615666/photo/ai-technology-interface.jpg?b=1&s=2048x2048&w=0&k=20&c=ExkKOwYjDVSAKinBX7li4uOTDBg5-fe71mFZjIV4qV0=",
    desc: "LLM integration, RAG chatbots, vector search, and predictive analytics.",
    tag: "New",
  },
  {
    Icon: Code2,
    title: "SaaS Platforms",
    href: "/services/saas",
    color: "#7B2FF7",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=280&fit=crop&auto=format",
    desc: "Multi-tenant dashboards with Stripe billing and real-time WebSockets.",
  },
  {
    Icon: Paintbrush,
    title: "UI/UX Design",
    href: "/services/uiux",
    color: "#F59E0B",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=280&fit=crop&auto=format",
    desc: "User research, wireframes, and Figma prototypes that convert visitors.",
  },
  {
    Icon: GraduationCap,
    title: "Internship Programs",
    href: "/internship",
    color: "#10B981",
    img: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=500&h=280&fit=crop&auto=format",
    desc: "6-month structured learning tracks with real project ownership.",
  },
];

/* ── Orbital hero ────────────────────────────────────────────────── */
function OrbitalHero() {
  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: "100%", maxWidth: 420, height: 380, margin: "0 auto" }}
      aria-hidden
    >
      {/* Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border-2 border-dashed border-purple-200"
        style={{ width: 220, height: 220 }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-blue-100"
        style={{ width: 350, height: 350 }}
      />

      {/* Service nodes */}
      {SERVICES.map((svc, i) => {
        const inner = i % 2 === 0;
        const r = inner ? 110 : 175;
        const angle = (i / SERVICES.length) * 360;
        const rad = ((angle - 90) * Math.PI) / 180;
        const px = Math.cos(rad) * r;
        const py = Math.sin(rad) * r;
        const orbitDur = inner ? 28 : 42;
        const dir = inner ? 1 : -1;
        return (
          <motion.div
            key={svc.title}
            animate={{ rotate: 360 * dir }}
            transition={{
              duration: orbitDur,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute"
            style={{ transformOrigin: "50% 50%" }}
          >
            <motion.div
              animate={{ rotate: -360 * dir }}
              transition={{
                duration: orbitDur,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                left: `calc(50% + ${px}px - 22px)`,
                top: `calc(50% + ${py}px - 22px)`,
                transformOrigin: "22px 22px",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.35 }}
                className="w-11 h-11 rounded-xl bg-white flex items-center justify-center cursor-pointer"
                style={{
                  boxShadow: `0 4px 20px ${svc.color}30`,
                  border: `1.5px solid ${svc.color}25`,
                }}
              >
                <svc.Icon size={18} style={{ color: svc.color }} />
              </motion.div>
              {/* Pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
                className="absolute inset-0 rounded-xl"
                style={{ background: `${svc.color}20` }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Center hub */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-20 h-20 rounded-2xl bg-white flex flex-col items-center justify-center gap-1"
        style={{
          boxShadow: "0 12px 40px rgba(123,47,247,.2)",
          border: "1.5px solid rgba(123,47,247,.15)",
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#7B2FF7,#9333EA)" }}
        >
          <Code2 size={18} className="text-white" />
        </div>
        <span className="text-[7px] font-mono text-slate-400 uppercase tracking-wider">
          Services
        </span>
      </motion.div>

      {/* Traveling packets */}
      {[0, 120, 240].map((a, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: "#7B2FF7",
            boxShadow: "0 0 8px #7B2FF7",
            top: "50%",
            left: "50%",
            marginLeft: -4,
            marginTop: -4,
          }}
          animate={{ rotate: [a, a + 360] }}
          transition={{ duration: 6 + i * 2, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

/* ── Process steps ───────────────────────────────────────────────── */
const STEPS = ["Discover", "Design", "Build", "Launch"];
const STEP_COLORS = ["#7B2FF7", "#3B82F6", "#10B981", "#F59E0B"];

function ProcessSteps() {
  return (
    <div className="flex items-center justify-center flex-wrap gap-0 py-8 max-w-2xl mx-auto">
      {STEPS.map((step, i) => (
        <div key={step} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: i * 0.15 }}
            className="flex flex-col items-center gap-2"
          >
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{
                background: STEP_COLORS[i],
                boxShadow: `0 8px 24px ${STEP_COLORS[i]}40`,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </motion.div>
            <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">
              {step}
            </span>
          </motion.div>
          {i < STEPS.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
              style={{
                transformOrigin: "left",
                width: 48,
                height: 1,
                background: "linear-gradient(90deg,#CBD5E1,#E2E8F0)",
                margin: "0 4px 16px",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Service card ────────────────────────────────────────────────── */
function ServiceCard({ svc }: { svc: (typeof SERVICES)[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative rounded-3xl overflow-hidden cursor-pointer group bg-white"
      style={{
        boxShadow: hov
          ? `0 24px 64px ${svc.color}20, 0 0 0 1px ${svc.color}30`
          : "0 4px 24px rgba(0,0,0,.06)",
        transition: "box-shadow .3s",
      }}
    >
      {svc.tag && (
        <span
          className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-full text-[8px] font-bold text-white"
          style={{ background: svc.color }}
        >
          {svc.tag}
        </span>
      )}
      {/* Image thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={svc.img}
          alt={svc.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom,${svc.color}30,rgba(255,255,255,.9))`,
          }}
        />
        <div
          className="absolute top-3 left-3 p-2 rounded-xl bg-white/90 backdrop-blur-sm"
          style={{ boxShadow: `0 4px 12px ${svc.color}30` }}
        >
          <svc.Icon size={16} style={{ color: svc.color }} />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-sm font-bold text-slate-800 mb-2">{svc.title}</h3>
        <p className="text-[12px] text-slate-400 leading-relaxed mb-4">
          {svc.desc}
        </p>
        <Link
          to={svc.href}
          className="flex items-center gap-1.5 text-xs font-semibold"
          style={{ color: svc.color }}
        >
          Explore{" "}
          <ArrowRight
            size={12}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>
      {/* Liquid morphism glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ opacity: hov ? 1 : 0, transition: "opacity .3s" }}
      >
        <div
          className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-2xl"
          style={{ background: `${svc.color}15` }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function ServicesPage() {
  return (
    <div style={{ background: "#F8F7FF", minHeight: "100vh" }}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* Liquid morphism blobs */}
        <LiquidBlob
          color="#7B2FF7"
          size={520}
          x="-8%"
          y="-15%"
          delay={0}
          duration={10}
        />
        <LiquidBlob
          color="#3B82F6"
          size={400}
          x="70%"
          y="10%"
          delay={2}
          duration={12}
        />
        <LiquidBlob
          color="#06B6D4"
          size={300}
          x="40%"
          y="60%"
          delay={4}
          duration={9}
        />
        {/* Glass card overlay on blobs */}
        <div
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{ background: "rgba(248,247,255,.82)" }}
        />

        <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                className="inline-block px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 text-purple-600"
                style={{
                  background: "rgba(123,47,247,.1)",
                  border: "1px solid rgba(123,47,247,.2)",
                }}
              >
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight mb-5 text-slate-900">
                Full-stack digital{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#7B2FF7,#3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  solutions
                </span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                From concept to deployment — every layer of the modern product
                stack, handled with precision engineering and pixel-perfect
                design.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { I: Zap, l: "Fast delivery" },
                  { I: Shield, l: "Production quality" },
                  { I: Users, l: "Dedicated team" },
                  { I: TrendingUp, l: "Scalable arch" },
                ].map(({ I, l }) => (
                  <div
                    key={l}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium text-slate-500 bg-white border border-slate-100"
                  >
                    <I size={10} className="text-purple-500" />
                    {l}
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="px-7 py-3.5 rounded-full text-sm font-bold text-white cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg,#7B2FF7,#9333EA)",
                    boxShadow: "0 0 32px rgba(123,47,247,.35)",
                  }}
                >
                  Book a Free Consultation →
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <OrbitalHero />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-8 relative">
        <div className="container max-w-[1280px] mx-auto px-6">
          <p className="text-center text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2">
            How we work
          </p>
          <ProcessSteps />
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="relative py-20 overflow-hidden">
        <LiquidBlob
          color="#7B2FF7"
          size={350}
          x="80%"
          y="20%"
          delay={1}
          duration={11}
        />
        <LiquidBlob
          color="#10B981"
          size={300}
          x="-5%"
          y="60%"
          delay={3}
          duration={9}
        />
        <div
          className="absolute inset-0 backdrop-blur-[1px]"
          style={{ background: "rgba(248,247,255,.88)" }}
        />
        <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              Everything your product needs
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Click any service to explore what we build.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.title} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 relative overflow-hidden">
        <LiquidBlob
          color="#7B2FF7"
          size={400}
          x="50%"
          y="0%"
          delay={0}
          duration={10}
        />
        <LiquidBlob
          color="#EC4899"
          size={350}
          x="10%"
          y="30%"
          delay={2}
          duration={12}
        />
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: "blur(2px)",
            background: "rgba(248,247,255,.85)",
          }}
        />
        <div className="container max-w-[800px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-14 rounded-3xl bg-white overflow-hidden"
            style={{
              boxShadow: "0 24px 80px rgba(123,47,247,.12)",
              border: "1px solid rgba(123,47,247,.1)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
              style={{
                background: "linear-gradient(90deg,#7B2FF7,#3B82F6,#06B6D4)",
              }}
            />
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              Not sure which service fits?
            </h2>
            <p className="text-slate-400 mb-7">
              Book a free 30-min discovery call. We'll map the right solution
              for your business.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3.5 rounded-full font-bold text-white cursor-pointer"
                style={{
                  background: "linear-gradient(135deg,#7B2FF7,#9333EA)",
                  boxShadow: "0 0 40px rgba(123,47,247,.35)",
                }}
              >
                Book a Free Call
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
