const { removeVowels } = require("./remove-vowels");

describe("Name of the group", () => {
  it("Should remove vowels from word", () => {
    // Arrange
    const word = "samuel";
    const expected = "sml";
    // Act
    const result = removeVowels(word);
    // Assert
    expect(result).toEqual(expected);
  });
});
