import "./App.css";
import { DefaultTheme, ThemeProvider, Theme } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import Playground from "./components/Playground";
import { ChangeEvent, EventHandler, useReducer, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";

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

type ThemeOpt = "dark" | "light";
const themes: Record<ThemeOpt, Theme> = {
  dark: themeDark,
  light: themeLight,
};

const Wrapper = styled("div")`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: all 0.15s;
`;

const Title = styled("h1")`
  color: ${({ theme }) => theme.palette.text.primary};
`;
function App() {
  const [theme, setTheme] = useState(themes.light);
  const [opt, setOpt] = useState("light");

  const themeSwitch = (k: ThemeOpt) => {
    setTheme(themes[k]);
    setOpt(k);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <div>
          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Theme
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={opt}
              onChange={(e) => themeSwitch(e.target.value as ThemeOpt)}
              autoWidth
              label="Theme"
            >
              <MenuItem value={"light"}>Light</MenuItem>
              <MenuItem value={"dark"}>Dark</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Title>Sine Cosine Interactive Playground</Title>
        <Playground />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
