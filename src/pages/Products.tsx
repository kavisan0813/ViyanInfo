import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  TrendingUp,
  Sparkles,
  CreditCard,
  Package,
  Activity,
  Briefcase,
  X,
} from "lucide-react";
import { LiquidFooter } from "../components/LiquidFooter";
import { SectionDivider } from "../components/SectionDivider";
import productImg from "../assets/product_img.webp";
import "../styles/BackgroundEffects.css";
import "../styles/ProductsPage.css";
import {
  ProductContent,
  ProductContent1,
  ProductContent2,
  ProductContent3,
  ProductContent4,
} from "../components/ArrayContent";
import isometricOfficeImg from "../assets/hero_isometric_office.png";

function BackgroundEffects() {
  return (
    <div className="bg-effects-wrapper" aria-hidden="true">
      {/* Soft animated grid */}
      <div className="bg-effects-grid"></div>
    </div>
  );
}
// ─────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────
function ProductsHero() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="products-hero products-container relative z-10">
      <div className="hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-[#E9D5FF] shadow-xs w-max">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
            <span className="text-[12px] font-body font-semibold text-[#7C3AED] uppercase tracking-wider">
              ViyanInfo Products
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] tracking-tight mb-5">
            <span className="text-white" style={{ color: "#000000ff" }}>
              Enterprise Software
            </span>{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #9D5CFF, #7B2FF7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Built for Modern Businesses
            </span>
          </h1>
          <p className="body-copy text-[#6B7280] max-w-readable mb-10 text-[15px] leading-relaxed">
            Discover scalable software solutions designed to streamline
            operations, improve productivity and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-4 rounded-2xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
              onClick={() =>
                document
                  .getElementById("featured-products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Products{" "}
              <span className="text-lg leading-none font-normal">→</span>
            </button>
            <Link
              to="/contact"
              className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-4 rounded-2xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer"
            >
              Book Demo
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual relative flex items-center justify-center min-h-[550px] lg:min-h-[650px] w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y1 }}
        >
          {/* Subtle Glowing Background Mesh */}
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-[#C084FC]/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>

          {/* Connected SVG Network Lines in Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="line-grad-1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient
                id="line-grad-2"
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#818CF8" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {/* SVG Connecting Lines to the floating cards */}
            <motion.path
              d="M 250 250 L 80 120"
              stroke="url(#line-grad-1)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
            <motion.path
              d="M 350 250 L 520 140"
              stroke="url(#line-grad-2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
            <motion.path
              d="M 200 350 L 90 420"
              stroke="url(#line-grad-2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
            />
            <motion.path
              d="M 380 350 L 510 440"
              stroke="url(#line-grad-1)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            />
            <motion.path
              d="M 300 200 L 300 60"
              stroke="url(#line-grad-1)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            />
            <motion.path
              d="M 300 400 L 300 520"
              stroke="url(#line-grad-2)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              animate={{ strokeDashoffset: [0, 20] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </svg>

          {/* Main Hero Office Image with Mac-like styling */}
          <div className="relative z-10 w-[80%] max-w-[480px] aspect-[4/3] rounded-3xl bg-white/70 backdrop-blur-md p-3 border border-[#E9D5FF]/40 shadow-[0_25px_60px_-15px_rgba(124,58,237,0.12)] transform hover:scale-[1.01] transition-transform duration-500">
            <div className="w-full h-full overflow-hidden rounded-2xl border border-[#E9D5FF]/30 relative group">
              <img
                src={isometricOfficeImg}
                alt="Isometric Enterprise Office"
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating SaaS Dashboards */}

          {/* 1. CRM Dashboard Card */}
          <motion.div
            className="absolute z-20 top-[10%] left-[2%] bg-white/95 backdrop-blur-md border border-[#E9D5FF]/80 p-3.5 rounded-2xl shadow-[0_12px_30px_rgba(124,58,237,0.08)] flex flex-col gap-2.5 w-[160px] sm:w-[190px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="p-1 rounded-md bg-[#F5F0FF] text-[#7C3AED]">
                  <Activity size={13} />
                </span>
                <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                  CRM Active
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                Latest Deal
              </p>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-[12px] font-bold text-[#1F1430]">
                  Acme Corp
                </p>
                <span className="text-[10px] bg-[#EEF2FF] text-[#4F46E5] px-1.5 py-0.5 rounded-md font-medium">
                  $12.5k
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2. ERP Operations Card */}
          <motion.div
            className="absolute z-20 top-[15%] right-[2%] bg-white/95 backdrop-blur-md border border-[#E9D5FF]/80 p-3.5 rounded-2xl shadow-[0_12px_30px_rgba(124,58,237,0.08)] flex flex-col gap-2 w-[150px] sm:w-[180px]"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 7,
              delay: 0.5,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5">
              <span className="p-1 rounded-md bg-[#EEF2FF] text-[#3B82F6]">
                <Briefcase size={13} />
              </span>
              <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                ERP Core
              </span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[11px] text-gray-600">
                <span>Supply Chain</span>
                <span className="text-[#10B981] font-semibold">98.4%</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] h-full rounded-full"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
          </motion.div>

          {/* 3. Analytics Card */}
          <motion.div
            className="absolute z-20 top-[-2%] left-[30%] bg-white/95 backdrop-blur-md border border-[#E9D5FF]/80 p-3.5 rounded-2xl shadow-[0_12px_30px_rgba(124,58,237,0.08)] flex items-center gap-3 w-[160px]"
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              delay: 1,
              ease: "easeInOut",
            }}
          >
            <span className="p-2 rounded-xl bg-[#F0FDF4] text-[#10B981]">
              <TrendingUp size={16} />
            </span>
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase">
                Analytics
              </p>
              <p className="text-[13px] font-bold text-[#1F1430]">
                +24.8%{" "}
                <span className="text-[10px] text-gray-400 font-normal">
                  ROI
                </span>
              </p>
            </div>
          </motion.div>

          {/* 4. Inventory Alert Card */}
          <motion.div
            className="absolute z-20 bottom-[18%] left-[-5%] bg-white/95 backdrop-blur-md border border-[#E9D5FF]/80 p-3.5 rounded-2xl shadow-[0_12px_30px_rgba(124,58,237,0.08)] flex flex-col gap-2 w-[160px]"
            animate={{ y: [0, 12, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6.5,
              delay: 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="p-1 rounded-md bg-[#FEF3C7] text-[#D97706]">
                  <Package size={13} />
                </span>
                <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider">
                  Inventory
                </span>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#1F1430]">
                Smart Tracking
              </p>
              <p className="text-[10px] text-gray-500 mt-0.5">
                Automated stock sync
              </p>
            </div>
          </motion.div>

          {/* 5. Billing / Invoice Card */}
          <motion.div
            className="absolute z-20 bottom-[15%] right-[-5%] bg-white/95 backdrop-blur-md border border-[#E9D5FF]/80 p-3.5 rounded-2xl shadow-[0_12px_30px_rgba(124,58,237,0.08)] flex items-center gap-3 w-[180px]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5.5,
              delay: 0.7,
              ease: "easeInOut",
            }}
          >
            <span className="p-2.5 rounded-xl bg-[#F5F0FF] text-[#7C3AED]">
              <CreditCard size={15} />
            </span>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-400 font-semibold uppercase">
                  Billing
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              </div>
              <p className="text-[13px] font-bold text-[#1F1430]">
                $4,850.00{" "}
                <span className="text-[10px] text-gray-400 font-normal">
                  Paid
                </span>
              </p>
            </div>
          </motion.div>

          {/* 6. AI Engine Floating Action */}
          <motion.div
            className="absolute z-20 bottom-[3%] left-[25%] bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] border border-[#C084FC]/30 text-white p-3 rounded-2xl shadow-[0_15px_35px_rgba(124,58,237,0.25)] flex items-center gap-2.5 w-[200px]"
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5.8,
              delay: 0.4,
              ease: "easeInOut",
            }}
          >
            <span className="p-1.5 rounded-lg bg-white/20 text-[#F3E8FF]">
              <Sparkles size={14} className="animate-pulse" />
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-[9px] text-[#E9D5FF] font-semibold uppercase tracking-wider">
                AI Operations
              </p>
              <p className="text-[11px] font-bold truncate">
                Enterprise insights calculated
              </p>
            </div>
            <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-md font-medium text-[#F3E8FF]">
              Active
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ProductRow({
  product,
  index,
}: {
  product: (typeof ProductContent2)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      className={`product-row glass-panel ${isReverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="product-content">
        <div className="product-badge">{product.subtitle}</div>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-desc">{product.desc}</p>
        <ul className="product-features">
          {product.features.map((feat, i) => (
            <li key={i}>
              <div className="feature-check">
                <Check size={14} strokeWidth={4} />
              </div>
              {feat}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <Link
            to="/contact"
            className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
          >
            Request Demo
          </Link>
          <Link
            to={`/portfolio`}
            className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
          >
            Learn More <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <div className="product-visual">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
    </motion.div>
  );
}

function ProductsFeatured() {
  return (
    <section
      id="featured-products"
      className="featured-section products-container"
    >
      <div className="section-header">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#E9D5FF] shadow-xs w-max">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
            <span className="text-[12px] font-body font-semibold text-[#7C3AED] uppercase tracking-wider">
              Flagship
            </span>
          </div>
          <h2 className="font-display font-bold text-[#1F1430] text-[clamp(28px,4vw,40px)]">
            Our Core Platforms
          </h2>
          <p className="body-copy text-[#6B7280] max-w-readable mt-4 text-[15px] leading-relaxed">
            Powerful enterprise software trusted for modern business operations.
          </p>
        </motion.div>
      </div>

      {/* Optional Timeline Flow */}
      <div className="max-w-5xl mx-auto mb-20 text-center">
        <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-8">
          Our Product Engineering Lifecycle
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 max-w-4xl mx-auto">
          {ProductContent.map((step, idx) => (
            <div key={idx} className="flex items-center gap-2 sm:gap-4">
              <div className="px-4 py-2.5 rounded-xl bg-white border border-[#E9D5FF] text-xs font-bold text-[#0F172A] shadow-2xs hover:border-[#7B2FF7] hover:text-[#7B2FF7] transition-all">
                {step}
              </div>
              {idx < 6 && (
                <span className="text-[#7B2FF7] font-bold text-sm shrink-0">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="product-showcase">
        {ProductContent2.map((product, idx) => (
          <ProductRow key={product.id} product={product} index={idx} />
        ))}
      </div>
    </section>
  );
}

function ProductsIndustries() {
  return (
    <section className="industries-section">
      <div className="products-container">
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#E9D5FF] shadow-xs w-max">
              <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
              <span className="text-[12px] font-body font-semibold text-[#7C3AED] uppercase tracking-wider">
                Industries
              </span>
            </div>
            <h2 className="font-display font-bold text-[#1F1430] text-[clamp(28px,4vw,40px)]">
              Built For Your Sector
            </h2>
            <p className="body-copy text-[#6B7280] max-w-readable mt-4 text-[15px] leading-relaxed">
              Tailored platforms for diverse business environments.
            </p>
          </motion.div>
        </div>
        <div className="bento-grid">
          {ProductContent1.map((ind, i) => (
            <motion.div
              key={i}
              className={`bento-item ${ind.class}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img
                src={ind.bg}
                alt={ind.title}
                className="bento-bg"
                loading="lazy"
              />
              <div className="bento-overlay" />
              <div className="bento-content relative z-10">
                <div className="bento-icon">{ind.icon}</div>
                <span className="bento-title">{ind.title}</span>
                <p className="bento-desc">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsWhyChoose() {
  return (
    <section className="relative py-24 bg-[#FDFBFF] overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        .workflow-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
        }
      `}} />

      {/* Grid background */}
      <div className="absolute inset-0 workflow-grid pointer-events-none" />

      {/* Purple blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-300/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute top-12 left-[10%] w-3 h-3 bg-purple-400/20 rounded-full blur-[1px] animate-float-slow" />
      <div className="absolute bottom-16 right-[12%] w-4 h-4 bg-blue-400/15 rounded-full blur-[1px] animate-float-medium" />
      <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-indigo-400/20 rounded-full blur-[0.5px] animate-float-slow" />

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
            Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Why Choose Viyan Products
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto">
            Engineered for reliability, performance, and exponential growth.
          </p>
        </div>

        {/* 3 columns, 2 rows grid container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-[1024px] lg:max-w-none mx-auto">
          {ProductContent3.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                className="group relative flex flex-col justify-between w-[300px] h-[190px] p-5 rounded-[18px] bg-white/75 backdrop-blur-md border border-purple-100/80 transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-300 cursor-pointer overflow-hidden select-none"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
              >
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-[18px] border-2 border-transparent group-hover:border-purple-300/40 pointer-events-none transition-all duration-300" />

                <div className="flex items-start gap-4">
                  {/* Gradient Icon Circle */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                  </div>

                  {/* Heading & description */}
                  <div className="flex-grow min-w-0 text-left">
                    <h3 className="text-base font-bold text-slate-800 tracking-tight mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-normal line-clamp-3">
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {/* Tiny bottom badge */}
                <div className="mt-auto pt-2 flex justify-start">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[10px] font-semibold text-purple-600 uppercase tracking-wider border border-purple-100/50">
                    {feature.badge}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// COMPARISON MATRIX
// ─────────────────────────────────────────
function ProductsComparison() {
  return (
    <section className="comparison-section">
      <div className="products-container">
        <div className="section-header">
          <div className="section-tag">Compare</div>
          <h2>Find The Right Platform</h2>
          <p>Compare features to select the perfect solution for your needs.</p>
        </div>
        <div className="comparison-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>ERP</th>
                <th>CRM</th>
                <th>Inventory</th>
                <th>POS</th>
                <th>MedAssist</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Core Focus</td>
                <td>Business Management</td>
                <td>Sales & Leads</td>
                <td>Stock & Warehouse</td>
                <td>Retail Sales</td>
                <td>Healthcare Billing</td>
              </tr>
              <tr>
                <td>Employee Mgmt</td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>Basic</td>
                <td>
                  <X className="table-icon-cross mx-auto" />
                </td>
                <td>Basic</td>
                <td>Basic</td>
              </tr>
              <tr>
                <td>Inventory Tracking</td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>
                  <X className="table-icon-cross mx-auto" />
                </td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>Medicine</td>
              </tr>
              <tr>
                <td>Financial Reports</td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>Sales Metrics</td>
                <td>Cost Analysis</td>
                <td>Revenue</td>
                <td>GST</td>
              </tr>
              <tr>
                <td>Cloud Access</td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
              </tr>
              <tr>
                <td>AI Insights</td>
                <td>
                  <Check className="table-icon-tick mx-auto" />
                </td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td>
                  <X className="table-icon-cross mx-auto" />
                </td>
                <td>
                  <X className="table-icon-cross mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="bg-transparent border-none"></td>
                <td className="pt-8 pb-4">
                  <Link
                    to="/contact"
                    className="liquid-btn btn-primary"
                    style={{ padding: "10px 20px", fontSize: "13px" }}
                  >
                    Get ERP
                  </Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link
                    to="/contact"
                    className="liquid-btn btn-secondary"
                    style={{ padding: "10px 20px", fontSize: "13px" }}
                  >
                    Get CRM
                  </Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link
                    to="/contact"
                    className="liquid-btn btn-secondary"
                    style={{ padding: "10px 20px", fontSize: "13px" }}
                  >
                    Get Inv.
                  </Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link
                    to="/contact"
                    className="liquid-btn btn-secondary"
                    style={{ padding: "10px 20px", fontSize: "13px" }}
                  >
                    Get POS
                  </Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link
                    to="/contact"
                    className="liquid-btn btn-secondary"
                    style={{ padding: "10px 20px", fontSize: "13px" }}
                  >
                    Get Med.
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProductsFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="faq-section products-container">
      <div className="section-header">
        <div className="section-tag">Support</div>
        <h2>Frequently Asked Questions</h2>
        <p>Everything you need to know about our platforms.</p>
      </div>
      <div className="faq-list">
        {ProductContent4.map((faq, i) => (
          <div
            key={i}
            className={`faq-item ${openIdx === i ? "open" : ""}`}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className="faq-question">
              {faq.q}
              <div className="faq-icon">
                {openIdx === i ? <Minus size={20} /> : <Plus size={20} />}
              </div>
            </div>
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// MAIN PAGE EXPORT
// ─────────────────────────────────────────
export default function Products() {
  return (
    <div className="products-page bg-abyss relative">
      <BackgroundEffects />
      <ProductsHero />
      <SectionDivider />
      <ProductsFeatured />
      <SectionDivider />
      <ProductsIndustries />
      <SectionDivider />
      <ProductsWhyChoose />
      <SectionDivider />
      <ProductsComparison />
      <SectionDivider />
      <ProductsFAQ />

      {/* ── CTA + FOOTER SECTION (reused from Portfolio) ── */}
      <section
        className="relative w-[94%] md:w-full mx-auto overflow-hidden rounded-t-[32px] rounded-b-none md:rounded-t-[40px] md:rounded-b-none z-10"
        style={{
          minHeight: "950px",
          marginTop: "80px",
          paddingTop: "70px",
          paddingBottom: "40px",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={productImg}
            alt="Product Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "rgba(10, 10, 20, 0.45)" }}
        />

        {/* CTA */}
        <div className="relative z-10 flex justify-center px-8 md:px-16 lg:px-24 pt-4 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col items-center text-center"
          >
            <span className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight mb-4 drop-shadow-xl md:whitespace-nowrap">
              Ready to modernize your operations?
            </span>

            <p className="text-sm md:text-base lg:text-lg text-white/90 mb-8 drop-shadow-md md:whitespace-nowrap">
              Let's coordinate on requirements and deploy the perfect platform for your business.
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="self-center"
            >
              <Link to="/contact" className="block relative group">
                <div className="absolute inset-0 bg-[#7c3aed] blur-[40px] opacity-55 group-hover:opacity-85 transition-opacity duration-300 rounded-full" />

                <button
                  className="relative px-[48px] py-[18px] text-white font-semibold text-sm uppercase tracking-wider rounded-full shadow-[0_0_40px_rgba(124,58,237,0.55)] transition-all duration-300 border border-white/10 flex items-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c3aed, #9333ea, #6366f1)",
                  }}
                >
                  Book a Demo <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <LiquidFooter />
      </section>
    </div>
  );
}
