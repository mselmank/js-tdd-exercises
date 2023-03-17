const removeVowels = (word) => {
  return word.replace(/[aeiou]/gi, "");
};

module.exports = { removeVowels };

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
