import React, { useState, useEffect, useRef } from "react";

const expertiseData = [
  {
    id: "01",
    title: "RCS Messaging",
    description: [
      "WIT is a global pioneer in Rich Communication Services (RCS), delivering end-to-end messaging infrastructure for major operators and serving tens of millions of users worldwide.",
      "Our RCS Business Gateway enables operators to manage A2P messaging and conversational commerce, ensuring interoperability, analytics, and monetization of business messaging.",
    ],
    gradient: "linear-gradient(180deg, #0D8BFF 0%, #23F2FF 100%)",
    animationType: "rcs",
  },
  {
    id: "02",
    title: "Unified Communications",
    description: [
      "Carrier-grade fixed-mobile convergence integrating cloud PBX, omnichannel collaboration, and secure enterprise communications across web, desktop, and mobile.",
      "Designed to bridge legacy operator infrastructure with modern conversational platforms under rigorous carrier security standards.",
    ],
    gradient: "linear-gradient(180deg, #240E3E 0%, #56168F 100%)",
    animationType: "unified",
  },
  {
    id: "03",
    title: "TV & Video",
    description: [
      "High-throughput OTT and IPTV streaming architectures engineered for massive concurrency, ultra-low latency, and multiscreen broadcast environments.",
      "AI-driven contextual metadata, dynamic stream optimization, and targeted personalization built for tier-1 telecom operators.",
    ],
    gradient: "linear-gradient(180deg, #380C26 0%, #7E1854 100%)",
    animationType: "video",
  },
  {
    id: "04",
    title: "Agentic AI Technology",
    description: [
      "Autonomous multi-agent architecture engineered natively for carrier networks, orchestrating cross-system diagnostics, real-time remediation, and workflow execution.",
      "Enables telecom operators to deploy autonomous agents that reason, collaborate, and resolve complex network events without manual intervention.",
    ],
    gradient: "linear-gradient(180deg, #180D3D 0%, #3B1B7D 100%)",
    animationType: "agentic",
  },
  {
    id: "05",
    title: "5G New Calling",
    description: [
      "Transforming standard IMS voice calls into rich, interactive collaboration channels featuring real-time translation, synchronized visual data, and native dialer mini-apps.",
      "Carrier-grade low-latency calling with embedded conversational AI and augmented visual assistance directly on 5G networks.",
    ],
    gradient: "linear-gradient(180deg, #091E3A 0%, #104C82 100%)",
    animationType: "newcalling",
  },
];

const ITEM_HEIGHT = 73;

const Expertise = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const N = expertiseData.length;

  const paddedList = [
    { ...expertiseData[N - 2], originalIndex: N - 2, uniqueKey: "pad-prev-2" },
    { ...expertiseData[N - 1], originalIndex: N - 1, uniqueKey: "pad-prev-1" },
    ...expertiseData.map((item, idx) => ({
      ...item,
      originalIndex: idx,
      uniqueKey: `orig-${idx}`,
    })),
    { ...expertiseData[0], originalIndex: 0, uniqueKey: "pad-next-1" },
    { ...expertiseData[1], originalIndex: 1, uniqueKey: "pad-next-2" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;

      if (totalScrollable <= 0) return;

      const progress = Math.min(
        Math.max(-rect.top / totalScrollable, 0),
        0.999,
      );
      const newIndex = Math.floor(progress * N);
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [N]);

  const currentItem = expertiseData[activeIndex];
  const translateY = -(activeIndex * ITEM_HEIGHT);

  return (
    <>
      <style>{`
        .expertise-scroll-track {
          position: relative;
          height: 550vh;
        }

        .expertise-sticky-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          box-sizing: border-box;
          padding: 60px 0 50px 0;
        }

        .expertise-inner-container {
          width: 100%;
          height: 100%;
          max-height: 840px;
          display: flex;
          justify-content: space-between;
          align-items: stretch;
          gap: clamp(32px, 4vw, 64px);
          box-sizing: border-box;
        }

        /* Widened left column to prevent long titles from pushing the number off-screen */
        .expertise-left-col {
          width: clamp(490px, 38vw, 540px);
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
          box-sizing: border-box;
        }

        .expertise-heading {
          color: #F4F7FF;
          font-family: 'Geist', sans-serif;
          font-size: 72px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -1.44px;
          margin: 0;
        }

        .expertise-roller-window {
          height: 365px;
          width: 100%;
          position: relative;
          overflow: hidden;
          margin-top: 120px;
          padding-left: 4px;
          mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%);
        }

        .expertise-sliding-track {
          display: flex;
          flex-direction: column;
          width: 100%;
          transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }

        .expertise-list-row {
          display: flex;
          height: 73px;
          padding: 12px 10px;
          align-items: center;
          align-self: stretch;
          border-bottom: 1px solid #1A1A1A;
          border-left: none;
          border-right: none;
          border-top: none;
          background: transparent;
          cursor: pointer;
          text-align: left;
          box-sizing: border-box;
          user-select: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 
          Number Prefix:
          Added flex-shrink: 0 and removed negative transform
          so it CANNOT be squished or cut off by long text
        */
        .item-number-prefix {
          display: inline-flex;
          align-items: center;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: -0.36px;
          color: #F4F7FF;
          white-space: nowrap;
          overflow: hidden;
          width: 0;
          margin-right: 0;
          opacity: 0;
          flex-shrink: 0; /* Ensures number stays intact */
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      margin-right 0.4s cubic-bezier(0.16, 1, 0.3, 1),
                      opacity 0.3s ease;
        }

        .expertise-list-row.active .item-number-prefix {
          width: 34px;
          margin-right: 10px;
          opacity: 1;
        }

        .item-label {
          font-family: 'Geist', sans-serif;
          font-size: 40px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -0.8px;
          white-space: nowrap;
          transition: color 0.4s ease, opacity 0.4s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .expertise-right-col {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 24px;
          flex: 1 1 0;
          min-width: 0;
          align-self: stretch;
          box-sizing: border-box;
          margin-top: 68px;
        }

        .expertise-desc-wrapper {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .expertise-desc-text {
          align-self: stretch;
          color: #ABABAB;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: -0.17px;
          margin: 0;
          animation: fadeInDesc 0.45s ease forwards;
        }

        @keyframes fadeInDesc {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .expertise-card {
          flex: 1 0 0;
          align-self: stretch;
          width: 100%;
          min-height: 440px;
          border-radius: 12px;
          border: none;
          outline: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
          transition: background 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Abstract Animations */
        .anim-rcs-wrapper {
          position: relative;
          width: 300px;
          height: 260px;
        }

        .rcs-pill {
          position: absolute;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          animation: floatPill 5s ease-in-out infinite;
        }

        .pill-1 { width: 170px; height: 50px; top: 25px; left: 10px; animation-delay: 0s; }
        .pill-2 { width: 140px; height: 44px; top: 100px; right: 15px; animation-delay: 1.2s; background: rgba(255, 255, 255, 0.55); }
        .pill-3 { width: 190px; height: 54px; bottom: 30px; left: 30px; animation-delay: 2.4s; }

        @keyframes floatPill {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }

        .anim-unified-wrapper {
          width: 220px;
          height: 220px;
          animation: rotateLattice 18s linear infinite;
        }

        @keyframes rotateLattice { to { transform: rotate(360deg); } }

        .anim-video-wrapper {
          width: 300px;
          height: 180px;
        }

        .video-path {
          stroke-dasharray: 200;
          animation: flowWave 4s linear infinite;
        }

        @keyframes flowWave {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -400; }
        }

        .anim-agentic-wrapper {
          position: relative;
          width: 260px;
          height: 260px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .agentic-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(255, 255, 255, 0.4);
        }

        .ring-1 {
          width: 210px;
          height: 210px;
          animation: spinClockwise 14s linear infinite;
        }

        .ring-2 {
          width: 140px;
          height: 140px;
          border-style: solid;
          border-color: rgba(255, 255, 255, 0.6) transparent;
          animation: spinCounter 8s linear infinite;
        }

        .agentic-core {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #FFFFFF;
          box-shadow: 0 0 40px #A855F7, 0 0 75px #C084FC;
          animation: pulseCore 3s ease-in-out infinite;
        }

        @keyframes spinClockwise { to { transform: rotate(360deg); } }
        @keyframes spinCounter { to { transform: rotate(-360deg); } }
        @keyframes pulseCore {
          0%, 100% { transform: scale(0.9); box-shadow: 0 0 30px #A855F7; }
          50% { transform: scale(1.15); box-shadow: 0 0 65px #E879F9; }
        }

        .anim-calling-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          height: 160px;
        }

        .calling-bar {
          width: 10px;
          border-radius: 999px;
          background: #FFFFFF;
          animation: soundWave 1.4s ease-in-out infinite alternate;
        }

        .bar-1 { height: 45px; animation-delay: 0.1s; }
        .bar-2 { height: 90px; animation-delay: 0.3s; }
        .bar-3 { height: 140px; animation-delay: 0.5s; }
        .bar-4 { height: 105px; animation-delay: 0.2s; }
        .bar-5 { height: 55px; animation-delay: 0.4s; }

        @keyframes soundWave {
          0% { transform: scaleY(0.4); opacity: 0.6; }
          100% { transform: scaleY(1.2); opacity: 1; }
        }

        @media (max-width: 1024px) {
          .expertise-inner-container {
            gap: 32px;
          }

          .expertise-heading {
            font-size: 52px;
          }

          .expertise-roller-window {
            margin-top: 60px;
          }

          .expertise-right-col {
            margin-top: 40px;
          }

          .item-label {
            font-size: 30px;
            line-height: 38px;
          }

          .expertise-card {
            min-height: 360px;
          }
        }

        @media (max-width: 868px) {
          .expertise-scroll-track {
            height: auto;
          }

          .expertise-sticky-viewport {
            position: relative;
            height: auto;
            padding: 40px 0;
          }

          .expertise-inner-container {
            flex-direction: column;
            gap: 40px;
            max-height: none;
          }

          .expertise-left-col {
            width: 100%;
          }

          .expertise-roller-window {
            height: auto;
            margin-top: 32px;
            mask-image: none;
            -webkit-mask-image: none;
          }

          .expertise-sliding-track {
            transform: none !important;
          }

          .expertise-list-row {
            height: auto;
          }

          .item-label {
            font-size: 24px;
            line-height: 30px;
            white-space: normal;
          }

          .expertise-card {
            min-height: 280px;
          }
        }
      `}</style>

      <section ref={trackRef} className="expertise-scroll-track" id="expertise">
        <div className="expertise-sticky-viewport">
          <div className="section-container">
            <div className="expertise-inner-container">
              {/* Left Column */}
              <div className="expertise-left-col">
                <h2 className="expertise-heading">Expertise</h2>

                <div className="expertise-roller-window">
                  <div
                    className="expertise-sliding-track"
                    style={{ transform: `translateY(${translateY}px)` }}
                  >
                    {paddedList.map((item, pIndex) => {
                      const distance = Math.abs(pIndex - (2 + activeIndex));
                      const isActive = distance === 0;

                      let itemColor = "#424243";
                      let itemOpacity = 1;

                      if (isActive) {
                        itemColor = "#F4F7FF";
                        itemOpacity = 1;
                      } else if (distance === 1) {
                        itemColor = "#424243";
                        itemOpacity = 0.5;
                      } else if (distance === 2) {
                        itemColor = "#424243";
                        itemOpacity = 0.18;
                      } else {
                        itemOpacity = 0;
                      }

                      return (
                        <button
                          key={item.uniqueKey}
                          className={`expertise-list-row ${isActive ? "active" : ""}`}
                          onClick={() => setActiveIndex(item.originalIndex)}
                        >
                          <span className="item-number-prefix">{item.id}.</span>
                          <span
                            className="item-label"
                            style={{
                              color: itemColor,
                              opacity: itemOpacity,
                            }}
                          >
                            {item.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="expertise-right-col">
                <div className="expertise-desc-wrapper">
                  {currentItem.description.map((paragraph, pIdx) => (
                    <p
                      key={`${currentItem.id}-${pIdx}`}
                      className="expertise-desc-text"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div
                  className="expertise-card"
                  style={{ background: currentItem.gradient }}
                >
                  {/* 01. RCS Messaging */}
                  {currentItem.animationType === "rcs" && (
                    <div className="anim-rcs-wrapper">
                      <div className="rcs-pill pill-1"></div>
                      <div className="rcs-pill pill-2"></div>
                      <div className="rcs-pill pill-3"></div>
                    </div>
                  )}

                  {/* 02. Unified Communications */}
                  {currentItem.animationType === "unified" && (
                    <svg
                      className="anim-unified-wrapper"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="rgba(255,255,255,0.7)"
                      strokeWidth="2"
                    >
                      <polygon points="50,10 90,50 50,90 10,50" />
                      <circle
                        cx="50"
                        cy="50"
                        r="22"
                        stroke="white"
                        strokeWidth="2.5"
                      />
                      <line x1="10" y1="50" x2="90" y2="50" />
                      <line x1="50" y1="10" x2="50" y2="90" />
                    </svg>
                  )}

                  {/* 03. TV & Video */}
                  {currentItem.animationType === "video" && (
                    <svg
                      className="anim-video-wrapper"
                      viewBox="0 0 200 100"
                      fill="none"
                    >
                      <path
                        className="video-path"
                        d="M10 50 Q 55 10, 100 50 T 190 50"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                      />
                      <path
                        className="video-path"
                        d="M10 50 Q 55 90, 100 50 T 190 50"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}

                  {/* 04. Agentic AI */}
                  {currentItem.animationType === "agentic" && (
                    <div className="anim-agentic-wrapper">
                      <div className="agentic-ring ring-1"></div>
                      <div className="agentic-ring ring-2"></div>
                      <div className="agentic-core"></div>
                    </div>
                  )}

                  {/* 05. 5G New Calling */}
                  {currentItem.animationType === "newcalling" && (
                    <div className="anim-calling-wrapper">
                      <div className="calling-bar bar-1"></div>
                      <div className="calling-bar bar-2"></div>
                      <div className="calling-bar bar-3"></div>
                      <div className="calling-bar bar-4"></div>
                      <div className="calling-bar bar-5"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
