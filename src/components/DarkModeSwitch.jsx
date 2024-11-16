import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

const DarkModeSwitch = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className="flex-center">
      <small className="hidden-XS">Dark Mode</small>
      <label htmlFor="darkModeSwitch" className="toggle">
        <input
          type="checkbox"
          id="darkModeSwitch"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
