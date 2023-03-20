const { getRepos } = require("./async-2");
const { fetcher } = require("./fetcher");
jest.mock("./fetcher");

describe("Given a function called getRepos", () => {
  it("Should return a list of repositories names", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    fetcher.mockResolvedValue([{ name: "js-exercises" }]);

    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("js-exercises");
    });
  });
});

// test("a more deterministic test", function () {});
