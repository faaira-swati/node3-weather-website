const request = require('request')

const forecast = (locationkey,callback) => {
    const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/'+ encodeURIComponent(locationkey) + '?apikey=PHujCPVDQtKUYN64ZUnlsbOmQdc1pPwS'
    
    request({url,json:true},(error, {body}) => {
        if(error){
            callback('Unable to connect to weather service',undefined)
        } else if(body.fault){
            callback('Unable to find location!',undefined)
        } else{
            callback(undefined,body.Headline) 
        }
    });
}

module.exports = forecast