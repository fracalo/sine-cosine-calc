import { styled } from "@mui/system";

import Graph from "./Graph";
import Controls from "./Controls";

const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  padding: 0 1rem;
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
