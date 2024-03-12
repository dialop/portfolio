import React from 'react';

const ProjectBox = ({ title, content, src, altText }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full" src={src} alt={altText} />
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default ProjectBox;