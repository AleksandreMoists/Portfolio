// ProjectDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../utils/data";
import styles from "./ProjectDetail.module.css";
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackSvg from "../../assets/svgs/ProjectPageSvgs/ArrowBackSvg";
import BackSvg from "../../assets/svgs/ProjectPageSvgs/BackSvg";
import NextSvg from "../../assets/svgs/ProjectPageSvgs/NextSvg";
import ProjectLinks from "../../components/ProjectLinks/ProjectLinks";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectId = parseInt(id, 10);
  const maxProjectId = projectsData.length;
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
    <div className={styles.projectDetail}>
      <div className={styles.detailContainer}>
        {/* Go back to home button */}
        <div className={styles.backIcon}>
          <IconButton
            sx={{
              backgroundColor: "blue",
              "&:hover": { backgroundColor: "#007bff" },
            }}
            onClick={() => navigate("/home")}
          >
            <ArrowBackSvg />
          </IconButton>
        </div>

        {/* Title */}
        <div className={styles.projectTitle}>
          <h2>{project.title}</h2>
        </div>

        {/* Pass the project's specific links to ProjectLinks */}
        <div className={styles.projectLinks}>
          <ProjectLinks links={project.links} />
        </div>

        {/* Content */}
        <div className={styles.content}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.detailImage}
          />
          <Typography variant="p" className={styles.contentTypography}>
            {project.content}
          </Typography>
        </div>

        {/* Next / Previous Buttons */}
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
    </div>
  );
};

export default ProjectDetail;
