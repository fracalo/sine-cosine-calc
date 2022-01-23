import { GraphMutableValues, TrigValuesKeys } from "./ControlsProps";

type GraphMoveAction = { type: "x_y"; value: { x: number; y: number } };
type ActionTypes = { type: TrigValuesKeys; value: number } | GraphMoveAction;

export default ActionTypes;
