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
const Products = lazy(() => import("./pages/Products"));

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
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const buttons = document.querySelectorAll<HTMLElement>(
      ".btn-teal, .btn-glass, .hero-badge, .menu-nav-link",
    );

    const moveButton = (e: MouseEvent, btn: Element) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const resetButton = (btn: Element) => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1.1, 0.4)",
      });
    };

    const listeners: Array<{
      btn: Element;
      move: EventListener;
      leave: EventListener;
    }> = [];

    buttons.forEach((btn) => {
      const moveHandler = ((e: MouseEvent) =>
        moveButton(e, btn)) as EventListener;
      const leaveHandler = (() => resetButton(btn)) as EventListener;

      btn.addEventListener("mousemove", moveHandler);
      btn.addEventListener("mouseleave", leaveHandler);

      listeners.push({ btn, move: moveHandler, leave: leaveHandler });
    });

    return () => {
      listeners.forEach(({ btn, move, leave }) => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", leave);
      });
    };
  }, [pathname]);
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

  const location = useLocation();
  const customFooterPaths = [
    "/",
    "/services",
    "/contact",
    "/services/websites",
    "/services/mobile",
    "/portfolio",
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
    "/products",
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
            <Route path="/about" element={<About />} />
            <Route path="/internship" element={<Internships />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services/ai" element={<AiSolutions />} />
            <Route path="/services/uiux" element={<UiUxDesign />} />
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
