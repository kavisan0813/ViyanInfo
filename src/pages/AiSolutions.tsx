import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Cpu,
  Workflow,
  BarChart3,
  GitBranch,
  Search,
  MessageSquare,
  Clock,
  Coins,
  Zap,
  ArrowRight,
} from "lucide-react";
import { TechBadge } from "../components/TechBadge";
import { CTABlock } from "../components/CTABlock";
import { SectionDivider } from "../components/SectionDivider";

// Premium Interactive Neural Network & Workflow SVG Illustration
const NeuralNetworkIllustration = () => (
  <div className="relative w-full aspect-[4/3] max-w-[500px] mx-auto flex items-center justify-center select-none">
    {/* Floating background blur elements */}
    <div className="absolute w-72 h-72 bg-[#EC4899]/10 rounded-full blur-3xl top-10 right-10"></div>
    <div className="absolute w-64 h-64 bg-[#7B2FF7]/5 rounded-full blur-3xl bottom-10 left-10"></div>

    {/* Central Neural Hub */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full h-full flex items-center justify-center"
    >
      {/* SVG Canvas for Connecting Nodes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        {/* Node connections */}
        <motion.path
          d="M 250,200 L 120,100 M 250,200 L 380,100 M 250,200 L 120,300 M 250,200 L 380,300 M 120,100 L 120,300 M 380,100 L 380,300"
          stroke="rgba(236, 72, 153, 0.2)"
          strokeWidth="2"
          strokeDasharray="6,6"
        />
        
        {/* Pulsing particle paths */}
        <motion.circle
          r="4"
          fill="#EC4899"
          animate={{
            cx: [250, 120],
            cy: [200, 100],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          r="4"
          fill="#EC4899"
          animate={{
            cx: [250, 380],
            cy: [200, 300],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
        />
        <motion.circle
          r="4"
          fill="#7B2FF7"
          animate={{
            cx: [120, 250],
            cy: [300, 200],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
      </svg>

      {/* Center Brain Node */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="w-20 h-20 rounded-full bg-white border border-[#EC4899]/30 shadow-xl flex items-center justify-center text-[#EC4899] z-20 relative"
      >
        <div className="absolute inset-0 rounded-full bg-[#EC4899]/5 animate-ping duration-3000" />
        <Brain className="w-9 h-9" />
      </motion.div>

      {/* Surrounding Nodes */}
      {/* Node 1: Chat/Assistant (Top-Left) */}
      <motion.div
        animate={{ y: [4, -4, 4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[60px] left-[70px] z-20 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-md text-[#EC4899]"
      >
        <MessageSquare className="w-5 h-5" />
      </motion.div>

      {/* Node 2: Automation/Workflow (Top-Right) */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[60px] right-[70px] z-20 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-md text-[#EC4899]"
      >
        <Workflow className="w-5 h-5" />
      </motion.div>

      {/* Node 3: Analytics (Bottom-Left) */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[60px] left-[70px] z-20 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-md text-[#EC4899]"
      >
        <BarChart3 className="w-5 h-5" />
      </motion.div>

      {/* Node 4: Git Branch / Integration (Bottom-Right) */}
      <motion.div
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-[60px] right-[70px] z-20 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-md text-[#EC4899]"
      >
        <GitBranch className="w-5 h-5" />
      </motion.div>
    </motion.div>

    {/* Floating telemetry label */}
    <motion.div
      animate={{ x: [-5, 5, -5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-4 right-10 z-20 px-4 py-2.5 rounded-xl bg-slate-900 text-white shadow-lg text-[10px] font-mono flex items-center gap-2 border border-slate-800"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse" />
      <span>RAG Index: Active</span>
    </motion.div>
  </div>
);

export default function AiSolutions() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-body overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.04)_0%,transparent_60%)] pointer-events-none" />
        <div className="container max-w-[1240px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Artificial Intelligence Services</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                AI Powered Solutions <br />
                <span className="bg-gradient-to-r from-[#EC4899] via-pink-600 to-indigo-600 bg-clip-text text-transparent">For Smarter Businesses</span>
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl mb-8">
                Automate workflows, enhance customer experiences, and unlock business insights with AI. We engineer production-grade LLM applications.
              </p>
              <div className="flex gap-4">
                <a href="#contactform">
                  <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
                    Start Project
                  </button>
                </a>
              </div>
            </motion.div>
            
            {/* Right Content: Neural Animation */}
            <div className="lg:col-span-6">
              <NeuralNetworkIllustration />
            </div>

          </div>
        </div>
      </section>

      <SectionDivider />

      {/* AI SERVICE PILLARS (5 Sections/Cards) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-4">
              AI Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Custom Artificial Intelligence Systems
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              We design specialized workflows using modern large language models and vector storage pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {/* AI Chatbots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#EC4899] flex items-center justify-center mb-6 border border-pink-100">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">AI Chatbots</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Context-aware assistants integrated with your database schema to provide instant, human-grade customer support.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                GPT-4o • Custom System Prompts
              </div>
            </motion.div>

            {/* Business Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#EC4899] flex items-center justify-center mb-6 border border-pink-100">
                  <Workflow className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Business Automation</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Automate redundant manual administrative operations with smart background agents linking different API hooks.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                LangGraph • Auto-schedulers
              </div>
            </motion.div>

            {/* Predictive Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#EC4899] flex items-center justify-center mb-6 border border-pink-100">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">Predictive Analytics</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Compile structural regression and classification algorithms to identify user trends and predict database metrics.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Scikit-Learn • Trend Forecasting
              </div>
            </motion.div>

            {/* LLM Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#EC4899] flex items-center justify-center mb-6 border border-pink-100">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">LLM Integration</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Connect open-source and proprietary models (OpenAI, Anthropic, LLaMA) directly into your website's database layers.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                OpenAI • Claude API • HuggingFace
              </div>
            </motion.div>

            {/* RAG Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-[#EC4899] flex items-center justify-center mb-6 border border-pink-100">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">RAG Systems</h3>
                <p className="text-[#475569] text-xs sm:text-sm leading-relaxed mb-6">
                  Retrieval-Augmented Generation matching semantic searches against vector stores for highly accurate document lookups.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-400">
                Pinecone • Qdrant • Embeddings
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-4">
              Core Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              Value Engineered With AI
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Transforming raw model architectures into measurable business efficiencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "24/7 Support",
                desc: "AI chatbots process customer inquiries instantly at any hour of the day.",
                icon: <Clock className="w-6 h-6 text-[#EC4899]" />,
                bg: "bg-pink-50 border-pink-100"
              },
              {
                title: "Automation",
                desc: "Free up employee schedules by handing off manual data processing to agents.",
                icon: <Workflow className="w-6 h-6 text-[#EC4899]" />,
                bg: "bg-pink-50 border-pink-100"
              },
              {
                title: "Reduced Costs",
                desc: "Decrease operational and support overhead with smart automated pipelines.",
                icon: <Coins className="w-6 h-6 text-[#EC4899]" />,
                bg: "bg-pink-50 border-pink-100"
              },
              {
                title: "Faster Decisions",
                desc: "Synthesize huge datasets into visual insights in seconds for leadership teams.",
                icon: <Zap className="w-6 h-6 text-[#EC4899]" />,
                bg: "bg-pink-50 border-pink-100"
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

      {/* CASE STUDIES (Featured Projects) */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-4">
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
              AI Deployments Case Studies
            </h2>
            <p className="text-base sm:text-lg text-slate-500">
              Browse successful custom applications we have engineered and launched.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-4xl mx-auto">
            {/* Case 1: AI Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.06)" }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Product Optimization
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#EC4899] transition-colors duration-200">
                  AI Assistant Integration
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                  Configured a vector-backed assistant referencing 10,000+ support pages. Decreased ticket load by 40% in the first 30 days of deployment.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs font-bold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>

            {/* Case 2: Automation Platform */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.06)" }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between h-full transition-all duration-300 group"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Workflow Optimization
                </span>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-[#EC4899] transition-colors duration-200">
                  Automation Platform
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-500 mb-6">
                  Built custom data scrapers and GPT agents compiling field data. Automated 100% of field operations reports with error checks.
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs font-bold text-[#7B2FF7] flex items-center gap-1 group-hover:gap-1.5 transition-all">
                  View Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="py-24 bg-[#FAF7FF]">
        <div className="container max-w-[1000px] mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-[#EC4899] text-xs font-semibold uppercase tracking-wider mb-4">
            Tech Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Interactive AI Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-500 mb-12">
            We utilize state-of-the-art frameworks to orchestrate and query language models.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "OpenAI", glow: "rgba(236, 72, 153, 0.15)" },
              { name: "LangChain", glow: "rgba(123, 47, 247, 0.15)" },
              { name: "Vector Databases", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "Anthropic", glow: "rgba(236, 72, 153, 0.15)" },
              { name: "Pinecone", glow: "rgba(6, 182, 212, 0.15)" },
              { name: "LlamaIndex", glow: "rgba(124, 58, 237, 0.15)" }
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
        title="Ready to engineer your AI Solutions?"
        subtitle="Let's build a smart model ecosystem that automates operations and scales with your business."
      />
    </div>
  );
}
