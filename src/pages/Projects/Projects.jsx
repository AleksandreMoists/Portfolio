import React, { useEffect } from 'react';
import Typewriter from '../../animations/introAnimation';
import styles from "./Projects.module.css";
import Typography from '../../components/Typography/Typography';
import { projectsData } from '../../utils/data';
import { Button } from '@mui/material';
import Aos from 'aos';
import RightUpSvg from '../../assets/svgs/ProjectPageSvgs/RightUpSvg';
import NextSvg from '../../assets/svgs/ProjectPageSvgs/NextSvg';


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
                <React.Fragment key={project.id}>
                <hr />
                <div className={styles.projects} key={project.id} data-aos="fade-up">
                    <div className={styles.projectTypography}>
                        <span>
                            <Typography variant='h3'>Software Development</Typography>
                        </span>
                        <span>
                            <Typography variant='h3' className={styles.title}>{project.title}</Typography>
                        </span>
                    </div>

                    <div className={styles.projectsContent}> 
                        <div style={{ marginTop: '-0.5rem' }} className={styles.projectImageWrapper}>
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} className={styles.image} />
                                <div className={styles.content}>
                                    <h1>Image hover effect</h1>
                                    <p>Lorem Ipsum dolor sit amet</p>
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