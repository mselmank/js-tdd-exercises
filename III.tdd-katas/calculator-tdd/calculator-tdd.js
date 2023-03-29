const add = (num) => {
  //   (num === typeof num) === "string" || num === "" ? (num = 0) : num;
  // };
  if ((num === typeof num) === "string" || num === "") {
    return (num = 0);
  } else {
    // Else si es que valida que es un numero.
    // return num.reduce((a, b) => {
    //   const number = num.match(/-?\d*\d/g);
    //   const amountNumbers = number.filter((num) => num <= 1000);
    //   if (amountNumbers === -1) {
    //     throw new Error("negatives not allowed: -1");
    //   }
    // });
  }
};

module.exports = { add };
