// create a function that is capable of transforming English to the basic language
// form the Star Wars universe: the "Aurebesh"
// - You can leave non-existent characters in "Aurebesh" untransformed
// - You also need to be able to translate in reverse

const dictionary = {
  a: "aurek",
  b: "besh",
  c: "cresh",
  d: "dorn",
  e: "esk",
  f: "forn",
  g: "grek",
  h: "herf",
  i: "isk",
  j: "jenth",
  k: "krill",
  l: "leth",
  m: "mern",
  n: "nern",
  o: "osk",
  p: "peth",
  q: "qek",
  r: "resh",
  s: "senth",
  t: "trill",
  u: "usk",
  v: "vev",
  w: "wesk",
  x: "xesh",
  y: "yirt",
  z: "zerek",
  ch: "cherek",
  ae: "enth",
  eo: "onith",
  kh: "krenth",
  ng: "nen",
  oo: "orenth",
  sh: "shen",
  th: "thesh"
}

function aurebeshTranslator(language, text) {
  let translatedText = ''
  if (language === 'en') {
    text.toLowerCase().split('').forEach(letter => {
      if (dictionary[letter]) {
        translatedText += dictionary[letter]
      } else {
        translatedText += letter
      }
    })
    console.log(translatedText)
  } else if (language === 'aure') {
    let word = text[0].toLowerCase()
    text.toLowerCase().split('').slice(1).forEach(letter => {
      if (dictionary[letter]) {
        word += letter
      } else {
        translatedText += letter
        word = ''
      }

      const value = Object.entries(dictionary).find(([key, value]) => value === word)
      if (value !== undefined) {
        translatedText += value[0]
        word = ''
      }
    })
    console.log(translatedText)
  }
}

aurebeshTranslator('en', 'Miguel')
aurebeshTranslator('aure', 'merniskgrekuskeskleth')