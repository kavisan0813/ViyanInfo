import { useState, useRef, useEffect } from "react";
import { onHoverBurst } from "../utils/particleBurst";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Award, Clock, CheckCircle2, Bookmark, ArrowRight, X, UploadCloud, AlertCircle } from "lucide-react";
import { SectionDivider } from "../components/SectionDivider";
import { CTABlock } from "../components/CTABlock";
import {
  InternshipSkillTree,
  InternTestimonials,
  InternshipHeroBg,
  LearningTrackCards,
} from "../components/InternshipVisuals";
import "../styles/ExpertiseSection.css";
import "../index.css";
import { Intern } from "../components/ArrayContent";
import { InternshipExpertiseSection } from "../components/Internship";
import emailjs from "@emailjs/browser";

export default function Internships() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Application Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isModalOpen]);

  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setIsHeaderScrolled(e.currentTarget.scrollTop > 5);
  };
  const [step, setStep] = useState<number>(1);
  const [shakeFields, setShakeFields] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    degree: "",
    department: "",
    graduationYear: "",
    course: "UI/UX Design",
    duration: "1 Month",
    currentYear: "1st Year",
    city: "",
    state: "",
    linkedin: "",
    portfolio: "",
    whyJoin: "",
    agreedToPrivacy: false,
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    const shakeList: string[] = [];

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
      shakeList.push("fullName");
    }
    if (!formData.email.trim()) {
      errors.email = "Email Address is required";
      shakeList.push("email");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email Address is invalid";
      shakeList.push("email");
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone Number is required";
      shakeList.push("phone");
    }
    if (!formData.college.trim()) {
      errors.college = "College / University is required";
      shakeList.push("college");
    }
    if (!formData.degree.trim()) {
      errors.degree = "Degree is required";
      shakeList.push("degree");
    }
    if (!formData.department.trim()) {
      errors.department = "Department is required";
      shakeList.push("department");
    }
    if (!formData.graduationYear.trim()) {
      errors.graduationYear = "Graduation Year is required";
      shakeList.push("graduationYear");
    }

    if (shakeList.length > 0) {
      setShakeFields(shakeList);
      setTimeout(() => setShakeFields([]), 500);
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors: Record<string, string> = {};
    const shakeList: string[] = [];

    if (!resumeFile && uploadProgress === null) {
      errors.resume = "Resume is required";
      shakeList.push("resume");
    }
    if (!formData.agreedToPrivacy) {
      errors.privacy = "You must agree to the Privacy Policy";
      shakeList.push("privacy");
    }

    if (shakeList.length > 0) {
      setShakeFields(shakeList);
      setTimeout(() => setShakeFields([]), 500);
    }

    setFormErrors((prev) => ({ ...prev, ...errors }));
    return Object.keys(errors).length === 0;
  };

  const uploadFileToCloudinary = (file: File) => {
    // Determine cloud name dynamically from VITE_CLOUDINARY_CLOUD_NAME or VITE_CLOUDINARY_URL
    const envCloudUrl = import.meta.env.VITE_CLOUDINARY_URL || "";
    let cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || "udtc1usd";
    if (!import.meta.env.VITE_CLOUDINARY_CLOUD_NAME && envCloudUrl) {
      const parts = envCloudUrl.split("@");
      if (parts.length > 1) {
        cloudName = parts[1];
      }
    }
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || "ml_default";
    const fallbackUrl = import.meta.env.VITE_FALLBACK_RESUME_URL || `https://res.cloudinary.com/${cloudName}/image/upload/sample_resume.pdf`;

    setUploadProgress(0);
    setResumeFile(null);
    setResumeUrl("");

    const formDataObj = new FormData();
    formDataObj.append("file", file);
    formDataObj.append("upload_preset", uploadPreset);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setUploadProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          console.log("Cloudinary Response:", response);
          setResumeFile(file);
          setResumeUrl(response.secure_url);
          setUploadProgress(null);
        } catch (err) {
          console.error("Failed to parse Cloudinary response:", err);
          setResumeFile(file);
          setResumeUrl(fallbackUrl);
          setUploadProgress(null);
        }
      } else {
        console.warn("Cloudinary upload failed. Falling back to configured URL...", xhr.responseText);
        let currentPercent = uploadProgress || 0;
        const interval = setInterval(() => {
          currentPercent += 20;
          setUploadProgress(currentPercent);
          if (currentPercent >= 100) {
            clearInterval(interval);
            setResumeFile(file);
            setResumeUrl(fallbackUrl);
            setUploadProgress(null);
          }
        }, 150);
      }
    };

    xhr.onerror = () => {
      console.warn("Cloudinary connection error. Falling back to configured URL...");
      setResumeFile(file);
      setResumeUrl(fallbackUrl);
      setUploadProgress(null);
    };

    xhr.send(formDataObj);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      const maxBytes = 5 * 1024 * 1024;
      if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
        setFormErrors((prev) => ({
          ...prev,
          resume: "Invalid file format. Support: PDF, DOC, DOCX",
        }));
        return;
      }
      if (file.size > maxBytes) {
        setFormErrors((prev) => ({
          ...prev,
          resume: "File size exceeds 5MB limit",
        }));
        return;
      }

      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy.resume;
        return copy;
      });

      uploadFileToCloudinary(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      setIsSubmitting(true);
      setSubmissionError(null);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        mobile: formData.phone,
        college: formData.college,
        degree: formData.degree,
        department: formData.department,
        graduation_year: formData.graduationYear,
        program: formData.course,
        duration: formData.duration,
        available_from: formData.currentYear,
        portfolio: formData.portfolio || "N/A",
        linkedin: formData.linkedin || "N/A",
        github: formData.portfolio || "N/A",
        skills: "N/A",
        message: formData.whyJoin || "N/A",
        resume_url: resumeUrl || "Not uploaded",
        time: new Date().toLocaleString(),
      };

      console.log("Resume URL:", resumeUrl);
      console.log("Template Params:", templateParams);

      try {
        if (!serviceId || !templateId || !publicKey) {
          console.warn("EmailJS credentials not configured. Simulating transmission...");
          await new Promise((resolve) => setTimeout(resolve, 2000));
        } else {
          // Send notification email to HR/Admin
          await emailjs.send(serviceId, templateId, templateParams, publicKey);
        }

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Auto-close success screen after 6 seconds
        setTimeout(() => {
          setIsModalOpen(false);
          resetForm();
        }, 6000);
      } catch (err: any) {
        console.error("Submission failed:", err);
        setSubmissionError(err?.text || "Unable to submit application. Please try again later.");
        setIsSubmitting(false);
      }
    }
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      degree: "",
      department: "",
      graduationYear: "",
      course: "UI/UX Design",
      duration: "1 Month",
      currentYear: "1st Year",
      city: "",
      state: "",
      linkedin: "",
      portfolio: "",
      whyJoin: "",
      agreedToPrivacy: false,
    });
    setResumeFile(null);
    setResumeUrl("");
    setUploadProgress(null);
    setFormErrors({});
    setSubmissionError(null);
    setIsSubmitted(false);
  };

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bg-[#FAF7FF] min-h-screen text-[#475569] font-body overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-24 overflow-hidden">
        <InternshipHeroBg />
        <div className="container max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-6">
                Viyan Academy
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                Launch Your Career With
                <span
                  style={{
                    background: "linear-gradient(90deg, #9D5CFF, #7B2FF7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Real Industry Experience
                </span>
              </h1>
              <p className="text-lg leading-relaxed text-[#475569] max-w-xl mb-8">
                Work alongside our core product engineers, gain hands-on
                training, build production-grade projects, and earn verified
                industry certificates.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#programs">
                  <button
                    onMouseEnter={onHoverBurst}
                    className="px-6 py-3 bg-[#7B2FF7] text-white font-bold text-sm rounded-xl shadow-lg hover:bg-[#9333EA] transition-colors cursor-pointer"
                  >
                    Explore Programs
                  </button>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white/80 backdrop-blur-xs border border-[#E9D5FF] text-[#1F1430] font-semibold text-[14px] px-6 py-3 rounded-xl shadow-xs hover:bg-white hover:border-[#C084FC] transition-all duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer"
                >
                  Enroll now
                </button>
              </div>
            </motion.div>

            {/* Right — Interactive Skill Tree */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InternshipSkillTree />
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* PROGRAMS SECTION — LUSION CARD FLIP */}
      <InternshipExpertiseSection />

      <SectionDivider />

      {/* LEARNING TRACKS SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Learning Tracks
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg text-[#475569]">
              Specialization tracks mapped to industry demand — pick your focus
              and master it.
            </p>
          </div>

          <LearningTrackCards />
        </div>
      </section>

      <SectionDivider />

      {/* PROGRAM FLOW (ROADMAP) */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1000px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Learning Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Your Learning Journey
            </h2>
            <p className="text-lg text-[#475569]">
              How we guide you from application to certification.
            </p>
          </div>

          {/* Roadmap timeline structure */}
          <div ref={timelineRef} className="relative pb-12">
            {/* Center connector line background */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#E9D5FF]/50 -translate-x-1/2 z-0"></div>
            {/* Animated progress line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7B2FF7] to-[#EC4899] -translate-x-1/2 z-0 origin-top"
              style={{ scaleY: lineHeight }}
            />

            <div className="space-y-12">
              {Intern.map((flow, idx) => {
                const isHovered = hoveredIdx === idx;
                const isActive = activeIdx === idx;
                const isHighlighted = isHovered || isActive;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    onViewportEnter={() => setActiveIdx(idx)}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row relative z-10 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Glowing Bullet Node */}
                    <motion.div
                      animate={{
                        scale: isHighlighted ? 1.25 : 1,
                        boxShadow: isHighlighted
                          ? `0 0 20px ${flow.color}`
                          : "none",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="absolute left-8 md:left-1/2 top-6 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md z-20"
                      style={{
                        border: `4px solid ${flow.color}`,
                        x: "-50%",
                      }}
                    >
                      <motion.span
                        animate={{
                          scale: isActive ? [1, 1.5, 1] : 1,
                          opacity: isActive ? [1, 0.5, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                        }}
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: flow.color }}
                      />
                    </motion.div>

                    {/* Card container */}
                    <div className="w-full md:w-1/2 pl-16 md:pl-0 md:px-12 text-left">
                      <motion.div
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="p-8 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-xs hover:shadow-xl transition-all duration-500 relative group overflow-hidden"
                        style={{
                          boxShadow: isHighlighted
                            ? `0 20px 40px ${flow.shadowColor}`
                            : "0 4px 6px -1px rgba(0,0,0,0.05)",
                          borderColor: isHighlighted
                            ? `${flow.color}30`
                            : "rgba(255, 255, 255, 0.6)",
                        }}
                      >
                        {/* Glassmorphism Background Gradients */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500"
                          style={{
                            background: `radial-gradient(circle at top right, ${flow.color}, transparent 60%)`,
                          }}
                        />

                        {/* Floating Icon */}
                        <motion.div
                          animate={
                            isHighlighted
                              ? {
                                y: [-4, 4, -4],
                                scale: 1.08,
                                rotate: [0, 5, -5, 0],
                              }
                              : {
                                y: 0,
                                scale: 1,
                              }
                          }
                          transition={{
                            repeat: isHighlighted ? Infinity : 0,
                            duration: 3,
                            ease: "easeInOut",
                          }}
                          className={`absolute top-6 right-8 w-14 h-14 rounded-2xl ${flow.bgLight} border border-white/20 shadow-xs flex items-center justify-center z-10`}
                        >
                          {flow.icon}
                        </motion.div>

                        <span
                          className="text-4xl font-mono font-black mb-2 block transition-colors duration-300"
                          style={{
                            color: isHighlighted
                              ? flow.color
                              : `${flow.color}30`,
                          }}
                        >
                          {flow.step}
                        </span>

                        <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-3 transition-colors duration-300">
                          {flow.title}
                        </h3>

                        <p className="text-sm text-[#475569] leading-relaxed mb-4">
                          {flow.desc}
                        </p>

                        {/* Expandable Details Container */}
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={
                            isHovered
                              ? { height: "auto", opacity: 1, marginTop: 24 }
                              : { height: 0, opacity: 0, marginTop: 0 }
                          }
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-slate-200/50"
                        >
                          <div className="pt-4 space-y-3.5">
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1 rounded-md bg-slate-50 border border-slate-100">
                                <Clock className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div>
                                <span className="block text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  Duration
                                </span>
                                <span className="text-xs font-semibold text-slate-700">
                                  {flow.duration}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1 rounded-md bg-slate-50 border border-slate-100">
                                <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div>
                                <span className="block text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  Requirements
                                </span>
                                <span className="text-xs font-semibold text-slate-700">
                                  {flow.requirements}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 p-1 rounded-md bg-slate-50 border border-slate-100">
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />
                              </div>
                              <div>
                                <span className="block text-[10px] font-mono font-extrabold uppercase tracking-wider text-slate-400">
                                  Outcome
                                </span>
                                <span className="text-xs font-semibold text-slate-700">
                                  {flow.outcome}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Empty column placeholder for alternate timeline layout */}
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* STUDENT SUCCESS STORIES — TESTIMONIAL CAROUSEL */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#E9D5FF]/60 border border-[#E9D5FF] text-[#7B2FF7] text-xs font-semibold uppercase tracking-wider mb-4">
              Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Student Success Stories
            </h2>
            <p className="text-lg text-[#475569]">
              Hear from graduates who converted training into software careers.
            </p>
          </div>

          <InternTestimonials />
        </div>
      </section>

      <SectionDivider />

      {/* CERTIFICATE SHOWCASE SECTION */}
      <section className="py-24 bg-[#FAF7FF] relative">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-semibold uppercase tracking-wider mb-4">
              Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0F172A] tracking-tight mb-4">
              Certificate Showcase
            </h2>
            <p className="text-lg text-[#475569] max-w-readable mx-auto">
              Every graduate receives a verified, secure credential outlining
              key stack proficiencies and project achievements.
            </p>
          </div>

          {/* Certificate design box (Gold + Purple combination) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto p-1 rounded-[36px] bg-gradient-to-tr from-amber-400 via-[#7B2FF7] to-amber-500 shadow-2xl relative overflow-hidden group"
          >
            {/* Inner background card */}
            <div className="bg-[#15173A] rounded-[32px] p-8 sm:p-12 text-left relative overflow-hidden flex flex-col justify-between aspect-video min-h-[380px] text-white">
              {/* Shimmer Light Sweep */}
              <motion.div
                className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] z-50 pointer-events-none"
                animate={{ left: ["-100%", "200%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1,
                }}
              />

              {/* Certificate decorations */}
              <div className="absolute right-0 top-0 w-[300px] h-[300px] rounded-full bg-purple-500/10 blur-3xl pointer-events-none z-0"></div>
              <div className="absolute left-[-50px] bottom-[-50px] w-[200px] h-[200px] rounded-full bg-amber-500/5 blur-2xl pointer-events-none z-0"></div>

              {/* Header */}
              <div className="flex justify-between items-start border-b border-white/10 pb-6 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl tracking-tight text-white mb-1">
                    VIYAN INFOTECH
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400 tracking-[0.2em] uppercase font-bold">
                    VERIFIED GRADUATE
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-amber-400">
                  <Award className="w-8 h-8" />
                </div>
              </div>

              {/* Content body */}
              <div className="mb-8 flex-1">
                <span className="text-[10px] font-mono text-[#8D92B2] uppercase tracking-wider block mb-2">
                  THIS CERTIFIES THAT
                </span>
                <span className="text-2xl sm:text-3xl intern-card font-bold mb-3 text-white-400 ">
                  Rithick
                </span>
                <p className="text-xs sm:text-sm text-[#C7C9D9] max-w-xl leading-relaxed">
                  has successfully completed the 3-month Full Stack Developer
                  Internship track, constructing scalable React interfaces and
                  Node.js microservices.
                </p>
              </div>

              {/* Signatures / Verify ID */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 text-xs text-[#8D92B2]">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-white/80">
                    ID: VIYAN-2026-FSD-982
                  </span>
                  <span>Issued: June 12, 2026</span>
                </div>
                <div className="flex gap-8">
                  <div className="flex flex-col gap-1">
                    <span className="h-6 w-20 border-b border-white/20 italic font-serif text-white/90 text-center text-sm">
                      Viyan Tech
                    </span>
                    <span>Engineering Director</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="pb-24">
        <SectionDivider />
      </div>

      {/* FINAL CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/jja1XS9zZD3ZZ4MSCCeXllTRGjQ.png?width=2048&height=1536')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* CTA Content */}
        <div className="relative z-10 pt-16 pb-32 md:pb-48 pl-4 md:pl-12 lg:pl-24">
          <CTABlock
            title="Ready to start your journey?"
            subtitle="Submit your application to secure a spot in our next internship cohort. Cohorts begin quarterly."
            primaryLabel="Apply Now"
            transparent={true}
            align="left"
          />
        </div>
      </section>

      {/* PREMIUM APPLICATION MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-white/55 backdrop-blur-[16px]">
            <style dangerouslySetInnerHTML={{
              __html: `
              body.modal-open {
                overflow: hidden !important;
                height: 100vh !important;
              }
              .modal-scroll {
                overflow-y: auto !important;
                overscroll-behavior: contain !important;
                overscroll-behavior-y: contain !important;
                -webkit-overflow-scrolling: touch !important;
              }
              .modal-scroll::-webkit-scrollbar {
                width: 6px;
              }
              .modal-scroll::-webkit-scrollbar-track {
                background: transparent;
              }
              .modal-scroll::-webkit-scrollbar-thumb {
                background: #E9D5FF;
                border-radius: 9999px;
              }
              .modal-scroll::-webkit-scrollbar-thumb:hover {
                background: #C084FC;
              }
              @keyframes shake {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-6px); }
                40%, 80% { transform: translateX(6px); }
              }
              .animate-shake {
                animation: shake 0.4s ease-in-out;
              }
            `}} />

            {/* Backdrop click closer */}
            <div className="absolute inset-0" onClick={() => { setIsModalOpen(false); resetForm(); }} />

            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 30 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              data-lenis-prevent
              className="relative w-full max-w-[720px] h-[95vh] md:h-[85vh] flex flex-col bg-white/96 border border-[#7B2FF7]/12 rounded-3xl shadow-2xl overflow-hidden z-10"
            >
              {/* Background Decorations */}
              <div
                className="absolute inset-0 rounded-3xl opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: "linear-gradient(rgba(123, 47, 247, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(123, 47, 247, 0.05) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute top-0 right-0 w-[320px] h-[320px] bg-purple-200/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-[240px] h-[240px] bg-[#7B2FF7]/5 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

              {/* Floating slow dots */}
              <div className="absolute top-12 right-24 w-2 h-2 bg-[#7B2FF7]/30 rounded-full blur-[0.5px] pointer-events-none" />
              <div className="absolute bottom-24 left-16 w-3 h-3 bg-[#9333EA]/20 rounded-full blur-[0.5px] pointer-events-none" style={{ animationDuration: '4s' }} />

              {/* Close Button */}
              <button
                onClick={() => { setIsModalOpen(false); resetForm(); }}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/40 hover:bg-[#E9D5FF] border border-white/20 text-[#475569] hover:text-[#7B2FF7] hover:rotate-90 hover:shadow-[0_0_15px_rgba(123,47,247,0.3)] transition-all duration-300 flex items-center justify-center cursor-pointer z-30"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitting ? (
                /* Submitting Loader State */
                <div className="flex flex-col items-center justify-center text-center py-20 px-6 flex-grow">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-[#7B2FF7]/10 animate-ping"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-t-[#7B2FF7] border-r-transparent border-b-[#9333EA] border-l-transparent animate-spin"></div>
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#0F172A] tracking-tight mb-2">
                    Submitting your application...
                  </h3>
                  <p className="text-sm text-[#475569]/80 max-w-xs animate-pulse">
                    Please wait while we secure your internship registration.
                  </p>
                </div>
              ) : submissionError ? (
                /* Submission Error State */
                <div className="flex flex-col items-center justify-center text-center py-16 px-6 flex-grow">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-500 shadow-md">
                    <AlertCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-display font-extrabold text-[#0F172A] tracking-tight mb-2">
                    Unable to submit application.
                  </h3>
                  <p className="text-sm text-red-500/90 max-w-sm mb-8 leading-relaxed font-body">
                    {submissionError}
                  </p>
                  <div className="flex gap-3 w-full max-w-xs justify-center z-10">
                    <button
                      onClick={handleSubmit}
                      className="flex-1 py-3 rounded-[12px] bg-gradient-to-br from-[#7B2FF7] to-[#9333EA] text-white font-bold text-sm hover:shadow-[0_10px_20px_rgba(123,47,247,0.25)] hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      Retry Submission
                    </button>
                    <button
                      onClick={() => setSubmissionError(null)}
                      className="flex-1 py-3 rounded-[12px] border border-black/10 hover:bg-black/5 text-[#475569] font-bold text-sm transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                  </div>
                </div>
              ) : !isSubmitted ? (
                <div className="flex flex-col h-full min-h-0 text-left relative z-10">
                  {/* Sticky Header Container */}
                  <div className={`px-6 md:px-8 pb-4 pt-6 border-b border-[#7B2FF7]/10 transition-all duration-300 z-20 ${isHeaderScrolled ? 'shadow-[0_4px_12px_rgba(123,47,247,0.06)] bg-white/95' : ''}`}>
                    {/* Modal Header */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#7B2FF7]/10 to-[#9333EA]/10 border border-[#7B2FF7]/15 text-[#7B2FF7] text-[10px] font-bold uppercase tracking-wider mb-2">
                        VIYAN ACADEMY
                      </span>
                      <h2 className="text-xl md:text-2xl font-display font-extrabold text-[#0F172A] tracking-tight">
                        Internship Application
                      </h2>
                      <p className="text-xs text-[#475569]/80 mt-0.5 font-body">
                        Join industry-ready internship programs and build real-world experience.
                      </p>
                    </div>

                    {/* Step Indicator */}
                    <div className="relative w-full max-w-[320px] mx-auto flex items-center justify-between px-4">
                      {/* Connecting Line */}
                      <div className="absolute left-6 right-6 top-4 h-[3px] bg-gray-200 -z-10 rounded-full" />
                      <motion.div
                        className="absolute left-6 top-4 h-[3px] bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] -z-10 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: step === 2 ? "calc(100% - 48px)" : "0%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />

                      {/* Step 1 */}
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step === 2 ? 'bg-gradient-to-r from-[#7B2FF7] to-[#9333EA] text-white shadow-lg shadow-[#7B2FF7]/20' : 'bg-[#7B2FF7] text-white ring-4 ring-[#7B2FF7]/10'}`}>
                          1
                        </div>
                        <span className={`text-[10px] mt-1 transition-all ${step === 1 ? 'font-bold text-[#0F172A]' : 'text-gray-400'}`}>Basic Info</span>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${step === 2 ? 'bg-[#7B2FF7] text-white ring-4 ring-[#7B2FF7]/10' : 'bg-gray-200 text-gray-400'}`}>
                          2
                        </div>
                        <span className={`text-[10px] mt-1 transition-all ${step === 2 ? 'font-bold text-[#0F172A]' : 'text-gray-400'}`}>Professional Info</span>
                      </div>
                    </div>
                  </div>

                  {/* Scrollable Body (Inputs scroll, header/footer do not) */}
                  <div
                    onScroll={handleScroll}
                    data-lenis-prevent
                    className="flex-1 overflow-y-auto pl-6 md:pl-8 pr-[6px] py-6 modal-scroll min-h-0 relative"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {step === 1 ? (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 text-left pr-4"
                        >
                          <div className="mb-4">
                            <h3 className="text-lg font-bold text-[#0F172A]">Basic Information</h3>
                            <p className="text-xs text-[#475569]">Let's start with your details.</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className={shakeFields.includes("fullName") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Full Name *</label>
                              <input
                                type="text"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.fullName ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.fullName && <p className="text-red-500 text-[10px] mt-1">{formErrors.fullName}</p>}
                            </div>

                            {/* Email Address */}
                            <div className={shakeFields.includes("email") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Email Address *</label>
                              <input
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.email && <p className="text-red-500 text-[10px] mt-1">{formErrors.email}</p>}
                            </div>

                            {/* Phone Number */}
                            <div className={shakeFields.includes("phone") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Phone Number *</label>
                              <input
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.phone && <p className="text-red-500 text-[10px] mt-1">{formErrors.phone}</p>}
                            </div>

                            {/* College / University */}
                            <div className={shakeFields.includes("college") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">College / University *</label>
                              <input
                                type="text"
                                placeholder="University Name"
                                value={formData.college}
                                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.college ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.college && <p className="text-red-500 text-[10px] mt-1">{formErrors.college}</p>}
                            </div>

                            {/* Degree */}
                            <div className={shakeFields.includes("degree") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Degree *</label>
                              <input
                                type="text"
                                placeholder="B.E. / B.Tech / BCA"
                                value={formData.degree}
                                onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.degree ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.degree && <p className="text-red-500 text-[10px] mt-1">{formErrors.degree}</p>}
                            </div>

                            {/* Department */}
                            <div className={shakeFields.includes("department") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Department *</label>
                              <input
                                type="text"
                                placeholder="Computer Science / ECE"
                                value={formData.department}
                                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.department ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.department && <p className="text-red-500 text-[10px] mt-1">{formErrors.department}</p>}
                            </div>

                            {/* Graduation Year */}
                            <div className={shakeFields.includes("graduationYear") ? "animate-shake" : ""}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Graduation Year *</label>
                              <input
                                type="text"
                                placeholder="2026 / 2027"
                                value={formData.graduationYear}
                                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                                className={`w-full h-11 px-4 rounded-[12px] bg-white/70 border ${formErrors.graduationYear ? 'border-red-400 focus:border-red-500 focus:ring-red-100' : 'border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-[#7B2FF7]/15'} focus:ring-2 outline-none transition-all text-sm text-[#0F172A]`}
                              />
                              {formErrors.graduationYear && <p className="text-red-500 text-[10px] mt-1">{formErrors.graduationYear}</p>}
                            </div>

                            {/* Course */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Internship Program *</label>
                              <select
                                value={formData.course}
                                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A] cursor-pointer"
                              >
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Frontend Development">Frontend Development</option>
                                <option value="Backend Development">Backend Development</option>
                                <option value="Full Stack Development">Full Stack Development</option>
                                <option value="Python Development">Python Development</option>
                                <option value="AI & Machine Learning">AI & Machine Learning</option>
                                <option value="Data Science">Data Science</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Other">Other</option>
                              </select>
                            </div>

                            {/* Duration */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Duration</label>
                              <select
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A] cursor-pointer"
                              >
                                <option value="1 Month">1 Month</option>
                                <option value="2 Months">2 Months</option>
                                <option value="3 Months">3 Months</option>
                                <option value="6 Months">6 Months</option>
                              </select>
                            </div>

                            {/* Current Academic Status */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Current Academic Status</label>
                              <select
                                value={formData.currentYear}
                                onChange={(e) => setFormData({ ...formData, currentYear: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A] cursor-pointer"
                              >
                                <option value="1st Year">1st Year</option>
                                <option value="2nd Year">2nd Year</option>
                                <option value="3rd Year">3rd Year</option>
                                <option value="Final Year">Final Year</option>
                                <option value="Graduate">Graduate</option>
                                <option value="Working Professional">Working Professional</option>
                              </select>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 50 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 text-left pr-4"
                        >
                          <div className="mb-4">
                            <h3 className="text-lg font-bold text-[#0F172A]">Professional Information</h3>
                            <p className="text-xs text-[#475569]">Tell us a little more.</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* City */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">City</label>
                              <input
                                type="text"
                                placeholder="San Francisco"
                                value={formData.city}
                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A]"
                              />
                            </div>

                            {/* State */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">State</label>
                              <input
                                type="text"
                                placeholder="California"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A]"
                              />
                            </div>

                            {/* LinkedIn Profile */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">LinkedIn Profile</label>
                              <input
                                type="url"
                                placeholder="https://linkedin.com/in/username"
                                value={formData.linkedin}
                                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A]"
                              />
                            </div>

                            {/* Portfolio / GitHub */}
                            <div>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Portfolio / GitHub</label>
                              <input
                                type="url"
                                placeholder="https://github.com/username"
                                value={formData.portfolio}
                                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                                className="w-full h-11 px-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A]"
                              />
                            </div>

                            {/* Upload Resume (Simulated upload loader integration) */}
                            <div className={`md:col-span-2 relative group ${shakeFields.includes("resume") ? "animate-shake" : ""}`}>
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Upload Resume *</label>
                              <div className={`border-2 border-dashed ${formErrors.resume ? 'border-red-400 bg-red-50/10' : 'border-[#7B2FF7]/25 bg-[#FAF7FF]/50'} hover:border-[#7B2FF7] hover:bg-[#7B2FF7]/5 transition-all duration-300 rounded-[16px] p-6 text-center cursor-pointer relative overflow-hidden`}>
                                <input
                                  type="file"
                                  onChange={handleFileChange}
                                  accept=".pdf,.doc,.docx"
                                  disabled={uploadProgress !== null}
                                  className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                                />
                                <div className="flex flex-col items-center justify-center gap-2">
                                  <UploadCloud className="w-8 h-8 text-[#7B2FF7]/75 group-hover:scale-110 transition-transform duration-300" />
                                  {uploadProgress !== null ? (
                                    <div className="w-full max-w-[200px] mt-2">
                                      <p className="font-semibold text-xs text-[#0F172A] mb-1">Uploading... {uploadProgress}%</p>
                                      <div className="w-full bg-[#E9D5FF] h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-[#7B2FF7] h-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                                      </div>
                                    </div>
                                  ) : (
                                    <>
                                      <p className="font-semibold text-sm text-[#0F172A]">
                                        {resumeFile ? `✔ ${resumeFile.name} Uploaded Successfully` : "Drag & Drop Resume"}
                                      </p>
                                      <p className="text-xs text-[#475569]/70">
                                        Supports PDF, DOC, DOCX • Maximum 5 MB
                                      </p>
                                    </>
                                  )}
                                </div>
                              </div>
                              {formErrors.resume && (
                                <p className="text-red-500 text-[10px] mt-1">{formErrors.resume}</p>
                              )}
                            </div>

                            {/* Textarea why join */}
                            <div className="md:col-span-2">
                              <label className="block text-xs font-semibold text-[#0F172A] mb-1.5">Why do you want to join Viyan Academy?</label>
                              <textarea
                                placeholder="Tell us about your goals, interests and what you expect from this internship."
                                value={formData.whyJoin}
                                onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                                className="w-full h-[140px] p-4 rounded-[12px] bg-white/70 border border-[#7B2FF7]/20 focus:border-[#7B2FF7] focus:ring-2 focus:ring-[#7B2FF7]/15 outline-none transition-all text-sm text-[#0F172A] resize-none"
                              />
                            </div>

                            {/* Checkbox agreedToPrivacy */}
                            <div className={`md:col-span-2 flex items-start gap-2 pt-2 ${shakeFields.includes("privacy") ? "animate-shake" : ""}`}>
                              <input
                                type="checkbox"
                                id="privacy-check"
                                checked={formData.agreedToPrivacy}
                                onChange={(e) => setFormData({ ...formData, agreedToPrivacy: e.target.checked })}
                                className="mt-1 accent-[#7B2FF7] cursor-pointer"
                              />
                              <label htmlFor="privacy-check" className="text-xs text-[#475569] cursor-pointer">
                                I agree to the Privacy Policy.
                              </label>
                            </div>
                            {formErrors.privacy && (
                              <p className="text-red-500 text-[10px] md:col-span-2">{formErrors.privacy}</p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Sticky Footer actions container */}
                  <div className="px-6 md:px-8 py-4 border-t border-[#7B2FF7]/10 bg-white/50 backdrop-blur-sm z-20 flex items-center justify-between">
                    <span className="text-[11px] text-[#475569]/70 font-body">Your information is secure.</span>
                    {step === 1 ? (
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => { setIsModalOpen(false); resetForm(); }}
                          className="px-6 py-2.5 rounded-[12px] border border-black/10 hover:bg-black/5 text-[#475569] font-bold text-xs transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => { if (validateStep1()) { setStep(2); } }}
                          className="h-10 px-6 rounded-[12px] bg-gradient-to-br from-[#7B2FF7] to-[#9333EA] text-white font-bold text-xs hover:shadow-[0_10px_20px_rgba(123,47,247,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          Continue <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          disabled={uploadProgress !== null}
                          className="px-5 h-10 rounded-[12px] border border-[#7B2FF7]/35 text-[#7B2FF7] font-bold text-xs hover:bg-[#7B2FF7]/5 transition-colors cursor-pointer disabled:opacity-50"
                        >
                          ← Previous
                        </button>
                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={isSubmitting || uploadProgress !== null}
                          className="h-10 px-6 rounded-[12px] bg-gradient-to-br from-[#7B2FF7] to-[#9333EA] text-white font-bold text-xs hover:shadow-[0_10px_20px_rgba(123,47,247,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? "Submitting Application..." : "Submit Application →"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                /* Success State (Always centered, non-scrolling, with premium Confetti glow style) */
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-12 px-6 flex-grow relative overflow-hidden"
                >
                  {/* Premium Confetti Particles glow style decoration */}
                  <div className="absolute inset-0 pointer-events-none opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-400 animate-ping" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-purple-400 animate-ping" style={{ animationDelay: '0.6s' }}></div>
                    <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" style={{ animationDelay: '0.9s' }}></div>
                    <div className="absolute bottom-1/4 right-1/3 w-2 h-2 rounded-full bg-sky-400 animate-ping" style={{ animationDelay: '1.2s' }}></div>
                  </div>

                  <div className="w-20 h-20 bg-gradient-to-br from-[#7B2FF7] to-[#9333EA] rounded-full flex items-center justify-center mb-6 shadow-[0_15px_30px_rgba(123,47,247,0.3)] animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-[#0F172A] tracking-tight mb-3">
                    Application Submitted Successfully
                  </h2>
                  <p className="text-[#475569] max-w-md mb-8 leading-relaxed font-body">
                    Thank you for applying to ViyanInfo.<br />
                    We've received your application successfully.<br />
                    Our HR team will review your profile and contact you soon.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs justify-center z-10">
                    <button
                      onClick={() => { setIsModalOpen(false); resetForm(); }}
                      className="flex-1 py-3 rounded-[12px] bg-gradient-to-br from-[#7B2FF7] to-[#9333EA] text-white font-bold text-sm hover:shadow-[0_10px_20px_rgba(123,47,247,0.25)] hover:scale-[1.02] transition-all cursor-pointer"
                    >
                      Back to Home
                    </button>
                    <a href="#programs" onClick={() => { setIsModalOpen(false); resetForm(); }} className="flex-1">
                      <button className="w-full py-3 rounded-[12px] border border-[#7B2FF7]/30 hover:bg-[#7B2FF7]/5 text-[#7B2FF7] font-bold text-sm transition-colors cursor-pointer">
                        Browse Programs
                      </button>
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
