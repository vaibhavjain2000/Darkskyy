const request = require('request') 

const geocode = (address,callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieGl3b25lMzM4NyIsImEiOiJjbDM1MHdvdXgxY3B6M2RwZnpkNG00eDR2In0.UFv2mT-JOeb_MxDcwEl9lQ&limit=1'

    request({url : url , json : true}, (error,{body})=>{
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find Location!', undefined)
        }else{
            callback(undefined,{
                longitude : body.features[0].center[1],
                latitude :  body.features[0].center[0],
                location :  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode