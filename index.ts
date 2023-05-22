import { Command } from "commander";
import { Interpreter } from "./lib/interpreter";

const program = new Command();

program
  .name("🦡 Red Badger Mars Robot Challenge 🦡")
  .description("A simple CLI for tracking the position of robots on mars")
  .version("1.0.0");

program
  .command("report")
  .description("determines the final position of a series of robots")
  .argument(
    "<data>",
    "the data string containing grid boundaries, initial positions, and instructions"
  )
  .action((data) => {
    try {
      const interpreter = new Interpreter();
      const unescapedData = JSON.parse(`"${data}"`);
      const robots = interpreter.parseInput(unescapedData);
      const output = Interpreter.reportRobotPositions(robots);
      console.log(output);
    } catch {
      console.log("Invalid data! Double check your input and try again");
    }
  });

program.parse();
