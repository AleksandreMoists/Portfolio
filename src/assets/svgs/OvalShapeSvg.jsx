import React from "react";

export const OvalShapeSvg = ({ width = 246, height = 305, fill="#B550F8" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height} 
    fill="none"
    viewBox="0 0 246 305"
  >
    <path
      fill={fill}
      fillRule="evenodd"
      d="M246 123C246 55.069 190.931 0 123 0S0 55.069 0 123v172.4c0 3.36 0 5.04.654 6.324a6 6 0 0 0 2.622 2.622C4.56 305 6.24 305 9.6 305h226.8c3.36 0 5.04 0 6.324-.654a6 6 0 0 0 2.622-2.622c.654-1.284.654-2.964.654-6.324z"
      clipRule="evenodd"
    ></path>
  </svg>
);
