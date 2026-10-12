import React, { useState, useEffect, useRef } from "react";

const allQuoteWords = [
  "WIT",
  "Software",
  "empowers",
  "telecoms",
  "and",
  "enterprises",
  "to",
  "create",
  "new",
  "revenue",
  "opportunities",
  "through",
  "Agentic",
  "AI,",
  "transforming",
  "every",
  "communication",
  "into",
  "an",
  "intelligent",
  "and",
  "value-driven",
  "interaction.",
];

const TestimonialQuote = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Active scroll window: triggers smoothly as you scroll into this section
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

  return (
    <>
      <style>{`
        /* Testimonial Section: exact 161px top spacing, 103px bottom spacing */
        .quote-section {
          padding-top: 64px;
          padding-bottom: 56px;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          background: #0C0D0E;
        }

        .quote-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 var(--desktop-padding);
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          box-sizing: border-box;
        }

        /* 
          Left Container (Exact settings from your spec):
          display: flex; width: 1010px; flex-direction: column; align-items: flex-start; gap: 22px;
        */
        .quote-left-col {
          display: flex;
          width: 1010px;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          box-sizing: border-box;
          z-index: 2;
        }

        /* Testimonial Text: align-self stretch, 48px, line-height 48px, letter-spacing -0.96px */
        .quote-text-block {
          align-self: stretch;
          font-family: 'Geist', sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px; /* 100% */
          letter-spacing: -0.96px;
          margin: 0;
        }

        /* Word Span with smooth 3-phase color transition */
        .quote-word {
          display: inline;
          transition: color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Founder Container: display flex, align-items center, gap 22px */
        .founder-container {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        /* Image Placeholder: width 143px, height 146px, radius 4px, background #D9D9D9 */
        .founder-image-placeholder {
          width: 143px;
          height: 146px;
          border-radius: 4px;
          background: #D9D9D9;
          flex-shrink: 0;
        }

        /* Name and Title Container: gap 4px */
        .founder-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }

        /* Name Text: Geist 18px, line-height 28px, letter-spacing -0.36px */
        .founder-name {
          color: #F4F7FF;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px; /* 155.556% */
          letter-spacing: -0.36px;
          margin: 0;
        }

        /* Position Text: Geist Mono 16px, line-height 24px, letter-spacing -0.32px */
        .founder-position {
          color: #F4F7FF;
          font-family: 'Geist Mono', monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 150% */
          letter-spacing: -0.32px;
          margin: 0;
        }

        /* 
          Quote Mark (Excluded from the 1010px left container):
          color: #424242; font-family: Geist; font-size: 600px; letter-spacing: -12px;
        */
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

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .quote-container {
            padding: 0 40px;
          }

          .quote-left-col {
            width: 100%;
            max-width: 820px;
          }

          .quote-mark-glyph {
            font-size: 400px;
            letter-spacing: -8px;
          }

          .quote-text-block {
            font-size: 38px;
            line-height: 42px;
          }
        }

        @media (max-width: 992px) {
          .quote-section {
            padding-top: 100px;
            padding-bottom: 70px;
          }

          .quote-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 40px;
          }

          .quote-mark-glyph {
            display: none;
          }

          .quote-text-block {
            font-size: 28px;
            line-height: 34px;
          }

          .founder-image-placeholder {
            width: 100px;
            height: 102px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="quote-section">
        <div className="quote-container">
          {/* Left Container (width: 1010px, column, gap: 22px) */}
          <div className="quote-left-col">
            {/* Quote Block with Word-by-Word Scroll Reveal */}
            <blockquote className="quote-text-block">
              {allQuoteWords.map((word, i) => {
                const threshLightGrey = (i / allQuoteWords.length) * 0.65 + 0.1;
                const threshWhite = (i / allQuoteWords.length) * 0.65 + 0.22;

                let wordColor = "#33353A"; // Phase 1: Dark Grey
                if (scrollProgress >= threshWhite) {
                  wordColor = "#F4F7FF"; // Phase 3: Pure Light / White
                } else if (scrollProgress >= threshLightGrey) {
                  wordColor = "#8B8E96"; // Phase 2: Light Grey
                }

                return (
                  <span
                    key={i}
                    className="quote-word"
                    style={{ color: wordColor }}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </blockquote>

            {/* Founder Info */}
            <div className="founder-container">
              {/* Image Placeholder */}
              <div className="founder-image-placeholder"></div>

              {/* Name & Title */}
              <div className="founder-info">
                <p className="founder-name">Henry Osuji</p>
                <p className="founder-position">Co-founder & CEO / Figma</p>
              </div>
            </div>
          </div>

          {/* Excluded from left container: Giant 600px Quote Mark Glyph */}
          <div className="quote-mark-glyph" aria-hidden="true">
            ”
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialQuote;
