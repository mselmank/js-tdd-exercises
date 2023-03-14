const { sumAddNumbers } = require("./add-numbers");

describe("Given the sumAllNumbers function", () => {
  it("should add all numbers ", () => {
    const numbers = [9, 23, 10, 3, 8];
    const expected = 53;
    const output = sumAddNumbers(numbers);

    expect(output).toEqual(expected);
  });
});
