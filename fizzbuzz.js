//  - Write a program that displays on the console (with a print) the
//  numbers from 1 to 100 (both inclusive and with a line break between each print), substituting the following:
//  - Multiples of 3 for the word "fizz".
//  - Multiples of 5 for the word "buzz".
//  - Multiples of 3 and 5 at the same time for the word "fizzbuzz".

for(let i = 1; i<= 100; i++) {
  if(i % 3 === 0 && i % 5 === 0){
    console.log(`${i}: fizzbuzz`);
  }
  else if(i % 3 === 0) {
    console.log(`${i}: fizz`)
  } 
  else if (i % 5 === 0) {
    console.log(`${i}: buzz`)
  }
}