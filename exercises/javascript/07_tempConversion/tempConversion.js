const ftoc = function (num) {
  return +((num - 32) * (5 / 9)).toFixed(1);
};

const ctof = function (num) {
  return +((num * (9 / 5)) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
