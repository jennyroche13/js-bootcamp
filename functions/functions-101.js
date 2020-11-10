// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log('Welcome user!')
}

greetUser()

let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)

// Challenge area

// convertFahrenheitToCelsius
let convertF2C = function (temp) {
  let celsius = (temp - 32) * 5/9
  return celsius
}

// Call a couple of times (32 -> 0) (68 -> 20)
let temp1 = convertF2C(32)
let temp2 = convertF2C(68)

// Print converted values
console.log(temp1)
console.log(temp2)
