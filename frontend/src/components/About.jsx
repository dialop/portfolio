import React from 'react';
import { motion } from 'framer-motion';

const fadeDownVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <motion.div 
      className="container mx-auto items-center px-4 sm:px-6 lg:px-8 mt-40 py-20"
      initial="hidden"
      animate="visible"
      variants={fadeDownVariants} 
      transition={{ duration: 0.8 }}
    >     
    <div className="container mx-auto items-center px-4 sm:px-6 lg:px-8 mt-19 py-15">     
      <h1 className="text-8xl font-bold leading-tight text-center text-text-#CBD5E0 pb-16">Hi, I'm Diana</h1>
      <p className="text-4xl text-text-#CBD5E0 mt-4 text-center">Junior Full Stack Developer with a healthcare background</p>
      <p className="text-4xl text-text-#CBD5E0 text-center">dedicated to creating impactful and user-friendly tech solutions.</p>
    </div>
    </motion.div>

  );
};

export default About;