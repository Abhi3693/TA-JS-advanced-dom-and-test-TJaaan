function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isPalindrome(val) {
  let reverseVal = val.toString().split("").reverse();
  let final = Number(reverseVal.join(""));
  return val === final;
}

function getCercumference(radious) {
  return 2 * 3.14 * radious;
}

function getArea(radious) {
  return 3.14 * radious * radious;
}

module.exports = {
  fullName,
  isPalindrome,
  getCercumference,
  getArea,
};
