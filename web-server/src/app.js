const express = require ('express')

const app = express()

app.get('', (req, res) => {
    res.send('<h1>Welcome to Webserver</h1>')
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'german'
    },{
        name: 'lastenia'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'This is my forecast',
        location: 'Boston'
    })
})

app.listen(3000, () => {
    console.log('Listen on port 3000')
})
