function findMissingNumber(arr) {
  const set = new Set(); // set of numbers in array
  let min = arr[0]; // minimum number in array

  for (let item of arr) {
    set.add(item);
    // find minimum number because it has no smaller number in sequence
    if (item < min) {
      min = item;
    }
  }

  for (let item of set) {
    // check if the number is not a minimum and if it has no smaller number in sequence
    if (item !== min && !set.has(item - 1)) {
      return item - 1;
    }
  }
}

module.exports = findMissingNumber;
