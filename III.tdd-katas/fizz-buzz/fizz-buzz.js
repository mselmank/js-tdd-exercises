const fizzbuzz = (n) => {
  if (typeof n !== "number") {
    throw new Error("number is not a number");
  }

  const newArray = Array.from({ length: n }, (_, i) => i + 1);
  const joinedArray = newArray.map((num) => {
    if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";

    if (num % 3 === 0) return "Fizz";

    if (num % 5 === 0) return "Buzz";
    return num;
  });
  return joinedArray.join(",");
};
module.exports = { fizzbuzz };

//   if (Number.isNan(number))
//     throw new Error("parameter number must be a number");

//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     let output = "";
//     if (i % 3 === 0) {
//       output += "Fizz";
//     }
//     if (i % 5 === 0) {
//       output += "Buzz";
//     }
//     // console.log(output || i);
//     if ((i % 5 !== 0 && i % 3 !== 0) || output === "") {
//       {
//         return (output = i);
//       }
//     }
//   }
