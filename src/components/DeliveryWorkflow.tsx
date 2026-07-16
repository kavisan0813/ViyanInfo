import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ClipboardList, Palette, Code2, Rocket, type LucideIcon } from "lucide-react";

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  badge: string;
  icon: LucideIcon;
  iconColor: string;
  gradient: string;
}

const steps: WorkflowStep[] = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand business goals, challenges and project requirements.",
    badge: "Strategy",
    icon: Search,
    iconColor: "text-purple-600",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    step: "02",
    title: "Plan",
    desc: "Define roadmap, architecture and delivery milestones.",
    badge: "Planning",
    icon: ClipboardList,
    iconColor: "text-blue-600",
    gradient: "from-blue-500/20 to-sky-500/20",
  },
  {
    step: "03",
    title: "Design",
    desc: "Create user-focused interfaces and interactive prototypes.",
    badge: "UI / UX",
    icon: Palette,
    iconColor: "text-pink-600",
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Build scalable, secure and high-performance applications.",
    badge: "Engineering",
    icon: Code2,
    iconColor: "text-indigo-600",
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    step: "05",
    title: "Deploy",
    desc: "Launch, monitor and continuously improve your solution.",
    badge: "Delivery",
    icon: Rocket,
    iconColor: "text-emerald-600",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export function DeliveryWorkflow() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#F8FAFC] font-sans overflow-x-hidden">
      {/* Inline styles for custom grid, moving light dashoffset, animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes workflowGrid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .delivery-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(123, 47, 247, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(123, 47, 247, 0.03) 1px, transparent 1px);
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        @keyframes moving-light {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .moving-light-path {
          stroke-dasharray: 8 12;
          animation: moving-light 1.8s linear infinite;
        }
      `}} />

      {/* Grid Background */}
      <div className="absolute inset-0 delivery-grid pointer-events-none" />

      {/* Large central blur glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-300/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-300/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Tiny floating particles */}
      <div className="absolute top-16 left-[8%] w-3 h-3 bg-purple-400/20 rounded-full blur-[1px] animate-float-card" />
      <div className="absolute bottom-20 right-[10%] w-4 h-4 bg-blue-400/20 rounded-full blur-[1px] animate-float-card" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/4 right-[20%] w-2 h-2 bg-indigo-400/30 rounded-full blur-[0.5px] animate-float-card" style={{ animationDelay: "1s" }} />

      {/* Small geometric wireframe lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="10%" y1="20%" x2="20%" y2="40%" stroke="#7B2FF7" strokeWidth="1" />
        <line x1="80%" y1="70%" x2="90%" y2="85%" stroke="#3B82F6" strokeWidth="1" />
      </svg>

      <div className="max-w-[1280px] mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        
        {/* Headers */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4 font-mono">
            Our Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#0F172A] tracking-tight mb-4">
            How We Deliver Digital Excellence
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A transparent, collaborative and scalable process that transforms your ideas into reliable digital solutions.
          </p>
        </div>

        {/* Horizontal Scroll wrapper for desktop/tablet */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-1.5 xl:gap-2 pb-8 pt-12 hide-scrollbar">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === (idx + 1);
            const isLast = idx === steps.length - 1;

            return (
              <div key={idx} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                
                {/* Floating Glass Card */}
                <motion.div
                  onClick={() => setActiveStep(idx + 1)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    delay: idx * 0.15 
                  }}
                  whileHover={{ 
                    y: -8, 
                    rotate: idx % 2 === 0 ? 1 : -1,
                    boxShadow: "0 20px 50px rgba(123,47,247,0.18)"
                  }}
                  className={`group relative flex flex-col justify-between w-full sm:w-[130px] lg:w-[110px] xl:w-[130px] p-3 lg:py-4 lg:px-2 xl:p-4 rounded-[16px] cursor-pointer text-center bg-white/70 backdrop-blur-md border border-purple-100/80 transition-all duration-300 select-none
                    ${isActive 
                      ? "shadow-[0_0_25px_rgba(168,85,247,0.22)] border-purple-300 bg-white/95 scale-[1.02]" 
                      : "shadow-[0_8px_20px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.18)] hover:border-purple-200"
                    }
                    animate-float-card
                  `}
                  style={{ animationDelay: `${idx * 0.4}s` }}
                >
                  {/* Gentle pulse effect on active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-[16px] ring-2 ring-[#7B2FF7]/30 animate-pulse pointer-events-none" />
                  )}

                  {/* Header row: Gradient Icon Circle & Step Number */}
                  <div className="flex items-center justify-between">
                    <div className="mx-auto lg:mx-0 w-10 h-10 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-[14px] bg-gradient-to-tr from-purple-50 to-indigo-50 flex items-center justify-center border border-purple-50 group-hover:border-purple-100 transition-all duration-300">
                      <Icon className="w-4 h-4 lg:w-4 lg:h-4 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-bold text-slate-800 tracking-tight text-center">
                    {step.title}
                  </h3>

                  {/* Small badge at bottom */}
                  <div className="mt-auto pt-4 flex justify-center">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[9px] font-semibold text-purple-600 uppercase tracking-wider border border-purple-100/40 transition-transform duration-300 group-hover:scale-105">
                      {step.badge}
                    </span>
                  </div>
                </motion.div>

                {/* Animated Connection Line to Next Card */}
                {!isLast && (
                  <div className="flex items-center justify-center py-4 lg:py-0 w-8 lg:w-auto lg:flex-1 lg:max-w-[40px] lg:min-w-[10px] h-8 lg:h-auto mx-1">
                    {/* Horizontal line for Desktop */}
                    <svg className="hidden lg:block w-full h-4" viewBox="0 0 40 16" fill="none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`grad-h-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <line 
                        x1="0" y1="8" x2="40" y2="8" 
                        stroke="#E2E8F0" strokeWidth="2" 
                        strokeDasharray="4 4" 
                      />
                      <line 
                        x1="0" y1="8" x2="40" y2="8" 
                        stroke={`url(#grad-h-${idx})`} strokeWidth="2.5" 
                        className="moving-light-path" 
                      />
                    </svg>

                    {/* Vertical line for Mobile */}
                    <svg className="block lg:hidden w-4 h-12" viewBox="0 0 16 60" fill="none">
                      <defs>
                        <linearGradient id={`pipeline-v-${idx}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <line 
                        x1="8" y1="0" x2="8" y2="60" 
                        stroke="rgba(123,47,247,0.12)" strokeWidth="2" 
                        strokeDasharray="4 4" 
                      />
                      <line 
                        x1="8" y1="0" x2="8" y2="60" 
                        stroke={`url(#pipeline-v-${idx})`} strokeWidth="2.5" 
                        className="moving-light-path" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informative Active Card Description Detail Drawer */}
        <div className="mt-8 max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-white/80 backdrop-blur-md border border-purple-100/50 p-5 rounded-[20px] shadow-sm text-center relative overflow-hidden"
            >
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                Phase {activeStep}: {steps[activeStep - 1].title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {steps[activeStep - 1].desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
