import { deepOrange, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";

const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#210c4a",
    },
    background: {
      default: "#ededed",
    },
  },
  custom: {
    primaryBackground: "purple",
    primaryColor: "#000",
  },
});
const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: deepOrange,
    background: {
      default: "#333",
    },
  },
  custom: {
    primaryBackground: "#282c34",
    primaryColor: "#fefefe",
  },
});
const themeOrange = createTheme({
  palette: {
    mode: "dark",
    // palette values for dark mode
    primary: deepOrange,
    divider: deepOrange[700],
    background: {
      default: deepOrange[900],
      paper: deepOrange[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
  custom: {
    primaryBackground: "#282c34",
    primaryColor: "#fefefe",
  },
});

export const themeOptions = ["light", "dark"];
export type ThemeOpt = "dark" | "light";

export const themes: Record<ThemeOpt, Theme> = {
  dark: themeDark,
  light: themeLight,
};
