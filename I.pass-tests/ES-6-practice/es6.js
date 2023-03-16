// Turn this function into an arrow function
const arrow = () => {
  return "es6 is awesome!";
};

// //Use the es6 syntax for default parameter
// function defaultParameter(name) {
//   var name = name || "sam";
//   return name;
// }
//⁡⁢⁣⁣𝗨𝘀𝗲 𝘁𝗵𝗲 𝗲𝘀𝟲 𝘀𝘆𝗻𝘁𝗮𝘅 𝗳𝗼𝗿 𝗱𝗲𝗳𝗮𝘂𝗹𝘁 𝗽𝗮𝗿𝗮𝗺𝗲𝘁𝗲𝗿⁡
const defaultParameter = (name = "sam") => {
  return name;
};
// // Use the spread operator to combine arr1 and arr2
// function combineArrays(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// ⁡⁢⁣⁣𝗨𝘀𝗲 𝘁𝗵𝗲 𝘀𝗽𝗿𝗲𝗮𝗱 𝗼𝗽𝗲𝗿𝗮𝘁𝗼𝗿 𝘁𝗼 𝗰𝗼𝗺𝗯𝗶𝗻𝗲 𝗮𝗿𝗿𝟭 𝗮𝗻𝗱 𝗮𝗿𝗿𝟮⁡
const combineArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

// //use destructuring to return the object's cyf property
// function destructuring(obj) {
//   return obj.cyf;
// }
//⁡⁢⁣⁣𝘂𝘀𝗲 𝗱𝗲𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗶𝗻𝗴 𝘁𝗼 𝗿𝗲𝘁𝘂𝗿𝗻 𝘁𝗵𝗲 𝗼𝗯𝗷𝗲𝗰𝘁'𝘀 𝗰𝘆𝗳 𝗽𝗿𝗼𝗽𝗲𝗿𝘁𝘆⁡
const destructuring = (obj) => {
  const { cyf } = obj;
  return cyf;
};

// // use template literal to return a string with the sum of a and b
// function templateString(a, b) {
//   return "The sum is equal to " + (a + b).toString();
// }
// ⁡⁢⁣⁣𝘂𝘀𝗲 𝘁𝗲𝗺𝗽𝗹𝗮𝘁𝗲 𝗹𝗶𝘁𝗲𝗿𝗮𝗹 𝘁𝗼 𝗿𝗲𝘁𝘂𝗿𝗻 𝗮 𝘀𝘁𝗿𝗶𝗻𝗴 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝘀𝘂𝗺 𝗼𝗳 𝗮 𝗮𝗻𝗱 𝗯⁡
const templateString = (a, b) => {
  return `The sum is equal to ${(a + b).toString()}`;
};

module.exports = {
  arrow,
  defaultParameter,
  combineArrays,
  destructuring,
  templateString,
};
