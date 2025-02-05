import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- Add this
import Typewriter from '../../animations/introAnimation';
import styles from "./Projects.module.css";
import Typography from '../../components/Typography/Typography';
import { projectsData } from '../../utils/data';
import { Button } from '@mui/material';
import Aos from 'aos';
import NextSvg from '../../assets/svgs/ProjectPageSvgs/NextSvg';

const Projects = () => {
  const navigate = useNavigate(); // <-- For navigating to detail page

  useEffect(() => {
    Aos.init();
  }, []);

  const handleSeeMore = (projectId) => {
    // Navigate to /projects/:id
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className={styles.projectsDiv}>
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
                <Typography variant='h3' className={styles.title} onClick={() => handleSeeMore(project.id)}>
                  {project.title}
                </Typography>
              </span>
            </div>

            <div className={styles.projectsContent} onClick={() => handleSeeMore(project.id)}>
              <div style={{ marginTop: '-0.5rem' }} className={styles.projectImageWrapper}>
                <div className={styles.projectImage}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className={styles.image} 
                  />
                  <div className={styles.content}>
                    <Typography variant='h2' className={styles.imageTitle}>{project.title}</Typography>
                    <Typography variant='p' className={styles.imageDescription}>{project.description}</Typography>
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
                  onClick={() => handleSeeMore(project.id)} // <-- pass project.id to navigate
                >
                  See More
                </Button>
              </span>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Projects;
