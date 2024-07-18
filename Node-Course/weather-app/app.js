const geocode = require('./utils/geocode')
const geoplace = require('./utils/geoplace')

const getPlace = (process.argv[2])

if (getPlace) {
    geocode(getPlace, (error, { lattitude, longitude }) => {
        if (error) {
            return console.log(error)
        }
        geoplace(lattitude, longitude, (error, { climate, current_temp, feel_like }) => {
            if (error) {
                return console.log(error)
            }
            console.log("lattitude is: " + lattitude)
            console.log("longitude is: " + longitude)
            console.log(`It is ${climate}. The current temperature is ${current_temp} celsius. But it feels like ${feel_like} celsius`)
        })
    })
} else { console.log("Please enter the place to get information") }


