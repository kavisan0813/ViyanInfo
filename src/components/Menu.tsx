import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import type { MenuProps } from "../types";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Work", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  { label: "Custom Software", path: "/services/custom-software" },
  { label: "Web Applications", path: "/services/web-development" },
  { label: "Mobile Applications", path: "/services/mobile-development" },
  { label: "AI Solutions", path: "/services/ai-automation" },
  { label: "UI/UX Design", path: "/services/ui-ux-design" },
  { label: "Internship Programs", path: "/internship" },
];

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Careers", path: "/careers" },
];

export function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Build timeline once on mount
  useLayoutEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    const links = el.querySelectorAll<HTMLElement>(".menu-nav-link");
    const infoItems = el.querySelectorAll<HTMLElement>(".menu-info-item");

    gsap.set(el, { opacity: 0, visibility: "hidden" });
    gsap.set(links, { y: 60, opacity: 0 });
    gsap.set(infoItems, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(el, {
      opacity: 1,
      visibility: "visible",
      duration: 0.8,
      ease: "expo.inOut",
    })
      .to(
        links,
        { y: 0, opacity: 1, stagger: 0.04, duration: 0.7, ease: "expo.out" },
        "-=0.5",
      )
      .to(
        infoItems,
        { y: 0, opacity: 1, stagger: 0.04, duration: 0.6 },
        "-=0.5",
      );

    tlRef.current = tl;

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, []);

  // Drive timeline based on isOpen
  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;

    if (isOpen) {
      tl.play();
    } else if (tl.progress() > 0) {
      tl.reverse();
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // Keyboard: Escape and Tab trap
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>(
            'a[href], button, [tabindex]:not([tabindex="-1"])',
          ),
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

  // Prevent scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div ref={menuRef} className="mobile-menu">
      <div className="mobile-menu-inner">
        <div className="mobile-menu-links">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className="menu-nav-link"
              onClick={handleClose}
            >
              {label}
            </Link>
          ))}

          <span className="menu-nav-link menu-section-label">Services</span>
          <div className="menu-sub-links">
            {serviceLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="menu-nav-link menu-sub-link"
                onClick={handleClose}
              >
                {label}
              </Link>
            ))}
          </div>

          <span className="menu-nav-link menu-section-label">Company</span>
          <div className="menu-sub-links">
            {companyLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className="menu-nav-link menu-sub-link"
                onClick={handleClose}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="menu-footer">
          <Link
            to="/contact"
            className="menu-nav-link menu-cta"
            onClick={handleClose}
          >
            Start Project
          </Link>
          <p className="menu-info-item">&copy; 2025 ViyanInfo</p>
        </div>
      </div>
    </div>
  );
}
