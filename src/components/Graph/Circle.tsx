import { styled } from "@mui/system";

const Circle = styled("circle")`
  stroke: ${({ theme }) => theme.palette.text.primary};
  stroke-width: 0.2;
`;

export default Circle;
