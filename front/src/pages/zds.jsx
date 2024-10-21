import '../styles/pages/zds.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FooterWorks from '../components/footerWorks';
import CloseWorks from '../components/closeWorks';

const Zds = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(location.state?.direction || '');
  const selectedImage = location.state?.selectedImage;
  const [fade, setFade] = useState('');

  const handleNext = () => {
    setFade('out');
    setDirection('inRight');
    navigate('/work/navilandia', { state: { direction: 'outLeft' } });
  };

  const handlePrev = () => {
    setFade('out');
    setDirection('inLeft');
    navigate('/work/fiona', { state: { direction: 'outRight' } });
  };

  return (
    <div style={{ backgroundColor: '#0c0c0c', minHeight: '100vh' }}>
      <CloseWorks />
      <section className="zds-container">
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
            <div className={`zds-image-container `}>
              {selectedImage ? (
                <img src={selectedImage} alt="kiefer" />
              ) : (
                <img src="/images/robot.webp" alt="kiefer" />
              )}
            </div>
            <h1 className="title-work-page">ZDS</h1>
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
        <section className="zds-description">
          <p className="description-text">
            Giving an experienced marketing agency a more upscale and modern
            look, while communicating its tenure.
          </p>
          <div className="grid-zds">
            <div className="grid-item-zds up">
              <p>Service</p>
            </div>
            <div className="grid-item-zds up">
              <p>Client</p>
            </div>
            <div className="grid-item-zds up">
              <p>Year</p>
            </div>
            <div className="grid-item-zds"></div>
            <div className="grid-item-zds">
              <p>Art Direction, Branding, Web Design</p>
            </div>
            <div className="grid-item-zds">
              <p>Zoom Digital Agency</p>
            </div>
            <div className="grid-item-zds">
              <p>2023</p>
            </div>
            <div className="grid-item-zds button">
              {/* <div>
                <p>Check website</p>
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
                </button>
              </div> */}
            </div>
          </div>
        </section>
        <section className="zds-section-1">
          <p id="zds-1">
            The main goal was to achieve a rebranding process that gave ZDS a
            new look, we took some of the original elements of the brand and
            gave it a full facelift. The result is a unique and cohesive brand
            to highlight the agency’s work.
          </p>

          <div className="image-1-zds" id="zds-2">
            <div id="image-zds-1">
              <img src="/images/robot-1.webp" alt="kiefer" />
            </div>
            <div id="image-zds-2">
              <img src="/images/robot-2.webp" alt="kiefer" />
            </div>
            <div id="image-zds-3">
              <p>
                The main goal was to achieve a rebranding process that gave ZDS
                a new look, we took some of the original elements of the brand
                and gave it a full facelift. The result is a unique and cohesive
                brand to highlight the agency’s work.
              </p>
            </div>
            <div id="image-zds-4">
              <img src="/images/robot-3.webp" alt="kiefer" />
            </div>
          </div>
          <div className="image-2-zds" id="zds-3">
            <div>
              <img src="/images/robot-4.webp" alt="kiefer" />
            </div>
          </div>
        </section>
        <FooterWorks />
      </div>
    </div>
  );
};

export default Zds;
