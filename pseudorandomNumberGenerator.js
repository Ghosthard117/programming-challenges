// Creates a pseudorandom number generator between 0 and 100.
// - You cannot use any "random" (or similar) function of the
// selected programming language.
// It's more complicated than it seems...

// how Creates a pseudorandom number generator between 0 and 100 without use any random?

function randomPseudo() {
  const random = new Date()
  return random.getMilliseconds() % 101;
}

console.log(randomPseudo())// example output: 23