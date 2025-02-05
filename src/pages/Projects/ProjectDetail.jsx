// ProjectDetail.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../utils/data";
import styles from "./ProjectDetail.module.css";
import { Button, IconButton, Typography } from "@mui/material";
import ArrowBackSvg from "../../assets/svgs/ProjectPageSvgs/ArrowBackSvg";
import BackSvg from "../../assets/svgs/ProjectPageSvgs/BackSvg";
import NextSvg from "../../assets/svgs/ProjectPageSvgs/NextSvg";
import ProjectLinks from "../../components/ProjectLinks/ProjectLinks";
import { motion, AnimatePresence } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectId = parseInt(id, 10);
  const maxProjectId = projectsData.length;
  const project = projectsData.find((p) => p.id === projectId);
  
  // direction: 1 for "next", -1 for "previous"
  const [direction, setDirection] = useState(0);

  if (!project) {
    return (
      <div className={styles.detailContainer}>
        <h2>Project not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  // Variants that slide the view based on the direction:
  const pageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const transition = { duration: 0.5 };

  const handlePrev = () => {
    setDirection(-1);
    navigate(`/projects/${projectId - 1}`);
  };

  const handleNext = () => {
    setDirection(1);
    navigate(`/projects/${projectId + 1}`);
  };

  return (
    // AnimatePresence is useful when the component is “replaced” (via key change)
    <AnimatePresence mode="wait">
      <motion.div
        key={projectId} // Remount the component when projectId changes
        custom={direction}
        variants={pageVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={transition}
        className={styles.projectDetail}
      >
        <div className={styles.detailContainer}>
          {/* Go back to home button */}
          <div className={styles.backIcon}>
            <IconButton
              sx={{
                backgroundColor: "blue",
                "&:hover": { backgroundColor: "#007bff" }
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

          {/* Project-specific links */}
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
                onClick={handlePrev}
                className={styles.buttonStyle}
              >
                Previous Project
              </Button>
            )}
            {projectId < maxProjectId && (
              <Button
                endIcon={<NextSvg />}
                onClick={handleNext}
                className={styles.buttonStyle}
              >
                Next Project
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
