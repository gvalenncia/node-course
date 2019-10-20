const fs = require('fs')
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => console.log(note));    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter((note) => note.title !== title)
    saveNotes(updatedNotes)
    if(notes.length > updatedNotes.length) {
        console.log(chalk.green.bold.inverse("Note with title: " + title + " was removed"))
    } else {
        console.log(chalk.red.bold.inverse("Note was not found"))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicatedNotes = notes.filter((note) => note.title === title)

    if(duplicatedNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    } else {
        console.log('note already taken')
    }
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}

module.exports = {
    addNote,
    removeNote,
    listNotes
}