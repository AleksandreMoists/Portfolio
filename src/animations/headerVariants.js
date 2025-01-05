export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
        ease: "easeInOut", // Smooth easing for overall appearance
      },
    },
  };
  
  export const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Slight movement for smooth entry
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Longer duration for smooth effect
        ease: "easeInOut", // Smooth easing
      },
    },
  };
  
export const separatorVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
