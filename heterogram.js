// Create 3 functions, each one in charge of detecting if a string of
// text is a heterogram, an isogram, or a pangram.
// - You must look for the definition of each of these terms.

// heterogram
function isHeterogram(str) {
  // Create an array of the characters in the string.
  const chars = str.split('');

  // Create a set of the characters in the string.
  const charSet = new Set(chars);

  // Return true if the string has more than one character in the set.
  return charSet.size > 1;
}
console.log(isHeterogram('yuxgtapooner'), isHeterogram('centrifuugado'), isHeterogram('luteranismo'), isHeterogram('H'))


// isogram
function isIsogram(str) {
  // Create an array of the characters in the string.
  const chars = str.split('');

  // Sort the characters in alphabetical order.
  chars.sort();

  // Check if any characters are repeated.
  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] === chars[i + 1]) {
      return true;
    }
  }

  // Return false if no characters are repeated.
  return false;
}
console.log(isIsogram('speak'), isIsogram('love'), isIsogram('rap rap'))


// pangram
function isPangram(str) {
  // Create an array of all the letters in the alphabet.
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // Create a set of all the letters in the string.
  const letterSet = new Set(str.split(''));

  // Check if the set contains all the letters in the alphabet.
  for (const letter of alphabet) {
    if (!letterSet.has(letter)) {
      return false;
    }
  }

  // Return true if the set contains all the letters in the alphabet.
  return true;
}
console.log(isPangram('The five boxing wizard quickly'))