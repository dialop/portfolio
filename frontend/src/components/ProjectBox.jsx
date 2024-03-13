import React from 'react';

const ProjectBox = ({ title, content, src, altText }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-10"> 
      {/* Adjusted max-w-sm for a smaller width */}
      <img className="w-full h-48 object-cover" src={src} alt={altText} />
      {/* w-full will ensure the image takes the full width of the container */}
      <div className="p-6 bg-gray-200">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ProjectBox;