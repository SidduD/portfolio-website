import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function ToggleContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ToggleContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  const context = useContext(ToggleContext);

  if (context === undefined)
    throw new Error("ToggleContext was used outside the ToggleContextProvider");
  return context;
}

export { ToggleContextProvider, useToggle };
