const {
  fullName,
  isPalindrome,
  getCercumference,
  getArea,
} = require("./index");

//  fullname positive
test("fullname Abhi , Mane to equal Abhi Mane", () => {
  expect(fullName("Abhi", "Mane")).toBe("Abhi Mane");
});
test("fullname John , snow to equal Abhi Mane", () => {
  expect(fullName("John", "Snow")).toBe("John Snow");
});
test("fullname Arya , Stark to equal Arya Stark", () => {
  expect(fullName("Arya", "Stark")).toBe("Arya Stark");
});

// Negative fullName

test("fullname Sameer , Dubey to equal Sameer Dubey", () => {
  expect(fullName("Sameer", "Dubey")).not.toBe("sameer dubey");
});
test("fullname sanmit , bansode to equal sanmit bansode", () => {
  expect(fullName("sanmit", "bansode")).not.toBe("Sanmit Bansode");
});
test("fullname Gauri , Mane to equal Gauri Mane", () => {
  expect(fullName("Gauri", "Mane")).not.toBe("gauri mane");
});

//  isPalindrome positive

test("isPalindrome 1331 to equal 1331", () => {
  expect(isPalindrome(1331)).toBe(true);
});
test("isPalindrome 121 to equal 121", () => {
  expect(isPalindrome(121)).toBe(true);
});
test("isPalindrome 43534 to equal 43534", () => {
  expect(isPalindrome(43534)).toBe(true);
});
test("isPalindrome 10001 to equal 10001", () => {
  expect(isPalindrome(10001)).toBe(true);
});
test("isPalindrome 555 to equal 555", () => {
  expect(isPalindrome(555)).toBe(true);
});

// Negaitive  isPalindrome

test("isPalindrome 555 to equal 555", () => {
  expect(isPalindrome(555)).not.toBe(false);
});
test("isPalindrome 1991 to equal 1991", () => {
  expect(isPalindrome(1991)).not.toBe(false);
});
test("isPalindrome 141 to equal 141", () => {
  expect(isPalindrome(141)).not.toBe(false);
});
test("isPalindrome 12321 to equal 12321", () => {
  expect(isPalindrome(12321)).not.toBe(false);
});
test("isPalindrome 23432 to equal 23432", () => {
  expect(isPalindrome(23432)).not.toBe(false);
});

// Getcircumstance positive
test("getCercumference 4 to equal 25.12", () => {
  expect(getCercumference(4)).toEqual(25.12);
});
test("getCercumference 10 to equal 62.8", () => {
  expect(getCercumference(10)).toEqual(62.800000000000004);
});
test("getCercumference 15 to equal 94.2", () => {
  expect(getCercumference(15)).toEqual(94.2);
});

//  GetCircumstance Negative

test("getCercumference 4 to equal 25.12", () => {
  expect(getCercumference(4)).not.toEqual(25);
});
test("getCercumference 15 to equal 94.2", () => {
  expect(getCercumference(15)).not.toEqual(94);
});
test("getCercumference 10 to equal 62", () => {
  expect(getCercumference(10)).not.toEqual(62);
});

//  GetArea Positive

test("getArea 10 to equal 314", () => {
  expect(getArea(10)).toEqual(314);
});
test("getArea 5 to equal 78.5", () => {
  expect(getArea(5)).toEqual(78.5);
});
test("getArea 15 to equal 706.5", () => {
  expect(getArea(15)).toEqual(706.5);
});

// getArea Negative
test("getArea 10 to equal 314", () => {
  expect(getArea(10)).not.toEqual(34);
});
test("getArea 5 to equal 314", () => {
  expect(getArea(5)).not.toEqual(34);
});
test("getArea 15 to equal 314", () => {
  expect(getArea(15)).not.toEqual(34);
});
