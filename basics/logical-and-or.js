let temp = 65

if (temp >= 60 && temp <= 90) {
  console.log('it is pretty nice out')
} else if (temp <= 0 || temp >= 120) {
  console.log('do not go outside')
} else {
  console.log('do what you want')
}

// Challenge are
let isGuestOneVegan = false
let isGuestTwoVegan = false

// are both vegan? only offer up vegan dishes
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('try the tofu')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('here are some vegan and meat options')
} else {
  console.log('eat everything')
}
// at least one vegan? make sure to offer up some vegan options

// else, offer up anything on the menu