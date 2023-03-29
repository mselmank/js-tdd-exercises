const { add } = require("./calculator-tdd");
describe("Given a function called add", () => {
  it("Should return their sum given 0,1,2 numbers as a parameter ", () => {
    //arrange
    const input = "";
    //act
    const result = add(input);
    //assert
    expect(result).toBe(0);
  });
  it("Should return their sum given 0,1,2 numbers as a parameter ", () => {
    //arrange
    const input = -1;
    //act
    const result = add(input);
    //assert
    expect(result).toBe(0);
  });
});
