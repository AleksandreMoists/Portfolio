import React from "react";
import {ReactTyped as Typed} from "react-typed";

const Typewriter = ({text}) => {
  return (
    <div style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "20px" }}>
      <Typed
        strings={Array.isArray(text) ? text : [text]} // Ensure strings is an array
        typeSpeed={50} // Typing speed
      />
    </div>

    
  );
};

export default Typewriter;
