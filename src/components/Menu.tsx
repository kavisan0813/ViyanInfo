import { useEffect, useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import type { MenuProps } from "../types";

export function Menu({ isOpen, onClose }: MenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

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
}
