// Create a program that finds and displays all pairs of prime numbers 
// twins in a specific rank.
// The program will receive the maximum rank as a positive integer
// - A pair of prime numbers is considered a twin if the difference between
// they is exactly 2. 
// For example (3,5), (11, 13)
// - Example: Rank 14
// (3,5), (5,7), (11,13)

function isPrime(number) {
  if (number < 2) {
    return false
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

function getTwins(limit) {
  let twinPairs = []
  // Loop through each number up to limit/2 + 1 since we only need half
  for (let i = 0; i <= limit; i++) {
    if (isPrime(i) && isPrime(i + 2)) {
      twinPairs.push([i, i + 2])
    }
  }
  return twinPairs
}

console.log(getTwins(14))