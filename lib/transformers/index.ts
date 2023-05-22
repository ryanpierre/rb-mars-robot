import { Position } from "../instruction";

export const rotateClockwise = (p: Position) => {
  return { ...p, d: (p.d + 1) % 4 };
};
