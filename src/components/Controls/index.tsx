import { TextField, Typography, Paper, Grid, Slider } from "@mui/material";
import { Box, styled } from "@mui/system";
import ControlsProps, {
  ControlInputProps,
  ControlMutableValues,
  ControlMutableValuesKeys,
} from "../../types/ControlsProps";
import roundDecimal from "../../util/roundDecimal";
import ControlInput from "./ControlsInput";

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
const Controls = ({ values, changeHandle }: ControlsProps) => {
  return (
    <Grid item xs={12} lg={4}>
      <PaperWrapper elevation={5}>
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
    </Grid>
  );
};

export default Controls;
