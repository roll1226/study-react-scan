export const TYPES = {
  ADD: "add",
  SUB: "sub",
  MUL: "mul",
  DIV: "div",
} as const;

export type TYPE = (typeof TYPES)[keyof typeof TYPES];
