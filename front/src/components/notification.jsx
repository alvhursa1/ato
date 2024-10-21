import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NOTIFICATION_TTL = 5000;

import PropTypes from 'prop-types';

const SlideInNotifications = ({ notifications, removeNotif }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '300px',
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '50',
        pointerEvents: 'none',
      }}
    >
      <AnimatePresence>
        {notifications.map((n) => (
          <Notification removeNotif={removeNotif} {...n} key={n.id} />
        ))}
      </AnimatePresence>
    </div>
  );
};

SlideInNotifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  removeNotif: PropTypes.func.isRequired,
};

const Notification = ({ text, id, removeNotif, type }) => {
  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      removeNotif(id);
    }, NOTIFICATION_TTL);

    return () => clearTimeout(timeoutRef);
  }, [id, removeNotif]);

  return (
    <motion.div
      layout
      initial={{ y: -15, scale: 0.95 }}
      animate={{ y: 0, scale: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      style={{
        padding: '10px',
        paddingLeft: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        fontSize: '14px',
        fontFamily: 'Aeonik',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)',
        color: type === 'success' ? '#0c0c0c' : '#fff',
        backgroundColor: type === 'success' ? '#fff' : '#0c0c0c',
        pointerEvents: 'auto',
        borderRadius: '40px',
      }}
    >
      <span>{text}</span>
      <button
        onClick={() => removeNotif(id)}
        style={{
          marginLeft: 'auto',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          backgroundColor: 'transparent',
          border: type === 'success' ? '1px solid #0c0c0c' : '1px solid #fff',
          color: type === 'success' ? '#0c0c0c' : '#fff',
          cursor: 'pointer',
        }}
      >
        X
      </button>
    </motion.div>
  );
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeNotif: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default SlideInNotifications;
