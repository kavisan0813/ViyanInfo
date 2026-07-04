import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Facebook } from "lucide-react";
import logo1 from "../assets/Logo image 1.svg";
import { LiquidGlassCard } from "./LiquidGlassCard";
import "../styles/LiquidFooter.css";

export function LiquidFooter({ isLight = false }: { isLight?: boolean }) {
  return (
    <LiquidGlassCard
      accent="#7B2FF7"
      className={`relative z-10 w-[94%] md:w-[88%] max-w-[1450px] mx-auto mt-[70px] mb-10 footer-glass ${
        isLight ? "liquid-glass-light footer-glass--light" : ""
      }`}
    >
      <div className="footer-glow one"></div>
      <div className="footer-glow two"></div>
      <div className="footer-glow three"></div>

      <div className="footer-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] text-center md:text-left">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="block w-fit mb-6">
              <img
                src={logo1}
                alt="ViyanInfo"
                className="h-10 w-auto object-contain select-none"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)] max-w-xs mb-8">
              Building scalable software, AI solutions, and digital products
              that help businesses grow faster and operate smarter.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 footer-social">
              {[
                {
                  icon: <Linkedin size={18} />,
                  href: "https://linkedin.com",
                  name: "linkedin",
                },
                {
                  icon: <Github size={18} />,
                  href: "https://github.com",
                  name: "github",
                },
                {
                  icon: <Instagram size={18} />,
                  href: "https://instagram.com",
                  name: "instagram",
                },
                {
                  icon: <Facebook size={18} />,
                  href: "https://facebook.com",
                  name: "facebook",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
              Services
            </span>
            <ul className="space-y-4 footer-links">
              {[
                { name: "Custom Software Development", path: "/services" },
                { name: "Web Applications", path: "/services/websites" },
                { name: "Mobile Applications", path: "/services/mobile" },
                { name: "AI Solutions", path: "/services" },
                { name: "UI/UX Design", path: "/services/uiux" },
                { name: "Internship Programs", path: "/internship" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-[rgba(255,255,255,0.88)] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
              Resources
            </span>
            <ul className="space-y-4 footer-links">
              {[
                { name: "Portfolio", path: "/portfolio" },
                { name: "Case Studies", path: "/portfolio" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" },
                { name: "Technology Stack", path: "/tech-stack" },
                { name: "Contact", path: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-[rgba(255,255,255,0.88)] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col items-center md:items-start text-[rgba(255,255,255,0.82)]">
            <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
              Contact
            </span>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                  admin@viyaninfo.com
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                  +91 6379723465
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                  Tiruvallur, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                  www.viyaninfo.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-divider" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-[rgba(255,255,255,0.62)] pt-6 pb-2 footer-links">
          <p>© 2026 ViyanInfo. All rights reserved.</p>

          <div className="flex flex-wrap gap-5 justify-center">
            <Link to="/privacy" className="transition-colors inline-block">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors inline-block">
              Terms of Service
            </Link>
            <Link to="/about" className="transition-colors inline-block">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </LiquidGlassCard>
  );
}
