import React from "react";

export function burst(
  originEl: HTMLElement,
  count: number = 16,
  colors: string[] = ["#7B2FF7", "#06B6D4", "#EC4899", "#10B981", "#3B82F6"],
  spread: number = 120,
  duration: number = 800,
) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < count; i++) {
    const p = document.createElement("div");
    const angle = Math.random() * Math.PI * 2;
    const dist = spread * 0.4 + Math.random() * spread * 0.6;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;
    const size = 4 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 120;
    const dur = duration * 0.7 + Math.random() * duration * 0.3;

    Object.assign(p.style, {
      position: "fixed",
      left: cx + "px",
      top: cy + "px",
      width: size + "px",
      height: size + "px",
      borderRadius: "50%",
      background: color,
      pointerEvents: "none",
      zIndex: "9999",
      transform: "translate(-50%, -50%)",
    });
    document.body.appendChild(p);

    const start = performance.now() + delay;

    function tick(now: number) {
      const elapsed = now - start;
      if (elapsed < 0) {
        requestAnimationFrame(tick);
        return;
      }
      const prog = Math.min(elapsed / dur, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      p.style.transform = `translate(calc(-50% + ${tx * ease}px), calc(-50% + ${ty * ease}px)) scale(${1 - prog * 0.5})`;
      p.style.opacity = String(
        prog < 0.3 ? prog / 0.3 : 1 - (prog - 0.3) / 0.7,
      );
      if (prog < 1) requestAnimationFrame(tick);
      else p.remove();
    }
    requestAnimationFrame(tick);
  }
}

export const onHoverBurst = (e: React.MouseEvent<HTMLElement>) => {
  burst(
    e.currentTarget,
    12,
    ["#7B2FF7", "#3B82F6", "#EC4899", "#10B981"],
    80,
    700,
  );
};
