const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(address){
    geocode(address, (error, geo) => {
        if (error) {
            console.log(error)
        } else {
            forecast(geo.longitude, geo.latitude, (error, forecastData) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(geo.location)
                    console.log('Temperature: ' + forecastData.temperature + '. Chance of rain: ' + forecastData.precipProbability)
                }
            })
        }
    })
} else {
    console.log('please provide an address')
}