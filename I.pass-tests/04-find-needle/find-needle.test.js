const { findNeedle } = require("./find-needle");

describe("Given an array find the word and index", () => {
  it("should find the index position given the word plant into array of strings", () => {
    const words = ["plant", "shelf", "arrow", "bird"];
    const expected = 0;
    const output = findNeedle(words, "plant");

    expect(output).toEqual(expected);
  });
  it("should find the index position given the word needle into array of strings", () => {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;
    const output = findNeedle(words, "needle");

    expect(output).toEqual(expected);
  });
});
