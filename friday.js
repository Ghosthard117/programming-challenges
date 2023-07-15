// Create a function that is capable of detecting if there is a Friday the 13th
// in the month and year indicated.
// - The function will receive the month and year and will return true or false.

const verifyFriday13 = (year, month) => {
  try {
    return new Date(year, month - 1, 13).getDay() === 5
  } catch (error) {
    return false
  }
}

console.log(verifyFriday13(2023, 10))