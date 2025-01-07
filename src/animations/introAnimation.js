import React from "react";
import {ReactTyped as Typed} from "react-typed";

const Typewriter = () => {
  return (
    <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "20px" }}>
      <Typed
        strings={[
          "Welcome to My Portfolio",
          "I am a Web Developer",
          "I am a Designer",
          "Let's Create Something Awesome!",
        ]}
        typeSpeed={50} // Typing speed
        backSpeed={30} // Backspace speed
        loop // Makes it loop indefinitely
      />
    </div>

    
  );
};

export default Typewriter;
