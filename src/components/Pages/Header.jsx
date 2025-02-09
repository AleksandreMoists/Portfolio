import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { containerVariants, itemVariants, separatorVariants } from "../../animations/headerAnimation";
import styles from "../../styles/Header.module.css";

const Header = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    
    const sections = [
        { name: "About", id: "home", ref: sectionRefs[0] },
        { name: "Projects", id: "about", ref: sectionRefs[1] },
        { name: "Skills", id: "projects", ref: sectionRefs[2] },
        { name: "Contact", id: "contact", ref: sectionRefs[3] },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            const sectionsPositions = sections.map(section => {
                const element = section.ref.current;
                if (element) {
                    return {
                        id: section.id,
                        offset: element.offsetTop - 100,
                        height: element.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sectionsPositions.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) setActiveSection(active.id);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        const section = sections.find(s => s.id === sectionId);
        if (section?.ref?.current) {
            const top = section.ref.current.offsetTop - 100;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <motion.header
            className={`fixed w-full top-0 z-50 transition-all duration-500 ${
                isOpen ? "bg-[#030014] opacity-100" :
                scrolled ? "bg-[#030014]/50 backdrop-blur-xl" : "bg-transparent"
            }`}
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div variants={itemVariants}>
                        <a
                            href="#home"
                            onClick={(e) => scrollToSection(e, "home")}
                            className="text-xl font-bold bg-gradient-to-r from-[#a855f7] to-[#6366f1] bg-clip-text text-transparent"
                        >
                            Aleksandre
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav className="hidden md:block">
                        <motion.ul className="flex items-center space-x-8">
                            {sections.map((section, index) => (
                                <React.Fragment key={section.id}>
                                    <motion.li
                                        className={`group relative px-1 py-2 text-sm ${
                                            activeSection === section.id ? styles.active : ""
                                        }`}
                                        variants={itemVariants}
                                    >
                                        <a
                                            href={`#${section.id}`}
                                            onClick={(e) => scrollToSection(e, section.id)}
                                            className={`relative z-10 transition-colors duration-300 ${
                                                activeSection === section.id 
                                                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                                                    : "text-[#e2d3fd] hover:text-white"
                                            }`}
                                        >
                                            {section.name}
                                        </a>
                                        <motion.span
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: activeSection === section.id ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.li>
                                    {index < sections.length - 1 && (
                                        <motion.span 
                                            className={styles.separator}
                                            variants={separatorVariants}
                                        >
                                            •
                                        </motion.span>
                                    )}
                                </React.Fragment>
                            ))}
                        </motion.ul>
                    </motion.nav>

                    {/* Mobile Menu Button */}
                    <motion.div className="md:hidden" variants={itemVariants}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 text-[#e2d3fd] hover:text-white transition-transform ${
                                isOpen ? "rotate-90 scale-125" : "rotate-0 scale-100"
                            }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                className={`md:hidden fixed inset-0 bg-[#030014] ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                style={{ top: "64px", height: "calc(100vh - 64px)" }}
                initial={{ y: -100 }}
                animate={{ y: isOpen ? 0 : -100 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex flex-col p-4 space-y-4">
                    {sections.map((section, index) => (
                        <motion.a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => scrollToSection(e, section.id)}
                            className={`text-lg ${
                                activeSection === section.id 
                                    ? "bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent"
                                    : "text-[#e2d3fd] hover:text-white"
                            }`}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: isOpen ? 0 : 50, opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {section.name}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.header>
    );
};

export default Header;