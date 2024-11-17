import SiliconLight from "../assets/icons and logos/silicon-light.png";
import SiliconDark from "../assets/icons and logos/silicon-dark.png";
import DarkModeSwitch from "./DarkModeSwitch";
import { Link, NavLink } from "react-router-dom";
import Scroller from "./Scroller";
import MobileMeny from "./MobileMeny";

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
        <div className="nav-links hidden-XS-S">
          <Scroller sectionId="features" className="features">
            Features
          </Scroller>
        </div>
        <div className="nav-links hidden-XS-S">
          <Scroller sectionId="faq" className="faq-link">
            FAQ
          </Scroller>
        </div>
        <div className="nav-links hidden-XS-S">
          <NavLink to="/Contact">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="navgroup-right flex-center gap-2">
        <DarkModeSwitch />
        <a href="#" tabIndex="-1" className="hidden-XS-S">
          <button className="btn btn-s">
            <i className="fa-light fa-user"></i> &nbsp; Sign in / up
          </button>
        </a>
      </div>
      <MobileMeny
        options={[
          { label: "Features", link: "/#features" },
          { label: "FAQ", link: "/#faq" },
          { label: "Contact", link: "/Contact" },
        ]}
        placeholder={<i className="fa-regular fa-bars hidden-desktop" title="meny"></i>}
      />
    </nav>
  );
};

export default Nav;
