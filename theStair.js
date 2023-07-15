// create a function that draws a stair based on its number of steps.
// - if the number is positive, it will be ascending form left to right.
// - if the number is negative, it will be descending from left to right.
// - if the number is zero, tow underscores (__) will be drawn
// example: 4
//         _
//       _|       
//     _|
//   _|
// _|

function generateStairs(number) {
  let steps = ''
  if (number > 0) {
    for (let i = 1; i <= number; i++) {
      steps += ' '.repeat(number - i) + '_|\n'
    }
  } else if (number < 0) {
    for (let i = -1; i >= number; i--) {
      steps += ' '.repeat(Math.abs(i) - 1) + '|_\n'
    }
  } else {
    steps = '__'
  }
  return steps
}

console.log(generateStairs(12))
console.log(generateStairs(-5))
console.log(generateStairs(0))