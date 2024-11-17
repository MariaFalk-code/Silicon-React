// Desc: Scroll to a specific section of the page when clicking on a link
// Basecode is rendered by ChatGPT4o, modified to fit the project.

import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";


const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


const Scroller = ({ sectionId, children, className }) => {
    const location = useLocation();

  useEffect(() => {
    if (location.hash.substring(1) === sectionId) {
      scrollToSection(sectionId);
    }
  }, [location, sectionId]);

  return (
    <>
      <NavLink
      className={className}
        to={`/#${sectionId}`}
      onClick={() => scrollToSection(sectionId)}>
        {children}
      </NavLink>
    </>
  );
};

export default Scroller;
