import { moveForward, rotateClockwise, rotateCounterClockwise } from ".";

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
  describe("moveForward", () => {
    it("increases y by 1 when direction is 0", () => {
      const position = { x: 0, y: 0, d: 0 };
      expect(moveForward(position)).toEqual({ x: 0, y: 1, d: 0 });
    });
    it("increases x by 1 when direction is 1", () => {
      const position = { x: 0, y: 0, d: 1 };
      expect(moveForward(position)).toEqual({ x: 1, y: 0, d: 1 });
    });
    it("decreases y by 1 when direction is 2", () => {
      const position = { x: 0, y: 1, d: 2 };
      expect(moveForward(position)).toEqual({ x: 0, y: 0, d: 2 });
    });
    it("decreases x by 1 when direction is 3", () => {
      const position = { x: 1, y: 0, d: 3 };
      expect(moveForward(position)).toEqual({ x: 0, y: 0, d: 3 });
    });
  });
});
