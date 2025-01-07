import React from "react";
import Typewriter from "../animations/introAnimation";
import styles from './About.module.css';
import PassionateDeveloper from "../animations/infoAnimation";
import LaptopModel from "../animations/LaptopModel";


const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.selfIntro}>
      <Typewriter />
      </div>
      <div>
        <PassionateDeveloper />
      </div>
      <div className={styles.laptopModel}>
      <LaptopModel />
      </div>
    </div>
  );
};

export default About;
