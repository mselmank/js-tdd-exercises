const { secondLargest } = require("./second-largest");
describe("Given an array of N qty of numbers", () => {
  it("should find the second largest number into an array", () => {
    const numbers = [2, 0, 23, 0, 57, 1, 230];

    const output = secondLargest(numbers);

    expect(output).toEqual(57);
  });
});
