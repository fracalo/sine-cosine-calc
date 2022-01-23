export type ControlMutableValuesKeys = "radians" | "degrees" | "sin" | "cos";
export type GraphMutableValuesKeys = "x" | "y";

export type ControlMutableValues = Record<ControlMutableValuesKeys, number>;
export type GraphMutableValues = Record<GraphMutableValuesKeys, number>;

type InputPropsType = {
  min: number;
  max: number;
  step: number;
};

export type ControlInputProps = {
  inputProps: InputPropsType;
  toFixedVal: number;
};

export type TrigValuesKeys = ControlMutableValuesKeys | GraphMutableValuesKeys;

export type TrigValues = ControlMutableValues & GraphMutableValues;

export type ChangeHandleType = (k: keyof TrigValues) => (v: number) => void;

type ControlsProps = {
  values: TrigValues;
  changeHandle: ChangeHandleType;
  changeGraphHandle: (pos: { x: number; y: number }) => void;
};

export default ControlsProps;
