import { useReducer, useState } from "react";
import ControlsProps, { TrigValues } from "../types/ControlsProps";

const initialState = {
  radians: 0,
  degrees: 0,
  sin: 0,
  cos: 1,
  x: 1,
  y: 0,
};

const sinActionToState = (state: TrigValues, sin: number) => {
  const a = Math.asin(sin);
  const cos = Math.cos(a) * (state.cos >= 0 ? 1 : -1);
  return {
    radians: a,
    degrees: (a * 180) / Math.PI,
    cos,
    sin,
    x: 1,
    y: 0,
  };
};
const cosActionToState = (state: TrigValues, cos: number) => {
  const a = Math.acos(cos);
  const sin = Math.sin(a) * (state.sin >= 0 ? 1 : -1);
  return {
    radians: a,
    degrees: (a * 180) / Math.PI,
    cos,
    sin,
    x: 1,
    y: 0,
  };
};

const reducer = (
  state: TrigValues,
  action: { type: string; value: number }
) => {
  const type = action.type as keyof TrigValues;
  if (type === "sin") {
    return sinActionToState(state, action.value);
  }
  if (type === "cos") {
    return cosActionToState(state, action.value);
  }
  if (type === "degrees") {
  }

  return state;
};

const useCircleProps = (): ControlsProps => {
  const [values, dispatch] = useReducer(reducer, initialState);

  const changeHandle = (k: keyof TrigValues) => (v: number) => {
    dispatch({ type: k, value: v });
  };

  const p: ControlsProps = {
    values,
    changeHandle,
  };
  return p;
};

export default useCircleProps;
