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
    // Configure Lenis for a slow, weighted, and silky smooth glide
    const lenis = new Lenis({
      duration: 1.5, // Higher number = slower and smoother glide (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    // Animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    // Smoothly intercept any anchor links (e.g. clicking #about or #products in the navbar)
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
      {/* 1. Fixed Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Infinite Logos Banner */}
        <LogosBanner />

        {/* 4. About / Telecom Innovation Stats */}
        <AboutStats />

        {/* 5. Products Bento Grid */}
        <Products />

        {/* 6. Expertise Interactive Section */}
        <Expertise />

        {/* 7. Innovation Legacy Mosaic */}
        <InnovationLegacy />

        {/* 8. Testimonial Quote */}
        <TestimonialQuote />

        {/* 9. Bottom CTA Banner */}
        <CtaBanner />
      </main>

      {/* 10. Global Footer */}
      <Footer />
    </div>
  );
}

export default App;
