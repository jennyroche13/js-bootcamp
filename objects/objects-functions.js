let myBook = {
  title: '1984',
  author: 'George Orwell',
  pageCount: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pageCount: 723
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// challenge area
// create function - take fahrenheit in - return object with fahrenheit, celsius, kelvin

let temp = 80

let getTemps = function() {
  return {
    fahrenheit: temp,
    celsius: (temp - 32) * 5 / 9,
    kelvin: (temp - 32) * 5 / 9 + 273
  }
}

let result = getTemps()

console.log(result)