const { secondThirdSmallest } = require("./get-second-third");
describe("Given a function called secondThirdSmallest", () => {
  it("should return expected output [6, 8] from inpunt array input = [90, 5, 11, 8, 6]; ", () => {
    // Arrange
    const input = [90, 5, 11, 8, 6];
    const expected = [6, 8];

    // Act
    const result = secondThirdSmallest(input);

    // Assert

    expect(result).toEqual(expected);
  });
});

// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
