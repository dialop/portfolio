import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = [
  { text: "About", id: "about" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

const ChipTabs = () => {
  const [selected, setSelected] = useState('');
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      
      if (!initialLoad) {
        setSelected(window.location.hash);
      }
      setInitialLoad(false); 
    };

    window.addEventListener("hashchange", handleHashChange);
   
    setInitialLoad(false);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="px-4 py-14 transparent flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab.text}
          selected={selected === `#${tab.id}`}
          setSelected={() => setSelected(`#${tab.id}`)}
          key={tab.text}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected }) => {
  // Check if dark mode is active by examining the document body's class list
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <a
      href={`#${text.toLowerCase()}`}
      onClick={() => setSelected()}
      className={`relative flex items-center justify-center px-2.5 py-0.5 text-sm transition-colors ${
        selected ? "border-b-2 border-indigo-600" : "hover:border-b-2 hover:border-indigo-600"
      } ${
        // Always apply text-black when not in dark mode, else apply text-white
        isDarkMode ? "text-white" : "text-black"
      }`}
      style={{ paddingBottom: '8px' }} // Keep the underline a bit lower
    >
      {text}
    </a>
  );
};
export default ChipTabs;
