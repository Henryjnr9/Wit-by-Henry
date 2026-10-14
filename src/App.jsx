import React, { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogosBanner from "./components/LogosBanner";
import AboutStats from "./components/AboutStats";
import Products from "./components/Products";
import Expertise from "./components/Expertise";
import InnovationLegacy from "./components/InnovationLegacy";
import TestimonialQuote from "./components/TestimonialQuote";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Configured for smooth scrolling on BOTH desktop and mobile/touch
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: true, // Enables smooth touch scroll on mobile
      syncTouchLerp: 0.08, // Gives mobile the weighted deceleration
      touchMultiplier: 1.5, // Touch sensitivity
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Smoothly scroll to anchor targets when clicking links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -70, duration: 1.8 });
          }
        }
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      {/* 1. Fixed Navbar with Mobile Pill Drawer */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Infinite Scrolling Logos Banner */}
        <LogosBanner />

        {/* 4. About / Telecom Innovation Stats */}
        <AboutStats />

        {/* 5. Products 3-Column Grid */}
        <Products />

        {/* 6. Expertise Section */}
        <Expertise />

        {/* 7. Innovation Legacy Mosaic */}
        <InnovationLegacy />

        {/* 8. Multi-Testimonial Swipeable Section */}
        <TestimonialQuote />

        {/* 9. Bottom CTA Banner */}
        <CtaBanner />
      </main>

      {/* 10. Responsive Footer */}
      <Footer />
    </div>
  );
}

export default App;
