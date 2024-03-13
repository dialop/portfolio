import React from "react";

const CentralMessage = () => {
  return (
    // Apply padding right on large screens
    <div className="text-center mt-20 lg:pr-32">
      <h1 className="text-6xl font-bold text-gray-800 leading-tight">Hi, I'm Diana</h1>
      <p className="text-3xl text-gray-500 mt-4">Full Stack Web Developer</p>
    </div>
  );
};

export default CentralMessage;