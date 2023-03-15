const { average } = require("./get-average");

describe("Given an array of numbers", () => {
  it("should throw average", () => {
    const numbers = [4, "-", 8, 11, "hello", "57", 0, 2];
    const expected = 5;
    const output = average(numbers);
    expect(output).toEqual(expected);
  });
});
