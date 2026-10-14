import React from "react";

const CtaBanner = () => {
  return (
    <>
      <style>{`
        /* CTA Section: 51px top spacing from previous section */
        .cta-section {
          padding-top: 51px;
          padding-bottom: 0;
          position: relative;
          box-sizing: border-box;
          background: #0C0D0E;
        }

        /* 
          Gradient Container:
          width 1280px, height 540px, padding 55px 31px,
          flex-direction column, justify-content space-between, align-items center
        */
        .cta-gradient-card {
          display: flex;
          width: 100%;
          
          height: 540px;
          padding: 55px 31px;
          margin: 0 auto;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          border-radius: 28px;
          background: linear-gradient(180deg, #268CFF 0%, #1FE2F3 100%);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .cta-gradient-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 60px rgba(31, 226, 243, 0.25);
        }

        /* Logo: width 240px, height 105px */
        .cta-logo-wrapper {
          width: 240px;
          height: 105px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-brand-svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* Container for text: width 668px, column, gap 8px */
        .cta-text-container {
          display: flex;
          width: 668px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          box-sizing: border-box;
        }

        /* Innovation starts with people text */
        .cta-eyebrow {
          color: #232323;
          text-align: center;
         
          font-size: 32px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: -0.96px;
          margin: 0;
        }

        /* Let's build text */
        .cta-heading {
          color: #232323;
          text-align: center;
         
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 44px; /* 91.667% */
          letter-spacing: -0.96px;
          margin: 0;
        }

        /* Contact us button: padding 12px 16px, radius 41px, border 1px solid #343434, bg #232323 */
        .cta-contact-btn {
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

        .cta-contact-btn:hover {
          background: #2b2c30;
          border-color: #4a4a4a;
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        /* Button text */
        .cta-btn-text {
          color: #FFFFFF;
          
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 133.333% */
        }

        /* Arrow: width 24px, height 24px */
        .cta-btn-arrow {
          width: 24px;
          height: 24px;
          display: block;
          transition: transform 0.2s ease;
        }

        .cta-contact-btn:hover .cta-btn-arrow {
          transform: translateX(3px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .cta-gradient-card {
            height: auto;
            min-height: 480px;
            padding: 40px 24px;
            gap: 36px;
          }

          .cta-text-container {
            width: 100%;
          }

          .cta-eyebrow {
            font-size: 26px;
          }

          .cta-heading {
            font-size: 38px;
            line-height: 40px;
          }
        }

        @media (max-width: 600px) {
          .cta-gradient-card {
            border-radius: 20px;
            padding: 36px 16px;
          }

          .cta-logo-wrapper {
            width: 180px;
            height: auto;
          }

          .cta-eyebrow {
            font-size: 20px;
          }

          .cta-heading {
            font-size: 28px;
            line-height: 32px;
          }
        }
      `}</style>

      <section className="cta-section">
        <div className="section-container">
          <div className="cta-gradient-card">
            {/* Top: Official Wit Logo SVG */}
            <div className="cta-logo-wrapper">
              <svg
                className="cta-brand-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="241"
                height="106"
                viewBox="0 0 241 106"
                fill="none"
              >
                <path
                  d="M15.9628 26.3682C21.9031 26.3682 26.5761 31.0656 26.5761 37.0332V69.7959C26.5762 74.7382 30.6871 78.8681 35.6035 78.8682C40.5199 78.8682 44.6307 74.7382 44.6308 69.7959V37.0332C44.6308 31.0662 49.2709 26.3682 55.2119 26.3682H60.4423C66.1502 26.3682 71.0556 31.0634 71.0556 37.0332V71.0518C71.0556 75.5999 74.314 78.8681 78.6357 78.8682C82.962 78.8682 86.413 75.5623 86.413 71.0518V36.666L86.455 36.708C86.6376 30.9117 91.2385 26.4014 97.0595 26.4014H102.29C107.998 26.4014 112.871 31.0973 112.871 37.0664V94.7891C112.871 100.558 108 105.454 102.29 105.454H78.6689C72.9586 105.454 68.0888 100.558 68.0888 94.7891V86.8223C68.0888 82.5082 64.7999 79.2043 60.5087 79.2041C56.2123 79.2041 52.7304 82.513 52.7304 86.8223V94.7891C52.7304 100.556 48.0932 105.454 42.1181 105.454H36.8867C31.177 105.454 26.2734 100.559 26.2734 94.7891V89.5332C26.2734 83.7313 21.7346 79.171 15.9628 79.1709H10.7314C5.01703 79.1707 0.351343 74.272 0.151306 68.5449V37.0332C0.151306 31.0642 5.02308 26.3684 10.7314 26.3682H15.9628ZM161.477 42.1387C167.417 42.1389 172.089 46.8353 172.089 52.8027V94.7891C172.089 100.556 167.418 105.454 161.477 105.454H156.245C150.502 105.454 145.632 100.558 145.632 94.7891V78.8545C145.632 73.2529 141.128 68.7238 135.354 68.7236C129.644 68.7236 124.774 63.795 124.773 58.0596V52.8027C124.773 46.8336 129.646 42.1387 135.354 42.1387H161.477ZM203.752 0.151367C209.691 0.151519 214.365 4.81508 214.365 10.7832V16.0391C214.365 21.6095 219.101 26.3681 224.643 26.3682H229.874C235.782 26.3683 240.454 31.066 240.454 37.0332V42.2891C240.454 48.0557 235.817 52.9539 229.874 52.9541H224.643C219.103 52.9542 214.365 57.4794 214.365 63.7129V68.5391C214.365 74.1095 219.101 78.8681 224.643 78.8682H229.874C235.782 78.8683 240.454 83.566 240.454 89.5332V94.7891C240.454 100.556 235.817 105.454 229.874 105.454H224.643C218.932 105.454 214.062 100.558 214.062 94.7891V89.5332C214.062 83.7648 209.524 79.2043 203.752 79.2041H198.554C192.811 79.2041 187.94 74.3421 187.94 68.5723V10.7832C187.94 4.8465 192.813 0.151367 198.554 0.151367H203.752ZM161.477 0.18457C167.417 0.184787 172.055 4.88216 172.089 10.8154L172.09 10.8164H172.089V16.0723C172.089 21.8068 167.418 26.7039 161.477 26.7041H156.245C150.502 26.7041 145.632 21.8087 145.632 16.0723V10.8164C145.632 4.87941 150.538 0.184596 156.245 0.18457H161.477Z"
                  fill="white"
                  stroke="#F4F7FF"
                  strokeWidth="0.302516"
                />
              </svg>
            </div>

            {/* Middle: Text Container (width 668px, gap 8px) */}
            <div className="cta-text-container">
              <p className="cta-eyebrow">Innovation starts with People.</p>
              <h2 className="cta-heading">
                Let’s build the next generation of AI communications.
              </h2>
            </div>

            {/* Bottom: Contact Us Button */}
            <a href="#contact" className="cta-contact-btn">
              <span className="cta-btn-text">Contact Us</span>
              <svg
                className="cta-btn-arrow"
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

export default CtaBanner;
