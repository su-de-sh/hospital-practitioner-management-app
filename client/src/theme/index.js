import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, grey, lightGreen } from "@mui/material/colors";
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
      dark: {
        main: "#000000",
      },

      text: {
        primary: "#000000",
        secondary: grey[800],
      },
      subtext: {
        primary: grey[700],
        secondary: grey[500],
      },
      button: {
        primary: lightGreen["A400"],
        secondary: "#ffffff",
      },
      background: { paper: grey[200], default: "#ffffff" },
    },
    typography: {
      fontSize: 10,
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
