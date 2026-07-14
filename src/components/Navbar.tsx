import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { Link, useLocation } from "react-router-dom";
import { onHoverBurst } from "../utils/particleBurst";
import { gsap } from "gsap";
import {
  Menu as MenuIcon,
  X,
  ChevronDown,
  Code,
  Globe,
  Smartphone,
  Brain,
  Paintbrush,
  GraduationCap,
  Info,
  Briefcase,
  FileText,
} from "lucide-react";
// import { Menu } from "./Menu";
import logo1 from "../assets/logo-img.svg";
import "../styles/PremiumNavbar.css";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const closeServicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const closeCompanyTimeout = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  // Stable close handler passed to Menu
  // const handleMenuClose = useCallback(() => setIsMenuOpen(false), []);

  // Entrance animation (runs once)
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        delay: 0.3,
        clearProps: "all",
      });
    });
    return () => ctx.revert();
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dropdown hover timers
  const openServices = useCallback(() => {
    if (closeServicesTimeout.current)
      clearTimeout(closeServicesTimeout.current);
    setIsServicesOpen(true);
    setIsCompanyOpen(false);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    closeServicesTimeout.current = setTimeout(
      () => setIsServicesOpen(false),
      150,
    );
  }, []);

  const openCompany = useCallback(() => {
    if (closeCompanyTimeout.current) clearTimeout(closeCompanyTimeout.current);
    setIsCompanyOpen(true);
    setIsServicesOpen(false);
  }, []);

  const scheduleCloseCompany = useCallback(() => {
    closeCompanyTimeout.current = setTimeout(
      () => setIsCompanyOpen(false),
      150,
    );
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const el = navRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      el.style.setProperty("--px", `${px * 100}%`);
      el.style.setProperty("--py", `${py * 100}%`);
    },
    [],
  );

  const handlePointerLeave = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    el.style.setProperty("--px", `50%`);
    el.style.setProperty("--py", `50%`);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith("/services");
  const isCompanyActive = () =>
    ["/about", "/process", "/careers", "/blog"].includes(location.pathname);

  return (
    <>
      <nav
        ref={navRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={`premium-navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      >
        {/* Liquid Glass Background */}
        <div className="navbar-liquid-bg">
          <svg className="liquid-glass-distortion" aria-hidden="true">
            <filter id="liquid-glass-filter-navbar">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.012"
                numOctaves="2"
                seed="7"
                result="noise"
              />
              <feGaussianBlur
                in="noise"
                stdDeviation="2"
                result="blurredNoise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurredNoise"
                scale="18"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>
          <div className="navbar-liquid-backdrop" />
          <div className="navbar-liquid-specular" />
          <div className="navbar-liquid-rim" />
        </div>

        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src={logo1}
            alt="ViyanInfo"
            style={{
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
              imageRendering: "auto",
            }}
          />
        </Link>

        {/* Center Links Capsule */}
        <div className="navbar-center">
          {/* Home */}
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "nav-active" : ""}`}
          >
            Home
          </Link>

          {/* Products */}
          <Link
            to="/products"
            className={`nav-link ${isActive("/products") ? "nav-active" : ""}`}
          >
            Products
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative flex items-center"
            onMouseEnter={openServices}
            onMouseLeave={scheduleCloseServices}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger ${isServicesActive() ? "nav-active" : ""}`}
            >
              Services
              <ChevronDown
                className={`chevron-icon ${isServicesOpen ? "chevron-open" : ""}`}
              />
            </button>

            {/* Services Dropdown Panel */}
            {isServicesOpen && (
              <div
                className="nav-dropdown-panel"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                {[
                  {
                    label: "Custom Software Development",
                    path: "/services/custom-software",
                    icon: <Code className="w-4 h-4 text-[#7B2FF7]" />,
                  },
                  {
                    label: "Web Applications",
                    path: "/services/web-development",
                    icon: <Globe className="w-4 h-4 text-[#3B82F6]" />,
                  },
                  {
                    label: "Mobile Applications",
                    path: "/services/mobile-development",
                    icon: <Smartphone className="w-4 h-4 text-[#06B6D4]" />,
                  },
                  {
                    label: "AI Solutions",
                    path: "/services/ai-automation",
                    icon: <Brain className="w-4 h-4 text-[#EC4899]" />,
                  },
                  {
                    label: "UI/UX Design",
                    path: "/services/ui-ux-design",
                    icon: <Paintbrush className="w-4 h-4 text-[#F59E0B]" />,
                  },
                  {
                    label: "Internship Programs",
                    path: "/internship",
                    icon: <GraduationCap className="w-4 h-4 text-[#22C55E]" />,
                  },
                ].map(({ label, path, icon }) => (
                  <Link
                    key={path + label}
                    to={path}
                    className="dropdown-item"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="dropdown-item-icon">{icon}</div>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio */}
          <Link
            to="/portfolio"
            className={`nav-link ${isActive("/portfolio") ? "nav-active" : ""}`}
          >
            Work
          </Link>

          {/* Company Dropdown */}
          <div
            className="relative flex items-center"
            onMouseEnter={openCompany}
            onMouseLeave={scheduleCloseCompany}
          >
            <button
              type="button"
              className={`nav-dropdown-trigger ${isCompanyActive() ? "nav-active" : ""}`}
            >
              Company
              <ChevronDown
                className={`chevron-icon ${isCompanyOpen ? "chevron-open" : ""}`}
              />
            </button>

            {/* Company Dropdown Panel */}
            {isCompanyOpen && (
              <div
                className="nav-dropdown-panel dropdown-compact"
                onMouseEnter={openCompany}
                onMouseLeave={scheduleCloseCompany}
              >
                {[
                  {
                    label: "About Us",
                    path: "/about",
                    icon: <Info className="w-4 h-4 text-[#7B2FF7]" />,
                  },
                  {
                    label: "Careers",
                    path: "/careers",
                    icon: <Briefcase className="w-4 h-4 text-[#7B2FF7]" />,
                  },
                  {
                    label: "Blog",
                    path: "/blog",
                    icon: <FileText className="w-4 h-4 text-[#7B2FF7]" />,
                  },
                ].map(({ label, path, icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className="dropdown-item"
                    onClick={() => setIsCompanyOpen(false)}
                  >
                    <div className="dropdown-item-icon">{icon}</div>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "nav-active" : ""}`}
          >
            Contact
          </Link>
        </div>

        {/* Right Side */}
        <div className="navbar-right">
          <Link to="/contact">
            <button onMouseEnter={onHoverBurst} className="navbar-cta-btn">
              Start Project
            </button>
          </Link>

          <button
            className="navbar-mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* <Menu isOpen={isMenuOpen} onClose={handleMenuClose} /> */}
    </>
  );
}
