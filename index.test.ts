import { Interpreter } from "./lib/interpreter";
import { SAMPLE_DATA } from ".";

describe("Main", () => {
  it("passes the sample integration test", () => {
    const session = new Interpreter();
    const robots = session.parseInput(SAMPLE_DATA);
    const output = Interpreter.reportRobotPositions(robots);

    expect(output).toEqual("1 1 E\n3 3 N LOST\n2 3 S");
  });
});
