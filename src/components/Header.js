import React from "react";
import scrollToSection from "../utils/scrollToSection";

const Header = ({ activeSection }) => {

    const sections = [
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Shop", id: "shop" },
        { name: "Contact", id: "contact" }
    ];

return (
    <header className="header">
         <nav>
        <ul className="nav-links">
          {sections.map((section) => (
            <li
              key={section.id}
              className={activeSection === section.id ? "active" : ""}
              onClick={() => scrollToSection(section.id)}
            >
              {section.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
);  
};

export default Header;
