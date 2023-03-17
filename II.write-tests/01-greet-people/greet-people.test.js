const { greetPeople } = require("./greet-people");

describe("Name of the group", () => {
  it("should print list of names prefixed with hello", () => {
    // Arrange
    const mentors = ["Irina", "Ashleigh", "Etza"];

    const expected = ["Hello Irina", "Hello Ashleigh", "Hello Etza"];
    // Act
    const result = greetPeople(mentors);
    // Assert
    expect(result).toEqual(expected);
  });
});
