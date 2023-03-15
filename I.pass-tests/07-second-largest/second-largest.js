const secondLargest = (numbers) => {
  numbers.sort((a, b) => b - a);
  const secondLargest = numbers[1];
  return secondLargest;
};
module.exports = { secondLargest };
