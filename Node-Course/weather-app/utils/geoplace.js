const request = require('request')

const geoplace = (lat, lon, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=aba9948c1b4837cecc64758cbba8adaa&units=metric`
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the server', undefined)
        } else if (response.body.cod != '200') {
            callback('Please enter the correct details', undefined)
        } else {
            const state = response.body.main
            callback(undefined, {
                'climate': response.body.weather[0].description,
                'current_temp': state.temp,
                'feel_like': state.feels_like
            })
        }
    })
}

module.exports = geoplace 