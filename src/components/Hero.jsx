import React from "react";
import hero from '../assets/Hero.png';

const Hero = () => {
  return (
    <>
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        .hero-section {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          max-width: 1440px;
          margin: 0 auto;
          padding: 4rem 1.5rem;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .hero-text {
          flex: 1 1 50%;
          max-width: 657px;
          padding-right: 2rem;
        }

        .hero-heading {
          font-size: clamp(2rem, 6vw, 4rem);
          font-weight: 600;
          line-height: 1.2;
          color: #4D4D4D;
          margin-bottom: 1rem;
        }

        .highlight {
          color: #28a745;
          font-weight: 600;
        }

        .hero-subtext {
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #666;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-button {
          width: clamp(180px, 25vw, 230px);
          height: 56px;
          background-color: #28a745;
          color: white;
          font-size: clamp(1rem, 2vw, 1.125rem);
          font-weight: bold;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .hero-button:hover {
          background-color: #218838;
          transform: scale(1.05);
        }

        .hero-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .hero-image-container:hover img {
          transform: scale(1.05);
        }

        @media (max-width: 1024px) {
          .hero-section {
            padding: 3rem 1rem;
          }
          .hero-text {
            padding-right: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            text-align: center;
            padding: 2rem 1rem;
          }
          .hero-text {
            padding-right: 0;
            margin-bottom: 2rem;
          }
          .hero-button {
            margin: 0 auto;
          }
          .hero-image-container {
            margin: 0 auto;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 1.5rem 1rem;
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

        @media (max-width: 360px) {
          .hero-section {
            padding: 1rem 0.75rem;
          }
          .hero-image-container {
            max-width: 280px;
            height: 230px;
          }
        }
      `}</style>

      <section id="home" className="hero-section">
        <div className="hero-text">
          <h1 className="hero-heading">
            Lessons and insights <span className="highlight">from 8 years</span>
          </h1>
          <p className="hero-subtext">
            Where to grow your business as a photographer: site or social media?
          </p>
          <button className="hero-button">Register</button>
        </div>

        <div className="hero-image-container">
          <img src={hero} alt="Photographer showcasing work" />
        </div>
      </section>
    </>
  );
};

export default Hero;
