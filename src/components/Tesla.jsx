import React from "react";
//import tesla from '../assets/tesla.png';
//import img1 from '../assets/img1.png';
//import img2 from '../assets/img2.png';
//import img3 from '../assets/img3.png';
//import img4 from '../assets/img4.png';
//import img5 from '../assets/img5.png';
//import img6 from '../assets/img6.png';

const Tesla = () => {
  return (
    <section className="tesla-section" id="Testimonial">
      <style>{`
        .tesla-section {
          background-color: #f9fafb;
          padding: 2rem 1rem;
        }

        .tesla-container {
          max-width: 1152px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          gap: 2rem;
          align-items: flex-start;
        }

        .tesla-img {
          width: 326px;
          height: 326px;
          border-radius: 0.75rem;
          object-fit: cover;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          flex-shrink: 0;
        }

        .tesla-content {
          display: flex;
          flex-direction: column;
          text-align: justify;
          justify-content: space-between;
          gap: 1.5rem;
          max-width: 768px;
        }

        .tesla-text {
          color: #4b5563;
          line-height: 1.625;
        }

        .tesla-name {
          color: #059669;
          font-weight: 600;
        }

        .tesla-org {
          color: #9ca3af;
          margin-top: 0.5rem;
        }

        .tesla-logos {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 1.5rem;
        }

        .tesla-logos img {
          width: 46px;
          height: 46px;
        }

        .cta-link {
          color: #059669;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          text-decoration: none;
          margin-left: auto;
        }

        .cta-link:hover {
          text-decoration: underline;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .tesla-container {
            flex-direction: column;
          }

          .cta-link {
            margin-left: 0;
          }
        }
      `}</style>

      <div className="tesla-container">
        {/* Image */}
        <div>
          <img src="/assets/tesla.png" alt="Tesla" className="tesla-img" />
        </div>

        {/* Content */}
        <div className="tesla-content">
          <p className="tesla-text">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum
            risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
            nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla
            sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque
            malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget
            efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <div>
            <h5 className="tesla-name">Tim Smith</h5>
            <p className="tesla-org">British Dragon Boat Racing Association</p>
          </div>

          <div className="tesla-logos">
            <img src="/assets/img1.png" alt="Logo1" />
            <img src="/assets/img2.png" alt="Logo2" />
            <img src="/assets/img3.png" alt="Logo3" />
            <img src="/assets/img4.png" alt="Logo4" />
            <img src="/assets/img5.png" alt="Logo5" />
            <a href="#" className="cta-link">
              Meet all customers <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tesla;
