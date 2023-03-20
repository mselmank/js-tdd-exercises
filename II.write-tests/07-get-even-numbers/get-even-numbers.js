const getEven = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error("numbers must be an array");
  }
  return numbers.filter((number) => number % 2 === 0);
};

module.exports = { getEven };
