import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import type { MenuProps } from "../types";

export function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const onCloseRef = useRef(onClose);

  // Keep the ref updated with the latest callback
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Build the timeline once.
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = menuRef.current;
      if (!el) return;

      const links = el.querySelectorAll(".menu-nav-link");
      const infoItems = el.querySelectorAll(".menu-info-item");

      // Hidden state
      gsap.set(el, { yPercent: -100, autoAlpha: 0 });
      gsap.set(links, { y: 60, opacity: 0 });
      gsap.set(infoItems, { y: 20, opacity: 0 });

      const tl = gsap.timeline({ paused: true });

      tl.to(el, {
        yPercent: 0,
        autoAlpha: 1,
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

      tl.eventCallback("onReverseComplete", () => onCloseRef.current());

      tlRef.current = tl;
    }, menuRef);

    return () => ctx.revert();
  }, []);

  // Drive timeline
  useEffect(() => {
    if (isOpen) {
      tlRef.current?.play();
      tlRef.current?.eventCallback("onComplete", () => {
        (
          menuRef.current?.querySelector(
            ".menu-nav-link a",
          ) as HTMLElement | null
        )?.focus();
      });
    } else {
      if ((tlRef.current?.progress() ?? 0) > 0) {
        tlRef.current?.reverse();
      }
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    tlRef.current?.reverse();
  }, []);

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

  // Prevent scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Our Process", path: "/process" },
    { name: "Careers", path: "/careers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-40 flex flex-col overflow-y-auto pb-8 bg-slate-950/95 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      aria-hidden={!isOpen}
    >
      {/* Decorative gradient overlay */}
      <div
        aria-hidden="true"
        className="orb pointer-events-none absolute w-[400px] h-[400px] bg-[radial-gradient(circle,var(--color-surface)_0%,transparent_60%)] opacity-20 top-[-10%] right-[-10%]"
      />

      {/* Top spacer matching 72px navbar height */}
      <div className="h-[72px] shrink-0" />

      {/* Main content grid */}
      <div className="flex-1 flex flex-col md:flex-row px-8 md:px-16 pt-4 relative z-10 gap-10">
        
        {/* Navigation list */}
        <div className="flex-1 flex flex-col gap-2 md:gap-3">
          {navLinks.map((link) => (
            <div key={link.name} className="overflow-hidden py-1 menu-nav-link">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white hover:text-[#7B2FF7] transition-colors leading-none tracking-tight">
                <Link to={link.path} onClick={handleClose}>
                  {link.name}
                </Link>
              </h2>
            </div>
          ))}

          {/* CTA Mobile Button */}
          <div className="overflow-hidden pt-4 menu-nav-link">
            <Link to="/contact" onClick={handleClose} className="inline-block">
              <button className="px-6 py-3 bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] hover:shadow-[0_0_15px_rgba(123,47,247,0.4)] text-white font-bold text-sm rounded-[14px] transition-all duration-300">
                Start Project
              </button>
            </Link>
          </div>
        </div>

        {/* Info panel */}
        <div className="md:w-1/3 flex flex-col gap-8 mt-6 md:mt-0">
          <div className="menu-info-item">
            <h3 className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest mb-3">
              Get in Touch
            </h3>
            <a
              href="mailto:hello@viyaninfo.com"
              className="block text-sm text-slate-200 hover:text-[#7B2FF7] transition-colors mb-1.5 font-medium"
            >
              hello@viyaninfo.com
            </a>
            <a
              href="tel:+910000000000"
              className="block text-sm text-slate-200 hover:text-[#7B2FF7] transition-colors font-medium"
            >
              +91 XXXXX XXXXX
            </a>
          </div>

          <div className="menu-info-item">
            <h3 className="text-xs font-display font-bold text-slate-400 uppercase tracking-widest mb-3">
              Social Links
            </h3>
            <div className="flex gap-4">
              {[
                { label: "LinkedIn", href: "https://linkedin.com" },
                { label: "GitHub", href: "https://github.com" },
                { label: "Instagram", href: "https://instagram.com" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-[#7B2FF7] transition-colors font-medium"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Watermark */}
      <div
        className="relative z-10 border-t border-white/5 mt-auto overflow-hidden shrink-0 pt-4"
        aria-hidden="true"
      >
        <p className="text-[12vw] font-display font-black text-white/5 text-center leading-none select-none">
          VIYAN
        </p>
      </div>
    </div>
  );
}
