import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import instastaffImage from '../../../assets/images/instastaff.png';
import photolabsImage from '../../../assets/images/photolabs.png';
import portfolioImage from '../../../assets/images/portfolio.png';



gsap.registerPlugin(ScrollTrigger);

export const Parallax = () => {
  useEffect(() => {
    gsap.utils.toArray(".parallax-section").forEach((section, index) => {
      
      gsap.fromTo(
        section.querySelector(".bg"),
        {
          backgroundPosition: "50% 0%",
        },
        {
          backgroundPosition: `50% ${index % 2 === 0 ? "-" : ""}100%`, 
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <div className="container mx-auto">
         <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>    
      <div className="parallax-section h-screen flex justify-center items-center relative" style={{ backgroundImage: `url(${instastaffImage})` }}>
        <h2 className="z-10 text-white text-4xl font-bold"></h2>
        <div className="bg absolute inset-0" style={{ backgroundImage: `url(${instastaffImage})` }}></div>
      </div>
      <div className="parallax-section h-screen flex justify-center items-center relative" style={{ backgroundImage: `url(${photolabsImage})` }}>
        <h2 className="z-10 text-white text-4xl font-bold"></h2>
        <div className="bg absolute inset-0" style={{ backgroundImage: `url(${photolabsImage})` }}></div>
      </div>
      <div className="parallax-section h-screen flex justify-center items-center relative" style={{ backgroundImage: `url(${photolabsImage})` }}>
        <h2 className="z-10 text-white text-4xl font-bold"></h2>
        <div className="bg absolute inset-0" style={{ backgroundImage: `url(${portfolioImage})` }}></div>
      </div>
      </div>
    </>
  );
};
