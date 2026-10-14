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

      // Active scroll window for word-by-word reveal
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
        /* ================= DESKTOP BASE (UNTOUCHED) ================= */
        .legacy-section {
          height: 775px;
          align-self: stretch;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          background: #0C0D0E;
        }

        .legacy-container {
          width: 100%;
          max-width: 1440px;
          height: 100%;
          margin: 0 auto;
          padding: 0 42px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          gap: 107px;
          box-sizing: border-box;
          position: relative;
        }

        /* Desktop Mosaic Canvas: 588px width */
        .legacy-mosaic-canvas {
          position: relative;
          width: 588px;
          height: 775px;
          flex-shrink: 0;
        }

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

        /* Desktop Block Coordinates */
        .block-center-large {
          top: 235px;
          left: 175px;
          width: 255px;
          height: 255px;
        }

        .block-bottom-center {
          top: 520px;
          left: 232px;
          width: 142px;
          height: 142px;
        }

        .block-left-top {
          top: 165px;
          left: 10px;
          width: 135px;
          height: 140px;
        }

        .block-left-bottom {
          top: 450px;
          left: 10px;
          width: 125px;
          height: 121px;
        }

        .block-right-top {
          top: 135px;
          left: 443px;
          width: 145px;
          height: 145px;
        }

        .block-right-middle {
          top: 302px;
          left: 443px;
          width: 145px;
          height: 147px;
        }

        /* Desktop Text Column: 660px width, 224px top spacing */
        .legacy-text-col {
          display: flex;
          width: 660px;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
          margin-top: 224px;
          box-sizing: border-box;
        }

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

        .legacy-title {
          align-self: stretch;
         
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -0.96px;
          margin: 0;
        }

        .legacy-word {
          display: inline;
          transition: color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .legacy-btn {
          display: inline-flex;
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

        /* ================= MOBILE RESPONSIVE (<= 768px) ================= */
        @media (max-width: 768px) {
          .legacy-section {
            height: auto;
            padding-top: 40px;
            padding-bottom: 40px;
          }

          /* Stack vertically: collage on top, text container below */
          .legacy-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 36px;
            padding: 0;
            width: 100%;
          }

          /* Scaled mobile collage to fit 357px width */
          .legacy-mosaic-canvas {
            width: 357px;
            max-width: 100%;
            height: 345px;
            margin: 0 auto;
          }

          /* Scaled mobile block coordinates matching your screenshot */
          .block-left-top {
            top: 24px;
            left: 0px;
            width: 82px;
            height: 85px;
          }

          .block-left-bottom {
            top: 198px;
            left: 0px;
            width: 76px;
            height: 74px;
          }

          .block-center-large {
            top: 66px;
            left: 96px;
            width: 156px;
            height: 156px;
          }

          .block-bottom-center {
            top: 236px;
            left: 118px;
            width: 92px;
            height: 92px;
          }

          .block-right-top {
            top: 8px;
            left: 265px;
            width: 92px;
            height: 92px;
          }

          .block-right-middle {
            top: 110px;
            left: 265px;
            width: 92px;
            height: 94px;
          }

          /* Exact Mobile Text Container: width 357px, gap 22px */
          .legacy-text-col {
            width: 357px;
            max-width: 100%;
            margin-top: 0;
            gap: 22px;
          }

          /* Exact Mobile Eyebrow */
          .legacy-eyebrow {
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.32px;
          }

          /* Exact Mobile Headline: 32px, line-height 36px, letter-spacing -0.64px */
          .legacy-title {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: -0.64px;
            text-wrap: balance;
          }
        }
      `}</style>

      <section ref={sectionRef} className="legacy-section">
        <div className="section-container">
          <div className="legacy-container">
            {/* Geometric Collage (Top on Mobile) */}
            <div className="legacy-mosaic-canvas">
              <div className="mosaic-block block-left-top"></div>
              <div className="mosaic-block block-left-bottom"></div>
              <div className="mosaic-block block-center-large"></div>
              <div className="mosaic-block block-bottom-center"></div>
              <div className="mosaic-block block-right-top"></div>
              <div className="mosaic-block block-right-middle"></div>
            </div>

            {/* Editorial Content (Bottom on Mobile) */}
            <div className="legacy-text-col">
              <span className="legacy-eyebrow">MEET THE TEAM</span>

              <h2 className="legacy-title">
                {headlineWords.map((word, i) => {
                  const threshLightGrey =
                    (i / headlineWords.length) * 0.65 + 0.1;
                  const threshWhite = (i / headlineWords.length) * 0.65 + 0.22;

                  let wordColor = "#33353A";
                  if (scrollProgress >= threshWhite) {
                    wordColor = "#F4F7FF";
                  } else if (scrollProgress >= threshLightGrey) {
                    wordColor = "#8B8E96";
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
        </div>
      </section>
    </>
  );
};

export default InnovationLegacy;
