import React from 'react';
import { motion } from 'framer-motion';

const fadeDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const About = ({ darkMode }) => {
  return (
    <motion.div
      className="container mx-auto items-center px-4 sm:px-6 lg:px-8 mt-80 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeDownVariants}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto items-center px-4 sm:px-6 lg:px-8 mt-19 py-15">
        <h1 className="text-8xl font-bold leading-tight text-center text-text-#CBD5E0 pb-16">Hi, I'm Diana</h1>
        <p className="text-4xl text-text-#CBD5E0 mt-4 text-center"> A junior full stack developer with a healthcare background</p>
        <p className="text-4xl text-text-#CBD5E0 text-center">dedicated to creating impactful and user-friendly tech solutions.</p>
      </div>
      <div style={{ height: '300px' }}></div>

      <div className={`px-10 py-20 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
        <h2 className="text-6xl font-bold text-center mt-60 py-20">About Me</h2>
        <div className="max-w-4xl mx-auto space-y-6 mb-10">
          <p className="text-xl">
            Junior Full Stack Developer recent graduate from LHL
          </p>
          <p className="text-xl">

          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
