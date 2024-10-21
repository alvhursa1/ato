import "../styles/components/buttonwhatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

const ButtonWhatsApp = () => {
  const buttonColor = "#0c0c0c";
  const iconColor = "#fff";
  const borderColor = "#fff"; // Asegúrate de tener un color por defecto

  return (
    <a
      href="https://wa.me/573102201272"
      target="_blank"
      rel="noopener noreferrer"
      className="button-whatsapp"
    >
      <button
        style={{
          backgroundColor: buttonColor,
          color: iconColor,
          border: `1px solid ${borderColor}`, // Usa 'border' en lugar de 'borderColor'
        }}
      >
        <FaWhatsapp />
      </button>
    </a>
  );
};

export default ButtonWhatsApp;
