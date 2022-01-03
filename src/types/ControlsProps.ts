export type ControlMutableValuesKeys = "radians" | "degrees" | "sin" | "cos";

export type ControlMutableValues = Record<ControlMutableValuesKeys, number>;
export type ControlInputProps = {
  inputProps: {
    min: number;
    max: number;
    step: number;
  };
  toFixedVal: number;
};

export type TrigValues = ControlMutableValues & {
  x: number;
  y: number;
};

export type ChangeHandleType = (k: keyof TrigValues) => (v: number) => void;

type ControlsProps = {
  values: TrigValues;
  changeHandle: ChangeHandleType;
};

export default ControlsProps;
