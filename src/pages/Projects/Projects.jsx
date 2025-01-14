import React from 'react';
import Typography from '../../components/Typography';
import Typewriter from '../../animations/introAnimation';
import styles from './Projects.module.css'

const Projects = () => {
    return (
        <div className={styles.projects}>
            <div className={styles.projectsIntro}>
            <Typewriter text={["Lets explore my Projects", ]}/>
            </div>
            <div className={styles.projectsContainer}>
                
            </div>

        </div>
    );
};

export default Projects;