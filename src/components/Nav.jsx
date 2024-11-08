import SiliconLight from "../assets/icons and logos/silicon-light.png";
import SiliconDark from "../assets/icons and logos/silicon-dark.png";
import DarkModeSwitch from "./DarkModeSwitch";
import { Link, NavLink } from "react-router-dom";
import ScrollToSection from "./ScrollToSection";

const Nav = () => {
  return (
    <nav className="nav flex-left">
      <div className="navgroup-left flex-left gap-2">
        <Link to="/" className="logo-link">
          <img
            className="logo siliconlogo" //className "logo" is used to target the logo in JS.
            src={SiliconLight}
            data-light={SiliconLight}
            data-dark={SiliconDark}
            alt="Silicon Logo"
          />
        </Link>
          {/* //Below is a custom component that scrolls to the Features section on the home page when the link is clicked*/}
          <ScrollToSection />
          <NavLink className="nav-links" to="/Contact">
            Contact
          </NavLink> 
      </div>
      <div className="navgroup-right flex-center gap-2">
        <DarkModeSwitch />
        <a href="#" tabIndex="-1" className="hidden-XS-S">
          <button className="btn btn-s">
            <i className="fa-light fa-user"></i> &nbsp; Sign in / up
          </button>
        </a>
      </div>
      <button className="btn btn-meny hidden-desktop">
        <i className="fa-regular fa-bars" title="meny"></i>
      </button>
    </nav>
  );
};

export default Nav;
