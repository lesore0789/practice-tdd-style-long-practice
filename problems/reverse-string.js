module.exports = function reverseString(string) {
  // let arr = string.split("");
  // let reversed = arr.reverse();
  // return reversed.join("");

  if(typeof string !== "string") {
    throw new TypeError("Input needs to be a string")
  }

  return string.split('').reverse().join('')
};
