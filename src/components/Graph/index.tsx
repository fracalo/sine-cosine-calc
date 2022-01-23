import React, { useCallback, useEffect, useRef } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ControlsProps from "../../types/ControlsProps";
import Circle from "./Circle";
import GraphGrid from "./GraphGrid";

const Point = (props: {
  cx: number;
  cy: number;
  moveHandle: (e: MouseEvent) => void;
}) => {
  const { cx, cy, moveHandle } = props;
  useEffect(() => {
    const mouseUpHandle = () => {
      document.body.style.cursor = "initial";
      document.removeEventListener("mousemove", moveHandle);
    };
    document.addEventListener("mouseup", mouseUpHandle);
    return () => {
      mouseUpHandle();
      document.removeEventListener("mouseup", mouseUpHandle);
    };
  }, [moveHandle]);

  return (
    <circle
      className="sin-cos-indicator"
      onMouseDown={(e: React.MouseEvent<SVGCircleElement>) => {
        document.body.style.cursor = "grabbing";
        document.addEventListener("mousemove", moveHandle);
      }}
      cx={cx}
      cy={cy}
      fill="red"
      r={2}
    ></circle>
  );
};

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
  & .sin-cos-indicator:hover {
    cursor: crosshair;
  }
`;

const Marker = styled("marker")`
  fill: ${({ theme }) => theme.palette.text.primary};
`;

const Graph = ({ values, changeGraphHandle }: ControlsProps) => {
  const cx = values.x * 100;
  const cy = values.y * 100;
  const svgRef = useRef(null);

  const moveHandle = useCallback(
    (e: MouseEvent) => {
      const current = svgRef.current as unknown as SVGCircleElement;
      const { top, left, height, width } = current.getBoundingClientRect();

      const xx = left + width / 2;
      const yy = top + height / 2;

      const px = e.pageX;
      const py = e.pageY;
      const payload = getXY(px - xx, py - yy);
      changeGraphHandle(payload);
    },
    [changeGraphHandle]
  );
  return (
    <Grid item xs={12} lg={8}>
      <PaperWrapper elevation={5}>
        <Grid container direction="column">
          <Typography align="left" gutterBottom>
            Graph
          </Typography>
          <Grid item flexGrow={1}>
            <Svg ref={svgRef} viewBox="-140 -140 280 280">
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
              <Point moveHandle={moveHandle} cx={cx} cy={cy} />
            </Svg>
          </Grid>
        </Grid>
      </PaperWrapper>
    </Grid>
  );
};
export default Graph;

function getXY(rx: number, ry: number) {
  const r = Math.hypot(rx, ry);
  return { y: ry / r, x: rx / r };
}
