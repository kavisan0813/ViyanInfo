import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  MonitorSmartphone, 
  Server, 
  Database, 
  Cloud, 
  BrainCircuit 
} from "lucide-react";

const techCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Responsive, accessible, and highly interactive user interfaces.",
    icon: <MonitorSmartphone size={24} />,
    color: "#3b82f6",
    logos: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "GSAP"]
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable APIs and robust microservices architecture.",
    icon: <Server size={24} />,
    color: "#10b981",
    logos: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs"]
  },
  {
    id: "database",
    title: "Database",
    description: "High-performance data storage and secure information management.",
    icon: <Database size={24} />,
    color: "#f59e0b",
    logos: ["MongoDB", "PostgreSQL", "Redis", "MySQL", "Prisma", "Mongoose"]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    description: "Reliable infrastructure and continuous delivery pipelines.",
    icon: <Cloud size={24} />,
    color: "#06b6d4",
    logos: ["AWS", "Docker", "Vercel", "GitHub Actions", "Nginx", "Linux"]
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Predictive analytics, LLMs, and intelligent automation.",
    icon: <BrainCircuit size={24} />,
    color: "#ec4899",
    logos: ["OpenAI", "LangChain", "Pinecone", "HuggingFace", "TensorFlow", "Vector DB"]
  }
];

export function WorkTechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="work-tech" ref={ref}>
      <div className="work-tech__container">
        <div className="work-tech__header">
          <motion.h2
            className="work-tech__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            Technologies We{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Trust
            </span>
          </motion.h2>
          <motion.p
            className="work-tech__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            We leverage modern, enterprise-grade technologies to build secure, scalable, and fast digital products.
          </motion.p>
        </div>

        <div className="work-tech__grid">
          {techCategories.map((tech, i) => (
            <motion.div
              key={tech.id}
              className="work-tech-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.2, ease: "easeOut" }}
            >
              <div 
                className="work-tech-card__icon"
                style={{ background: `linear-gradient(135deg, ${tech.color}, ${tech.color}cc)` }}
              >
                {tech.icon}
              </div>
              <h3 className="work-tech-card__title">{tech.title}</h3>
              <p className="work-tech-card__desc">{tech.description}</p>
              <div className="work-tech-card__logos">
                {tech.logos.map((logo) => (
                  <span key={logo} className="work-tech-card__logo">{logo}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
