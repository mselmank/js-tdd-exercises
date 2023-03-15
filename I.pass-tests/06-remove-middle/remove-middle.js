const removeMiddle = (words) => {
  //⁡⁢⁣⁣𝗲𝘃𝗮𝗹𝘂𝗮𝗺𝗼𝘀 𝗾𝘂𝗲 𝘀𝗲𝗮 𝗱𝗲 𝘁𝗶𝗽𝗼 𝘀𝘁𝗿𝗶𝗻𝗴⁡
  //   return words.filter((arg) => typeof arg === "string");

  // alert(typeof {}); // object
  // alert(typeof []); // object (same)

  // alert(Array.isArray({})); // false

  // alert(Array.isArray([])); // true

  const middle = Math.floor(words.length / 2);

  return words.splice(middle, 1);
};
module.exports = {
  removeMiddle,
};

// recorrer el arreglo contar cuantas palabras contiene en arreglo y sacar el % si el resultado es 1 \
// modulo = Math.abs(num)
// debe ser numero impar la cantidad de strings en un arreglo
