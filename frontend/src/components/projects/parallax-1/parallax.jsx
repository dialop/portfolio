import { useState, useEffect } from "react";


export const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <section
      style={{
        backgroundImage: "url('./bg.png')",
        backgroundSize: `${100 + scrollPosition / 5}% ${100 + scrollPosition / 5}%`,
      }}
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-no-repeat bg-center transition-all duration-100"
    >
      <h2 className="text-4xl text-white pt-0 mt-0 mb-2.5"></h2>
      <button className="bg-white text-gray-900 px-6 py-2.5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">Get Started</button>
    </section>
    <section className="py-14 px-10 bg-white">
      <h2 className="text-3xl font-bold mb-5"></h2>
      {/* Repeat your content paragraphs here, applying Tailwind classes as needed */}
    </section>
  </>
);
};