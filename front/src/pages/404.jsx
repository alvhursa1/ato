import '../styles/pages/404.css';
import { Link } from 'react-router-dom';
import Logo from '../../public/static/svg/Logo.svg?react';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <Link
        to={'/'}
        style={{
          position: 'absolute',
          top: '3%',
          left: '2%',
          color: '#0c0c0c',
          textDecoration: 'none',
        }}
      >
        <Logo className="logo-home" />
      </Link>
      <h1>404</h1>
      <div>
        <img src="/images/404.webp" alt="404" />
        <h2>Looks like we’re lost.</h2>
        <p>The page is missing, or the link’s wrong.</p>
        <Link to={'/'} style={{ color: '#0c0c0c', fontFamily: 'Aeonik' }}>
          Go back home.
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
