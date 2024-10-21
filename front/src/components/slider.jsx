import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import '../styles/components/slider.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../public/static/svg/Logo.svg?react';
import LinkedIn from '../../public/static/svg/linkedin.svg?react';
import Instagram from '../../public/static/svg/instagram.svg?react';
import Behance from '../../public/static/svg/behance.svg?react';
import Facebook from '../../public/static/svg/facebook.svg?react';

const Slider = () => {
  return (
    <div className="container1">
      <HorizontalScrollCarousel />
    </div>
  );
};

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const HorizontalScrollCarousel = () => {
  const Navigate = useNavigate();
  const location = useLocation();

  const handleWork = () => {
    Navigate('/work');
  };
  const handleAbout = () => {
    Navigate('/about');
  };
  const handleContact = () => {
    Navigate('/contact');
  };

  const handleHome = () => {
    if (location.pathname !== '/') {
      Navigate('/');
    }
  };

  const [currentImage, setCurrentImage] = useState(1);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const imageHeight = window.innerHeight;
      const currentImage = Math.floor(scrollPosition / imageHeight) + 1;
      setCurrentImage(currentImage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const { width } = useWindowDimensions();
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    width <= 768 ? ['0%', '-66.6%'] : ['0%', '-22%'],
  );
  const progressBarHeight = useTransform(
    scrollYProgress,
    (value) => `${value * 100}%`,
  );
  return (
    <section ref={targetRef} className="section1">
      <div className="sticky">
        <div className="centered-text">
          <div className="sup">
            <div className="icon1">
              <div onClick={handleHome} style={{ cursor: 'pointer' }}>
                <Logo className="logo-home" />
              </div>
              <div className="progress-bar-container">
                <motion.div
                  className="progress-bar"
                  style={{ height: progressBarHeight }}
                />
              </div>
            </div>

            <h1 className="title-ato">ĀTO</h1>
            <ul className="menu">
              <li className="menu-item">
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={handleWork}
                  className="menu-item-text"
                >
                  Work
                </p>
              </li>
              <li className="menu-item">
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={handleAbout}
                  className="menu-item-text"
                >
                  About Us
                </p>
              </li>
              <li className="menu-item">
                <p className="menu-item-text">ĀTO Trends</p>
              </li>
              <li className="menu-item">
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={handleContact}
                  className="menu-item-text"
                >
                  Contact
                </p>
              </li>
            </ul>
          </div>
          <div className="inf">
            <div className="container-button-slider">
              <button onClick={handleWork} className="button-slider">
                Check our work
              </button>
            </div>
            <div className="social-icons-slider">
              <a
                href="https://www.linkedin.com/company/atostudio/"
                style={{ textDecoration: 'none', color: '#fff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://www.instagram.com/atostudioco/"
                style={{ textDecoration: 'none', color: '#fff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                href="https://www.behance.net/atostudio"
                style={{ textDecoration: 'none', color: '#fff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Behance />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61552925791921&locale=es_LA"
                style={{ textDecoration: 'none', color: '#fff' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            </div>
            <div className="sections-slider">
              <div
                className={`section-slider-item hover-group ${width <= 768 && currentImage !== 1 ? 'hide' : ''}`}
              >
                <p className={currentImage === 1 ? 'active' : ''}>01</p>
                <p
                  className={`section-slider-item-title ${currentImage === 1 ? 'active' : ''}`}
                >
                  Why:
                </p>
                <p className={currentImage === 1 ? 'active' : ''}>
                  We dream of clients who create value through innovation.
                </p>
              </div>
              <div
                className={`section-slider-item hover-group ${width <= 768 && currentImage !== 2 ? 'hide' : ''}`}
              >
                <p className={currentImage === 2 ? 'active' : ''}>02</p>
                <p
                  className={`section-slider-item-title ${currentImage === 2 ? 'active' : ''}`}
                >
                  How:
                </p>
                <p className={currentImage === 2 ? 'active' : ''}>
                  Arukumia: Our integrated innovation methodology.
                </p>
              </div>
              <div
                className={`section-slider-item hover-group ${width <= 768 && currentImage !== 3 ? 'hide' : ''}`}
              >
                <p className={currentImage === 3 ? 'active' : ''}>03</p>
                <p
                  className={`section-slider-item-title ${currentImage === 3 ? 'active' : ''}`}
                >
                  What:
                </p>
                <p className={currentImage === 3 ? 'active' : ''}>
                  Human branding & marketing, innovation and brand experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

{/*         <motion.div style={{ x }} className="motion">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div> */}
      </div>
    </section>
  );
};

import PropTypes from 'prop-types';

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group">
      <div
        id={card.id}
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Ajustar la altura al viewport height
          width: '100%', // Ajustar el ancho al 100% del contenedor
          display: 'flex',
          justifyContent: 'center', // Centrar horizontalmente
          alignItems: 'center', // Centrar verticalmente
        }}
        className="absolute"
      ></div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Slider;

const cards = [
  {
    url: '/images/Slider-1.webp',
    title: 'Title 1',
    id: 1,
  },
  {
    url: '/images/Slider-2.webp',
    title: 'Title 2',
    id: 2,
  },
  {
    url: '/images/Slider-3.webp',
    title: 'Title 3',
    id: 3,
  },
];
