import React from "react";
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';

const Reviews = () => {
  return (
    <section className="reviews-section" id="FAQ">
      <style>{`
        .reviews-section {
          padding: 4rem 1rem;
          background-color: #f9fafb;
          text-align: center;
        }

        .reviews-title {
          font-size: 1.875rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #4D4D4D;
        }

        .reviews-description {
          color: #4D4D4D;
          max-width: 672px;
          margin: 0 auto 2.5rem auto;
        }

        .reviews-cards {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          align-items: center;
        }

        .review-card {
          position: relative;
          width: 368px;
        }

        .review-img {
          width: 368px;
          height: 286px;
          border-radius: 8px;
          object-fit: cover;
        }

        .review-box {
          position: absolute;
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 317px;
          height: 176px;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
        }

        .review-text {
          color: #1f2937;
          font-size: 1rem;
          font-weight: 500;
        }

        .review-link {
          color: #059669;
          font-weight: 500;
          margin-top: 1rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          text-decoration: none;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .reviews-cards {
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
          }
        }
      `}</style>

      <h2 className="reviews-title">Caring is the new marketing</h2>
      <p className="reviews-description">
        The Nexcent blog is the best place to read about the latest membership insights, trends and more.
        See who’s joining the community, read about how our community are increasing their membership income and lot's more.
      </p>

      <div className="reviews-cards">
        {/* Card 1 */}
        <div className="review-card">
          <img src={blog1} alt="Blog 1" className="review-img" />
          <div className="review-box">
            <p className="review-text">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a href="#" className="review-link">
              Readmore <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="review-card">
          <img src={blog2} alt="Blog 2" className="review-img" />
          <div className="review-box">
            <p className="review-text">
              What are your safeguarding responsibilities and how can you manage them?
            </p>
            <a href="#" className="review-link">
              Readmore <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="review-card">
          <img src={blog3} alt="Blog 3" className="review-img" />
          <div className="review-box">
            <p className="review-text">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <a href="#" className="review-link">
              Readmore <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
