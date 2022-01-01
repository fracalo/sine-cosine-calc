import { styled } from "@mui/system";

import Graph from "./Graph";
import Controls from "./Controls";
import ControlsProps, { TrigValues } from "../types/ControlsProps";

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  backgraound: ${({ theme }) => theme.palette.background};
`;

const Playground = () => {
  const p: ControlsProps = {
    values: {
      radians: 6,
      degrees: 6,
      sin: 6,
      cos: 6,
    },
    changeHandle: (k: keyof TrigValues) => (v: number) => {
      console.log(k, v);
    },
  };

  return (
    <Wrapper>
      <Graph />
      <Controls {...p} />
    </Wrapper>
  );
};

export default Playground;
