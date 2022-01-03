import { Grid, Slider, TextField } from "@mui/material";
import {
  ChangeHandleType,
  ControlInputProps,
  ControlMutableValuesKeys,
} from "../../types/ControlsProps";
import cap from "lodash.capitalize";

const ControlsInput = (props: {
  extraProps: ControlInputProps;
  k: ControlMutableValuesKeys;
  value: number;
  changeHandle: ChangeHandleType;
}) => {
  const { extraProps, k, value, changeHandle } = props;
  const { inputProps } = extraProps;
  return (
    <Grid
      item
      sx={{
        p: "1rem 0",
      }}
    >
      <Grid container>
        <TextField
          sx={{
            width: "8rem",
          }}
          size="small"
          label={cap(k)}
          inputProps={inputProps}
          value={value}
          type="number"
          onChange={(e) => {
            changeHandle(k)(Number(e.target.value));
          }}
        />
        <Grid
          item
          sx={{
            flex: 1,
            p: ".4rem 1rem 0",
          }}
        >
          <Slider
            aria-label={`${k} input control`}
            size="small"
            value={value}
            {...inputProps}
            onChange={(_, v) => {
              const val = v as number;
              changeHandle(k)(val);
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ControlsInput;
