import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import "./index.css";
import { ToggleContextProvider, useToggle } from "./contexts/ToggleContext.jsx";

const themeLight = createTheme({
  typography: {
    fontFamily: '"Roboto Mono", '
  },
  palette: {
    background: {
      default: "#ceeeff"
    }
  }
});

const themeDark = createTheme({
  typography: {
    fontFamily: '"Roboto Mono", '
  },
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function Main() {
  const { isDarkMode } = useToggle();

  return (
    <ThemeProvider theme={isDarkMode ? themeDark : themeLight}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToggleContextProvider>
        <Main />
      </ToggleContextProvider>
    </BrowserRouter>
  </StrictMode>
);
