import { useRef, useLayoutEffect, useEffect, type RefObject } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import astronautImg from "../assets/Astronaut.webp";
import saturnimage from "../assets/Saturn.webp";
import { LiquidFooter } from "../components/LiquidFooter";
import { MagneticButton } from "../components/MagneticButton";
import { CTAParticles } from "../components/CTAParticles";
import { burst } from "../utils/particleBurst";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HomeVisualsProps {
  heroRef: RefObject<HTMLElement | null>;
  heroContentRef: RefObject<HTMLDivElement | null>;
  containerRef: RefObject<HTMLDivElement | null>;
  dashRef: RefObject<HTMLImageElement | null>;
  flowerRef: RefObject<HTMLImageElement | null>;
  servicesSectionRef: RefObject<HTMLElement | null>;
  servicesTrackRef: RefObject<HTMLDivElement | null>;
  servicesBlob1Ref: RefObject<HTMLDivElement | null>;
  servicesBlob2Ref: RefObject<HTMLDivElement | null>;
}

export function HomeVisuals({
  heroRef,
  heroContentRef,
  dashRef,
  flowerRef,
  servicesSectionRef,
  servicesTrackRef,
  servicesBlob1Ref,
  servicesBlob2Ref,
}: HomeVisualsProps) {
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const astronautRef = useRef<HTMLImageElement>(null);
  const saturnRef = useRef<HTMLImageElement>(null);
  const heroBgLayerRef = useRef<HTMLDivElement>(null);
  const heroBgBlobRef = useRef<HTMLDivElement>(null);

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

  const onHoverBurst = (e: React.MouseEvent<HTMLElement>) => {
    burst(e.currentTarget);
  };

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
    if (!servicesSectionRef.current || !heroRef.current) {
      return;
    }

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
        if (heroContentRef.current && heroRef.current) {
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
        }

        // Floating Animations
        if (dashRef.current) {
          gsap.to(dashRef.current, {
            y: -15,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        }
        if (flowerRef.current) {
          gsap.to(flowerRef.current, {
            y: 15,
            duration: 4,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut",
          });
        }

        // Mouse Parallax (Lusion-inspired layered movement)
        const handleMouseMove = (e: MouseEvent) => {
          // Normalized cursor coordinates (-0.5 to 0.5)
          const x = e.clientX / window.innerWidth - 0.5;
          const y = e.clientY / window.innerHeight - 0.5;

          // Background Layer: 10px movement
          if (heroBgLayerRef.current) {
            gsap.to(heroBgLayerRef.current, {
              x: x * 20, // max 10px each way
              y: y * 20,
              duration: 1.5,
              ease: "power2.out",
            });
          }

          // Middle Layer (flower): 20px movement
          if (flowerRef.current) {
            gsap.to(flowerRef.current, {
              x: -x * 40,
              y: -y * 40,
              duration: 1.2,
              ease: "power2.out",
            });
          }

          // Foreground Layer (dash): 30px movement
          if (dashRef.current) {
            gsap.to(dashRef.current, {
              x: x * 60,
              y: y * 60,
              duration: 0.8,
              ease: "power2.out",
            });
          }

          // Background Blobs tracking cursor slightly
          if (heroBgBlobRef.current) {
            gsap.to(heroBgBlobRef.current, {
              x: x * 100,
              y: y * 100,
              duration: 2,
              ease: "power2.out",
            });
          }
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
          if (servicesBlob1Ref.current) {
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
          }

          if (servicesBlob2Ref.current) {
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
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black relative z-20 pb-1">
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
              ref={saturnRef}
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
      <LiquidFooter />
    </section>
  );
}
