import React from 'react';

function Projects() {

  const projectItems = [
    {
      title: "Instastaff",
      description: "Description for project one...",
      image: '/images/instastaff_homepage.jpeg',
      tech: ["React", "Tailwind CSS", "Express.js"],
      link: "#",
    },

    {
      title: "Photolabs",
      description: "PhotoLabs is a client side React-based single-page (SPA) application that allows users to view photos in a react view-layer library.",
      image: '/images/photolabs_image.jpeg',
      tech: ["React", "SCSS", "Express.js", "Postgresql"],
      link: "#",
    },


  {
      title: "Footwear Fusion",
      description: "Description for project one...",
      image: '/images/photolabs_image.jpeg',
      tech: ["EJS", "SCSS", "Express.js"],
      link: "#",
    },

    {
      title: "Tweeter",
      description: "Description for project one...",
      image: '/images/photolabs_image.jpeg',
      tech: ["JavaScript","HTML", "SCSS", "Express.js"],
      link: "#",
    },



  ];

  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-5 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectItems.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-32 sm:h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <ul className="flex space-x-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <li key={index} className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-200 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a href={project.link} className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">Visit Site</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

// const projectData = [
//   {
//     title: 'InstaStaff',
//     content: 'Dashboard Design',
//     src: '/images/photolabs_image.jpeg',
//     alt: 'Instastaff Dashboard'
//   },
//   {
//     title: 'Photolabs',
//     content: 'Dashboard Design',
//     src: '/images/instastaff_homepage.jpeg',
//     alt: 'Photolabs Dashboard'
//   },
