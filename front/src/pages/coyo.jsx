import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/pages/coyo.css';
import { useState } from 'react';
import FooterWorks from '../components/footerWorks';
import CloseWorks from '../components/closeWorks';

const Coyo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(location.state?.direction || '');
  const [fade, setFade] = useState('');

  const selectedImage = location.state?.selectedImage;

  const handleNext = () => {
    setFade('out');
    setDirection('inRight');
    navigate('/work/fiona', { state: { direction: 'outLeft' } });
  };

  const handlePrev = () => {
    setFade('out');
    setDirection('inLeft');
    navigate('/work/kiefer', { state: { direction: 'outRight' } });
  };

  return (
    <div style={{ backgroundColor: '#0c0c0c', minHeight: '100vh' }}>
      <CloseWorks />
      <section className="coyo-container">
        <div
          className={`container-prevbutton-pages mobile ${fade}`}
          style={{ color: '#fff' }}
        >
          <p>Previous</p>
          <button
            className="prevbutton-pages"
            style={{ border: '1px solid #fff' }}
            onClick={handlePrev}
          >
            <svg
              width="42"
              height="17"
              viewBox="0 0 42 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16H40L24.7059 1" stroke="#fff" strokeOpacity="1" />
            </svg>
          </button>
        </div>
        <div className={`animation-pages ${selectedImage ? 'animation' : ''}`}>
          <div className={`slide-pages ${direction}`}>
            <div className={`coyo-image-container`}>
              {selectedImage ? (
                <img src={selectedImage} alt="kiefer" />
              ) : (
                <img src="/images/coyo.webp" alt="kiefer" />
              )}
            </div>
            <h1 className="title-work-page">COYO</h1>
            <p className="scroll-text-works">
              Scroll to read about the project
            </p>
          </div>
        </div>
        <div
          className={`container-nextbutton-pages mobile ${fade}`}
          style={{ color: '#fff' }}
        >
          <button
            className="nextbutton-pages"
            style={{ border: '1px solid #fff' }}
            onClick={handleNext}
          >
            <svg
              width="42"
              height="17"
              viewBox="0 0 42 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 16H40L24.7059 1" stroke="#fff" strokeOpacity="1" />
            </svg>
          </button>
          <p>Next</p>
        </div>
      </section>
      <div className={`fade-in ${fade}`}>
        <section className="coyo-description">
          <p className="description-text">
            The cutting-edge project that merges art direction, branding,
            business consulting, and service design to deliver an unparalleled
            experience at Cantina la 15 in Bogotá, Colombia.
          </p>
          <div className="grid-coyo">
            <div className="grid-item-coyo up">
              <p>Service</p>
            </div>
            <div className="grid-item-coyo up">
              <p>Client</p>
            </div>
            <div className="grid-item-coyo up">
              <p>Year</p>
            </div>
            <div className="grid-item-coyo"></div>
            <div className="grid-item-coyo">
              <p>
                Art Direction, Branding, Innovation Consulting, Service Design &
                Digital Marketing
              </p>
            </div>
            <div className="grid-item-coyo">
              <p>Studio F Group</p>
            </div>
            <div className="grid-item-coyo">
              <p>2024-Now</p>
            </div>
            <div className="grid-item-coyo button">
              <div>
                {/* <p>Check website</p>
                <button>
                  <svg
                    width="42"
                    height="17"
                    viewBox="0 0 42 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 16H40L24.7059 1"
                      stroke="white"
                      strokeOpacity="1"
                    />
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </section>
        <section className="coyo-section-1">
          <div className="coyo-section-flex">
            <div className="coyo-section-1-container__image">
              <img
                src="/images/coyoWork-1.webp"
                alt="coyo-1"
                className="coyo-image"
              />
            </div>
            <div className="coyo-section-1-text">
              <p>
                Coyo emerges as a sub-brand within Cantina la 15, a canvas where
                the essence of the desert, the mystical coyote, and the
                enchanting afternoons blending into twilight are artfully woven.
                Here, a singular experience unfolds, intertwining bespoke
                gastronomy and crafted cocktails, carrying the soul into the
                embrace of the night.
              </p>
            </div>
          </div>
          <div className="coyo-section-image-2">
            <img
              src="/images/coyoWork-2.webp"
              alt="coyo-2"
              className="coyo-image"
            />
          </div>
          <div className="coyo-section-image-3">
            <div>
              <img
                src="/images/coyoWork-3.webp"
                alt="coyo-2"
                className="coyo-image"
              />
            </div>
            <div>
              <img
                src="/images/coyoWork-4.webp"
                alt="coyo-2"
                className="coyo-image"
              />
            </div>
          </div>
          <div className="coyo-section-image-4">
            <img
              src="/images/coyoWork-5.webp"
              alt="coyo-2"
              className="coyo-image"
            />
          </div>
        </section>
        <FooterWorks />
      </div>
    </div>
  );
};

export default Coyo;
