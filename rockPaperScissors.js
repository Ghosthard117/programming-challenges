//  Create a program that calculates who wins the most rock games,
//  paper, scissors, lizard, spock.
//  - The result can be: "Player 1", "Player 2", "Tie" (tie)
//  - The function receives a list containing pairs, representing each move.
//  - The pair can contain combinations of "🗿" (rock), "📄" (paper),
//  "✂️" (scissors), "🦎" (lizard) or "🖖" (spock).
//  - Example. Input: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Result: "Player 2."
//  - You must look for information on how to play with these 5 possibilities.

// Victory conditions
const winningCombinations = {
  scissors: ['Spock', 'Rock'],
  paper: ['Lizard', 'Scissors'],
  rock: ['Paper', 'Spock'],
  lizard: ['Rock', 'Scissors'],
  Spock: ['Lizard', 'Paper']
}

// Possible states
const gameState = ['Winner', 'Defeated', 'Tie']

// Results
const results = {
  Player1: 0,
  Player2: 0,
  Tie: 0
}

// Function to calculate winner based on moves played and return string representation
function game(arrPlays) {
  for(let i = 0; i < arrPlays.length; i++) {
    let Player1 = arrPlays[i][0]
    let Player2 = arrPlays[i][1]

    if(Player1 === Player2) {
      results.Tie++
    } else if(winningCombinations[Player1]) {
      results.Player2++
    } else {
      results.Player1++
    }
  }
  
  if(results.Player1 > results.Player2) {
    console.log('Winner: Player 1')
    console.log(`Results: Player1 = ${results.Player1}`)
  } else if (results.Player1 < results.Player2){
    console.log('Winner: Player 2')
    console.log(`Results: Player2 = ${results.Player2}`)
  } else {
    console.log(`Tie: Player 1 = ${results.Player1}, Player 2 = ${results.Player2}`)
  }
}


const plays = [
  ['Lizard', 'Lizard'],
  ['Spock', 'Paper'],
  ['Lizard', 'Scissors'],
  ['Scissors', 'Scissors'],
  ['Rock', 'Rock'],
  ['Rock', 'Scissors'],
  ['Paper', 'Paper'],
  ['Lizard', 'Paper'],
  ['Spock', 'Spock'],
  ['Rock', 'Rock'],
  ['Rock', 'Scissors']
]

game(plays)
