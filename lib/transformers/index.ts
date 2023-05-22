import { Position } from "../instruction";

export const rotateClockwise = (p: Position) => {
  return { ...p, d: (p.d + 1) % 4 };
};

export const rotateCounterClockwise = (p: Position) => {
  return { ...p, d: p.d - 1 >= 0 ? p.d - 1 : p.d + 3 };
};
