const path = require('path')
const express = require ('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Configuration of Expressjs, registerign handlebars as template engine
app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

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
        title: 'Help',
        name: 'German Valencia'
    })
})

app.get('/weather', (req, res) => {
    if(req.query.address){
        geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
            if (error){
                res.send(error)
            } else {
                forecast(latitude, longitude, (error, {temperature, precipProbability} = {}) => {
                    if (error) {
                        res.send(error)
                    } else {
                        res.send({
                            location,
                            temperature,
                            precipProbability
                        })
                    }
                })
            }
        })
    } else {
        res.send('You must provide an address.')
    }

})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(3000, () => {
    console.log('Listen on port 3000')
})
