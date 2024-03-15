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
    <div className="bg-gray-100" style={{ paddingTop: '30rem', paddingBottom: '6rem' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
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
