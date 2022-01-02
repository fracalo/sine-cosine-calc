import { TextField, Typography, Paper, Grid } from "@mui/material";
import { Box, styled } from "@mui/system";
import ControlsProps, { TrigValues } from "../types/ControlsProps";
import cap from "lodash.capitalize";

const PaperWrapper = styled(Paper)`
  padding: 2rem 1rem;
  align-self: flex-start;
  flex-grow: 1;
`;

const Controls = ({ values, changeHandle }: ControlsProps) => {
  return (
    <Grid item xs={12} lg={4}>
      <PaperWrapper elevation={5}>
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
                changeHandle(key)(Number(e.target.value));
              }}
            />
          </Box>
        ))}
      </PaperWrapper>
    </Grid>
  );
};

export default Controls;
