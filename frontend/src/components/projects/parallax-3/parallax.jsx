import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import instastaffImage from '../../assets/images/instastaff_homepage.jpeg';


export const Parallax = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".parallax-section").forEach((section) => {
      const bg = section.querySelector(".bg");

      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () => gsap.to(bg, { backgroundPosition: "50% 0%", ease: "none" }),
        onLeaveBack: () => gsap.to(bg, { backgroundPosition: `50% 100%`, ease: "none" }),
        onUpdate: (self) => {
          const progress = self.progress.toFixed(3); // 3 decimal places
          const yPos = 100 * progress;
          gsap.set(bg, { backgroundPosition: `50% ${yPos}%` });
        }
      });
    });
  }, []);

  return (
    <>
      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover filter brightness-75" style={{ backgroundImage: `url(${instastaffImage})`, backgroundPosition: 'center' }}></div>
        <h1 className="z-10 text-white text-4xl font-bold shadow-md">Parallax</h1>
      </section>
      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover filter brightness-75" style={{ backgroundImage: `url(${instastaffImage})`, backgroundPosition: 'center' }}></div>
        <h1 className="z-10 text-white text-4xl font-bold shadow-md">So smooth</h1>
      </section>
      <section className="relative h-screen flex justify-center items-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover filter brightness-75" style={{ backgroundImage: `url(${instastaffImage})`, backgroundPosition: 'center' }}></div>
        <h1 className="z-10 text-white text-4xl font-bold shadow-md">Nice, right?</h1>
      </section>
    </>
  );
};