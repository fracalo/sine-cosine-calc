import { styled } from "@mui/system";

const Circle = styled("circle")`
  stroke: ${({ theme }) => theme.palette.text.primary};
  stroke-width: 0.1;
`;

export default Circle;
