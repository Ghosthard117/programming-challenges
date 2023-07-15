// Calling an API is one of the most common tasks in programming.

// Implement an HTTP call to an API (whatever you want) and show its
// output via terminal. For example: Pokemon, Marvel...

function getFecthData(url) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status)
      }
      return response.json()
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
}

console.log(getFecthData('https://rickandmortyapi.com/api/character'));
