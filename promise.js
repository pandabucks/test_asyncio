const fs = require("fs")
const parse = require('csv-parse/lib/sync')

var csvData = []

function readAsyncCsv(filename) {
    return new Promise((resolve) => {
        fs.readFile(filename, (err, data) => {
            resolve(data)
        })
    })
}

readAsyncCsv("sample.csv").then((data) => {
    var csvData = parse(data)
    console.log(csvData)
})

