const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/183ec5d23690d28f25e2bb373adcc30c/' + latitude + ',' + longitude
    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to darksy service!', undefined)
        } else if (response.body.error) {
            callback('Unable to get forecast results.', undefined)
        } else {
            callback(undefined, 
                {temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability})
        }
    })
}

module.exports = forecast