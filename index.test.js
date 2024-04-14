const findMissingNumber = require("./index");

// Case from technical assessment
test("Test 1", () => {
  const arr = [5, 0, 1, 3, 2];
  expect(findMissingNumber(arr)).toBe(4);
});

// Case from technical assessment
test("Test 2", () => {
  const arr = [7, 9, 10, 11, 12];
  expect(findMissingNumber(arr)).toBe(8);
});

// Case with array sorted in ascending order and without missing number
test("Test 3", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(findMissingNumber(arr)).toBe(undefined);
});

// Case with array sorted in descending order and without missing number
test("Test 4", () => {
  const arr = [5, 4, 3, 2, 1];
  expect(findMissingNumber(arr)).toBe(undefined);
});

// Case with array sorted in descending order and with missing number
test("Test 5", () => {
  const arr = [5, 4, 3, 2, 1];
  expect(findMissingNumber(arr)).toBe(undefined);
});

// Case with unsorted array and without missing number
test("Test 6", () => {
  const arr = [5, 3, 1, 2, 6, 4];
  expect(findMissingNumber(arr)).toBe(undefined);
});

// Case with two missing numbers
test("Test 7", () => {
  const arr = [7, 5, 6, 3, 1];
  expect(findMissingNumber(arr)).toBe(4);
});

// Case with the same numbers
test("Test 8", () => {
  const arr = [1, 1, 1, 1, 1];
  expect(findMissingNumber(arr)).toBe(undefined);
});
