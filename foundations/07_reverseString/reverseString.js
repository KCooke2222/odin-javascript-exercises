const reverseString = function (string) {
  reversed = "";
  for (const c of string) {
    reversed = c + reversed;
  }

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
