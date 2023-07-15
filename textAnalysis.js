// Create a program that parses text and get:
// - Total number of words.
// - Average length of words.
// - Number of sentences of the text (every time a point appears).
// - Find the longest word.
// All this using a single loop

function textAnalysis(text) {
  let numberOfWords = 0
  let totalLength = 0
  let numberOfSentences = 0
  let longestWord = ''

  let currentWord = ''
  let currentWordLength = 0

  for (let i = 0; i < text.length; i++) {
    const character = text[i]

    if (character !== ' ' && character !== '.') {
      currentWord += character
      currentWordLength++
    }

    if (character === ' ' || i === text.length -1) {
      if (currentWord !== ''){
        numberOfWords++
        totalLength += currentWordLength

        if (currentWordLength > longestWord.length) {
          longestWord = currentWord
        }

        currentWord = ''
        currentWordLength = 0
      }
    }
    
    if (character === '.') {
      numberOfSentences++
    }
  }

  const averageLength = totalLength / numberOfWords

  console.log(`Total number of words: ${numberOfWords}`)
  console.log(`Average words length: ${averageLength}`)
  console.log(`Number of sentences: ${numberOfSentences}`)
  console.log(`Longest word: ${longestWord}`)
}

textAnalysis('HTTP stands for Hypertext Transfer Protocol. It is an application protocol that is used for transmitting hypermedia documents, such as HTML, over the Internet.')