import { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { CTABlock } from "../components/CTABlock";
import { LiquidFooter } from "../components/LiquidFooter";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A marketing website: 4–6 weeks. A mobile app MVP: 10–14 weeks. A complex SaaS platform: 16–24 weeks. We provide a detailed timeline during the Discovery phase — no surprises.",
  },
  {
    q: "Do you use templates or build everything custom?",
    a: "100% custom code. We build bespoke React/Next.js architectures tailored to your business logic and brand aesthetic. No WordPress templates, no page builders.",
  },
  {
    q: "Who owns the code when we're done?",
    a: "You do. Upon final payment, all IP, repositories, and infrastructure access are transferred to your organization completely.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. All projects include a 30-day post-launch bug warranty. After that, we offer monthly retainer agreements for updates, scaling, and new feature development.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes, but we require a Code Audit phase first. We assess architecture quality, test coverage, dependencies, and security vulnerabilities before committing to feature development.",
  },
  {
    q: "What is your team structure?",
    a: "Each project gets a dedicated Lead Engineer, Frontend Developer, and Project Manager as the core team. Depending on scope, we add a UX/UI Designer, Backend Engineer, or DevOps specialist.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. We sign mutual NDAs before any discovery calls where sensitive product information is shared. Client confidentiality is non-negotiable.",
  },
  {
    q: "How do we communicate during a project?",
    a: "You get a dedicated Slack channel with your engineering team, weekly video demos on Zoom, and access to a shared Notion workspace with the full project board.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const heroRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const h1Lines = gsap.utils.toArray<HTMLElement>(
        ".line-inner",
        heroContentRef.current,
      );
      gsap.from(h1Lines, {
        y: "110%",
        duration: 1.3,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2,
      });

      gsap.from(".faq-item", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: faqRef.current, start: "top 80%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={containerRef} className="bg-abyss">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-12 overflow-hidden">
        <div className="orb w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-surface)_0%,transparent_60%)] opacity-60 top-0 left-1/2 -translate-x-1/2 z-0"></div>
        <div
          ref={heroContentRef}
          className="container relative z-10 text-center"
        >
          <h1 className="text-[clamp(40px,6vw,80px)] font-display font-bold text-text-primary leading-[1.05] tracking-tight mb-8 max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="line-inner">Frequently Asked</div>
            </div>
            <div className="overflow-hidden">
              <div className="line-inner">Questions</div>
            </div>
          </h1>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section bg-abyss pt-0">
        <div className="container max-w-3xl" ref={faqRef}>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggleFaq(i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Still have questions?" subtitle="We're happy to talk." />
      <LiquidFooter />
    </div>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        gsap.set(panelRef.current, { height: "auto", overflow: "hidden" });
        const height = panelRef.current?.offsetHeight;
        gsap.fromTo(
          panelRef.current,
          { height: 0 },
          { height, duration: 0.5, ease: "power2.out" },
        );
        gsap.to(iconRef.current, { rotation: 180, duration: 0.3 });
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          duration: 0.4,
          ease: "power2.in",
        });
        gsap.to(iconRef.current, { rotation: 0, duration: 0.3 });
      }
    }, itemRef);
    return () => ctx.revert();
  }, [isOpen]);

  return (
    <div ref={itemRef} className="faq-item glass-card overflow-hidden">
      <button
        className="w-full text-left p-6 md:p-8 flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-border-2"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${index}`}
      >
        <h3 className="text-lg md:text-xl font-display font-semibold text-text-primary pr-8">
          {faq.q}
        </h3>
        <ChevronDown
          ref={iconRef}
          className="text-(--color-text-accent) shrink-0"
          size={24}
        />
      </button>
      <div
        id={`panel-${index}`}
        role="region"
        aria-hidden={!isOpen}
        ref={panelRef}
        className="h-0 overflow-hidden"
      >
        <div className="px-6 md:px-8 pb-6 md:pb-8 text-text-secondary leading-relaxed">
          {faq.a}
        </div>
      </div>
    </div>
  );
}
