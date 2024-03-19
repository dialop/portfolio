
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const tabs = [

    {text: "About", id: "about"},
    {text: "Projects", id: "projects"},
    {text: "Contact", id: "contact"},

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
      <div className="px-4 py-14 bg-gray-100 flex items-center flex-wrap gap-2">
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
    return (
      <a
        href={`#${text.toLowerCase()}`}
        onClick={() => setSelected()}
        className={`${
          selected ? "text-white" : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
        } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
      >
        <span className="relative z-10">{text}</span>
        {selected && (
          <motion.span
            layoutId="pill-tab"
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
          ></motion.span>
        )}
      </a>
    );
  };
  
  export default ChipTabs;