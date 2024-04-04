import React from 'react';
import cn from '../utils/cn';

export const AuroraBackground = ({ children, showRadialGradient = true }) => {
  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className={cn(
          "absolute inset-0 blur-[10px] opacity-50 will-change-transform animate-aurora",
          "bg-[length:200%_100%] bg-[position:50%_50%] bg-[image:var(--dark-gradient),var(--aurora)]",
          showRadialGradient && "mask-image:[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
          )}></div>
      </div>
      {children}
    </div>
  );
};

export default AuroraBackground;