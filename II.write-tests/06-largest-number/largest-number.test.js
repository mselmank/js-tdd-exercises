const { getLargestNumber } = require("./largest-number.js");

describe("given the getLargestNumber function", () => {
  it("given the input [3, 21, 88, 4, 36] when it calls the function will return 88 and keep the original array ", () => {
    // Arrange
    const input = [3, 21, 88, 4, 36];
    const expected = 88;
    // Act
    const result = getLargestNumber(input);

    expect(result).toEqual(expected);
  });
  it("Should throw an error when the parameter received is undefined ", () => {
    // Arrange

    const expected = () => getLargestNumber(undefined);

    // Act & Assert

    expect(expected).toThrow("Invalid param");
  });
});

// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
