const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(-75.788, 44.1545, (error, data) => {
    console.log(error)
    console.log(data)
})

geocode('Boston', (error, data) => {
    console.log(error)
    console.log(data.longitude + ', ' + data.latitude)
})