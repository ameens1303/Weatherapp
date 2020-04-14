const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=bb53b269db7dedaf7acf92a7fbf0037c&query=Bengaluru";

request({url: url,json:true},(error,response)=>{
    console.log(response.body.current.weather_descriptions[0]+' and it is Currently '+response.body.current.temperature+
    ' degrees out ,it feels like '+response.body.current.feelslike+
    ' degrees out.')
})