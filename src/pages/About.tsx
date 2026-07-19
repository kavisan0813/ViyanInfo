import { useRef, useState, useEffect, useMemo } from "react";
import { onHoverBurst } from "../utils/particleBurst";
import { glitchText } from "../utils/charGlitch";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { gsap } from "gsap";
import { CountUp } from "../components/ArrayContent";
import {
  Cpu,
  Bot,
  Star,
  Users,
  Activity,
  Mail,
  Shield,
  Zap,
  Rocket,
  Clock,
} from "lucide-react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { SectionDivider } from "../components/SectionDivider";
import { founders } from "../components/Founders";
import aboutImg from "../assets/aboutus.webp";
import logoBgImg from "../assets/logo_bg_img.png";
import aboutTechRoom from "../assets/about-tech-room.png";
import { LiquidFooter } from "../components/LiquidFooter";
import "../styles/About.css";
import { AboutStatsBg, FounderHalo } from "../components/AboutVisuals";

const VALUE_BG_IMAGES: Record<string, string> = {
  "Performance Absolute":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&auto=format",
  "Visual Excellence":
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
  "Direct Transparency":
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&auto=format",
};

// Our Story — Immersive Split Stack
const StoryImmersiveSplit = () => {
  return (
    <section className="story-v2-section">
      <div className="story-bg-text">VIYAN</div>

      <div className="story-v2-grid">
        {/* Left — Overlapping images */}
        <motion.div
          className="story-v2-images"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/story-main.jpg"
            alt="Viyan workspace"
            className="story-main-img"
          />
          <img
            src="/images/story-side.jpg"
            alt="Developer at work"
            className="story-side-img"
          />
          <motion.div
            className="floating-story-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4>5+</h4>
            <p>Successful Projects</p>
          </motion.div>
        </motion.div>

        {/* Right — Content */}
        <motion.div
          className="story-v2-content"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
            OUR STORY
          </span>

          <h2>
            Transforming Ideas Into
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #9D5CFF, #7B2FF7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Digital Experiences
            </span>
          </h2>

          <p>
            We started Viyan with a vision to create impactful digital products
            that combine innovation, creativity, and technology.
          </p>

          <div className="story-points">
            <div className="story-point">
              <Rocket size={18} className="text-purple-600" />
              <span>Startup Focused</span>
            </div>
            <div className="story-point">
              <Bot size={18} className="text-blue-600" />
              <span>AI Driven Innovation</span>
            </div>
            <div className="story-point">
              <Zap size={18} className="text-amber-500" />
              <span>Scalable Architecture</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// 2. Mission & Vision Section: Cinematic Split Layout
const MissionVisionCinematic = () => {
  return (
    <section className="mv-section">
      {/* MISSION */}
      <div className="mv-row">
        <motion.div
          className="mv-image-wrapper"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/mission-team.png"
            alt="Mission"
            className="mv-image"
          />
          <div className="mv-image-overlay"></div>
        </motion.div>

        <motion.div
          className="mv-content-card"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
            OUR MISSION
          </span>
          <h2>
            Empowering Businesses <br /> Through Innovation
          </h2>
          <p>
            We engineer intelligent digital products, scalable systems, and
            AI-powered experiences that help businesses grow faster and operate
            smarter.
          </p>
        </motion.div>
      </div>

      {/* VISION */}
      <div className="mv-row reverse">
        <motion.div
          className="mv-content-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
            OUR VISION
          </span>
          <h2>
            Designing The Future <br /> Of Technology
          </h2>
          <p>
            Our vision is to become a global technology partner shaping the
            future through innovation, digital transformation, and impactful
            experiences.
          </p>
        </motion.div>

        <motion.div
          className="mv-image-wrapper"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/future-city.png"
            alt="Vision"
            className="mv-image"
          />
          <div className="mv-image-overlay"></div>
        </motion.div>
      </div>
    </section>
  );
};

// 3. Culture Section — Stacked Creative Wall
const CultureCreativeWall = () => {
  return (
    <section className="culture-v2-section">
      {/* Left — Floating image collage */}
      <motion.div
        className="culture-collage"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src="/images/team1.png"
          alt="Team collaboration"
          className="culture-card card1"
        />
        <img
          src="/images/team2.png"
          alt="Architecture review"
          className="culture-card card2"
        />
        <img
          src="/images/team3.png"
          alt="Pair programming"
          className="culture-card card3"
        />

        <motion.div
          className="culture-note note1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <Rocket size={16} className="text-purple-600" />
            <span>Innovation First</span>
          </div>
        </motion.div>

        <motion.div
          className="culture-note note2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <Users size={16} className="text-blue-600" />
            <span>Team Collaboration</span>
          </div>
        </motion.div>

        <motion.div
          className="culture-note note3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-amber-500" />
            <span>Fast Execution</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Right — Content */}
      <motion.div
        className="culture-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
          OUR CULTURE
        </span>

        <h2>
          Creativity Meets
          <br />
          Technology
        </h2>

        <p>
          We foster a collaborative environment where innovation, teamwork, and
          modern thinking drive everything we build.
        </p>
      </motion.div>
    </section>
  );
};

// 4. Animated counter hook for bento grid numbers
function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { count, ref };
}

// 5. Bento Card with animated counting number
function BentoCard({
  number,
  suffix,
  label,
  desc,
  icon,
  iconBg,
  size,
  delay,
}: {
  number: number;
  suffix: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  size: "large" | "medium";
  delay: number;
}) {
  const { count, ref } = useCountUp(Math.floor(number), 2000);
  const isDecimal = number % 1 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`why-card ${size}`}
    >
      <div className={`why-icon ${iconBg}`}>{icon}</div>
      <div className="why-number">
        {isDecimal ? `${count}.${String(number).split(".")[1]}` : count}
        {suffix}
      </div>
      <div className="why-label">{label}</div>
      <div className="why-desc">{desc}</div>
    </motion.div>
  );
}

// 6. Founder Artwork Background
function FounderArtwork({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const logoOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0 opacity-20 lg:left-auto lg:right-0 lg:w-1/2 lg:opacity-100">
      <motion.div
        style={{ opacity: logoOpacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <img
          src={logoBgImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-center lg:object-right"
        />
      </motion.div>
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const [activeFounder, setActiveFounder] = useState(0);
  const [scrollVal, setScrollVal] = useState(0);
  const activeFounderRef = useRef(0);

  const foundersData = useMemo(
    () => [{ name: "Rithick" }, { name: "Peter" }, { name: "Narendhiran" }],
    [],
  );

  useEffect(() => {
    return scrollYProgress.on("change", (val) => {
      setScrollVal(val);
      let nextFounder = 0;
      if (val < 0.25) {
        nextFounder = 0;
      } else if (val < 0.55) {
        nextFounder = 1;
      } else {
        nextFounder = 2;
      }

      if (nextFounder !== activeFounderRef.current) {
        activeFounderRef.current = nextFounder;
        const nameEl = document.querySelector<HTMLElement>(
          `#founder-name-${nextFounder}`,
        );
        if (nameEl) glitchText(nameEl, foundersData[nextFounder].name, 400, 8);
      }

      setActiveFounder(nextFounder);
    });
  }, [scrollYProgress, foundersData]);

  const getFounderStyle = (idx: number, progress: number) => {
    let opacity = 0;
    let y = 80;
    let scale = 0.95;

    if (idx === 0) {
      if (progress <= 0.2) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress <= 0.3) {
        const p = (progress - 0.2) / 0.1; // 0 -> 1
        opacity = 1 - p;
        y = -80 * p;
        scale = 1 - 0.05 * p;
      } else {
        opacity = 0;
        y = -80;
        scale = 0.95;
      }
    } else if (idx === 1) {
      if (progress < 0.2) {
        opacity = 0;
        y = 80;
        scale = 0.95;
      } else if (progress <= 0.3) {
        const p = (progress - 0.2) / 0.1; // 0 -> 1
        opacity = p;
        y = 80 * (1 - p);
        scale = 0.95 + 0.05 * p;
      } else if (progress <= 0.5) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress <= 0.6) {
        const p = (progress - 0.5) / 0.1; // 0 -> 1
        opacity = 1 - p;
        y = -80 * p;
        scale = 1 - 0.05 * p;
      } else {
        opacity = 0;
        y = -80;
        scale = 0.95;
      }
    } else if (idx === 2) {
      if (progress < 0.5) {
        opacity = 0;
        y = 80;
        scale = 0.95;
      } else if (progress <= 0.6) {
        const p = (progress - 0.5) / 0.1; // 0 -> 1
        opacity = p;
        y = 80 * (1 - p);
        scale = 0.95 + 0.05 * p;
      } else {
        opacity = 1;
        y = 0;
        scale = 1;
      }
    }

    return {
      opacity,
      transform: `translateY(${y}px) scale(${scale})`,
      transition:
        "opacity 0.15s cubic-bezier(0.16, 1, 0.3, 1), transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)",
      pointerEvents:
        activeFounder === idx ? ("auto" as const) : ("none" as const),
    };
  };

  return (
    <div
      ref={containerRef}
      className="about-page bg-[#FAF7FF] min-h-screen text-[#475569] font-body relative"
    >
      {/* HERO SECTION */}
      {/* ═══════ CINEMATIC HERO ═══════ */}
      <section className="about-hero-section">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-badge">ABOUT VIYAN INFO TECH</span>

          <h1 className="text-[clamp(34px,4.5vw,56px)] font-display font-bold text-[#1F1430] leading-[1.1] tracking-tight mb-6">
            Building Digital
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #9D5CFF, #7B2FF7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Experiences
            </span>
            <br />
            That Matter
          </h1>

          <p>
            We craft scalable software, AI solutions, and modern digital
            experiences that help businesses innovate faster.
          </p>

          <div className="hero-buttons flex flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Link to="/contact" className="hero-cta flex-1 sm:flex-none">
              <button
                onMouseEnter={onHoverBurst}
                className="magnetic-button bg-[#6D28D9] text-white font-semibold text-[13px] sm:text-[14px] px-4 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full cursor-pointer"
              >
                Start Project
              </button>
            </Link>
            <Link to="/portfolio" className="hero-cta flex-1 sm:flex-none">
              <button className="magnetic-button bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[13px] sm:text-[14px] px-4 sm:px-8 py-3.5 sm:py-4 rounded-2xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full flex items-center justify-center cursor-pointer">
                Our Work
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src={aboutTechRoom}
            alt="Developer Workspace"
            className="hero-main-image"
          />

          <motion.div
            className="hero-floating-card card-1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2">
              <Rocket size={16} className="text-purple-600" />
              <span>Startup Growth</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card card-2"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="flex items-center gap-2">
              <Bot size={16} className="text-blue-600" />
              <span>AI Solutions</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-card card-3"
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-amber-500" />
              <span>Fast Delivery</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* STATS SECTION */}
      <section className="py-20 bg-[#FAF7FF] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,47,247,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <AboutStatsBg />
        <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              {
                val: 4,
                suffix: "+",
                label: "Projects Delivered",
                desc: "Enterprise software systems and web apps successfully deployed.",
                color: "text-[#7C3AED]",
                divider: "from-[#7C3AED] to-purple-400",
                glow: "from-purple-500/5 to-indigo-500/5",
                borderGlow: "from-[#7C3AED]/20 to-[#9333EA]/20",
              },
              {
                val: 3,
                suffix: "+",
                label: "Happy Clients",
                desc: "Partnerships built on reliable delivery and technical expertise.",
                color: "text-[#3B82F6]",
                divider: "from-[#3B82F6] to-blue-400",
                glow: "from-blue-500/5 to-cyan-500/5",
                borderGlow: "from-[#3B82F6]/20 to-[#60A5FA]/20",
              },
              {
                val: 1,
                suffix: "+",
                label: "Experience",
                desc: "Providing software services to modern startups and businesses.",
                color: "text-[#06B6D4]",
                divider: "from-[#06B6D4] to-cyan-400",
                glow: "from-cyan-500/5 to-teal-500/5",
                borderGlow: "from-[#06B6D4]/20 to-[#22D3EE]/20",
              },
              {
                val: 98,
                suffix: "%",
                label: "Success Rate",
                desc: "Consistent product quality and exceptional client satisfaction.",
                color: "text-[#10B981]",
                divider: "from-[#10B981] to-emerald-400",
                glow: "from-emerald-500/5 to-green-500/5",
                borderGlow: "from-[#10B981]/20 to-[#34D399]/20",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={(e) => {
                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                  )
                    return;
                  const currentCard = e.currentTarget;
                  const allCards =
                    gsap.utils.toArray<HTMLElement>(".about-stat-card");
                  const siblings = allCards.filter(
                    (card) => card !== currentCard,
                  );

                  gsap.to(siblings, { y: -6, scale: 0.97, duration: 0.3 });
                  gsap.to(currentCard, {
                    filter: "brightness(1.15)",
                    y: -8,
                    scale: 1.02,
                    duration: 0.2,
                  });
                }}
                onMouseLeave={() => {
                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                  )
                    return;
                  const allCards =
                    gsap.utils.toArray<HTMLElement>(".about-stat-card");

                  gsap.to(allCards, {
                    y: 0,
                    scale: 1,
                    filter: "brightness(1)",
                    duration: 0.3,
                  });
                }}
                className="about-stat-card relative group p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(123,47,247,0.03)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.08)]"
              >
                {/* Persistent Subtle Pulse Glow */}
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${stat.borderGlow} opacity-[0.05] blur-md animate-pulse pointer-events-none z-0`}
                ></div>

                {/* Hover Glow background effect */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0`}
                ></div>
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${stat.borderGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xs z-0`}
                ></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3
                    className={`text-5xl font-display font-extrabold ${stat.color} mb-2 tracking-tight`}
                  >
                    <CountUp end={stat.val} />
                    {stat.suffix}
                  </h3>
                  <div
                    className={`h-0.5 w-12 bg-gradient-to-r ${stat.divider} my-3 rounded-full`}
                  ></div>
                  <span className="text-lg font-display font-bold text-[#0F172A] mb-2">
                    {stat.label}
                  </span>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <StoryImmersiveSplit />

      <SectionDivider />

      <MissionVisionCinematic />

      <SectionDivider />

      <CultureCreativeWall />

      <SectionDivider />

      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0F172A] mb-6 tracking-tight">
              Engineered For Strict Performance
            </h2>
            <p className="text-lg leading-relaxed text-[#475569]">
              Every application we configure is audited for execution speed,
              security vulnerability mitigation, and clean user experience.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="why-bento-grid">
            {/* Card 1: Uptime — Large */}
            <BentoCard
              number={99.9}
              suffix="%"
              label="Uptime Guarantee"
              desc="Enterprise-grade infrastructure with redundant failovers and real-time health monitoring."
              icon={<Activity className="w-5 h-5" />}
              iconBg="bg-emerald-500/10 text-emerald-500"
              size="large"
              delay={0}
            />

            {/* Card 2: Latency — Large */}
            <BentoCard
              number={12}
              suffix="ms"
              label="Average API Latency"
              desc="Optimized backends with edge caching and CDN distribution for sub-20ms response times."
              icon={<Zap className="w-5 h-5" />}
              iconBg="bg-amber-500/10 text-amber-500"
              size="large"
              delay={0.1}
            />

            {/* Card 3: Projects — Medium */}
            <BentoCard
              number={5}
              suffix="+"
              label="Projects Delivered"
              desc="Cross-industry digital products built to production standard."
              icon={<Rocket className="w-5 h-5" />}
              iconBg="bg-purple-500/10 text-[#7B2FF7]"
              size="medium"
              delay={0.2}
            />

            {/* Card 4: Security — Medium */}
            <BentoCard
              number={100}
              suffix="%"
              label="Security First"
              desc="Continuous dependency scanning and vulnerability audits."
              icon={<Shield className="w-5 h-5" />}
              iconBg="bg-rose-500/10 text-rose-500"
              size="medium"
              delay={0.3}
            />

            {/* Card 5: Support — Medium */}
            <BentoCard
              number={24}
              suffix="/7"
              label="Active Support"
              desc="Dedicated project managers and real-time communication channels."
              icon={<Clock className="w-5 h-5" />}
              iconBg="bg-blue-500/10 text-[#3B82F6]"
              size="medium"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* CORE VALUES */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#ECFEFF] border border-[#CFFAFE] text-[#06B6D4] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Values
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              What Guides Us
            </h2>
            <p className="text-lg text-[#475569]">
              Our engineering values steer every line of code we write and
              design decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Performance Absolute",
                desc: "We focus on clean architecture, optimized database queries, and lightweight assets to deliver absolute execution speed.",
                icon: <Cpu className="w-6 h-6" />,
              },
              {
                title: "Visual Excellence",
                desc: "We believe functional tools must feel gorgeous and responsive. Design is not just skin deep; it defines the product.",
                icon: <Star className="w-6 h-6" />,
              },
              {
                title: "Direct Transparency",
                desc: "Honest timelines, clear updates, and shared repositories form the foundation of our trusted client partnerships.",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative overflow-hidden p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(6,182,212,0.01)] hover:shadow-[0_20px_40px_rgba(6,182,212,0.06)] hover:border-[#06B6D4]/30 transition-all duration-300 group"
              >
                <img
                  src={VALUE_BG_IMAGES[val.title]}
                  className="absolute inset-0 w-full h-full object-cover opacity-[0.04] rounded-3xl pointer-events-none"
                />
                <div className="relative z-10 w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-[#06B6D4] mb-6 group-hover:scale-105 transition-transform duration-300">
                  {val.icon}
                </div>
                <h3 className="relative z-10 text-2xl font-display font-bold text-[#0F172A] mb-4">
                  {val.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed text-[#475569]">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SCROLL STORYTELLING FOUNDERS SECTION */}
      <section
        ref={sectionRef}
        className="relative hidden lg:block h-[350vh] bg-[#FAF7FF]"
      >
        <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
          <div className="container max-w-[1200px] mx-auto px-6 h-full flex flex-col justify-center relative">
            {/* Section Header (Fades out when scrolling) */}
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]),
                y: useTransform(scrollYProgress, [0, 0.15], [0, -30]),
              }}
              className="absolute top-16 left-6 right-6 text-center z-20"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-3">
                Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
                The Founders
              </h2>
            </motion.div>

            {/* Founders Stories Map */}
            <div className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center">
              <FounderArtwork scrollYProgress={scrollYProgress} />

              {founders.map((founder, idx) => {
                const styleObj = getFounderStyle(idx, scrollVal);
                return (
                  <div
                    key={idx}
                    style={styleObj}
                    className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
                  >
                    {/* Left Side: Circular Portrait (col-span-5) */}
                    <div className="lg:col-span-5 flex justify-center relative">
                      {/* Floating background blobs */}
                      <div
                        className="absolute w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
                        style={{
                          background: `radial-gradient(circle, ${founder.accent}, transparent 60%)`,
                          transform: "scale(1.2)",
                        }}
                      />

                      {/* Circular Portrait Frame (300px) */}
                      <motion.div
                        animate={{ y: [-6, 6, -6] }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="relative w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] rounded-full p-2 flex items-center justify-center"
                      >
                        {/* Animated rotating outer gradient ring */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${founder.accent}, #9333EA)`,
                            padding: "3px",
                          }}
                        >
                          <div className="w-full h-full bg-[#FAF7FF] rounded-full" />
                        </motion.div>

                        {/* Glass Layer Inner Ring */}
                        <div className="absolute inset-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-inner z-10 pointer-events-none" />

                        {/* Founder Portrait Image */}
                        <FounderHalo accentColor={founder.accent}>
                          <div className="w-[88%] h-[88%] rounded-full overflow-hidden z-0 bg-purple-50 shadow-md flex items-center justify-center">
                            <img
                              src={founder.image}
                              alt={founder.name}
                              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </FounderHalo>
                      </motion.div>
                    </div>

                    {/* Right Side: Content (col-span-7) */}
                    <div className="lg:col-span-7 text-left flex flex-col justify-center z-10">
                      <span
                        className="text-xs font-mono font-black uppercase tracking-wider mb-2 block"
                        style={{ color: founder.accent }}
                      >
                        {founder.role}
                      </span>
                      <h3
                        id={`founder-name-${idx}`}
                        className="text-4xl sm:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight mb-4"
                      >
                        {founder.name}
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-[#475569] mb-6 max-w-xl">
                        {founder.bio}
                      </p>

                      {/* Highlight Badges */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {founder.badges.map((badge, bIdx) => (
                          <div
                            key={bIdx}
                            className="px-4 py-2 rounded-xl backdrop-blur-md border border-white/60 text-xs font-bold text-slate-700 shadow-3xs"
                            style={{
                              backgroundColor: "rgba(255, 255, 255, 0.4)",
                              borderLeft: `3px solid ${founder.accent}`,
                            }}
                          >
                            {badge}
                          </div>
                        ))}
                      </div>

                      {/* Social handles */}
                      <div className="flex gap-4">
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#0A66C2" }}
                        >
                          <FiLinkedin className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#181717" }}
                        >
                          <FiGithub className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.email}
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#EA4335" }}
                        >
                          <Mail className="w-4.5 h-4.5" />
                        </motion.a>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE FOUNDERS SECTION */}
      <section className="relative lg:hidden overflow-hidden bg-[#FAF7FF] px-5 py-20">
        {/* Mobile background artwork */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          <img
            src={logoBgImg}
            alt="Viyan Info Tech Logo Background"
            className="w-[150%] h-auto object-cover transform -rotate-12"
          />
        </div>

        <div className="relative z-10">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-block rounded-full border border-[#E9D5FF] bg-[#E9D5FF]/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7B2FF7]">
              Leadership
            </span>

            <h2 className="text-3xl font-display font-bold tracking-tight text-[#0F172A]">
              The Founders
            </h2>
          </div>

          <div className="space-y-10">
            {founders.map((founder, idx) => (
              <motion.article
                key={founder.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/60 p-6 text-center shadow-[0_18px_50px_rgba(123,47,247,0.08)] backdrop-blur-md"
              >
                {/* Founder-specific glow */}
                <div
                  className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full opacity-20 blur-3xl"
                  style={{ backgroundColor: founder.accent }}
                />

                {/* Founder image */}
                <div className="relative z-10 mx-auto mb-7 flex items-center justify-center">
                  <motion.div
                    animate={{ y: [-4, 4, -4] }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-[220px] h-[220px] rounded-full p-2 flex items-center justify-center"
                  >
                    {/* Animated rotating outer gradient ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(135deg, ${founder.accent}, #9333EA)`,
                        padding: "3px",
                      }}
                    >
                      <div className="w-full h-full bg-[#FAF7FF] rounded-full" />
                    </motion.div>

                    {/* Glass Layer Inner Ring */}
                    <div className="absolute inset-2 bg-white/20 backdrop-blur-md rounded-full border border-white/40 shadow-inner z-10 pointer-events-none" />

                    {/* Founder Portrait Image */}
                    <FounderHalo accentColor={founder.accent}>
                      <div className="w-[88%] h-[88%] rounded-full overflow-hidden z-0 bg-purple-50 shadow-md flex items-center justify-center">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </FounderHalo>
                  </motion.div>
                </div>

                <div className="relative z-10">
                  <span
                    className="mb-2 block text-xs font-black uppercase tracking-wider"
                    style={{ color: founder.accent }}
                  >
                    {founder.role}
                  </span>

                  <h3 className="mb-4 text-3xl font-display font-extrabold text-[#0F172A]">
                    {founder.name}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-[#475569]">
                    {founder.bio}
                  </p>

                  <div className="mb-7 flex flex-wrap justify-center gap-2">
                    {founder.badges.map((badge) => (
                      <span
                        key={badge}
                        className="rounded-xl border border-white/70 bg-white/60 px-3 py-2 text-xs font-bold text-slate-700 shadow-sm"
                        style={{ borderLeft: `3px solid ${founder.accent}` }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} LinkedIn`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-sm"
                    >
                      <FiLinkedin className="h-4 w-4 text-[#0A66C2]" />
                    </a>

                    <a
                      href={founder.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-sm"
                    >
                      <FiGithub className="h-4 w-4 text-slate-800" />
                    </a>



                    <a
                      href={founder.email}
                      aria-label={`Email ${founder.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-sm"
                    >
                      <Mail className="h-4 w-4 text-purple-600" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <div className="relative z-30 bg-[#FAF7FF]">
        <SectionDivider />
      </div>

      {/* COMBINED CTA + FOOTER SECTION */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "950px" }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutImg}
            alt="About Us Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "rgba(10, 6, 25, 0.55)",
          }}
        />

        {/* TOP AREA: CTA OVERLAY */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pt-[100px] pb-12 px-6 mt-4 md:mt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 drop-shadow-xl">
              Ready to start your journey with us?
            </span>
            <motion.div
              whileHover={{ scale: 1.05, translateY: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="#contactform" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300 rounded-full" />
                <button
                  className="relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full shadow-[0_0_30px_rgba(147,51,234,0.45)] transition-all duration-300 border border-white/10"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                  }}
                >
                  Contact Us
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <LiquidFooter />
      </section>
    </div>
  );
}
