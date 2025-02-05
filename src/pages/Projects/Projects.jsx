// Projects.jsx (if used separately)
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Typewriter from '../../animations/introAnimation';
import styles from "./Projects.module.css";
import Typography from '../../components/Typography/Typography';
import { projectsData } from '../../utils/data';
import { Button } from '@mui/material';
import Aos from 'aos';
import NextSvg from '../../assets/svgs/ProjectPageSvgs/NextSvg';

const pageVariants = {
  initial: { x: 0, opacity: 1 },
  exit: { x: -100, opacity: 0 } // Adjust as needed
};

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSeeMore = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <motion.div 
      className={styles.projectsDiv}
      initial="initial"
      animate="initial"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.projectsIntro}>
        <Typewriter text={["Lets explore my Projects"]}/>
      </div>

      {projectsData.map((project) => (
        <React.Fragment key={project.id}>
          <hr />
          <div className={styles.projects} data-aos="fade-up">
            <div className={styles.projectTypography}>
              <span>
                <Typography variant='h3'>Software Development</Typography>
              </span>
              <span>
                <Typography 
                  variant='h3' 
                  className={styles.title} 
                  onClick={() => handleSeeMore(project.id)}
                >
                  {project.title}
                </Typography>
              </span>
            </div>

            <div 
              className={styles.projectsContent} 
              onClick={() => handleSeeMore(project.id)}
            >
              <div style={{ marginTop: '-0.5rem' }} className={styles.projectImageWrapper}>
                <div className={styles.projectImage}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.image} 
                  />
                  <div className={styles.content}>
                    <Typography variant='h2' className={styles.imageTitle}>
                      {project.title}
                    </Typography>
                    <Typography variant='p' className={styles.imageDescription}>
                      {project.description}
                    </Typography>
                  </div>
                </div>
              </div>
              <span>
                <Button
                  variant='contained'
                  startIcon={<NextSvg />}
                  classes={{
                    root: styles.root,
                    label: styles.label,
                    startIcon: styles.startIcon
                  }}
                  onClick={() => handleSeeMore(project.id)}
                >
                  See More
                </Button>
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </motion.div>
  );
};

export default Projects;
