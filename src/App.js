import React, { useRef } from "react";
import Header from "./components/Header";
import { useScrollSpy } from "./components/ScrollSpy";
import { sectionData } from "./sectionData";
import Section from "./components/Section";
import "./styles/App.css";

function App() {
  const sectionRefs = sectionData.map(() => useRef(null));

  const activeSection = useScrollSpy(sectionRefs);

  return (
    <div>
      <Header activeSection={activeSection} />
      {sectionData.map((section, index) => (
        <Section
          key={section.id}
          ref={sectionRefs[index]}
          id={section.id}
          className={section.className}
          Component={section.Component}
        />
      ))}
    </div>
  );
}

export default App;
