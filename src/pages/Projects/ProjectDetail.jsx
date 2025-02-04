// ProjectDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../utils/data";
import styles from "./ProjectDetail.module.css";
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackSvg from "../../assets/svgs/ProjectPageSvgs/ArrowBackSvg";
import BackSvg from "../../assets/svgs/ProjectPageSvgs/BackSvg";
import NextSvg from "../../assets/svgs/ProjectPageSvgs/NextSvg";

const ProjectDetail = () => {
  const { id } = useParams();      // get the :id from the URL
  const navigate = useNavigate();  // so we can navigate back

  // Convert id to a number if necessary, depending on how your data is shaped
  const projectId = parseInt(id, 10);  // Ensure id is a number
  const maxProjectId = projectsData.length; // Get last project id
  const project = projectsData.find((p) => p.id === projectId);


  if (!project) {
    return (
      <div className={styles.detailContainer}>
        <h2>Project not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <React.Fragment className={styles.projectDetail}>
    <div className={styles.detailContainer}>
      <div className={styles.backIcon}>
        <IconButton   
          sx={{backgroundColor: 'blue', '&:hover': { backgroundColor: '#007bff' } }} 
          onClick={() => navigate("/home")}>
            <ArrowBackSvg  /> 
        </IconButton>
      </div>
      <h2>{project.title}</h2>
      <div className={styles.content}>
        <img
          src={project.image}
          alt={project.title}
          className={styles.detailImage}
        />
        <Typography variant="p" className={styles.contentTypography}>{project.content}</Typography>
      </div>
      <div className={styles.buttonsContainer}>
      {projectId > 1 && (
        <Button 
          startIcon={<BackSvg />} 
          onClick={() => navigate(`/projects/${projectId - 1}`)}
          className={styles.buttonStyle}
        >
          Previous Project
        </Button>
      )}

      {/* Next Project Button (Only if ID < maxProjectId) */}
      {projectId < maxProjectId && (
        <Button 
          endIcon={<NextSvg />}
          onClick={() => navigate(`/projects/${projectId + 1}`)}
          className={styles.buttonStyle}
        >
          Next Project
        </Button>
      )}
      </div>
    </div>
    </React.Fragment>
  );
};

export default ProjectDetail;
