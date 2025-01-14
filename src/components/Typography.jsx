import React from "react";
import styles from "../styles/Typography.module.css";

const Typography = ({ variant = "h1", children, className = "" }) => {
  const Component = variant;
  return <Component className={`${styles[variant]} ${className}`}>{children}</Component>;
};

export default Typography;
