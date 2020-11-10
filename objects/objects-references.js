let myAccount = {
  name: "Jenny",
  expenses: 0,
  income: 0
}

// addIncome
let addIncome = function(account, amount) {
  account.income = account.income + amount
}
// addExpense
let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount
}
// getAccountSummary
let getAccountSummary = function(account) {
  console.log(`Account for ${account.name} has ${account.income - account.expenses}. ${account.income} in income and ${account.expenses} in expenses`)
}
// resetAccount
let resetAccount = function(account) {
  account.expenses = 0
  account.income = 0
}

addIncome(myAccount, 1000)
console.log(myAccount)

addExpense(myAccount, 100)
console.log(myAccount)

getAccountSummary(myAccount)

resetAccount(myAccount)
console.log(myAccount)

getAccountSummary(myAccount)