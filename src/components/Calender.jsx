import React from "react";
//import pana from '../assets/pana.png';

const Calender = () => {
  return (
    <section className="calendar-section">
      <style>{`
        .calendar-section {
          background-color: white;
          padding: 4rem 1rem;
          margin-top: -3rem;
        }

        .calendar-container {
          max-width: 1152px;
          margin: 0 auto;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          
        }

        .calendar-img {
          width: 441.53px;
          height: 328.99px;
          max-width: 100%;
          border-radius: 0.5rem;
          opacity: 1;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
                      0 4px 6px -2px rgba(0, 0, 0, 0.05);
          flex-shrink: 0;
          margin-top: 52px;
        }

        .calendar-content {
          max-width: 661px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
          text-align: justify;
        }

        .calendar-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #4D4D4D;
          margin-bottom: 1.5rem;
          line-height: 1.25;
        }

        .calendar-text {
          color: #4b5563;
          line-height: 1.625;
        }

        .calendar-button {
          background-color: #10b981;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          align-self: flex-start;
          transition: background-color 0.2s ease-in-out;
          margin-top: 0.5rem;
        }

        .calendar-button:hover {
          background-color: #059669;
        }

        @media (max-width: 768px) {
          .calendar-container {
            flex-direction: column;
          }

          .calendar-img {
            width: 100%;
            height: auto;
          }

          .calendar-title {
            font-size: 1.875rem;
          }

          .calendar-content {
            width: 100%;
          }
        }
      `}</style>

      <div className="calendar-container" id="Product">
        {/* Image */}
        <div>
          <img src="public/assets/pana.png" alt="Mobile app design illustration" className="calendar-img" />
        </div>

        {/* Content */}
        <div className="calendar-content">
          <div>
            <h2 className="calendar-title">
              How to design your site footer like we did
            </h2>
            <p className="calendar-text">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
              molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
              libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at
              porta nisi facilisis finibus. In euismod augue vitae nibh euismod, non aliquet urna tincidunt. Integer
              in elit eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et mi
              ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum ut gravida.
            </p>
          </div>
          <button className="calendar-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Calender;
