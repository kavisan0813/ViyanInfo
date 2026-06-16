import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Menu } from "./Menu";
import logo1 from "../assets/Logo image 1.svg";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const closeServicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeCompanyTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Stable close handler passed to Menu
  const handleMenuClose = useCallback(() => setIsMenuOpen(false), []);

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

  // Scroll handler: update background state (do NOT hide navbar)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial scroll state
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dropdown hover timers
  const openServices = useCallback(() => {
    if (closeServicesTimeout.current) clearTimeout(closeServicesTimeout.current);
    setIsServicesOpen(true);
    setIsCompanyOpen(false);
  }, []);

  const scheduleCloseServices = useCallback(() => {
    closeServicesTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  }, []);

  const openCompany = useCallback(() => {
    if (closeCompanyTimeout.current) clearTimeout(closeCompanyTimeout.current);
    setIsCompanyOpen(true);
    setIsServicesOpen(false);
  }, []);

  const scheduleCloseCompany = useCallback(() => {
    closeCompanyTimeout.current = setTimeout(() => setIsCompanyOpen(false), 150);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = () => location.pathname.startsWith("/services");
  const isCompanyActive = () =>
    ["/about", "/process", "/careers", "/blog"].includes(location.pathname);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 w-full z-50 h-[72px] transition-all duration-300 isolate will-change-[background-color,backdrop-filter,box-shadow] ${
          isScrolled
            ? "bg-white/92 backdrop-blur-[20px] shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-[rgba(123,47,247,0.08)]"
            : "bg-white/0 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo1}
              alt="ViyanInfo"
              style={{
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                imageRendering: "auto",
              }}
              className="block h-9 w-auto object-contain select-none transition-transform hover:scale-102 duration-300"
            />
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 h-full">
            {/* Home */}
            <Link
              to="/"
              className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive("/") ? "text-[#7B2FF7]" : "text-[#475569] hover:text-[#7B2FF7]"
              }`}
            >
              Home
              {isActive("/") && (
                <span className="absolute bottom-[-18px] left-0 right-0 h-[2px] bg-[#7B2FF7] rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-semibold py-2 transition-colors duration-300 cursor-default ${
                  isServicesActive() ? "text-[#7B2FF7]" : "text-[#475569] hover:text-[#7B2FF7]"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180 text-[#7B2FF7]" : ""
                  }`}
                />
              </button>
              {isServicesActive() && (
                <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#7B2FF7] rounded-full" />
              )}

              {/* Dropdown Card */}
              {isServicesOpen && (
                <div
                  className="absolute top-[56px] left-1/2 -translate-x-1/2 pt-4 min-w-[320px] z-60 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleCloseServices}
                >
                  <div className="bg-white border border-[rgba(123,47,247,0.08)] rounded-[12px] p-2.5 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
                    {[
                      {
                        label: "Custom Software Development",
                        path: "/services",
                        icon: <Code className="w-4 h-4 text-[#7B2FF7]" />,
                      },
                      {
                        label: "Web Applications",
                        path: "/services/websites",
                        icon: <Globe className="w-4 h-4 text-[#3B82F6]" />,
                      },
                      {
                        label: "Mobile Applications",
                        path: "/services/mobile",
                        icon: <Smartphone className="w-4 h-4 text-[#06B6D4]" />,
                      },
                      {
                        label: "AI Solutions",
                        path: "/services/ai",
                        icon: <Brain className="w-4 h-4 text-[#EC4899]" />,
                      },
                      {
                        label: "UI/UX Design",
                        path: "/services/uiux",
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
                        className="px-4 py-3 text-xs sm:text-sm text-[#475569] hover:text-[#7B2FF7] hover:bg-[rgba(123,47,247,0.05)] rounded-[8px] transition-all duration-200 flex items-center gap-3 group"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        <div className="p-1.5 rounded-lg bg-slate-50 transition-colors">
                          {icon}
                        </div>
                        <span className="font-semibold">{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Work */}
            <Link
              to="/portfolio"
              className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive("/portfolio") ? "text-[#7B2FF7]" : "text-[#475569] hover:text-[#7B2FF7]"
              }`}
            >
              Work
              {isActive("/portfolio") && (
                <span className="absolute bottom-[-18px] left-0 right-0 h-[2px] bg-[#7B2FF7] rounded-full" />
              )}
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={openCompany}
              onMouseLeave={scheduleCloseCompany}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-semibold py-2 transition-colors duration-300 cursor-default ${
                  isCompanyActive() ? "text-[#7B2FF7]" : "text-[#475569] hover:text-[#7B2FF7]"
                }`}
              >
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isCompanyOpen ? "rotate-180 text-[#7B2FF7]" : ""
                  }`}
                />
              </button>
              {isCompanyActive() && (
                <span className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#7B2FF7] rounded-full" />
              )}

              {/* Dropdown Card */}
              {isCompanyOpen && (
                <div
                  className="absolute top-[56px] left-1/2 -translate-x-1/2 pt-4 min-w-[200px] z-60 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={openCompany}
                  onMouseLeave={scheduleCloseCompany}
                >
                  <div className="bg-white border border-[rgba(123,47,247,0.08)] rounded-[12px] p-2 flex flex-col gap-1 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md">
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
                        className="px-4 py-3 text-xs sm:text-sm text-[#475569] hover:text-[#7B2FF7] hover:bg-[rgba(123,47,247,0.05)] rounded-[8px] transition-all duration-200 flex items-center gap-3 group"
                        onClick={() => setIsCompanyOpen(false)}
                      >
                        <div className="p-1.5 rounded-lg bg-slate-50 transition-colors">
                          {icon}
                        </div>
                        <span className="font-semibold">{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative py-2 text-sm font-semibold transition-colors duration-300 ${
                isActive("/contact") ? "text-[#7B2FF7]" : "text-[#475569] hover:text-[#7B2FF7]"
              }`}
            >
              Contact
              {isActive("/contact") && (
                <span className="absolute bottom-[-18px] left-0 right-0 h-[2px] bg-[#7B2FF7] rounded-full" />
              )}
            </Link>
          </div>

          {/* Right Side CTA Button */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block">
              <button className="relative overflow-hidden px-5 py-2.5 text-xs font-bold text-white rounded-[14px] bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] hover:shadow-[0_0_20px_rgba(123,47,247,0.45)] hover:-translate-y-[2px] active:translate-y-0 active:shadow-md transition-all duration-300 cursor-pointer">
                Start Project
              </button>
            </Link>

            <button
              className="md:hidden text-text-primary p-1 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <Menu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
}
