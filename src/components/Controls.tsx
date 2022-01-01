import { TextField, Typography, Paper } from "@mui/material";
import { Box, styled } from "@mui/system";
import ControlsProps, { TrigValues } from "../types/ControlsProps";
import cap from "lodash.capitalize";

const Wrapper = styled(Paper)`
  padding: 2rem 1rem;
  margin-left: 2rem;
  align-self: flex-start;
  flex-grow: 1;
`;

const Controls = ({ values, changeHandle }: ControlsProps) => {
  return (
    <Wrapper elevation={5}>
      <Typography align="left" gutterBottom>
        Controls
      </Typography>
      {Object.entries(values).map(([k, v]) => (
        <Box
          key={k}
          sx={{
            p: "1rem 0",
          }}
        >
          <TextField
            label={cap(k)}
            value={v}
            type="number"
            inputProps={{
              step: 0.1,
            }}
            onChange={(e) => {
              const key = k as keyof TrigValues;
              changeHandle(key)(234);
            }}
          />
        </Box>
      ))}
    </Wrapper>
  );
};

export default Controls;
