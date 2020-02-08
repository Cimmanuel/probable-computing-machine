const fs = require('fs')
const chalk = require('chalk')

// const getNotes = (str) => str

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    // if(duplicateNotes.length === 0) {
    if(!duplicateNote) {    
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('New note added!'))
    } else {
        console.log(duplicateNote)
        console.log(chalk.red.bold('Note title exists!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.bold('Note removed!'))
        saveNotes(notesToKeep)
    }  else {
        console.log(chalk.red.bold('No note found!'))    
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.bold('\n', 'Your notes', '\n'))
    notes.forEach((note) => console.log(chalk.white.bold(note.title)))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.blue.bold('\n', note.title))
        console.log(chalk.white('\n', note.body, '\n'))
    } else {
        console.log(chalk.red.bold('Note not found! See all notes using the list command'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes, null, 2)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
