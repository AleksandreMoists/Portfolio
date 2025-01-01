import { useEffect, useState } from 'react';

export const useScrollSpy = (sectionsRefs) => {
    const [activeSession, setActiveSession] = useState("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSession(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionRefs.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            };
        });
        return () => observer.disconnect();
    }, [sectionsRefs]);

    return activeSession;

}