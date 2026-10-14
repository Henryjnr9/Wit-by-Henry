import React, { useState, useEffect, useRef } from "react";

const testimonialsData = [
  {
    id: 1,
    quote:
      "WIT Software empowers telecoms and enterprises to create new revenue opportunities through Agentic AI, transforming every communication into an intelligent and value-driven interaction.",
    author: "Henry Osuji",
    role: "Co-founder & CEO / Figma",
    image: null,
  },
  {
    id: 2,
    quote:
      "Deploying WIT's autonomous core reduced our network resolution time by over sixty percent, unlocking conversational workflows at tier-one scale that we previously thought impossible.",
    author: "Elena Rostova",
    role: "VP of Telecom Architecture / Deutsche Telekom",
    image: null,
  },
  {
    id: 3,
    quote:
      "The transition to five-G interactive voice calling and rich business messaging has redefined subscriber retention for our global network. WIT remains our most critical carrier infrastructure partner.",
    author: "Marcus Vance",
    role: "Head of Digital Communications / Vodafone Group",
    image: null,
  },
];

const TestimonialQuote = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe & Drag Gesture State
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [mouseStartX, setMouseStartX] = useState(0);

  // Track scroll position through the section for the 3-phase word reveal
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.85;
      const end = windowHeight * 0.25;
      const totalDistance = start - end;
      const currentPos = start - rect.top;

      const progress = Math.min(Math.max(currentPos / totalDistance, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Carousel Navigation Handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  // Touch Swipe Handlers (Mobile)
  const handleTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > 45) handleNext(); // Swiped left -> next
    if (distance < -45) handlePrev(); // Swiped right -> prev
  };

  // Mouse Drag Handlers (Desktop)
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setMouseStartX(e.clientX);
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown) return;
    setIsMouseDown(false);
    const diff = mouseStartX - e.clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  const currentTestimonial = testimonialsData[currentIndex];

  // Helper: 3-Phase Color calculation per word
  const getWordColor = (index, total) => {
    const threshLightGrey = (index / total) * 0.65 + 0.1;
    const threshWhite = (index / total) * 0.65 + 0.22;

    if (scrollProgress >= threshWhite) {
      return "#F4F7FF"; // Phase 3: Pure Light / White
    }
    if (scrollProgress >= threshLightGrey) {
      return "#8B8E96"; // Phase 2: Light Grey
    }
    return "#424243"; // Phase 1: Dark Grey
  };

  // Helper: Anti-Orphan Word Parser
  const renderWordsWithAntiOrphan = (text) => {
    const words = text.split(" ");
    const total = words.length;
    const elements = [];

    for (let i = 0; i < total; i++) {
      // Bind the last 2 words into a no-orphan pair with white-space: nowrap
      if (i === total - 2) {
        const word1 = words[i];
        const color1 = getWordColor(i, total);
        const word2 = words[i + 1];
        const color2 = getWordColor(i + 1, total);

        elements.push(
          <span key={`pair-${i}`} className="no-orphan-pair">
            <span className="quote-word" style={{ color: color1 }}>
              {word1}
            </span>{" "}
            <span className="quote-word" style={{ color: color2 }}>
              {word2}
            </span>
          </span>,
        );
        break;
      } else {
        const word = words[i];
        const color = getWordColor(i, total);
        elements.push(
          <span key={i} className="quote-word" style={{ color: color }}>
            {word}{" "}
          </span>,
        );
      }
    }

    return elements;
  };

  return (
    <>
      <style>{`
        /* Testimonial Section */
        .quote-section {
          padding-top: 64px;
          padding-bottom: 56px;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          background: #0C0D0E;
          user-select: none;
        }

        .quote-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        /* 
          Left Container:
          width 1010px, column, gap 22px
        */
        .quote-left-col {
          display: flex;
          width: 1010px;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          box-sizing: border-box;
          z-index: 2;
          cursor: grab;
        }

        .quote-left-col:active {
          cursor: grabbing;
        }

        /* 
          Quote Text Block with Anti-Orphan rules
        */
        .quote-text-block {
          align-self: stretch;
          font-family: 'Geist', sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -0.96px;
          margin: 0;
          text-wrap: balance;
          text-wrap: pretty;
          animation: slideFadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes slideFadeIn {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Individual word with 3-phase transition */
        .quote-word {
          display: inline;
          transition: color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Guarantees the last two words never split onto separate lines */
        .no-orphan-pair {
          display: inline;
          white-space: nowrap;
        }

        /* Founder Container: gap 22px */
        .founder-container {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        /* Image Placeholder: 143px by 146px on desktop */
        .founder-image-placeholder {
          width: 143px;
          height: 146px;
          border-radius: 4px;
          background: #D9D9D9;
          flex-shrink: 0;
          transition: transform 0.25s ease;
        }

        .founder-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        .founder-name {
          color: #F4F7FF;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: -0.36px;
          margin: 0;
        }

        .founder-position {
          color: #F4F7FF;
          font-family: 'Geist Mono', monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.32px;
          margin: 0;
        }

        /* Carousel Navigation Controls */
        .carousel-controls {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
        }

        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          padding: 0;
        }

        .carousel-dot.active {
          width: 28px;
          border-radius: 999px;
          background: #F4F7FF;
        }

        .carousel-arrow-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          width: 32px;
          height: 32px;
          color: #F4F7FF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-left: 8px;
        }

        .carousel-arrow-btn:hover {
          background: #232323;
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Desktop: Giant 600px Quote Mark Glyph on the right */
        .quote-mark-glyph {
          color: #424242;
          font-family: 'Geist', sans-serif;
          font-size: 600px;
          font-style: normal;
          font-weight: 500;
          line-height: 0.65;
          letter-spacing: -12px;
          user-select: none;
          pointer-events: none;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ================= MOBILE RESPONSIVE (<= 768px) ================= */
        @media (max-width: 768px) {
          .quote-section {
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .quote-container {
            padding: 0;
            position: relative;
            flex-direction: column;
            align-items: flex-start;
          }

          .quote-left-col {
            width: 100%;
            gap: 20px;
            z-index: 2;
          }

          /* Exact Mobile Typography: 32px, line-height 36px, letter-spacing -0.64px */
          .quote-text-block {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: -0.64px;
          }

          .founder-container {
            gap: 16px;
          }

          /* Exact Mobile Founder Image: 87px by 88px */
          .founder-image-placeholder {
            width: 87px;
            height: 88px;
          }

          .founder-name {
            font-size: 16px;
            line-height: 24px;
          }

          .founder-position {
            font-size: 14px;
            line-height: 20px;
          }

          /* 
            Mobile Quote Mark:
            Positioned in the background at top-right behind the text matching your screenshot
          */
          .quote-mark-glyph {
            position: absolute;
            top: -20px;
            right: 0px;
            font-size: 340px;
            line-height: 0.6;
            letter-spacing: -8px;
            color: #26272B; /* Subtle dark tone in background */
            z-index: 1;
            opacity: 0.85;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="quote-section"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className="section-container">
          <div className="quote-container">
            {/* Left Content Column */}
            <div className="quote-left-col">
              {/* Quote Block with Word-by-Word Scroll Reveal and Anti-Orphan protection */}
              <blockquote
                key={currentTestimonial.id}
                className="quote-text-block"
              >
                {renderWordsWithAntiOrphan(currentTestimonial.quote)}
              </blockquote>

              {/* Founder Information */}
              <div className="founder-container">
                {/* 87px by 88px on mobile, 143px by 146px on desktop */}
                <div className="founder-image-placeholder"></div>

                <div className="founder-info">
                  <p className="founder-name">{currentTestimonial.author}</p>
                  <p className="founder-position">{currentTestimonial.role}</p>

                  {/* Swipe / Navigation Indicators */}
                  <div className="carousel-controls">
                    {testimonialsData.map((item, idx) => (
                      <button
                        key={item.id}
                        className={`carousel-dot ${idx === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                    <button
                      className="carousel-arrow-btn"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Giant Quote Mark: On desktop on the right; on mobile in top-right background */}
            <div className="quote-mark-glyph" aria-hidden="true">
              ”
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialQuote;
