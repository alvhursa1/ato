import '../styles/pages/navilandia.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FooterWorks from '../components/footerWorks';
import CloseWorks from '../components/closeWorks';

const Navilandia = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedImage = location.state?.selectedImage;
  const [direction, setDirection] = useState(location.state?.direction || '');
  const [fade, setFade] = useState('');

  const handleNext = () => {
    setFade('out');
    setDirection('inRight');
    navigate('/work/kiefer', { state: { direction: 'outLeft' } });
  };

  const handlePrev = () => {
    setFade('out');
    setDirection('inLeft');
    navigate('/work/zds', { state: { direction: 'outRight' } });
  };
  return (
    <div style={{ backgroundColor: '#0c0c0c', minHeight: '100vh' }}>
      <CloseWorks />
      <section className="navilandia-container">
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
            <div className={`navilandia-image-container `}>
              {selectedImage ? (
                <img src={selectedImage} alt="kiefer" />
              ) : (
                <img src="/images/navilandia.webp" alt="kiefer" />
              )}
            </div>
            <h1 className="title-work-page">NAVILANDIA</h1>
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
        <section className="navilandia-description">
          <p className="description-text">
            Through a meticulous Marketing Strategy and Art Direction,
            Navilandia came to life: a magical universe where warmth and family
            tradition intertwine. Every detail is imbued with the essence of
            Christmas.
          </p>
          <div className="grid-navilandia">
            <div className="grid-item-navilandia up">
              <p>Service</p>
            </div>
            <div className="grid-item-navilandia up">
              <p>Client</p>
            </div>
            <div className="grid-item-navilandia up">
              <p>Year</p>
            </div>
            <div className="grid-item-navilandia"></div>
            <div className="grid-item-navilandia">
              <p>
                Branding, Web design and UX/UI, Digital Marketing, Marketing,
                Art direction.
              </p>
            </div>
            <div className="grid-item-navilandia">
              <p>Productos Navideños Navilandia SAS</p>
            </div>
            <div className="grid-item-navilandia">
              <p>2023-Now</p>
            </div>
            <div className="grid-item-navilandia button">
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
        <section className="navilandia-section-1">
          <div className="image-navilandia-1">
            <img src="/images/navilandia-1.webp" alt="" />
          </div>
          <div className="image-navilandia-2-container">
            <div>
              <img src="/images/navilandia-2.webp" alt="" />
            </div>
            <div>
              <img src="/images/navilandia-3.webp" alt="" />
            </div>
          </div>
          <div className="text-navilandia-1">
            <p>
              Navilandia boasts a tradition of over 30 years with the purpose of
              making a mark in the Christmas decoration scene, offering a
              variety of trees and a wide range of Christmas decorations in
              different styles that promise to immerse users in a magical realm
              where trees embody the festive essence.
            </p>
          </div>
        </section>
        <FooterWorks />
      </div>
    </div>
  );
};

export default Navilandia;
