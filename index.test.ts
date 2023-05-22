import { Interpreter } from "./lib/interpreter";

const SAMPLE_DATA = `5 3\n1 1 E\nRFRFRFRF\n\n3 2 N\nFRRFLLFFRRFLL\n\n0 3 W\nLLFFFLFLFL`;

describe("Main", () => {
  it("passes the sample integration test", () => {
    const session = new Interpreter();
    const robots = session.parseInput(SAMPLE_DATA);
    const output = Interpreter.reportRobotPositions(robots);

    expect(output).toEqual("1 1 E\n3 3 N LOST\n2 3 S");
  });
});
