import React, { useState, useEffect, useRef } from "react";

// Line-by-line structure matching Figma
const mainParagraphLines = [
  ["25", "years", "driving", "Telecom", "Innovation."],
  ["Software", "deployed", "in", "over", "40", "countries."],
  ["Trusted", "by", "Tier-1", "operators", "worldwide."],
  ["Built", "on", "deep", "telecom", "DNA."],
];

const futureParagraphLines = [
  [
    "Now",
    "Engineering",
    "the",
    "future",
    "of",
    "Telecom",
    "Artificial",
    "Intelligence.",
  ],
];

const allWords = [...mainParagraphLines.flat(), ...futureParagraphLines.flat()];
const totalWordCount = allWords.length;

const AboutStats = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

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

  const getWordColor = (globalIndex) => {
    const threshLightGrey = (globalIndex / totalWordCount) * 0.7 + 0.08;
    const threshWhite = (globalIndex / totalWordCount) * 0.7 + 0.18;

    if (scrollProgress >= threshWhite) {
      return "#F4F7FF"; // Phase 3: Pure Light / White
    }
    if (scrollProgress >= threshLightGrey) {
      return "#8B8E96"; // Phase 2: Light Grey
    }
    return "#424243"; // Phase 1: Dark Grey
  };

  let globalWordIndex = 0;

  return (
    <>
      <style>{`
        /* About Section */
        .about-section {
          padding-top: 48px;
          padding-bottom: 72px;
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* 
          Layout Container:
          justify-content: space-between anchors logo on left, text on right
        */
        .about-layout {
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: flex-start;
          gap: clamp(32px, 5vw, 80px);
          box-sizing: border-box;
        }

        /* WIT Logo: scales smoothly without pushing content out */
        .about-logo-wrapper {
          width: clamp(200px, 18vw, 257.245px);
          height: auto;
          flex-shrink: 0;
          margin-top: clamp(40px, 6vw, 96px);
        }

        .about-logo-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* 
          Text Container:
          min-width: 0 prevents flex child from expanding outside margin
        */
        .about-text-container {
          display: flex;
          flex: 1 1 0;
          min-width: 0; /* CRITICAL: stops flex overflow */
          max-width: 882px;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          box-sizing: border-box;
        }

        /* Eyebrow: WIT: CELEBRATING 25 YEARS IN 2026! */
        .about-eyebrow {
          color: #F4F7FF;
          font-family: 'Geist Mono', monospace;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.32px;
          margin: 0;
        }

        /* 
          Editorial Text Block:
          clamp(36px, 3.3vw, 48px) ensures lines fit comfortably inside the margins
        */
        .about-text-block {
          width: 100%;
          font-size: clamp(36px, 3.3vw, 48px);
          font-style: normal;
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.96px;
          margin: 0;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* 
          Each line is a block element that naturally sits on its own line,
          without forcing white-space: nowrap (which caused the overflow)
        */
        .about-line {
          display: block;
          margin: 0;
          line-height: 1.15;
          word-break: normal;
          overflow-wrap: break-word;
        }

        /* Word Span with smooth color transition */
        .reveal-word {
          display: inline;
          transition: color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Future paragraph separation */
        .about-future-group {
          margin-top: clamp(28px, 3vw, 48px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .about-section {
            padding-top: 40px;
            padding-bottom: 40px;
          }

          .about-layout {
            flex-direction: column;
            gap: 36px;
          }

          .about-logo-wrapper {
            margin-top: 0;
            width: 180px;
          }

          .about-text-block {
            font-size: 28px;
            line-height: 34px;
            letter-spacing: -0.5px;
          }

          .about-future-group {
            margin-top: 24px;
          }
        }
      `}</style>

      <section ref={sectionRef} className="about-section">
        <div className="section-container">
          <div className="about-layout">
            {/* Left: WIT SVG Logo */}
            <div className="about-logo-wrapper">
              <svg
                className="about-logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 258 112"
                fill="none"
              >
                <path
                  d="M92.4954 39.2127C92.4954 32.9358 97.4323 27.999 103.709 27.999H109.316C115.346 27.999 120.494 32.9358 120.494 39.2127V100.782C120.494 106.848 115.346 111.996 109.316 111.996H83.997C77.967 111.996 72.8186 106.848 72.8186 100.782V92.2839C72.8186 87.5938 69.2217 83.997 64.5317 83.997C59.8417 83.997 56.0333 87.5938 56.0333 92.2839V100.782C56.0333 106.848 51.1317 111.996 44.8196 111.996H39.2127C33.1827 111.996 27.999 106.848 27.999 100.782V95.1754C27.999 88.8986 23.0621 83.9617 16.7853 83.9617H11.1784C5.14843 83.9617 0.211579 78.8133 0 72.7833V39.1774C0 32.9006 5.14843 27.9637 11.1784 27.9637H16.7853C23.0621 27.9637 27.999 32.9006 27.999 39.1774V74.1233C27.999 79.4833 32.4774 83.9617 37.8374 83.9617C43.1974 83.9617 47.6759 79.4833 47.6759 74.1233V39.1774C47.6759 32.9006 52.5775 27.9637 58.8543 27.9637H64.4612C70.4912 27.9637 75.6749 32.9006 75.6749 39.1774V75.4633C75.6749 80.4001 79.2365 83.9617 83.9617 83.9617C88.687 83.9617 92.4602 80.3649 92.4602 75.4633V39.1774L92.4954 39.2127ZM144.756 72.8186C151.032 72.8186 155.934 77.7201 155.934 83.7854V100.782C155.934 106.848 161.082 111.996 167.148 111.996H172.755C179.031 111.996 183.968 106.848 183.968 100.782V55.998C183.968 49.7211 179.031 44.7843 172.755 44.7843H144.756C138.726 44.7843 133.577 49.7211 133.577 55.998V61.6049C133.577 67.6349 138.726 72.8186 144.756 72.8186ZM172.755 0.0352632H167.148C161.118 0.0352632 155.934 4.97211 155.934 11.2137V16.8206C155.934 22.8506 161.082 27.999 167.148 27.999H172.755C179.031 27.999 183.968 22.8506 183.968 16.8206V11.2137C183.933 4.97211 179.031 0.0352632 172.755 0.0352632ZM201.282 67.6701V72.8186C201.282 78.8838 206.431 83.997 212.496 83.997H218.068C224.345 83.997 229.281 88.9338 229.281 95.1754V100.782C229.281 106.848 234.43 111.996 240.46 111.996H246.067C252.344 111.996 257.245 106.848 257.245 100.782V95.1754C257.245 88.8986 252.308 83.9617 246.067 83.9617H240.46C234.43 83.9617 229.281 78.8133 229.281 72.7833V67.6349C229.281 60.8996 234.43 55.998 240.46 55.998H246.067C252.344 55.998 257.245 50.8496 257.245 44.7843V39.1774C257.245 32.9006 252.308 27.9637 246.067 27.9637H240.46C234.43 27.9637 229.281 22.8153 229.281 16.7853V11.1784C229.281 4.90159 224.345 0 218.068 0H212.496C206.431 0 201.282 4.93685 201.282 11.1784V67.5996V67.6701Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Right: Text Container with min-width: 0 constraint */}
            <div className="about-text-container">
              <p className="about-eyebrow">
                WIT: CELEBRATING 25 YEARS IN 2026!
              </p>

              <div className="about-text-block">
                {/* Lines with safe text wrap */}
                <div className="about-lines-group">
                  {mainParagraphLines.map((lineWords, lineIdx) => (
                    <div key={lineIdx} className="about-line">
                      {lineWords.map((word, wordIdx) => {
                        const wordColor = getWordColor(globalWordIndex);
                        globalWordIndex++;
                        return (
                          <span
                            key={wordIdx}
                            className="reveal-word"
                            style={{ color: wordColor }}
                          >
                            {word}{" "}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>

                {/* Future statement line */}
                <div className="about-future-group">
                  {futureParagraphLines.map((lineWords, lineIdx) => (
                    <div key={lineIdx} className="about-line">
                      {lineWords.map((word, wordIdx) => {
                        const wordColor = getWordColor(globalWordIndex);
                        globalWordIndex++;
                        return (
                          <span
                            key={wordIdx}
                            className="reveal-word"
                            style={{ color: wordColor }}
                          >
                            {word}{" "}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutStats;
