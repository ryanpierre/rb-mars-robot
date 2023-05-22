import { getDirection } from ".";

describe("Position", () => {
  describe("getDirection", () => {
    it("should return -1 if an invalid direction is provided", () => {
      const direction = getDirection("Q");
      expect(direction).toEqual(-1);
    });
  });
});
