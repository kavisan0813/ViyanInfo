import { motion } from "framer-motion";
import {
  Sparkles,
  Search,
  Layers,
  Palette,
  Eye,
  Settings,
  TrendingUp,
  Heart,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import { TechBadge } from "../components/TechBadge";
import { CTABlock } from "../components/CTABlock";
import { SectionDivider } from "../components/SectionDivider";

// Premium Interactive Design Board & Wireframe SVG Illustration
const DesignBoardIllustration = () => (
  <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto flex items-center justify-center select-none">
    {/* Floating background blur elements */}
    <div className="absolute w-72 h-72 bg-[#F59E0B]/10 rounded-full blur-3xl top-10 right-10"></div>
    <div className="absolute w-64 h-64 bg-[#7B2FF7]/5 rounded-full blur-3xl bottom-10 left-10"></div>

    {/* Main Design Canvas */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full bg-white border border-slate-200/80 rounded-2xl shadow-xl overflow-hidden p-4 flex flex-col gap-4"
    >
      {/* Figma-like Tab Bar */}
      <div className="flex justify-between items-center pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
          <span className="text-[10px] font-mono text-slate-400">Desktop / Wireframe_v2</span>
        </div>
        <div className="flex gap-2">
          <span className="text-[8px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">100%</span>
        </div>
      </div>

      {/* Wireframe Mockup */}
      <div className="flex-1 bg-slate-50 rounded-xl p-4 flex flex-col gap-3 relative border border-dashed border-slate-200">
        {/* Alignment Guide Lines */}
        <div className="absolute left-[30px] inset-y-0 w-px bg-rose-400/10 border-dashed" />
        <div className="absolute right-[30px] inset-y-0 w-px bg-rose-400/10 border-dashed" />
        <div className="absolute top-[40px] inset-x-0 h-px bg-rose-400/10 border-dashed" />

        {/* Hero Section Mockup */}
        <div className="flex justify-between items-center mb-2">
          <div className="flex flex-col gap-1.5 w-2/3">
            <div className="h-3 w-3/4 bg-slate-200 rounded" />
            <div className="h-2 w-1/2 bg-slate-200 rounded" />
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B] border border-[#F59E0B]/20">
            <Palette size={16} />
          </div>
        </div>

        {/* Grid Blocks */}
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white border border-slate-200/60 rounded-lg p-2.5 flex flex-col gap-1.5 shadow-xs relative">
              {/* Spacing guides */}
              {item === 1 && (
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-rose-400 text-white font-mono text-[6px] px-1 rounded-sm leading-none py-0.5">
                  16px
                </div>
              )}
              <div className="w-full h-8 bg-slate-100 rounded-md flex items-center justify-center">
                <span className="text-[8px] text-slate-300 font-mono">Box {item}</span>
              </div>
              <div className="h-1.5 w-3/4 bg-slate-200 rounded" />
              <div className="h-1 w-1/2 bg-slate-150 rounded" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Floating Figma Cursor Node */}
    <motion.div
      animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-1/2 left-[20%] z-20 flex flex-col gap-1 pointer-events-none"
    >
      <div className="flex items-center gap-1.5">
        {/* Cursor Arrow */}
        <svg className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" viewBox="0 0 24 24">
          <path d="M4.5 3V17L9.5 12.5L16.5 19.5L19.5 16.5L12.5 9.5L17.5 4.5H4.5Z" />
        </svg>
        <span className="px-2 py-0.5 bg-[#F59E0B] text-white text-[8px] font-bold font-mono rounded-md shadow-md">
          Designer
        </span>
      </div>
    </motion.div>

    {/* Floating Spec Screen Overlay */}
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-[-10px] top-[20%] z-20 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-lg flex items-center gap-3 w-40"
    >
      <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center shrink-0">
        <Sparkles size={16} />
      </div>
      <div className="text-left">
        <span className="block text-[10px] font-bold text-slate-900 leading-tight">Figma Tokens</span>
        <span className="text-[8px] text-slate-400">Shared Design Lib</span>
      </div>
    </motion.div>
  </div>
);

export default function UiUxDesign() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Creative Design Services</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Design Experiences <br />
                <span className="bg-gradient-to-r from-[#F59E0B] via-amber-600 to-indigo-600 bg-clip-text text-transparent">Users Love</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
                Human-centered design focused on usability, engagement, and business outcomes. We compile custom UI assets and structural Figma libraries.
              </p>
              <div className="flex gap-4">
                <a href="#contactform">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
              </div>
            </motion.div>
            
            {/* Right Content: Design board */}
            <div className="lg:col-span-6">
              <DesignBoardIllustration />
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* DESIGN SPECIALIZATION PILLARS (5 Sections/Cards) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Our Process Layers
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Human-Centered Design Pillars
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              We design modular layouts starting from user research all the way up to system codebases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* User Research */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6 border border-amber-100">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">User Research</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Perform comprehensive interviews, mapping custom personas, and finding layout friction zones to align design specs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Personas • User Testing • Surveys
              </div>
            </motion.div>

            {/* Wireframing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6 border border-amber-100">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Wireframing</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Drafting structural screen maps and navigation hierarchies to establish clean page logic before visual design.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Low-fi Mockups • User Flows • Miro
              </div>
            </motion.div>

            {/* UI Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6 border border-amber-100">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">UI Design</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Applying premium typographic structures, grid alignments, customized SVGs, and consistent color pallets in Figma.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Figma • Visual Styling • Vectors
              </div>
            </motion.div>

            {/* UX Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6 border border-amber-100">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">UX Optimization</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Refining checkout steps, form completions, and interaction states to remove user friction and improve retention.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Heuristics • Friction Audits • Analytics
              </div>
            </motion.div>

            {/* Design Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6 border border-amber-100">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Design Systems</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Building modular, component-based Figma libraries and styleguides to coordinate design changes and developer handoffs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Figma Tokens • Component Kits
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Design Engineered For Conversion
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Why business layouts require premium usability metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Higher Conversions",
                desc: "Decrease checkout friction, clear call-to-actions, and intuitive content hierarchies.",
                icon: <TrendingUp className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-50 border-amber-100"
              },
              {
                title: "Better Experience",
                desc: "Fluid transitions, satisfying tactile feedback, and highly legible text options.",
                icon: <Heart className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-50 border-amber-100"
              },
              {
                title: "Improved Retention",
                desc: "Clear visual setups and simple layouts that invite customers to return.",
                icon: <UserCheck className="w-6 h-6 text-[#F59E0B]" />,
                bg: "bg-amber-50 border-amber-100"
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${benefit.bg} flex items-center justify-center mb-6 border`}>
                  {benefit.icon}
                </div>
                <h3 className="text-base sm:text-lg font-display font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Design Portfolio Showcase
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Browse successful custom applications we have engineered and launched.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "App Designs",
                desc: "Tactile, user-centric mobile UI structures designed for iOS and Android.",
                tag: "ViyanHealth App",
                glowColor: "rgba(245, 158, 11, 0.08)"
              },
              {
                title: "Dashboard Designs",
                desc: "Data-heavy analytics trackers featuring custom diagrams and responsive grids.",
                tag: "Enterprise Portal",
                glowColor: "rgba(123, 47, 247, 0.08)"
              },
              {
                title: "Website Designs",
                desc: "High-end corporate layouts designed to drive product inquiries.",
                tag: "Marketing Platform",
                glowColor: "rgba(6, 182, 212, 0.08)"
              }
            ].map((design, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 20px 40px ${design.glowColor}` }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 relative group"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    {design.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#F59E0B] transition-colors duration-200">
                    {design.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                    {design.desc}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    View Case Study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL STANDARDS */}
      <section className="py-24 bg-[#FAF7FF]">
        <div className="container max-w-[1000px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-[#F59E0B] text-xs font-semibold uppercase tracking-wider mb-4">
            Design Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Interactive Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-12">
            We use industry-standard design programs and coordinate closely with development teams.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Figma", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "Miro", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "Adobe Illustrator", glow: "rgba(236, 72, 153, 0.15)" },
              { name: "Lottie Files", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "Prototyping", glow: "rgba(245, 158, 11, 0.15)" },
              { name: "Design Tokens", glow: "rgba(124, 58, 237, 0.15)" }
            ].map((tech, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -2, boxShadow: `0 10px 25px ${tech.glow}` }}
                className="bg-white border border-slate-100 rounded-2xl px-6 py-4 cursor-default shadow-xs transition-all duration-300"
              >
                <TechBadge name={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABlock
        title="Ready to design your product?"
        subtitle="Let's engineer a gorgeous, intuitive design system that scales seamlessly with your business."
      />
    </div>
  );
}
