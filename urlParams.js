// Given a URL with parameters, create a function that gets their values.
// You cannot use language operations that perform this task directly.
// Example: In the url https://retosdeprogramacion.com?year=2023&challenge=0
// parameters would be ["2023", "0"]

const url = new URL('https://retosdeprogramacion.com?year=2023&challenge=0')

function getParams(url) {
  const params = new URLSearchParams(url.search)
  return [...params.values()]
}
console.log(getParams(url));