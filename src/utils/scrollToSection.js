export const scrollToSection = (ref) => {
    if(ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
    }
}