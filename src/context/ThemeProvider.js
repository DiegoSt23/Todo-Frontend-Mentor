import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const [mainBackgroundColor, setMainBackgroundColor] = useState("#161722");
  const [backgroundColor, setBackgroundColor] = useState("#25273c");
  const [textColor, setTextColor] = useState("#cacde8");
  const [singleTaskClass, setSingleTaskClass] = useState("single-task-dark");
  const [optionsClass, setOptionsClass] = useState("options-container-dark");
  const [navBarResponsiveClass, setNavBarResponsiveClass] = useState(
    "nav-bar-responsive-dark"
  );

  useEffect(() => {
    if (theme) {
      setMainBackgroundColor("#161722");
      setBackgroundColor("#25273c");
      setTextColor("#cacde8");
      setSingleTaskClass("single-task-dark");
      setOptionsClass("options-container-dark");
      setNavBarResponsiveClass("nav-bar-responsive-dark");
    } else {
      setMainBackgroundColor("#e4e5f1");
      setBackgroundColor("#fafafa");
      setTextColor("#313131");
      setSingleTaskClass("single-task-light");
      setOptionsClass("options-container-light");
      setNavBarResponsiveClass("nav-bar-responsive-light");
    }
  }, [theme]);

  const contextValue = {
    theme,
    mainBackgroundColor,
    backgroundColor,
    textColor,
    singleTaskClass,
    optionsClass,
    navBarResponsiveClass,
    changeTheme() {
      setTheme(!theme);
    },
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
