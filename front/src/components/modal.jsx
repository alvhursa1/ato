import '../styles/components/modal.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../public/static/svg/closeIcon.svg?react';
import DirectionButtons from '../../public/static/svg/lista.svg?react';
import LinkedIn from '../../public/static/svg/linkedin.svg?react';
import Instagram from '../../public/static/svg/instagram.svg?react';
import Behance from '../../public/static/svg/behance.svg?react';
import Facebook from '../../public/static/svg/facebook.svg?react';

// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose }) => {
  const isOpenModal = isOpen;
  const onCloseModal = onClose;
  const Navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState('/images/menu1.webp');

  const handleMouseEnter = (newImage) => {
    setCurrentImage(newImage);
  };

  const handleBackdropClick = () => {
    onClose(); // Llama a la función onClose proporcionada por el componente padre
  };

  const handleModalContentClick = (event) => {
    event.stopPropagation(); // Detiene la propagación del evento de clic
  };

  const handleWork = () => {
    if (location.pathname !== '/work' && location.pathname !== '/work/') {
      Navigate('/work');
    }
    onClose();
  };

  const handleAbout = () => {
    if (location.pathname !== '/about' && location.pathname !== '/about/') {
      Navigate('/about');
    }
    onClose();
  };

  const handleContact = () => {
    if (location.pathname !== '/contact' && location.pathname !== '/contact/') {
      Navigate('/contact');
    }
    onClose();
  };

  return (
    <>
      {isOpenModal && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal" onClick={handleModalContentClick}>
            <div className="modal-content">
              <div className="container-close-button-modal">
                <p className="close-text-button-modal">Close</p>
                <button className="close-button-modal" onClick={onCloseModal}>
                  <CloseIcon className="icon-button-modal" />
                </button>
              </div>
              <div className="container-content">
                <div className="images-modal">
                  <div className="container-image">
                    <img
                      className="image-modal"
                      src={currentImage}
                      alt="image-menu"
                    />
                  </div>
                </div>
                <div className="menu-list">
                  <ul className="list-menu-modal">
                    <li
                      className="list-menu-modal-item"
                      onMouseEnter={() =>
                        handleMouseEnter('/images/menu2.webp')
                      }
                      onMouseLeave={() =>
                        handleMouseEnter('/images/menu1.webp')
                      }
                    >
                      <DirectionButtons className="direction-buttons-modal" />
                      <p style={{ cursor: 'pointer' }} onClick={handleWork}>
                        Work
                      </p>
                    </li>
                    <li
                      className="list-menu-modal-item"
                      onMouseEnter={() =>
                        handleMouseEnter('/images/menu3.webp')
                      }
                      onMouseLeave={() =>
                        handleMouseEnter('/images/menu1.webp')
                      }
                    >
                      <DirectionButtons className="direction-buttons-modal" />
                      <p style={{ cursor: 'pointer' }} onClick={handleAbout}>
                        About
                      </p>
                    </li>
                    <li
                      className="list-menu-modal-item"
                      onMouseEnter={() =>
                        handleMouseEnter('/images/menu4.webp')
                      }
                      onMouseLeave={() =>
                        handleMouseEnter('/images/menu1.webp')
                      }
                    >
                      <DirectionButtons className="direction-buttons-modal" />
                      <p>ĀTO Trends</p>
                    </li>
                    <li
                      className="list-menu-modal-item"
                      onMouseEnter={() =>
                        handleMouseEnter('/images/menu5.webp')
                      }
                      onMouseLeave={() =>
                        handleMouseEnter('/images/menu1.webp')
                      }
                    >
                      <DirectionButtons className="direction-buttons-modal" />
                      <p style={{ cursor: 'pointer' }} onClick={handleContact}>
                        Contact
                      </p>
                    </li>
                  </ul>
                  <h3 className="ato-h3">Āto Studio</h3>
                  <div className="copyright">
                    <p className="privacy-policy">Privacy Policy</p>
                    <p className="Terms">Terms & Conditions</p>
                    <div className="icons-copyright">
                      <a
                        href="https://www.linkedin.com/company/atostudio/"
                        style={{ textDecoration: 'none', color: '#0c0c0c' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedIn className="icons-copyright-item" />
                      </a>
                      <a
                        href="https://www.instagram.com/atostudioco/"
                        style={{ textDecoration: 'none', color: '#0c0c0c' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="icons-copyright-item" />
                      </a>
                      <a
                        href="https://www.behance.net/atostudio"
                        style={{ textDecoration: 'none', color: '#0c0c0c' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Behance className="icons-copyright-item" />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61552925791921&locale=es_LA"
                        style={{ textDecoration: 'none', color: '#0c0c0c' }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Facebook className="icons-copyright-item" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
