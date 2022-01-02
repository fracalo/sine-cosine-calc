import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Circle from "./Circle";
import GraphGrid from "./GraphGrid";

const Point = (props: { cx: number; cy: number }) => (
  <circle cx={props.cx} cy={props.cy} fill="red" r={2}></circle>
);

//height: 66vh;
const PaperWrapper = styled(Paper)`
  flex-grow: 1;
  height: 60vh;
  padding: 2rem;
  display: flex;
`;

const Svg = styled("svg")`
  width: auto;
  height: 100%;
`;

const Marker = styled("marker")`
  fill: ${({ theme }) => theme.palette.text.primary};
`;

const Graph = () => {
  const cx = 100;
  const cy = 0;
  return (
    <Grid item xs={12} lg={8}>
      <PaperWrapper elevation={5}>
        <Grid container direction="column">
          <Typography align="left" gutterBottom>
            Graph
          </Typography>
          <Grid item flexGrow={1}>
            <Svg viewBox="-140 -140 280 280">
              <Marker
                id="Triangle"
                refX="28"
                refY="0"
                markerWidth="20"
                markerHeight="32"
                orient="auto"
                fill="#000"
                viewBox="0 -20 30 40"
              >
                <path d="M 0 -20 L 0 20 L 30 0 z" />
              </Marker>
              <Circle cx={0} cy={0} r={100} fill="transparent" />
              <GraphGrid />
              <Point cx={cx} cy={cy} />
            </Svg>
          </Grid>
        </Grid>
      </PaperWrapper>
    </Grid>
  );
};

export default Graph;
