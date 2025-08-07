import React from "react";
import logo from "../assets/logo.png";
import x from "../assets/x.png";
import yt from "../assets/yt.png";
import sports from "../assets/sports.png";
import insta from "../assets/insta.png";
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <style>{`
        .footer-wrapper {
          width: 100%;
        }

        .footer-top {
          background-color: #f9fafb;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
        }

        .footer-top h1 {
          font-size: 2.25rem;
          font-weight: 700;
          color: #4D4D4D;
          line-height: 1.3;
        }

        @media (min-width: 768px) {
          .footer-top h1 {
            font-size: 3rem;
          }
        }

        .footer-top button {
          background-color: #059669;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 0.375rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s ease;
        }

        .footer-top button:hover {
          background-color: #047857;
        }

        .footer-main {
          background-color: #263238;
          color: white;
          padding: 4rem 1rem;
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          justify-content: space-between;
        }

        .footer-column {
          max-width: 250px;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .footer-column p {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .footer-icons {
          display: flex;
          gap: 1rem;
        }

        .footer-icons img {
          width: 32px;
          height: 32px;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 1rem;
          
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: #d1d5db;
        }

        .footer-links a {
          color: inherit;
          text-decoration: none;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        .newsletter-box {
          display: flex;
          align-items: center;
          background-color: #37474f;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          max-width: 250px;
        }

        .newsletter-box input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          font-size: 0.875rem;
          outline: none;
          padding: 0.25rem;
        }

        .newsletter-box input::placeholder {
          color: #9ca3af;
        }

        .newsletter-box img {
          width: 20px;
          height: 20px;
        }

        @media (max-width: 768px) {
          .footer-grid {
            flex-direction: column;
            gap: 2.5rem;
          }
        }
      `}</style>

      {/* Top Banner */}
      <div className="footer-top">
        <h1>
          Pellentesque suscipit <br /> fringilla libero eu.
        </h1>
        <button>
          Get a Demo <span>→</span>
        </button>
      </div>

      {/* Footer Main */}
      <div className="footer-main">
        <div className="footer-grid">
          {/* Column 1 - Logo */}
          <div className="footer-column">
            <img src={logo} alt="Nexcent Logo" className="logo" />
            <p>
              Copyright © 2020 Nexcent ltd.
              <br />
              All rights reserved
            </p>
            <div className="footer-icons">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src={insta} alt="Instagram" />
  </a>
  <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
    <img src={sports} alt="Dribbble" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="Twitter" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <img src={yt} alt="YouTube" />
  </a>
</div>
          </div>

          {/* Column 2 - Company */}
          <div>
            <h3 className="footer-title">Company</h3>
            <div className="footer-links">
              <a href="#">About us</a>
              <a href="#">Blog</a>
              <a href="#">Contact us</a>
              <a href="#">Pricing</a>
              <a href="#">Testimonials</a>
            </div>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="footer-title">Support</h3>
            <div className="footer-links">
              <a href="#">Help center</a>
              <a href="#">Terms of service</a>
              <a href="#">Legal</a>
              <a href="#">Privacy policy</a>
              <a href="#">Status</a>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="footer-title">Stay up to date </h3>
            <div className="newsletter-box">
              <input type="email" placeholder="Your email address" /><a href="#home">
  <span>&#129141;</span>
</a>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
