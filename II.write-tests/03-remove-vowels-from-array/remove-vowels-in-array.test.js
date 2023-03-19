const {
  removeVowelsForWords,
} = require("../../II.write-tests/03-remove-vowels-from-array/remove-vowels-in-array");

describe("remove vowels from all words in array", () => {
  it("Should remove voewls from array", () => {
    // Arrange
    const input = ["Irina", "Etza", "Daniel"];
    const expected = ["rn", "tz", "Dnl"];
    // Act
    const result = removeVowelsForWords(input);
    // Assert
    expect(result).toEqual(expected);
    // Assert
  });
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
