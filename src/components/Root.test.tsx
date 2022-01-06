import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ActionTypes from "../types/ActionTypes";
import { ControlMutableValuesKeys, TrigValues } from "../types/ControlsProps";
import roundDecimal from "../util/roundDecimal";

import Root from "./Root";

const getInput = (labelTextRe: string) => {
  const re = new RegExp(labelTextRe);
  return () => {
    return screen.getByLabelText(re);
  };
};
const getNode: Record<ControlMutableValuesKeys, () => HTMLElement> = {
  sin: getInput("Sin"),
  cos: getInput("Cos"),
  degrees: getInput("Degrees"),
  radians: getInput("Radians"),
};

const checkStateChange = (x: {
  action: ActionTypes;
  state: Partial<TrigValues>;
}) => {
  const type = x.action.type as ControlMutableValuesKeys;
  const node = getNode[type]();
  //userEvent.type(node, `{selectAll}{delete}${String(x.action.value)}`);
  fireEvent.change(node, { target: { value: `${String(x.action.value)}` } });
  Object.entries(x.state).forEach((arg) => {
    const k = arg[0] as ControlMutableValuesKeys;
    const v = arg[1];
    const checkNode = getNode[k]();
    expect(checkNode).toHaveValue(v);
  });
};

/**
 *
 * @param stateAction an array of objects containing the action to launch and the snapshot of the state we expect
 */
const checkStateChanges = (
  stateAction: Array<{ action: ActionTypes; state: Partial<TrigValues> }>
) => {
  stateAction.forEach(checkStateChange);
  console.log("Check state changes in useCircleProps hook");
};

test("initial state", () => {
  render(<Root />);
  const sin = getNode.sin();
  const cos = getNode.cos();
  const deg = getNode.degrees();
  const radians = getNode.radians();
  expect(sin).toHaveValue(0);
  expect(cos).toHaveValue(1);
  expect(deg).toHaveValue(0);
  expect(radians).toHaveValue(0);
});

test("Set Sin to 1", () => {
  render(<Root />);
  const sin = getNode.sin();
  const cos = getNode.cos();
  const deg = getNode.degrees();
  const radians = getNode.radians();
  userEvent.type(sin, "1");
  expect(cos).toHaveValue(0);
  expect(deg).toHaveValue(90);
  const r = roundDecimal(Math.PI / 2, 5);
  expect(radians).toHaveValue(r);
});

test("Set degrees up to 180 with intermediate steps", () => {
  render(<Root />);
  checkStateChanges([
    {
      action: { type: "degrees", value: 45 },
      state: {
        cos: 0.707107,
        sin: 0.707107,
      },
    },
    {
      action: { type: "degrees", value: 75 },
      state: {
        cos: 0.258819,
        sin: 0.965926,
      },
    },
    {
      action: { type: "degrees", value: 90 },
      state: {
        cos: 0,
        sin: 1,
      },
    },
    {
      action: { type: "degrees", value: 135 },
      state: {
        cos: -0.707107,
        sin: 0.707107,
      },
    },
    {
      action: { type: "degrees", value: 180 },
      state: {
        cos: -1,
        sin: 0,
      },
    },
  ]);
});

test("Set Sin to -1 and then expect to rotate toward 3rd/4th sector", () => {
  render(<Root />);
  checkStateChanges([
    {
      action: { type: "degrees", value: 270 },
      state: {
        cos: 0,
        sin: -1,
        radians: 4.71239,
      },
    },
    {
      action: { type: "cos", value: -0.1 },
      state: {
        cos: -0.1,
        sin: -0.994987,
        radians: 4.61222,
      },
    },
    {
      action: { type: "cos", value: 0.1 },
      state: {
        cos: 0.1,
        sin: -0.994987,
        radians: 4.81256,
      },
    },
  ]);
});

test("Drive changes based on radians", () => {
  render(<Root />);
  checkStateChanges([
    {
      action: { type: "radians", value: Math.PI / 4 },
      state: {
        cos: 0.707107,
        sin: 0.707107,
        degrees: 45,
      },
    },
    {
      action: { type: "radians", value: Math.PI / 2 },
      state: {
        cos: 0,
        sin: 1,
        degrees: 90,
      },
    },
    {
      action: { type: "radians", value: (Math.PI / 4) * 3 },
      state: {
        cos: -0.707107,
        sin: 0.707107,
        degrees: 135,
      },
    },
    {
      action: { type: "radians", value: Math.PI },
      state: {
        cos: -1,
        sin: 0,
        degrees: 180,
      },
    },
    {
      action: { type: "radians", value: (Math.PI / 4) * 5 },
      state: {
        cos: -0.707107,
        sin: -0.707107,
        degrees: 225,
      },
    },
    {
      action: { type: "radians", value: (Math.PI / 2) * 3 },
      state: {
        cos: 0,
        sin: -1,
        degrees: 270,
      },
    },
    {
      action: { type: "radians", value: (Math.PI / 4) * 7 },
      state: {
        cos: 0.707107,
        sin: -0.707107,
        degrees: 315,
      },
    },
    {
      action: { type: "radians", value: Math.PI * 2 },
      state: {
        cos: 1,
        sin: 0,
        degrees: 360,
      },
    },
  ]);
});

test("Drive changes based on degrees", () => {
  render(<Root />);
  checkStateChanges([
    {
      action: { type: "degrees", value: 45 },
      state: {
        cos: 0.707107,
        sin: 0.707107,
        radians: roundDecimal(Math.PI / 4, 5),
      },
    },
    {
      action: { type: "degrees", value: 90 },
      state: {
        cos: 0,
        sin: 1,
        radians: roundDecimal(Math.PI / 2, 5),
        degrees: 90,
      },
    },
    {
      action: { type: "degrees", value: 135 },
      state: {
        cos: -0.707107,
        sin: 0.707107,
        radians: roundDecimal((Math.PI / 4) * 3, 5),
      },
    },
    {
      action: { type: "degrees", value: 180 },
      state: {
        cos: -1,
        sin: 0,
        radians: roundDecimal(Math.PI, 5),
      },
    },
    {
      action: { type: "degrees", value: 225 },
      state: {
        cos: -0.707107,
        sin: -0.707107,
        radians: roundDecimal((Math.PI / 4) * 5, 5),
        degrees: 225,
      },
    },
    {
      action: { type: "degrees", value: 270 },
      state: {
        cos: 0,
        sin: -1,
        radians: roundDecimal((Math.PI / 2) * 3, 5),
      },
    },
    {
      action: { type: "degrees", value: 315 },
      state: {
        cos: 0.707107,
        sin: -0.707107,
        radians: roundDecimal((Math.PI / 4) * 7, 5),
      },
    },
    {
      action: { type: "degrees", value: 360 },
      state: {
        cos: 1,
        sin: 0,
        radians: roundDecimal(Math.PI * 2, 5),
      },
    },
  ]);
});
