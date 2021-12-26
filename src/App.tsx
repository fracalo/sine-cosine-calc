import "./App.css";
import { createTheme, DefaultTheme, ThemeProvider, Theme } from "@mui/system";
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
  custom: {
    primaryBackground: "#fefefe",
    primaryColor: "#000",
  },
});
const themeDark = createTheme({
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
  background-color: ${({ theme }) =>
    theme?.custom?.primaryBackground ?? "white"};
  transition: all 0.15s;
`;
function App() {
  const [theme, setTheme] = useState(themes.light);
  const [opt, setOpt] = useState("light");

  const themeSwitch = (k: ThemeOpt) => {
    setTheme(themes[k]);
    setOpt(k);
  };
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent<string>): void => {
    setAge(event.target.value);
  };

  //<ThemeProvider theme={theme}>
  //</ThemeProvider>
  return (
    <Wrapper>
      <div>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
      </div>
      <h1 className="title">Sine Cosine Interactive Playground</h1>
      <Playground />
    </Wrapper>
  );
}

export default App;
