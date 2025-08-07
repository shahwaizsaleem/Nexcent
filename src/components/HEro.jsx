import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          padding: 4rem 1.5rem;
          max-width: 1440px;
          min-height: 600px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .hero-text {
          max-width: 657px;
          flex: 1;
          margin-right: 2rem;
        }

        .hero-heading {
          font-size: clamp(2.5rem, 6vw, 4rem);
          margin-bottom: 0.75rem;
          line-height: 1.1;
          font-weight: 600;
          letter-spacing: normal;
          color: #4D4D4D;
        }

        .highlight {
          color: #28a745;
          font-weight: 600;
        }

        .hero-subtext {
          max-width: 100%;
          margin-bottom: 2.5rem;
          font-size: clamp(0.875rem, 2vw, 1rem);
          font-weight: 400;
          line-height: 1.5;
          color: #666;
        }

        .hero-button {
          width: clamp(180px, 25vw, 230px);
          height: 56px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: #28a745;
          color: white;
          font-size: clamp(1rem, 2vw, 1.125rem);
          font-weight: bold;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .hero-button:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        .hero-image-container {
          width: clamp(280px, 35vw, 391px);
          height: clamp(290px, 36vw, 407px);
          opacity: 1;
          transform: rotate(0deg);
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .hero-image-container:hover img {
          transform: scale(1.05);
        }

        .hero-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        /* Tablet styles */
        @media (max-width: 1024px) {
          .hero-section {
            padding: 3rem 1.5rem;
            min-height: 500px;
            gap: 2rem;
          }

          .hero-text {
            margin-right: 1rem;
          }

          .hero-heading {
            margin-bottom: 1rem;
          }

          .hero-subtext {
            margin-bottom: 2rem;
          }
        }

        /* Mobile styles */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
            min-height: auto;
            gap: 2rem;
          }

          .hero-text {
            max-width: 100%;
            margin-right: 0;
            margin-bottom: 2rem;
          }

          .hero-heading {
            margin-bottom: 1rem;
          }

          .hero-subtext {
            margin-bottom: 2rem;
          }

          .hero-button {
            margin: 0 auto;
          }

          .hero-image-container {
            margin: 0 auto;
          }
        }

        /* Small mobile styles */
        @media (max-width: 480px) {
          .hero-section {
            padding: 1.5rem 1rem;
            gap: 1.5rem;
          }

          .hero-text {
            margin-bottom: 1.5rem;
          }

          .hero-heading {
            margin-bottom: 0.75rem;
          }

          .hero-subtext {
            margin-bottom: 1.5rem;
          }

          .hero-button {
            height: 48px;
          }

          .hero-image-container {
            width: 100%;
            max-width: 300px;
            height: 250px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .hero-section {
            padding: 1rem 0.75rem;
          }

          .hero-image-container {
            max-width: 280px;
            height: 230px;
          }
        }

        /* Large desktop */
        @media (min-width: 1200px) {
          .hero-section {
            padding: 5rem 2rem;
          }
        }
      `}</style>

      <section id="home" className="hero-section" >
        <div className="hero-text">
          <h4 className="hero-heading">
            Lessons and insights <span className="highlight">from 8 years</span>
          </h4>
          <p className="hero-subtext">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="hero-button">
            <span></span> Register
          </button>
        </div>

        <div className="hero-image-container">
          <img src={hero} alt="Hero" />
        </div>
      </section>
    </>
  );
};

export default Hero;