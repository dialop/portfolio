import React from 'react';
import ProjectBox from './ProjectBox'; 

const BoxGrid = () => {
  
  const projectData = [
    {
      title: 'InstaStaff',
      content: 'Dashboard Design',
      src: '/images/photolabs_image.jpeg',
      alt: 'Instastaff Dashboard'
    },
    {
      title: 'Photolabs',
      content: 'Dashboard Design',
      src: '/images/instastaff_homepage.jpeg',
      alt: 'Photolabs Dashboard'
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
         
          {projectData.map((project, index) => (
            <ProjectBox 
              key={index} 
              title={project.title} 
              content={project.content}
              src={project.src}
              alt={project.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoxGrid;
