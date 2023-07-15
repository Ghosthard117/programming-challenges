// Create a small game that consists of guessing words in a maximum number of attempts:
// - The game starts proposing an incomplete random word
// - For example "m_ur_d_v", and the number of attempts you have left
// - The user can enter only one letter or one word (of the same length as
// the word to guess)
// - If you type a letter and get it right, that letter is displayed in the word. If it fails, it subtracts
// one to the number of attempts
// - If you write a resolution and hit it, the game ends, otherwise, one is subtracted
// to the number of attempts
// - If the try counter reaches 0, the player loses
// - The word must hide random letters, and can never start
// hiding more than 60%
// - You can use the words you want and the number of attempts you consider

// set of words
const wordsList = ['video', 'banana', 'games', 'guitar', 'music', 'board', 'ship', 'internet', 'networks', 'frontend']

// maximum of attempts
const maxAttempts = 4;

let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)]
let hideWord = hideWords(randomWord)

let attemptsRemaining = maxAttempts

function hideWords(word) {
  const hideI = Math.floor(Math.random() * word.length * 0.4)
  const hideF = Math.floor(Math.random() * (word.length - hideI))

  let hiddenWord = ''

  for (let i = 0; i < word.length; i++) {
    if(i >= hideI && i < hideF) {
      hiddenWord = hiddenWord + '_'
    } else {
      hiddenWord = hiddenWord + word[i]
    }
  }
  return hiddenWord
}

function showGame() {
  console.log(
    `Guess this word 
    ${hideWord}
    -
    You have ${attemptsRemaining} attempts remaining`
  )
}

function checkWin() {
  return randomWord === hideWord
}

function updateWord(letter) {
  let newHiddenWord = ''

  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      newHiddenWord = newHiddenWord + letter
    } else {
      newHiddenWord = newHiddenWord + hideWord[i]
    }
  }
  hideWord = newHiddenWord
}

async function play() {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

  while (attemptsRemaining > 0 && !checkWin()) {
    showGame()
    const answer = await question('Enter a letter or word: ')
    if (answer.length === 1) {
      if (randomWord.includes(answer)) {
        updateWord(answer)
      } else {
        attemptsRemaining = attemptsRemaining - 1
      }
    }else {
      if (answer === randomWord) {
        hideWord = randomWord
      } else {
        attemptsRemaining = attemptsRemaining - 1
      }
    }
  }

  if (checkWin()) {
    console.log(`¡Congratulations, You won!, The word was: ${randomWord}`)
  } else {
    console.log(`Oh noo, You failed!, The word was: ${randomWord}`)
  }

  readline.close()
}

function question(question) {
  return new Promise((resolve) => {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
    readline.question(question, (answer) => {
      resolve(answer.toLowerCase())
      readline.close
    })
  })
}

play()