// multiple arguments
let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
  return `Name: ${name} - Score ${score}`
  // return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// challenge area
// a 25% tip on $40 would be $10
let getTotal = function (total, tipPercent = 0.2) {
  let percent = tipPercent * 100
  let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTotal(40, 0.25)
console.log(tip)

let name = 'Jenny'
let age = 12
console.log(`Hey, my name is ${name} I am ${age} years old`)