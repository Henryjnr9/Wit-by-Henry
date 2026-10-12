import React, { useState, useEffect, useRef } from "react";

const headlineWords = [
  "A",
  "legacy",
  "of",
  "innovation.",
  "Shaping",
  "the",
  "future",
  "of",
  "Agentic",
  "AI",
  "Communications.",
];

const InnovationLegacy = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Active scroll window: from 85% down viewport to 20% from top
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.2;
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
        /* Section: exact height 775px, border-bottom 1px solid #232323 */
        .legacy-section {
          height: 775px;
          align-self: stretch;
          
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          background: #0C0D0E;
        }

        /* Container: gap 107px between images and text */
        .legacy-container {
          width: 100%;
          max-width: 1440px;
          height: 100%;
          margin: 0 auto;
          padding: 0 42px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 107px; /* Exact 107px gap from image rectangles to text */
          box-sizing: border-box;
          position: relative;
        }

        /* ================= LEFT MOSAIC COLLAGE ================= */
        .legacy-mosaic-canvas {
          position: relative;
          width: 588px;
          height: 775px;
          flex-shrink: 0;
        }

        /* Minimal clean #D9D9D9 geometric rectangles matching Figma */
        .mosaic-block {
          position: absolute;
          border-radius: 8px;
          background-color: #D9D9D9;
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.35);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                      background-color 0.35s ease,
                      box-shadow 0.35s ease;
          cursor: pointer;
        }

        .mosaic-block:hover {
          transform: translateY(-3px) scale(1.02);
          background-color: #ECECEC;
          box-shadow: 0 20px 42px rgba(255, 255, 255, 0.12);
        }

        /* 
          1. Center Large Card:
          top: 235px, height: 255px, width: 255px
        */
        .block-center-large {
          top: 235px;
          left: 175px;
          width: 255px;
          height: 255px;
        }

        /* 
          2. Bottom Center Card:
          top: 520px (235 + 255 + 30px gap)
          bottom: 113px
        */
        .block-bottom-center {
          top: 520px;
          left: 232px;
          width: 142px;
          height: 142px;
        }

        /* 
          3. Left Top Card:
          top: 165px, gap to Left Bottom: 145px
        */
        .block-left-top {
          top: 165px;
          left: 10px;
          width: 135px;
          height: 140px;
        }

        /* 
          4. Left Bottom Card:
          top: 450px (165 + 140 + 145)
          bottom: 204px
          31px gap to Center Large
        */
        .block-left-bottom {
          top: 450px;
          left: 10px;
          width: 125px;
          height: 121px;
        }

        /* 
          5. Right Top Card:
          top: 135px, gap to Right Middle: 22px
        */
        .block-right-top {
          top: 135px;
          left: 443px;
          width: 145px;
          height: 145px;
        }

        /* 
          6. Right Middle Card:
          top: 302px (135 + 145 + 22)
          bottom: 326px
          13px gap to Center Large
        */
        .block-right-middle {
          top: 302px;
          left: 443px;
          width: 145px;
          height: 147px;
        }

        /* ================= RIGHT EDITORIAL CONTENT ================= */
        /* Text Container: width 660px, gap 22px, margin-top 224px */
        .legacy-text-col {
          display: flex;
          width: 660px;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          margin-top: 224px; /* Adjusted: exact 224px distance from section top */
          box-sizing: border-box;
        }

        /* MEET THE TEAM text */
        .legacy-eyebrow {
          align-self: stretch;
          color: #F4F7FF;
          font-family: 'Geist Mono', monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.32px;
          text-transform: uppercase;
          margin: 0;
        }

        /* A legacy.. text */
        .legacy-title {
          align-self: stretch;
          font-family: 'Geist', sans-serif;
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -0.96px;
          margin: 0;
        }

        /* Progressive word reveal */
        .legacy-word {
          display: inline;
          transition: color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Button: padding 12px 16px, radius 41px */
        .legacy-btn {
          display: flex;
          padding: 12px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 41px;
          border: 1px solid #343434;
          background: #232323;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .legacy-btn:hover {
          background: #2b2c30;
          border-color: #4a4a4a;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
        }

        .legacy-btn-text {
          color: #FFFFFF;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }

        .legacy-btn-arrow {
          width: 24px;
          height: 24px;
          display: block;
          transition: transform 0.2s ease;
        }

        .legacy-btn:hover .legacy-btn-arrow {
          transform: translateX(3px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1280px) {
          .legacy-container {
            padding: 0 30px;
            gap: 60px;
          }

          .legacy-text-col {
            width: 50%;
            margin-top: 180px;
          }

          .legacy-title {
            font-size: 40px;
            line-height: 42px;
          }
        }

        @media (max-width: 992px) {
          .legacy-section {
            height: auto;
            padding: 80px 0;
          }

          .legacy-container {
            flex-direction: column-reverse;
            align-items: center;
            gap: 50px;
          }

          .legacy-text-col {
            width: 100%;
            margin-top: 0;
          }

          .legacy-mosaic-canvas {
            width: 100%;
            max-width: 480px;
            height: 600px;
            margin: 0 auto;
          }
        }
      `}</style>

      <section ref={sectionRef} className="legacy-section">
        <div className="legacy-container">
          {/* Left: Geometric Collage matching Figma D9D9D9 cards */}
          <div className="legacy-mosaic-canvas">
            {/* 1. Left Top (165px from top, 145px gap to Left Bottom) */}
            <div className="mosaic-block block-left-top"></div>

            {/* 2. Left Bottom (450px from top, 204px from bottom, 31px to Center) */}
            <div className="mosaic-block block-left-bottom"></div>

            {/* 3. Center Large (235px from top, 255x255px) */}
            <div className="mosaic-block block-center-large"></div>

            {/* 4. Bottom Center (30px gap to Center, 113px from bottom) */}
            <div className="mosaic-block block-bottom-center"></div>

            {/* 5. Right Top (135px from top, 22px gap to Right Middle) */}
            <div className="mosaic-block block-right-top"></div>

            {/* 6. Right Middle (302px from top, 326px from bottom, 13px to Center) */}
            <div className="mosaic-block block-right-middle"></div>
          </div>

          {/* Right: Editorial Content (224px top margin, 289px to bottom) */}
          <div className="legacy-text-col">
            <span className="legacy-eyebrow">MEET THE TEAM</span>

            <h2 className="legacy-title">
              {headlineWords.map((word, i) => {
                const threshLightGrey = (i / headlineWords.length) * 0.65 + 0.1;
                const threshWhite = (i / headlineWords.length) * 0.65 + 0.22;

                let wordColor = "#33353A"; // Phase 1: Dark Grey
                if (scrollProgress >= threshWhite) {
                  wordColor = "#F4F7FF"; // Phase 3: Pure Light / White
                } else if (scrollProgress >= threshLightGrey) {
                  wordColor = "#8B8E96"; // Phase 2: Light Grey
                }

                return (
                  <span
                    key={i}
                    className="legacy-word"
                    style={{ color: wordColor }}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </h2>

            <a href="#about" className="legacy-btn">
              <span className="legacy-btn-text">About Us</span>
              <svg
                className="legacy-btn-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnovationLegacy;
