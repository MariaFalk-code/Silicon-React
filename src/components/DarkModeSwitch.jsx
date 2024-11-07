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
  
    const logos = document.querySelectorAll('.logo');
  logos.forEach(logo => {
    const lightSrc = logo.getAttribute('data-light');
    const darkSrc = logo.getAttribute('data-dark');

    if (isDarkMode) {
      logo.src = darkSrc;
    } else {
      logo.src = lightSrc;
    }
  });
      
}, [isDarkMode]);
  
  return (
    
    <div className="flex-center">
      <small className="hidden-XS">Dark Mode</small>
      <label htmlFor="darkModeSwitch" className="toggle">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode}/>
        <span className="slider"></span>
      </label>
    </div>
  );
}

  export default DarkModeSwitch;