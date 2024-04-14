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

  return (
    <motion.div
      className="container mx-auto items-center px-4 sm:px-6 lg:px-8 mt-80 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeDownVariants}
      transition={{ duration: 0.8 }}
    >
      {/* About Me Section */}
      <div className="container mx-auto items-center px-4 sm:px-6 lg:px-8 mt-20 py-15">
         <h1 className="text-8xl font-bold leading-tight text-center text-text-#CBD5E0 pb-16">Hi, I'm Diana</h1>
         <p className="text-3xl text-text-#CBD5E0 mt-4 text-center"> A junior full stack developer with a healthcare background</p>
         <p className="text-3xl text-text-#CBD5E0 text-center">dedicated to creating impactful and user-friendly tech solutions.</p>
         
       </div>
       <div style={{ height: '300px' }}></div>

        {/* Skills Section */}
        <div className="w-full px-4 py-20">
        <h3 className={`text-5xl font-bold leading-tight text-center py-10 ${darkMode ? 'text-CBD5E0' : 'text-black'}`}>SKILLS</h3>
        <div className="flex justify-center items-center flex-wrap">
          
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
                  className="h-19 w-21 mx-2 my-2" 
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
        </div>
    </div>
    </motion.div>
  );
};

export default About;

