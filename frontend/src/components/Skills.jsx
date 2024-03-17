import React from 'react';

import reactLogo from '../assets/images/logos/react.png';
import tailwindLogo from '../assets/images/logos/tailwind-css.png';
import nodejsLogo from '../assets/images/logos/node-js.png';
import expressLogo from '../assets/images/logos/express-js.png';
import postgresLogo from '../assets/images/logos/postgresql.png';
import gitLogo from '../assets/images/logos/git.png';

const Skills = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <img src={reactLogo} alt="React" className="h-16" />
      <img src={tailwindLogo} alt="Tailwind CSS" className="h-16" />
      <img src={nodejsLogo} alt="Node-JS" className="h-16" />
      <img src={expressLogo} alt="Express.js" className="h-16" />
      <img src={postgresLogo} alt="PostgreSQL" className="h-16" />
      <img src={gitLogo} alt="Git" className="h-16" />
      
     
    </div>
  );
};

export default Skills;
