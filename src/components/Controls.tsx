import { styled } from "@mui/system";
import Input from "./Input";

const Wrapper = styled("div")`
  padding: 2rem 1rem;
`;

const Controls = () => {
  return (
    <Wrapper>
      <Input sel="radian" val={6} onChange={(e) => {}} />
    </Wrapper>
  );
};

export default Controls;
