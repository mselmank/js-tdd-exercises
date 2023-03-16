const paintShop = (cars) => {
  if (!Array.isArray(cars))
    throw new Error("The received argument is not an array");
  if (!typeof cars === "object")
    throw new Error("parameter provided is an object and must be an array");

  //We update the object
  const result = cars.map((car) => {
    if (car.make === "Ford") {
      return { ...car, colour: "Pink" };
    } else {
      return car;
    }
  });
  return result;
};

module.exports = { paintShop };
