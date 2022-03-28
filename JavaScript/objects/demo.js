// let pizza = {
//     sauce: "tomato",
//     cheese: "Mozzarella",
//     toppings: ["mushrooms"]
// }
// let pizzaCopy = pizza
// pizza["sauce"] = "pesto"
// console.log(pizzaCopy)

// // console.log(duplicate==pizza)
// // console.log(duplicate===pizza)

// let a = 1

// let b = a
// a = 2
// console.log(b)



function tournamentWinner(competitions, results) {
    // Write your code here.
      const wins = {}
      for (let i = 0; i < competitions.length; i++) {
          if (results[i] === 0) {
              if (wins.hasOwnProperty(competitions[i][1])) {
                  wins[competitions[i][1]] = wins[competitions[i][1]] + 3
              }
              else {
                  wins[competitions[i][1]] = 3
              }
          }
          else {
              if (wins.hasOwnProperty(competitions[i][0])) {
                  wins[competitions[i][0]] = wins[competitions[i][0]] + 3
              }
              else {
                  wins[competitions[i][0]] = 3
              }
          }
      }

      
    return Object.keys(wins).reduce((a,b) => wins[a] > wins[b] ? a : b);
  }

  let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]

  let results = [0,0,1]

  tournamentWinner(competitions, results)