import { styled } from "@mui/system";
const Line = styled("line")`
  stroke: ${({ theme }) => theme.palette.text.primary};
  stroke-width: 0.2;
`;

const GraphGrid = () => {
  return (
    <>
      <Line x1={-140} x2={140} y1={0} y2={0} markerEnd="url(#Triangle)" />
      <Line x1={0} x2={0} y1={140} y2={-140} markerEnd="url(#Triangle)" />
    </>
  );
};

export default GraphGrid;
