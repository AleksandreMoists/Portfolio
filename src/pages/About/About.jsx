import React from "react";
import styles from './About.module.css';
import { OvalShapeSvg } from "../../assets/svgs/AboutPageSvgs/OvalShapeSvg";
import Typography from "../../components/Typography/Typography";
import CircleShapeSvg from "../../assets/svgs/AboutPageSvgs/CircleShapeSvg";
import CurlyShapeSvg from "../../assets/svgs/AboutPageSvgs/CurlyShapeSvg";
import Reviews from "../../components/Pages/Review";
import ArrowSvg from "../../assets/svgs/AboutPageSvgs/ArrowSvg";
import BrainSvg from "../../assets/svgs/AboutPageSvgs/BrainSvg";
import Photo from "../../assets/images/Photo.png"
import Technologies from "../../components/Pages/Technologies";
import ScrollIndicator from "../../components/Scrolls/ScrollIndecator";
import { scrollToProjects } from "../../utils/scrollToSection";

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

      <div className={styles.scrollIndicator}>
        <ScrollIndicator onClick={scrollToProjects}/>
      </div>  

      <div className={styles.assetsContent}>
        <div className={styles.container}>
          <span className={styles.circleSvg}>
            <CircleShapeSvg />
          </span>
          <div className={styles.firstShape}>
            <span className={styles.laptopSvg}>
            </span>
          </div>
          <span className={styles.curlySvg}>
            <CurlyShapeSvg />
          </span>
          <span className={styles.reviewContent}>
            <Reviews />
          </span>
          <span className={styles.arrowSvg}>
            <ArrowSvg />
          </span>
          <div className={styles.photoContainer}>
            <span className={styles.photoShape}>
              <OvalShapeSvg fill="#FFD700" />
            </span>
            <span className={styles.photo}>
              <img src={Photo} alt="photo" />
            </span>
          </div>
          <span className={styles.brainSvg}>
              <BrainSvg />
          </span>

        </div>
      </div>

      
      <div className={styles.technologiesContent}>
          <Technologies />
      </div>
    </div>
  );
};

export default About;
