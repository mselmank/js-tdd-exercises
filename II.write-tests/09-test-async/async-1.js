const fetch = require("node-fetch");

// const getRepos = (repoName)=> {
//   return fetch(repoName)
//     .then(data => data.json())
//     .then(function(response) {
//       return response.map(function(rep) {
//         return rep.name;
//       });
//     });
// };

const getRepos = function (repoName) {
  try {
    return fetch(repoName)
      .then((data) => {
        return data.json();
      })
      .then(function (response) {
        return response.map(function (rep) {
          return rep.name;
        });
      });
  } catch (error) {
    return error;
  }
};

module.exports = { getRepos };
