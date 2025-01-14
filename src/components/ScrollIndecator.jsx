import React from "react";
import { motion } from "framer-motion";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ onClick }) => {
  return (
    <div className="scroll-indicator-container" onClick={onClick}>
      <div className="scroll-indicator-line">
        {/* Use motion.div for the animated part */}
        <motion.div
          className="scroll-indicator-progress"
          initial={{ y: "-100%" }} // start 'above' the container
          animate={{ y: ["-100%", "0%", "100%"] }} // move from top to bottom
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Text beside the indicator */}
      <span className="scroll-indicator-text">Scroll to explore more</span>
    </div>
  );
};

export default ScrollIndicator;
