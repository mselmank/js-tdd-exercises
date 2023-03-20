const { getRepos } = require("./async-1");

describe("Given ", () => {
  it("gets a list of repositories names", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    return getRepos(url).then(function (result) {
      // assert
      expect(result).not.toContain("js-exercises");
      expect(result).toContain("dom-ajax-repo");
    });
  });
});
