const validator = require('validator');
const chalk = require("chalk");
const yargs = require("yargs")
const notes = require("./notes.js")

// import validator from "validator"     /// to use this we nee to change the "type":"module" in package.json ///

// const isvalid = validator.isEmail('abinesh@gmail.com')
// console.log(isvalid)
// console.log(validator.isURL('hasvdjh'))

// const command = process.argv[2]

// if (command == "abinesh") {
//     console.log(chalk.inverse.green.italic("success !"))
// } else {
//     console.log(chalk.inverse.red.italic("Error !"))
// }

yargs.version("1.1.0")
yargs.command({
    command: "list",
    describe: "To list out the commands",
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing the command',
    builder: {
        title: {
            describe: "remove the title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: "To read the command",
    builder:{
        title:{
            describe:"read the data",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
    }

})

yargs.command({
    command: 'write',
    describe: 'To write the new data',
    builder: {
        title: {
            describe: "Title name",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "It is the body of the line",
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.parse()