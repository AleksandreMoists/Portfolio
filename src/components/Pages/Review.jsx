import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/Review.module.css";

const reviewsData = [
  {
    id: 1,
    photo: "path/to/photo1.jpg", // Replace with actual image path
    role: "CEO, Tech Company",
    text: "Working with you has been a fantastic experience. Your skills in web development are unmatched!",
  },
  {
    id: 2,
    photo: "path/to/photo2.jpg",
    role: "Product Manager, Startup Inc.",
    text: "I appreciate the dedication and creativity you bring to every project. Highly recommend!",
  },
  {
    id: 3,
    photo: "path/to/photo3.jpg",
    role: "Founder, Innovation Labs",
    text: "The best developer I've worked with. Always delivers on time with exceptional quality!",
  },
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviewsData.length); // Loop through reviews
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentReview]);

  const handleDotClick = (index) => {
    setCurrentReview(index);
  };

  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewWrapper}>
        <AnimatePresence initial={false} exit>
          <motion.div
            key={currentReview} // Ensure Framer Motion tracks changes
            className={styles.reviewCard}
            initial={{ x: "100%", opacity: 0 }} // Start off-screen
            animate={{ x: 0, opacity: 1 }} // Move into view
            exit={{ x: "-100%", opacity: 0 }} // Slide out to the left
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <img
              src={reviewsData[currentReview].photo}
              alt={`${reviewsData[currentReview].role}`}
              className={styles.photo}
            />
            <div className={styles.info}>
              <p className={styles.role}>{reviewsData[currentReview].role}</p>
              <hr className={styles.separator} />
              <p className={styles.text}>{reviewsData[currentReview].text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.dotsContainer}>
        {reviewsData.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentReview === index ? styles.activeDot : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
