// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the string

const average = (numbers) => {
  if (!Array.isArray(numbers)) throw new Error("Invalid parameter");
  const filteringNumbers = numbers.filter((num) => typeof num === "number");
  const reduceNumbers =
    filteringNumbers.reduce((total, currentValue) => total + currentValue) /
    filteringNumbers.length;
  return reduceNumbers;
};
module.exports = { average };
