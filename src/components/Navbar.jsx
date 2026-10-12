import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        /* Fixed Navbar matching Figma specs */
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

        /* Right Side: Links + Divider + Button */
        .nav-right-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 24px;
        }

        /* Nav Items */
        .nav-links-list {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-item {
          color: #ABABAB;
          font-family: 'Geist', sans-serif;
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

        /* Separating Vertical Stroke */
        .nav-divider {
          width: 1px;
          height: 38px;
          background: #2C2C2C;
          flex-shrink: 0;
        }

        /* Try AINNOV8 Pill Button */
        .btn-try {
          background: #FFFFFF;
          color: #111111;
          font-family: 'Geist', sans-serif;
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
          box-shadow: 0 4px 14px rgba(255, 255, 255, 0.12);
        }

        /* Mobile Hamburger Toggle */
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hamburger-btn span {
          width: 100%;
          height: 2px;
          background-color: #FFFFFF;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger-btn.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .hamburger-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger-btn.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Dropdown */
        .mobile-menu {
          display: none;
        }

        /* Responsive Breakpoints */
        @media (max-width: 992px) {
          .navbar-container {
            padding: 16px 40px;
          }
        }

        @media (max-width: 868px) {
          .nav-right-container {
            display: none;
          }

          .hamburger-btn {
            display: flex;
          }

          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: #111111;
            border-bottom: 1px solid #232323;
            padding: 1.5rem 24px 2rem;
            gap: 1.25rem;
            transform: translateY(-120%);
            opacity: 0;
            pointer-events: none;
            transition: all 0.3s ease;
          }

          .mobile-menu.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .mobile-menu a {
            color: #ABABAB;
            font-family: 'Geist', sans-serif;
            font-size: 1rem;
            text-decoration: none;
          }

          .mobile-menu a:hover {
            color: #FFFFFF;
          }

          .mobile-cta {
            background: #FFFFFF;
            color: #111111 !important;
            text-align: center;
            padding: 0.75rem 0;
            border-radius: 9999px;
            font-weight: 500 !important;
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 600px) {
          .navbar-container {
            padding: 16px 20px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          {/* Wit Logo */}
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

          {/* Desktop Right Group */}
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

            {/* Separating 38px vertical stroke */}
            <div className="nav-divider"></div>

            {/* CTA Button */}
            <a href="#try" className="btn-try">
              Try AINNOV8
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            About us
          </a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)}>
            Products
          </a>
          <a href="#expertise" onClick={() => setMobileMenuOpen(false)}>
            Expertise
          </a>
          <a href="#careers" onClick={() => setMobileMenuOpen(false)}>
            Careers
          </a>
          <a href="#blog" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </a>
          <a
            href="#try"
            className="mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Try AINNOV8
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
