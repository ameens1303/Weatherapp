const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=bb53b269db7dedaf7acf92a7fbf0037c&query=Bengaluru";

request({url: url,json:true},(error,response)=>{
    
    console.log(response.body.current.weather_descriptions[0]+' and it is Currently '+response.body.current.temperature+
    ' degrees out ,it feels like '+response.body.current.feelslike+
    ' degrees out.')
})



// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1lZW5zMTMwMyIsImEiOiJjazkxN2g5cW8wOGIwM25saGtiNmJrNGZ0In0.eQGjhXV-RjHGAWafH5h2Tw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    console.log("response",response.body);
    const latitude = response.body.features[0].center[0]
    const longitude = response.body.features[0].center[1]
    console.log(latitude, longitude)
})