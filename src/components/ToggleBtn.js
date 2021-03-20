import React, { useEffect } from "react";

const ToggleBtn = ({ darkMode, setDarkMode }) => {
    const DARK = "dark";

    const handleTheme = (isDark) => {
  
      if (isDark) {
        localStorage.setItem(DARK, true);
      } else {
        localStorage.setItem(DARK, false);
      }
    };
  
    const onClick = (e) => {
      setDarkMode((prev) => {
        handleTheme(!prev);
        return !prev;
      });
    };
  
    useEffect(() => {
      let ls_theme = JSON.parse(localStorage.getItem(DARK));
  
      if (ls_theme !== null) {
        //localStorage에 theme이 저장되어 있을 때
        setDarkMode(ls_theme);
        handleTheme(ls_theme);
      } else {
        //localStorage가 비어있을 때
        console.log("localStorage 비어있음")
  
        const darkMode = window.matchMedia("(prefers-color-scheme: Dark)")
          .matches;
        setDarkMode(darkMode);
        handleTheme(darkMode);
      }
    }, []);
  return (
    <button className="mode" onClick={onClick}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
  );
};

export default ToggleBtn;
