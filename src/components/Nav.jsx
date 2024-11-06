import SiliconLight from "../assets/icons and logos/silicon-light.png";
import SiliconDark from "../assets/icons and logos/silicon-dark.png";
import DarkModeSwitch from "./DarkModeSwitch";

const Nav = () => {
  return (
    <nav className="nav flex-center">
      <div className="navgroup-left flex-left gap-3">
        <img
          className="logo siliconlogo" //className "logo" is used to target the logo in JS.
          src={SiliconLight}
          data-light={SiliconLight}
          data-dark={SiliconDark}
          alt="Silicon Logo"
        />
        <a className="nav-feat hidden-XS-S" href="#features">
          Features
        </a>
      </div>
      <div className="navgroup-right flex-center gap-2">
        <DarkModeSwitch />
        <a href="#" tabindex="-1" className="hidden-XS-S">
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
