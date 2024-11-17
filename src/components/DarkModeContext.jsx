import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("isDarkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const updateLogos = (isDarkMode) => {
    const logos = document.querySelectorAll(".logo");
    logos.forEach((logo) => {
      const lightSrc = logo.getAttribute("data-light");
      const darkSrc = logo.getAttribute("data-dark");

      if (!lightSrc || !darkSrc) return;

      logo.src = isDarkMode ? darkSrc : lightSrc;
    });
  };

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      updateLogos(isDarkMode);
      
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode]);
  
  useEffect(() => {
    updateLogos(isDarkMode);
  }, [isDarkMode, location]);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
