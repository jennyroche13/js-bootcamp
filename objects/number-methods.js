let num = 13.914

// console.log(num.toFixed(2))
// console.log(Math.round(num))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNum)

// Challenge area
// 1 - 5; if correct, true; if incorrect, false

function makeGuess(number) {
  let min = 1
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min +1)) + min
  console.log(randomNum)
  if(randomNum === number) {
    console.log('true')
  }
  if(randomNum !== number) {
    console.log('false')
  }
}
makeGuess(2)