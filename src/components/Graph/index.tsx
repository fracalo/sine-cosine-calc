import { useCallback, useEffect, useRef } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ControlsProps from "../../types/ControlsProps";
import Circle from "./Circle";
import GraphGrid from "./GraphGrid";
import useMediaQuery from "@mui/material/useMediaQuery";

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
// some code..
const Point = (props: {
  cx: number;
  cy: number;
  moveHandle: (e: MouseEvent | TouchEvent) => void;
  setDraggingStateOff: (b: boolean) => void;
}) => {
  const { cx, cy, moveHandle, setDraggingStateOff } = props;
  useEffect(() => {
    const upHandle = () => {
      document.body.style.cursor = "initial";
      setDraggingStateOff(true);
      document.removeEventListener(
        isMobile ? "touchmove" : "mousemove",
        moveHandle
      );
    };
    document.addEventListener(isMobile ? "touchend" : "mouseup", upHandle);
    return () => {
      upHandle();
      document.removeEventListener(isMobile ? "touchend" : "mouseup", upHandle);
    };
  }, [moveHandle, setDraggingStateOff]);

  const startHandle = () => {
    document.body.style.cursor = "grabbing";
    document.addEventListener(isMobile ? "touchmove" : "mousemove", moveHandle);
    setDraggingStateOff(false);
  };
  return (
    <circle
      className="sin-cos-indicator"
      onMouseDown={startHandle}
      onTouchStart={startHandle}
      cx={cx}
      cy={cy}
      fill="red"
      r={isMobile ? 17 : 3}
    ></circle>
  );
};

const PaperWrapper = styled(Paper)`
  flex-grow: 1;
  padding: 2rem;
  display: flex;
  @media (min-width: 666px) and (orientation: portrait) {
    height: 60vh;
  }
`;

const Svg = styled("svg")`
  width: auto;
  height: calc(80vw - 3rem);
  @media (min-width: 666px) and (orientation: portrait) {
    height: 100%;
  }
  & .sin-cos-indicator:hover {
    cursor: crosshair;
  }
`;

const Marker = styled("marker")`
  fill: ${({ theme }) => theme.palette.text.primary};
`;

const Graph = ({
  values,
  changeGraphHandle,
  setDraggingStateOff,
}: ControlsProps & { setDraggingStateOff: (b: boolean) => void }) => {
  const lgOrUp = useMediaQuery("(min-width:1200px)");
  const cx = values.x * 100;
  const cy = values.y * 100;
  const svgRef = useRef(null);

  const moveHandle = useCallback(
    (e: MouseEvent | TouchEvent) => {
      const current = svgRef.current as unknown as SVGCircleElement;
      const { top, left, height, width } = current.getBoundingClientRect();

      const xx = left + width / 2;
      const yy = top + height / 2;

      const ee = e as MouseEvent & TouchEvent;
      const px = ee.pageX !== undefined ? ee.pageX : ee.changedTouches[0].pageX;
      const py = ee.pageY !== undefined ? ee.pageY : ee.changedTouches[0].pageY;
      const payload = getXY(px - xx, py - yy);
      changeGraphHandle(payload);
    },
    [changeGraphHandle]
  );
  return (
    <Grid
      item
      xs={12}
      lg={8}
      sx={{
        paddingTop: lgOrUp ? "inherit" : "0 !important",
      }}
    >
      <PaperWrapper elevation={5}>
        <Grid container direction="column">
          <Grid item>
            <Typography align="left" gutterBottom>
              Graph
            </Typography>
          </Grid>
          <Grid item flexGrow={1}>
            <Grid
              container
              sx={{
                maxWidth: 555,
              }}
            >
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
                <Point
                  setDraggingStateOff={setDraggingStateOff}
                  moveHandle={moveHandle}
                  cx={cx}
                  cy={cy}
                />
              </Svg>
            </Grid>
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
