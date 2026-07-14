import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiquidFooter } from "../components/LiquidFooter";
import workImg from "../assets/Workimg.webp";
import {
  Smartphone,
  Brain,
  Code2,
  ArrowRight,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Cloud,
  Monitor,
  Server,
  Building,
  Palette,
} from "lucide-react";
import { onHoverBurst } from "../utils/particleBurst";

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
    title: "Custom Software Development",
    href: "/services/custom-software",
    color: "#7B2FF7",
    Icon: Code2,
    desc: "We design and build tailor-made software solutions that solve unique business challenges, automate operations, and improve organizational efficiency.",
    who: "Startups, Growing Businesses, Enterprises, Organizations with custom workflows",
    outcomes: [
      "Automated Operations",
      "Reduced Manual Work",
      "Higher Productivity",
      "Business Process Optimization",
    ],
  },
  {
    title: "SaaS Product Engineering",
    href: "/services/saas-development",
    color: "#3B82F6",
    Icon: Cloud,
    desc: "End-to-end SaaS product development—from product strategy and architecture to deployment, scaling, and continuous improvement.",
    who: "Startup Founders, SaaS Companies, Product Teams, Technology Companies",
    outcomes: [
      "Launch Faster",
      "Scalable Architecture",
      "Subscription-Based Products",
      "Long-Term Product Growth",
    ],
  },
  {
    title: "Web Application Development",
    href: "/services/web-development",
    color: "#06B6D4",
    Icon: Monitor,
    desc: "Modern, responsive, secure, and high-performance web applications designed for customers, employees, and enterprise operations.",
    who: "Businesses, Healthcare, Retail, Finance, Education",
    outcomes: [
      "Better Customer Experience",
      "Business Automation",
      "Centralized Operations",
      "Online Accessibility",
    ],
  },
  {
    title: "Mobile Application Development",
    href: "/services/mobile-development",
    color: "#10B981",
    Icon: Smartphone,
    desc: "Cross-platform and native mobile applications built for Android and iOS with exceptional user experiences and enterprise-grade performance.",
    who: "Startups, Retail, Healthcare, Logistics, Consumer Applications",
    outcomes: [
      "Reach Mobile Users",
      "Increase Customer Engagement",
      "Digital Accessibility",
      "Anywhere Operations",
    ],
  },
  {
    title: "AI & Intelligent Automation",
    href: "/services/ai-automation",
    color: "#EC4899",
    Icon: Brain,
    desc: "Implement Artificial Intelligence and automation solutions that streamline workflows, generate insights, and improve decision-making.",
    who: "Businesses with repetitive operations, Customer Support, Analytics Teams, Management",
    outcomes: [
      "Process Automation",
      "AI Insights",
      "Reduced Operational Cost",
      "Faster Decision Making",
    ],
  },
  {
    title: "Cloud & DevOps Engineering",
    href: "/services/cloud-devops",
    color: "#8B5CF6",
    Icon: Server,
    desc: "Cloud-native infrastructure, deployment pipelines, monitoring, security, and scalable environments for modern software applications.",
    who: "Growing SaaS Companies, Enterprise Applications, High-Traffic Platforms",
    outcomes: [
      "Reliable Deployments",
      "High Availability",
      "Scalable Infrastructure",
      "Continuous Delivery",
    ],
  },
  {
    title: "Enterprise Software Solutions",
    href: "/services/enterprise-software",
    color: "#F59E0B",
    Icon: Building,
    desc: "Large-scale enterprise applications that integrate departments, automate business processes, and centralize organizational operations.",
    who: "Manufacturing, Healthcare, Retail Chains, Corporates, Government",
    outcomes: [
      "Centralized Operations",
      "Cross-Department Collaboration",
      "Improved Reporting",
      "Enterprise Visibility",
    ],
  },
  {
    title: "UI/UX Product Design",
    href: "/services/ui-ux-design",
    color: "#F43F5E",
    Icon: Palette,
    desc: "Human-centered interface and experience design focused on usability, accessibility, and measurable business impact.",
    who: "Startups, SaaS Platforms, Consumer Applications, Enterprise Software",
    outcomes: [
      "Higher User Adoption",
      "Better Customer Satisfaction",
      "Lower Learning Curve",
      "Improved Conversion Rates",
    ],
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
  const IconComp = svc.Icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative rounded-3xl p-8 cursor-pointer group bg-white border border-slate-100 flex flex-col justify-between h-full text-left"
      style={{
        boxShadow: hov
          ? `0 24px 64px ${svc.color}15, 0 0 0 1.5px ${svc.color}25`
          : "0 4px 20px rgba(0,0,0,.03)",
        transition: "box-shadow 0.3s, border-color 0.3s",
      }}
    >
      <div>
        {/* Icon & Accent Bar */}
        <div className="flex justify-between items-start mb-6">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
            style={{
              background: `linear-gradient(135deg, ${svc.color}, ${svc.color}cc)`,
              boxShadow: `0 8px 20px ${svc.color}25`,
            }}
          >
            <IconComp className="w-6 h-6 transition-transform duration-500 group-hover:rotate-12" />
          </div>
          {/* Subtle gradient accent bar */}
          <div
            className="h-1 w-12 rounded-full transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${svc.color}, transparent)`,
              opacity: hov ? 1 : 0.4,
            }}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-extrabold text-slate-900 mb-3 group-hover:text-[#7B2FF7] transition-colors duration-200">
          {svc.title}
        </h3>

        {/* Divider */}
        <div className="w-full h-px bg-slate-100 mb-4" />

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-6">
          {svc.desc}
        </p>

        {/* Who It's For */}
        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
            Ideal For
          </span>
          <p className="text-xs text-slate-600 font-semibold leading-relaxed">
            {svc.who}
          </p>
        </div>

        {/* Business Outcomes */}
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Business Outcomes
          </span>
          <div className="space-y-1.5">
            {svc.outcomes.map((out) => (
              <div
                key={out}
                className="flex items-center gap-2 text-xs text-slate-600"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: svc.color }}
                />
                <span>{out}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="pt-4 border-t border-slate-50 mt-auto">
        <Link to={svc.href} className="inline-block w-full">
          <button
            onMouseEnter={onHoverBurst}
            className="w-full py-3 bg-[#FAF7FF] text-[#7B2FF7] hover:bg-[#7B2FF7] hover:text-white border border-[#E9D5FF] hover:border-transparent font-bold text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer relative overflow-hidden"
          >
            <span>Learn More</span>
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Link>
      </div>

      {/* Border glow decoration */}
      <div
        className="absolute -inset-px rounded-3xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
        style={{
          border: `1.5px solid ${svc.color}40`,
        }}
      />
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
                className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-widest mb-6 text-purple-600 font-mono"
                style={{
                  background: "rgba(123,47,247,.1)",
                  border: "1px solid rgba(123,47,247,.2)",
                }}
              >
                Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.08] tracking-tight mb-5 text-slate-900">
                Engineering{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg,#7B2FF7,#3B82F6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Digital Solutions
                </span>{" "}
                for Every Stage of Business
              </h1>
              <p className="text-slate-500 leading-relaxed mb-8 text-base sm:text-lg max-w-xl">
                From MVP development to enterprise-scale digital transformation,
                ViyanInfo designs, builds, deploys, and supports modern software
                that helps businesses operate more efficiently and grow faster.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((svc) => (
              <ServiceCard key={svc.title} svc={svc} />
            ))}
          </div>
        </div>
      </section>

      {/* COMBINED CTA + FOOTER SECTION */}
      <section
        className="relative w-full overflow-hidden pb-1 bg-[#0f0c1b]"
        style={{
          minHeight: "850px",
          paddingTop: "120px",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={workImg}
            alt="Services Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>

        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 10, 25, 0.4), rgba(8, 8, 18, 0.85))",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Not sure which service fits?
            </span>
            <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10 drop-shadow-md">
              Book a free 30-min discovery call. We'll map the right solution
              for your business.
            </p>
            <motion.div
              whileHover={{ scale: 1.03, translateY: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to="/contact" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-[35px] opacity-45 group-hover:opacity-75 transition-opacity duration-300 rounded-full" />
                <button
                  className="relative px-[42px] py-[16px] text-white font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_35px_rgba(147,51,234,0.45)] transition-all duration-300 border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                  }}
                >
                  Book a Free Call
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <LiquidFooter />
      </section>
    </div>
  );
}
