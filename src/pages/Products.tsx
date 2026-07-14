import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle,
  Layers,
  Users,
  Shield,
  Cloud,
  RefreshCw,
  Lock,
  ChevronDown,
} from "lucide-react";
import { LiquidFooter } from "../components/LiquidFooter";
import workImg from "../assets/Workimg.webp";
import erpImg from "../assets/erp_dashboard.png";
import medassistImg from "../assets/medassist_dashboard.png";
import employmentImg from "../assets/employment_dashboard.png";
import crmImg from "../assets/crm_dashboard.png";
import { onHoverBurst } from "../utils/particleBurst";

const aiDashImg =
  "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=1400&h=800&fit=crop&auto=format&q=90";

export default function Products() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const featuredProducts = [
    {
      id: "medassist",
      name: "Viyan MedAssist",
      category: "Healthcare Technology",
      status: "Live",
      statusColor:
        "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20",
      image: medassistImg,
      description:
        "Viyan MedAssist is an enterprise pharmacy management platform designed for pharmacies, hospitals, distributors, and healthcare organizations. It streamlines inventory management, billing, procurement, supplier operations, prescriptions, expiry tracking, compliance, reporting, and business analytics through one centralized system.",
      idealFor: [
        "Retail Pharmacies",
        "Hospital Pharmacies",
        "Medical Distributors",
        "Healthcare Chains",
      ],
      features: [
        "Inventory Management",
        "Batch Tracking",
        "Expiry Intelligence",
        "GST Billing",
        "Supplier Management",
        "Purchase Orders",
        "Purchase Returns",
        "Sales Reports",
        "Analytics Dashboard",
        "Role-Based Access",
        "Medicine Barcode Management",
        "Cloud Backup",
        "Audit Logs",
        "Notifications",
      ],
      color: "#06b6d4",
      accentBg: "rgba(6, 182, 212, 0.08)",
      hasDemo: true,
    },
    {
      id: "ems",
      name: "Viyan Employment Management System",
      category: "Human Resource Platform",
      status: "Coming Soon",
      statusColor: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
      image: employmentImg,
      description:
        "A comprehensive workforce management platform that enables organizations to manage employees, attendance, payroll, departments, leave, recruitment, performance, onboarding, and organizational operations from a single dashboard.",
      idealFor: [
        "Companies",
        "Startups",
        "Agencies",
        "Educational Institutions",
        "Healthcare Organizations",
      ],
      features: [
        "Employee Directory",
        "Attendance",
        "Payroll",
        "Leave Management",
        "Recruitment",
        "Performance Reviews",
        "Departments",
        "Shift Management",
        "Reports",
        "Organization Management",
      ],
      color: "#10b981",
      accentBg: "rgba(16, 185, 129, 0.08)",
      hasDemo: false,
    },
    {
      id: "crm",
      name: "Viyan CRM",
      category: "Sales & Customer Management",
      status: "Coming Soon",
      statusColor: "bg-amber-500/10 text-amber-600 border border-amber-500/20",
      image: crmImg,
      description:
        "A customer relationship platform that helps businesses manage leads, customer communication, sales pipelines, quotations, follow-ups, and business growth.",
      idealFor: [
        "Sales Teams",
        "Consultancies",
        "B2B Agencies",
        "Real Estate Developers",
      ],
      features: [
        "Lead Management",
        "Sales Pipeline",
        "Customer Database",
        "Follow-ups",
        "Email Tracking",
        "Task Management",
        "Reports",
        "Automation",
      ],
      color: "#8b5cf6",
      accentBg: "rgba(139, 92, 246, 0.08)",
      hasDemo: false,
    },
    {
      id: "erp",
      name: "Viyan ERP",
      category: "Enterprise Platform",
      status: "In Development",
      statusColor: "bg-blue-500/10 text-blue-600 border border-blue-500/20",
      image: erpImg,
      description:
        "An enterprise resource planning platform that connects finance, HR, procurement, inventory, operations, customer management, analytics, and reporting into one integrated business ecosystem.",
      idealFor: [
        "Manufacturing Plants",
        "Logistics Providers",
        "Large-scale Wholesalers",
        "Multi-branch Businesses",
      ],
      features: [
        "Finance",
        "Inventory",
        "HR",
        "CRM",
        "Purchase",
        "Sales",
        "Analytics",
        "Reporting",
        "User Management",
        "Audit Logs",
      ],
      color: "#7c3aed",
      accentBg: "rgba(124, 58, 237, 0.08)",
      hasDemo: false,
    },
    {
      id: "ai-bi",
      name: "AI Business Intelligence Platform",
      category: "Artificial Intelligence",
      status: "Research",
      statusColor:
        "bg-purple-500/10 text-purple-600 border border-purple-500/20",
      image: aiDashImg,
      description:
        "An AI-powered analytics platform that transforms business data into actionable insights through predictive analytics, intelligent dashboards, forecasting, and conversational AI.",
      idealFor: [
        "Executive leadership",
        "Data analysts",
        "Operations managers",
        "Financial controllers",
      ],
      features: [
        "AI Reports",
        "Predictive Analytics",
        "Business Dashboards",
        "Forecasting",
        "AI Assistant",
        "Natural Language Queries",
        "Executive Insights",
      ],
      color: "#ec4899",
      accentBg: "rgba(236, 72, 153, 0.08)",
      hasDemo: false,
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Enterprise Ready",
      desc: "Secure, scalable software designed for organizations of all sizes.",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      desc: "Accessible anywhere with reliable cloud infrastructure.",
    },
    {
      icon: RefreshCw,
      title: "Regular Updates",
      desc: "Continuous improvements, security updates, and feature releases.",
    },
    {
      icon: Lock,
      title: "Secure by Design",
      desc: "Encryption, authentication, role-based permissions, and audit trails.",
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      desc: "Built to support thousands of users and growing businesses.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      desc: "Product specialists available to assist with onboarding and ongoing support.",
    },
  ];

  const industries = [
    "Healthcare",
    "Retail",
    "Wholesale Distribution",
    "Manufacturing",
    "Education",
    "Hospitality",
    "Professional Services",
    "Corporate Enterprises",
    "Government",
    "Logistics",
    "E-commerce",
    "Technology",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Research",
      desc: "We study industry workflows and identify operational challenges.",
    },
    {
      step: "02",
      title: "Design",
      desc: "UX research, product strategy, and interface design.",
    },
    {
      step: "03",
      title: "Engineering",
      desc: "Modern architecture built using scalable technologies.",
    },
    {
      step: "04",
      title: "Testing",
      desc: "Performance, usability, and security validation.",
    },
    {
      step: "05",
      title: "Deployment",
      desc: "Cloud infrastructure with monitoring and automated updates.",
    },
    {
      step: "06",
      title: "Continuous Improvement",
      desc: "Feature releases based on customer feedback and product analytics.",
    },
  ];

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Flutter"],
    backend: ["Node.js", "Fastify", "Java", "Python"],
    database: ["PostgreSQL", "MongoDB", "Redis"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    ai: ["OpenAI", "LangChain", "RAG", "Machine Learning", "Automation"],
  };

  const faqData = [
    {
      q: "Can your products be customized?",
      a: "Yes. Most ViyanInfo products support organization-specific customization and module extensions.",
    },
    {
      q: "Are your products cloud-based?",
      a: "Yes. All products are designed for secure cloud deployment with optional on-premise implementations for enterprise customers.",
    },
    {
      q: "Do you provide implementation support?",
      a: "Yes. We provide onboarding, migration, training, deployment, and ongoing technical support.",
    },
    {
      q: "Can multiple branches be managed?",
      a: "Yes. Most products support multi-branch and multi-organization management.",
    },
    {
      q: "Do you offer API integrations?",
      a: "Yes. Products can integrate with third-party payment gateways, ERP systems, accounting software, SMS providers, email services, and external APIs.",
    },
  ];

  return (
    <div className="bg-[#FAF7FF] min-h-screen text-[#0F172A] overflow-hidden font-body">
      {/* ── HERO SECTION ── */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
              ViyanInfo Products
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6">
              Software Products Built for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #7c3aed, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Modern Businesses
              </span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              At ViyanInfo, we don't just build software for clients—we design,
              develop, and continuously improve our own digital products. Our
              platforms help businesses automate operations, improve
              productivity, reduce manual work, and accelerate growth across
              healthcare, retail, enterprise, HR, education, and AI. Every
              product is engineered with scalability, security, and long-term
              reliability in mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#featured-products">
                <button
                  onMouseEnter={onHoverBurst}
                  className="px-8 py-4 bg-[#7C3AED] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#6D28D9] transition-all cursor-pointer w-full sm:w-auto"
                >
                  Explore Products
                </button>
              </a>
              <Link to="/contact">
                <button
                  onMouseEnter={onHoverBurst}
                  className="px-8 py-4 bg-white border border-[#E9D5FF] text-[#7C3AED] font-bold text-sm rounded-xl hover:bg-slate-50 transition-all cursor-pointer w-full sm:w-auto"
                >
                  Request Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCT PHILOSOPHY ── */}
      <section className="relative py-20 bg-white/50 border-y border-[#E9D5FF]/30">
        <div className="container max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 text-center lg:text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7B2FF7] mb-3 block">
                Why Our Products
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight">
                Designed to Solve Real Business Problems
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                Every ViyanInfo product starts with a real operational
                challenge—not an idea looking for a customer. We collaborate
                with industry experts, understand everyday workflows, identify
                inefficiencies, and build software that eliminates repetitive
                tasks while improving visibility, speed, and decision-making.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Instead of creating generic software, we build purpose-driven
                platforms that organizations can depend on every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section id="featured-products" className="py-24 relative">
        <div className="container max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Suite
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
              Featured Platforms
            </h2>
          </div>

          <div className="space-y-24">
            {featuredProducts.map((prod, idx) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Left: Product Image / Mockup */}
                <div
                  className={`lg:col-span-6 relative rounded-3xl overflow-hidden border border-slate-150 shadow-xl group order-1 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: prod.color }}
                  ></div>
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Right: Product Info */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center order-2 ${idx % 2 === 1 ? "lg:order-1 text-left" : "text-left"}`}
                >
                  <div className="flex gap-3 items-center mb-4">
                    <span className="text-xs font-semibold text-slate-400 font-mono tracking-wider uppercase">
                      {prod.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold font-mono tracking-widest uppercase px-2 py-0.5 rounded-full ${prod.statusColor}`}
                    >
                      {prod.status}
                    </span>
                  </div>

                  <h3 className="text-3xl font-display font-bold text-[#0F172A] mb-4">
                    {prod.name}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  {/* Ideal For */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold text-[#7B2FF7] uppercase tracking-wider mb-2">
                      Ideal For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prod.idealFor.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features Wrap */}
                  <div className="mb-8">
                    <h4 className="text-[11px] font-bold text-[#7B2FF7] uppercase tracking-wider mb-3">
                      Key Modules & Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {prod.features.slice(0, 8).map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-xs text-slate-600"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                      {prod.features.length > 8 && (
                        <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                          <span>
                            + {prod.features.length - 8} more features
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div>
                    {prod.hasDemo ? (
                      <Link to="/contact">
                        <button
                          onMouseEnter={onHoverBurst}
                          className="px-6 py-3 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-1"
                          style={{ backgroundColor: prod.color }}
                        >
                          Explore MedAssist <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </Link>
                    ) : (
                      <button
                        className="px-6 py-3 bg-slate-100 text-slate-400 font-bold text-xs rounded-xl border border-slate-200 cursor-not-allowed"
                        disabled
                      >
                        {prod.status === "Coming Soon"
                          ? "Coming Soon"
                          : prod.status === "In Development"
                            ? "In Development"
                            : "Research Project"}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BUSINESSES CHOOSE VIYAN PRODUCTS ── */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
              Built for Performance. Designed for Growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#FAF7FF] border border-slate-100 hover:border-[#7B2FF7]/20 transition-all duration-300 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#7B2FF7] mb-6">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ── */}
      <section className="py-20 bg-[#FAF7FF] border-y border-[#E9D5FF]/30">
        <div className="container max-w-[1280px] mx-auto px-6 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#7B2FF7] mb-4 block">
            Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#0F172A] mb-12 tracking-tight">
            Industries We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-6 py-3 rounded-2xl bg-white border border-[#E9D5FF]/60 shadow-2xs font-display font-bold text-[#0F172A] text-sm hover:border-[#7B2FF7] hover:text-[#7B2FF7] transition-all cursor-pointer"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT DEVELOPMENT PROCESS ── */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight">
              Every Product is Built with Purpose
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FAF7FF] border border-slate-100 hover:shadow-md transition-all text-left"
              >
                <span className="text-4xl font-display font-black bg-gradient-to-r from-[#7B2FF7] to-indigo-400 bg-clip-text text-transparent block mb-4">
                  {step.step}
                </span>
                <h3 className="text-lg font-display font-bold text-[#0F172A] mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY BEHIND OUR PRODUCTS ── */}
      <section className="py-24 bg-[#FAF7FF] border-y border-[#E9D5FF]/30">
        <div className="container max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Modern Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Technology Behind Our Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {Object.entries(techStack).map(([category, techs]) => (
              <div
                key={category}
                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-2xs text-left"
              >
                <h3 className="text-[11px] font-bold text-[#7B2FF7] uppercase tracking-wider mb-4">
                  {category}
                </h3>
                <div className="space-y-2">
                  {techs.map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-[#0F172A]"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT ROADMAP ── */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-[900px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Product Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Product Roadmap
            </h2>
          </div>

          <div className="space-y-12">
            {/* Current Products */}
            <div className="relative pl-8 border-l-2 border-emerald-500/30">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-white"></div>
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                Current Products{" "}
                <span className="text-xs text-emerald-500 font-mono">
                  (Live)
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 font-display font-bold text-sm">
                  MedAssist
                </span>
              </div>
            </div>

            {/* Launching Soon */}
            <div className="relative pl-8 border-l-2 border-amber-500/30">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-amber-500 border-4 border-white"></div>
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                Launching Soon{" "}
                <span className="text-xs text-amber-500 font-mono">
                  (Near Release)
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Employment Management System",
                  "CRM Platform",
                  "ERP Platform",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 font-display font-bold text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Products */}
            <div className="relative pl-8 border-l-2 border-purple-500/30">
              <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-purple-500 border-4 border-white"></div>
              <h3 className="text-xl font-display font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                Future Products{" "}
                <span className="text-xs text-purple-500 font-mono">
                  (Pipeline)
                </span>
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Accounting Software",
                  "Hospital ERP",
                  "School ERP",
                  "Inventory Platform",
                  "Procurement Platform",
                  "Customer Support Platform",
                  "AI Automation Suite",
                  "Business Intelligence Platform",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 border border-purple-100 font-display font-semibold text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-24 bg-[#FAF7FF] border-t border-[#E9D5FF]/30">
        <div className="container max-w-[800px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Support & Details
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-100 bg-white shadow-3xs overflow-hidden transition-all duration-300 text-left"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex justify-between items-center font-display font-bold text-[#0F172A] text-[15px] sm:text-base hover:text-[#7B2FF7] transition-all cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeFaq === idx ? "rotate-180 text-[#7B2FF7]" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FOOTER ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "900px",
          paddingTop: "120px",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={workImg}
            alt="Work Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 10, 25, 0.45), rgba(8, 8, 18, 0.85))",
          }}
        />

        {/* CTA Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center pb-16 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-6">
              Let's Partner Up
            </span>
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to Transform Your Business with Viyan Products?
            </span>
            <p className="text-base sm:text-lg text-white/90 max-w-xl mb-10 leading-relaxed drop-shadow-md">
              Whether you're a startup, a growing company, or an enterprise, our
              software products are designed to simplify operations, improve
              efficiency, and support long-term growth. Let's find the right
              solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  onMouseEnter={onHoverBurst}
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#7B2FF7] font-bold text-sm rounded-xl shadow-lg hover:bg-slate-50 transition-all cursor-pointer"
                >
                  Book a Product Demo
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button
                  onMouseEnter={onHoverBurst}
                  className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-all cursor-pointer"
                >
                  Talk to Our Team
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <LiquidFooter />
      </section>
    </div>
  );
}
