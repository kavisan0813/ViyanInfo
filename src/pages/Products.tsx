import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, Plus, Minus, Server, Activity, Briefcase, HeartPulse, ShoppingBag, GraduationCap, Cpu, Shield, Cloud, Zap, Headphones, X } from "lucide-react";

import { LiquidFooter } from "../components/LiquidFooter";
import { SectionDivider } from "../components/SectionDivider";
import { BackgroundEffects } from "../components/BackgroundEffects";
import workImg from "../assets/Workimg.webp";

// Existing Concept Images
import erpImg from "../assets/work_erp_concept.png";
import crmImg from "../assets/work_crm_concept.png";
import inventoryImg from "../assets/work_inventory_concept.png";
import medassistImg from "../assets/work_pharmacy_concept.png";
import posImg from "../assets/work_billing_concept.png";
import lmsImg from "../assets/work_training_concept.png";
import aiImg from "../assets/work_ai_concept.png";
import financeImg from "../assets/work_employment_concept.png";

import "../styles/ProductsPage.css";

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
            <span className="text-[12px] font-body font-semibold text-[#7C3AED] uppercase tracking-wider">ViyanInfo Products</span>
          </div>
          <h1 className="text-[clamp(34px,4.5vw,56px)] font-display font-bold text-[#1F1430] leading-[1.1] tracking-tight mb-6">Enterprise Software<br/>Built For Modern Businesses</h1>
          <p className="body-copy text-[#6B7280] max-w-readable mb-10 text-[15px] leading-relaxed">
            Discover scalable software solutions designed to streamline operations, 
            improve productivity and accelerate business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer" onClick={() => document.getElementById('featured-products')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Products <span className="text-lg leading-none font-normal">→</span>
            </button>
            <Link to="/contact" className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer">
              Book Demo
            </Link>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ y: y1 }}
        >
          <div className="ecosystem-container">
            {/* Connection Rings */}
            <div className="eco-connection" style={{ width: '300px', height: '300px', animationDuration: '40s' }} />
            <div className="eco-connection" style={{ width: '450px', height: '450px', animationDirection: 'reverse' }} />

            {/* Center Node */}
            <motion.div 
              className="eco-card center"
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <div className="eco-icon"><Server size={28} /></div>
              <span>Viyan Core</span>
            </motion.div>

            {/* Orbiting Nodes */}
            <motion.div className="eco-card orbit" style={{ top: '5%', left: '5%' }} animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}>
              <div className="eco-icon"><Briefcase size={20} /></div>
              <span>ERP</span>
            </motion.div>
            <motion.div className="eco-card orbit" style={{ top: '15%', right: '0%' }} animate={{ y: [-15, 15, -15] }} transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}>
              <div className="eco-icon"><Activity size={20} /></div>
              <span>CRM</span>
            </motion.div>
            <motion.div className="eco-card orbit" style={{ bottom: '15%', left: '0%' }} animate={{ y: [12, -12, 12] }} transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}>
              <div className="eco-icon"><ShoppingBag size={20} /></div>
              <span>POS</span>
            </motion.div>
            <motion.div className="eco-card orbit" style={{ bottom: '5%', right: '10%' }} animate={{ y: [-8, 8, -8] }} transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}>
              <div className="eco-icon"><Cpu size={20} /></div>
              <span>AI</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// FEATURED PRODUCTS
// ─────────────────────────────────────────
const PRODUCTS_DATA = [
  {
    id: "erp",
    name: "Viyan ERP",
    subtitle: "Enterprise Resource Planning",
    desc: "A complete enterprise resource planning platform designed to simplify HR, finance, payroll, inventory and business operations through one unified ecosystem.",
    features: ["HR Management", "Payroll", "CRM", "Inventory", "Procurement", "Finance", "Reports"],
    image: erpImg,
  },
  {
    id: "crm",
    name: "Viyan CRM",
    subtitle: "Customer Relationship Management",
    desc: "Manage customer relationships, automate sales workflows and track every lead with a centralized CRM platform.",
    features: ["Lead Management", "Sales Pipeline", "Customer Database", "Automation", "Analytics"],
    image: crmImg,
  },
  {
    id: "inventory",
    name: "Viyan Inventory",
    subtitle: "Inventory & Warehouse Platform",
    desc: "Monitor inventory, suppliers and warehouse operations in real time with smart stock management.",
    features: ["Stock Tracking", "Barcode", "Purchase Orders", "Warehouse", "Suppliers"],
    image: inventoryImg,
  },
  {
    id: "medassist",
    name: "Viyan MedAssist",
    subtitle: "Healthcare Management Platform",
    desc: "A healthcare platform helping pharmacies and clinics manage medicines, prescriptions and billing efficiently.",
    features: ["Pharmacy Billing", "Medicine Stock", "Prescriptions", "GST", "Patients"],
    image: medassistImg,
  },
  {
    id: "pos",
    name: "Viyan POS",
    subtitle: "Retail Billing Platform",
    desc: "Cloud-based retail billing software for faster transactions, inventory synchronization and business reporting.",
    features: ["Billing", "Inventory", "GST", "Reports", "Payments"],
    image: posImg,
  },
  {
    id: "lms",
    name: "Viyan LMS",
    subtitle: "Training & Internship Portal",
    desc: "Learning management platform for training centers, institutions and internship programs.",
    features: ["Student Dashboard", "Mentor Dashboard", "Attendance", "Certificates", "Assignments"],
    image: lmsImg,
  },
  {
    id: "ai",
    name: "Viyan AI Analytics",
    subtitle: "Business Intelligence Platform",
    desc: "AI-powered analytics platform that transforms raw business data into actionable insights.",
    features: ["AI Predictions", "Reports", "Dashboards", "Forecasting", "Business Intelligence"],
    image: aiImg,
  }
];

function ProductRow({ product, index }: { product: typeof PRODUCTS_DATA[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isReverse = index % 2 !== 0;

  return (
    <motion.div 
      ref={ref}
      className={`product-row glass-panel ${isReverse ? 'reverse' : ''}`}
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
              <div className="feature-check"><Check size={14} strokeWidth={4} /></div>
              {feat}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
          <Link to="/contact" className="bg-[#6D28D9] text-white font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-[0_10px_25px_-5px_rgba(109,40,217,0.3)] hover:bg-[#5B21B6] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer">
            Request Demo
          </Link>
          <Link to={`/services/saas`} className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-8 py-3.5 rounded-xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
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
    <section id="featured-products" className="featured-section products-container">
      <div className="section-header">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="hero-badge flex items-center gap-2.5 bg-[#F5F0FF] backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-[#E9D5FF] shadow-xs w-max">
            <span className="w-2 h-2 rounded-full bg-[#7C3AED]"></span>
            <span className="text-[12px] font-body font-semibold text-[#7C3AED] uppercase tracking-wider">Flagship</span>
          </div>
          <h2 className="font-display font-bold text-[#1F1430] text-[clamp(28px,4vw,40px)]">Our Core Platforms</h2>
          <p className="body-copy text-[#6B7280] max-w-readable mt-4 text-[15px] leading-relaxed">Powerful enterprise software trusted for modern business operations.</p>
        </motion.div>
      </div>
      <div className="product-showcase">
        {PRODUCTS_DATA.map((product, idx) => (
          <ProductRow key={product.id} product={product} index={idx} />
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// INDUSTRIES BENTO GRID
// ─────────────────────────────────────────
const INDUSTRIES = [
  { title: "Enterprise", desc: "Scalable ERP solutions for large organizations.", icon: <Briefcase />, class: "bento-large", bg: erpImg },
  { title: "Healthcare", desc: "Management platforms for clinics & pharmacies.", icon: <HeartPulse />, class: "", bg: medassistImg },
  { title: "Retail", desc: "POS and inventory for modern retail.", icon: <ShoppingBag />, class: "", bg: posImg },
  { title: "Education", desc: "LMS and training portals.", icon: <GraduationCap />, class: "bento-wide", bg: lmsImg },
  { title: "Artificial Intelligence", desc: "Predictive analytics and smart reporting.", icon: <Cpu />, class: "bento-wide", bg: aiImg },
  { title: "Finance", desc: "Integrated accounting and payroll.", icon: <Activity />, class: "", bg: financeImg },
  { title: "CRM", desc: "Customer relationship automation.", icon: <Briefcase />, class: "", bg: crmImg },
];

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
              <span className="text-[12px] font-body font-semibold text-[#7C3AED] uppercase tracking-wider">Industries</span>
            </div>
            <h2 className="font-display font-bold text-[#1F1430] text-[clamp(28px,4vw,40px)]">Built For Your Sector</h2>
            <p className="body-copy text-[#6B7280] max-w-readable mt-4 text-[15px] leading-relaxed">Tailored platforms for diverse business environments.</p>
          </motion.div>
        </div>
        <div className="bento-grid">
          {INDUSTRIES.map((ind, i) => (
            <motion.div 
              key={i}
              className={`bento-item ${ind.class}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img src={ind.bg} alt={ind.title} className="bento-bg" loading="lazy" />
              <div className="bento-overlay" />
              <div className="bento-content relative z-10">
                <div className="bento-icon">{ind.icon}</div>
                <h4 className="bento-title">{ind.title}</h4>
                <p className="bento-desc">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// WHY CHOOSE US
// ─────────────────────────────────────────
const REASONS = [
  { title: "Secure", desc: "Enterprise-grade security and data encryption to keep your business safe.", icon: <Shield size={32} strokeWidth={1.5} /> },
  { title: "Scalable", desc: "Built to grow with your business from startup to enterprise scale.", icon: <Activity size={32} strokeWidth={1.5} /> },
  { title: "Cloud Ready", desc: "Access your data anywhere, anytime with our robust cloud infrastructure.", icon: <Cloud size={32} strokeWidth={1.5} /> },
  { title: "Fast Deployment", desc: "Get up and running quickly with streamlined onboarding.", icon: <Zap size={32} strokeWidth={1.5} /> },
  { title: "AI Powered", desc: "Leverage artificial intelligence for smarter business insights.", icon: <Cpu size={32} strokeWidth={1.5} /> },
  { title: "24/7 Support", desc: "Dedicated technical support team ready to assist you anytime.", icon: <Headphones size={32} strokeWidth={1.5} /> },
];

function ProductsWhyChoose() {
  return (
    <section className="why-section products-container">
      <div className="section-header">
        <div className="section-tag">Advantages</div>
        <h2>Why Choose Viyan Products</h2>
        <p>Engineered for reliability, performance, and exponential growth.</p>
      </div>
      <div className="why-grid">
        {REASONS.map((reason, i) => (
          <motion.div 
            key={i}
            className="why-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="why-card-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.desc}</p>
          </motion.div>
        ))}
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
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td>Basic</td>
                <td><X className="table-icon-cross mx-auto" /></td>
                <td>Basic</td>
                <td>Basic</td>
              </tr>
              <tr>
                <td>Inventory Tracking</td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td><X className="table-icon-cross mx-auto" /></td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td>Medicine</td>
              </tr>
              <tr>
                <td>Financial Reports</td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td>Sales Metrics</td>
                <td>Cost Analysis</td>
                <td>Revenue</td>
                <td>GST</td>
              </tr>
              <tr>
                <td>Cloud Access</td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td><Check className="table-icon-tick mx-auto" /></td>
              </tr>
              <tr>
                <td>AI Insights</td>
                <td><Check className="table-icon-tick mx-auto" /></td>
                <td>Add-on</td>
                <td>Add-on</td>
                <td><X className="table-icon-cross mx-auto" /></td>
                <td><X className="table-icon-cross mx-auto" /></td>
              </tr>
              <tr>
                <td className="bg-transparent border-none"></td>
                <td className="pt-8 pb-4">
                  <Link to="/contact" className="liquid-btn btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>Get ERP</Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link to="/contact" className="liquid-btn btn-secondary" style={{ padding: '10px 20px', fontSize: '13px' }}>Get CRM</Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link to="/contact" className="liquid-btn btn-secondary" style={{ padding: '10px 20px', fontSize: '13px' }}>Get Inv.</Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link to="/contact" className="liquid-btn btn-secondary" style={{ padding: '10px 20px', fontSize: '13px' }}>Get POS</Link>
                </td>
                <td className="pt-8 pb-4">
                  <Link to="/contact" className="liquid-btn btn-secondary" style={{ padding: '10px 20px', fontSize: '13px' }}>Get Med.</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────
const FAQS = [
  { q: "Can I integrate Viyan products with my existing software?", a: "Yes, our platforms are built with API-first architecture, allowing seamless integration with popular third-party tools, accounting software, and payment gateways." },
  { q: "Is the data stored securely?", a: "Absolutely. We use enterprise-grade encryption and host on secure cloud infrastructure (AWS/Azure) with regular automated backups to ensure your data is always safe." },
  { q: "Do you offer customization?", a: "Yes, while our flagship products cover most standard use cases, we offer customization services to tailor workflows, reports, and modules specifically to your business requirements." },
  { q: "How long does deployment take?", a: "Standard deployments take between 3 to 7 days, including initial setup and data migration. Highly customized enterprise deployments may take 2 to 4 weeks." },
];

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
        {FAQS.map((faq, i) => (
          <div 
            key={i} 
            className={`faq-item ${openIdx === i ? 'open' : ''}`}
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
            src={workImg}
            alt="Work Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Cinematic overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ background: "rgba(10, 10, 20, 0.45)" }}
        />

        {/* CTA */}
        <div className="relative z-10 flex justify-end px-8 md:px-16 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl flex flex-col items-end text-right"
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight mb-6 drop-shadow-xl">
              Ready to modernize your operations?
            </span>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 drop-shadow-md">
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
