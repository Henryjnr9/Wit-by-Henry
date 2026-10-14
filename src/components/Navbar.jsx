import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <style>{`
        /* ================= DESKTOP NAVBAR ================= */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: #111111;
          border-bottom: 1px solid #232323;
          z-index: 1000;
        }

        .navbar-container {
          display: flex;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 16px var(--desktop-padding);
          justify-content: space-between;
          align-items: center;
          box-sizing: border-box;
        }

        /* Wit Logo */
        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }

        .wit-logo-svg {
          width: 50.541px;
          height: 21.997px;
          flex-shrink: 0;
          display: block;
        }

        /* Desktop Right Group */
        .nav-right-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 24px;
        }

        .nav-links-list {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-item {
          color: #ABABAB;
          
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-item:hover {
          color: #FFFFFF;
        }

        .nav-divider {
          width: 1px;
          height: 38px;
          background: #2C2C2C;
          flex-shrink: 0;
        }

        .btn-try {
          background: #FFFFFF;
          color: #111111;
          
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          padding: 10px 22px;
          border-radius: 9999px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .btn-try:hover {
          background: #E5E5E5;
          transform: translateY(-1px);
        }

        /* ================= MOBILE HAMBURGER PILL (IMAGE 1) ================= */
        .mobile-hamburger-pill {
          display: none;
          width: 56px;
          height: 36px;
          background: #232323;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          padding: 0 14px;
          flex-direction: column;
          justify-content: center;
          align-items: flex-end; /* Right-aligns the staggered lines */
          gap: 6px;
          box-sizing: border-box;
          transition: all 0.25s ease;
        }

        .mobile-hamburger-pill .pill-line {
          height: 2px;
          background-color: #FFFFFF;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Top line: longer (24px) */
        .mobile-hamburger-pill .line-top {
          width: 24px;
        }

        /* Bottom line: shorter (15px), right-aligned matching Image 1 */
        .mobile-hamburger-pill .line-bottom {
          width: 15px;
        }

        /* Morph into clean close 'X' when active */
        .mobile-hamburger-pill.is-open {
          align-items: center;
          justify-content: center;
          background: #2b2c30;
        }

        .mobile-hamburger-pill.is-open .line-top {
          width: 20px;
          transform: translateY(4px) rotate(45deg);
        }

        .mobile-hamburger-pill.is-open .line-bottom {
          width: 20px;
          transform: translateY(-4px) rotate(-45deg);
        }

        /* ================= FULLSCREEN MOBILE OVERLAY (IMAGE 2) ================= */
        .mobile-fullscreen-overlay {
          display: none;
        }

        @media (max-width: 868px) {
          .nav-right-container {
            display: none;
          }

          .mobile-hamburger-pill {
            display: flex;
          }

          /* Fullscreen Viewport Menu */
          .mobile-fullscreen-overlay {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100dvh;
            background-color: #0C0D0E;
            z-index: 9999;
            padding: 16px var(--desktop-padding) 40px;
            box-sizing: border-box;
            opacity: 0;
            pointer-events: none;
            transform: translateY(-8px);
            transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1),
                        transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            overflow-y: auto;
          }

          .mobile-fullscreen-overlay.open {
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0);
          }

          /* Top Header Bar inside Fullscreen Overlay */
          .mobile-overlay-header {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            height: 40px;
            flex-shrink: 0;
          }

          /* 
            Container housing items (Exact Figma specs):
            display: flex; flex-direction: column; justify-content: center;
            align-items: flex-start; gap: 39px; align-self: stretch;
          */
          .mobile-nav-items-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 39px;
            align-self: stretch;
            margin: auto 0;
            padding-left: 4px;
            box-sizing: border-box;
          }

          /* 
            Link Text (Exact Figma specs):
            color: var(--Body, #ABABAB); font-family: Geist;
            font-size: 41px; font-weight: 500; line-height: 36px (87.805%);
          */
          .mobile-nav-link {
            color: #ABABAB;
            
            font-size: 41px;
            font-style: normal;
            font-weight: 500;
            line-height: 36px;
            text-decoration: none;
            transition: color 0.2s ease, transform 0.2s ease;
          }

          .mobile-nav-link:hover,
          .mobile-nav-link:active {
            color: #F4F7FF;
            transform: translateX(4px);
          }

          /* Vertical Separator Line */
          .mobile-nav-divider {
            width: 1px;
            height: 38px;
            background: #2C2C2C;
            margin-top: -10px;
            margin-bottom: -15px;
          }

          /* Try AINNOV8 Mobile Button */
          .btn-try-mobile {
            background: #FFFFFF;
            color: #111111;
            
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            padding: 12px 24px;
            border-radius: 9999px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            transition: all 0.2s ease;
          }

          .btn-try-mobile:active {
            background: #E5E5E5;
            transform: scale(0.98);
          }
        }
      `}</style>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <a href="#" className="logo-link" aria-label="WIT Home">
            <svg
              className="wit-logo-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="22"
              viewBox="0 0 51 22"
              fill="none"
            >
              <g clipPath="url(#clip0_2_111)">
                <path
                  d="M18.1658 7.69731C18.1658 6.46408 19.1357 5.49413 20.369 5.49413H21.4705C22.6553 5.49413 23.6668 6.46408 23.6668 7.69731V19.794C23.6668 20.9856 22.6553 21.9971 21.4705 21.9971H16.4961C15.3114 21.9971 14.2998 20.9856 14.2998 19.794V18.1243C14.2998 17.2028 13.5932 16.4961 12.6717 16.4961C11.7503 16.4961 11.002 17.2028 11.002 18.1243V19.794C11.002 20.9856 10.039 21.9971 8.79883 21.9971H7.69725C6.51252 21.9971 5.49408 20.9856 5.49408 19.794V18.6924C5.49408 17.4592 4.52413 16.4892 3.2909 16.4892H2.18932C1.00459 16.4892 0.0346418 15.4777 -0.00692749 14.293V7.69038C-0.00692749 6.45716 1.00459 5.48721 2.18932 5.48721H3.2909C4.52413 5.48721 5.49408 6.45716 5.49408 7.69038V14.5562C5.49408 15.6093 6.37396 16.4892 7.42705 16.4892C8.48014 16.4892 9.36002 15.6093 9.36002 14.5562V7.69038C9.36002 6.45716 10.323 5.48721 11.5563 5.48721H12.6579C13.8426 5.48721 14.861 6.45716 14.861 7.69038V14.8195C14.861 15.7895 15.5608 16.4892 16.4892 16.4892C17.4175 16.4892 18.1589 15.7825 18.1589 14.8195V7.69038L18.1658 7.69731ZM28.4334 14.2999C29.6666 14.2999 30.6296 15.2629 30.6296 16.4546V19.794C30.6296 20.9856 31.6412 21.9971 32.8328 21.9971H33.9344C35.1676 21.9971 36.1376 20.9856 36.1376 19.794V10.9951C36.1376 9.76192 35.1676 8.79197 33.9344 8.79197H28.4334C27.2487 8.79197 26.2372 9.76192 26.2372 10.9951V12.0967C26.2372 13.2815 27.2487 14.2999 28.4334 14.2999ZM33.9344 5.98533e-05H32.8328C31.6481 5.98533e-05 30.6296 0.97001 30.6296 2.1963V3.29789C30.6296 4.48261 31.6412 5.49413 32.8328 5.49413H33.9344C35.1676 5.49413 36.1376 4.48261 36.1376 3.29789V2.1963C36.1306 0.97001 35.1676 5.98533e-05 33.9344 5.98533e-05ZM39.5393 13.2884V14.2999C39.5393 15.4915 40.5508 16.4961 41.7425 16.4961H42.8372C44.0704 16.4961 45.0403 17.4661 45.0403 18.6924V19.794C45.0403 20.9856 46.0518 21.9971 47.2366 21.9971H48.3382C49.5714 21.9971 50.5344 20.9856 50.5344 19.794V18.6924C50.5344 17.4592 49.5645 16.4892 48.3382 16.4892H47.2366C46.0518 16.4892 45.0403 15.4777 45.0403 14.293V13.2814C45.0403 11.9582 46.0518 10.9951 47.2366 10.9951H48.3382C49.5714 10.9951 50.5344 9.98362 50.5344 8.79197V7.69038C50.5344 6.45716 49.5645 5.48721 48.3382 5.48721H47.2366C46.0518 5.48721 45.0403 4.47569 45.0403 3.29096V2.18938C45.0403 0.956154 44.0704 -0.00686836 42.8372 -0.00686836H41.7425C40.5508 -0.00686836 39.5393 0.963082 39.5393 2.18938V13.2745V13.2884Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_111">
                  <rect width="50.5413" height="21.9971" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* Desktop Nav Items */}
          <div className="nav-right-container">
            <div className="nav-links-list">
              <a href="#about" className="nav-item">
                About us
              </a>
              <a href="#products" className="nav-item">
                Products
              </a>
              <a href="#expertise" className="nav-item">
                Expertise
              </a>
              <a href="#careers" className="nav-item">
                Careers
              </a>
              <a href="#blog" className="nav-item">
                Blog
              </a>
            </div>

            <div className="nav-divider"></div>

            <a href="#try" className="btn-try">
              Try AINNOV8
            </a>
          </div>

          {/* Mobile Hamburger Pill Button (Image 1) */}
          <button
            className={`mobile-hamburger-pill ${mobileMenuOpen ? "is-open" : ""}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="pill-line line-top"></span>
            <span className="pill-line line-bottom"></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Viewport Overlay (Image 2) */}
      <div
        className={`mobile-fullscreen-overlay ${mobileMenuOpen ? "open" : ""}`}
      >
        {/* Top Header Row: Logo on Left, Close Button on Right */}
        <div className="mobile-overlay-header">
          <a
            href="#"
            className="logo-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="wit-logo-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="51"
              height="22"
              viewBox="0 0 51 22"
              fill="none"
            >
              <g clipPath="url(#clip0_2_111_overlay)">
                <path
                  d="M18.1658 7.69731C18.1658 6.46408 19.1357 5.49413 20.369 5.49413H21.4705C22.6553 5.49413 23.6668 6.46408 23.6668 7.69731V19.794C23.6668 20.9856 22.6553 21.9971 21.4705 21.9971H16.4961C15.3114 21.9971 14.2998 20.9856 14.2998 19.794V18.1243C14.2998 17.2028 13.5932 16.4961 12.6717 16.4961C11.7503 16.4961 11.002 17.2028 11.002 18.1243V19.794C11.002 20.9856 10.039 21.9971 8.79883 21.9971H7.69725C6.51252 21.9971 5.49408 20.9856 5.49408 19.794V18.6924C5.49408 17.4592 4.52413 16.4892 3.2909 16.4892H2.18932C1.00459 16.4892 0.0346418 15.4777 -0.00692749 14.293V7.69038C-0.00692749 6.45716 1.00459 5.48721 2.18932 5.48721H3.2909C4.52413 5.48721 5.49408 6.45716 5.49408 7.69038V14.5562C5.49408 15.6093 6.37396 16.4892 7.42705 16.4892C8.48014 16.4892 9.36002 15.6093 9.36002 14.5562V7.69038C9.36002 6.45716 10.323 5.48721 11.5563 5.48721H12.6579C13.8426 5.48721 14.861 6.45716 14.861 7.69038V14.8195C14.861 15.7895 15.5608 16.4892 16.4892 16.4892C17.4175 16.4892 18.1589 15.7825 18.1589 14.8195V7.69038L18.1658 7.69731ZM28.4334 14.2999C29.6666 14.2999 30.6296 15.2629 30.6296 16.4546V19.794C30.6296 20.9856 31.6412 21.9971 32.8328 21.9971H33.9344C35.1676 21.9971 36.1376 20.9856 36.1376 19.794V10.9951C36.1376 9.76192 35.1676 8.79197 33.9344 8.79197H28.4334C27.2487 8.79197 26.2372 9.76192 26.2372 10.9951V12.0967C26.2372 13.2815 27.2487 14.2999 28.4334 14.2999ZM33.9344 5.98533e-05H32.8328C31.6481 5.98533e-05 30.6296 0.97001 30.6296 2.1963V3.29789C30.6296 4.48261 31.6412 5.49413 32.8328 5.49413H33.9344C35.1676 5.49413 36.1376 4.48261 36.1376 3.29789V2.1963C36.1306 0.97001 35.1676 5.98533e-05 33.9344 5.98533e-05ZM39.5393 13.2884V14.2999C39.5393 15.4915 40.5508 16.4961 41.7425 16.4961H42.8372C44.0704 16.4961 45.0403 17.4661 45.0403 18.6924V19.794C45.0403 20.9856 46.0518 21.9971 47.2366 21.9971H48.3382C49.5714 21.9971 50.5344 20.9856 50.5344 19.794V18.6924C50.5344 17.4592 49.5645 16.4892 48.3382 16.4892H47.2366C46.0518 16.4892 45.0403 15.4777 45.0403 14.293V13.2814C45.0403 11.9582 46.0518 10.9951 47.2366 10.9951H48.3382C49.5714 10.9951 50.5344 9.98362 50.5344 8.79197V7.69038C50.5344 6.45716 49.5645 5.48721 48.3382 5.48721H47.2366C46.0518 5.48721 45.0403 4.47569 45.0403 3.29096V2.18938C45.0403 0.956154 44.0704 -0.00686836 42.8372 -0.00686836H41.7425C40.5508 -0.00686836 39.5393 0.963082 39.5393 2.18938V13.2745V13.2884Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_111_overlay">
                  <rect width="50.5413" height="21.9971" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>

          {/* Close Button: Morphed into 'X' */}
          <button
            className="mobile-hamburger-pill is-open"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <span className="pill-line line-top"></span>
            <span className="pill-line line-bottom"></span>
          </button>
        </div>

        {/* 
          Container Housing Items (Exact specs from Image 2):
          display: flex; flex-direction: column; justify-content: center;
          align-items: flex-start; gap: 39px; align-self: stretch;
        */}
        <div className="mobile-nav-items-container">
          <a
            href="#about"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            About us
          </a>
          <a
            href="#products"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="#expertise"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Expertise
          </a>
          <a
            href="#careers"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </a>
          <a
            href="#blog"
            className="mobile-nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>

          {/* Vertical stroke separator */}
          <div className="mobile-nav-divider"></div>

          {/* White Pill Button */}
          <a
            href="#try"
            className="btn-try-mobile"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try AINNOV8
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
