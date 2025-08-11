import React from 'react';

const Communitymanagement = () => {
  return (
    <section id="services">
      <style>{`
        .community-wrapper {
          width: 100%;
          max-width: 72rem;
          margin: 0 auto;
          padding: 3rem 1rem;
          font-family: 'Inter', system-ui, sans-serif;
        }
        .community-header { text-align: center; margin-bottom: 3rem; }
        .community-main-heading, .community-sub-heading {
          font-weight: 600;
          font-size: 36px;
          line-height: 1.2;
          color: #4D4D4D;
          margin-bottom: 0.5rem;
        }
        .community-paragraph { color: #666; font-size: clamp(1rem, 2.5vw, 1.125rem); }
        .features-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
        .feature-item { text-align: center; transition: all 0.3s ease; padding: 1.5rem; }
        .feature-item:hover { transform: scale(1.05); }
        .icon-container { margin-bottom: 1.5rem; display: flex; justify-content: center; }
        .feature-icon { width: 48px; height: 48px; }
        .feature-title, .feature-subtitle {
          font-size: clamp(1.125rem, 2.5vw, 1.5rem);
          font-weight: 700;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .feature-description {
          color: #9ca3af;
          font-size: clamp(0.875rem, 2vw, 1rem);
          line-height: 1.6;
          max-width: 20rem;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .features-grid { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        }
      `}</style>

      <div className="community-wrapper">
        <div className="community-header">
          <h2 className="community-main-heading">Manage your entire community</h2>
          <h2 className="community-sub-heading">in a single system</h2>
          <p className="community-paragraph">Who is Nextcent suitable for?</p>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-container">
              <img src="/assets/mc1.png" alt="Membership icon" className="feature-icon" />
            </div>
            <h3 className="feature-title">Membership</h3>
            <h4 className="feature-subtitle">Organisations</h4>
            <p className="feature-description">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-container">
              <img src="/assets/mc2.png" alt="National Association icon" className="feature-icon" />
            </div>
            <h3 className="feature-title">National</h3>
            <h4 className="feature-subtitle">Associations</h4>
            <p className="feature-description">
              Our membership management software provides full automation of membership renewals and payments.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-container">
              <img src="/assets/mc3.png" alt="Clubs and Groups icon" className="feature-icon" />
            </div>
            <h3 className="feature-title">Clubs And</h3>
            <h4 className="feature-subtitle">Groups</h4>
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
