import { Position } from "../grid";

export type TransformerFunction = (p: Position) => Position;

export const rotateClockwise: TransformerFunction = (p: Position) => {
  return { ...p, d: (p.d + 1) % 4 };
};

export const rotateCounterClockwise: TransformerFunction = (p: Position) => {
  return { ...p, d: p.d - 1 >= 0 ? p.d - 1 : p.d + 3 };
};

export const moveForward: TransformerFunction = (p: Position) => {
  switch (p.d) {
    case 0:
      return { ...p, y: p.y + 1 };
    case 1:
      return { ...p, x: p.x + 1 };
    case 2:
      return { ...p, y: p.y - 1 };
    case 3:
      return { ...p, x: p.x - 1 };
    default:
      return { ...p };
  }
};
