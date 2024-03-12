import React from 'react';

const ProjectBox = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-6">
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default ProjectBox;