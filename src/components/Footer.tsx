import { useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Linkedin,
  Instagram,
  Facebook,
  Github,
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";
import logo1 from "../assets/Logoimage.svg";
import img1 from "../assets/img 1.webp";

function FooterParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let particles: HTMLDivElement[] = [];
    let handleMouseMove: (e: MouseEvent) => void;

    const ctx = gsap.context(() => {
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
    handleMouseMove = (e: MouseEvent) => {
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
    });

    return () => {
      ctx.revert();
      container.removeEventListener("mousemove", handleMouseMove);
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-auto z-0"
    />
  );
}

function Fireflies() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    let particles: HTMLDivElement[] = [];

    const ctx = gsap.context(() => {
      particles = Array.from({ length: 30 }).map(() => {
      const el = document.createElement("div");
      const size = Math.random() * 3 + 1.5;
      el.className = "absolute rounded-full bg-[#fef08a] pointer-events-none z-0";
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      el.style.boxShadow = "0 0 10px 2px rgba(253, 224, 71, 0.8)";
      
      container.appendChild(el);

      gsap.to(el, {
        y: `-=${Math.random() * 100 + 50}`,
        x: `+=${Math.random() * 80 - 40}`,
        keyframes: {
          opacity: [0, 0.8, 1, 0.8, 0]
        },
        duration: Math.random() * 5 + 4,
        repeat: -1,
        ease: "sine.inOut",
      });

      return el;
    });

    });

    return () => {
      ctx.revert();
      particles.forEach((p) => p.remove());
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0 overflow-hidden" />;
}

export function Footer() {
  const { pathname } = useLocation();

  const normalizedPath = pathname.replace(/\/$/, "");

  const isInternship = normalizedPath === "/internship";
  const isWebsites = normalizedPath === "/services/websites";
  const isAiSolutions = normalizedPath === "/services/ai";
  const isUiUx = normalizedPath === "/services/uiux";
  const isBlog = normalizedPath === "/blog" || normalizedPath === "/resources/blog";
  const isHome = normalizedPath === "" || normalizedPath === "/";

  if (isWebsites || isAiSolutions || isUiUx || isBlog || normalizedPath === "/careers" || normalizedPath === "/portfolio" || normalizedPath === "/services/mobile" || normalizedPath === "/contact") return null;

  // Dynamic colors depending on the page
  const textColor = isInternship ? "text-white/90" : "text-[#C9C6D8]";
  const headingColor = "text-white";
  const iconColor = isInternship ? "text-white/80" : "text-[#8E88A8]";
  const dividerColor = isInternship
    ? "bg-white/20"
    : "bg-[rgba(255,255,255,0.08)]";
  const borderColor = isInternship
    ? "border-transparent"
    : isHome
      ? "border-transparent"
      : "border-[rgba(255,255,255,0.08)]";
  const socialBg = "bg-[rgba(255,255,255,0.06)]";
  const bottomTextColor = isInternship ? "text-white/70" : "text-[#8E88A8]";

  let bgColor = "bg-[#1A1333]";
  if (isInternship) bgColor = ""; // Background image handles it
  if (isHome) bgColor = "bg-black";

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={
        isInternship
          ? {
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundAttachment: "fixed",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
      className={`relative overflow-hidden ${isHome ? "pt-[20px]" : "pt-[80px]"} pb-[40px] border-t ${borderColor} ${textColor} font-body ${bgColor}`}
    >
      {/* Ambient glow behind the glass container */}
      {isInternship && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-[#D6BADB]/30 to-transparent pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
          <Fireflies />
        </>
      )}

      {isHome && (
        <>
          {/* Glowing particle blobs for home page */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-400/20 blur-3xl animate-[float-y_15s_ease-in-out_infinite] pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-400/20 blur-3xl animate-[float-y_12s_ease-in-out_infinite] pointer-events-none"></div>

          <FooterParticles />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(15,23,42,0.15)_100%)] pointer-events-none z-0"></div>
        </>
      )}

      <div className={`w-[90%] mx-auto relative z-10 ${isInternship ? "bg-white/10 backdrop-blur-md border border-white/20 rounded-[32px] shadow-2xl py-12 px-6 lg:px-12 mb-8" : "px-6"}`}>
        {/* 4-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 text-left">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="block w-fit">
              <img
                src={logo1}
                alt="ViyanInfo"
                className="h-9 w-auto object-contain select-none"
              />
            </Link>

            <p className={`text-sm leading-relaxed ${textColor} max-w-xs`}>
              Building scalable software, AI solutions, and digital products
              that help businesses grow faster and operate smarter.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-1 relative z-20">
              {[
                {
                  icon: <Linkedin className="w-[18px] h-[18px]" />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                  hoverColor: "hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.6)]",
                },
                {
                  icon: <Github className="w-[18px] h-[18px]" />,
                  href: "https://github.com",
                  label: "GitHub",
                  hoverColor: "hover:bg-[#181717] hover:border-[#181717] hover:shadow-[0_0_15px_rgba(24,23,23,0.6)]",
                },
                {
                  icon: <Instagram className="w-[18px] h-[18px]" />,
                  href: "https://instagram.com",
                  label: "Instagram",
                  hoverColor: "hover:bg-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.6)]",
                },
                {
                  icon: <Facebook className="w-[18px] h-[18px]" />,
                  href: "https://facebook.com",
                  label: "Facebook",
                  hoverColor: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.6)]",
                },
              ].map((social, sIdx) => (
                <motion.a
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={isInternship ? { y: -5, scale: 1.08 } : { y: -3, scale: 1.05 }}
                  className={`w-9 h-9 flex items-center justify-center transition-all duration-300 relative z-20 ${
                    isInternship 
                      ? `rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white ${social.hoverColor}`
                      : `rounded-lg ${socialBg} text-[#C9C6D8] hover:text-[#7B2FF7] border border-transparent hover:border-[#7B2FF7]/20 hover:shadow-[0_0_12px_rgba(123,47,247,0.4)]`
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-3.5 relative z-20">
            <span
              className={`font-display font-bold ${headingColor} text-[15px] uppercase tracking-wider mb-1`}
            >
              Services
            </span>
            {[
              { label: "Custom Software Development", path: "/services" },
              { label: "Web Applications", path: "/services/websites" },
              { label: "Mobile Applications", path: "/services/mobile" },
              { label: "AI Solutions", path: "/services" },
              { label: "UI/UX Design", path: "/services" },
              { label: "Internship Programs", path: "/internship" },
            ].map((link, lIdx) => (
              <div key={lIdx} className="w-fit">
                <Link
                  to={link.path}
                  className={`text-sm ${textColor} hover:text-[#7B2FF7] transition-colors duration-200 relative group block py-0.5`}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7B2FF7] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-3.5 relative z-20">
            <span
              className={`font-display font-bold ${headingColor} text-[15px] uppercase tracking-wider mb-1`}
            >
              Resources
            </span>
            {[
              { label: "Portfolio", path: "/portfolio" },
              { label: "Case Studies", path: "/portfolio" },
              { label: "Careers", path: "/careers" },
              { label: "Blog", path: "/blog" },
              { label: "Technology Stack", path: "/tech-stack" },
              { label: "Contact", path: "/contact" },
            ].map((link, lIdx) => (
              <div key={lIdx} className="w-fit">
                <Link
                  to={link.path}
                  className={`text-sm ${textColor} hover:text-[#7B2FF7] transition-colors duration-200 relative group block py-0.5`}
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7B2FF7] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-3.5 relative z-20">
            <span
              className={`font-display font-bold ${headingColor} text-[15px] uppercase tracking-wider mb-1`}
            >
              Contact
            </span>

            <a
              href="mailto:admin@viyaninfo.com"
              className={`text-sm ${textColor} hover:text-[#7B2FF7] transition-colors flex items-center gap-2.5 py-0.5`}
            >
              <Mail className={`w-4 h-4 ${iconColor} shrink-0`} />
              <span>admin@viyaninfo.com</span>
            </a>

            <a
              href="tel:+910000000000"
              className={`text-sm ${textColor} hover:text-[#7B2FF7] transition-colors flex items-center gap-2.5 py-0.5`}
            >
              <Phone className={`w-4 h-4 ${iconColor} shrink-0`} />
              <span>+91 6379723465</span>
            </a>

            <span
              className={`text-sm ${textColor} flex items-start gap-2.5 py-0.5`}
            >
              <MapPin className={`w-4 h-4 ${iconColor} shrink-0 mt-0.5`} />
              <span>Tiruvallur, Tamil Nadu</span>
            </span>

            <a
              href="https://www.viyaninfo.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm ${textColor} hover:text-[#7B2FF7] transition-colors flex items-center gap-2.5 py-0.5`}
            >
              <Globe className={`w-4 h-4 ${iconColor} shrink-0`} />
              <span>www.viyaninfo.com</span>
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={`h-px ${dividerColor} w-full mb-6 relative z-20`} />

        <div
          className={`flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs ${bottomTextColor} relative z-20`}
        >
          <p>© 2026 ViyanInfo. All rights reserved.</p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link
              to="/privacy"
              className="hover:text-[#7B2FF7] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#7B2FF7] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/about"
              className="hover:text-[#7B2FF7] transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
