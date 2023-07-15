// Create a function that receives a decimal number and transforms it to Octal
// and Hexadecimal.
// - It is not allowed to use functions of the programming language that
// perform those operations directly.

const decimalOctal = (decimal) => {
  let array_response = []
  let octal = ''

  while (decimal > 0) {
    array_response.push(decimal % 8)
    decimal = Math.floor(decimal / 8)
  }
  for (const i in array_response.reverse()) {
    octal += array_response[i]
  }
  return octal
};

const decimalToHexadecimal = (decimal) => {
    let array_response = []
    let hexadecimal = ''
    while (decimal > 0) {
        array_response.push(decimal % 16)
        decimal = Math.floor(decimal / 16)
    }
    for (const i in array_response.reverse()) {
        hexadecimal += array_response[i]
    }
    return hexadecimal
};

const decimalToHexadecimalAndOctal = (decimal) => {
    return `Hexadecimal is: ${decimalToHexadecimal(decimal)}, 
    Octal is: ${decimalOctal(decimal)}`
};

console.log(decimalToHexadecimalAndOctal(255))