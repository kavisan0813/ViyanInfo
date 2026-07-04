import { useState, useLayoutEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone as PhoneIcon,
  MapPin,
  Loader2,
  CheckCircle2,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ChevronDown,
  CalendarDays,
  Sparkles,
} from "lucide-react";
import ContactMap from "../components/ContactMap";
import { burst } from "../utils/particleBurst";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const FAQ_ITEMS = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most custom software and web application projects range from 6 to 12 weeks, depending on requirements. We build in iterative phases, providing staging demos every two weeks.",
  },
  {
    question: "How do you determine project budgets?",
    answer:
      "Budgets are estimated based on technical complexity, integrations, and total developer hours. We offer fixed-price options for clear specs or dedicated sprints for evolving MVPs.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, every digital product we deliver includes 30 days of complimentary support. We also offer monthly SLA retainer plans for hosting management, updates, and feature scaling.",
  },
  {
    question: "How does the internship program coordinate?",
    answer:
      "Our internships run for 3-6 months. We offer real-world learning tracks, 1-on-1 developer mentorship, code reviews, and certified completions tied to potential placement options.",
  },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Entrance animations
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero reveal
      gsap.from(".hero-content-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        onComplete: () => {
          const headline = document.querySelector<HTMLElement>(
            "h1.hero-content-anim",
          );
          if (headline)
            burst(headline, 20, ["#7B2FF7", "#9333EA", "#3B82F6"], 160, 1000);
        },
      });

      // Left column details
      gsap.from(".info-card-anim", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".info-card-container",
          start: "top 85%",
        },
      });

      // Right column form
      gsap.from(formRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });

      // FAQ reveal
      gsap.from(".faq-item-anim", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
        },
      });

      // Consultation CTA reveal
      gsap.from(ctaRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 0.9,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      project_type: formData.service,
      budget: formData.budget,
      message: formData.message,
    };

    emailjs
      .send(
        "service_4a4u7pr",
        "template_0szhajf",
        templateParams,
        "kllab5T5GgZ9d5sfo",
      )
      .then(
        () => {
          setIsLoading(false);
          setIsSuccess(true);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsLoading(false);
        },
      );
  };

  return (
    <div
      ref={containerRef}
      className="bg-slate-50 min-h-screen text-slate-800 font-body relative overflow-hidden pt-24 pb-20"
    >
      {/* Background gradients */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-blue-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="text-center max-w-3xl mx-auto mt-8 mb-16 px-6"
      >
        <div className="hero-content-anim inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contact ViyanInfo</span>
        </div>

        <h1 className="hero-content-anim text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          Let's Build Something{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Amazing Together
          </span>
        </h1>

        <p className="hero-content-anim text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
          Tell us about your project and goals. We respond to all inquiries
          within 24 business hours.
        </p>
      </section>

      {/* TWO COLUMN GRID SECTION */}
      <section className="container max-w-[1240px] mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT COLUMN: CONTACT DETAILS & SOCIALS */}
          <div className="lg:col-span-5 info-card-container flex flex-col gap-6">
            {/* Email (Purple) */}
            <div className="info-card-anim bg-white border border-slate-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#7B2FF7] shrink-0 border border-purple-100">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-xs font-display font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">
                  Email Address
                </h4>
                <a
                  href="mailto:hello@viyaninfo.com"
                  className="text-base font-bold text-slate-900 hover:text-[#7B2FF7] transition-colors"
                >
                  hello@viyaninfo.com
                </a>
                <p className="text-xs text-slate-500 mt-0.5">
                  For sales & general updates.
                </p>
              </div>
            </div>

            {/* Phone (Blue) */}
            <div className="info-card-anim bg-white border border-slate-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#3B82F6] shrink-0 border border-blue-100">
                <PhoneIcon size={18} />
              </div>
              <div>
                <h4 className="text-xs font-display font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">
                  Phone Number
                </h4>
                <a
                  href="tel:+916379723465"
                  className="text-base font-bold text-slate-900 hover:text-[#3B82F6] transition-colors"
                >
                  +91 6379723465
                </a>
                <p className="text-xs text-slate-500 mt-0.5">
                  Mon-Fri from 9am to 6pm.
                </p>
              </div>
            </div>

            {/* Location (Cyan) */}
            <div className="info-card-anim bg-white border border-slate-100 rounded-2xl p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-[#06B6D4] shrink-0 border border-cyan-100">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-xs font-display font-extrabold text-slate-400 uppercase tracking-widest mb-1.5">
                  Main Headquarters
                </h4>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  VIYAN Infotech, No : 168 B, PTC Nagar, Ikkadu, Tiruvallur -
                  602001
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Chennai, Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* Social Media (Gradient Purple) */}
            <div className="info-card-anim bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h4 className="text-xs font-display font-extrabold text-slate-400 uppercase tracking-widest mb-4">
                Connect With Us
              </h4>
              <div className="flex gap-3">
                {[
                  {
                    icon: <Linkedin className="w-4 h-4" />,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                  {
                    icon: <Github className="w-4 h-4" />,
                    href: "https://github.com",
                    label: "GitHub",
                  },
                  {
                    icon: <Instagram className="w-4 h-4" />,
                    href: "https://instagram.com",
                    label: "Instagram",
                  },
                  {
                    icon: <Facebook className="w-4 h-4" />,
                    href: "https://facebook.com",
                    label: "Facebook",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-slate-50 text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-[#7B2FF7] hover:to-[#9333EA] hover:shadow-[0_0_12px_rgba(123,47,247,0.35)] flex items-center justify-center border border-slate-100 hover:border-transparent transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MODERN FORM */}
          <div ref={formRef} className="lg:col-span-7">
            {isSuccess ? (
              <div className="bg-white border border-slate-100 p-10 sm:p-16 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg h-full min-h-[500px]">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-100">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-display font-extrabold text-slate-900 mb-3">
                  Message Transmitted!
                </h3>
                <p className="text-slate-500 text-sm max-w-sm leading-relaxed mb-8">
                  Thank you for submitting your project query. Our technical
                  lead will review your details and connect within 24 business
                  hours.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "",
                      budget: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-3 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-slate-100 p-8 sm:p-10 rounded-3xl shadow-sm flex flex-col gap-6"
              >
                <h3 className="text-xl font-display font-extrabold text-slate-900 pb-3 border-b border-slate-50">
                  Project Request Form
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold text-slate-700"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Rithick Nathan"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? "border-rose-500" : "border-slate-200"
                      } bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-rose-500">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold text-slate-700"
                    >
                      Company Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="ceo@viyaninfo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-rose-500" : "border-slate-200"
                      } bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-rose-500">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-bold text-slate-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800"
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="company"
                      className="text-xs font-bold text-slate-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      type="text"
                      placeholder="e.g. Acme Inc"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="service"
                      className="text-xs font-bold text-slate-700"
                    >
                      Service Type
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800 appearance-none"
                    >
                      <option value="">Select Service...</option>
                      <option value="Custom Software">
                        Custom Software Development
                      </option>
                      <option value="Web Applications">
                        Web Application Development
                      </option>
                      <option value="Mobile Applications">
                        Mobile Application Development
                      </option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Internship Programs">
                        Internship Programs
                      </option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="budget"
                      className="text-xs font-bold text-slate-700"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800 appearance-none"
                    >
                      <option value="">Select Budget Range...</option>
                      <option value="< $5k">Less than $5,000</option>
                      <option value="$5k - $15k">$5,000 - $15,000</option>
                      <option value="$15k - $50k">$15,000 - $50,000</option>
                      <option value="> $50k">More than $50,000</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-slate-700"
                  >
                    Project Requirements *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, scope, or timeline goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? "border-rose-500" : "border-slate-200"
                    } bg-slate-50/50 outline-none focus:bg-white focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 transition-all duration-300 text-sm text-slate-800 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-[10px] text-rose-500">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] hover:shadow-[0_0_15px_rgba(123,47,247,0.45)] hover:-translate-y-[1px] active:translate-y-0 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer mt-2"
                >
                  {isLoading ? (
                    <Loader2 className="animate-spin w-5 h-5 text-white" />
                  ) : (
                    "Transmit Query"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* MAP SECTION (NEUTRAL STYLING) */}
      <section className="container max-w-[1240px] mx-auto px-6 mb-24">
        <h3 className="text-xl font-display font-extrabold text-slate-900 mb-6">
          Office Location Map
        </h3>
        <div className="border border-slate-100 bg-white rounded-3xl p-3 shadow-sm overflow-hidden">
          <ContactMap />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        ref={faqRef}
        className="container max-w-[800px] mx-auto px-6 mb-24"
      >
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 text-center mb-10">
          Frequently Answered Queries
        </h3>

        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="faq-item-anim bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-800 hover:text-[#7B2FF7] transition-colors duration-200 outline-none cursor-pointer"
                >
                  <span className="text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-[#7B2FF7]" : ""
                    }`}
                  />
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FINAL CONSULTATION CTA BANNER */}
      <section ref={ctaRef} className="container max-w-[1240px] mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center flex flex-col items-center shadow-lg">
          <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />
          <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
            <CalendarDays className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-3">
            Book A Free Consultation Call
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed mb-8">
            Schedule a 1-on-1 strategy call with our architecture lead. We'll
            map your requirements, review technologies, and draft a clean scope
            outline.
          </p>

          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3.5 bg-[#7B2FF7] hover:bg-[#9333EA] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer">
              Schedule Free Call
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
