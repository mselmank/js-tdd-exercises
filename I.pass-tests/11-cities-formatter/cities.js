const formatCities = (capitals, transform) => {
  return capitals.map((c) => {
    return transform(c);
  });
};

module.exports = { formatCities };
