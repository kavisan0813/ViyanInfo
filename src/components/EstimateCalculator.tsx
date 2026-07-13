import { useState, useMemo } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

export function EstimateCalculator() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<
    "websites" | "mobile" | "saas"
  >("websites");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<
    "standard" | "accelerated" | "relaxed"
  >("standard");
  const [formData, setFormData] = useState({ name: "", email: "", desc: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const features = useMemo(
    () => ({
      websites: [
        { id: "cms", label: "Custom CMS / Blog", price: 1500 },
        { id: "design", label: "Custom Design System", price: 2000 },
        { id: "animation", label: "High-end GSAP Animations", price: 1800 },
        { id: "seo", label: "Advanced SEO & Analytics", price: 800 },
      ],

      mobile: [
        { id: "ai", label: "AI & LLM Integration", price: 4000 },
        { id: "auth", label: "Secure Auth & Profiles", price: 1500 },
        { id: "offline", label: "Offline Sync & Database", price: 2500 },
        { id: "push", label: "Push Notification System", price: 1000 },
      ],

      saas: [
        { id: "billing", label: "Stripe Billing & Subscriptions", price: 2500 },
        { id: "auth", label: "Multi-tenant Auth & Roles", price: 2000 },
        { id: "ws", label: "Real-time WebSockets Dashboards", price: 3000 },
        { id: "api", label: "Public API & Developer Portal", price: 3500 },
      ],
    }),
    [],
  );
  const totalPrice = useMemo(() => {
    let base = 5000;

    if (projectType === "mobile") base = 9000;
    if (projectType === "saas") base = 14000;

    const featurePrice = selectedFeatures.reduce((acc, featId) => {
      const featObj = features[projectType].find((f) => f.id === featId);
      return acc + (featObj?.price ?? 0);
    }, 0);

    let multiplier = 1;

    if (timeline === "accelerated") multiplier = 1.35;
    if (timeline === "relaxed") multiplier = 0.9;

    return Math.round((base + featurePrice) * multiplier);
  }, [projectType, selectedFeatures, timeline, features]);

  // Handle project type changes -> reset features
  const handleTypeChange = (type: "websites" | "mobile" | "saas") => {
    setProjectType(type);
    setSelectedFeatures([]);
  };

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="glass-card-elevated p-8 md:p-12 max-w-4xl mx-auto mt-16 relative overflow-hidden border border-border-2">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-(--color-rose-bright) to-transparent opacity-40"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-border-1 pb-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-(--color-text-accent) bg-glass-2 px-3 py-1 rounded">
            Step {step} of 3
          </span>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-text-primary mt-2">
            Build Your Estimate
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            Pick your parameters to outline a ballpark configuration.
          </p>
        </div>

        {/* Realtime Estimate Display */}
        <div className="bg-glass-2 px-6 py-4 rounded-2xl border border-border-1 flex flex-col items-end shrink-0">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-text-muted">
            Estimated Ballpark
          </span>
          <div className="text-2xl md:text-3xl font-mono font-bold text-(--color-text-accent) mt-1">
            ${totalPrice.toLocaleString()} - $
            {(totalPrice * 1.25).toLocaleString()}
          </div>
        </div>
      </div>

      {!isSubmitted ? (
        <div className="min-h-[300px] flex flex-col justify-between">
          {/* Step 1: Project Type */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-display font-semibold text-text-primary">
                1. Select Platform & Base Scope
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    id: "websites",
                    title: "Websites & Marketing",
                    desc: "React/Next.js dynamic web portals with GSAP animations and atomic designs.",
                    base: "$5,000+",
                  },
                  {
                    id: "mobile",
                    title: "Mobile App Development",
                    desc: "React Native elite smart applications with fluid gestures and notifications.",
                    base: "$9,000+",
                  },
                  {
                    id: "saas",
                    title: "SaaS & Full-Stack",
                    desc: "Full-scale multi-tenant dashboards, subscription billings, and custom databases.",
                    base: "$14,000+",
                  },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() =>
                      handleTypeChange(
                        type.id as "websites" | "mobile" | "saas",
                      )
                    }
                    className={`glass-card p-6 text-left border flex flex-col justify-between h-full transition-all cursor-pointer ${projectType === type.id
                      ? "border-(--color-rose-bright) bg-glass-3 shadow-md -translate-y-1"
                      : "border-border-1 hover:border-border-2"
                      }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-display font-semibold text-text-primary">
                          {type.title}
                        </h4>
                        {projectType === type.id && (
                          <div className="w-5 h-5 bg-(--color-rose-bright) rounded-full flex items-center justify-center">
                            <Check size={12} className="text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                        {type.desc}
                      </p>
                    </div>
                    <div className="text-sm font-mono font-bold text-(--color-text-accent) mt-6 pt-4 border-t border-border-0">
                      Starts at {type.base}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Features & Scope */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-display font-semibold text-text-primary">
                2. Select Core Features Needed
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features[projectType].map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`glass-card p-5 text-left border flex items-center justify-between cursor-pointer transition-all ${isChecked
                        ? "border-(--color-rose-bright) bg-glass-3"
                        : "border-border-1 hover:border-border-2"
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${isChecked
                            ? "bg-(--color-rose-bright) border-(--color-rose-bright)"
                            : "border-border-2"
                            }`}
                        >
                          {isChecked && (
                            <Check size={12} className="text-white" />
                          )}
                        </div>
                        <span className="text-sm font-body font-semibold text-text-primary">
                          {feat.label}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-text-muted">
                        +${feat.price.toLocaleString()}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 3: Timeline & Lead */}
          {step === 3 && (
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-display font-semibold text-text-primary">
                  3. Timeline Optimization
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      id: "relaxed",
                      label: "Relaxed Speed",
                      multi: "x0.9 Budget",
                      desc: "Longer timeline fits flexible rollouts.",
                    },
                    {
                      id: "standard",
                      label: "Standard Delivery",
                      multi: "x1.0 Budget",
                      desc: "Our default structured milestones.",
                    },
                    {
                      id: "accelerated",
                      label: "Accelerated Sprints",
                      multi: "x1.35 Budget",
                      desc: "Accelerated developer focus.",
                    },
                  ].map((time) => (
                    <button
                      key={time.id}
                      onClick={() =>
                        setTimeline(
                          time.id as "standard" | "accelerated" | "relaxed",
                        )
                      }
                      className={`glass-card p-5 text-left border cursor-pointer transition-all ${timeline === time.id
                        ? "border-(--color-rose-bright) bg-glass-3"
                        : "border-border-1 hover:border-border-2"
                        }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-display font-semibold text-text-primary">
                          {time.label}
                        </span>
                        {timeline === time.id && (
                          <div className="w-4 h-4 bg-(--color-rose-bright) rounded-full flex items-center justify-center">
                            <Check size={10} className="text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-xs font-mono font-bold text-(--color-text-accent) mt-2">
                        {time.multi}
                      </div>
                      <p className="text-xs text-text-muted mt-2 leading-relaxed">
                        {time.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lead Submission Form */}
              <form
                onSubmit={handleSubmit}
                className="border-t border-border-1 pt-8 space-y-6"
              >
                <h4 className="text-sm font-display font-semibold text-text-primary">
                  Let's schedule a deep dive configuration call based on this
                  estimate.
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Wayne"
                      className="w-full bg-glass-1 border border-border-1 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-(--color-rose-bright) transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                      Business Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      placeholder="e.g. wayne@industries.com"
                      className="w-full bg-glass-1 border border-border-1 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-(--color-rose-bright) transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                    Brief Project Details (Optional)
                  </label>
                  <textarea
                    name="desc"
                    value={formData.desc}
                    onChange={handleFormChange}
                    placeholder="Describe your vision or key features..."
                    rows={3}
                    className="w-full bg-glass-1 border border-border-1 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:border-(--color-rose-bright) transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-teal w-full text-center flex items-center justify-center gap-3"
                >
                  Send Configuration Inquiry <ArrowRight size={18} />
                </button>
              </form>
            </div>
          )}

          {/* Nav Controls */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-border-1">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="btn-glass px-5 py-2 flex items-center gap-2 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ArrowLeft size={16} /> Back
            </button>

            {step < 3 ? (
              <button
                onClick={() => setStep(Math.min(3, step + 1))}
                className="btn-teal px-6 py-2 flex items-center gap-2"
              >
                Next Step <ArrowRight size={16} />
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        /* Submitted Success View */
        <div className="text-center py-16 space-y-6">
          <div className="w-16 h-16 bg-(--color-success) rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Check size={32} className="text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="text-2xl font-display font-semibold text-text-primary">
              Configuration Inquiry Sent!
            </h3>
            <p className="text-text-secondary text-sm max-w-lg mx-auto leading-relaxed">
              Thanks {formData.name}. We've saved your estimate of{" "}
              <strong className="text-(--color-text-accent)">
                ${totalPrice.toLocaleString()} - $
                {(totalPrice * 1.25).toLocaleString()}
              </strong>{" "}
              for your{" "}
              {projectType === "saas"
                ? "SaaS"
                : projectType === "websites"
                  ? "Website"
                  : "Mobile App"}{" "}
              project. Our lead systems engineer will review this SOW and reach
              out at <strong>{formData.email}</strong> within 12 hours.
            </p>
          </div>
          <button
            onClick={() => {
              setStep(1);
              setIsSubmitted(false);
              setFormData({ name: "", email: "", desc: "" });
              setSelectedFeatures([]);
            }}
            className="btn-glass px-6 py-3 cursor-pointer"
          >
            Create Another Configuration Estimate
          </button>
        </div>
      )}
    </div>
  );
}
