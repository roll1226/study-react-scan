import { useCallback, useReducer } from "react";
import { Button } from "~/components/Button";

const TYPES = {
  ADD: "add",
  SUB: "sub",
  MUL: "mul",
  DIV: "div",
} as const;
type TYPE = (typeof TYPES)[keyof typeof TYPES];

const reducer = (state: number, action: { type: TYPE }) => {
  switch (action.type) {
    case TYPES.ADD:
      return state + 1;
    case TYPES.SUB:
      return state - 1;
    case TYPES.MUL:
      return state * 2;
    case TYPES.DIV:
      return state / 2;
    default:
      const _: never = action.type;
      return state;
  }
};

export const ButtonGroup = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleAdd = useCallback(() => dispatch({ type: TYPES.ADD }), []);
  const handleSub = useCallback(() => dispatch({ type: TYPES.SUB }), []);
  const handleMul = useCallback(() => dispatch({ type: TYPES.MUL }), []);
  const handleDiv = useCallback(() => dispatch({ type: TYPES.DIV }), []);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <p>Count: {count}</p>
      <Button onClick={handleAdd}>Add</Button>
      <Button onClick={handleSub}>Subtract</Button>
      <Button onClick={handleMul}>Multiply</Button>
      <Button onClick={handleDiv}>Divide</Button>
    </div>
  );
};
