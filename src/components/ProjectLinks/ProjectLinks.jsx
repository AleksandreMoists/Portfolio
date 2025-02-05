// ProjectLinks.jsx
import React from "react";
import { IconButton } from "@mui/material";
import styles from "./ProjectLinks.module.css";

const ProjectLinks = ({ links }) => {
  return (
    <div className={styles.projectLinks}>
      <ul className={styles.linkUl}>
        {links.filter((link) => !link.disabled)
            .map((link, index) => (
              <li key={index} className={styles.linkLi}>
              <div className={styles.linkIconDiv} 
                  style={{borderColor: link.disabled && "grey"}}>
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
  );
};

export default ProjectLinks;
