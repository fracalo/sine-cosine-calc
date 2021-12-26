import { styled } from "@mui/system";

const Circle = styled("circle")`
  stroke: ${({ theme }) => theme?.custom?.primaryColor ?? "black"};
  stroke-width: 0.1;
`;

export default Circle;
