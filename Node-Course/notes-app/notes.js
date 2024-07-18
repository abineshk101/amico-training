const fs = require('fs')
const chalk = require("chalk");

const readNotes = (title) => {
    const notes = loadNotes()
    const readableOne = notes.find((item) => title == item.title)
    if (readableOne) {
        console.log("The TITLE is " + chalk.underline(readableOne.title))
        console.log("The BODY is " + readableOne.body)
    } else {
        console.log(chalk.red.inverse("please enter the correct title"))
    }
}

const addNotes = (title, body) => {
    const notes = loadNotes()
    const duplicateTitles = notes.filter((note) => note.title === title)

    if (duplicateTitles.length == 0) {
        notes.push({
            title: title,
            body: body
        })
        writeJSON(notes)
        console.log(chalk.green.inverse(("This title added successfully")))
    } else {
        console.log(chalk.red.inverse("This title already taken"))
    }
}

const writeJSON = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
    try {
        const bufferData = fs.readFileSync('./notes.json')
        const parsedData = bufferData.toString()
        return JSON.parse(parsedData)
    } catch (e) {
        return []
    }

}

const removeNotes = (title) => {
    const notes = loadNotes()
    const notesKeys = notes.map((note) => note.title)

    if (notesKeys.includes(title)) {
        const removedNotes = notes.filter((note) => note.title != title)

        writeJSON(removedNotes)
        console.log(chalk.inverse.green.bold("Item removed successfully"))
        console.log("The removed title is " + title)
    } else {
        console.log(chalk.inverse.red.bold("This was item already removed"))
    }

}

const listNotes = () => {
    const titleList = loadNotes()
    console.log(chalk.blue.bold("Your Titles List -"))
    titleList.forEach((title) => {
        console.log(title.title)
    });
}

module.exports = {
    readNotes: readNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes
}