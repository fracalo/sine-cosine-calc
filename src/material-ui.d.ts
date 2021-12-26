import "@mui/material";
import { ThemeOptions } from "@mui/material";

type ExtraProps = {
  primaryBackground: string;
  primaryColor: string;
};

type IThemeOptions = ThemeOptions & ExtraProps;
type ITheme = Theme & ExtraProps;

declare module "@mui/system/createTheme" {
  export type ThemeOptions = IThemeOptions;
  export type Theme = ITheme;
  export default function createTheme(
    options?: IThemeOptions,
    ...args: object[]
  ): Theme;
}
