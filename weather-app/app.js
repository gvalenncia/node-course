const request = require('request')

const url = 'https://api.darksky.net/forecast/183ec5d23690d28f25e2bb373adcc30c/37.8267,-122.4233'

const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20poppAngeles.json?access_token=pk.eyJ1IjoiZ3ZhbGVubmNpYSIsImEiOiJjazJndXJyY3QwMzkxM2dxZXY1emtnY3drIn0.T1m2WIQDPtbGWnDC4dzS2g'

// request({url: url, json: true}, (error, response) => {
//     console.log('It is currently ' + response.body.currently.temperature + ' There is a ' + response.body.currently.precipProbability + '% chance to rain')
// })

request({url: geocodingUrl, json:true}, (error, response) => {
    if(error){
        console.log('Unable to connect geocoding api')
    } else if(response.body.error){
        console.log('Unable to get geocodig results')
    } else if(response.body.features.length === 0){
        console.log('There are no results for criteria')
    } else {
        console.log(response.body.features[0].center[0])
        console.log(response.body.features[0].center[1])
    }
})