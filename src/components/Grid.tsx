import { styled } from "@mui/system";
const Line = styled("line")`
  stroke: ${({ theme }) => theme.palette.text.primary};
  stroke-width: 0.1;
`;

const Grid = () => {
  return (
    <>
      <Line x1={-70} x2={70} y1={0} y2={0} markerEnd="url(#Triangle)" />
      <Line x1={0} x2={0} y1={70} y2={-70} markerEnd="url(#Triangle)" />
    </>
  );
};

export default Grid;
