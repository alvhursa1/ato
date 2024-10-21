import '../styles/pages/fiona.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FooterWorks from '../components/footerWorks';
import CloseWorks from '../components/closeWorks';

const Fiona = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(location.state?.direction || '');
  const selectedImage = location.state?.selectedImage;
  const [fade, setFade] = useState('');
  const isMobile = window.innerWidth <= 768;

  const handleNext = () => {
    setFade('out');
    setDirection('inRight');
    navigate('/work/zds', { state: { direction: 'outLeft' } });
  };

  const handlePrev = () => {
    setFade('out');
    setDirection('inLeft');
    navigate('/work/coyo', { state: { direction: 'outRight' } });
  };
  return (
    <div style={{ backgroundColor: '#0c0c0c', minHeight: '100vh' }}>
      <CloseWorks />
      <section className="fiona-container">
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
        <div className={`animation-pages  ${selectedImage ? 'animation' : ''}`}>
          <div className={`slide-pages ${direction}`}>
            <div className={`fiona-image-container `}>
              {selectedImage ? (
                <img src={selectedImage} alt="kiefer" />
              ) : (
                <img src="/images/fiona.webp" alt="kiefer" />
              )}
            </div>
            <h1 className="title-work-page">FIONA</h1>
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
        <section className="fiona-description">
          <p className="description-text">
            Infusing color and movement into every aspect of the Fiona brand
            posed a challenge that unfolded seamlessly from art direction to
            digital marketing and the design of products and Space Design.
            {!isMobile && ' '}
            {isMobile && (
              <>
                <br />
                <br />
              </>
            )}
            Fiona transcends mere clothing; it embodies the essence of Cali in
            every piece.
          </p>
          <div className="grid-fiona">
            <div className="grid-item-fiona up">
              <p>Service</p>
            </div>
            <div className="grid-item-fiona up">
              <p>Client</p>
            </div>
            <div className="grid-item-fiona up">
              <p>Year</p>
            </div>
            <div className="grid-item-fiona"></div>
            <div className="grid-item-fiona">
              <p>
                Branding, Product and packing design, CX and service design,
                Marketing, Art direction.
              </p>
            </div>
            <div className="grid-item-fiona">
              <p>Fanny Sanchez</p>
            </div>
            <div className="grid-item-fiona">
              <p>2023-2024</p>
            </div>
            <div className="grid-item-fiona button">
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
        <section className="fiona-section-1">
          <div className="fiona-picture-1" id="fiona-1">
            <img src="/images/fiona-1.webp" alt="fiona" />
          </div>
          <div className="fiona-picture-2-container" id="fiona-2">
            <div className="fiona-picture-2-text">
              <p>
                Fiona, the creation of talented and determined woman, Fanny
                Sánchez, is more than just a clothing brand. It represents the
                vision, joy, and authenticity of a woman who isn&apos;t afraid
                to embody the value of femininity through clothing, embracing
                the fluidity of Cali women in every piece.
              </p>
            </div>
            <div className="fiona-picture-2">
              <div>
                <img src="/images/fiona-2.webp" alt="fiona" />
              </div>
            </div>
          </div>
          <div className="fiona-picture-3-container" id="fiona-3">
            <div className="fiona-picture-3">
              <img src="/images/fiona-3.webp" alt="fiona" />
            </div>
            <div className="fiona-picture-3">
              <img src="/images/fiona-4.webp" alt="fiona" />
            </div>
          </div>
          <div className="fiona-picture-4-container" id="fiona-4">
            <div className="fiona-picture-4">
              <img src="/images/fiona-5.webp" alt="fiona" />
            </div>
          </div>
        </section>

        <FooterWorks />
      </div>
    </div>
  );
};

export default Fiona;
