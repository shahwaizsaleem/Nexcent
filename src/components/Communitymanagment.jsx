import React from 'react';
import mc1 from '../assets/mc1.png';
import mc2 from '../assets/mc2.png';
import mc3 from '../assets/mc3.png';

const Communitymanagement = () => {
  return (
    <section id="services">
      <style>{`
        .community-wrapper {
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .community-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .community-main-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1.2;
          color: #4D4D4D;
          margin-bottom: 0.5rem;
        }

        .community-sub-heading {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 36px;
          line-height: 1.2;
          color: #4D4D4D;
          margin-bottom: 1.5rem;
        }

        .community-paragraph {
          font-family: 'Inter', sans-serif;
          color: #666;
          font-size: clamp(1rem, 2.5vw, 1.125rem);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        .feature-item {
          text-align: center;
          transition: all 0.3s ease;
          padding: 1.5rem;
        }

        .feature-item:hover {
          transform: scale(1.05);
        }

        .icon-container {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .feature-icon {
          width: 48px;
          height: 48px;
          transform: rotate(0deg);
          opacity: 1;
        }

        .feature-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .feature-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: #374151;
          margin-bottom: 1rem;
        }

        .feature-description {
          font-family: 'Inter', sans-serif;
          color: #9ca3af;
          font-size: clamp(0.875rem, 2vw, 1rem);
          line-height: 1.6;
          max-width: 20rem;
          margin: 0 auto;
        }

        /* Tablet styles */
        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 2.5rem;
          }

          .community-wrapper {
            padding: 2.5rem 1.5rem;
            max-width: 48rem;
          }

          .community-header {
            margin-bottom: 2.5rem;
          }

          .community-sub-heading {
            margin-bottom: 1.5rem;
          }

          .feature-item {
            padding: 1.5rem;
          }

          .icon-container {
            margin-bottom: 1.5rem;
          }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
          .features-grid {
            gap: 3rem;
          }

          .community-wrapper {
            padding: 3rem 1rem;
            max-width: 72rem;
          }

          .community-header {
            margin-bottom: 3rem;
          }
        }

        /* Mobile styles */
        @media (max-width: 767px) {
          .community-wrapper {
            padding: 2rem 1rem;
          }

          .community-header {
            margin-bottom: 2rem;
          }

          .community-sub-heading {
            margin-bottom: 1rem;
          }

          .feature-item {
            padding: 1rem;
          }

          .icon-container {
            margin-bottom: 1rem;
          }

          .feature-icon {
            width: 40px;
            height: 40px;
          }

          .feature-description {
            max-width: 100%;
          }
        }
      `}</style>

      <div className="community-wrapper">
        {/* Header Section */}
        <div className="community-header">
          <h2 className="community-main-heading">
            Manage your entire community
          </h2>
          <h2 className="community-sub-heading">
            in a single system
          </h2>
          <p className="community-paragraph">
            Who is Nextcent suitable for?
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {/* Membership Organisations */}
          <div className="feature-item">
            <div className="icon-container">
              <img 
                src={mc1}
                alt="Membership icon"
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">
              Membership
            </h3>
            <h4 className="feature-subtitle">
              Organisations
            </h4>
            <p className="feature-description">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>

          {/* National Associations */}
          <div className="feature-item">
            <div className="icon-container">
              <img 
                src={mc2}
                alt="National Association icon"
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">
              National
            </h3>
            <h4 className="feature-subtitle">
              Associations
            </h4>
            <p className="feature-description">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>

          {/* Clubs And Groups */}
          <div className="feature-item">
            <div className="icon-container">
              <img 
                src={mc3}
                alt="Clubs and Groups icon"
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">
              Clubs And
            </h3>
            <h4 className="feature-subtitle">
              Groups
            </h4>
            <p className="feature-description">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communitymanagement;