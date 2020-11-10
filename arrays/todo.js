let todos = ['javascript practice', 'work out', 'face mask', 'watch dark', 'd100 stuff']
// delete the third item
todos.splice(2, 1)
// add a new item to the end
todos.push('relax')
// remove the first item from the list
todos.shift()
console.log(`You have ${todos.length} things to do today`)
// console.log(`To do: ${todos[0]} and ${todos[3]}`)
// console.log(todos)

// todos.forEach(function(item, index) {
//   console.log(`${index + 1}. ${item}`)
// })

for (let count = 0; count < todos.length; count++) {
  console.log(`${count + 1}. ${todos[count]}`)
}

// convert the array to array of objects -> text and completed property (boolean)
// create function to remove a todo by text value

const deleteTodo = function(todos, todoTitle) {

  return todos.find(function (todo, index) {
    return todo.title.toLowerCase() === todoTitle.toLowerCase()
  })
}

deleteTodo(todos, 'Work Out')
console.log(todos)




