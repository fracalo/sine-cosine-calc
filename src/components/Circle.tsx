import { styled } from "@mui/system";

const Circle = styled("circle")`
  stroke: ${({ theme }) => theme.primaryColor};
  stroke-width: 0.1;
`;

export default Circle;
