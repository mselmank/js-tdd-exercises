const { verifyPassword } = require("./password-verifier");

describe("Given a function called verifyPassword", () => {
  it("should throw an error if password length is greater than 8", () => {
    // Arrange
    const password = "1234567Hl";
    // Act and Assert
    expect(() => verifyPassword(password));
  });
  it("should return an error if password is empty  ", () => {
    //Arrange
    const password = "";
    // Act and Assert
    expect(() => verifyPassword(password));
  });

  it("should return an error if password is null", () => {
    //Arrange
    const password = null;
    // Act and Assert
    expect(() => verifyPassword(password));
  });

  it("should throw an error if password do not have at least one uppercase", () => {
    // Arrange
    const password = "12345hola";

    // Act and Assert
    expect(() => verifyPassword(password))(
      "The password should be contain at least one uppercase"
    );
  });

  it("given the input 'PASSWORD1' it will contain lowercase error", () => {
    //arrange
    const password = "PASSWORD1";

    const expected = "password should have one lowercase letter at least";

    //act & assert
    expect(verifyPassword(password)).toContain(expected);
  });
});
