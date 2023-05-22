export enum Direction {
  N = 0,
  E = 1,
  S = 2,
  W = 3,
}

export interface Position {
  x: number;
  y: number;
  d: Direction;
}

export const getDirection = (directionString: string) => {
  switch (directionString) {
    case "N":
      return Direction.N;
    case "E":
      return Direction.E;
    case "S":
      return Direction.S;
    case "W":
      return Direction.W;
    default:
      return -1;
  }
};
