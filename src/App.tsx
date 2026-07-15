import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { gsap } from "gsap";

const Home = lazy(() => import("./pages/Home"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview"));
const WebsitesDev = lazy(() => import("./pages/WebsitesDev"));
const MobileApp = lazy(() => import("./pages/MobileApp"));
const SaasDev = lazy(() => import("./pages/SaasDev"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Process = lazy(() => import("./pages/Process"));
const TechStack = lazy(() => import("./pages/TechStack"));
const Industries = lazy(() => import("./pages/Industries"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/404"));
const Internships = lazy(() => import("./pages/Internships"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const AiSolutions = lazy(() => import("./pages/AiSolutions"));
const UiUxDesign = lazy(() => import("./pages/UiUxDesign"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

function useMagneticButtons() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let activeBtn: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Search for target button or matching parent
      const btn = target.closest(
        "button, .btn, .liquid-btn, .work-hero__btn, .btn-teal, .btn-glass, .magnetic-button, a.bg-\\[\\#6D28D9\\], button.bg-\\[\\#6D28D9\\], a.bg-white\\/80, a.bg-white\\/95, [role='button'], a.btn-primary, a.btn-secondary, input[type='button'], input[type='submit']"
      ) as HTMLElement | null;

      if (btn) {
        if (activeBtn && activeBtn !== btn) {
          gsap.to(activeBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1.1, 0.4)" });
        }
        activeBtn = btn;

        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (activeBtn) {
        gsap.to(activeBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1.1, 0.4)" });
        activeBtn = null;
      }
    };

    const handleMouseLeave = () => {
      if (activeBtn) {
        gsap.to(activeBtn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1.1, 0.4)" });
        activeBtn = null;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (activeBtn) {
        gsap.to(activeBtn, { x: 0, y: 0, duration: 0.1 });
      }
    };
  }, []);
}

function useButtonParticleBurst() {
  useEffect(() => {
    const triggerBurst = (e: MouseEvent) => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      // Particle count and premium lavender/teal/blue color palette
      const particleCount = 12;
      const colors = ["#C084FC", "#7C3AED", "#8B5CF6", "#A78BFA", "#6366F1", "#3B82F6", "#14B8A6"];

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("span");
        
        // Random particle size
        const size = Math.random() * 5 + 4;
        
        // Position particle at the entry coordinates of the hover
        const startX = e.clientX + scrollX;
        const startY = e.clientY + scrollY;

        particle.style.position = "absolute";
        particle.style.left = `${startX}px`;
        particle.style.top = `${startY}px`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "99999";
        
        document.body.appendChild(particle);

        // Project outwards in a random circular vector
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 60 + 30; // shoot distance: 30px to 90px
        
        const targetX = Math.cos(angle) * distance;
        const targetY = Math.sin(angle) * distance;

        gsap.fromTo(
          particle,
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 0.9,
          },
          {
            x: targetX,
            y: targetY,
            scale: 0.2,
            opacity: 0,
            duration: Math.random() * 0.5 + 0.4,
            ease: "power2.out",
            onComplete: () => {
              particle.remove();
            },
          }
        );
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Resolve element matching any button class or role
      const btn = target.closest(
        "button, .btn, .liquid-btn, .work-hero__btn, .btn-teal, .btn-glass, .magnetic-button, a.bg-\\[\\#6D28D9\\], button.bg-\\[\\#6D28D9\\], a.bg-white\\/80, a.bg-white\\/95, [role='button'], a.btn-primary, a.btn-secondary, input[type='button'], input[type='submit']"
      ) as HTMLElement | null;

      if (btn && btn.dataset.particleHovered !== "true") {
        btn.dataset.particleHovered = "true";
        triggerBurst(e);

        const handleMouseLeave = () => {
          btn.dataset.particleHovered = "false";
          btn.removeEventListener("mouseleave", handleMouseLeave);
        };
        btn.addEventListener("mouseleave", handleMouseLeave);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-abyss">
      <div className="w-12 h-12 border-4 border-border-1 border-t-border-2 rounded-full animate-spin"></div>
    </div>
  );
}

export default function App() {
  useSmoothScroll();
  useMagneticButtons();
  useButtonParticleBurst();

  const location = useLocation();
  const customFooterPaths = [
    "/",
    "/services",
    "/contact",
    "/services/websites",
    "/services/mobile",
    "/portfolio",
    "/products",
    "/about",
    "/careers",
    "/blog",
    "/services/ai",
    "/services/uiux",
    "/services/saas",
    "/internships",
    "/process",
    "/tech-stack",
    "/industries",
    "/faq",
    "/services/custom-software",
    "/services/saas-development",
    "/services/web-development",
    "/services/mobile-development",
    "/services/ai-automation",
    "/services/cloud-devops",
    "/services/enterprise-software",
    "/services/ui-ux-design",
  ];
  const hideGlobalFooter =
    customFooterPaths.includes(location.pathname) ||
    customFooterPaths.includes(location.pathname.replace(/\/$/, ""));

  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:text-text-primary"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesOverview />} />
            <Route path="/services/websites" element={<WebsitesDev />} />
            <Route path="/services/mobile" element={<MobileApp />} />
            <Route path="/services/saas" element={<SaasDev />} />
            <Route path="/products" element={<Products />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internships />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/ai" element={<AiSolutions />} />
            <Route path="/services/uiux" element={<UiUxDesign />} />
            <Route
              path="/services/custom-software"
              element={<ServicesOverview />}
            />
            <Route path="/services/saas-development" element={<SaasDev />} />
            <Route path="/services/web-development" element={<WebsitesDev />} />
            <Route
              path="/services/mobile-development"
              element={<MobileApp />}
            />
            <Route path="/services/ai-automation" element={<AiSolutions />} />
            <Route path="/services/cloud-devops" element={<TechStack />} />
            <Route
              path="/services/enterprise-software"
              element={<ServicesOverview />}
            />
            <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="/process" element={<Process />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!hideGlobalFooter && <Footer />}
    </div>
  );
}
