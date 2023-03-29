const { fizzbuzz } = require("./fizz-buzz");

describe("Given a function called fizzbuzz", () => {
  it("Should return print 1 ", () => {
    //Arrange
    const input = 1;
    const expected = "1";

    //Act
    const result = fizzbuzz(input);

    //Assert
    expect(result).toEqual(expected);
  });

  it("Should prints 1,2", () => {
    //Arrange
    const input = 2;
    const expected = "1,2";
    //Act
    const result = fizzbuzz(input);
    //Assert
    expect(result).toEqual(expected);
  });

  it("Should return string '1,2,Fizz', given the input=3", () => {
    //arrage
    const input = 3;
    const expected = "1,2,Fizz";
    //act
    const result = fizzbuzz(input);
    //assert
    expect(result).toEqual(expected);
  });
});
