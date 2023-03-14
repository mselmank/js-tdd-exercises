const { removeMiddle } = require("./remove-middle");
describe("Given an array of strings ", () => {
  it("should remove middle string of given array", () => {
    const words = ["mouse", "giraffe", "queen", "window", "bottle"];

    const expectedWords = ["mouse", "giraffe", "window", "bottle"];
    const expectedOutput = ["queen"];

    const output = removeMiddle(words);

    expect(output).toEqual(expectedOutput);
    expect(words).toEqual(expectedWords);
  });
});
