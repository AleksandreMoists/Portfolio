import React, { useRef, useMemo } from "react";
import Header from "./components/Header";
import { useScrollSpy } from "./components/ScrollSpy";
import { sectionData } from "./utils/sectionData";
import './styles/fonts.css';
import { motion } from "framer-motion";


function App() {
  // Use useMemo to create refs array once
  const sectionRefs = useMemo(
    () => sectionData.map(() => React.createRef()),
    []
  );

  const activeSection = useScrollSpy(sectionRefs);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Header activeSection={activeSection} sectionRefs={sectionRefs} />
      {sectionData.map((section, index) => (
        <motion.div
          key={section.id}
          ref={sectionRefs[index]}
          id={section.id}
          className={`section ${section.className}`}
          initial={{ opacity: 0, y: 50}}
          animate={{ opacity: 1, y: 0}}
          transition={{ duration: 1 }}
        >
          {section.component}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default App;
