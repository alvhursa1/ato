/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../styles/pages/works.css';
import Menu from '../components/menu';
import { useResizeDetector } from 'react-resize-detector';
import { Link, useNavigate } from 'react-router-dom';
import Carousel from '../components/carousel';
import Logo from '../../public/static/svg/Logo.svg?react';
import { Helmet } from 'react-helmet';

function Works() {
  const navigate = useNavigate();
  const containerRef = React.useRef();
  const firstHalfRef = React.useRef();
  const secondHalfRef = React.useRef();
  const resizerRef = React.useRef();
  const firstHalfContentRef = React.useRef();
  const { ref, width } = useResizeDetector();
  const titleRef = React.useRef();
  const textRef = React.useRef();
  const loopRef = React.useRef();
  const buttonRef = React.useRef();
  const [items, setItems] = React.useState(
    Array.from({ length: 5 }, (_, i) => images[i]),
  ); // Inicializa con las 5 primeras imágenes
  const observer = React.useRef();
  const lastItemRef = React.useRef();

  React.useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Cuando el último elemento está en la vista, vuelve a empezar desde la primera imagen
        setItems((prevItems) => [
          ...prevItems,
          ...Array.from({ length: 5 }, (_, i) => images[i]),
        ]);
      }
    });

    if (lastItemRef.current) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      if (lastItemRef.current) {
        observer.current.unobserve(lastItemRef.current);
      }
    };
  }, [items]);

  const handleImageClick = (title, src, event) => {
    const firstHalfEle = firstHalfRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (firstHalfEle && secondHalfEle) {
      const clickedElement = event.currentTarget;
      clickedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstHalfEle.style.width = '0%';
      secondHalfEle.style.width = '100%';
      setTimeout(() => {
        navigate(`/work/${title.toLowerCase()}`, {
          state: { selectedImage: src },
        });
      }, 150);
    }
  };

  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  };

  React.useEffect(() => {
    if (width) {
      let titleFontSize, textFontSize, loopFontSize, buttonFontSize;

      if (isMobile()) {
        // Establece los tamaños de fuente para móviles
        titleFontSize = `26vw`;
        textFontSize = `6vw`;
        loopFontSize = `8vw`;
        buttonFontSize = `4vw`;
      } else {
        // Establece los tamaños de fuente para no móviles
        titleFontSize = `${width / 4.5}px`;
        textFontSize = `${width / 28}px`;
        loopFontSize = `${width / 20}px`;
        buttonFontSize = `${width / 45}px`;
      }

      titleRef.current.style.fontSize = titleFontSize;
      textRef.current.style.fontSize = textFontSize;
      loopRef.current.style.fontSize = loopFontSize;
      buttonRef.current.style.fontSize = buttonFontSize;
    }
  }, [width]);

  React.useEffect(() => {
    const firstHalfEle = firstHalfRef.current;
    if (firstHalfEle) {
      const handleAnimationEnd = () => {
        firstHalfEle.classList.remove('load-animation');
      };
      firstHalfEle.addEventListener('animationend', handleAnimationEnd);
      return () => {
        firstHalfEle.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  const handleMouseDown = React.useCallback((e) => {
    const startPos = {
      x: e.clientX,
      y: e.clientY,
    };
    const currentLeftWidth = firstHalfRef.current.getBoundingClientRect().width;

    const handleMouseMove = (e) => {
      const dx = e.clientX - startPos.x;
      updateWidth(currentLeftWidth, dx);
      updateCursor();

      const firstHalfEle = firstHalfRef.current;
      const container = containerRef.current;
      if (firstHalfEle && container) {
        const containerWidth = container.getBoundingClientRect().width;
        const firstHalfWidth = firstHalfEle.getBoundingClientRect().width;
        const firstHalfWidthPercent = (firstHalfWidth * 100) / containerWidth;
        const overlayOpacity = 1 - firstHalfWidthPercent / 50;
        firstHalfEle.style.setProperty('--overlay-opacity', overlayOpacity);
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      resetCursor();

      const secondHalfEle = secondHalfRef.current;
      const firstHalfEle = firstHalfRef.current;
      const container = containerRef.current;
      if (secondHalfEle && firstHalfEle && container) {
        const containerWidth = container.getBoundingClientRect().width;
        const secondHalfWidth = secondHalfEle.getBoundingClientRect().width;
        const secondHalfWidthPercent = (secondHalfWidth * 100) / containerWidth;
        if (secondHalfWidthPercent < 50 && secondHalfWidthPercent >= 15) {
          secondHalfEle.style.width = '35%';
          firstHalfEle.style.width = '65%';
          firstHalfEle.style.setProperty('--overlay-opacity', 0);
        } else if (
          secondHalfWidthPercent >= 50 &&
          secondHalfWidthPercent < 87
        ) {
          secondHalfEle.style.width = '65%';
          firstHalfEle.style.width = '35%';
          firstHalfEle.style.setProperty('--overlay-opacity', 0);
        } else if (secondHalfWidthPercent >= 87) {
          secondHalfEle.style.width = '100%';
          firstHalfEle.style.width = '0%';
          firstHalfEle.style.setProperty('--overlay-opacity', 1);
        } else if (secondHalfWidthPercent < 15 && secondHalfWidthPercent > 0) {
          secondHalfEle.style.width = '0%';
          firstHalfEle.style.width = '100%';
          firstHalfEle.style.setProperty('--overlay-opacity', 0);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  }, []);

  const handleTouchStart = React.useCallback((e) => {
    const touch = e.touches[0];
    const startPos = {
      x: touch.clientX,
      y: touch.clientY,
    };
    const currentLeftWidth = firstHalfRef.current.getBoundingClientRect().width;

    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      const dx = touch.clientX - startPos.x;
      updateWidth(currentLeftWidth, dx);
      updateCursor();

      const firstHalfEle = firstHalfRef.current;
      const container = containerRef.current;
      if (firstHalfEle && container) {
        const containerWidth = container.getBoundingClientRect().width;
        const firstHalfWidth = firstHalfEle.getBoundingClientRect().width;
        const firstHalfWidthPercent = (firstHalfWidth * 100) / containerWidth;
        const overlayOpacity = 1 - firstHalfWidthPercent / 50;
        firstHalfEle.style.setProperty('--overlay-opacity', overlayOpacity);
      }
    };

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      resetCursor();

      const secondHalfEle = secondHalfRef.current;
      const firstHalfEle = firstHalfRef.current;
      const container = containerRef.current;
      if (secondHalfEle && firstHalfEle && container) {
        const containerWidth = container.getBoundingClientRect().width;
        const secondHalfWidth = secondHalfEle.getBoundingClientRect().width;
        const secondHalfWidthPercent = (secondHalfWidth * 100) / containerWidth;
        if (secondHalfWidthPercent < 50 && secondHalfWidthPercent >= 15) {
          secondHalfEle.style.width = '35%';
          firstHalfEle.style.width = '65%';
          firstHalfEle.style.setProperty('--overlay-opacity', 0);
        } else if (
          secondHalfWidthPercent >= 50 &&
          secondHalfWidthPercent < 87
        ) {
          secondHalfEle.style.width = '65%';
          firstHalfEle.style.width = '35%';
          firstHalfEle.style.setProperty('--overlay-opacity', 0);
        } else if (secondHalfWidthPercent >= 87) {
          secondHalfEle.style.width = '100%';
          firstHalfEle.style.width = '0%';
          firstHalfEle.style.setProperty('--overlay-opacity', 1);
        } else if (secondHalfWidthPercent < 15 && secondHalfWidthPercent > 0) {
          secondHalfEle.style.width = '0%';
          firstHalfEle.style.width = '100%';
          firstHalfEle.style.setProperty('--overlay-opacity', 0);
        }
      }
    };

    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  }, []);

  const updateWidth = (currentLeftWidth, dx) => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;

    if (!container || !firstHalfEle) {
      return;
    }

    const containerWidth = container.getBoundingClientRect().width;
    const delta = currentLeftWidth + dx;
    const newFirstHalfWidth = (delta * 100) / containerWidth;
    firstHalfEle.style.width = `${newFirstHalfWidth}%`;
  };

  const updateCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
      return;
    }

    resizerEle.style.cursor = 'ew-resize';
    document.body.style.cursor = 'ew-resize';
    firstHalfEle.style.userSelect = 'none';
    firstHalfEle.style.pointerEvents = 'none';
    firstHalfEle.style.transition = 'none';
    secondHalfEle.style.userSelect = 'none';
    secondHalfEle.style.pointerEvents = 'none';
    secondHalfEle.style.transition = 'none';
  };

  const resetCursor = () => {
    const container = containerRef.current;
    const firstHalfEle = firstHalfRef.current;
    const resizerEle = resizerRef.current;
    const secondHalfEle = secondHalfRef.current;

    if (!container || !firstHalfEle || !resizerEle || !secondHalfEle) {
      return;
    }

    resizerEle.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');
    firstHalfEle.style.removeProperty('user-select');
    firstHalfEle.style.removeProperty('pointer-events');
    firstHalfEle.style.transition = '';
    secondHalfEle.style.removeProperty('pointer-events');
    secondHalfEle.style.transition = '';
  };

  const [divHeight, setDivHeight] = React.useState('auto');
  const endRef = React.useRef(null);

  const handleImageSize = () => {
    const screenHeight = window.innerHeight;
    setDivHeight(screenHeight); // Cambia la altura del div a 100vh

    // Desplaza la página hasta el final del componente
    setTimeout(() => {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Crafting meaningful human experiences stands at the core of our approach. Check our work."
        />
      </Helmet>
      <div className="splitter" ref={containerRef}>
        <div className="splitter__first load-animation" ref={firstHalfRef}>
          <div ref={firstHalfContentRef}>
            <div className="content-left" ref={ref}>
              <Menu
                containerStyle={{
                  position: 'absolute',
                  top: '1.5%',
                  right: '2%',
                  opacity: '0',
                  animation: 'opacity 1s forwards',
                  animationDelay: '1.2s',
                }}
              />
              <Link to={'/'} className="icon-works">
                <Logo className="logo-home" />
              </Link>
              <h1 className="title-works" ref={titleRef}>
                WORK
              </h1>
              <div className="workbanner-container">
                <img
                  className="workbanner"
                  src="/images/sillas.webp"
                  alt="workbanner"
                />
              </div>
              <p className="slogan-works" ref={textRef}>
                Crafting meaningful human experiences stands at the core of our
                approach, as we aspire to be architects of disruption, shaping
                innovative brands and businesses that redefine the landscape.
              </p>
              <button
                ref={buttonRef}
                className="button-works"
                onClick={() => {
                  navigate('/work/kiefer');
                }}
              >
                Check the latest trends
              </button>
              <hr className="hr" style={{ width: '100%', margin: '0' }} />
              <div className="marquee">
                <p className="marquee__text" ref={loopRef}>
                  Marketing . Branding . Web Design . Innovation . Marketing .
                  Branding . Web Design . Innovation
                </p>
              </div>
              <div className="copyright-work">
                <p>© Ato Studio 2024</p>
                <div className="copyright-work" style={{ padding: '0' }}>
                  <p>Privacy Policy</p>
                  <p>Terms & Conditions</p>
                </div>
              </div>
              <div className="video-container">
                <video
                  className="video-banner"
                  src="/bannerVideo.mp4"
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
              <div className="mobile-works" style={{ height: divHeight }}>
                <Carousel
                  useAlternateImages={true}
                  onImageClick={handleImageSize}
                />
                <div ref={endRef} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="splitter__resizer"
          ref={resizerRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="bar-container">
            <div className="bars">
              <div className="bar1" />
              <div className="bar2" />
            </div>
            <div className="vertical-text" style={{ color: '#fff' }}>
              SEE WORK
            </div>
          </div>
        </div>
        <div className="splitter__second" ref={secondHalfRef}>
          <div>
            <div className="content-right">
              {items.map((item, index) => (
                <div
                  key={index}
                  ref={index === items.length - 1 ? lastItemRef : null}
                  style={{
                    margin: 'auto 0',

                    maxWidth: '80vw',
                  }}
                  onClick={(event) =>
                    handleImageClick(item.title, item.src, event)
                  }
                >
                  <div className="container-image-right">
                    <img
                      className="image-right"
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                  <p className="image-right-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;

const images = [
  {
    src: '/images/ciervo.webp',
    alt: 'work1',
    title: 'KIEFER',
  },
  {
    src: '/images/coyo.webp',
    alt: 'work2',
    title: 'COYO',
  },
  {
    src: '/images/fiona.webp',
    alt: 'work3',
    title: 'FIONA',
  },
  {
    src: '/images/robot.webp',
    alt: 'work4',
    title: 'ZDS',
  },
  {
    src: '/images/navilandia.webp',
    alt: 'work5',
    title: 'NAVILANDIA',
  },
];
