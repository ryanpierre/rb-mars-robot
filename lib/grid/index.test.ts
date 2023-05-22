import { Grid } from ".";

describe("Grid", () => {
  it("should initialise with a provided boundary point", () => {
    const grid = new Grid(3, 2);

    expect(grid.boundaries).toEqual({ xMin: 0, xMax: 3, yMin: 0, yMax: 2 });
  });
});
