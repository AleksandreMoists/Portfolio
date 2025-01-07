import React from "react";
import { ReactTyped as Typed } from "react-typed";
import styles from "../styles/Animations.module.css";

const PassionateDeveloper = () => {
  return (
    <div className={styles.blackBlanket}>
      <Typed
        strings={[
          "I am a passionate developer with a love for creating dynamic and responsive web applications. My journey in web development started a few years ago, and since then, I have been continuously learning and improving my skills. I specialize in front-end development, particularly with React, and I enjoy bringing designs to life with clean and efficient code.",
        ]}
        typeSpeed={50} // Typing speed in milliseconds
        showCursor={false} // Hide the blinking cursor
        startDelay={500} // Start after a short delay
      />
    </div>
  );
};

export default PassionateDeveloper;
