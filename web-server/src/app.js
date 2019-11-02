const path = require('path')
const express = require ('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates')

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'German Valencia'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'German Valencia'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
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
