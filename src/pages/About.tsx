import { useRef, useState, useEffect, useMemo } from "react";
import { onHoverBurst } from "../utils/particleBurst";
import { glitchText } from "../utils/charGlitch";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Cpu,
  Star,
  Users,
  Activity,
  Linkedin,
  Github,
  Mail,
  Instagram,
  Shield,
  Zap,
  Rocket,
  Clock,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import { founders } from "../components/Founders";
import aboutImg from "../assets/aboutus.webp";
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
          <span className="section-tag">OUR STORY</span>

          <h2>
            Transforming Ideas Into
            <br />
            Digital Experiences
          </h2>

          <p>
            We started Viyan with a vision to create impactful digital products
            that combine innovation, creativity, and technology.
          </p>

          <div className="story-points">
            <div className="story-point">🚀 Startup Focused</div>
            <div className="story-point">🤖 AI Driven Innovation</div>
            <div className="story-point">⚡ Scalable Architecture</div>
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
          <span className="mv-tag">OUR MISSION</span>
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
          <span className="mv-tag">OUR VISION</span>
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
          🚀 Innovation First
        </motion.div>

        <motion.div
          className="culture-note note2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          🤝 Team Collaboration
        </motion.div>

        <motion.div
          className="culture-note note3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          ⚡ Fast Execution
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
        <span className="section-tag">OUR CULTURE</span>

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

          <h1>
            Building Digital
            <br />
            <span>Experiences</span>
            <br />
            That Matter
          </h1>

          <p>
            We craft scalable software, AI solutions, and modern digital
            experiences that help businesses innovate faster.
          </p>

          <div className="hero-buttons">
            <Link to="/contact">
              <button onMouseEnter={onHoverBurst} className="primary-btn">
                Start Project
              </button>
            </Link>
            <Link to="/portfolio">
              <button className="secondary-btn">Our Work</button>
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
            src="src/assets/about-tech-room.png"
            alt="Developer Workspace"
            className="hero-main-image"
          />

          <motion.div
            className="hero-floating-card card-1"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀 Startup Growth
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
            🤖 AI Solutions
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
            ⚡ Fast Delivery
          </motion.div>
        </motion.div>
      </section>

      <SectionDivider />

      {/* STATS SECTION */}
      <section className="py-20 bg-[#FAF7FF] relative">
        <AboutStatsBg />
        <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
            {[
              {
                val: "6+",
                label: "Projects Delivered",
                color: "text-[#7B2FF7]",
                bg: "bg-purple-500/5 border-purple-500/10",
              },
              {
                val: "5+",
                label: "Happy Clients",
                color: "text-[#3B82F6]",
                bg: "bg-blue-500/5 border-blue-500/10",
              },
              {
                val: "1+",
                label: "Experience",
                color: "text-[#06B6D4]",
                bg: "bg-cyan-500/5 border-cyan-500/10",
              },
              {
                val: "98%",
                label: "Success Rate",
                color: "text-[#10B981]",
                bg: "bg-emerald-500/5 border-emerald-500/10",
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-2xl border ${stat.bg} backdrop-blur-md text-center`}
              >
                <span
                  className={`block text-4xl sm:text-5xl font-display font-extrabold ${stat.color} mb-2`}
                >
                  {stat.val}
                </span>
                <span className="text-xs font-bold text-[#8D92B2] uppercase tracking-wider">
                  {stat.label}
                </span>
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
              number={50}
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
      <section ref={sectionRef} className="relative h-[350vh] bg-[#FAF7FF]">
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
                          <Linkedin className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#181717" }}
                        >
                          <Github className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.email}
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all"
                          style={{ color: "#EA4335" }}
                        >
                          <Mail className="w-4.5 h-4.5" />
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.1, y: -2 }}
                          href={founder.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-center hover:shadow-md transition-all text-white"
                          style={{
                            background:
                              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
                          }}
                        >
                          <Instagram className="w-4 h-4" />
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
