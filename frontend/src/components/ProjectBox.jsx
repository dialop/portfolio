import React from 'react';

const ProjectBox = ({ title, content, src, altText }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-10 mt-16"> 
      <img className="w-full h-48 object-cover" src={src} alt={altText} style={{ paddingTop: '15rem', paddingBottom: '1rem'}}/>
      <div className="p-6 bg-gray-200">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ProjectBox;