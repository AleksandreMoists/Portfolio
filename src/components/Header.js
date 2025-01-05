import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, separatorVariants } from "../animations/headerVariants";
import styles from "../styles/Header.module.css";

const Header = ({ activeSection, sectionRefs }) => {
  const sections = [
    { name: "About", id: "about", ref: sectionRefs[0] },
    { name: "Projects", id: "projects", ref: sectionRefs[1] },
    { name: "Shop", id: "shop", ref: sectionRefs[2] },
    { name: "Contact", id: "contact", ref: sectionRefs[3] },
  ];

  return (
    <motion.header
      className={styles.header}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.nav>
        <motion.ul className={styles.navList}>
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <motion.li
                className={`${styles.navItem} ${
                  activeSection === section.id ? styles.active : ""
                }`}
                variants={itemVariants}
                onClick={() =>
                  section.ref.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                {section.name}
              </motion.li>
              {index < sections.length - 1 && (
                <motion.span className={styles.separator} variants={separatorVariants}>•</motion.span> // Add separator
              )}
            </React.Fragment>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
