import React from "react";
import styles from "../../styles/Typography.module.css";

const Typography = ({ variant = "h1", children, className = "", onClick, }) => {
  const Component = variant;
  return <Component className={`${styles[variant]} ${className}`}
          onClick={onClick}
          >{children}</Component>;
};

export default Typography;
