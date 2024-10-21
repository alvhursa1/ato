import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/pages/kiefer.css';
import { useState } from 'react';
import FooterWorks from '../components/footerWorks';
import CloseWorks from '../components/closeWorks';

const Kiefer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(location.state?.direction || '');
  const [fade, setFade] = useState('');

  const selectedImage = location.state?.selectedImage;

  const handleNext = () => {
    setFade('out');
    setDirection('inRight');
    navigate('/work/coyo', { state: { direction: 'outLeft' } });
  };

  const handlePrev = () => {
    setFade('out');
    setDirection('inLeft');
    navigate('/work/navilandia', { state: { direction: 'outRight' } });
  };

  return (
    <div style={{ backgroundColor: '#0c0c0c', minHeight: '100vh' }}>
      <CloseWorks />
      <section className="kiefer-container">
        <div
          className={`container-prevbutton-pages mobile ${fade} `}
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
            <div className={`kiefer-image-container`}>
              {selectedImage ? (
                <img src={selectedImage} alt="kiefer" />
              ) : (
                <img src="/images/ciervo.webp" alt="kiefer" />
              )}
            </div>
            <h1 className="title-work-page">KIEFER</h1>
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
        <section className="kiefer-description">
          <p className="description-text">
            From an innovative concept, we unravel the elegance and tradition of
            Christmas through Brand Strategy, Space and Product Design,
            generating an experience that will transport Kiefer&apos;s visitors
            to feel like they are in an authentic Christmas Eve village.
          </p>
          <div className="grid-kiefer">
            <div className="grid-item-kiefer up">
              <p>Service</p>
            </div>
            <div className="grid-item-kiefer up">
              <p>Client</p>
            </div>
            <div className="grid-item-kiefer up">
              <p>Year</p>
            </div>
            <div className="grid-item-kiefer"></div>
            <div className="grid-item-kiefer">
              <p>
                Branding, Brand strategy, Product design, Web design and UX/UI,
                Space/interior design, Digital marketing.
              </p>
            </div>
            <div className="grid-item-kiefer">
              <p>Pincaso</p>
            </div>
            <div className="grid-item-kiefer">
              <p>2023-Now</p>
            </div>
            <div className="grid-item-kiefer button">
              <div>
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
              </div>
            </div>
          </div>
        </section>
        <section className="kiefer-section-1">
          <div className="kiefer-image-group-1">
            <div className="kiefer-group-1">
              <img src="/images/kiefer-1.webp" alt="kiefer" />
            </div>
            <div className="kiefer-group-2">
              <div className="img-kiefer-group-2-1">
                <img src="/images/kiefer-2.webp" alt="kiefer" />
              </div>
              <div className="img-kiefer-group-2-2">
                <img src="/images/kiefer-3.webp" alt="kiefer" />
              </div>
            </div>
          </div>

          <div className="kiefer-section-1-text">
            <p>
              Kiefer offers Christmas enthusiasts the opportunity to transform
              their spaces into oases of elegance with exclusive pieces imported
              from Europe and Asia. Each product is meticulously selected to
              provide not only decorative elements but authentic expressions of
              sophistication
            </p>
          </div>
          <div className="kiefer-image-2">
            <img src="/images/kiefer-4.webp" alt="kiefer" />
          </div>
          <div className="kiefer-image-3">
            <div>
              <img src="/images/kiefer-5.webp" alt="kiefer" />
            </div>
          </div>
        </section>
        <FooterWorks />
      </div>
    </div>
  );
};

export default Kiefer;
