import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const Parallax = () => {
  const containerRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + containerRef.current.offsetWidth,
      },
    });
  }, []);

  return (
    <>
      <section className="text-white bg-blue-500 h-screen flex items-center justify-center flex-col">
        <h2 className="text-4xl font-bold">Hi, I'm Diana</h2>
        <h3 className="text-2xl mt-4">Full Stack Web Developer</h3>
      </section>
      <div ref={containerRef} className="flex overflow-hidden">
        {["HTML", "CSS", "ES6", "React JS"].map((tech, index) => (
          <section
            key={index}
            className={`flex-1 min-w-full flex items-center justify-center ${index % 2 === 0 ? "bg-blue-400" : "bg-red-400"} p-10 text-white`}
          >
            {/* <div>
              <h2 className="text-3xl font-bold">{tech}</h2>
              <p className="mt-4">
              </p>
            </div> */}
          </section>
        ))}
      </div>
      {/* <section className="bg-gray-900 text-white p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your email"
            className="w-full p-2 rounded-md"
          />
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full p-2 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            SUBMIT
          </button>
        </form>
      </section> */}
    </>
  );
};
