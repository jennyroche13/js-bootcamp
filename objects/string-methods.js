let name = 'Jenny'

// length property
//console.log(name.length)

// convert to upper case
//console.log(name.toUpperCase())

// includes method
let password = 'abc123password098'
//console.log(password.includes('password'))

// trim method
//console.log(name.trim())

// isValidPassword
// length is more than 8 and doesn't contain the word password

let isValidPassword = function(password) { 
  return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('alskdf'))  
console.log(isValidPassword('abc123!!jar'))
console.log(isValidPassword('abc123!!password'))