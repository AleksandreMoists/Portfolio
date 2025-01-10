import React from "react";
import {ReactTyped as Typed} from "react-typed";

const Typewriter = () => {
  return (
    <div style={{ fontSize: "1.5rem", textAlign: "center", marginTop: "20px" }}>
      <Typed
        strings={[
          "Full-Stack Developer",
          "React Developer",
          "Node.js Developer",
          "Let's build something amazing together!",
        ]}
        typeSpeed={50} // Typing speed
      />
    </div>

    
  );
};

export default Typewriter;
