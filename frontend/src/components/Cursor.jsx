import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseHover);
      document.addEventListener('mouseleave', onMouseHoverOut);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseHover);
      document.removeEventListener('mouseleave', onMouseHoverOut);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseHover = () => setHoverState(true);
    const onMouseHoverOut = () => setHoverState(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)', 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      height: 80,
      width: 80,
      x: position.x - 40,
      y: position.y - 40,
      backgroundColor: '#FFF',
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };

  return (
    <motion.div
      className="cursor"
      variants={cursorVariants}
      animate={hoverState ? 'hover' : 'default'}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: '9999'
      }}
    />
  );
};

export default Cursor;
