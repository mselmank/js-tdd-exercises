const sales = (carsSold) => {
  if (!Array.isArray(carsSold)) throw new Error("array with invalid format");

  const result = carsSold.reduce((acc, { make, price }) => {
    if (acc[make]) {
      acc[make] += price;
    } else {
      acc[make] = price;
    }
    return acc;
  }, {});
  return result;
};

module.exports = {
  sales,
};
