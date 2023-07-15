//  Write a program that receives a text and transforms natural language into
//  "hacker language" (actually known as "leet" or "1337"). this language
//  is characterized by substituting alphanumeric characters.
//  - Use this table (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
//  with the alphabet and numbers in "leet".
//  (Use the first option of each transformation. For example "4" for the "a")

const equal =  {
  'a': '4',
  'b': 'I3',
  'c': '[',
  'd': ')',
  'e':  '3',
  'f': '|=',
  'g': '&',
  'h': '#',
  'i': '1',
  'j': ':_|',
  'k': '>|',
  'l':'1',
  'm': '/\\/\\',
  'n': '^/',
  'o': '0',
  'p': '|*',
  'q': '(_,)',
  'r': 'I2',
  's': '5',
  't': '7',
  'u': '(_)',
  'v': '\\/',
  'w': '\\/\\/',
  'x': '><',
  'y': 'j',
  'z': '2',
  '1': 'L',
  '2': 'R',
  '3': 'E',
  '4': 'A',
  '5': 'S',
  '6': 'b',
  '7': 'T',
  '8': 'B',
  '9': 'g',
  '0': 'o',
  '\u0020': ' '
}

function translate(string){
  let res = ''
  string = string.toLowerCase()

  for(letter in string) {
    res += equal[string[letter]]
  }
  return res

}

console.log(translate('Hacker'))