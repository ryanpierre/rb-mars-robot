import { Grid } from ".";

describe("Grid", () => {
  it("initialises with the provided array of known Scents", () => {
    const grid = new Grid(3, 2, [{ x: 3, y: 0, d: 0 }]);

    expect(grid.boundaries).toEqual({ xMin: 0, xMax: 3, yMin: 0, yMax: 2 });
    expect(grid.scents).toEqual([{ x: 3, y: 0, d: 0 }]);
  });

  it("ensures a move within the boundaries is valid", () => {
    const grid = new Grid(3, 2);

    expect(grid.validate(2, 2)).toEqual(true);
  });

  it("ensures a move out of bounds with no adjacent scents is valid", () => {
    const grid = new Grid(3, 2);

    expect(grid.validate(4, 2)).toEqual(true);
  });

  it("ensures a move out of bounds from a previous, adjacent scent is not valid", () => {
    const grid = new Grid(3, 2, [{ x: 3, y: 2, d: 0 }]);

    expect(grid.validate(3, 3)).toEqual(false);
  });

  it("validates whether a given position is within the boundaries", () => {
    const grid = new Grid(3, 2);

    expect(grid.isWithinBoundaries(4, 2)).toEqual(false);
  });

  it("validates whether a given position is not within the boundaries", () => {
    const grid = new Grid(3, 2);

    expect(grid.isWithinBoundaries(3, 2)).toEqual(true);
  });

  it("add new scents to the grid", () => {
    const grid = new Grid(3, 2);

    grid.addScent({ x: 3, y: 2, d: 0 });

    expect(grid.scents).toEqual([{ x: 3, y: 2, d: 0 }]);
  });

  it("doesn't add duplicate scents to the grid", () => {
    const grid = new Grid(3, 2, [{ x: 3, y: 2, d: 0 }]);

    grid.addScent({ x: 3, y: 2, d: 0 });

    expect(grid.scents).toEqual([{ x: 3, y: 2, d: 0 }]);
  });
});
