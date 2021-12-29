import "@mui/material";
import { ThemeOptions } from "@mui/material";

type Custom = {
  primaryBackground: string;
  primaryColor: string;
};

type IThemeOptions = ThemeOptions & ExtraProps;
type ITheme = Theme & ExtraProps;

declare module "@mui/system/createTheme" {
  interface Theme {
    custom: Custom;
    toggleTheme?: Function;
  }
  interface ThemeOptions {
    custom?: Custom;
    toggleTheme?: Function;
  }
}
