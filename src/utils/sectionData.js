import About from "../pages/About/About";
import Projects from "../pages/Projects/Projects";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";

export const sectionData = [
  { id: "about", className: "about-section", component: <About /> },
  { id: "projects", className: "projects-section", component: <Projects /> },
  { id: "shop", className: "shop-section", component: <Shop /> },
  { id: "contact", className: "contact-section", component: <Contact /> },
];
