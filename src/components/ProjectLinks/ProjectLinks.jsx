import React from "react";
import { projectLinks } from "../../utils/data";
import { link } from "framer-motion/client";
import { IconButton } from "@mui/material";
import styles from './ProjectLinks.module.css'

const ProjectLinks = () => {
    return (
        <div className={styles.projectLinks}>
            <ul className={styles.linkUl}>
                {projectLinks.map((link, index) => (
                    <li key={index} className={styles.linkLi}>
                    <div className={styles.linkIconDiv}>
                        <IconButton
                        className={styles.linkIcon}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        {link.icon}
                        </IconButton>
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProjectLinks;

