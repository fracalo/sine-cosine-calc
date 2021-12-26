import { styled } from "@mui/system";
import Circle from "./Circle";
import Grid from "./Grid";

const Point = (props: { cx: number; cy: number }) => (
  <circle cx={props.cx} cy={props.cy} fill="red" r={1}></circle>
);

const Wrapper = styled("div")`
  max-width: 66vw;
  flex-grow: 1;
  height: 66vh;
`;

const Svg = styled("svg")`
  width: auto;
  height: 100%;
`;

const Marker = styled("marker")`
  fill: ${({ theme }) => theme.palette.text.primary};
`;

const Graph = () => {
  const cx = 50;
  const cy = 0;
  return (
    <Wrapper>
      <Svg viewBox="-70 -70 140 140">
        <Marker
          id="Triangle"
          refX="14"
          refY="0"
          markerWidth="10"
          markerHeight="16"
          orient="auto"
          fill="#000"
          viewBox="0 -10 15 20"
        >
          <path d="M 0 -10 L 0 10 L 15 0 z" />
        </Marker>
        <Circle cx={0} cy={0} r={50} fill="transparent" />
        <Grid />
        <Point cx={cx} cy={cy} />
      </Svg>
    </Wrapper>
  );
};

export default Graph;
