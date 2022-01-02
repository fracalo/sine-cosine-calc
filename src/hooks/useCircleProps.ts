import { useState } from "react";
import ControlsProps, { TrigValues } from "../types/ControlsProps";

const useCircleProps = (): ControlsProps => {
  const [values, setValues] = useState<TrigValues>({
    radians: 6,
    degrees: 6,
    sin: 6,
    cos: 6,
  });
  const changeHandle = (k: keyof TrigValues) => (v: number) => {
    const o = {
      ...values,
      [k]: v,
    };
    setValues(o);
    console.log(k, v, "and o is ", o);
  };

  const p: ControlsProps = {
    values,
    changeHandle,
  };
  return p;
};

export default useCircleProps;
