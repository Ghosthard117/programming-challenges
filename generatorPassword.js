//   Write a program that is capable of generating passwords randomly.
//   You can configure to generate passwords with the following parameters:
//   - Length: Between 8 and 16.
//   - With or without lowercase letters.
//   - With or without capital letters.
//   - With or without numbers.
//   - With or without symbols.
//   (Being able to combine all these parameters between them)

const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z'],
uppercase = [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','Y','Z' ],
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
symbols = ['@','#','$','%','&','/','(',')','=','+','-','*','{','}','¿','?','|',',','.','_','[',']','-','!','°']

const configuration = {
  length : 15,
  uppercase : true,
  lowercase : true,
  numbers : true,
  symbols : true
}

function setPool() {
  let pool = []
  pool.push(lowercase)

  if(configuration.uppercase) {
    pool.push(uppercase)
  }

  if(configuration.numbers) {
    pool.push(numbers)
  }

  if(configuration.symbols) {
    pool.push(symbols)
  }

  return pool.reduce((ac, current) =>
    ac.concat(current), []
  )
}

function getRandomIndex(from, to) {
  const res = Math.floor(Math.random() * to)
  return res >= from 
  ? res
  : getRandomIndex(from, to)
}

function generatePassword(conf) {
  let password = ''
  const pool = setPool()
  pool.sort(() => Math.random() - 0.5)
  
  let currentLength = 1;
  if(conf.length >= 8 && conf.length <= 16) {
    while (currentLength <= conf.length) {
      currentLength++
      const position = getRandomIndex(0, pool.length)
      password += pool[position]
    }
  } else {
    console.log(`the length must be greater than or equal to 8, adn less than or equal to 16, the length is: ${conf.length}`)
  }

  return password
}

console.log(generatePassword(configuration))
