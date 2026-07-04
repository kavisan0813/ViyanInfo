import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Brain,
  Palette,
  CheckCircle2,
  Lock,
  Globe,
  Database,
  GitBranch,
  Cpu,
  Star,
  Quote,
} from "lucide-react";

// ─────────────────────────────────────────
// 1. SKILL TREE SVG
// ─────────────────────────────────────────
type SkillNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  color: string;
  Icon: React.ElementType;
  done?: boolean;
};

const skillNodes: SkillNode[] = [
  // Foundation row
  {
    id: "html",
    label: "HTML/CSS",
    x: 180,
    y: 260,
    color: "#F97316",
    Icon: Globe,
    done: true,
  },
  {
    id: "js",
    label: "JavaScript",
    x: 300,
    y: 260,
    color: "#F59E0B",
    Icon: Code2,
    done: true,
  },
  {
    id: "git",
    label: "Git",
    x: 240,
    y: 340,
    color: "#10B981",
    Icon: GitBranch,
    done: true,
  },

  // Mid row
  {
    id: "react",
    label: "React",
    x: 120,
    y: 170,
    color: "#3B82F6",
    Icon: Code2,
    done: true,
  },
  {
    id: "node",
    label: "Node.js",
    x: 360,
    y: 170,
    color: "#10B981",
    Icon: Server,
    done: true,
  },
  {
    id: "ts",
    label: "TypeScript",
    x: 240,
    y: 180,
    color: "#3178C6",
    Icon: Code2,
  },

  // Upper row
  { id: "python", label: "Python", x: 100, y: 90, color: "#06B6D4", Icon: Cpu },
  {
    id: "db",
    label: "Databases",
    x: 240,
    y: 90,
    color: "#7B2FF7",
    Icon: Database,
  },
  {
    id: "api",
    label: "REST/GraphQL",
    x: 380,
    y: 90,
    color: "#EC4899",
    Icon: Globe,
  },

  // Top
  { id: "ai", label: "AI/ML", x: 160, y: 20, color: "#EC4899", Icon: Brain },
  {
    id: "cloud",
    label: "Cloud/DevOps",
    x: 320,
    y: 20,
    color: "#7B2FF7",
    Icon: Server,
  },
];

const skillEdges: [string, string][] = [
  ["html", "react"],
  ["html", "ts"],
  ["js", "ts"],
  ["js", "react"],
  ["js", "node"],
  ["git", "react"],
  ["git", "node"],
  ["react", "python"],
  ["ts", "db"],
  ["node", "api"],
  ["python", "ai"],
  ["db", "ai"],
  ["api", "cloud"],
];

export function InternshipSkillTree() {
  const [hovered, setHovered] = useState<string | null>(null);

  const nodeById = (id: string) => skillNodes.find((n) => n.id === id)!;

  return (
    <div
      className="relative w-full max-w-[640px] mx-auto select-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 480 380" className="w-full h-auto">
        {/* Edges */}
        {skillEdges.map(([a, b], i) => {
          const na = nodeById(a);
          const nb = nodeById(b);
          const bothDone = na.done && nb.done;
          return (
            <motion.line
              key={i}
              x1={na.x}
              y1={na.y + 20}
              x2={nb.x}
              y2={nb.y + 20}
              stroke={bothDone ? "#10B981" : "#CBD5E1"}
              strokeWidth="1.5"
              strokeDasharray={bothDone ? "none" : "5 4"}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            />
          );
        })}

        {/* Nodes */}
        {skillNodes.map((node) => {
          const isHov = hovered === node.id;
          return (
            <g
              key={node.id}
              transform={`translate(${node.x - 24}, ${node.y})`}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <motion.rect
                width="48"
                height="48"
                rx="12"
                fill={node.done ? node.color : "#F1F5F9"}
                stroke={
                  isHov ? node.color : node.done ? `${node.color}60` : "#E2E8F0"
                }
                strokeWidth={isHov ? 2 : 1}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  type: "spring",
                  delay: skillNodes.indexOf(node) * 0.06,
                }}
                style={{
                  filter: node.done
                    ? `drop-shadow(0 4px 12px ${node.color}40)`
                    : "none",
                }}
              />
              {/* Icon placeholder text */}
              <text
                x="24"
                y="30"
                textAnchor="middle"
                fontSize="11"
                fontWeight="600"
                fill={node.done ? "white" : "#94A3B8"}
              >
                {node.label.slice(0, 3)}
              </text>

              {/* Done checkmark */}
              {node.done && (
                <circle cx="40" cy="8" r="8" fill="#10B981">
                  <animate
                    attributeName="r"
                    values="7;9;7"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              {/* Label below */}
              <text
                x="24"
                y="66"
                textAnchor="middle"
                fontSize="8"
                fontWeight="500"
                fill={node.done ? "#1E293B" : "#94A3B8"}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-2">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#10B981]" />
          <span className="text-[10px] text-slate-500 font-semibold">
            Completed
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-slate-200" />
          <span className="text-[10px] text-slate-500 font-semibold">
            Upcoming
          </span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 2. INTERNSHIP JOURNEY TIMELINE
// ─────────────────────────────────────────
const milestones = [
  {
    week: "Week 1",
    title: "Onboarding",
    desc: "Meet the team, set up dev environment, review codebase, and assign first task.",
    Icon: Star,
    color: "#7B2FF7",
  },
  {
    week: "Month 1",
    title: "First Project",
    desc: "Own a real feature end-to-end — from design spec to merged PR.",
    Icon: Code2,
    color: "#3B82F6",
  },
  {
    week: "Month 3",
    title: "Code Review",
    desc: "Lead code reviews, refactor legacy modules, and co-design API contracts.",
    Icon: GitBranch,
    color: "#10B981",
  },
  {
    week: "Month 6",
    title: "Placement Ready",
    desc: "Certificate of completion + placement assistance + strong reference letter.",
    Icon: CheckCircle2,
    color: "#F59E0B",
  },
];

export function InternJourneyTimeline() {
  return (
    <div className="relative max-w-sm mx-auto py-4">
      {/* Vertical line */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        style={{ transformOrigin: "top center" }}
        className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#7B2FF7] via-[#3B82F6] to-[#F59E0B]"
      />

      <div className="space-y-8 pl-16">
        {milestones.map((m, i) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative"
          >
            {/* Node dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              className="absolute -left-[42px] top-2 w-8 h-8 rounded-xl flex items-center justify-center shadow-md"
              style={{
                background: m.color,
                boxShadow: `0 4px 16px ${m.color}40`,
              }}
            >
              <m.Icon size={14} className="text-white" />
            </motion.div>

            {/* Card */}
            <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <span
                className="text-[9px] font-mono font-bold uppercase tracking-wider"
                style={{ color: m.color }}
              >
                {m.week}
              </span>
              <h4 className="text-sm font-display font-bold text-slate-800 mt-0.5 mb-1">
                {m.title}
              </h4>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                {m.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 3. TESTIMONIAL CARDS
// ─────────────────────────────────────────
const testimonials = [
  {
    name: "Priya Nair",
    role: "Batch 2024 · Now at Infosys",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&auto=format",
    quote:
      "The internship gave me real project ownership from day one. I shipped production code within the first two weeks.",
    rating: 5,
    track: "Full Stack",
    color: "#7B2FF7",
  },
  {
    name: "Arun Kumar",
    role: "Batch 2024 · Now at TCS",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    quote:
      "The mentorship structure here is unmatched. My senior dev reviewed every PR with detailed inline comments.",
    rating: 5,
    track: "Backend",
    color: "#3B82F6",
  },
  {
    name: "Sneha Reddy",
    role: "Batch 2025 · Now Freelancing",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&auto=format",
    quote:
      "I went from knowing basic HTML to building full React dashboards with REST APIs. Six months well spent.",
    rating: 5,
    track: "Frontend",
    color: "#EC4899",
  },
];

export function InternTestimonials() {
  const [active, setActive] = useState(0);

  return (
    <div className="relative max-w-2xl mx-auto">
      {/* Cards */}
      <div className="relative h-52">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-3xl border border-white/80 shadow-lg p-6"
            style={{ boxShadow: `0 16px 48px ${testimonials[active].color}15` }}
          >
            <Quote
              size={28}
              className="mb-3 opacity-20"
              style={{ color: testimonials[active].color }}
            />
            <p className="text-sm text-slate-600 leading-relaxed mb-4 italic">
              "{testimonials[active].quote}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-10 h-10 rounded-full object-cover border-2"
                style={{ borderColor: testimonials[active].color }}
              />
              <div>
                <div className="text-sm font-bold text-slate-800">
                  {testimonials[active].name}
                </div>
                <div className="text-[10px] text-slate-400">
                  {testimonials[active].role}
                </div>
              </div>
              <div className="ml-auto flex items-center gap-1">
                {Array(testimonials[active].rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
              </div>
              <span
                className="ml-2 px-2 py-0.5 rounded-full text-[9px] font-bold"
                style={{
                  background: `${testimonials[active].color}15`,
                  color: testimonials[active].color,
                }}
              >
                {testimonials[active].track}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((t, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="w-2 h-2 rounded-full transition-all cursor-pointer"
            style={{
              background: i === active ? t.color : "#CBD5E1",
              transform: i === active ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 4. HERO BACKGROUND IMAGE
// ─────────────────────────────────────────
export function InternshipHeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dark-tinted collaboration photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1600&auto=format&q=60)",
          opacity: 0.06,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7FF] via-[#FAF7FF]/95 to-[#FAF7FF]" />
      {/* Orb blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#7B2FF7]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#3B82F6]/5 blur-3xl" />
    </div>
  );
}

// ─────────────────────────────────────────
// 5. LEARNING TRACKS CARD ROW
// ─────────────────────────────────────────
const tracks = [
  {
    title: "Frontend",
    icon: Palette,
    color: "#7B2FF7",
    bg: "#7B2FF715",
    skills: ["React", "TypeScript", "GSAP", "Tailwind"],
    duration: "3 months",
  },
  {
    title: "Backend",
    icon: Server,
    color: "#3B82F6",
    bg: "#3B82F615",
    skills: ["Node.js", "Python", "REST APIs", "PostgreSQL"],
    duration: "3 months",
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "#EC4899",
    bg: "#EC489915",
    skills: ["LangChain", "OpenAI", "Vector DBs", "RAG"],
    duration: "6 months",
  },
  {
    title: "Security",
    icon: Lock,
    color: "#10B981",
    bg: "#10B98115",
    skills: ["OWASP", "Auth flows", "Pentest basics", "DevSecOps"],
    duration: "3 months",
  },
];

export function LearningTrackCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tracks.map((track, i) => (
        <motion.div
          key={track.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ y: -6 }}
          className="bg-white/70 backdrop-blur-sm border border-white/80 rounded-2xl p-5 shadow-sm text-left"
          style={{ boxShadow: `0 4px 24px ${track.color}10` }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
            style={{ background: track.bg }}
          >
            <track.icon size={18} style={{ color: track.color }} />
          </div>
          <h4 className="font-display font-bold text-slate-800 mb-1">
            {track.title}
          </h4>
          <span
            className="text-[9px] font-mono font-bold uppercase tracking-wider"
            style={{ color: track.color }}
          >
            {track.duration}
          </span>
          <ul className="mt-3 space-y-1">
            {track.skills.map((s) => (
              <li
                key={s}
                className="flex items-center gap-1.5 text-[11px] text-slate-500"
              >
                <CheckCircle2 size={9} style={{ color: track.color }} />
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
