const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.0.0')

yargs.command({
    command: 'add',
    describe: 'Add new notes',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log(chalk.green.bold.inverse('Title: '+ argv.title))
        console.log(chalk.green.bold.inverse('Body: '+ argv.body))
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove notes',
    handler: function(){
        console.log(chalk.green.bold.inverse('removing a note'))
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log(chalk.green.bold.inverse('Listing all notes'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Read all notes',
    handler: function(){
        console.log(chalk.green.bold.inverse('reading all note'))
    }
})

yargs.parse()