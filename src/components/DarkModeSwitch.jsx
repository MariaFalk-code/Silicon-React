import { useState, useEffect } from 'react';

const DarkModeSwitch = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  return (
    
    <div className="flex-center">
      <small className="hidden-XS">Dark Mode</small>
      <label HTMLfor="darkModeSwitch" className="toggle">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
        <span className="slider"></span>
      </label>
    </div>
  );
}

  export default DarkModeSwitch;