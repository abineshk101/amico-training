const https = require('https')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.7837304&lon=-100.445882&appid=aba9948c1b4837cecc64758cbba8adaa&units=metric'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        console.log(JSON.parse(data))
    })
})

request.end()