import { useRef, useState, useEffect } from "react";
import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Palette,
  GraduationCap,
  Star,
  Layers,
  Package,
  Sparkles,
  Network,
  Bell,
  Wifi,
  Search,
  Rocket,
  TrendingUp,
  MapPin,
  Award,
  CreditCard,
  Code,
  ClipboardList,
  FileQuestion,
  BookOpen,
  Cpu,
  Heart,
  Cloud,
  Eye,
  Database,
  CheckCircle2,
  Shield,
  Zap,
  ShieldAlert,
  BrainCircuit,
  Handshake,
  LineChart,
  Infinity as InfinityIcon,
} from "lucide-react";
import { FaPython } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import inventryImg from "../assets/inventry.webp";
import medassistimg from "../assets/work_medassist.png";
import emsImg from "../assets/ems.webp";
import billingsImg from "../assets/work_billing.png";

export const PostgreSQLIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 16C31.5 16 22 28.5 22 43.5C22 56 31 66.5 41 71.5L34 82H45L51 72.5C59.5 73.5 68 70 73 62C78 54 78 41 78 32.5C78 24 71.5 16 50 16Z"
      stroke="#336791"
      strokeWidth="4.5"
      strokeLinejoin="round"
    />
    <path
      d="M38 34C35 34 32 37 32 41C32 45 35 48 38 48"
      stroke="#336791"
      strokeWidth="4"
    />
  </svg>
);

export const AwsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M22 62C27 68 37 72 50 72C63 72 73 68 78 62"
      stroke="#FF9900"
      strokeWidth="5.5"
      strokeLinecap="round"
    />
    <path d="M74 61L81 67L79 56L74 61Z" fill="#FF9900" />
    <text
      x="50"
      y="50"
      fill="white"
      fontSize="26"
      fontWeight="extrabold"
      fontFamily="sans-serif"
      textAnchor="middle"
    >
      AWS
    </text>
  </svg>
);

export const DockerIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <rect x="22" y="44" width="12" height="12" rx="2" fill="#2496ED" />
    <rect x="38" y="44" width="12" height="12" rx="2" fill="#2496ED" />
    <rect x="54" y="44" width="12" height="12" rx="2" fill="#2496ED" />
    <rect x="38" y="28" width="12" height="12" rx="2" fill="#2496ED" />
    <path
      d="M14 62C24 62 26 52 48 52C70 52 72 62 86 62C86 72 74 78 50 78C26 78 14 72 14 62Z"
      fill="#2496ED"
    />
  </svg>
);

export const RedisIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M18 30L50 16L82 30L50 44L18 30Z"
      fill="#DC382D"
      stroke="#A81C14"
      strokeWidth="2"
    />
    <path
      d="M18 48L50 34L82 48L50 62L18 48Z"
      fill="#DC382D"
      stroke="#A81C14"
      strokeWidth="2"
    />
    <path
      d="M18 66L50 52L82 66L50 80L18 66Z"
      fill="#DC382D"
      stroke="#A81C14"
      strokeWidth="2"
    />
  </svg>
);

const OpenAiIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 28C44 28 39 31 36 36C33 33 28 32 24 35C20 38 19 44 22 48C18 51 17 57 20 61C23 65 29 66 33 63C36 67 41 69 46 67C49 71 55 72 59 69C63 66 64 60 61 56C65 53 66 47 63 43C60 39 54 38 50 41C47 37 42 35 37 37"
      stroke="#10A37F"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="50" cy="50" r="4" fill="#10A37F" />
  </svg>
);

const LangChainIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <rect
      x="25"
      y="35"
      width="30"
      height="30"
      rx="8"
      stroke="#38BDF8"
      strokeWidth="5"
      transform="rotate(-15 40 50)"
    />
    <rect
      x="45"
      y="35"
      width="30"
      height="30"
      rx="8"
      stroke="#10A37F"
      strokeWidth="5"
      transform="rotate(15 60 50)"
    />
  </svg>
);

const ExpressIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" fill="#353535" />
    <text
      x="50"
      y="58"
      fill="white"
      fontSize="28"
      fontWeight="bold"
      fontFamily="monospace"
      textAnchor="middle"
    >
      Ex
    </text>
  </svg>
);

const FastApiIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="44" stroke="#009688" strokeWidth="4" />
    <path d="M52 24L32 50H48L44 76L68 44H50L52 24Z" fill="#009688" />
  </svg>
);

const NodejsIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M48 22.5L25 35.5V62L48 75L71 62V35.5L48 22.5Z"
      stroke="#339933"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path d="M48 22.5L25 35.5V62L48 75V22.5Z" fill="#339933" opacity="0.1" />
    <path
      d="M48 40V65"
      stroke="#339933"
      strokeWidth="5"
      strokeLinecap="round"
    />
    <circle cx="48" cy="32" r="3" fill="#339933" />
  </svg>
);

const PythonIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 12C38 12 37 17 37 23.5V31.5H50V33.5H30.5C23.5 33.5 19 37.5 19 49C19 60.5 23.5 64.5 30.5 64.5H35.5V58.5C35.5 50.5 41.5 44.5 49.5 44.5H62.5V36.5C62.5 24.5 58.5 12 50 12Z"
      fill="#3776AB"
    />
    <path
      d="M50 88C62 88 63 83 63 76.5V68.5H50V66.5H69.5C76.5 66.5 81 62.5 81 51C81 39.5 76.5 35.5 69.5 35.5H64.5V41.5C64.5 49.5 58.5 55.5 50.5 55.5H37.5V63.5C37.5 75.5 41.5 88 50 88Z"
      fill="#FFE052"
    />
    <circle cx="44" cy="21" r="2.5" fill="white" />
    <circle cx="56" cy="79" r="2.5" fill="black" />
  </svg>
);

const DjangoIcon = () => (
  <svg
    className="w-8 h-8 rounded-lg overflow-hidden"
    viewBox="0 0 100 100"
    fill="none"
  >
    <rect width="100" height="100" fill="#092E20" />
    <text
      x="50"
      y="65"
      fill="#0FEE90"
      fontSize="56"
      fontWeight="bold"
      fontFamily="serif"
      textAnchor="middle"
    >
      d
    </text>
  </svg>
);

const ReactIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="8" fill="#61DAFB" />
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="14"
      stroke="#61DAFB"
      strokeWidth="3"
      transform="rotate(0 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="14"
      stroke="#61DAFB"
      strokeWidth="3"
      transform="rotate(60 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="14"
      stroke="#61DAFB"
      strokeWidth="3"
      transform="rotate(120 50 50)"
    />
  </svg>
);

const MongodbIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M50 12C50 12 32 32 32 54C32 68 41 76 50 88C50 88 50 82 50 78"
      stroke="#47A248"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    <path
      d="M50 12C50 12 68 32 68 54C68 68 59 76 50 88"
      stroke="#47A248"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
    <path d="M50 28V68" stroke="#3F3F3F" strokeWidth="4" />
  </svg>
);

const FlutterIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path d="M55 18L73 36L46 63L28 45L55 18Z" fill="#02569B" />
    <path d="M46 63L64 81L46 99L28 81L46 63Z" fill="#0175C2" />
    <path d="M46 63L64 45L73 54L55 72L46 63Z" fill="#13B9FD" />
  </svg>
);

const ReactNativeIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="6" fill="#00D8FF" />
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="12"
      stroke="#00D8FF"
      strokeWidth="3.5"
      transform="rotate(30 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="12"
      stroke="#00D8FF"
      strokeWidth="3.5"
      transform="rotate(90 50 50)"
    />
    <ellipse
      cx="50"
      cy="50"
      rx="38"
      ry="12"
      stroke="#00D8FF"
      strokeWidth="3.5"
      transform="rotate(150 50 50)"
    />
  </svg>
);

const FirebaseIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path d="M22 75L50 20L60 40L22 75Z" fill="#FFC229" />
    <path d="M78 75L50 20L58 36L78 75Z" fill="#FFA000" />
    <path d="M22 75L50 88L78 75L60 40L50 50L22 75Z" fill="#F44336" />
  </svg>
);

const NextjsIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="50"
      cy="50"
      r="46"
      fill="#000000"
      stroke="#333"
      strokeWidth="2"
    />
    <path
      d="M72 70L42 34H36V66H41V42.5L68 73.5C70 72.3 71 71.2 72 70Z"
      fill="white"
    />
    <rect x="58" y="34" width="5" height="32" fill="white" />
  </svg>
);

const TypeScriptIcon = () => (
  <svg
    className="w-8 h-8 rounded-lg overflow-hidden"
    viewBox="0 0 100 100"
    fill="none"
  >
    <rect width="100" height="100" fill="#3178C6" />
    <text
      x="90"
      y="85"
      fill="white"
      fontSize="42"
      fontWeight="bold"
      fontFamily="sans-serif"
      textAnchor="end"
    >
      TS
    </text>
  </svg>
);

const TailwindIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
    <path
      d="M26 50C26 38 35.5 32.5 44.5 32.5C56.5 32.5 59.5 41.5 68.5 41.5C74.5 41.5 80 37 80 32.5C80 44.5 70.5 50 61.5 50C49.5 50 46.5 41 37.5 41C31.5 41 26 45.5 26 50Z"
      fill="#38BDF8"
    />
    <path
      d="M14 62.5C14 50.5 23.5 45 32.5 45C44.5 45 47.5 54 56.5 54C62.5 54 68 49.5 68 45C68 57 58.5 62.5 49.5 62.5C37.5 62.5 34.5 53.5 25.5 53.5C19.5 53.5 14 58 14 62.5Z"
      fill="#06B6D4"
    />
  </svg>
);

export function TestimonialCarousel() {
  const reviews = [
    {
      text: "ViyanInfo developed our ERP platform. The design is beautiful, and the API speeds are outstanding. They delivered a week ahead of schedule.",
      name: "Sarah Jenkins",
      role: "Operations Director, MedGroup",
      stars: 5,
    },
    {
      text: "The web application we built together has scaled to 10k daily users without issue. Excellent engineering work and reliable customer support.",
      name: "David K.",
      role: "Founder, LedgerTech",
      stars: 5,
    },
    {
      text: "Invaluable partners for custom backend tools. Their team writes clean code, sets up CI/CD pipelines, and keeps architecture extremely tidy.",
      name: "Michelle Ross",
      role: "CTO, FinFlow",
      stars: 5,
    },
  ];

  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden flex pt-4 pb-8">
      {/* Left/Right Gradient Masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#FAF7FF] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#FAF7FF] to-transparent z-10 pointer-events-none"></div>

      <div className="flex gap-6 w-max animate-[ticker-left_40s_linear_infinite] hover:[animation-play-state:paused]">
        {duplicatedReviews.map((review, idx) => (
          <div
            key={idx}
            className="w-[350px] sm:w-[450px] p-8 rounded-3xl bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_10px_30px_rgba(123,47,247,0.03)] flex flex-col justify-between shrink-0"
          >
            <div className="mb-6">
              <div className="flex gap-1 mb-4">
                {Array(review.stars)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
              </div>
              <p className="text-lg text-[#0F172A] font-display leading-relaxed">
                "{review.text}"
              </p>
            </div>
            <div>
              <h4 className="font-display font-bold text-[#0F172A] text-[15px]">
                {review.name}
              </h4>
              <span className="text-sm text-[#7B2FF7] font-medium">
                {review.role}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CountUp({
  end,
  duration = 2.5,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1,
      );
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            window.requestAnimationFrame(step);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [end, duration]);

  return <span ref={elementRef}>{count}</span>;
}

export function Ourtools() {
  return (
    <section className="relative py-24 bg-[#FAF7FF] overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
            Our Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-[#475569] max-w-readable mx-auto">
            We leverage modern language frameworks and cloud standards to deploy
            resilient services.
          </p>
        </div>

        {/* Marquee Row */}
        <div className="mt-16 relative w-full overflow-hidden py-4 border-y border-[#E9D5FF]/30">
          <div className="flex w-[200%] gap-12 animate-[ticker-left_30s_linear_infinite]">
            {Array(2)
              .fill([
                "React",
                "Next.js",
                "Node.js",
                "Python",
                "Django",
                "PostgreSQL",
                "MongoDB",
                "MySQL",
                "AWS",
                "Docker",
                "Firebase",
                "TailwindCSS",
                "TypeScript",
                "OpenAI",
              ])
              .flat()
              .map((tech, idx) => {
                const techColors: Record<string, string> = {
                  react: "#61DAFB",
                  "next.js": "#000000",
                  typescript: "#3178C6",
                  tailwindcss: "#06B6D4",
                  java: "#ED8B00",
                  python: "#3776AB",
                  javascript: "#F7DF1E",
                  go: "#00ADD8",
                  springboot: "#6DB33F",
                  fastapi: "#009688",
                  nodejs: "#339933",
                  "node.js": "#339933",
                  "fiber, gin": "#00ADD8",
                  postgresql: "#336791",
                  mongodb: "#47A248",
                  mysql: "#00758F",
                  "spacetime db": "#7B2FF7",
                  aws: "#FF9900",
                  docker: "#2496ED",
                  firebase: "#FFCA28",
                  vercel: "#000000",
                  "fine tuning`": "#A855F7",
                  langchain: "#00A389",
                  "vector dbs": "#8B5CF6",
                  llamaindex: "#E24A8D",
                  django: "#092E20",
                  openai: "#10A37F",
                };
                const cleanKey = tech.toLowerCase().trim();
                const color = techColors[cleanKey] || "#7B2FF7";
                return (
                  <div
                    key={idx}
                    className="px-6 py-2.5 rounded-xl bg-white/70 border border-white font-mono font-bold text-sm shadow-2xs shrink-0"
                    style={{ color: color }}
                  >
                    {tech}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export const Homecontent1 = [
  {
    title: "Custom Software Development",
    icon: <Code2 className="w-8 h-8 text-[#7B2FF7]" />,
    desc: "Tailored enterprise solutions built from scratch to streamline your business workflows.",
    tag: "Custom",
    bg: "from-purple-500/10 to-indigo-500/10",
    tagColor: "text-[#7B2FF7]",
    learnMoreColor: "text-[#7B2FF7]",
    btnBg: "bg-purple-500/5",
    btnDot: "bg-[#7B2FF7]",
    gradientBorder: "from-[#7B2FF7]/10 to-[#9333EA]/10",
    path: "/services/custom-software",
  },
  {
    title: "Web Application Development",
    icon: <Globe className="w-8 h-8 text-[#3B82F6]" />,
    desc: "High-performance React & Next.js applications engineered for scalability and speed.",
    tag: "Web",
    bg: "from-blue-500/10 to-indigo-500/10",
    tagColor: "text-[#3B82F6]",
    learnMoreColor: "text-[#3B82F6]",
    btnBg: "bg-blue-500/5",
    btnDot: "bg-[#3B82F6]",
    gradientBorder: "from-[#3B82F6]/10 to-blue-500/10",
    path: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-[#06B6D4]" />,
    desc: "Native iOS and Android smart applications built with React Native for cross-platform efficiency.",
    tag: "Mobile",
    bg: "from-cyan-500/10 to-indigo-500/10",
    tagColor: "text-[#06B6D4]",
    learnMoreColor: "text-[#06B6D4]",
    btnBg: "bg-cyan-500/5",
    btnDot: "bg-[#06B6D4]",
    gradientBorder: "from-[#06B6D4]/10 to-cyan-500/10",
    path: "/services/mobile-development",
  },
  {
    title: "AI & Automation Solutions",
    icon: <Brain className="w-8 h-8 text-[#EC4899]" />,
    desc: "Intelligent workflows, LLM integrations, OpenAI chatbots, and business automation pipelines.",
    tag: "Artificial Intelligence",
    bg: "from-pink-500/10 to-indigo-500/10",
    tagColor: "text-[#EC4899]",
    learnMoreColor: "text-[#EC4899]",
    btnBg: "bg-pink-500/5",
    btnDot: "bg-[#EC4899]",
    gradientBorder: "from-[#EC4899]/10 to-pink-500/10",
    path: "/services/ai-automation",
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="w-8 h-8 text-[#F97316]" />,
    desc: "Research-driven, gorgeous user interfaces and delightful digital experiences.",
    tag: "Design",
    bg: "from-orange-500/10 to-indigo-500/10",
    tagColor: "text-[#F97316]",
    learnMoreColor: "text-[#F97316]",
    btnBg: "bg-orange-500/5",
    btnDot: "bg-[#F97316]",
    gradientBorder: "from-[#F97316]/10 to-orange-500/10",
    path: "/services/ui-ux-design",
  },
  {
    title: "Internship & Training Programs",
    icon: <GraduationCap className="w-8 h-8 text-[#10B981]" />,
    desc: "Empowering the next generation of engineers with hands-on projects and mentorship.",
    tag: "Education",
    bg: "from-green-500/10 to-indigo-500/10",
    tagColor: "text-[#10B981]",
    learnMoreColor: "text-[#10B981]",
    btnBg: "bg-green-500/5",
    btnDot: "bg-[#10B981]",
    gradientBorder: "from-[#10B981]/10 to-emerald-500/10",
    path: "/internship",
  },
];

export const Homecontent2 = [
  {
    val: 3,
    suffix: "+",
    label: "Products Launched",
    desc: "In-house software products built and deployed to production.",
    color: "text-[#7B2FF7]",
    divider: "from-[#7B2FF7] to-purple-400",
    glow: "from-purple-500/5 to-indigo-500/5",
    borderGlow: "from-[#7B2FF7]/20 to-[#9333EA]/20",
  },
  {
    val: 6,
    suffix: "+",
    label: "Client Projects",
    desc: "Custom platforms, web dashboards, and integrations delivered.",
    color: "text-[#3B82F6]",
    divider: "from-[#3B82F6] to-blue-400",
    glow: "from-blue-500/5 to-cyan-500/5",
    borderGlow: "from-[#3B82F6]/20 to-[#60A5FA]/20",
  },
  {
    val: 5,
    suffix: "+",
    label: "Industries Served",
    desc: "Active deployments across Healthcare, Fintech, EdTech, and ERP.",
    color: "text-[#06B6D4]",
    divider: "from-[#06B6D4] to-cyan-400",
    glow: "from-cyan-500/5 to-teal-500/5",
    borderGlow: "from-[#06B6D4]/20 to-[#22D3EE]/20",
  },
  {
    val: 8,
    suffix: "+",
    label: "Years Combined Exp",
    desc: "Years of engineering experience across our core team.",
    color: "text-[#10B981]",
    divider: "from-[#10B981] to-emerald-400",
    glow: "from-emerald-500/5 to-green-500/5",
    borderGlow: "from-[#10B981]/20 to-[#34D399]/20",
  },
];

export const Homecontent3 = [
  {
    title: "MedAssist Pharmacy Management",
    category: "Healthcare SaaS",
    desc: "Integrated pharmacy inventory control and smart billing engine used by medical franchises.",
    image: medassistimg,
    tags: ["React.js", "Node.js", "PostgreSQL", "WebSockets"],
  },
  {
    title: "ERP Management Platform",
    category: "Enterprise System",
    desc: "Comprehensive operations ecosystem supporting resource planning, scheduling, and custom reporting.",
    image: emsImg,
    tags: ["Next.js", "Python", "Django", "TailwindCSS"],
  },
  {
    title: "Billing Software",
    category: "Fintech",
    desc: "Sub-second ledger calculations, invoice generator pipelines, and automated multi-gate payment settlement.",
    image: billingsImg,
    tags: ["React.js", "Express", "MongoDB", "ChartJS"],
  },
  {
    title: "CRM Solution",
    category: "SaaS Dashboard",
    desc: "Complete client communication tracking, automated pipelines, and conversion visualizers.",
    image: emsImg,
    tags: ["TypeScript", "Next.js", "Firebase", "Framer Motion"],
  },
  {
    title: "Internship Management Portal",
    category: "Education Tech",
    desc: "Tracking metrics, automated certifications, and course delivery timelines for students.",
    image: emsImg,
    tags: ["React.js", "TailwindCSS", "Node.js", "MySQL"],
  },
  {
    title: "Custom Business Automation",
    category: "Business Intelligence",
    desc: "Scrape, structure, analyze, and automate manual administrative tasks into clean background cron pipelines.",
    image: inventryImg,
    tags: ["Python", "FastAPI", "Docker", "AWS Lambda"],
  },
];

export const Homecontent4 = [
  {
    step: "01",
    title: "Discover",
    desc: "We understand your business goals, users, challenges, and project requirements before writing code.",
    icon: Search,
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-600",
  },
  {
    step: "02",
    title: "Design",
    desc: "We transform ideas into intuitive user experiences, scalable architecture, and clear implementation plans.",
    icon: Palette,
    color: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-600",
  },
  {
    step: "03",
    title: "Build",
    desc: "Our engineering team develops secure, scalable, and maintainable software using modern technologies.",
    icon: Code,
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  },
  {
    step: "04",
    title: "Validate",
    desc: "Every feature is tested for functionality, usability, security, and performance before release.",
    icon: Shield,
    color: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-600",
  },
  {
    step: "05",
    title: "Launch",
    desc: "We deploy your application with reliable infrastructure, monitoring, and production-ready environments.",
    icon: Rocket,
    color: "from-rose-500/10 to-orange-500/10",
    iconColor: "text-rose-600",
  },
  {
    step: "06",
    title: "Scale",
    desc: "After launch, we continue improving your product through feature enhancements and support.",
    icon: TrendingUp,
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-600",
  },
];

export const Homecontent5 = [
  {
    title: "Our Mission",
    desc: "To engineer digital tools that simplify operations, increase efficiency, and scale seamlessly.",
  },
  {
    title: "Our Vision",
    desc: "To become a world-leading technology agency defined by quality, visual design precision, and speed.",
  },
  {
    title: "Core Values",
    desc: "Transparency, performance-first code, collaboration, and continuous iteration.",
  },
];

export const Homecontent6 = [
  {
    title: "Product-Minded Engineering",
    icon: Package,
    desc: "We think beyond feature delivery. Every solution is designed with long-term product success, maintainability, scalability, and user experience in mind.",
    benefits: [
      "Business-first decisions",
      "Future-ready architecture",
      "Continuous improvement",
      "Focus on user adoption",
    ],
  },
  {
    title: "End-to-End Ownership",
    icon: Layers,
    desc: "From discovery and planning to deployment, maintenance, and future enhancements, we take ownership of the entire product lifecycle.",
    benefits: [
      "Product Strategy",
      "UI/UX Design",
      "Architecture",
      "Continuous Support",
    ],
  },
  {
    title: "Scalable Architecture",
    icon: Network,
    desc: "Software should grow with your business. Our systems are designed using modular, scalable architectures that support complexity without rewrites.",
    benefits: [
      "Cloud Ready",
      "Microservices",
      "API-First Design",
      "High Performance",
    ],
  },
  {
    title: "Security by Design",
    icon: Shield,
    desc: "Security is integrated into every stage of development. Our engineering practices prioritize data protection, encryption, and compliance.",
    benefits: [
      "Secure APIs",
      "Role-Based Access",
      "Data Encryption",
      "Audit Logs",
    ],
  },
  {
    title: "Transparent Delivery",
    icon: Handshake,
    desc: "We believe successful software projects require clear communication. Clients stay informed with regular updates, milestones, and demos.",
    benefits: [
      "Weekly Reviews",
      "Clear Milestones",
      "Sprint Demos",
      "Open Communication",
    ],
  },
  {
    title: "Long-Term Technical Partnership",
    icon: InfinityIcon,
    desc: "Launching software is only the beginning. We continue supporting, optimizing, and expanding products as businesses evolve.",
    benefits: [
      "Ongoing Support",
      "Infrastructure Scaling",
      "Feature Enhancements",
      "Tech Consulting",
    ],
  },
];

export const Homecontent7 = [
  { text: "Building", color: "" },
  { text: "Software", color: "text-[#9333ea]" },
  { text: "Products.", color: "text-[#9333ea]" },
  { text: "Engineering", color: "" },
  { text: "Digital", color: "" },
  { text: "Businesses.", color: "" },
];

export const ProductContent = [
  "Idea",
  "Strategy",
  "Design",
  "Development",
  "Launch",
  "Growth",
  "Continuous Innovation",
];

export const HomecontentProducts = [
  {
    name: "Viyan MedAssist",
    tagline: "Pharmacy Operations & ERP Software",
    problem:
      "Simplifies manual inventory tracking, speeds up invoice generation, and automates prescription compliance in retail pharmacy chains.",
    who: "Retail Pharmacies & Franchise Networks",
    status: "Production Ready",
    statusColor:
      "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    color: "#7B2FF7",
    gradient: "from-purple-500/10 to-indigo-500/10",
    icon: Code2,
    path: "/portfolio",
  },
  {
    name: "Viyan Billing",
    tagline: "Subscription & Invoice Management Platform",
    problem:
      "Automates invoice creation, simplifies recurring subscriptions, and streamlines local tax/GST compliance for high-velocity businesses.",
    who: "SaaS Startups, Agencies, and E-commerce Stores",
    status: "Active Beta",
    statusColor: "bg-blue-500/10 text-blue-600 border border-blue-500/20",
    color: "#3B82F6",
    gradient: "from-blue-500/10 to-cyan-500/10",
    icon: CreditCard,
    path: "/portfolio",
  },
  {
    name: "Viyan Inventory",
    tagline: "Smart Warehouse & Resource Planning",
    problem:
      "Eliminates stock discrepancies, automates purchase order generation, and tracks supply chain logistics in real-time.",
    who: "Wholesalers, Distributors, and Retail Brands",
    status: "Production Ready",
    statusColor:
      "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
    color: "#EC4899",
    gradient: "from-pink-500/10 to-indigo-500/10",
    icon: Package,
    path: "/portfolio",
  },
];

export const TechStacks = [
  {
    name: "Discovery",
    color: "#7B2FF7",
    icon: <Eye className="w-5 h-5" />,
    desc: "Understand goals, requirements, user needs, and scoping parameters.",
  },
  {
    name: "Design",
    color: "#9333EA",
    icon: <Layers className="w-5 h-5" />,
    desc: "Mockups, interactive visual flows, prototyping, and layout systems.",
  },
  {
    name: "Development",
    color: "#3B82F6",
    icon: <Code2 className="w-5 h-5" />,
    desc: "Compile clean database queries, build responsive pages, and set up routing.",
  },
  {
    name: "Testing",
    color: "#06B6D4",
    icon: <CheckCircle2 className="w-5 h-5" />,
    desc: "Deploy unit testing logic, automated UI tests, and load audits.",
  },
  {
    name: "Deployment",
    color: "#10B981",
    icon: <Cloud className="w-5 h-5" />,
    desc: "Spin up isolated Docker containers on AWS servers securely.",
  },
  {
    name: "Monitoring",
    color: "#F59E0B",
    icon: <LineChart className="w-5 h-5" />,
    desc: "Track error instances, memory logs, and sync status hooks.",
  },
];

export const TechStacks1 = [
  {
    name: "OpenAI",
    icon: <OpenAiIcon />,
    color: "#10A37F",
    badge: "GPT-4o / Embeddings",
    desc: "Contextual processing engines, custom fine-tunes.",
  },
  {
    name: "LangChain",
    icon: <LangChainIcon />,
    color: "#10A37F",
    badge: "LLM Orchestrator",
    desc: "Agentic toolchains, sequence maps, and memory variables.",
  },
  {
    name: "RAG Systems",
    icon: <Cpu className="w-8 h-8 text-pink-500" />,
    color: "#EC4899",
    badge: "Retrieval Augmented",
    desc: "Semantic context injection directly matching internal document vaults.",
  },
  {
    name: "Vector Databases",
    icon: <Database className="w-8 h-8 text-cyan-500" />,
    color: "#06B6D4",
    badge: "Qdrant / Pinecone",
    desc: "Fast cosine distance search on high-dimension coordinate embeddings.",
  },
  {
    name: "AI Automation",
    icon: <Sparkles className="w-8 h-8 text-amber-500" />,
    color: "#F59E0B",
    badge: "Workflow Pipelines",
    desc: "Autonomous cron scheduling agentic chains mapping to webhooks.",
  },
];

export const TechStacks2 = [
  {
    name: "Node.js",
    icon: <NodejsIcon />,
    color: "#339933",
    desc: "Non-blocking event loop framework compiling scalable web network servers.",
  },
  {
    name: "Python",
    icon: <PythonIcon />,
    color: "#3776AB",
    desc: "Flexible processing script engine handling calculations and data pipelines.",
  },
  {
    name: "Django",
    icon: <DjangoIcon />,
    color: "#092E20",
    desc: "MVT clean framework configured with an integrated SQL administration panel.",
  },
  {
    name: "FastAPI",
    icon: <FastApiIcon />,
    color: "#009688",
    desc: "Teal lighting-fast Python REST router generating auto OpenAPI docs.",
  },
  {
    name: "Express",
    icon: <ExpressIcon />,
    color: "#353535",
    desc: "Minimalist and flexible Node.js web application framework for robust APIs.",
  },
];

export const TechStacks3 = [
  {
    name: "React",
    icon: <ReactIcon />,
    angle: 0,
    color: "#61DAFB",
    desc: "Interactive Frontend Framework",
  },
  {
    name: "Node.js",
    icon: <NodejsIcon />,
    angle: (2 * Math.PI) / 11,
    color: "#339933",
    desc: "Scalable Event-Driven APIs",
  },
  {
    name: "Python",
    icon: <PythonIcon />,
    angle: (4 * Math.PI) / 11,
    color: "#3776AB",
    desc: "Data Operations & AI Scripting",
  },
  {
    name: "Django",
    icon: <DjangoIcon />,
    angle: (6 * Math.PI) / 11,
    color: "#092E20",
    desc: "Rapid Secure Backend Admin",
  },
  {
    name: "FastAPI",
    icon: <FastApiIcon />,
    angle: (8 * Math.PI) / 11,
    color: "#009688",
    desc: "Ultra-fast Modern Python APIs",
  },
  {
    name: "Flutter",
    icon: <FlutterIcon />,
    angle: (10 * Math.PI) / 11,
    color: "#02569B",
    desc: "Cross-platform Mobile UI Engine",
  },
  {
    name: "PostgreSQL",
    icon: <PostgreSQLIcon />,
    angle: (12 * Math.PI) / 11,
    color: "#336791",
    desc: "Robust Relational ACID Storage",
  },
  {
    name: "MongoDB",
    icon: <MongodbIcon />,
    angle: (14 * Math.PI) / 11,
    color: "#47A248",
    desc: "Flexible Dynamic Document Store",
  },
  {
    name: "Docker",
    icon: <DockerIcon />,
    angle: (16 * Math.PI) / 11,
    color: "#2496ED",
    desc: "Immutable Isolated Containers",
  },
  {
    name: "AWS",
    icon: <AwsIcon />,
    angle: (18 * Math.PI) / 11,
    color: "#FF9900",
    desc: "Resilient Global Cloud Hosting",
  },
  {
    name: "OpenAI",
    icon: <OpenAiIcon />,
    angle: (20 * Math.PI) / 11,
    color: "#10A37F",
    desc: "Advanced LLM Integration Hub",
  },
];

export const TechStacks4 = [
  {
    name: "Flutter",
    icon: <FlutterIcon />,
    color: "#02569B",
    label: "Dart Compiled Core",
    desc: "Fluid rendering engine delivering 120Hz interface redraws.",
  },
  {
    name: "React Native",
    icon: <ReactNativeIcon />,
    color: "#00D8FF",
    label: "Bridge Native Modules",
    desc: "Cross-platform execution leveraging existing React logic pipelines.",
  },
  {
    name: "Firebase",
    icon: <FirebaseIcon />,
    color: "#FFC229",
    label: "NoSQL DB / Cloud Functions",
    desc: "Real-time key-value database sync, secure serverless auth.",
  },
];

export const TechStacks5 = [
  {
    name: "React",
    icon: <ReactIcon />,
    color: "#61DAFB",
    bg: "bg-[#61DAFB]/5 border-[#61DAFB]/20",
    level: "Expertise: Principal",
    usage: "ViyanInfo ERP Platform, Client Portal UIs",
    desc: "High-performance SPA library utilizing component hierarchies, custom hook pipelines, and virtual state bindings.",
  },
  {
    name: "Next.js",
    icon: <NextjsIcon />,
    color: "#000000",
    bg: "bg-black/5 border-black/10",
    level: "Expertise: Architect",
    usage: "Public Landing Pages, SEO Blogs",
    desc: "Server-side rendering, static generation, React Server Components (RSC), and edge-routing file structures.",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    color: "#3178C6",
    bg: "bg-[#3178C6]/5 border-[#3178C6]/20",
    level: "Expertise: Strict Standard",
    usage: "All In-House Modules",
    desc: "Static type-safety audits, strict null checks, generic interface systems, and type declarations.",
  },
  {
    name: "Tailwind CSS",
    icon: <TailwindIcon />,
    color: "#06B6D4",
    bg: "bg-[#06B6D4]/5 border-[#06B6D4]/20",
    level: "Expertise: Expert Utility",
    usage: "Component Libraries, Design Tokens",
    desc: "CSS-first utility compiling, responsive grid columns, design token variables, and lightweight production bundles.",
  },
];

export const MobileStack = [
  {
    title: "Healthcare Apps",
    desc: "Telehealth portals, patient trackers, and prescription management tools with biometric locks.",
    tag: "ViyanHealth Sync",
    glowColor: "rgba(6, 182, 212, 0.08)",
  },
  {
    title: "Business Apps",
    desc: "ERP companion applications, secure reporting panels, and visual field-data trackers.",
    tag: "Enterprise Portal",
    glowColor: "rgba(123, 47, 247, 0.08)",
  },
  {
    title: "Customer Apps",
    desc: "Client-facing portals, subscription platforms, and automated chat messaging clients.",
    tag: "SaaS Mobile Hub",
    glowColor: "rgba(236, 72, 153, 0.08)",
  },
];

export const MobileStack1 = [
  {
    char: "✦",
    x: "8%",
    y: "15%",
    size: 20,
    delay: 0,
    color: "rgba(123,47,247,0.12)",
  },
  {
    char: "○",
    x: "85%",
    y: "20%",
    size: 28,
    delay: 1.2,
    color: "rgba(6,182,212,0.10)",
  },
  {
    char: "◇",
    x: "12%",
    y: "75%",
    size: 22,
    delay: 0.6,
    color: "rgba(236,72,153,0.10)",
  },
  {
    char: "△",
    x: "90%",
    y: "70%",
    size: 18,
    delay: 1.8,
    color: "rgba(6,182,212,0.08)",
  },
  {
    char: "✦",
    x: "50%",
    y: "10%",
    size: 14,
    delay: 0.3,
    color: "rgba(123,47,247,0.08)",
  },
  {
    char: "○",
    x: "75%",
    y: "85%",
    size: 16,
    delay: 2.2,
    color: "rgba(236,72,153,0.07)",
  },
  {
    char: "◇",
    x: "25%",
    y: "90%",
    size: 24,
    delay: 1.5,
    color: "rgba(123,47,247,0.09)",
  },
  {
    char: "△",
    x: "60%",
    y: "5%",
    size: 20,
    delay: 0.9,
    color: "rgba(6,182,212,0.06)",
  },
];

export const MobileStack2 = [
  {
    title: "Fast Performance",
    desc: "High frame-rate render loops, hardware accelerations, and optimized caching engines that keep your app running at 60fps.",
    accentColor: "#06B6D4",
    gradientFrom: "#06B6D4",
    gradientTo: "#3B82F6",
    tag: "SPEED",
    icon: Zap,
    phoneBg: "from-cyan-900 to-slate-900",
    phoneApp: "Performance Monitor",
    phoneMetric: "60",
    phoneUnit: "FPS",
    phoneStatus: "Stable",
  },
  {
    title: "Secure Architecture",
    desc: "Native biometric locks (FaceID/TouchID), encrypted local keychains, and secure SSL API hooks for enterprise-grade protection.",
    accentColor: "#7B2FF7",
    gradientFrom: "#7B2FF7",
    gradientTo: "#EC4899",
    tag: "SECURITY",
    icon: ShieldAlert,
    phoneBg: "from-purple-900 to-slate-900",
    phoneApp: "Security Shield",
    phoneMetric: "256",
    phoneUnit: "BIT",
    phoneStatus: "Encrypted",
  },
  {
    title: "Scalable Infrastructure",
    desc: "Offline-first databases (SQLite), automatic sync queues, and seamless scaling integrations that grow with your user base.",
    accentColor: "#EC4899",
    gradientFrom: "#EC4899",
    gradientTo: "#F59E0B",
    tag: "SCALE",
    icon: Database,
    phoneBg: "from-pink-900 to-slate-900",
    phoneApp: "Data Sync Engine",
    phoneMetric: "99.9",
    phoneUnit: "%",
    phoneStatus: "Synced",
  },
];

export const MobileStack3 = [
  { n: "React Native", c: "#61DAFB" },
  { n: "Expo", c: "#000000" },
  { n: "TypeScript", c: "#3178C6" },
  { n: "Firebase", c: "#FFA000" },
  { n: "Redux Toolkit", c: "#764ABC" },
  { n: "Stripe", c: "#635BFF" },
  { n: "Fastlane", c: "#E74430" },
  { n: "Jest", c: "#C21325" },
];

export const MobileStack4 = [
  { Icon: Bell, label: "Push notif", color: "#7B2FF7", x: -55, y: 60, d: 0 },
  { Icon: Star, label: "4.9 rating", color: "#F59E0B", x: 310, y: 40, d: 1 },
  { Icon: MapPin, label: "Live GPS", color: "#10B981", x: -65, y: 190, d: 0.7 },
  {
    Icon: CreditCard,
    label: "Payments",
    color: "#3B82F6",
    x: 305,
    y: 210,
    d: 1.4,
  },
  { Icon: Heart, label: "Wishlist", color: "#EC4899", x: 120, y: -25, d: 2 },
  {
    Icon: Wifi,
    label: "Offline sync",
    color: "#06B6D4",
    x: 10,
    y: 320,
    d: 1.8,
  },
];

export const Intern = [
  {
    step: "01",
    title: "Apply",
    desc: "Submit your resume and select your preferred training track.",
    duration: "1-2 Days",
    requirements: "Resume submission & track selection",
    outcome: "Application review & initial tracking link",
    color: "#7B2FF7", // Purple
    shadowColor: "rgba(123, 47, 247, 0.15)",
    bgLight: "bg-purple-50/50",
    borderGlow: "group-hover:border-[#7B2FF7]/40",
    icon: <ClipboardList className="w-6 h-6 text-[#7B2FF7]" />,
  },
  {
    step: "02",
    title: "Interview",
    desc: "Complete a basic logic and coding evaluation review.",
    duration: "30-45 Mins",
    requirements: "Core programming & technical orientation",
    outcome: "Direct feedback & onboarding verification",
    color: "#3B82F6", // Blue
    shadowColor: "rgba(59, 130, 246, 0.15)",
    bgLight: "bg-blue-50/50",
    borderGlow: "group-hover:border-[#3B82F6]/40",
    icon: <FileQuestion className="w-6 h-6 text-[#3B82F6]" />,
  },
  {
    step: "03",
    title: "Training",
    desc: "Spend 2-4 weeks building foundational stack proficiencies.",
    duration: "2-4 Weeks",
    requirements: "Self-paced modules & weekly sandbox tasks",
    outcome: "Foundational stack proficiency certified",
    color: "#EC4899", // Pink
    shadowColor: "rgba(236, 72, 153, 0.15)",
    bgLight: "bg-pink-50/50",
    borderGlow: "group-hover:border-[#EC4899]/40",
    icon: <BookOpen className="w-6 h-6 text-[#EC4899]" />,
  },
  {
    step: "04",
    title: "Projects",
    desc: "Collaborate in sprints to construct production modules.",
    duration: "4-8 Weeks",
    requirements: "Team sprints, Git reviews & deployment setups",
    outcome: "Live features deployed & portfolio contributions",
    color: "#F97316", // Orange
    shadowColor: "rgba(249, 115, 22, 0.15)",
    bgLight: "bg-orange-50/50",
    borderGlow: "group-hover:border-[#F97316]/40",
    icon: <Code className="w-6 h-6 text-[#F97316]" />,
  },
  {
    step: "05",
    title: "Certification",
    desc: "Receive your verified certificate and feedback summary.",
    duration: "1 Day",
    requirements: "Final showcase demo & architect code review",
    outcome: "Verified company certificate & referral channels",
    color: "#10B981", // Green
    shadowColor: "rgba(16, 185, 129, 0.15)",
    bgLight: "bg-emerald-50/50",
    borderGlow: "group-hover:border-[#10B981]/40",
    icon: <Award className="w-6 h-6 text-[#10B981]" />,
  },
];

export const Intern1 = [
  {
    title: "Python Development",
    badgeText: "Python",
    icon: FaPython,
    glow: "#22C55E",
    glowRgba: "rgba(34,197,94,.25)",
    badgeBg: "rgba(34,197,94,.12)",
    badgeColor: "#16A34A",
    gradient: "linear-gradient(180deg, #F2FFF8 0%, #E8FFF2 100%)",
    backGradient: "linear-gradient(135deg, #E8FFF2 0%, #FFFFFF 100%)",
    skills: [
      "Problem Solving",
      "REST API Development",
      "Database Design",
      "Backend Architecture",
      "Cloud Deployment",
    ],
  },
  {
    title: "Full Stack Development",
    badgeText: "Full Stack",
    icon: TbWorldCode,
    glow: "#F97316",
    glowRgba: "rgba(249,115,22,.25)",
    badgeBg: "rgba(249,115,22,.12)",
    badgeColor: "#EA580C",
    gradient: "linear-gradient(180deg, #FFF8F3 0%, #FFF2EA 100%)",
    backGradient: "linear-gradient(135deg, #FFF2EA 0%, #FFFFFF 100%)",
    skills: [
      "Responsive UI",
      "Backend APIs",
      "Authentication",
      "Performance Optimization",
      "Git Workflow",
    ],
  },
  {
    title: "AI & Machine Learning",
    badgeText: "AI",
    icon: BrainCircuit,
    glow: "#8B5CF6",
    glowRgba: "rgba(124,58,237,.25)",
    badgeBg: "rgba(124,58,237,.12)",
    badgeColor: "#7C3AED",
    gradient: "linear-gradient(180deg, #FCF8FF 0%, #F3E8FF 100%)",
    backGradient: "linear-gradient(135deg, #F3E8FF 0%, #FFFFFF 100%)",
    skills: [
      "Prompt Engineering",
      "LLM Integration",
      "AI Automation",
      "RAG Development",
      "Model Deployment",
    ],
  },
  {
    title: "Data Science",
    badgeText: "Data",
    icon: Database,
    glow: "#06B6D4",
    glowRgba: "rgba(6,182,212,.25)",
    badgeBg: "rgba(6,182,212,.12)",
    badgeColor: "#0891B2",
    gradient: "linear-gradient(180deg, #F3FCFF 0%, #E8F8FF 100%)",
    backGradient: "linear-gradient(135deg, #E8F8FF 0%, #FFFFFF 100%)",
    skills: [
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
      "Statistical Modeling",
      "Business Intelligence",
    ],
  },
  {
    title: "UI/UX Design",
    badgeText: "UI/UX",
    icon: Palette,
    glow: "#F59E0B",
    glowRgba: "rgba(245,158,11,.25)",
    badgeBg: "rgba(245,158,11,.12)",
    badgeColor: "#D97706",
    gradient: "linear-gradient(180deg, #FFFDF4 0%, #FFF7E6 100%)",
    backGradient: "linear-gradient(135deg, #FFF7E6 0%, #FFFFFF 100%)",
    skills: [
      "User Research",
      "Wireframing",
      "Interactive Prototyping",
      "Design Systems",
      "Usability Testing",
    ],
  },
];
