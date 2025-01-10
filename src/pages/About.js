import React from "react";
import Typewriter from "../animations/introAnimation";
import styles from './About.module.css';
import LaptopModel from "../animations/LaptopModel";
import { OvalShapeSvg } from "../assets/svgs/OvalShapeSvg";
import Typography from "../components/Typography";
import { LaptopSvg } from "../assets/svgs/LaptopSvg";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.aboutContent}>
        <Typography variant="h3" className={styles.typewriter}>
          Full-Stack Developer
        </Typography>
        <Typography variant="h1" className={styles.heading}>
          Crafting Digital
          <br />
          Experiences
        </Typography>
        <Typography variant="p" className={styles.paragraph}>
        I'm a Full-Stack Developer based in Lagos, Nigeria. <br />
        I specialize in building high-quality websites and applications <br />
        that are both performant and accessible.
      </Typography>
      </div>
        
      <div className={styles.assetsContent}>
        <div className={styles.container}>
          <OvalShapeSvg />
          <span className={styles.laptopSvg}>
            <LaptopSvg width={500} />
          </span>
        </div>

      </div>
    </div>
  );
};

export default About;
