// I'm celebrating! I have published my first book:
// "Git and Github from scratch"
// Did you know that you can read information from Git adn GitHub form the big
// most programming languages?

// Create a program that reads the last 10 commits from this repository and displays:
// hash
// Author
// Message
// Date and time

// Example output:
// Commit 1 (most recent)|12345A| MoureDev | This is a commit | 04/24/2023 21:00

//It is allowed to use libraries that facilitate this task.

const repository = 'mouredev/retos-programacion-2023'

async function getCommits(repository, numberOfCommits) {
  try {
    const url = `https://api.github.com/repos/${repository}/commits`
    const response = await fetch(url)
    const data = await response.json()

    const commits = data.slice(0, numberOfCommits).map((commit, index) => ({
      commit: index + 1,
      Hash: commit.commit.tree.sha,
      Author: commit.commit.author.name,
      Message: commit.commit.message,
      Date: commit.commit.author.date
    }))

    commits.forEach(commit => {
      console.log(`Commit: ${commit.commit} | ${commit.Hash} | ${commit.Author} | ${commit.Message} | ${commit.Date}`)
    })
  } 
  catch (error) {
    console.error(error)
  }
}

getCommits(repository, 5)