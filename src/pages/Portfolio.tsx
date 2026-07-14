import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { LiquidFooter } from "../components/LiquidFooter";
import workImg from "../assets/Workimg.webp";

// New Work Page Components
import "../styles/WorkPage.css";
import { WorkPageBg } from "../components/WorkPageBg";
import { WorkHeroCarousel } from "../components/WorkHeroCarousel";
import { WorkFeaturedSolutions } from "../components/WorkFeaturedSolutions";
import { WorkBentoGallery } from "../components/WorkBentoGallery";
import { WorkTechStack } from "../components/WorkTechStack";


// ─────────────────────────────────────────
// STATS COUNTER HOOK
// ─────────────────────────────────────────
function useCounter(end: number, duration: number = 2000, startInView: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(end * easeOut));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startInView]);

  return count;
}

function StatCard({ label, endValue, suffix = "", index }: { label: string, endValue: number, suffix?: string, index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useCounter(endValue, 2500, isInView);

  return (
    <motion.div
      ref={ref}
      className="work-stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="work-stat-card__value">
        {count}{suffix}
      </div>
      <div className="work-stat-card__label">{label}</div>
    </motion.div>
  );
}

// ─────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────
export default function Portfolio() {
  return (
    <div className="work-page">
      <WorkPageBg />

      {/* SECTION 1: Immersive Hero Carousel */}
      <WorkHeroCarousel />

      {/* SECTION 2: Portfolio Overview Stats */}
      <section className="work-overview">
        <div className="work-overview__container">
          <motion.h2
            className="work-overview__heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Software That < span > Powers Businesses</span >
          </motion.h2 >
          <motion.p
            className="work-overview__desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We build scalable enterprise software, AI solutions and digital products designed for startups, SMEs and growing organizations.
          </motion.p>

          <div className="work-overview__stats">
            <StatCard label="Projects" endValue={5} suffix="+" index={0} />
            <StatCard label="Solutions" endValue={100} suffix="%" index={1} />
            <StatCard label="Industries" endValue={2} suffix="+" index={2} />
            <StatCard label="Support" endValue={24} suffix="/7" index={3} />
          </div>
        </div >
      </section >

      {/* SECTION 3: Featured Solutions */}
      < WorkFeaturedSolutions />

      {/* SECTION 4: Project Gallery Bento Grid */}
      < WorkBentoGallery />

      {/* SECTION 5: Technology Stack */}
      < WorkTechStack />

      {/* ── CTA + FOOTER SECTION (unchanged from original) ── */}
      < section
        className="relative w-[94%] md:w-full mx-auto overflow-hidden rounded-t-[32px] rounded-b-none md:rounded-t-[40px] md:rounded-b-none z-10"
        style={{
          minHeight: "950px",
          marginTop: "80px",
          paddingTop: "70px",
          paddingBottom: "40px",
        }
        }
      >
        {/* Background image */}
        < div className="absolute inset-0 z-0" >
          <img
            src={workImg}
            alt="Work Background"
            className="w-full h-full object-cover object-center"
          />
        </div >

        {/* Cinematic overlay */}
        < div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "rgba(10, 10, 20, 0.45)" }}
        />

        {/* CTA */}
        <div className="relative z-10 flex justify-end px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl flex flex-col items-end text-right"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to build your solution?
            </span>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
              Let's coordinate on requirements and construct your application.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="self-center"
            >
              <Link to="/contact" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-[40px] opacity-55 group-hover:opacity-85 transition-opacity duration-300 rounded-full" />

                <button
                  className="relative px-[48px] py-[18px] text-white font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_40px_rgba(124,58,237,0.55)] transition-all duration-300 border border-white/10 flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #9333ea, #6366f1)",
                  }}
                >
                  Start Project <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer remains unchanged */}
        <LiquidFooter />
      </section >
    </div >
  );
}
