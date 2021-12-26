import { styled } from "@mui/system";

const Wrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled("label")`
  color: ${({ theme }) => theme.palette.text.primary};
  margin-right: 2rem;
`;

const InnInput = styled("input")`
  width: 10rem;
`;

const Input = (props: {
  sel: string;
  val: number;
  onChange: (e: any) => void;
}) => {
  return (
    <Wrapper>
      <Label htmlFor={props.sel}>{props.sel}:</Label>
      <InnInput type="number" value={props.val} onChange={props.onChange} />
    </Wrapper>
  );
};

export default Input;
