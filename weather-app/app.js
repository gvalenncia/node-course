const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if(address){
    geocode(address, (error, {latitude, longitude, location}) => {
        if (error) {
            console.log(error)
        } else {
            forecast(latitude, longitude, (error, {temperature, precipProbability}) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log(location)
                    console.log('Temperature: ' + temperature + '. Chance of rain: ' + precipProbability)
                }
            })
        }
    })
} else {
    console.log('please provide an address')
}