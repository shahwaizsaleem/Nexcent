import React from 'react';
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import rafiki from "../assets/rafiki.png";

export default function Body() {
  return (
    <div className="body-container">
      <style>{`
        .body-container {
          min-height: 100vh;
          background-color: #f9fafb;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .section {
          padding: 4rem 1rem;
          background-color: white;
        }
        .container {
          max-width: 1152px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: flex-start;
        }
        .hero-img {
          width: 441.53px;
          height: 328.99px;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
          flex-shrink: 0;
          margin-top: 52px;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 32px;
          max-width: 661px;
        }
        .hero-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #4D4D4D;
          line-height: 1.25;
          margin-bottom: 1.5rem;
        }
        .hero-paragraph {
          color: #4b5563;
          line-height: 1.625;
        }
        .hero-button {
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
        .hero-button:hover {
          background-color: #059669;
        }

        /* Stats Section */
        .stats-section {
          background-color: #f9fafb;
          padding: 4rem 1rem;
        }
        .stats-container {
          max-width: 1152px;
          margin: 0 auto;
          display: flex;
          gap: 8rem;
          flex-direction: row;
          align-items: flex-start;
        }
        .stats-text {
          max-width: 540px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .stats-heading {
          font-size: 1.875rem;
          font-weight: 600;
          line-height: 1.375;
          color: #4D4D4D;
        }
        .stats-subheading {
          color: #10b981;
        }
        .stats-desc {
          margin-top: 0.5rem;
          color: #4b5563;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem 4rem;
        }
        .stat-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .stat-img {
          width: 2.5rem;
          height: 2.5rem;
          margin-top: 0.25rem;
        }
        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #4D4D4D;
        }
        .stat-label {
          color: #4b5563;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .container,
          .stats-container {
            flex-direction: column;
          }
          .hero-img {
            width: 100%;
            height: auto;
          }
          .hero-content,
          .stats-text {
            width: 100%;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 1.875rem;
          }
          .stats-heading {
            font-size: 1.5rem;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="section" id="Features" >
        <div className="container">
          <div>
            <img src={rafiki} alt="Illustration" className="hero-img" />
          </div>
          <div className="hero-content">
            <div>
              <h1 className="hero-title">The unseen of spending three years at Pixelgrade</h1>
              <p className="hero-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at amet justo ipsum. Sed
                accumsan quam vitae est varius integer facilisis. Pellentesque placerat vestibulum lorem sed
                porta. Nullam mattis tristique mauris. Nullam pulvinar sit amet risus pretium auctor. Etiam
                quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <button className="hero-button">Learn More</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-text">
            <h2 className="stats-heading">Helping a local</h2>
            <h2 className="stats-heading stats-subheading">business reinvent itself</h2>
            <p className="stats-desc">We reached here with our hard work and dedication</p>
          </div>
          <div className="stats-grid">
            {[{ img: b1, label: "Members", value: "2,245,341" },
              { img: b2, label: "Clubs", value: "46,328" },
              { img: b3, label: "Event Bookings", value: "828,867" },
              { img: b4, label: "Payments", value: "1,926,436" }].map((stat, i) => (
              <div className="stat-item" key={i}>
                <img src={stat.img} alt={stat.label} className="stat-img" />
                <div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
