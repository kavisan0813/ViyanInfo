import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Smartphone,
  Code2,
  Palette,
  Brain,
  GraduationCap,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
} from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import inventryImg from "../assets/inventry.webp";
import emsImg from "../assets/ems.webp";
import flowerImg from "../assets/sakura.webp";
import dashboardImg from "../assets/Strategy.webp";
import { motion } from "framer-motion";
import { burst } from "../utils/particleBurst";
import astronautImg from "../assets/Astronaut.webp";
import visionImg from "../assets/Vision.png";
import saturnimage from "../assets/Saturn.webp";
import { BackgroundEffects } from "../components/BackgroundEffects";

export default function Home() {
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const astronautRef = useRef<HTMLImageElement>(null);
  const saturnRef = useRef<HTMLImageElement>(null);

  const handleCtaMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ctaContainerRef.current) return;
    const rect = ctaContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const moveX = (x - rect.width / 2) * 0.05;
    const moveY = (y - rect.height / 2) * 0.05;

    if (astronautRef.current) {
      gsap.to(astronautRef.current, {
        x: moveX,
        y: moveY,
        duration: 0.6,
        ease: "power2.out",
      });
    }

    if (saturnRef.current) {
      gsap.to(saturnRef.current, {
        x: moveX * 0.8,
        y: moveY * 0.8,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  };

  const handleCtaMouseLeave = () => {
    if (astronautRef.current) {
      gsap.to(astronautRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    }

    if (saturnRef.current) {
      gsap.to(saturnRef.current, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
      });
    }
  };

  const onHoverBurst = (e: React.MouseEvent<HTMLElement>) => {
    burst(e.currentTarget);
  };
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dashRef = useRef<HTMLImageElement>(null);
  const flowerRef = useRef<HTMLImageElement>(null);
  const heroBgLayerRef = useRef<HTMLDivElement>(null);
  const heroBgBlobRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesTrackRef = useRef<HTMLDivElement>(null);
  const servicesBlob1Ref = useRef<HTMLDivElement>(null);
  const servicesBlob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Force a ScrollTrigger sort and refresh shortly after mount to ensure correct layout/height calculations
    const timer = setTimeout(() => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  // Ambient Particle Burst on Load
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      if (!heroRef.current) return;
      const container = heroRef.current;
      const particles: HTMLDivElement[] = [];

      for (let i = 0; i < 24; i++) {
        const p = document.createElement("div");
        const size = Math.random() * 4 + 4; // 4-8px
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        p.style.borderRadius = "50%";
        p.style.backgroundColor = "var(--color-violet-glow, #a78bfa)";
        p.style.position = "absolute";
        p.style.left = `50%`;
        p.style.top = `50%`;
        p.style.pointerEvents = "none";
        p.style.zIndex = "5";
        container.appendChild(p);
        particles.push(p);

        gsap.fromTo(
          p,
          { x: 0, y: 0, opacity: 0, scale: 0 },
          {
            x: (Math.random() - 0.5) * 600, // ±300px
            y: (Math.random() - 0.5) * 600,
            opacity: 0, // fromTo handles 0->1->0 via keyframes
            scale: 0, // handled by keyframes
            duration: 0.8,
            ease: "power2.out",
            delay: Math.random() * 0.2, // Stagger effect
            keyframes: [
              { opacity: 0, scale: 0, duration: 0 },
              { opacity: 1, scale: 1.5, duration: 0.4 },
              { opacity: 0, scale: 0, duration: 0.4 },
            ],
            onComplete: () => {
              if (p.parentNode) p.parentNode.removeChild(p);
            },
          },
        );
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ALL DESKTOP / TABLET UP ANIMATIONS (>= 769px)
      mm.add("(min-width: 769px)", () => {
        // --- Hero Entrance ---
        const badge = ".hero-badge";
        const words = gsap.utils.toArray<HTMLElement>(
          ".word-inner",
          heroContentRef.current,
        );
        const subtitle = ".hero-subtitle";
        const ctaButtons = gsap.utils.toArray<HTMLElement>(
          ".hero-cta",
          heroContentRef.current,
        );

        const tl = gsap.timeline();
        tl.from(badge, {
          y: 30,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: 0.5,
        });

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          tl.from(
            words,
            {
              y: "120%",
              rotateX: -40,
              opacity: 0,
              stagger: 0.06,
              ease: "expo.out",
              duration: 1.3,
            },
            "-=0.7",
          );
        } else {
          tl.from(
            words,
            { opacity: 0, y: 20, duration: 1, stagger: 0.1 },
            "-=0.7",
          );
        }

        tl.from(subtitle, { y: 30, opacity: 0, duration: 0.9 }, "-=0.7").from(
          ctaButtons,
          { y: 25, opacity: 0, stagger: 0.1, duration: 0.8 },
          "-=0.6",
        );

        // --- Hero Scroll Exit ---
        gsap.to(heroContentRef.current, {
          y: -140,
          opacity: 0,
          scale: 0.96,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: () => `+=${(heroRef.current?.offsetHeight || 600) * 0.7}`,
            scrub: 1.2,
          },
        });

        // Floating Animations
        gsap.to(dashRef.current, {
          y: -15,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
        gsap.to(flowerRef.current, {
          y: 15,
          duration: 4,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });

        // Mouse Parallax (Lusion-inspired layered movement)
        const handleMouseMove = (e: MouseEvent) => {
          // Normalized cursor coordinates (-0.5 to 0.5)
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;

          // Background Layer: 10px movement
          gsap.to(heroBgLayerRef.current, {
            x: x * 20, // max 10px each way
            y: y * 20,
            duration: 1.5,
            ease: "power2.out",
          });

          // Middle Layer (flower): 20px movement
          gsap.to(flowerRef.current, {
            x: -x * 40,
            y: -y * 40,
            duration: 1.2,
            ease: "power2.out",
          });

          // Foreground Layer (dash): 30px movement
          gsap.to(dashRef.current, {
            x: x * 60,
            y: y * 60,
            duration: 0.8,
            ease: "power2.out",
          });

          // Background Blobs tracking cursor slightly
          gsap.to(heroBgBlobRef.current, {
            x: x * 100,
            y: y * 100,
            duration: 2,
            ease: "power2.out",
          });
        };

        if (heroRef.current) {
          heroRef.current.addEventListener("mousemove", handleMouseMove);
          return () => {
            if (heroRef.current) {
              heroRef.current.removeEventListener("mousemove", handleMouseMove);
            }
          };
        }
      });

      // MOBILE ANIMATIONS (< 769px)
      mm.add("(max-width: 768px)", () => {
        const badge = ".hero-badge";
        const words = gsap.utils.toArray<HTMLElement>(
          ".word-inner",
          heroContentRef.current,
        );
        const ctaButtons = gsap.utils.toArray<HTMLElement>(
          ".hero-cta",
          heroContentRef.current,
        );

        const tl = gsap.timeline();
        tl.from(badge, { opacity: 0, duration: 0.5 })
          .from(
            words,
            { opacity: 0, y: 20, duration: 0.8, stagger: 0.05 },
            "-=0.2",
          )
          .from(ctaButtons, { opacity: 0, duration: 0.5 }, "-=0.3");
      });

      // HORIZONTAL SCROLL FOR SERVICES
      mm.add("(min-width: 1024px)", () => {
        if (servicesSectionRef.current && servicesTrackRef.current) {
          // Calculate max scrollable distance
          const getScrollAmount = () =>
            -(servicesTrackRef.current!.scrollWidth - window.innerWidth);

          const cards = gsap.utils.toArray<HTMLElement>(
            ".service-card",
            servicesTrackRef.current,
          );

          // Pinned ScrollTrigger animation with dynamic scaling
          gsap.to(servicesTrackRef.current, {
            x: getScrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () =>
                `+=${servicesTrackRef.current!.scrollWidth - window.innerWidth}`,
              invalidateOnRefresh: true,
              onUpdate: () => {
                const centerX = window.innerWidth / 2;
                cards.forEach((card) => {
                  const rect = card.getBoundingClientRect();
                  const cardCenter = rect.left + rect.width / 2;
                  const distance = Math.abs(centerX - cardCenter);
                  const maxDist = window.innerWidth * 0.6;

                  // Scale from 0.9 to 1 based on distance
                  let scale = 1 - (distance / maxDist) * 0.15;
                  if (scale < 0.9) scale = 0.9;
                  if (scale > 1) scale = 1;

                  // Rotation slightly based on distance to center
                  let rotateY = ((cardCenter - centerX) / maxDist) * 10;
                  if (rotateY > 5) rotateY = 5;
                  if (rotateY < -5) rotateY = -5;

                  // Glow opacity
                  let glowOpacity = 1 - distance / (rect.width * 0.8);
                  if (glowOpacity < 0) glowOpacity = 0;
                  if (glowOpacity > 1) glowOpacity = 1;

                  gsap.set(card, {
                    scale: scale,
                    rotationY: rotateY,
                    transformPerspective: 1000,
                  });

                  const glow = card.querySelector(
                    ".dynamic-glow",
                  ) as HTMLElement;
                  if (glow) {
                    gsap.set(glow, { opacity: glowOpacity * 0.5 }); // subtle active glow
                  }
                });
              },
            },
          });

          // Parallax background blobs
          gsap.to(servicesBlob1Ref.current, {
            x: -300,
            y: 100,
            ease: "none",
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              start: "top top",
              end: () =>
                `+=${servicesTrackRef.current!.scrollWidth - window.innerWidth}`,
              scrub: 1.5,
            },
          });

          gsap.to(servicesBlob2Ref.current, {
            x: 300,
            y: -100,
            ease: "none",
            scrollTrigger: {
              trigger: servicesSectionRef.current,
              start: "top top",
              end: () =>
                `+=${servicesTrackRef.current!.scrollWidth - window.innerWidth}`,
              scrub: 2,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-abyss relative">
      <BackgroundEffects />
      {/* SECTION 1 - HERO (UNTOUCHED) */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F8F5FF]"
      >
        {/* Content */}
        <div ref={heroContentRef} className="container-fluid relative z-10">
          <div className="flex justify-between items-center p-15">
            {/* Left Box: Typographic Content (5/12 equivalent) */}
            <div className="lg:col-span-5 text-left flex flex-col items-start">
              <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-[#E9D5FF] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
                <span className="text-[12px] font-body font-semibold text-[#7C3AED]">
                  We Build Digital Excellence
                </span>
              </div>

              <h1 className="text-[clamp(34px,4.5vw,56px)] font-display font-bold text-[#1F1430] leading-[1.1] tracking-tight mb-6">
                <div
                  className="flex gap-[0.3em] flex-wrap"
                  style={{ perspective: "1000px" }}
                >
                  {[
                    { text: "We", color: "" },
                    { text: "Engineer", color: "" },
                    {
                      text: "Digital",
                      color: "text-[#9333ea]",
                    },
                    { text: "Excellence", color: "text-[#9333ea]" },
                    { text: "From", color: "" },
                    { text: "Day", color: "" },
                    { text: "One.", color: "" },
                  ].map((wordObj, i) => (
                    <span
                      key={i}
                      className={`inline-block overflow-hidden pb-2`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <span
                        className={`word-inner inline-block ${wordObj.color} ${i === 2 || i === 3 ? "playfairDisplay" : ""}`}
                        style={{ transformOrigin: "bottom center" }}
                      >
                        {wordObj.text}
                      </span>
                    </span>
                  ))}
                </div>
              </h1>

              <p className="hero-subtitle body-copy text-[#6B7280] max-w-readable mb-10 text-[15px] leading-relaxed">
                VIYAN Infotech delivers elite websites, mobile apps, and SaaS
                platforms for ambitious businesses. We turn complex ideas into
                scalable digital products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link to="/portfolio" className="hero-cta">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                  >
                    Explore Our Work{" "}
                    <span className="text-lg leading-none font-normal">→</span>
                  </button>
                </Link>
                <Link to="/contact" className="hero-cta">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer"
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Box: Coded Premium Glass Dashboard */}
            <div className="lg:col-span-7 w-full flex justify-end relative select-none mt-16 lg:mt-0">
              {/* Main Dashboard Wrapper */}
              <div className="relative w-full lg:translate-x-[40px]">
                {/* Layer 2: Premium 3D Translucent Flower Backdrop Image */}
                <img
                  ref={flowerRef}
                  src={flowerImg}
                  alt="Translucent Flower Decor"
                  style={{ bottom: "10px", left: "-50px", width: "500px" }}
                  className=" absolute  h-auto pointer-events-none z-10 opacity-90 object-contain"
                />

                {/* Layer 3: Dashboard Image (Foreground) */}
                <img
                  ref={dashRef}
                  src={dashboardImg}
                  alt="Dashboard Showcase"
                  style={{ width: "1000px" }}
                  className="object-contain z-20 relative rounded-2xl img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 1: TRUST & ACHIEVEMENTS */}
      <section className="relative py-28 overflow-hidden bg-[#FAF7FF]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,47,247,0.03)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-x-10 lg:gap-y-8">
            {[
              {
                val: 6,
                suffix: "+",
                label: "Projects Delivered",
                desc: "Enterprise and startup applications shipped globally.",
                color: "text-[#7B2FF7]",
                divider: "from-[#7B2FF7] to-purple-400",
                glow: "from-purple-500/5 to-indigo-500/5",
                borderGlow: "from-[#7B2FF7]/20 to-[#9333EA]/20",
              },
              {
                val: 5,
                suffix: "+",
                label: "Happy Clients",
                desc: "Long-term partnerships built on engineering excellence.",
                color: "text-[#3B82F6]",
                divider: "from-[#3B82F6] to-blue-400",
                glow: "from-blue-500/5 to-cyan-500/5",
                borderGlow: "from-[#3B82F6]/20 to-[#60A5FA]/20",
              },
              {
                val: 1,
                suffix: "+",
                label: "Years Experience",
                desc: "Years of refining processes and modern technology stacks.",
                color: "text-[#06B6D4]",
                divider: "from-[#06B6D4] to-cyan-400",
                glow: "from-cyan-500/5 to-teal-500/5",
                borderGlow: "from-[#06B6D4]/20 to-[#22D3EE]/20",
              },
              {
                val: 98,
                suffix: "%",
                label: "Client Satisfaction",
                desc: "Uncompromising quality, transparency, and delivery speed.",
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
                    gsap.utils.toArray<HTMLElement>(".stat-card");
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
                    gsap.utils.toArray<HTMLElement>(".stat-card");

                  gsap.to(allCards, {
                    y: 0,
                    scale: 1,
                    filter: "brightness(1)",
                    duration: 0.3,
                  });
                }}
                className="stat-card relative group p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_10px_30px_rgba(123,47,247,0.03)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.08)]"
              >
                {/* Persistent Subtle Pulse Glow */}
                <div
                  className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${stat.borderGlow} opacity-[0.15] blur-xl animate-pulse pointer-events-none z-0`}
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

      {/* SECTION 2: OUR SERVICES */}
      <section
        ref={servicesSectionRef}
        className="relative py-24 lg:py-0 lg:h-screen lg:flex lg:items-center bg-[#FAF7FF] overflow-hidden"
      >
        {/* Parallax Blobs */}
        <div
          ref={servicesBlob1Ref}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px] pointer-events-none"
        ></div>
        <div
          ref={servicesBlob2Ref}
          className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[100px] pointer-events-none"
        ></div>

        <div className="w-full relative z-10">
          <div className="container lg:pl-[5%] xl:pl-[10%] lg:pr-12 text-center lg:text-left mb-12 lg:mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
              Our Services
            </h2>
            <p className="text-lg text-[#475569] max-w-xl mx-auto lg:mx-0">
              We construct high-performing digital solutions using modern
              engineering workflows and state-of-the-art architectures.
            </p>
          </div>

          <div className="w-full overflow-hidden pb-12 pt-4">
            <div
              ref={servicesTrackRef}
              className="flex flex-col lg:flex-row flex-nowrap gap-8 px-6 lg:px-[5%] xl:px-[10%] lg:w-max"
            >
              {[
                {
                  title: "Custom Software Development",
                  icon: <Code2 className="w-8 h-8 text-[#7B2FF7]" />,
                  desc: "Tailored enterprise solutions built from scratch to streamline your business workflows.",
                  tag: "Custom",
                  bg: "from-purple-500/10 to-indigo-500/10",
                  tagColor: "text-[#7B2FF7]",
                  learnMoreColor: "text-[#7B2FF7]",
                  btnBg: "bg-purple-500/5",
                  btnDot: "bg-[#7B2FF7]",
                  gradientBorder: "from-[#7B2FF7]/10 to-[#9333EA]/10",
                  path: "/services",
                },
                {
                  title: "Web Application Development",
                  icon: <Globe className="w-8 h-8 text-[#3B82F6]" />,
                  desc: "High-performance React & Next.js applications engineered for scalability and speed.",
                  tag: "Web",
                  bg: "from-blue-500/10 to-indigo-500/10",
                  tagColor: "text-[#3B82F6]",
                  learnMoreColor: "text-[#3B82F6]",
                  btnBg: "bg-blue-500/5",
                  btnDot: "bg-[#3B82F6]",
                  gradientBorder: "from-[#3B82F6]/10 to-blue-500/10",
                  path: "/services/websites",
                },
                {
                  title: "Mobile App Development",
                  icon: <Smartphone className="w-8 h-8 text-[#06B6D4]" />,
                  desc: "Native iOS and Android smart applications built with React Native for cross-platform efficiency.",
                  tag: "Mobile",
                  bg: "from-cyan-500/10 to-indigo-500/10",
                  tagColor: "text-[#06B6D4]",
                  learnMoreColor: "text-[#06B6D4]",
                  btnBg: "bg-cyan-500/5",
                  btnDot: "bg-[#06B6D4]",
                  gradientBorder: "from-[#06B6D4]/10 to-cyan-500/10",
                  path: "/services/mobile",
                },
                {
                  title: "AI & Automation Solutions",
                  icon: <Brain className="w-8 h-8 text-[#EC4899]" />,
                  desc: "Intelligent workflows, LLM integrations, OpenAI chatbots, and business automation pipelines.",
                  tag: "Artificial Intelligence",
                  bg: "from-pink-500/10 to-indigo-500/10",
                  tagColor: "text-[#EC4899]",
                  learnMoreColor: "text-[#EC4899]",
                  btnBg: "bg-pink-500/5",
                  btnDot: "bg-[#EC4899]",
                  gradientBorder: "from-[#EC4899]/10 to-pink-500/10",
                  path: "/services",
                },
                {
                  title: "UI/UX Design",
                  icon: <Palette className="w-8 h-8 text-[#F97316]" />,
                  desc: "Research-driven, gorgeous user interfaces and delightful digital experiences.",
                  tag: "Design",
                  bg: "from-orange-500/10 to-indigo-500/10",
                  tagColor: "text-[#F97316]",
                  learnMoreColor: "text-[#F97316]",
                  btnBg: "bg-orange-500/5",
                  btnDot: "bg-[#F97316]",
                  gradientBorder: "from-[#F97316]/10 to-orange-500/10",
                  path: "/services",
                },
                {
                  title: "Internship & Training Programs",
                  icon: <GraduationCap className="w-8 h-8 text-[#10B981]" />,
                  desc: "Empowering the next generation of engineers with hands-on projects and mentorship.",
                  tag: "Education",
                  bg: "from-green-500/10 to-indigo-500/10",
                  tagColor: "text-[#10B981]",
                  learnMoreColor: "text-[#10B981]",
                  btnBg: "bg-green-500/5",
                  btnDot: "bg-[#10B981]",
                  gradientBorder: "from-[#10B981]/10 to-emerald-500/10",
                  path: "/internship",
                },
              ].map((service, idx) => (
                <HorizontalTiltCard key={idx} service={service} idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Work
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link
              to="/portfolio"
              className="text-sm font-semibold text-[#7B2FF7] flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Case Studies <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Horizontal scroll container with beautiful custom scrollbar */}
          <div className="flex gap-8 overflow-x-auto pb-8 pt-4 hide-scrollbar snap-x snap-mandatory">
            {[
              {
                title: "MedAssist Pharmacy Management",
                category: "Healthcare SaaS",
                desc: "Integrated pharmacy inventory control and smart billing engine used by medical franchises.",
                image: inventryImg,
                tags: ["React.js", "Node.js", "PostgreSQL", "WebSockets"],
              },
              {
                title: "ERP Management Platform",
                category: "Enterprise System",
                desc: "Comprehensive operations ecosystem supporting resource planning, scheduling, and custom reporting.",
                image: emsImg,
                tags: ["Next.js", "Python", "Django", "TailwindCSS"],
              },
              {
                title: "Billing Software",
                category: "Fintech",
                desc: "Sub-second ledger calculations, invoice generator pipelines, and automated multi-gate payment settlement.",
                image: inventryImg,
                tags: ["React.js", "Express", "MongoDB", "ChartJS"],
              },
              {
                title: "CRM Solution",
                category: "SaaS Dashboard",
                desc: "Complete client communication tracking, automated pipelines, and conversion visualizers.",
                image: emsImg,
                tags: ["TypeScript", "Next.js", "Firebase", "Framer Motion"],
              },
              {
                title: "Internship Management Portal",
                category: "Education Tech",
                desc: "Tracking metrics, automated certifications, and course delivery timelines for students.",
                image: emsImg,
                tags: ["React.js", "TailwindCSS", "Node.js", "MySQL"],
              },
              {
                title: "Custom Business Automation",
                category: "Business Intelligence",
                desc: "Scrape, structure, analyze, and automate manual administrative tasks into clean background cron pipelines.",
                image: inventryImg,
                tags: ["Python", "FastAPI", "Docker", "AWS Lambda"],
              },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="w-[320px] sm:w-[420px] shrink-0 snap-start bg-white/40 backdrop-blur-md border border-white/60 p-6 rounded-3xl shadow-[0_10px_30px_rgba(123,47,247,0.02)] hover:shadow-[0_20px_40px_rgba(123,47,247,0.06)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Zoom mockup container */}
                  <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-6 relative bg-purple-50">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#7B2FF7] border border-[#E9D5FF] shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3 group-hover:text-[#7B2FF7] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#E9D5FF]/30 text-[#7B2FF7] text-[11px] font-semibold font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/portfolio" className="w-full">
                  <button className="w-full py-3 rounded-xl bg-white border border-[#E9D5FF] hover:border-[#7B2FF7] hover:bg-[#7B2FF7]/5 text-sm font-semibold text-[#0F172A] hover:text-[#7B2FF7] transition-all duration-300 flex items-center justify-center gap-2">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 4: DEVELOPMENT PROCESS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              A structured lifecycle designed to transform vague requirements
              into scalable, robust digital platforms.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Timeline Path Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-[#E9D5FF] -translate-x-1/2 z-0"></div>

            <div className="space-y-16">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We map business goals, technical limits, and analyze your competitive space.",
                },
                {
                  step: "02",
                  title: "Planning",
                  desc: "Drafting user flows, system specifications, sprint milestones, and data structures.",
                },
                {
                  step: "03",
                  title: "UI/UX Design",
                  desc: "Constructing pixel-perfect interface wireframes, component styles, and functional prototypes.",
                },
                {
                  step: "04",
                  title: "Development",
                  desc: "Agile, code-reviewed engineering utilizing modern frontend libraries, safe REST APIs, and database migrations.",
                },
                {
                  step: "05",
                  title: "Testing",
                  desc: "Unit testing, manual QA pipelines, integration sanity audits, and cross-platform verification.",
                },
                {
                  step: "06",
                  title: "Deployment",
                  desc: "Production release setup on scalable cloud hosts with zero-downtime, continuous monitoring, and optimization.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row relative z-10 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Icon Indicator Circle */}
                  <div className="absolute left-8 lg:left-1/2 top-0 w-8 h-8 rounded-full bg-white border-4 border-[#7B2FF7] -translate-x-1/2 flex items-center justify-center shadow-md z-20"></div>

                  <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:px-12 text-left">
                    <div
                      className={`p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs hover:border-[#7B2FF7]/30 transition-colors duration-300 relative group`}
                    >
                      <span className="absolute top-4 right-6 text-4xl font-mono font-extrabold text-[#7B2FF7]/10 group-hover:text-[#7B2FF7]/20 transition-colors">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#475569] leading-relaxed text-sm">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 5: TECHNOLOGY STACK */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Tools
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              We leverage modern language frameworks and cloud standards to
              deploy resilient services.
            </p>
          </div>

          {/* Categorized Tech Badges */}
          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {[
              {
                category: "Frontend",
                items: ["React", "Next.js", "TypeScript", "TailwindCSS"],
              },
              {
                category: "Backend Language",
                items: ["Java", "Python", "JavaScript", "Go"],
              },
              {
                category: "Framework",
                items: ["SpringBoot", "FastAPI", "NodeJS", "Fiber, Gin"],
              },
              {
                category: "Database",
                items: ["PostgreSQL", "MongoDB", "MySQL", "SpaceTime DB"],
              },
              {
                category: "Cloud",
                items: ["AWS", "Docker", "Firebase", "Vercel"],
              },
              {
                category: "AI & ML",
                items: [
                  "Fine Tuning`",
                  "LangChain",
                  "Vector DBs",
                  "LlamaIndex",
                ],
              },
            ].map((cat, idx) => {
              const techColors: Record<string, string> = {
                "react": "#61DAFB",
                "next.js": "#000000",
                "typescript": "#3178C6",
                "tailwindcss": "#06B6D4",
                "java": "#ED8B00",
                "python": "#3776AB",
                "javascript": "#F7DF1E",
                "go": "#00ADD8",
                "springboot": "#6DB33F",
                "fastapi": "#009688",
                "nodejs": "#339933",
                "node.js": "#339933",
                "fiber, gin": "#00ADD8",
                "postgresql": "#336791",
                "mongodb": "#47A248",
                "mysql": "#00758F",
                "spacetime db": "#7B2FF7",
                "aws": "#FF9900",
                "docker": "#2496ED",
                "firebase": "#FFCA28",
                "vercel": "#000000",
                "fine tuning`": "#A855F7",
                "langchain": "#00A389",
                "vector dbs": "#8B5CF6",
                "llamaindex": "#E24A8D",
                "django": "#092E20",
                "openai": "#10A37F"
              };

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 text-left flex flex-col justify-between"
                >
                  <h3 className="font-display font-bold text-[#7B2FF7] text-sm uppercase tracking-wider border-b border-[#E9D5FF] pb-3 mb-4">
                    {cat.category}
                  </h3>
                  <div className="flex flex-col gap-2.5">
                    {cat.items.map((item, iIdx) => {
                      const cleanKey = item.toLowerCase().trim();
                      const color = techColors[cleanKey] || "#7B2FF7";
                      return (
                        <div
                          key={iIdx}
                          className="flex items-center gap-2 text-sm text-[#0F172A] font-semibold"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: color }}
                          ></span>
                          {item}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div> */}

          {/* Marquee Row */}
          <div className="mt-16 relative w-full overflow-hidden py-4 border-y border-[#E9D5FF]/30">
            <div className="flex w-[200%] gap-12 animate-[ticker-left_30s_linear_infinite]">
              {Array(2)
                .fill([
                  "React",
                  "Next.js",
                  "Node.js",
                  "Python",
                  "Django",
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "AWS",
                  "Docker",
                  "Firebase",
                  "TailwindCSS",
                  "TypeScript",
                  "OpenAI",
                ])
                .flat()
                .map((tech, idx) => {
                  const techColors: Record<string, string> = {
                    react: "#61DAFB",
                    "next.js": "#000000",
                    typescript: "#3178C6",
                    tailwindcss: "#06B6D4",
                    java: "#ED8B00",
                    python: "#3776AB",
                    javascript: "#F7DF1E",
                    go: "#00ADD8",
                    springboot: "#6DB33F",
                    fastapi: "#009688",
                    nodejs: "#339933",
                    "node.js": "#339933",
                    "fiber, gin": "#00ADD8",
                    postgresql: "#336791",
                    mongodb: "#47A248",
                    mysql: "#00758F",
                    "spacetime db": "#7B2FF7",
                    aws: "#FF9900",
                    docker: "#2496ED",
                    firebase: "#FFCA28",
                    vercel: "#000000",
                    "fine tuning`": "#A855F7",
                    langchain: "#00A389",
                    "vector dbs": "#8B5CF6",
                    llamaindex: "#E24A8D",
                    django: "#092E20",
                    openai: "#10A37F",
                  };
                  const cleanKey = tech.toLowerCase().trim();
                  const color = techColors[cleanKey] || "#7B2FF7";
                  return (
                    <div
                      key={idx}
                      className="px-6 py-2.5 rounded-xl bg-white/70 border border-white font-mono font-bold text-sm shadow-2xs shrink-0"
                      style={{ color: color }}
                    >
                      {tech}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 6: WHY CHOOSE VIYANINFO */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Value Proposition
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Why ViyanInfo
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              We stand apart through our commitment to pixel-perfect design,
              clean code architecture, and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Startup Friendly",
                desc: "Speed is our default. We help build MVP drafts and iteratively expand them as you validate coordinates.",
                icon: "🚀",
              },
              {
                title: "Enterprise Ready",
                desc: "We follow industry security practices, data encryption standards, and construct clean, modular systems.",
                icon: "🛡️",
              },
              {
                title: "Scalable Architecture",
                desc: "Modular designs and serverless setups built to handle traffic growth effortlessly.",
                icon: "🏗️",
              },
              {
                title: "Fast Delivery",
                desc: "Weekly reviews, continuous delivery pipelines, and optimized coordination to launch on time.",
                icon: "⚡",
              },
              {
                title: "Dedicated Support",
                desc: "Direct communication channels with the engineering team. Quick response times without red tape.",
                icon: "🤝",
              },
              {
                title: "Affordable Pricing",
                desc: "Highly optimized engineering overheads allow us to offer world-class developer talent at realistic costs.",
                icon: "💎",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 hover:border-[#7B2FF7]/20 shadow-xs hover:shadow-[0_15px_30px_rgba(123,47,247,0.04)] transition-all duration-300 flex items-start gap-5 text-left"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E9D5FF]/30 border border-[#E9D5FF] flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 7: ABOUT VIYANINFO */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
                About ViyanInfo
              </h2>
              <p className="text-[#475569] leading-relaxed mb-8">
                At ViyanInfo, we build software products that help companies
                grow. We merge design aesthetics with clean engineering
                architectures to solve complex business problems.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Our Mission",
                    desc: "To engineer digital tools that simplify operations, increase efficiency, and scale seamlessly.",
                  },
                  {
                    title: "Our Vision",
                    desc: "To become a world-leading technology agency defined by quality, visual design precision, and speed.",
                  },
                  {
                    title: "Core Values",
                    desc: "Transparency, performance-first code, collaboration, and continuous iteration.",
                  },
                ].map((val, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#7B2FF7]/10 text-[#7B2FF7]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-[#0F172A] mb-1">
                        {val.title}
                      </h4>
                      <p className="text-sm text-[#475569]">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Illustrative Box */}
            <div className="lg:col-span-6 flex justify-center">
              <motion.img
                src={visionImg}
                alt="ViyanInfo Vision"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-lg rounded-3xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* SECTION 9: CLIENT TESTIMONIALS */}
      <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Client Testimonials
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* SECTION 10: FAQ */}
      {/* <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      <SectionDivider /> */}

      <section className="bg-black relative z-20">
        <div className="container-fluid mx-auto relative z-10">
          <motion.div
            ref={ctaContainerRef}
            onMouseMove={handleCtaMouseMove}
            onMouseLeave={handleCtaMouseLeave}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="pt-16 pb-0 md:pt-20 md:pb-0 bg-black text-center text-white relative shadow-2xl"
          >
            {/* Glowing particle blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-3xl animate-[float-y_15s_ease-in-out_infinite] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/20 blur-3xl animate-[float-y_12s_ease-in-out_infinite] pointer-events-none"></div>

            {/* Floating CSS particles with mouse repulsion */}
            <CTAParticles />
            <div className="absolute left-[2%] opacity-70 pointer-events-none z-10 drop-shadow-2xl animate-[float-y_7s_ease-in-out_infinite] saturnimage  top-[20%]">
              {/* Saturn image floating in top left */}
              <img
                src={saturnimage}
                alt="Saturn"
                className="animate-[float-y_6s_ease-in-out_infinite] img-fluid w-[500px] md:w-[700px]"
              />
            </div>

            <div
              className="absolute flip-horizontal right-4 opacity-80 pointer-events-none z-10 drop-shadow-2xl"
              style={{ bottom: "-80px" }}
            >
              {/* Astronaut Image floating in bottom right */}
              <img
                ref={astronautRef}
                src={astronautImg}
                alt="Astronaut"
                className="animate-[float-y_6s_ease-in-out_infinite] img-fluid w-[350px] md:w-[250px]"
              />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(15,23,42,0.15)_100%)] pointer-events-none"></div>

            <div className="relative z-20 flex flex-col items-center justify-center">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
                Let's Partner Up
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight leading-tight mb-6">
                Let's Build Something Amazing Together
              </span>
              <p className="text-lg text-purple-100 max-w-xl mx-auto mb-10 leading-relaxed">
                Transform your ideas into scalable digital products with our
                engineering and design teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center relative z-20 mb-8">
                <Link to="/contact" className="w-full sm:w-auto">
                  <MagneticButton>
                    <button
                      onMouseEnter={onHoverBurst}
                      className="w-full sm:w-auto px-8 py-4 bg-white text-[#7B2FF7] font-bold text-sm rounded-xl shadow-lg hover:bg-purple-50 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer pointer-events-auto"
                    >
                      Start Your Project
                    </button>
                  </MagneticButton>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <MagneticButton>
                    <button
                      onMouseEnter={onHoverBurst}
                      className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/20 hover:scale-102 active:scale-98 transition-all duration-300 cursor-pointer pointer-events-auto"
                    >
                      Schedule Call
                    </button>
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function CountUp({ end, duration = 2.5 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}</span>;
}

/**
 * Client Testimonial Carousel component as an infinite marquee.
 */
function TestimonialCarousel() {
  const reviews = [
    {
      text: "ViyanInfo developed our ERP platform. The design is beautiful, and the API speeds are outstanding. They delivered a week ahead of schedule.",
      name: "Sarah Jenkins",
      role: "Operations Director, MedGroup",
      stars: 5,
    },
    {
      text: "The web application we built together has scaled to 10k daily users without issue. Excellent engineering work and reliable customer support.",
      name: "David K.",
      role: "Founder, LedgerTech",
      stars: 5,
    },
    {
      text: "Invaluable partners for custom backend tools. Their team writes clean code, sets up CI/CD pipelines, and keeps architecture extremely tidy.",
      name: "Michelle Ross",
      role: "CTO, FinFlow",
      stars: 5,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden flex pt-4 pb-8">
      {/* Left/Right Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAF7FF] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAF7FF] to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-6 w-max animate-[ticker-left_40s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedReviews.map((review, idx) => (
          <div
            key={idx}
            className="w-[350px] sm:w-[450px] p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(123,47,247,0.03)] flex flex-col justify-between shrink-0"
          >
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {Array(review.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <p className="text-lg text-[#0F172A] font-display leading-relaxed">
                "{review.text}"
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-[#0F172A] text-[15px]">
                {review.name}
              </h4>
              <span className="text-sm text-[#7B2FF7] font-medium">
                {review.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ServiceCard {
  title: string;
  icon: React.ReactNode;
  desc: string;
  tag: string;
  bg: string;
  tagColor: string;
  learnMoreColor: string;
  btnBg: string;
  btnDot: string;
  gradientBorder: string;
  path: string;
}

function HorizontalTiltCard({
  service,
  idx,
}: {
  service: ServiceCard;
  idx: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: 8,
        rotateX: -4,
        scale: 1.03,
        y: -4,
        duration: 0.4,
        ease: "power2.out",
      });

      const glow = cardRef.current.querySelector(
        ".dynamic-glow",
      ) as HTMLElement;
      if (glow) {
        gsap.to(glow, { opacity: 0.5, duration: 0.4 });
      }
    }
  };

  const handleMouseLeave = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "elastic.out(1, 0.4)",
      });

      const glow = cardRef.current.querySelector(
        ".dynamic-glow",
      ) as HTMLElement;
      if (glow) {
        gsap.to(glow, { opacity: 0, duration: 0.4 });
      }
    }
  };

  return (
    <div className="shrink-0" style={{ perspective: "1000px" }}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200, transformStyle: "preserve-3d" }}
        className="service-card group w-full lg:w-[400px] h-full p-8 flex flex-col justify-between cursor-pointer"
      >
        {/* Dynamic Background Glow */}
        <div
          className="dynamic-glow absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none z-0 mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${service.tagColor.replace("text-", "bg-").replace(/\[|\]/g, "")}30, transparent 70%)`,
          }}
        />

        {/* Gradient border pseudo-inset */}
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradientBorder} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10`}
        />

        <div
          className="relative z-20"
          style={{ transform: "translateZ(30px)" }}
        >
          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
          >
            {service.icon}
          </div>
          <span
            className={`text-[10px] uppercase tracking-widest ${service.tagColor} font-bold font-mono`}
          >
            {service.tag}
          </span>
          <h3 className="text-2xl font-display font-bold text-[#0F172A] mt-2 mb-3">
            {service.title}
          </h3>
          <p className="text-[#475569] text-[15px] leading-relaxed mb-6">
            {service.desc}
          </p>
        </div>

        <div
          className="relative z-20 pt-4 border-t border-purple-500/10 flex items-center justify-between"
          style={{ transform: "translateZ(20px)" }}
        >
          <Link
            to={service.path}
            className={`text-sm font-semibold ${service.learnMoreColor} flex items-center gap-1 group-hover:gap-2 transition-all`}
          >
            Learn More{" "}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <div
            className={`w-8 h-8 rounded-full ${service.btnBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${service.btnDot}`}
            ></span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function CTAParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Create particles
    const particles = Array.from({ length: 30 }).map(() => {
      const el = document.createElement("div");
      const size = Math.random() * 6 + 2;
      el.className =
        "absolute bg-white/40 rounded-full pointer-events-none z-0";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      container.appendChild(el);

      // Floating animation
      gsap.to(el, {
        y: `+=${Math.random() * 100 - 50}`,
        x: `+=${Math.random() * 100 - 50}`,
        duration: Math.random() * 5 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return el;
    });

    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          particles.forEach((p) => {
            const pRect = p.getBoundingClientRect();
            const pX = pRect.left - rect.left + pRect.width / 2;
            const pY = pRect.top - rect.top + pRect.height / 2;

            const distX = pX - mouseX;
            const distY = pY - mouseY;
            const distance = Math.sqrt(distX * distX + distY * distY);

            // Repel if within 150px
            if (distance < 150) {
              const angle = Math.atan2(distY, distX);
              const force = (150 - distance) / 150;
              const pushX = Math.cos(angle) * force * 50;
              const pushY = Math.sin(angle) * force * 50;

              gsap.to(p, {
                x: `+=${pushX}`,
                y: `+=${pushY}`,
                duration: 0.5,
                ease: "power2.out",
              });
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto w-100"
    />
  );
}

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block w-full sm:w-auto ${className || ""}`}
    >
      {children}
    </div>
  );
}
