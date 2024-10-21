/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Modal from './modal';
import '../styles/components/menu.css';
// import { useNavigate } from 'react-router-dom';
import LogoMenu from '../../public/static/svg/menu.svg?react';
import { Link } from 'react-router-dom';

const Menu = ({ containerStyle }) => {
  // const Navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [buttonStyles, setButtonStyles] = useState({
    backgroundColor: 'transparent',
    borderColor: containerStyle ? '#000' : '#fff',
  });
  const [svgColor, setSvgColor] = useState(containerStyle ? '#000' : '#fff'); // Estado para el color del SVG

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const scrollPosition = window.innerHeight * 3; // Multiplica por el factor deseado, por ejemplo 1.5
      if (position > scrollPosition) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const openModal = () => {
    setIsOpen(true);
    setButtonStyles({
      backgroundColor: containerStyle ? '#000' : '#fff',
      borderColor: 'transparent',
    });
    setSvgColor(containerStyle ? '#fff' : '#000'); // Cambiar color del SVG a negro
  };

  const closeModal = () => {
    setIsOpen(false);
    setButtonStyles({
      backgroundColor: 'transparent',
      borderColor: containerStyle ? '#000' : '#fff',
    });
    setSvgColor(containerStyle ? '#000' : '#fff'); // Restaurar color del SVG a gris claro
  };

  return (
    <div
      className={`menu-container ${isOpen ? 'open' : ''}`}
      style={containerStyle}
    >
      {isOpen && <div className="modal-backdrop" onClick={closeModal}></div>}
      <button
        className={`menu-button ${isScrolled ? 'scrolled' : ''}`}
        style={{
          ...buttonStyles,
          borderColor: isScrolled ? '#000' : buttonStyles.borderColor,
        }}
        onClick={isOpen ? closeModal : openModal}
      >
        <LogoMenu
          id="menu-icon"
          style={{ color: isScrolled ? '#000' : svgColor }}
        />
      </button>
      <Link
        to="/calendar"
        className={`contact-menu ${isScrolled ? 'scrolled' : ''} ${containerStyle ? 'container-style' : ''}`}
      >
        Schedule demo
      </Link>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

export default Menu;
