const fs = require("fs")
const parse = require('csv-parse/lib/sync')
const util = require('util');

// nomal read
var csvData = []

const readFileAsync = util.promisify(fs.readFile)

async function readCsvFiles() {
    var data = await readFileAsync("./sample.csv")
    csvData = parse(data)
    return csvData
}

readCsvFiles().then((csvFile) => {
    console.log(csvFile)
})

