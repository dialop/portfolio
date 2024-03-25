import React from 'react';
import { motion } from 'framer-motion';

import reactLogo from '../assets/images/logos/react.png';
import tailwindLogo from '../assets/images/logos/tailwind-css.png';
import materialUILogo from '../assets/images/logos/material-ui.png';
import nodejsLogo from '../assets/images/logos/node-js.png';
import postgresLogo from '../assets/images/logos/postgresql.png';
import gitLogo from '../assets/images/logos/git.png';

const Skills = () => {

  // animation for container of logos
  const containerAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  // individual image logo animatiion 
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <div className="flex justify-center items-center space-x-4 py-3" style={{ paddingTop: '3rem', paddingBottom: '24rem'}} >
      <motion.img 
        src={reactLogo} 
        alt="React" 
        className="h-16-3"
        variants={itemAnimation && containerAnimation} 
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
      />
      <motion.img 
        src={tailwindLogo} 
        alt="Tailwind CSS" 
        className="h-16-3"
        variants={itemAnimation && containerAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <motion.img 
        src={materialUILogo} 
        alt="React" 
        className="h-16-3"
        variants={itemAnimation && containerAnimation} 
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
      />  
      <motion.img 
        src={nodejsLogo} 
        alt="Node.js" 
        className="h-16-3"
        variants={itemAnimation && containerAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
  
      <motion.img 
        src={postgresLogo} 
        alt="PostgreSQL" 
        className="h-16-3"
        variants={itemAnimation && containerAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <motion.img 
        src={gitLogo} 
        alt="Git" 
        className="h-16-3"
        variants={itemAnimation && containerAnimation}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
};

export default Skills;
