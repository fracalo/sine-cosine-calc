import { styled } from "@mui/system";

import Graph from "./Graph";
import Controls from "./Controls";

const Wrapper = styled("div")`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  backgraound: ${({ theme }) => theme.palette.background};
`;

const Playground = () => {
  return (
    <Wrapper>
      <Graph />
      <Controls />
    </Wrapper>
  );
};

export default Playground;
