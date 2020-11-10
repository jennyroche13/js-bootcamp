// global scope (convertF2c, temp1, temp2)
  // local scope (fahrenheit, celsius)
    // local scope (isFreezing)

let convertF2C = function (fahrenheit) {
  let celsius = (fahrenheit - 32) * 5/9

  if (celsius <= 0) {
    let isFreezing = true
  }

  return celsius
}

// Call a couple of times (32 -> 0) (68 -> 20)
let temp1 = convertF2C(32)
let temp2 = convertF2C(68)

// Print converted values
console.log(temp1)
console.log(temp2)