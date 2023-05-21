import { Instruction } from "."

describe("Instruction", () => {
    it("initialises with valid input", () => {
        const instruction = new Instruction("L")

        expect(instruction.command).toEqual("L")
    })
})