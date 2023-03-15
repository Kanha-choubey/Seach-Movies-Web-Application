import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createContext } from "react";
import { useState, useMemo } from "react";
export const ColorModeComtext = createContext();

const ToggleColorMode = ({ children }) => {
  const [mode, setMode] = useState("light");
  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ColorModeComtext.Provider value={{ mode, setMode, toggleColorMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeComtext.Provider>
  );
};

export default ToggleColorMode;
