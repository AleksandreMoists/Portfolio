// Loader.js
import React from 'react';
import '../styles/Loader.css'; // for your animation styling

function Loader() {
  return (
    <div className="loader-container">
      {/* Add your initials in an animated way */}
      <div className="loader-initials">
        {/* Could be an SVG, or simple text that you style */}
        <span>AB</span>
      </div>
    </div>
  );
}

export default Loader;
