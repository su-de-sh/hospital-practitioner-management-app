import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, lightGreen } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: lightGreen["A400"],
      },
      secondary: {
        main: green[500],
      },

      text: {
        primary: lightGreen["A400"],
        secondary: "#ffffff",
      },
      button: {
        primary: lightGreen["A400"],
        secondary: "#ffffff",
      },
      background: { paper: "#fff", default: "#ffffff" },
    },
    typography: {
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
