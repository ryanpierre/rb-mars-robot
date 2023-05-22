import { Grid } from ".";

describe("Grid", () => {
  it("initialises with a provided boundary point", () => {
    const grid = new Grid(3, 2);

    expect(grid.boundaries).toEqual({ xMin: 0, xMax: 3, yMin: 0, yMax: 2 });
  });
  it("initialises with the provided array of known Scents", () => {
    const grid = new Grid(3, 2, [{ x: 3, y: 0 }]);

    expect(grid.scents).toEqual([{ x: 3, y: 0 }]);
  });

  it("ensures a move within the boundaries is valid", () => {
    const grid = new Grid(3, 2);

    expect(grid.validate(2, 2)).toEqual(true);
  });

  it("ensures a move out of bounds with no adjacent scents is valid", () => {
    const grid = new Grid(3, 2);

    expect(grid.validate(4, 2)).toEqual(true);
  });

  it("ensures a move out of bounds from a previous scent is not valid", () => {
    const grid = new Grid(3, 2, [{ x: 3, y: 2 }]);

    expect(grid.validate(3, 3)).toEqual(false);
  });
});
