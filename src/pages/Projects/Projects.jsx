import React, { useEffect } from 'react';
import Typewriter from '../../animations/introAnimation';
import styles from "./Projects.module.css";
import Typography from '../../components/Typography/Typography';
import { projectsData } from '../../utils/data';
import { Button } from '@mui/material';
import Aos from 'aos';
import RightUpSvg from '../../assets/svgs/ProjectPageSvgs/RightUpSvg';


const Projects = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className={styles.projectsDiv}>
            <div className={styles.projectsIntro}>
            <Typewriter text={["Lets explore my Projects", ]}/>
            </div>

            {projectsData.map((project) => (
                <div className={styles.projects} key={project.id} data-aos="fade-up">
                    {/* <hr></hr> */}
                    <div className={styles.projectTypography}>
                        <span>
                            <Typography variant='h3'>Software Development</Typography>
                        </span>
                        <span>
                            <Typography variant='h3'>{project.title}</Typography>
                        </span>
                    </div>

                    <div className={styles.projectsContent}> 
                        <span>
                            <img src={project.image} alt={project.title} className={styles.projectsImage} />
                        </span>
                        <span className={styles.projectButoon}>
                            <Button variant='contained' startIcon={<RightUpSvg />} className={styles.primaryButton}> See More </Button>
                        </span>
                    </div>

                    <div> 
                        
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Projects;