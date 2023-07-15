// The new "The Legend of Zelda: Tears of the Kingdom" is now available!
// Create a program that draws a Triforce from "Zelda"
//made up of asterisks
// - You must indicate the number of rows of the triangles with a positive integer
// - Each triangle will calculate its major row using the 2n-1 formula

// Example: triforce 2
//    (*)
//   (***)
//  (*   *)
// (*** ***)

function drawTheTriforce(rows) {
  let blanks = 2 * rows - 1
  let start = 1
  const totalRows = rows * 2
  let triforce = ''

  // Draw top triangle
  for (let i = 0; i < rows; i++) {
    const spaces = ' '.repeat(blanks)
    const asterisks = '*'.repeat(start)
    triforce += spaces + asterisks + '\n'
    start += 2
    blanks--
  }

  start = 1
  let leftBlanks = blanks + rows

  // Draw lower left and lower right triangle
  for (let i = 0; i < totalRows / 2; i++) {
    const leftSpaces = ' '.repeat(blanks)
    const leftAsterisks = '*'.repeat(start)
    const rightSpaces = ' '.repeat(leftBlanks)
    const rightAsterisks = '*'.repeat(start)

    triforce += leftSpaces + leftAsterisks + rightSpaces + rightAsterisks + '\n' 

    start += 2
    blanks--
    leftBlanks -= 2
  }
  return triforce
}

console.log(drawTheTriforce(15))