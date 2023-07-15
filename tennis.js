//  Write a program that shows how a tennis game takes place and who has won it.
//  The program will receive a sequence made up of "P1" (Player 1) or "P2" (Player 2), depending on who
//  Earn every game point.
//  - The scores of a game are "Love" (zero), 15, 30, 40, "Deuce" (tie), advantage.
//  - Before the sequence [P1, P1, P2, P2, P1, P2, P1, P1], the program would show the following:
//  15-Love
//  30-Love
//  30 - 15
//  30 - 30
//  40 - 30
//  Two
//  Advantage P1
//  Has won the P1
//  - If you want, you can control errors in data entry.
//  - Consult the rules of the game if you have doubts about the point system.

const scores = ["Love", 15, 30, 40],
annotations = ["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]

const players = {
  player1 : 0,
  player2 : 0
}

function game(annotations) {
  for(point in annotations) {
    if(annotations[point] === "P1") {
      players.player1 += 1
    } else if(annotations[point] === "P2") {
      players.player2 += 1
    }
    showScore()
  }
}

function showScore() {
  const p1 = scores[players.player1],
  p2 = scores[players.player2]

  if(p1 && p2 < 40 || p1 && p2 === 'Love') {
    console.log(`player 1: ${p1} - player 2: ${p2}`);
  } 
  else if(p1 && p2 === 40) {
    console.log(`player 1: ${p1} - player 2: ${p2}  DEUCE`);
  } 
  else if(players.player1 === 4 || players.player2 === 4) {
    let lead = players.player1 > players.player2 
    ? 'Player 1' 
    : 'Player 2'
    console.log(`Advantage to: ${lead}`);
  } 
  else  if(players.player1 === 5 || players.player2 === 5) {
    let winner = players.player1 >= players.player2
    ? 'Player 1'
    : 'Player 2'
    console.log(`${winner} Win!`);
  }
}

game(annotations)
// console.log(players);
