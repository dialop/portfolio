import { useEffect, useState } from "react";

// Tabs with text id 
const tabs = [
  { text: "About", id: "about" },
  { text: "Projects", id: "projects" },
  { text: "Contact", id: "contact" },
];

const NavTabs = ({ darkMode }) => {
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

    if (initialLoad) {
      setSelected(window.location.hash);
      setInitialLoad(false);
    }

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [initialLoad]);

  return (
    <div className="px-4 py-14 transparent flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab.text}
          selected={selected === `#${tab.id}`}
          setSelected={() => setSelected(`#${tab.id}`)}
          darkMode={darkMode}
          key={tab.text}
        />
      ))}
    </div>
  );
};

const Chip = ({ text, selected, setSelected, darkMode }) => {
  return (
    <a
      href={`#${text.toLowerCase()}`}
      onClick={() => setSelected()}
      className={`relative flex items-center justify-center px-2.5 py-0.5 text-sm transition-colors ${
        selected ? "border-b-2 border-indigo-600" : "hover:border-b-2 hover:border-indigo-600"
      } ${darkMode ? "text-white" : "text-black"}`}
      style={{ paddingBottom: '8px' }}
    >
      {text}
    </a>
  );
};

export default NavTabs;
