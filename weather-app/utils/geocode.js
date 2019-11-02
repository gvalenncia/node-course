const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ3ZhbGVubmNpYSIsImEiOiJjazJndXJyY3QwMzkxM2dxZXY1emtnY3drIn0.T1m2WIQDPtbGWnDC4dzS2g'
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect mapbox server!', undefined)
        } else if(response.body.error){
            callback('Unable to get geocodign results', undefined)
        } else if(response.body.features.length === 0){
            callback('There are no results for criteria', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode