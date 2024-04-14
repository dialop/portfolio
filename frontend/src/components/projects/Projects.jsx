import React from 'react';
import instastaffImage from '../../assets/images/instastaff.gif';
import photolabsImage from '../../assets/images/PhotoLabs.gif';

const Projects = ({ darkMode }) => {

  const projectData = [
    {
      title: "Instastaff",
      description: "An app that facilitates the efficient exchange of labor and work requests by providing the logistic and operational relief to workers and providers in the medical service field.",
      image: instastaffImage,
      tech: ["React", "Tailwind CSS", "Material UI", "Express.js", "Node.js", "Postgresql"],
      link: "https://github.com/dialop/instastaff.git",
    },

    {
      title: "Photolabs",
      description: "A client side single-page application that allows users to view photos in a react view-layer library.",
      image: photolabsImage,
      tech: ["React", "SCSS", "Express.js", "Postgresql"],
      link: "https://github.com/dialop/photolabs-starter.git",
    },


//   {
//       title: "Footwear Fusion",
//       description: "Footwear Fusion is a marketplace for shoe enthusiasts, operating as a simplified Kijiji clone where users can buy and sell various types of footwear.",
//       image: footwearFusionImage,
//       tech: ["EJS", "SCSS", "Express.js"],
//       link: "https://github.com/dialop/tweeter",
//     },

    // {
    //   title: "Tweeter",
    //   description: "Tweeter is a simple, single-page Twitter clone.",
    //   image: tweeterImage,
    //   tech: ["JavaScript","HTML", "SCSS", "Express.js"],
    //   link: "https://github.com/dialop/tweeter.git",
    // },

  ];

  
  return (
    <div className={`py-10 px-5 ${darkMode ? 'bg-transparent' : darkMode ? 'bg-black' : 'bg-rgb(243, 244, 246)'}`}>
      <div className="container mx-auto">
        <h2 className={`text-5xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-black'}`}>Projects</h2>

        
        {/* grid size */}
        <div className="grid grid-cols-1 gap-14">
          {projectData.map((project, index) => (
            <div key={index} className={`bg-transparent text-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 ${darkMode ? 'bg-gray-700 bg-opacity-80 text-white' : 'bg-transparent text-black'} animate__animated animate__fadeIn`}>
              <img src={project.image} alt={project.title} className="w-full h-70vh object-cover" />
              <div className="p-8">
                <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-black'} animate__animated animate__slideInUp`}>{project.title}</h3>
                <p className={`text-gray-700 mb-5 ${darkMode ? 'text-white' : 'text-black'} animate__animated animate__slideInUp`}>
                  {project.description}</p>
                <ul className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((tech, index) => (
                    <li key={index} className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-500'} px-4 py-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-200'} rounded transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
                      {tech}
                    </li>
                  ))}
                </ul>
                <a href={project.link} className={`inline-block px-2 py-2 ${darkMode ? 'bg-blue-500' : 'bg-blue-500'} text-white rounded hover:bg-blue-700 transition-colors`}>View Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
  
}


export default Projects;