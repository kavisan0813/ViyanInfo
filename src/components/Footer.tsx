import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import logo1 from "../assets/logo.svg";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#1A1333] relative overflow-hidden pt-[60px] pb-[40px] border-t border-[rgba(255,255,255,0.08)] text-[#C9C6D8] font-body"
    >
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* 4-COLUMN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 text-left">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="block w-fit">
              <img
                src={logo1}
                alt="ViyanInfo"
                className="h-8 w-auto object-contain select-none filter brightness-0 invert"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(32%) sepia(93%) saturate(5436%) hue-rotate(257deg) brightness(97%) contrast(97%)", // Target #7B2FF7
                }}
              />
            </Link>

            <p className="text-xs leading-relaxed text-[#C9C6D8] max-w-xs">
              Building scalable software, AI solutions, and digital products
              that help businesses grow faster and operate smarter.
            </p>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-1">
              {[
                {
                  icon: <Linkedin className="w-4 h-4" />,
                  href: "https://linkedin.com",
                  label: "LinkedIn",
                },
                {
                  icon: <Github className="w-4 h-4" />,
                  href: "https://github.com",
                  label: "GitHub",
                },
                {
                  icon: <Instagram className="w-4 h-4" />,
                  href: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  icon: <Facebook className="w-4 h-4" />,
                  href: "https://facebook.com",
                  label: "Facebook",
                },
              ].map((social, sIdx) => (
                <motion.a
                  key={sIdx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="w-8 h-8 rounded-lg bg-[rgba(255,255,255,0.06)] flex items-center justify-center text-[#C9C6D8] hover:text-[#7B2FF7] hover:shadow-[0_0_12px_rgba(123,47,247,0.4)] border border-transparent hover:border-[#7B2FF7]/20 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-3">
            <span  className="font-display font-bold text-white text-[13px] uppercase tracking-wider mb-1 ">
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
                  className="text-xs text-[#C9C6D8] hover:text-[#7B2FF7] transition-colors duration-200 relative group block py-0.5"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7B2FF7] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-3">
            <span  className="font-display font-bold text-white text-[13px] uppercase tracking-wider mb-1 ">
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
                  className="text-xs text-[#C9C6D8] hover:text-[#7B2FF7] transition-colors duration-200 relative group block py-0.5"
                >
                  {link.label}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#7B2FF7] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-3">
            <span  className="font-display font-bold text-white text-[13px] uppercase tracking-wider mb-1 ">
              Contact
            </span>

            <a
              href="mailto:admin@viyaninfo.com"
              className="text-xs text-[#C9C6D8] hover:text-[#7B2FF7] transition-colors flex items-center gap-2.5 py-0.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#8E88A8] shrink-0" />
              <span>admin@viyaninfo.com</span>
            </a>

            <a
              href="tel:+910000000000"
              className="text-xs text-[#C9C6D8] hover:text-[#7B2FF7] transition-colors flex items-center gap-2.5 py-0.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#8E88A8] shrink-0" />
              <span>+91 XXXXX XXXXX</span>
            </a>

            <span className="text-xs text-[#C9C6D8] flex items-start gap-2.5 py-0.5">
              <MapPin className="w-3.5 h-3.5 text-[#8E88A8] shrink-0 mt-0.5" />
              <span>Tiruvallur, Tamil Nadu</span>
            </span>

            <a
              href="https://www.viyaninfo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C9C6D8] hover:text-[#7B2FF7] transition-colors flex items-center gap-2.5 py-0.5"
            >
              <Globe className="w-3.5 h-3.5 text-[#8E88A8] shrink-0" />
              <span>www.viyaninfo.com</span>
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="h-px bg-[rgba(255,255,255,0.08)] w-full mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-[11px] text-[#8E88A8]">
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
