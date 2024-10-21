import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import '../styles/components/carousel.css';
import { useNavigate } from 'react-router-dom';
import DirectionButtons from '../../public/static/svg/lista.svg?react';
import PropTypes from 'prop-types';

const Carousel = ({ useAlternateImages, onImageClick }) => {
  const navigate = useNavigate();
  const defaultImages = [
    {
      link: 'https://picsum.photos/id/23/481/319',
      name: 'Gustavo Uribe',
      description:
        'The team showed me their expertise building a new luxury brand from scratch, incredible commitment.',
      workstation: 'Kiefer',
    },
    {
      link: 'https://picsum.photos/id/24/481/319',
      name: 'Fanny Sanchez',
      description:
        'The whole process was pretty impresive from the get go, the methodology they used really helped communitcating the brand.',
      workstation: 'Fiona',
    },
    {
      link: 'https://picsum.photos/id/25/481/319',
      name: 'Alberto Llano',
      description:
        'Rebranding with them was a refreshing experience, exceded my expectations tenfold.',
      workstation: 'ZDS',
    },
  ];

  const alternateImages = [
    {
      link: '/images/ciervo.webp',
      name: 'KIEFER',
    },
    {
      link: '/images/coyo.webp',
      name: 'COYO',
    },
    {
      link: '/images/fiona.webp',
      name: 'FIONA',
    },
    {
      link: '/images/robot.webp',
      name: 'ZDS',
    },
    {
      link: '/images/navilandia.webp',
      name: 'NAVILANDIA',
    },
  ];

  const images = useAlternateImages ? alternateImages : defaultImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const imageRef = useRef(null);
  const controls = useAnimation();
  useEffect(() => {
    const gap = 40; // Your gap in pixels
    setWidth(imageRef.current.offsetWidth + gap);
  }, [useAlternateImages]);

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  const nextSlide = async () => {
    if (isMobile()) {
      if (currentIndex < images.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        await controls.start({ x: -(currentIndex + 1) * width });
      } else {
        await controls.start({ x: -currentIndex * width - 30 });
        controls.start({ x: -currentIndex * width });
      }
    } else {
      if (currentIndex < images.length - 3) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        await controls.start({ x: -(currentIndex + 1) * width });
      } else {
        await controls.start({ x: -currentIndex * width - 30 });
        controls.start({ x: -currentIndex * width });
      }
    }
  };

  const prevSlide = async () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      await controls.start({ x: -(currentIndex - 1) * width });
    } else {
      await controls.start({ x: -currentIndex * width + 30 });
      controls.start({ x: -currentIndex * width });
    }
  };

  const [fadeOut, setFadeOut] = useState('');

  return (
    <div className="carousel-wrapper">
      <div className="container-prevbutton">
        <p>Back</p>
        <button className="prevbutton-carousel" onClick={prevSlide}>
          <DirectionButtons />
        </button>
      </div>

      <div className="carousel-container">
        {!useAlternateImages && <h2>Endorsed by experts</h2>}
        <motion.div
          animate={controls}
          initial={{ x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`inner-carousel ${useAlternateImages ? 'alternate' : ''}`}
          drag="x"
          dragConstraints={{ left: -width * (images.length - 1), right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset }) => {
            const direction = offset.x / Math.abs(offset.x);

            if (direction === 1) {
              prevSlide();
            } else if (direction === -1) {
              nextSlide();
            }
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-image">
              <div
                onClick={
                  useAlternateImages
                    ? () => {
                        onImageClick();
                        setFadeOut('out');
                        setTimeout(() => {
                          navigate(`/work/${image.name}`);
                        }, 500);
                      }
                    : null
                }
                ref={index === 0 ? imageRef : null}
              >
                {useAlternateImages && (
                  <img src={image.link} alt={image.name} />
                )}
                <div>
                  <h3>{image.name}</h3>
                  {!useAlternateImages && (
                    <p className="workstation-carousel">{image.workstation}</p>
                  )}
                  {!useAlternateImages && (
                    <p className="description-carousel">{image.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <div className={`carousel-indicators ${fadeOut}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''} ${useAlternateImages ? 'alternate' : ''}`}
          />
        ))}
      </div>
      {useAlternateImages && (
        <div className={`mobile-copyright ${fadeOut}`}>
          <div>
            <p>© Ato Studio 2024</p>
          </div>
          <div>
            <p>Privacy Policy</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
          </div>
        </div>
      )}
      <div className="container-nextbutton">
        <button className="nextbutton-carousel" onClick={nextSlide}>
          <DirectionButtons />
        </button>
        <p>Next</p>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  useAlternateImages: PropTypes.bool.isRequired,
  onImageClick: PropTypes.func,
};

export default Carousel;
