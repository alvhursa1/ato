import { useState } from 'react';
import '../styles/components/closeWorks.css';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '../../public/static/svg/closeIcon.svg?react';

const CloseWorks = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="closeWorksContainer">
      <p className={`closeWorksText ${isHovered ? 'hovered' : ''}`}>Close</p>
      <button
        onClick={() => navigate('/work')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`closeWorksButton ${isHovered ? 'hovered' : ''}`}
      >
        <CloseIcon className={`closeIcon ${isHovered ? 'hovered' : ''}`} />
      </button>
    </div>
  );
};

export default CloseWorks;
