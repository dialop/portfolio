import React from 'react';
import ProjectBox from './ProjectBox';

const BoxGrid = () => {
  const projectData = [
    {
      title: 'InstaStaff',
      content: 'Dashboard Design',
      imageURL: '/images/photolabs_image.jpeg',
      alt: 'Instastaff Dashboard'

    },
    {
      title: 'Photolabs',
      content: 'Dashboard Design',
      imageURL: '/images/instastaff_homepage.jpeg',
      alt: 'Photolabs Dashboard'

    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectData.map((project, index) => (
          <ProjectBox 
          key={index} 
          title={project.title} 
          content={project.content}
          imageURL={project.imageURL}
          alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxGrid;