import { ThemeProvider } from "@mui/system";
import Playground from "./Playground";
import { useEffect, useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import ThemeSwitch, { ThemeOpt, themes } from "./ThemeSwitch";
import ScaffoldingAppBar from "./Scaffolding/AppBar";

const Wrapper = styled("div")`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: all 0.15s;
  padding: 0 2rem;
`;

const Root = () => {
  const [theme, setTheme] = useState(themes.light);

  themes.light.toggleTheme = () => {
    setTheme(themes.dark);
  };
  themes.dark.toggleTheme = () => {
    setTheme(themes.light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ScaffoldingAppBar></ScaffoldingAppBar>
      <Wrapper>
        <Grid container>
          <Playground />
        </Grid>
      </Wrapper>
    </ThemeProvider>
  );
};
export default Root;
