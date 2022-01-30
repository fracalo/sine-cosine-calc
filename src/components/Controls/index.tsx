import { Typography, Paper, Grid, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import ControlsProps, {
  ControlInputProps,
  ControlMutableValues,
  ControlMutableValuesKeys,
} from "../../types/ControlsProps";
import roundDecimal from "../../util/roundDecimal";
import ControlInput from "./ControlsInput";
import { isMobile } from "react-device-detect";

const PaperWrapper = styled(Paper)`
  padding: 2rem 1rem;
  align-self: flex-start;
  flex-grow: 1;
`;

const mutableInputKeys: Record<keyof ControlMutableValues, ControlInputProps> =
  {
    radians: {
      inputProps: {
        min: 0,
        max: Math.PI * 2,
        step: 0.001,
      },
      toFixedVal: 5,
    },
    degrees: {
      inputProps: {
        min: 0,
        max: 360,
        step: 0.1,
      },
      toFixedVal: 2,
    },
    cos: {
      inputProps: {
        min: -1,
        max: 1,
        step: 0.01,
      },
      toFixedVal: 6,
    },
    sin: {
      inputProps: {
        min: -1,
        max: 1,
        step: 0.01,
      },
      toFixedVal: 6,
    },
  };
const Controls = ({
  values,
  changeHandle,
  draggingStateOff,
}: ControlsProps & { draggingStateOff: boolean }) => {
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const inner = (
    <>
      <PaperWrapper
        elevation={5}
        sx={{
          pointerEvents: draggingStateOff ? "initial" : "none",
        }}
      >
        <Grid item>
          <Typography align="left" gutterBottom>
            Controls
          </Typography>
        </Grid>
        {Object.entries(mutableInputKeys).map((args) => {
          const [k, extraProps] = args as [
            ControlMutableValuesKeys,
            ControlInputProps
          ];
          const { toFixedVal } = extraProps;
          const value = roundDecimal(values[k], toFixedVal);
          return (
            <ControlInput
              key={k}
              value={value}
              changeHandle={changeHandle}
              extraProps={extraProps}
              k={k}
            />
          );
        })}
      </PaperWrapper>
    </>
  );
  return isMobile && !isPortrait ? (
    <Grid item xs={6} sx={{ paddingTop: "0 !important" }}>
      {inner}
    </Grid>
  ) : (
    <Grid item xs={12} lg={4}>
      {inner}
    </Grid>
  );
};

export default Controls;
