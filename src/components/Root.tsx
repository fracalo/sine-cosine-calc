import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { Grid, styled } from "@mui/material";
import { ThemeOpt, themes } from "./themes";
import ScaffoldingAppBar from "./Scaffolding";
import Graph from "./Graph";
import Controls from "./Controls";
import useCircleProps from "../hooks/useCircleProps";

const Wrapper = styled(Grid)`
  min-height: 100vh;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  transition: all 0.1s;
  padding: 2rem 2rem 0;
  flex: 1;
  /*overflow-y: auto;*/
  overflow-x: hidden;
  margin-top: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  padding-bottom: ${({ theme }) => theme.mixins.toolbar.minHeight}px;
  @media (min-width: 0px) and (orientation: landscape) : {
    min-height: calc(100vh - 48px);
    height: calc(100vh - 48px);
    margin-top: 48px;
    padding-bottom: 48px;
  }
  @media (min-width: 600px) {
    min-height: calc(100vh - 64px);
    height: calc(100vh - 64px);
    margin-top: 64px;
    padding-bottom: 64px;
  }
`;

const Root = () => {
  const [theme, setTheme] = useState(themes.light);
  const [draggingStateOff, setDraggingStateOff] = useState(true);
  const controlProps = useCircleProps();

  Object.values(themes).forEach((t) => {
    t.toggleTheme = (k: ThemeOpt) => () => {
      setTheme(themes[k]);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <ScaffoldingAppBar />
      <Wrapper
        container
        spacing={5}
        sx={{
          overflowY: draggingStateOff ? "auto" : "hidden",
        }}
      >
        <Graph setDraggingStateOff={setDraggingStateOff} {...controlProps} />
        <Controls draggingStateOff={draggingStateOff} {...controlProps} />
      </Wrapper>
    </ThemeProvider>
  );
};
export default Root;
