import { useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
  Linkedin,
  Github,
  Instagram,
  Facebook,
  ChevronDown,
  Clock,
} from "lucide-react";
import contactImg from "../assets/contact_img.webp";
import logo1 from "../assets/Logo image 1.svg";
import "./ContactPage.css";

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
    const ctx = gsap.context(() => {
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
      {/* ── HERO SECTION ─────────────────────────────── */}
      <section className="contact-hero">
        <div className="contact-overlay" />

        <div className="contact-container">
          {/* ── LEFT SIDE ────────────────────────────── */}
          <div className="contact-left">
            <div className="glass-card main-contact-card">
              <span className="small-tag">CONTACT US</span>

              <h1>
                Let's Build Something
                <span> Amazing Together</span>
              </h1>

              <p>
                Have a project idea, startup vision, or business requirement?
                Connect with our team and let's create scalable digital
                experiences together.
              </p>

              <div className="contact-info-grid">
                <div className="info-card">
                  <div className="icon-wrap">
                    <PhoneIcon size={18} />
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 6379723465</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrap">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p>admin@viyaninfo.com</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrap">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>Tiruvallur, Tamil Nadu</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="icon-wrap">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4>Working Hours</h4>
                    <p>Mon - Sat : 9AM - 7PM</p>
                  </div>
                </div>
              </div>

              {/* Social Row */}
              <div className="social-row">
                <h4>Connect With Us</h4>
                <div className="social-icons">
                  {[
                    {
                      icon: <Linkedin size={18} />,
                      href: "https://linkedin.com",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Github size={18} />,
                      href: "https://github.com",
                      label: "GitHub",
                    },
                    {
                      icon: <Instagram size={18} />,
                      href: "https://instagram.com",
                      label: "Instagram",
                    },
                    {
                      icon: <Facebook size={18} />,
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
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Card */}
            <div className="glass-card map-card">
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

          {/* ── RIGHT SIDE ───────────────────────────── */}
          <div className="contact-right">
            {/* Form Card */}
            {isSuccess ? (
              <div className="glass-card success-card">
                <div className="success-icon">
                  <CheckCircle2 size={32} />
                </div>
                <h3>Message Transmitted!</h3>
                <p>
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
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="glass-card form-card">
                <h2>Send Us a Message</h2>

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Rithick Nathan"
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
                        placeholder="ceo@viyaninfo.com"
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

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="send-btn"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* FAQ Card */}
            <div className="glass-card faq-card">
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
                          color: isOpen ? "#c4b5fd" : "rgba(255,255,255,0.4)",
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
            </div>
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
        <div
          className="relative z-10 w-[94%] md:w-[88%] max-w-[1450px] mx-auto mt-8 mb-6 rounded-[32px] p-8 md:p-[50px_60px]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow:
              "0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px] text-center md:text-left">
            {/* Column 1: Logo & Description */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/" className="block w-fit mb-6">
                <img
                  src={logo1}
                  alt="ViyanInfo"
                  className="h-10 w-auto object-contain select-none"
                />
              </Link>
              <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.82)] max-w-xs mb-8">
                Building scalable software, AI solutions, and digital products
                that help businesses grow faster and operate smarter.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                {[
                  {
                    icon: <Linkedin size={18} />,
                    href: "https://linkedin.com",
                  },
                  { icon: <Github size={18} />, href: "https://github.com" },
                  {
                    icon: <Instagram size={18} />,
                    href: "https://instagram.com",
                  },
                  {
                    icon: <Facebook size={18} />,
                    href: "https://facebook.com",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 22px rgba(168,85,247,0.45)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                      e.currentTarget.style.background =
                        "rgba(168, 85, 247, 0.4)";
                      e.currentTarget.style.borderColor =
                        "rgba(168, 85, 247, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.08)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.08)";
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Services
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Custom Software Development", path: "/services" },
                  { name: "Web Applications", path: "/services/websites" },
                  { name: "Mobile Applications", path: "/services/mobile" },
                  { name: "AI Solutions", path: "/services" },
                  { name: "UI/UX Design", path: "/services" },
                  { name: "Internship Programs", path: "/internship" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.88)] hover:text-[#c084fc] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Resources
              </span>
              <ul className="space-y-4">
                {[
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Case Studies", path: "/portfolio" },
                  { name: "Careers", path: "/careers" },
                  { name: "Blog", path: "/blog" },
                  { name: "Technology Stack", path: "/tech-stack" },
                  { name: "Contact", path: "/contact" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="text-[rgba(255,255,255,0.88)] hover:text-[#c084fc] hover:translate-x-1 transition-all duration-250 text-sm inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div className="flex flex-col items-center md:items-start text-[rgba(255,255,255,0.82)]">
              <span className="text-white font-bold text-sm uppercase tracking-[1px] mb-6 block relative">
                Contact
              </span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    admin@viyaninfo.com
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    +91 6379723465
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    Tiruvallur, Tamil Nadu
                  </span>
                </li>
                <li className="flex items-center gap-3 justify-center md:justify-start group cursor-pointer">
                  <div className="text-[rgba(255,255,255,0.82)] group-hover:text-[#c084fc] transition-colors">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <span className="text-[rgba(255,255,255,0.82)] group-hover:text-white text-sm transition-colors">
                    www.viyaninfo.com
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="h-px bg-[rgba(255,255,255,0.12)] w-full mb-6 mt-12" />

          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-[rgba(255,255,255,0.62)] pb-8">
            <p>© 2026 ViyanInfo. All rights reserved.</p>

            <div className="flex flex-wrap gap-5 justify-center">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/about" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
