const request = require('request')

const forecast = (x,y,callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=169eec85cad6dc49cd42cc2b348a4fc6&query=' + y + ',' + x + '&units=f'

    request({url , json : true},(error,{ body })=>{ // response.body destructured(made object) into body
        if(error){
            callback('Unable to connect to weather services!',undefined)
        }else if(body.error){
            callback('Unable to detect the coordinates. Please try again!',undefined)
        }else{
            callback(undefined,body.current.weather_descriptions + ' throughout the day. It is currently ' + body.current.temperature + ' degrees fahrenheit out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast