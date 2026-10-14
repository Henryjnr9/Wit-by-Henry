import React from "react";

const Products = () => {
  return (
    <>
      <style>{`
        /* Products Section */
        .products-section {
          padding-top: 48px;
          padding-bottom: 64px;
          position: relative;
          box-sizing: border-box;
        }

        .products-container {
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }

        /* Desktop Header Row */
        .products-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
        }

        .products-header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 17px;
        }

        .products-title {
          color: #F4F7FF;
          
          font-size: 48px;
          font-style: normal;
          font-weight: 500;
          line-height: 48px;
          letter-spacing: -0.96px;
          margin: 0;
        }

        /* See All Button */
        .btn-see-all {
          display: inline-flex;
          padding: 6px 16px;
          justify-content: center;
          align-items: center;
          gap: 10px;
          border-radius: 23px;
          border: 1px solid #343434;
          background: #232323;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-see-all:hover {
          background: #2c2d30;
          border-color: #4a4a4a;
          transform: translateY(-1px);
        }

        .btn-see-all-text {
          color: #FFFFFF;
          
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px;
        }

        .btn-see-all-icon {
          width: 24px;
          height: 24px;
          display: block;
          transition: transform 0.2s ease;
        }

        .btn-see-all:hover .btn-see-all-icon {
          transform: translateX(3px);
        }

        .btn-see-all-mobile {
          display: none;
        }

        .products-subtext {
          width: 571px;
          max-width: 100%;
          color: #ABABAB;
          
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: -0.17px;
          margin: 0;
        }

        /* Desktop: 3-Column Grid Row */
        .products-grid-row {
          display: flex;
          width: 100%;
          gap: 32px;
          margin-top: 44px;
          align-items: flex-start;
          box-sizing: border-box;
        }

        .product-column-card {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 19px;
          box-sizing: border-box;
        }

        .product-cover {
          width: 100%;
          height: 480px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
        }

        .product-cover:hover {
          transform: translateY(-3px) scale(1.008);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.45);
        }

        .product-cover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, transparent 45%, rgba(0, 0, 0, 0.25) 100%);
          pointer-events: none;
        }

        /* 1. Lime Silk Mesh */
        .cover-lime {
          background: 
            radial-gradient(ellipse 90% 80% at 20% 25%, #CEF535 0%, rgba(206, 245, 53, 0) 65%),
            radial-gradient(ellipse 70% 90% at 85% 75%, #0B4FEA 0%, rgba(11, 79, 234, 0.4) 60%),
            conic-gradient(from 195deg at 45% 45%, #25A55F 0deg, #1872E8 120deg, #CEF535 240deg, #1872E8 360deg),
            linear-gradient(135deg, #CEF535 0%, #1565D8 100%);
        }

        /* 2. Electric Cyan */
        .cover-cyan {
          background: 
            radial-gradient(ellipse 90% 70% at 15% 30%, #00EAFF 0%, rgba(0, 234, 255, 0) 65%),
            linear-gradient(215deg, rgba(255, 255, 255, 0.8) 0%, transparent 35%),
            radial-gradient(ellipse 80% 80% at 85% 85%, #0A369D 0%, transparent 70%),
            linear-gradient(135deg, #00A3FF 0%, #082D7B 100%);
        }

        /* 3. Soft Lavender */
        .cover-lavender {
          background: 
            radial-gradient(ellipse 80% 80% at 20% 20%, #E8D9FF 0%, rgba(232, 217, 255, 0) 65%),
            radial-gradient(ellipse 90% 70% at 80% 80%, #7642E8 0%, rgba(118, 66, 232, 0.3) 60%),
            linear-gradient(145deg, #D4BFFF 0%, #9D75F0 50%, #784EE4 100%);
        }

        .product-text-box {
          display: flex;
          width: 100%;
          min-width: 0;
          overflow: hidden;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          align-self: stretch;
        }

        .product-card-title {
          width: 100%;
          align-self: stretch;
          color: #F4F7FF;
          
          font-size: 28px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: -0.56px;
          margin: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          box-sizing: border-box;
        }

        .product-card-desc {
          align-self: stretch;
          color: #969696;
          
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;
          letter-spacing: -0.17px;
          margin: 0;
        }

        /* ================= MOBILE RESPONSIVE (<= 768px) ================= */
        @media (max-width: 768px) {
          .products-section {
            padding-top: 40px;
            padding-bottom: 40px;
          }

          /* 
            Header Container on Mobile:
            width 358px, column, gap 16px
          */
          .products-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            width: 358px;
            max-width: 100%;
          }

          .products-header-left {
            gap: 0;
            width: 100%;
          }

          /* Exact Mobile Products Title: 32px, line-height 36px, letter-spacing -0.64px */
          .products-title {
            font-size: 32px;
            line-height: 36px;
            letter-spacing: -0.64px;
          }

          .products-subtext {
            width: 100%;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.17px;
          }

          /* Show button under subtext on mobile */
          .btn-see-all-desktop {
            display: none;
          }

          .btn-see-all-mobile {
            display: inline-flex;
            margin-top: 4px;
          }

          /* Stack cards vertically */
          .products-grid-row {
            flex-direction: column;
            gap: 40px;
            margin-top: 36px;
          }

          /* Container for each product card */
          .product-column-card {
            width: 100%;
            gap: 19px;
          }

          /* Mobile product banner */
          .product-cover {
            height: 210px;
            border-radius: 8px;
          }

          .product-text-box {
            gap: 6px;
          }

          /* Exact Mobile Title: width 259px, 20px, line-height 24px, letter-spacing -0.4px */
          .product-card-title {
            width: 259px;
            max-width: 100%;
            font-size: 20px;
            line-height: 24px;
            letter-spacing: -0.4px;
            white-space: normal; /* Allows natural wrap onto 2 lines matching screenshot */
          }

          .product-card-desc {
            font-size: 14px;
            line-height: 22px;
          }
        }
      `}</style>

      <section id="products" className="products-section">
        <div className="section-container">
          <div className="products-container">
            {/* Header Row */}
            <div className="products-header-row">
              <div className="products-header-left">
                <h2 className="products-title">Products</h2>
                {/* Desktop Button */}
                <a
                  href="#all-products"
                  className="btn-see-all btn-see-all-desktop"
                >
                  <span className="btn-see-all-text">See All</span>
                  <svg
                    className="btn-see-all-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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

              <p className="products-subtext">
                Carrier-grade telecom platforms for Agentic AI Communications,
                5G interactive calling, and business messaging.
              </p>

              {/* Mobile Button placed beneath subtext */}
              <a
                href="#all-products"
                className="btn-see-all btn-see-all-mobile"
              >
                <span className="btn-see-all-text">See All</span>
                <svg
                  className="btn-see-all-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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

            {/* Products Cards */}
            <div className="products-grid-row">
              {/* Card 1: Lime */}
              <div className="product-column-card">
                <div className="product-cover cover-lime"></div>
                <div className="product-text-box">
                  <h3 className="product-card-title">WIT AINNOV8 Platform</h3>
                  <p className="product-card-desc">
                    Platform for Agentic AI Communications built for telecom
                    operators.
                  </p>
                </div>
              </div>

              {/* Card 2: Cyan */}
              <div className="product-column-card">
                <div className="product-cover cover-cyan"></div>
                <div className="product-text-box">
                  <h3 className="product-card-title">
                    WIT 5G New Calling Platform
                  </h3>
                  <p className="product-card-desc">
                    Reinventing voice for the 5G era with interactive and
                    data-enriched calling.
                  </p>
                </div>
              </div>

              {/* Card 3: Lavender */}
              <div className="product-column-card">
                <div className="product-cover cover-lavender"></div>
                <div className="product-text-box">
                  <h3 className="product-card-title">
                    WIT RCS Business Messaging Platform
                  </h3>
                  <p className="product-card-desc">
                    Operator-controlled RCS and SMS business messaging with
                    security and monetization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
