import React from "react";

const Footer = () => {
  return (
    <>
      <style>{`
        /* Footer Container: 190px top spacing from the gradient card */
        .site-footer {
          padding-top: 190px;
          padding-bottom: 40px;
          position: relative;
          background: #0C0D0E;
          box-sizing: border-box;
          overflow: hidden;
        }

        /* 
          Main Footer Container:
          display flex, width 1279.689px (max 1280px),
          justify-content space-between, align-items flex-start
        */
        .footer-main-container {
          display: flex;
          width: 100%;
          
          margin: 0 auto;
          justify-content: space-between;
          align-items: flex-start;
          box-sizing: border-box;
        }

        /* 
          Logo:
          width: 82.689px, height: 36px, flex-shrink: 0,
          fill: #FFF, stroke-width: 0.303px, stroke: #F4F7FF
        */
        .footer-logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .footer-logo-svg {
          width: 82.689px;
          height: 36px;
          flex-shrink: 0;
          display: block;
        }

        /* Links Columns Group */
        .footer-links-group {
          display: flex;
          align-items: flex-start;
          gap: 120px;
        }

        /* 
          Vertical Containers:
          display flex, flex-direction column, align-items flex-start, gap 24px
        */
        .footer-vertical-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
        }

        /* 
          Link Text:
          color: #FFF, font-family: Geist, font-size: 18px, font-style: normal,
          font-weight: 400, line-height: 25px (138.889%), letter-spacing: -0.17px
        */
        .footer-nav-link {
          color: #FFFFFF;
          font-family: 'Geist', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: -0.17px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-nav-link:hover {
          color: #20E3F3;
          transform: translateX(2px);
        }

        /* Arrow up right (width 20px, height 20px) */
        .footer-arrow-icon {
          width: 20px;
          height: 20px;
          display: block;
          transition: transform 0.2s ease;
        }

        .footer-nav-link:hover .footer-arrow-icon {
          transform: translate(2px, -2px);
        }

        /* Socials Row */
        .footer-socials-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* 
          Socials Container:
          width 60px, height 60px, padding 20px, justify-content center,
          align-items center, aspect-ratio 1/1, border-radius 50px, background #232323
        */
        .social-circle-btn {
          display: flex;
          width: 60px;
          height: 60px;
          padding: 20px;
          justify-content: center;
          align-items: center;
          aspect-ratio: 1/1;
          border-radius: 50px;
          background: #232323;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-sizing: border-box;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .social-circle-btn:hover {
          background: #2c2d30;
          border-color: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
        }

        /* Socials logo: width 20px, height 20px, flex-shrink 0 */
        .social-icon-svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          display: block;
        }

        /* 
          Container for created and terms of use:
          display flex, width 1284px, justify-content space-between, align-items center,
          margin-top: 41px (exact spacing from screenshot)
        */
        .footer-bottom-container {
          display: flex;
          width: 100%;
          max-width: 1284px;
          margin: 41px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
        }

        /* 
          2026 WIT Software Text:
          color: #FFF, font-family: "Geist Mono", font-size: 14px,
          font-weight: 500, line-height: 100% (14px), letter-spacing: -0.28px, uppercase
        */
        .footer-copyright {
          color: #FFFFFF;
          font-family: 'Geist Mono', monospace;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: -0.28px;
          text-transform: uppercase;
          margin: 0;
        }

        /* Terms & Privacy Links Container */
        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        /* 
          Privacy and cookies policy text and t&C text:
          color: #ABABAB, font-family: Geist, font-size: 14px,
          font-weight: 500, line-height: 100% (14px), letter-spacing: -0.28px, uppercase
        */
        .footer-legal-link {
          color: #ABABAB;
          font-family: 'Geist', sans-serif;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 14px;
          letter-spacing: -0.28px;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-legal-link:hover {
          color: #FFFFFF;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .site-footer {
            padding-top: 100px;
          }

          .footer-main-container {
            flex-wrap: wrap;
            gap: 48px;
          }

          .footer-links-group {
            gap: 60px;
          }

          .footer-bottom-container {
            margin-top: 40px;
          }
        }

        @media (max-width: 768px) {
          .site-footer {
            padding-top: 80px;
          }

          .footer-main-container {
            flex-direction: column;
            gap: 40px;
          }

          .footer-links-group {
            flex-direction: column;
            gap: 24px;
          }

          .footer-bottom-container {
            flex-direction: column-reverse;
            gap: 20px;
            align-items: flex-start;
          }

          .footer-legal-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="section-container">
          {/* Main Container (width: 1279.689px) */}
          <div className="footer-main-container">
            {/* 1. Official Wit Logo (82.689px by 36px) */}
            <a href="#" className="footer-logo-link" aria-label="WIT Home">
              <svg
                className="footer-logo-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="37"
                viewBox="0 0 84 37"
                fill="none"
              >
                <path
                  d="M5.69818 9.14062C7.79919 9.14065 9.45382 10.7946 9.45404 12.8955V24.1289C9.45404 25.7682 10.8256 27.1404 12.4648 27.1406C14.1042 27.1406 15.4765 25.7683 15.4765 24.1289V12.8955C15.4767 10.7952 17.1191 9.14071 19.2206 9.14062H21.0234C23.0428 9.14079 24.779 10.7925 24.7792 12.8955V24.5596C24.7792 26.0653 25.8583 27.1404 27.291 27.1406C28.7284 27.1406 29.872 26.0495 29.872 24.5596V12.5312L29.8984 12.5576C30.0702 10.6255 31.6556 9.15153 33.6386 9.15137H35.4413C37.4615 9.15144 39.1855 10.8046 39.1855 12.9072V32.6982C39.1855 34.731 37.4634 36.454 35.4413 36.4541H27.3027C25.2806 36.4541 23.5586 34.7311 23.5585 32.6982V29.9668C23.5585 28.5428 22.4698 27.4541 21.0458 27.4541C19.6168 27.4541 18.4648 28.5477 18.4648 29.9668V32.6982C18.4648 34.7291 16.8243 36.4539 14.7099 36.4541H12.9072C10.8857 36.4541 9.15133 34.7317 9.15131 32.6982V30.8955C9.15108 28.9616 7.63211 27.4424 5.69818 27.4424H3.89545C1.86922 27.4421 0.221929 25.7159 0.151306 23.7031V12.8955C0.151539 10.7931 1.87549 9.14086 3.89545 9.14062H5.69818ZM55.8329 14.5469C57.9341 14.5469 59.5888 16.2016 59.5888 18.3027V32.6982C59.5888 34.7295 57.9359 36.4541 55.8329 36.4541H54.0302C51.9972 36.4539 50.2754 34.7312 50.2753 32.6982V27.2344C50.2751 25.3703 48.7688 23.8604 46.8329 23.8604C44.8107 23.8604 43.0891 22.1265 43.0888 20.1055V18.3027C43.0888 16.2 44.8127 14.5469 46.8329 14.5469H55.8329ZM70.3984 0.151367C72.4988 0.151367 74.154 1.79392 74.1542 3.89551V5.69824C74.1543 7.55281 75.7411 9.14035 77.5956 9.14062H79.3984C81.4884 9.14062 83.1423 10.7949 83.1425 12.8955V14.6982C83.1425 16.7289 81.502 18.4541 79.3984 18.4541H77.5956C75.743 18.4544 74.1544 19.96 74.1542 22.043V23.6982C74.1543 25.5528 75.7411 27.1403 77.5956 27.1406H79.3984C81.4884 27.1406 83.1423 28.7949 83.1425 30.8955V32.6982C83.1425 34.7289 81.502 36.4541 79.3984 36.4541H77.5956C75.5737 36.4538 73.8515 34.7309 73.8515 32.6982V30.8955C73.8513 28.9733 72.3326 27.4541 70.3984 27.4541H68.6074C66.575 27.454 64.8517 25.7435 64.8515 23.71V3.89551C64.8517 1.80375 66.5766 0.151422 68.6074 0.151367H70.3984ZM59.5888 5.70996C59.5886 7.73004 57.9355 9.45408 55.8329 9.4541H54.0302C51.9977 9.45386 50.2756 7.73177 50.2753 5.70996V3.90723C50.2754 1.81509 52.0111 0.163317 54.0302 0.163086H55.8329C57.9345 0.163108 59.5769 1.81765 59.5888 3.90625V5.70996Z"
                  fill="white"
                  stroke="#F4F7FF"
                  strokeWidth="0.302516"
                />
              </svg>
            </a>

            {/* 2. Links Columns (gap 24px) */}
            <div className="footer-links-group">
              {/* Column 1 */}
              <div className="footer-vertical-col">
                <a href="#expertise" className="footer-nav-link">
                  <span>Expertise</span>
                  <svg
                    className="footer-arrow-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#products" className="footer-nav-link">
                  <span>Products</span>
                  <svg
                    className="footer-arrow-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>

              {/* Column 2 */}
              <div className="footer-vertical-col">
                <a href="#about" className="footer-nav-link">
                  <span>About us</span>
                  <svg
                    className="footer-arrow-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#team" className="footer-nav-link">
                  <span>Meet the Team</span>
                  <svg
                    className="footer-arrow-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#careers" className="footer-nav-link">
                  <span>Careers</span>
                  <svg
                    className="footer-arrow-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="#contact" className="footer-nav-link">
                  <span>Contact us</span>
                  <svg
                    className="footer-arrow-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* 3. Socials Container: 60px x 60px circle buttons with 20px SVG icons */}
            <div className="footer-socials-row">
              {/* Facebook */}
              <a
                href="#facebook"
                className="social-circle-btn"
                title="Facebook"
                aria-label="Facebook"
              >
                <svg
                  className="social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15 1.6665H12.5C11.395 1.6665 10.3352 2.10549 9.55376 2.88689C8.77236 3.66829 8.33337 4.7281 8.33337 5.83317V8.33317H5.83337V11.6665H8.33337V18.3332H11.6667V11.6665H14.1667L15 8.33317H11.6667V5.83317C11.6667 5.61216 11.7545 5.4002 11.9108 5.24391C12.0671 5.08763 12.279 4.99984 12.5 4.99984H15V1.6665Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#instagram"
                className="social-circle-btn"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg
                  className="social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14.1666 1.6665H5.83329C3.53211 1.6665 1.66663 3.53198 1.66663 5.83317V14.1665C1.66663 16.4677 3.53211 18.3332 5.83329 18.3332H14.1666C16.4678 18.3332 18.3333 16.4677 18.3333 14.1665V5.83317C18.3333 3.53198 16.4678 1.6665 14.1666 1.6665Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3334 9.47476C13.4362 10.1683 13.3178 10.8766 12.9948 11.4989C12.6719 12.1213 12.161 12.6259 11.5347 12.9412C10.9085 13.2564 10.1987 13.3661 9.50653 13.2547C8.81431 13.1433 8.17484 12.8165 7.67907 12.3207C7.1833 11.825 6.85648 11.1855 6.7451 10.4933C6.63371 9.80106 6.74343 9.09134 7.05865 8.46507C7.37386 7.83881 7.87853 7.32788 8.50086 7.00496C9.12319 6.68205 9.8315 6.56359 10.525 6.66643C11.2325 6.77133 11.8874 7.10098 12.3931 7.60669C12.8988 8.11239 13.2285 8.76733 13.3334 9.47476Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5834 5.4165H14.5917"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                className="social-circle-btn"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                <svg
                  className="social-icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M13.3334 6.6665C14.6595 6.6665 15.9312 7.19329 16.8689 8.13097C17.8066 9.06865 18.3334 10.3404 18.3334 11.6665V17.4998H15V11.6665C15 11.2245 14.8244 10.8006 14.5119 10.488C14.1993 10.1754 13.7754 9.99984 13.3334 9.99984C12.8913 9.99984 12.4674 10.1754 12.1549 10.488C11.8423 10.8006 11.6667 11.2245 11.6667 11.6665V17.4998H8.33337V11.6665C8.33337 10.3404 8.86016 9.06865 9.79784 8.13097C10.7355 7.19329 12.0073 6.6665 13.3334 6.6665Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99996 7.5H1.66663V17.5H4.99996V7.5Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.33329 4.99984C4.25377 4.99984 4.99996 4.25365 4.99996 3.33317C4.99996 2.4127 4.25377 1.6665 3.33329 1.6665C2.41282 1.6665 1.66663 2.4127 1.66663 3.33317C1.66663 4.25365 2.41282 4.99984 3.33329 4.99984Z"
                    stroke="white"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Container: width 1284px, 41px margin-top */}
          <div className="footer-bottom-container">
            {/* 2026 WIT Software Text */}
            <p className="footer-copyright">POWERED BY — © 2026 WIT SOFTWARE</p>

            {/* Privacy and Cookies Policy and T&C Text */}
            <div className="footer-legal-links">
              <a href="#privacy" className="footer-legal-link">
                PRIVACY & COOKIE POLICY
              </a>
              <a href="#terms" className="footer-legal-link">
                TERMS AND CONDITIONS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
