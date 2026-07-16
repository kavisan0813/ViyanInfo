import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Palette, Code, Shield, Rocket, TrendingUp } from "lucide-react";

interface WorkflowStep {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  description: string;
}

const steps: WorkflowStep[] = [
  {
    id: 1,
    title: "Discover",
    subtitle: "Phase 01",
    icon: Search,
    description: "We understand your business goals, users, challenges, and project requirements before writing code.",
  },
  {
    id: 2,
    title: "Design",
    subtitle: "Phase 02",
    icon: Palette,
    description: "We transform ideas into intuitive user experiences, scalable architecture, and clear implementation plans.",
  },
  {
    id: 3,
    title: "Build",
    subtitle: "Phase 03",
    icon: Code,
    description: "Our engineering team develops secure, scalable, and maintainable software using modern technologies.",
  },
  {
    id: 4,
    title: "Validate",
    subtitle: "Phase 04",
    icon: Shield,
    description: "Every feature is tested for functionality, usability, security, and performance before release.",
  },
  {
    id: 5,
    title: "Launch",
    subtitle: "Phase 05",
    icon: Rocket,
    description: "We deploy your application with reliable infrastructure, monitoring, and production-ready environments.",
  },
  {
    id: 6,
    title: "Scale",
    subtitle: "Phase 06",
    icon: TrendingUp,
    description: "After launch, we continue improving your product through feature enhancements and support.",
  },
];

export function HomeProcess() {
  const [activeStep, setActiveStep] = useState(1);

  // Auto-cycle active step every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full py-16 bg-[#FAF7FF] font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes workflowGrid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .workflow-grid {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(139, 92, 246, 0.03) 1px, transparent 1px);
        }
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
        @keyframes moving-light {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .moving-light-path {
          stroke-dasharray: 8 12;
          animation: moving-light 1.5s linear infinite;
        }
      `}} />

      {/* Grid Background */}
      <div className="absolute inset-0 workflow-grid pointer-events-none" />

      {/* Blurred Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Ambient Floating Particles */}
      <div className="absolute top-12 left-[10%] w-3 h-3 bg-purple-400/20 rounded-full blur-[1px] animate-float-slow" />
      <div className="absolute bottom-16 right-[12%] w-4 h-4 bg-blue-400/20 rounded-full blur-[1px] animate-float-medium" />
      <div className="absolute top-1/3 right-[25%] w-2 h-2 bg-indigo-400/30 rounded-full blur-[0.5px] animate-float-slow" />
      <div className="absolute bottom-1/3 left-[20%] w-3 h-3 bg-purple-400/20 rounded-full blur-[1px] animate-float-medium" />

      <div className="container relative z-10 mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
            OUR PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-6">
            A Simple Process.
            <br />
            Built for Successful Products.
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Every successful digital product follows a clear path. Our
            engineering process keeps projects transparent, efficient, and
            focused on delivering measurable value.
          </p>
        </div>
      </div>

      {/* Main Workflow Container */}
      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        
        {/* Horizontal wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-1.5 xl:gap-2 pb-8 pt-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.id} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
                
                {/* Floating Glass Card */}
                <motion.div
                  onClick={() => setActiveStep(step.id)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`group relative w-full sm:w-[150px] lg:w-[125px] xl:w-[145px] p-3 lg:py-4 lg:px-2 xl:p-4 rounded-[20px] cursor-pointer text-center bg-white/70 backdrop-blur-md border border-purple-100/80 transition-all duration-300 select-none
                    ${isActive 
                      ? "shadow-[0_0_25px_rgba(168,85,247,0.22)] border-purple-300 bg-white/95 scale-[1.02]" 
                      : "shadow-[0_8px_20px_rgba(168,85,247,0.05)] hover:shadow-[0_0_20px_rgba(168,85,247,0.18)] hover:border-purple-200"
                    }
                  `}
                >
                  {/* Subtle active glow pulse */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-[20px] ring-2 ring-purple-400/40 animate-pulse pointer-events-none" />
                  )}

                  {/* Icon Container with hover rotation */}
                  <div className="mx-auto w-10 h-10 lg:w-10 lg:h-10 xl:w-11 xl:h-11 rounded-[14px] bg-gradient-to-tr from-purple-50 to-indigo-50 flex items-center justify-center border border-purple-50 group-hover:border-purple-100 transition-all duration-300">
                    <Icon className="w-4 h-4 lg:w-4 lg:h-4 text-purple-600 group-hover:rotate-12 transition-transform duration-300" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-3 text-sm xl:text-[15px] font-bold text-slate-800 tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-[9px] xl:text-[10px] font-semibold text-purple-500 uppercase tracking-wider block mt-1">
                    {step.subtitle}
                  </span>
                </motion.div>

                {/* Animated Connection Line to Next Card */}
                {!isLast && (
                  <div className="flex items-center justify-center py-4 lg:py-0 w-8 lg:w-auto lg:flex-1 lg:max-w-[40px] lg:min-w-[10px] h-8 lg:h-auto mx-1">
                    {/* Horizontal line for Desktop */}
                    <svg className="hidden lg:block w-full h-4" viewBox="0 0 40 16" fill="none" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id={`grad-h-${step.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <line 
                        x1="0" y1="8" x2="40" y2="8" 
                        stroke="#E9D5FF" strokeWidth="2" 
                        strokeDasharray="4 4" 
                      />
                      <line 
                        x1="0" y1="8" x2="40" y2="8" 
                        stroke={`url(#grad-h-${step.id})`} strokeWidth="2.5" 
                        className="moving-light-path" 
                      />
                    </svg>

                    {/* Vertical line for Mobile */}
                    <svg className="block lg:hidden w-4 h-12" viewBox="0 0 16 60" fill="none">
                      <defs>
                        <linearGradient id={`grad-v-${step.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#8B5CF6" />
                          <stop offset="100%" stopColor="#3B82F6" />
                        </linearGradient>
                      </defs>
                      <line 
                        x1="8" y1="0" x2="8" y2="60" 
                        stroke="#E9D5FF" strokeWidth="2" 
                        strokeDasharray="4 4" 
                      />
                      <line 
                        x1="8" y1="0" x2="8" y2="60" 
                        stroke={`url(#grad-v-${step.id})`} strokeWidth="2.5" 
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
              className="bg-white/80 backdrop-blur-md border border-purple-100/50 p-5 rounded-[20px] shadow-sm text-center"
            >
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                {steps[activeStep - 1].subtitle}: {steps[activeStep - 1].title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {steps[activeStep - 1].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
