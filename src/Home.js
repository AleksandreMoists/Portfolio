// Home.jsx
import React, { useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./components/Pages/Header";
import { useScrollSpy } from "./components/Scrolls/ScrollSpy";
import { sectionData } from "./utils/sectionData";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const sectionRefs = useMemo(
    () => sectionData.map(() => React.createRef()),
    []
  );
  
  const activeSection = useScrollSpy(sectionRefs);

  useEffect(() => {
    // If there is a scrollPos passed from ProjectDetail, scroll to that position.
    if (location.state && location.state.scrollPos) {
      window.scrollTo({ top: location.state.scrollPos, behavior: "smooth" });
    }
  }, [location.state]);

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

export default Home;
