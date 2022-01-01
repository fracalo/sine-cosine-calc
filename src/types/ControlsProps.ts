export type TrigValues = {
  radians: number;
  degrees: number;
  sin: number;
  cos: number;
};

type ControlsProps = {
  values: TrigValues;
  changeHandle: (k: keyof TrigValues) => (v: number) => void;
};

export default ControlsProps;
