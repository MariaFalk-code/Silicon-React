// Desc: Scroll to a specific section of the page when clicking on a link
// This code is rendered by ChatGPT4o.

import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

const scrollToSection = () => {
  const section = document.getElementById("features");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navigation = () => {
  const location = useLocation();

  useEffect(() => {
    // This effect runs whenever the location changes
    if (location.hash === "#features") {
      scrollToSection();
    }
  }, [location]);

  return (
    <NavLink
      className="nav-links hidden-XS-S"
      to="/#features" // Use /#features to make it accessible from any page
      onClick={scrollToSection}
    >
      Features
    </NavLink>
  );
};

export default Navigation;