import { useState } from "react";
import ControlsProps, { TrigValues } from "../types/ControlsProps";

const useCircleProps = (): ControlsProps => {
  const [values, setValues] = useState<TrigValues>({
    radians: 0,
    degrees: 0,
    sin: 0,
    cos: 1,
    x: 1,
    y: 0,
  });
  const changeHandle = (k: keyof TrigValues) => (v: number) => {
    const o = {
      ...values,
      [k]: v,
    };
    setValues(o);
  };

  const p: ControlsProps = {
    values,
    changeHandle,
  };
  return p;
};

export default useCircleProps;
