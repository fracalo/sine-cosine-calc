import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import Input from "./Input";

const Wrapper = styled(Paper)`
  padding: 2rem 1rem;
  margin-left: 2rem;
`;

const Controls = () => {
  return (
    <Wrapper elevation={5}>
      <Input sel="radian" val={6} onChange={(e) => {}} />
    </Wrapper>
  );
};

export default Controls;
