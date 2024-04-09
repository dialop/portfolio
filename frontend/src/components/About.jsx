import React from 'react';
import { motion } from 'framer-motion';

import reactLogo from '../assets/images/logos/react.png';
import tailwindLogo from '../assets/images/logos/tailwind-css.png';
import materialUILogo from '../assets/images/logos/material-ui.png';
import nodejsLogo from '../assets/images/logos/node-js.png';
import postgresLogo from '../assets/images/logos/postgresql.png';
import gitLogo from '../assets/images/logos/git.png';

const About = ({ darkMode }) => {
  const fadeDownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container mx-auto items-center px-4 sm:px-6 lg:px-8 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeDownVariants}
      transition={{ duration: 0.8 }}
    >
      {/* About Me Section */}
      <div className="text-center mb-16">
        <h1 className="text-8xl font-bold leading-tight text-text-#CBD5E0 pb-16">Hi, I'm Diana</h1>
        <p className="text-4xl text-text-#CBD5E0">A junior full stack developer with a healthcare background</p>
        <p className="text-4xl text-text-#CBD5E0">dedicated to creating impactful and user-friendly tech solutions.</p>
      </div>

         {/* Flex Container Side by Side  */}
      <div className="flex flex-wrap -mx-4">

      <div style={{ height: '300px' }}></div>

      <div className={`px-10 py-20 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
        <h2 className="text-6xl font-bold text-center py-20">About Me</h2>
        <p className="text-xl max-w-4xl mx-auto mb-10">
          Junior Full Stack Developer recent graduate from LHL
        </p>
      </div>

      {/* Skills Section */}
      <div className="py-3">
        <h3 className="text-6xl font-bold leading-tight text-center text-text-#CBD5E0 pb-16">Skills</h3>
        <div className="flex justify-center items-center space-x-4">

          
          {/* Skill Logos */}
          {[
            { src: reactLogo, alt: 'React' },
            { src: tailwindLogo, alt: 'Tailwind CSS' },
            { src: materialUILogo, alt: 'Material-UI' },
            { src: nodejsLogo, alt: 'Node.js' },
            { src: postgresLogo, alt: 'PostgreSQL' },
            { src: gitLogo, alt: 'Git' },
          ].map((logo, index) => (
            <motion.img 
              key={logo.alt}
              src={logo.src} 
              alt={logo.alt} 
              className="h-16-3"
              variants={itemAnimation && containerAnimation} 
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default About;
