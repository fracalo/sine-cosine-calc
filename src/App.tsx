import "./App.css";
import { createTheme, DefaultTheme, ThemeProvider, Theme } from "@mui/system";
import Playground from "./components/Playground";
import { useReducer, useState } from "react";
import { styled } from "@mui/material";

const themeLight = createTheme({
  primaryBackground: "#fefefe",
  primaryColor: "#000",
});
const themeDark = createTheme({
  primaryBackground: "#282c34",
  primaryColor: "#fefefe",
});

type ThemeOpt = "dark" | "light";
const themes: Record<ThemeOpt, DefaultTheme> = {
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
  background-color: ${({ theme }) => theme.primaryBackground};
  transition: all 0.15s;
`;
function App() {
  const [theme, setTheme] = useState<Theme>(themes.light);

  const themeSwitch = (k: ThemeOpt) => setTheme(themes[k]);

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <h1 className="title">Sine Cosine Interactive Playground</h1>
        <Playground />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
