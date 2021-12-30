import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";
import cap from "lodash.capitalize";

const themeLight = createTheme({
  palette: {
    mode: "light",
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
    background: {
      default: "#333",
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
