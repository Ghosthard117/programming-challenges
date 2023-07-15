// Write a program that, given a number, checks and shows if it is prime,
// fibonacci and even.
// Examples:
// - With the number 2, it will tell us: "2 is prime, fibonacci and is even"
// - With the number 7, it will tell us: "7 is prime, it is not fibonacci and it is odd"

function prime(n) {
  if (n <= 1) {
    return false
  }
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0) {
      return false
    }
  }
  return true
}

const fibonacci = n => {
  const fib = [0, 1]

  for(let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1]
  }

  return fib[n]
}

function even(n) {
  return n % 2 === 0
}

function check(n) {
  let result = ''
  if(prime(n)) {
    result += `${n} it is prime. `
  } else {
    result += `${n} it isn't prime. `
  }
  
  if(fibonacci(n)) {
    result += `${n} it is fibonacci. `
  } else {
    result += `${n} it isn't fibonacci. `
  }

  if(even(n)) {
    result += `${n} it is even. `
  } else {
    result += `${n} it isn't even. `
  }

  console.log(result)
}

check(15)
check(6065)
check(16)
check(79)
check(50)
check(20)