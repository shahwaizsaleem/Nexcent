import React from "react";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';

const OurClients = () => {
  return (
    <section >
      <style>{`
        .clients-wrapper {
          text-align: center;
          max-width: 1110px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }

        .clients-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1.2;
          margin-bottom: 8px;
          color: #4D4D4D;
        }

        .clients-subheading {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 1.6;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }

        .logo-container {
          max-width: 1152px;
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 48px;
          margin: 40px auto 0;
          padding: 0 20px;
        }

        .logo-item {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }

        /* Tablet styles */
        @media (max-width: 768px) {
          .clients-wrapper {
            padding: 0 16px;
          }

          .logo-container {
            gap: 24px;
            justify-content: space-evenly;
          }

          .logo-item {
            width: 44px;
            height: 44px;
          }
        }

        /* Mobile styles */
        @media (max-width: 480px) {
          .clients-wrapper {
            padding: 0 12px;
          }

          .clients-heading {
            margin-bottom: 12px;
          }

          .logo-container {
            gap: 16px;
            max-width: none;
          }

          .logo-item {
            width: 40px;
            height: 40px;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .logo-container {
            gap: 12px;
          }

          .logo-item {
            width: 36px;
            height: 36px;
          }
        }

        /* Large screens */
        @media (min-width: 1200px) {
          .logo-container {
            justify-content: space-between;
          }
        }
      `}</style>

      <div className="clients-wrapper">
        <h2 className="clients-heading">Our Clients</h2>
        <p className="clients-subheading">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      <div className="logo-container">
        <img src={img1} alt="client 1" className="logo-item" />
        <img src={img2} alt="client 2" className="logo-item" />
        <img src={img3} alt="client 3" className="logo-item" />
        <img src={img4} alt="client 4" className="logo-item" />
        <img src={img5} alt="client 5" className="logo-item" />
        <img src={img6} alt="client 6" className="logo-item" />
        <img src={img7} alt="client 7" className="logo-item" />
      </div>
    </section>
  );
};

export default OurClients;
