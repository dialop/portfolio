import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = [
  { text: "About", id: "about" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

const ChipTabs = () => {
  const [selected, setSelected] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setSelected(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

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
  // if dark mode is active by checking the document body's class list
  const isDarkMode = document.body.classList.contains("dark");

  return (
    <a
      href={`#${text.toLowerCase()}`}
      onClick={() => setSelected()}
      className={`${
        selected ? "border-b-2 border-indigo-600" : "hover:border-b-2 hover:border-indigo-600"
      } ${
        // apply text color based on dark mode state
        isDarkMode ? "text-white" : "text-black"
      } text-sm transition-colors px-2.5 py-0.5 relative flex items-center justify-center`}
      style={{ paddingBottom: '8px' }} >
      {text}
      {selected && (
        <motion.span
          layoutId="underline"
          transition={{ type: "spring", duration: 0.5 }}
        ></motion.span>
      )}
    </a>
  );
};

export default ChipTabs;
