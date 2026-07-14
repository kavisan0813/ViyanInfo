import { useRef, useLayoutEffect } from "react";
import { Intern1 } from "./ArrayContent";

export function InternshipExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cardInners = gsap.utils.toArray(
      section.querySelectorAll(".expertise-card-inner"),
    ) as HTMLElement[];

    if (cardInners.length === 0) return;

    const ctx = gsap.context(() => {
      // Heading mask reveal
      gsap.from(".expertise-heading", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
      });

      // The main scroll-driven flip timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=3000",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      cardInners.forEach((cardInner, i) => {
        tl.to(
          cardInner,
          {
            rotateY: 180,
            rotateX: -6,
            z: 100,
            duration: 1,
            ease: "none",
          },
          i * 0.15,
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="programs" ref={sectionRef} className="expertise-section">
      <div className="expertise-viewport">
        {/* Heading */}
        <div className="expertise-heading">
          <span className="label">Training Tracks</span>
          <h2>Our Internship Programs</h2>
          <p>
            Choose from 5 industry-mapped development and design
            specializations.
          </p>
        </div>

        {/* All cards visible in a row */}
        <div className="expertise-cards-row">
          {Intern1.map((program, idx) => {
            const IconComp = program.icon;
            return (
              <div
                key={idx}
                className="expertise-card"
                style={{ "--card-glow": program.glow } as React.CSSProperties}
              >
                <div className="expertise-card-inner">
                  {/* FRONT FACE — Tarot Playing Card Style */}
                  <div
                    className="expertise-card-front tarot-front"
                    style={{ background: program.gradient }}
                  >
                    {/* SVG Geometric Decorations */}
                    <svg
                      className="tarot-geometry"
                      viewBox="0 0 240 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      {/* Outer border */}
                      <rect
                        x="8"
                        y="8"
                        width="224"
                        height="334"
                        rx="16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      {/* Inner border */}
                      <rect
                        x="16"
                        y="16"
                        width="208"
                        height="318"
                        rx="12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      {/* Corner circles */}
                      <circle
                        cx="28"
                        cy="28"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="212"
                        cy="28"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="28"
                        cy="322"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="212"
                        cy="322"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />

                      {/* Corner dot fills */}
                      <circle cx="28" cy="28" r="1" fill="currentColor" />
                      <circle cx="212" cy="28" r="1" fill="currentColor" />
                      <circle cx="28" cy="322" r="1" fill="currentColor" />
                      <circle cx="212" cy="322" r="1" fill="currentColor" />

                      {/* Connecting lines from corners */}
                      <line
                        x1="34"
                        y1="28"
                        x2="80"
                        y2="28"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="160"
                        y1="28"
                        x2="206"
                        y2="28"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="34"
                        y1="322"
                        x2="80"
                        y2="322"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="160"
                        y1="322"
                        x2="206"
                        y2="322"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="28"
                        y1="34"
                        x2="28"
                        y2="80"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="28"
                        y1="270"
                        x2="28"
                        y2="316"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="212"
                        y1="34"
                        x2="212"
                        y2="80"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                      <line
                        x1="212"
                        y1="270"
                        x2="212"
                        y2="316"
                        stroke="currentColor"
                        strokeWidth="1"
                      />

                      {/* Top semi-circle */}
                      <path
                        d="M100 16 A20 20 0 0 1 140 16"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />
                      {/* Bottom semi-circle */}
                      <path
                        d="M100 334 A20 20 0 0 0 140 334"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                      />

                      {/* Top heart/chevron */}
                      <path
                        d="M115 40 L120 34 L125 40"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                      />
                      {/* Bottom heart/chevron (inverted) */}
                      <path
                        d="M115 310 L120 316 L125 310"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        strokeLinecap="round"
                      />

                      {/* Left diamond arrow */}
                      <path
                        d="M20 155 L28 145 L28 165 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentColor"
                      />
                      <path
                        d="M20 195 L28 185 L28 205 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentColor"
                      />

                      {/* Right diamond arrow */}
                      <path
                        d="M220 155 L212 145 L212 165 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentColor"
                      />
                      <path
                        d="M220 195 L212 185 L212 205 Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="currentColor"
                      />

                      {/* Layer 2: Four tiny dots around the diamond */}
                      <circle cx="120" cy="85" r="1.5" fill="currentColor" />
                      <circle cx="120" cy="265" r="1.5" fill="currentColor" />
                      <circle cx="30" cy="175" r="1.5" fill="currentColor" />
                      <circle cx="210" cy="175" r="1.5" fill="currentColor" />

                      {/* Layer 2: Short rays extending outward */}
                      <line
                        x1="120"
                        y1="92"
                        x2="120"
                        y2="102"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="120"
                        y1="248"
                        x2="120"
                        y2="258"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="42"
                        y1="175"
                        x2="52"
                        y2="175"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <line
                        x1="188"
                        y1="175"
                        x2="198"
                        y2="175"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>

                    {/* Radial Glow Behind Icon */}
                    <div
                      className="expertise-icon-glow"
                      style={{ background: program.glow }}
                    ></div>

                    {/* Top Badge */}
                    <div
                      className="expertise-top-badge"
                      style={{
                        background: program.badgeBg,
                        color: program.badgeColor,
                      }}
                    >
                      {program.badgeText}
                    </div>

                    {/* Render Icon with Circular Glass Container */}
                    <div className="expertise-icon-glass">
                      <IconComp
                        className="expertise-icon"
                        style={{ color: program.glow }}
                      />
                    </div>

                    {/* Title positioned at bottom */}
                    <h3>{program.title}</h3>
                    <p className="card-label">Hover to reveal</p>
                  </div>

                  {/* BACK FACE — Skills list */}
                  <div
                    className="expertise-card-back"
                    style={{ background: program.backGradient }}
                  >
                    {/* SVG Blueprint Decorations */}
                    <svg
                      className="blueprint-geometry"
                      style={{ color: program.glow }}
                      viewBox="0 0 240 350"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="none"
                    >
                      {/* Double rounded border */}
                      <rect
                        x="8"
                        y="8"
                        width="224"
                        height="334"
                        rx="16"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeOpacity="0.8"
                      />
                      <rect
                        x="14"
                        y="14"
                        width="212"
                        height="322"
                        rx="12"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeOpacity="0.5"
                      />

                      {/* Decorative engineering corner brackets */}
                      <path
                        d="M 24 14 L 14 14 L 14 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 216 14 L 226 14 L 226 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 24 336 L 14 336 L 14 326"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M 216 336 L 226 336 L 226 326"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      {/* Tiny circular anchor points */}
                      <circle
                        cx="28"
                        cy="28"
                        r="2"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="212"
                        cy="28"
                        r="2"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="28"
                        cy="322"
                        r="2"
                        fill="currentColor"
                        opacity="0.6"
                      />
                      <circle
                        cx="212"
                        cy="322"
                        r="2"
                        fill="currentColor"
                        opacity="0.6"
                      />

                      {/* Vertical center guide line */}
                      <line
                        x1="120"
                        y1="14"
                        x2="120"
                        y2="336"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeDasharray="4 4"
                        opacity="0.4"
                      />

                      {/* Horizontal measurement lines */}
                      <line
                        x1="14"
                        y1="60"
                        x2="226"
                        y2="60"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                      <line
                        x1="14"
                        y1="290"
                        x2="226"
                        y2="290"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />

                      {/* Small arrows on each side */}
                      <path
                        d="M 14 175 L 18 171 L 18 179 Z"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <path
                        d="M 226 175 L 222 171 L 222 179 Z"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <path
                        d="M 120 14 L 116 18 L 124 18 Z"
                        fill="currentColor"
                        opacity="0.5"
                      />
                      <path
                        d="M 120 336 L 116 332 L 124 332 Z"
                        fill="currentColor"
                        opacity="0.5"
                      />

                      {/* Minimal HUD decorations */}
                      <rect
                        x="20"
                        y="70"
                        width="4"
                        height="4"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <rect
                        x="20"
                        y="80"
                        width="4"
                        height="4"
                        fill="currentColor"
                        opacity="0.4"
                      />
                      <rect
                        x="20"
                        y="90"
                        width="4"
                        height="4"
                        fill="currentColor"
                        opacity="0.4"
                      />
                    </svg>

                    <div className="back-content-wrapper z-10 relative flex flex-col items-center w-full">
                      <span
                        className="back-title"
                        style={{ color: program.badgeColor }}
                      >
                        {program.title}
                      </span>
                      <ul>
                        {program.skills.map((skill, sIdx) => (
                          <li key={sIdx}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
