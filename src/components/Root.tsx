import { ThemeProvider } from "@mui/system";
import Playground from "./Playground";
import { useState } from "react";
import { Grid, styled } from "@mui/material";
import { ThemeOpt, themes } from "./themes";
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

  Object.values(themes).forEach((t) => {
    t.toggleTheme = (k: ThemeOpt) => () => {
      setTheme(themes[k]);
    };
  });

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
