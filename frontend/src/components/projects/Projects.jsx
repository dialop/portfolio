import React from 'react';
import instastaffImage from '../../assets/images/instastaff.gif';
import photolabsImage from '../../assets/images/PhotoLabs.gif';

function Projects() {

  const projectData = [
    {
      title: "Instastaff",
      description: "InstaStaff is an app that facilitates the efficient exchange of labor and work requests by providing the logistic and operational relief to workers and providers in the medical service field.",
      image: instastaffImage,
      tech: ["React", "Tailwind CSS", "Material UI", "Express.js", "Node.js", "Postgresql"],
      link: "https://github.com/dialop/instastaff.git",
    },

    {
      title: "Photolabs",
      description: "PhotoLabs is a client side React-based single-page (SPA) application that allows users to view photos in a react view-layer library.",
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
    <div className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-14">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-[70vh] object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-5">{project.description}</p>
                <ul className="flex flex-wrap gap-3 mb-5">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="text-sm font-medium text-gray-500 px-4 py-2 bg-gray-200 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="inline-block px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">View Source Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



export default Projects;

