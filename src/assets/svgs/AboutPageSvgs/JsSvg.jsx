import * as React from "react";

const JsSvg = ({ width=20, height=20 }) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <path fill="#F1DC50" d="M0 0h24v24H0z"></path>
      <path
        stroke="#333"
        strokeWidth="2"
        d="M12 11v8c0 .876-.523 2-2 2-2.385 0-2.5-2-2.5-2m13.29-5.484q-.9-1.515-2.386-1.516C16.856 12 16 13 16 14s.5 2 2.508 2.5c1.278.318 2.492 1 2.492 2.5s-1.315 2-2.5 2q-2.271 0-3-2"
      ></path>
    </g>
  </svg>
);

export default JsSvg;
