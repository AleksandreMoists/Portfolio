// ProjectDetail.jsx
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../utils/data";
import styles from "./ProjectDetail.module.css";

const ProjectDetail = () => {
  const { id } = useParams();      // get the :id from the URL
  const navigate = useNavigate();  // so we can navigate back

  // Convert id to a number if necessary, depending on how your data is shaped
  const project = projectsData.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <div className={styles.detailContainer}>
        <h2>Project not found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <h2>{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className={styles.detailImage}
      />
      <p>{project.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProjectDetail;
