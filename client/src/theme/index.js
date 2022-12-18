import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, grey } from "@mui/material/colors";

import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { alpha } from "@mui/material/styles";

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: grey[700],
        light: grey[400],
        dark: grey[800],
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
        primary: green[400],
        secondary: "#121212",
      },
      background: { paper: grey[200], default: "#ffffff" },
      action: {
        selected: alpha(grey[500], 0.16),
        disabled: alpha(grey[500], 0.8),
        disabledBackground: alpha(grey[500], 0.24),
        focus: alpha(grey[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
      },
    },

    typography: {
      fontSize: 12,
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
