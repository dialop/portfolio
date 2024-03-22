import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import instastaffImage from '../../../assets/images/instastaff.png';
import footwearFusionImage from '../../../assets/images/footwear_fusion.jpeg';
import photolabsImage from '../../../assets/images/photolabs_image.jpeg';



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
      <div className="parallax-section h-screen flex justify-center items-center relative" style={{ backgroundImage: `url(${instastaffImage})` }}>
        <h2 className="z-10 text-white text-4xl font-bold">Infinite</h2>
        <div className="bg absolute inset-0" style={{ backgroundImage: `url(${instastaffImage})` }}></div>
      </div>
      <div className="parallax-section h-screen flex justify-center items-center relative" style={{ backgroundImage: `url(${footwearFusionImage})` }}>
        <h2 className="z-10 text-white text-4xl font-bold">Scrolling</h2>
        <div className="bg absolute inset-0" style={{ backgroundImage: `url(${footwearFusionImage})` }}></div>
      </div>
      <div className="parallax-section h-screen flex justify-center items-center relative" style={{ backgroundImage: `url(${photolabsImage})` }}>
        <h2 className="z-10 text-white text-4xl font-bold">Website</h2>
        <div className="bg absolute inset-0" style={{ backgroundImage: `url(${photolabsImage})` }}></div>
      </div>
    </>
  );
};
