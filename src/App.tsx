import "./App.css";
import { ThemeProvider } from "@mui/system";
import Playground from "./components/Playground";
import { useState } from "react";
import { Box, styled } from "@mui/material";
import ThemeSwitch, { ThemeOpt, themes } from "./components/ThemeSwitch";

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
  font-size: 2rem;
`;

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [themeOpt, setThemeOpt] = useState<ThemeOpt>("light");

  const themeSwitchHandle = (k: ThemeOpt) => {
    setTheme(themes[k]);
    setThemeOpt(k);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Title>Sine Cosine Interactive Playground</Title>
          <ThemeSwitch val={themeOpt} themeSwitchHandle={themeSwitchHandle} />
        </Box>
        <Playground />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
