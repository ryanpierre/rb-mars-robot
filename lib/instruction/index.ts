import { Position } from "../grid";
import type { TransformerFunction } from "../transformers";
import {
  rotateClockwise,
  rotateCounterClockwise,
  moveForward,
} from "../transformers";

type InstructionTable = Record<string, TransformerFunction>;

const DEFAULT_INSTRUCTION_TABLE: InstructionTable = {
  L: rotateCounterClockwise,
  R: rotateClockwise,
  F: moveForward,
};

export class Instruction {
  private _command: TransformerFunction;

  private constructor(command: TransformerFunction) {
    this._command = command;
  }

  public get command() {
    return this._command;
  }

  public static create(
    input: string,
    instructionSet: InstructionTable = DEFAULT_INSTRUCTION_TABLE
  ) {
    if (!Object.keys(instructionSet).includes(input)) {
      throw new Error("Invalid command");
    }

    return new Instruction(instructionSet[input]);
  }
}
