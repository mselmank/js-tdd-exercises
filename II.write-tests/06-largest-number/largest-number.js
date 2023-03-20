const getLargestNumber = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Not implemented");
  }
  return Math.max(...array);
};

module.exports = { getLargestNumber };
