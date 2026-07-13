import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import {
  MousePointer2,
  Layers,
  Grid,
  AlignLeft,
  Square,
  Circle,
  Type,
} from "lucide-react";

// ── Animated Figma-Style Canvas Hero ──────────────────────────────
const toolbarItems = [
  { Icon: MousePointer2, active: true },
  { Icon: Square, active: false },
  { Icon: Circle, active: false },
  { Icon: Type, active: false },
  { Icon: AlignLeft, active: false },
  { Icon: Grid, active: false },
  { Icon: Layers, active: false },
];

const componentCards = [
  {
    id: "button",
    label: "Button",
    x: 40,
    y: 60,
    w: 120,
    h: 40,
    delay: 0,
    content: (
      <div className="w-full h-full rounded-lg bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] flex items-center justify-center">
        <span className="text-white text-[9px] font-bold">Click me</span>
      </div>
    ),
  },
  {
    id: "input",
    label: "Input",
    x: 180,
    y: 60,
    w: 160,
    h: 40,
    delay: 0.3,
    content: (
      <div className="w-full h-full rounded-lg border-2 border-[#7B2FF7] flex items-center px-2 gap-1">
        <span className="text-[8px] text-slate-400">Enter text...</span>
        <div className="w-px h-3 bg-[#7B2FF7] animate-pulse ml-auto" />
      </div>
    ),
  },
  {
    id: "card",
    label: "Card",
    x: 40,
    y: 130,
    w: 180,
    h: 100,
    delay: 0.6,
    content: (
      <div className="w-full h-full rounded-xl bg-white border border-slate-200 p-2 shadow-sm">
        <div className="w-full h-8 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 mb-1.5" />
        <div className="w-3/4 h-1.5 rounded bg-slate-200 mb-1" />
        <div className="w-1/2 h-1 rounded bg-slate-100" />
      </div>
    ),
  },
  {
    id: "navbar",
    label: "Navbar",
    x: 240,
    y: 130,
    w: 200,
    h: 44,
    delay: 0.9,
    content: (
      <div className="w-full h-full rounded-lg bg-white border border-slate-200 flex items-center px-2 gap-2">
        <div className="w-4 h-4 rounded bg-[#7B2FF7]/20" />
        <div className="flex-1 flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-1 rounded bg-slate-200" />
          ))}
        </div>
        <div className="w-8 h-3 rounded bg-[#7B2FF7]/30" />
      </div>
    ),
  },
];

// Animated cursor positions
const cursorPath = [
  { x: 80, y: 80, delay: 0 },
  { x: 230, y: 80, delay: 1 },
  { x: 130, y: 180, delay: 2 },
  { x: 300, y: 152, delay: 3 },
];

export function FigmaCanvasHero() {
  const [activeTool, setActiveTool] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 80, y: 80 });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % cursorPath.length;
      setCursorPos(cursorPath[i]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full max-w-[500px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* App chrome */}
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
        style={{ boxShadow: "0 32px 80px rgba(123,47,247,0.15)" }}
      >
        {/* Title bar */}
        <div className="bg-[#1e1e2e] flex items-center px-4 py-2.5 gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex gap-4 text-[9px] text-slate-400">
              {["Design", "Prototype", "Inspect"].map((tab, i) => (
                <span
                  key={tab}
                  className={
                    i === 0 ? "text-white border-b border-white pb-0.5" : ""
                  }
                >
                  {tab}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-5 h-1.5 rounded bg-white/10" />
            ))}
          </div>
        </div>

        <div className="flex" style={{ height: 300 }}>
          {/* Left toolbar */}
          <div className="bg-[#1e1e2e] w-10 flex flex-col items-center py-3 gap-2 border-r border-white/5">
            {toolbarItems.map(({ Icon }, i) => (
              <button
                key={i}
                onClick={() => setActiveTool(i)}
                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${activeTool === i
                  ? "bg-[#7B2FF7]/40 text-[#9b77f5]"
                  : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                <Icon size={13} />
              </button>
            ))}
          </div>

          {/* Canvas area */}
          <div className="flex-1 bg-[#2a2a3e] relative overflow-hidden">
            {/* Grid dots */}
            <svg
              className="absolute inset-0 w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="dots"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="0.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>

            {/* White artboard */}
            <div
              className="absolute bg-white rounded-sm shadow-2xl"
              style={{ left: 20, top: 20, width: 420, height: 260 }}
            >
              {/* Component cards on artboard */}
              {componentCards.map((card) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay, duration: 0.4 }}
                  style={{
                    position: "absolute",
                    left: card.x,
                    top: card.y,
                    width: card.w,
                    height: card.h,
                  }}
                >
                  {/* Selection outline */}
                  <div className="absolute -inset-1 border border-[#7B2FF7] rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none" />
                  {card.content}
                  {/* Layer label */}
                  <div className="absolute -top-4 left-0 text-[7px] text-[#7B2FF7] font-mono whitespace-nowrap">
                    {card.label}
                  </div>
                </motion.div>
              ))}

              {/* Animated cursor */}
              <motion.div
                animate={cursorPos}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ position: "absolute" }}
              >
                <MousePointer2
                  size={14}
                  className="text-[#7B2FF7] drop-shadow-lg fill-[#7B2FF720]"
                />
              </motion.div>
            </div>
          </div>

          {/* Right panel */}
          <div className="bg-[#1e1e2e] w-32 border-l border-white/5 p-2">
            <div className="text-[7px] text-slate-400 uppercase tracking-wider mb-2">
              Properties
            </div>
            {[
              { label: "W", val: "120" },
              { label: "H", val: "40" },
              { label: "X", val: "40" },
              { label: "Y", val: "60" },
            ].map((prop) => (
              <div key={prop.label} className="flex items-center gap-1 mb-1.5">
                <span className="text-[8px] text-slate-500 w-4">
                  {prop.label}
                </span>
                <div className="flex-1 bg-[#2a2a3e] rounded px-1.5 py-1 text-[8px] text-slate-300 font-mono">
                  {prop.val}
                </div>
              </div>
            ))}
            <div className="mt-3 text-[7px] text-slate-400 uppercase tracking-wider mb-2">
              Fill
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gradient-to-br from-[#7B2FF7] to-[#9333EA]" />
              <div className="text-[8px] text-slate-300 font-mono">#7B2FF7</div>
            </div>
            <div className="mt-3 text-[7px] text-slate-400 uppercase tracking-wider mb-2">
              Layers
            </div>
            {["Button", "Input", "Card", "Navbar"].map((layer) => (
              <div
                key={layer}
                className="flex items-center gap-1 py-0.5 text-[8px] text-slate-400 hover:text-white cursor-pointer"
              >
                <Square size={8} />
                {layer}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Design Showcase Gallery ────────────────────────────────────────
const designShowcase = [
  {
    title: "E-commerce Platform",
    type: "Web Design",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop&auto=format",
    color: "#7B2FF7",
  },
  {
    title: "Fintech Mobile App",
    type: "iOS Design",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&auto=format",
    color: "#3B82F6",
  },
  {
    title: "SaaS Dashboard",
    type: "Web App",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    color: "#10B981",
  },
  {
    title: "Brand Identity System",
    type: "Branding",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&auto=format",
    color: "#EC4899",
  },
  {
    title: "Healthcare Platform",
    type: "UX Research",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop&auto=format",
    color: "#F59E0B",
  },
];

export function DesignShowcaseGallery() {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {designShowcase.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="flex-shrink-0 w-64 rounded-2xl overflow-hidden shadow-md border border-slate-100 cursor-pointer bg-white group text-left font-sans"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `${item.color}20` }}
              />
              <span
                className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[9px] font-bold text-white"
                style={{ background: item.color }}
              >
                {item.type}
              </span>
            </div>
            <div className="p-3 bg-white">
              <h4 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Before/After Slider ────────────────────────────────────────────
export function BeforeAfterSlider() {
  const [sliderX, setSliderX] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(670);

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.getBoundingClientRect().width);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderX(Math.max(5, Math.min(95, pct)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden cursor-col-resize shadow-lg border border-slate-100 select-none bg-white text-left font-sans"
      style={{ height: 320 }}
      onMouseMove={handleMouseMove}
    >
      {/* Before — wireframe */}
      <div className="absolute inset-0 bg-slate-100 p-6 flex flex-col justify-between">
        <div>
          <div className="text-xs text-slate-400 font-mono mb-4">WIREFRAME</div>
          <div className="h-8 bg-slate-300 rounded mb-4" />
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-slate-300 rounded" />
            ))}
          </div>
        </div>
        <div>
          <div className="h-4 bg-slate-300 rounded w-3/4 mb-2" />
          <div className="h-4 bg-slate-300 rounded w-1/2" />
        </div>
      </div>

      {/* After — polished UI */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
      >
        <div
          className="absolute inset-0 bg-white p-6 flex flex-col justify-between"
          style={{
            width: containerWidth,
          }}
        >
          <div>
            <div className="text-xs text-[#7B2FF7] font-mono mb-4">
              FINAL DESIGN
            </div>
            <div className="h-8 bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] rounded mb-4 flex items-center px-3">
              <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-1.5 rounded bg-white/40" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                ["#7B2FF7", "Feature One"],
                ["#3B82F6", "Feature Two"],
                ["#10B981", "Feature Three"],
              ].map(([c, t], i) => (
                <div
                  key={i}
                  className="h-24 rounded-xl p-3 flex flex-col justify-between"
                  style={{ background: `${c}10`, border: `1px solid ${c}20` }}
                >
                  <div
                    className="w-6 h-6 rounded-lg"
                    style={{ background: `${c}30` }}
                  />
                  <div className="text-[9px] font-bold" style={{ color: c }}>
                    {t}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="h-4 rounded bg-slate-100 w-3/4 mb-2" />
            <div className="h-4 rounded bg-slate-100 w-1/2" />
          </div>
        </div>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-[#7B2FF7] pointer-events-none"
        style={{ left: `${sliderX}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#7B2FF7] flex items-center justify-center shadow-lg">
          <span className="text-white text-xs">⟺</span>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-3 left-3 text-[9px] font-bold text-slate-500 bg-white/80 px-2 py-0.5 rounded">
        BEFORE
      </div>
      <div className="absolute bottom-3 right-3 text-[9px] font-bold text-[#7B2FF7] bg-white/80 px-2 py-0.5 rounded">
        AFTER
      </div>
    </div>
  );
}

// ── Design Process SVG ─────────────────────────────────────────────
const designSteps = ["Discovery", "Wireframe", "Prototype", "Handoff"];
const stepColors = ["#7B2FF7", "#3B82F6", "#10B981", "#F59E0B"];

export function DesignProcessSVG() {
  return (
    <div className="flex items-center justify-center gap-0 w-full max-w-2xl mx-auto py-8">
      {designSteps.map((step, i) => (
        <div key={step} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex flex-col items-center gap-2"
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
              style={{
                background: stepColors[i],
                boxShadow: `0 8px 24px ${stepColors[i]}40`,
              }}
            >
              {i + 1}
            </div>
            <span className="text-xs font-semibold text-slate-600 whitespace-nowrap">
              {step}
            </span>
          </motion.div>
          {i < designSteps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
              style={{ transformOrigin: "left center" }}
              className="h-0.5 w-12 bg-gradient-to-r from-slate-200 to-slate-300 mx-1"
            />
          )}
        </div>
      ))}
    </div>
  );
}
