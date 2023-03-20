const { getEven } = require("./get-even-numbers");
describe("Given getEven function", () => {
  it("Should  expected: [22, 82, 4]; return by the input = [22,13,73,82,4]  ", () => {
    // Arrange
    const input = [22, 13, 73, 82, 4];
    const expected = [22, 82, 4];
    //Act
    const output = getEven(input);
    //Assert
    expect(output).toEqual(expected);
  });
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
