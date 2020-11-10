const notes = [{
  title: 'Note 1',
  body: 'Go to South Africa'
}, {
  title: 'Note 2',
  body: 'Javascript practice'
}, {
  title: 'Note 3',
  body: 'Get a laptop monitor'
}]

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex(function (note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()
//   })
//   return notes[index]
// }

const findNote = function(notes, noteTitle) {
  return notes.find(function (note, index) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const note = findNote(notes, 'note 3')
console.log(note)



// console.log(notes)

// console.log(notes.indexOf({}))

// const index = notes.findIndex(function(note, index) {
//   return note.title === 'Note 3'
// })
// console.log(index)