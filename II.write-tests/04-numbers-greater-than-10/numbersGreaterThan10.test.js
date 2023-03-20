const { largerThanTen } = require("./numbersGreaterThan10");

describe("Given a function that recieve an array of numbers", () => {
  it("Should return the numbers greater than 10", () => {
    //Arrange
    const input = [4, 10, 32, 9, 21];

    //Act
    const output = largerThanTen(input);

    //Assert
    expect(output).toEqual([32, 21]);
  });
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
