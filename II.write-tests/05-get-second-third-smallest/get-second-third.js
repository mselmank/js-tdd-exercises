const secondThirdSmallest = (array) => {
  if (!Array.isArray(array)) throw new Error("Invalid parameter");
  const newArray = array.slice();
  newArray.sort((x, y) => x - y);
  return [newArray[1], newArray[2]];
};
const checkArray = (array) => {};

module.exports = { secondThirdSmallest };
