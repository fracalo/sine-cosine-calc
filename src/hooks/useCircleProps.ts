import { useCallback, useReducer } from "react";
import ActionTypes from "../types/ActionTypes";

import ControlsProps, {
  TrigValues,
  TrigValuesKeys,
} from "../types/ControlsProps";

const initialState = {
  radians: 0,
  degrees: 0,
  cos: 1,
  sin: 0,
  x: 1,
  y: 0,
};

const calculateRadiansFromSinCos = (sin: number, cos: number) => {
  let a = Math.asin(sin);
  if (cos > 0) {
    return sin > 0 ? a : Math.PI * 2 + a;
  }
  return Math.PI - a;
};

const actionSwitchMap: Record<
  TrigValuesKeys,
  (state: TrigValues, val: number) => TrigValues
> = {
  sin: (state: TrigValues, sin: number) => {
    const a = Math.asin(sin);
    const cos = Math.cos(a) * (state.cos >= 0 ? 1 : -1);
    const radians = calculateRadiansFromSinCos(sin, cos);
    const degrees = (radians * 180) / Math.PI;
    return {
      radians,
      degrees,
      cos,
      sin,
      x: cos,
      y: sin * -1,
    };
  },
  cos: (state: TrigValues, cos: number) => {
    const a = Math.acos(cos);
    const sin = Math.sin(a) * (state.sin >= 0 ? 1 : -1);
    const radians = calculateRadiansFromSinCos(sin, cos);
    const degrees = (radians * 180) / Math.PI;
    return {
      radians,
      degrees,
      cos,
      sin,
      x: cos,
      y: sin * -1,
    };
  },
  degrees: (state: TrigValues, degrees: number) => {
    const radians = (degrees * Math.PI) / 180;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    return {
      radians,
      degrees,
      cos,
      sin,
      x: cos,
      y: sin * -1,
    };
  },
  radians: (state: TrigValues, radians: number) => {
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    return {
      radians,
      degrees: (radians * 180) / Math.PI,
      cos,
      sin,
      x: cos,
      y: sin * -1,
    };
  },
  x: (state: TrigValues, x: number) => {
    return state;
  },
  y: (state: TrigValues, y: number) => {
    return state;
  },
};

const reducer = (state: TrigValues, action: ActionTypes) => {
  if (action.type === "x_y") {
    return graphMoveHandle(action.value);
  }
  const cb = actionSwitchMap[action.type];
  return cb(state, action.value);
};

const useCircleProps = (): ControlsProps => {
  const [values, dispatch] = useReducer(reducer, initialState);

  const changeHandle = useCallback(
    (k: TrigValuesKeys) => (v: number) => {
      dispatch({ type: k, value: v });
    },
    []
  );
  const changeGraphHandle = useCallback((value: { x: number; y: number }) => {
    dispatch({ type: "x_y", value });
  }, []);

  const p: ControlsProps = {
    values,
    changeHandle,
    changeGraphHandle,
  };
  return p;
};

function graphMoveHandle(params: { x: number; y: number }) {
  const { x, y } = params;
  const sin = y * -1;
  const cos = x;
  const radians = calculateRadiansFromSinCos(sin, cos);
  const degrees = (radians * 180) / Math.PI;
  return {
    radians,
    degrees,
    sin,
    cos,
    x,
    y,
  };
}

export default useCircleProps;
