import { useState, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone as PhoneIcon,
  MapPin,
  Loader2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Send,
} from "lucide-react";
import contactImg from "../assets/contact_img.webp";
import "./ContactPage.css";
import { LiquidFooter } from "../components/LiquidFooter";
import { LiquidGlassCard } from "../components/LiquidGlassCard";

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
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      if (!ctaRef.current) return;
      // CTA reveal on scroll
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
    <div ref={containerRef} className="contact-page">
      {/* BACKGROUND EFFECTS */}
      <div className="cyber-grid"></div>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="bg-line line-1"></div>
      <div className="bg-line line-2"></div>

      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-left">
          <div className="hero-badge">CONTACT VIYAN INFO TECH</div>

          <h1>
            Let's Build Something
            <span> Incredible Together</span>
          </h1>

          <p>
            Have an idea, startup, or business requirement? Our expert team is
            ready to transform your vision into powerful digital solutions.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() =>
                document
                  .querySelector(".split-contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Project
            </button>
            <button
              className="secondary-btn"
              onClick={() =>
                document
                  .querySelector(".split-contact-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Schedule Call
            </button>
          </div>
        </div>
      </section>

      {/* ── SPLIT FORM SECTION ───────────────────────── */}
      <section className="split-contact-section">
        {/* LEFT: Info Cards + Map */}
        <div className="split-left">
          <LiquidGlassCard accent="#8b5cf6" className="liquid-glass-light hero-contact-card">
            <h3>Connect With Us</h3>

            <div className="contact-item">
              <Mail size={18} />
              <span>admin@viyaninfo.com</span>
            </div>

            <div className="contact-item">
              <PhoneIcon size={18} />
              <span>+91 6379723465</span>
            </div>

            <div className="contact-item">
              <MapPin size={18} />
              <span>Tiruvallur, Tamil Nadu</span>
            </div>

            <div className="contact-item">
              <Clock size={18} />
              <span>Mon - Sat : 9AM - 7PM</span>
            </div>
          </LiquidGlassCard>

          {/* Google Map — preserved exactly */}
          <div className="map-card liquid-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.5993636899964!2d79.91710244433159!3d13.14986128051883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a529002e663fce9%3A0xbc828996ba34e68c!2s1353%2C%20Chinnaekkadu%2C%20Ikkadu%2C%20Tamil%20Nadu%20602021!5e0!3m2!1sen!2sin!4v1782392522728!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>

        {/* RIGHT: Form + FAQ */}
        <div className="split-right">
          {/* Success State */}
          {isSuccess ? (
            <LiquidGlassCard accent="#10b981" className="liquid-glass-light success-card">
              <div className="success-icon">
                <CheckCircle2 size={32} />
              </div>
              <h3>Message Transmitted!</h3>
              <p>
                Thank you for submitting your project query. Our technical lead
                will review your details and connect within 24 business hours.
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
              >
                Send Another Message
              </button>
            </LiquidGlassCard>
          ) : (
            <LiquidGlassCard accent="#8b5cf6" className="liquid-glass-light contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us A Message</h2>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error-border" : ""}
                  />
                  {errors.name && (
                    <span className="error-text">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Company Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error-border" : ""}
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    id="company"
                    type="text"
                    placeholder="e.g. Acme Inc"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Type</label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
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

                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget</label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select Budget Range...</option>
                    <option value="< $5k">Less than $5,000</option>
                    <option value="$5k - $15k">$5,000 - $15,000</option>
                    <option value="$15k - $50k">$15,000 - $50,000</option>
                    <option value="> $50k">More than $50,000</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Requirements *</label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project requirements, scope, or timeline goals..."
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error-border" : ""}
                />
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
              </div>

              <button type="submit" disabled={isLoading} className="send-btn">
                {isLoading ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
            </LiquidGlassCard>
          )}
        </div>
      </section>

      {/* ── FULL WIDTH FAQ ACCORDION SECTION ───────────── */}
      <section className="faq-accordion-section">
        <LiquidGlassCard accent="#7c3aed" className="liquid-glass-light faq-card-accordion">
          <h2>Frequently Asked Questions</h2>

          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div key={idx} className="faq-item">
                <button onClick={() => setActiveFaq(isOpen ? null : idx)}>
                  <span>{item.question}</span>
                  <ChevronDown
                    size={16}
                    style={{
                      transition: "transform 0.3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: isOpen ? "#7c3aed" : "#94a3b8",
                      flexShrink: 0,
                    }}
                  />
                </button>

                <div className={`faq-answer ${isOpen ? "open" : "closed"}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </LiquidGlassCard>
      </section>

      {/* ── FAQ CARDS SECTION ────────────────────────── */}
      <section className="faq-section">
        <div className="faq-title">
          <h2>Why Choose Viyan Info Tech?</h2>
        </div>

        <div className="faq-grid">
          <div className="faq-card liquid-card">
            <h3>Fast & Reliable Delivery</h3>
            <p>
              We deliver projects on time with agile sprints and continuous
              feedback loops for maximum quality.
            </p>
          </div>

          <div className="faq-card liquid-card">
            <h3>Full Post-Launch Support</h3>
            <p>
              Every product includes 30 days of complimentary support plus
              optional SLA retainer plans.
            </p>
          </div>

          <div className="faq-card liquid-card">
            <h3>Dedicated Developer Teams</h3>
            <p>
              Hire skilled developers for your project with transparent pricing
              and direct communication.
            </p>
          </div>
        </div>
      </section>

      {/* ── COMBINED CTA + FOOTER SECTION ────────────── */}
      <section
        ref={ctaRef}
        className="relative w-full overflow-hidden rounded-[32px_32px_0_0] mt-24"
        style={{
          minHeight: "550px",
          paddingTop: "40px",
          paddingBottom: "20px",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactImg}
            alt="Contact Background"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* CINEMATIC OVERLAY */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10, 10, 30, 0.35), rgba(12, 12, 40, 0.65), rgba(5, 5, 20, 0.92))",
          }}
        />

        {/* VIGNETTE EFFECT */}
        <div className="absolute inset-0 z-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />

        {/* Ambient Glows */}
        <div className="absolute top-[10%] left-1/4 w-[500px] h-[300px] bg-[#7c3aed]/10 blur-[130px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-[35%] right-1/4 w-[400px] h-[250px] bg-[#6366f1]/8 blur-[110px] rounded-full pointer-events-none z-0" />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full pointer-events-none z-[1]"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 50}%`,
              background:
                i % 2 === 0
                  ? "rgba(168, 85, 247, 0.4)"
                  : "rgba(99, 102, 241, 0.35)",
              boxShadow: "0 0 10px rgba(168, 85, 247, 0.3)",
            }}
            animate={{
              y: [0, -(25 + Math.random() * 30), 0],
              x: [0, (Math.random() - 0.5) * 20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}

        {/* BOTTOM AREA: GLASSMORPHISM FOOTER */}
        <LiquidFooter />
      </section>
    </div>
  );
}
