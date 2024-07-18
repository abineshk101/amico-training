const fs = require('fs')

let info = {
    name: "jack",
    age: 31,
    place: "america"
}
// fs.writeFileSync('JSONdata.json', JSON.stringify(info))

fs.appendFileSync('JSONdata.json', JSON.stringify(info))

/////////// To read and convert the data to normal form /////////////////

// const BufferData = fs.readFileSync("JSONdata.json")
// const stringData=BufferData.toString()
// const parsed_data = JSON.parse(stringData)

///////////////////// To update and write the file in externel file ////////////////

// parsed_data.name = "Abinesh K"
// parsed_data.age = 23
// parsed_data.place = "Nagercoil"

// fs.writeFileSync('JSONdata.json', JSON.stringify(parsed_data))
