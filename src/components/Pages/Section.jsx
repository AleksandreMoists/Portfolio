import React from "react";

const Section = React.forwardRef(({ id, className, Component }, ref) => (
    <div ref={ref} id={id} className={`section ${className}`}> </div>
));

export default Section;
