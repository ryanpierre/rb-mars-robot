import { rotateClockwise, rotateCounterClockwise } from ".";

describe("Transformers", () => {
  describe("rotateClockwise", () => {
    it("rotates a position clockwise", () => {
      const position = { x: 0, y: 0, d: 0 };
      expect(rotateClockwise(position)).toEqual({ x: 0, y: 0, d: 1 });
    });
    it("always ensures direction is within 0 and 3", () => {
      const position = { x: 0, y: 0, d: 3 };
      expect(rotateClockwise(position)).toEqual({ x: 0, y: 0, d: 0 });
    });
  });
  describe("rotateCounterClockwise", () => {
    it("rotates a position counter clockwise", () => {
      const position = { x: 0, y: 0, d: 3 };
      expect(rotateCounterClockwise(position)).toEqual({ x: 0, y: 0, d: 2 });
    });
    it("always ensures direction is within 0 and 3", () => {
      const position = { x: 0, y: 0, d: 0 };
      expect(rotateCounterClockwise(position)).toEqual({ x: 0, y: 0, d: 3 });
    });
  });
});
