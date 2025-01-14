export const scrollToSection = (ref) => {
    if(ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
}

export const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };