import React from "react";

const Hero = () => {
  const witPathD =
    "M56.5059 90.6387C77.3428 90.6387 93.751 107.048 93.751 127.885V239.28C93.7511 255.538 107.356 269.142 123.613 269.142C139.871 269.141 153.475 255.538 153.475 239.28V127.885C153.475 107.054 169.764 90.6388 190.607 90.6387H208.48C228.509 90.6387 245.726 107.026 245.726 127.885V243.552C245.726 258.485 256.432 269.142 270.642 269.142C284.896 269.142 296.231 258.327 296.231 243.552V124.263L296.499 124.53C298.203 105.369 313.923 90.751 333.59 90.751H351.463C371.497 90.7512 388.596 107.145 388.596 127.997V324.26C388.596 344.419 371.516 361.506 351.463 361.506H270.754C250.701 361.506 233.621 344.419 233.621 324.26V297.17C233.621 283.048 222.827 272.254 208.705 272.254C194.534 272.254 183.115 283.097 183.115 297.17V324.26C183.115 344.401 166.841 361.506 145.87 361.506H127.997C107.95 361.506 90.751 344.425 90.751 324.26V306.388C90.751 287.208 75.6859 272.142 56.5059 272.142H38.6328C18.5374 272.141 2.20153 255.023 1.50098 235.062L1.5 235.035V127.885C1.5 107.033 18.5983 90.6388 38.6328 90.6387H56.5059ZM553.684 144.257C574.52 144.257 590.929 160.666 590.929 181.503V324.26C590.929 344.404 574.539 361.506 553.684 361.506H535.811C515.648 361.506 498.565 344.422 498.565 324.26V270.08C498.565 251.593 483.631 236.621 464.432 236.621C444.376 236.621 427.299 219.42 427.299 199.376V181.503C427.299 160.651 444.397 144.257 464.432 144.257H553.684ZM698.127 1.5C718.957 1.50021 735.372 17.79 735.372 38.6328V56.5059C735.372 74.899 751.112 90.6385 769.505 90.6387H787.378C808.106 90.6387 824.511 107.051 824.511 127.885V145.757C824.511 165.895 808.239 183.003 787.378 183.003H769.505C751.13 183.003 735.372 197.937 735.372 218.597V235.009C735.372 253.402 751.112 269.141 769.505 269.142H787.378C808.106 269.142 824.511 285.554 824.511 306.388V324.26C824.511 344.398 808.239 361.506 787.378 361.506H769.505C749.452 361.506 732.372 344.419 732.372 324.26V306.388C732.372 287.323 717.31 272.254 698.127 272.254H680.366C660.21 272.254 643.121 255.29 643.121 235.121V38.6328C643.121 17.887 660.225 1.50002 680.366 1.5H698.127ZM590.929 56.6182C590.929 76.6527 574.536 93.7508 553.684 93.751H535.811C515.651 93.751 498.565 76.6713 498.565 56.6182V38.7451C498.566 17.9964 515.785 1.6123 535.811 1.6123H553.684C574.525 1.61248 590.812 18.0242 590.929 38.7373V56.6182Z";

  return (
    <>
      <style>{`
        /* Desktop base */
        .hero-section {
          padding-top: calc(70px + 163px);
          padding-bottom: 0;
          position: relative;
        }

        .hero-header-container {
          display: flex;
          width: 100%;
          margin: 0 auto;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
        }

        .hero-text-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          align-self: stretch;
          width: 100%;
        }

        .hero-headline {
          width: 457px;
          color: #F4F7FF;
          font-family: 'Geist', sans-serif;
          font-size: 80px;
          font-style: normal;
          font-weight: 500;
          line-height: 72px;
          letter-spacing: -1.6px;
          margin: 0;
        }

        .hero-subtext {
          width: 571px;
          color: #ABABAB;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: -0.17px;
          margin: 0;
        }

        .hero-buttons-container {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .btn-white {
          display: flex;
          padding: 8px 18px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 23px;
          background: #FFFFFF;
          color: #111111;
          font-family: 'Geist', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .btn-white:hover {
          background: #E5E5E5;
          transform: translateY(-1px);
        }

        .btn-grey {
          display: flex;
          padding: 8px 18px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 23px;
          border: 1px solid #343434;
          background: #232323;
          color: #F4F7FF;
          font-family: 'Geist', sans-serif;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .btn-grey:hover {
          background: #2c2d30;
          border-color: #4a4a4a;
          transform: translateY(-1px);
        }

        .hero-center-card {
          display: flex;
          width: 100%;
          height: 562px;
          margin: 77px auto 0;
          padding: 102px 230px 103px 230px;
          justify-content: center;
          align-items: center;
          border-radius: 24px;
          border: 1px solid #343434;
          background: #232323;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        .hero-wit-svg {
          width: 820.011px;
          height: 357.005px;
          max-width: 100%;
          flex-shrink: 0;
          display: block;
        }

        .wit-stroke-animated {
          stroke-dasharray: 260 800;
          stroke-dashoffset: 0;
          animation: strokeLoop 8s linear infinite;
        }

        @keyframes strokeLoop {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -2120; }
        }

        /* ================= MOBILE RESPONSIVE (<= 768px) ================= */
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 105px; /* Clean breathing room below mobile navbar */
            padding-bottom: 24px;
          }

          .hero-header-container {
            gap: 20px;
          }

          .hero-text-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          /* Exact mobile headline: 42px, line-height 44px */
          .hero-headline {
            width: 100%;
            font-size: 42px;
            line-height: 44px;
            letter-spacing: -1px;
          }

          /* Exact mobile body text: 16px, line-height 24px */
          .hero-subtext {
            width: 100%;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.17px;
          }

          /* Side-by-side buttons on mobile */
          .hero-buttons-container {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
          }

          /* Mobile card: portrait aspect ratio matching your screenshot */
          .hero-center-card {
            margin-top: 32px;
            height: auto;
            aspect-ratio: 1 / 1.05;
            min-height: 320px;
            padding: 28px 20px;
            border-radius: 18px;
          }

          .hero-wit-svg {
            width: 90%;
            height: auto;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="section-container">
          <div className="hero-header-container">
            {/* Headline and Subtext */}
            <div className="hero-text-row">
              <h1 className="hero-headline">
                Agentic AI <br />
                for Telecom
              </h1>
              <p className="hero-subtext">
                The Future of Communications Starts Here. AINNOV8 unifies Voice
                AI, Chat AI, and Visual AI into one carrier-grade platform,
                built for operators.
              </p>
            </div>

            {/* Buttons (Side-by-side as in your screenshot) */}
            <div className="hero-buttons-container">
              <a href="#try" className="btn-white">
                Try AINNOV8
              </a>
              <a href="#sales" className="btn-grey">
                Contact Sales
              </a>
            </div>
          </div>

          {/* Center Card with Animated Wit SVG */}
          <div className="hero-center-card">
            <svg
              className="hero-wit-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="827"
              height="363"
              viewBox="0 0 827 363"
              fill="none"
            >
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <path
                d={witPathD}
                fill="#666666"
                stroke="rgba(244, 247, 255, 0.25)"
                strokeWidth="3"
              />

              <path
                className="wit-stroke-animated"
                d={witPathD}
                fill="none"
                stroke="#F4F7FF"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glow)"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
