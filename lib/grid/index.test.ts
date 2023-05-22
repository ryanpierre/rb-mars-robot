import { Grid } from ".";

describe("Grid", () => {
  it("should initialise with a provided boundary point", () => {
    const grid = new Grid(3, 2);

    expect(grid.boundaries).toEqual({ xMin: 0, xMax: 3, yMin: 0, yMax: 2 });
  });
  it("should initialise with the provided array of known Scents", () => {
    const grid = new Grid(3, 2, [{ x: 3, y: 0 }]);

    expect(grid.scents).toEqual([{ x: 3, y: 0 }]);
  });
});
