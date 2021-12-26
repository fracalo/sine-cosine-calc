import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/system";
import cap from "lodash.capitalize";

const themeLight = createTheme({
  palette: {
    mode: "light",
  },
  custom: {
    primaryBackground: "#fefefe",
    primaryColor: "#000",
  },
});
const themeDark = createTheme({
  palette: {
    mode: "dark",
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

type ThemeSwitchProps = {
  val: ThemeOpt;
  themeSwitchHandle: (v: ThemeOpt) => void;
};

const ThemeSwitch = (props: ThemeSwitchProps) => (
  <div>
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <InputLabel id="theme-select">Theme</InputLabel>
      <Select
        size="small"
        labelId="theme-select"
        id="demo-simple-select-autowidth"
        value={props.val}
        onChange={(e) => props.themeSwitchHandle(e.target.value as ThemeOpt)}
        autoWidth
        label="Theme"
      >
        {themeOptions.map((x) => (
          <MenuItem key={x} value={x}>
            {cap(x)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
);

export default ThemeSwitch;
