const fs = require("fs")
const parse = require('csv-parse/lib/sync')

var csvData = []

data = fs.readFile("./sample.csv", (error, data) => {
    csvData = parse(data)
    console.log("finish")
})

for(let i=0; i<1000; i++) {
    console.log(i)
}
console.log("finish 1st loop")

for(let i=0; i<1000; i++) {
    console.log(i)
}
console.log("finish 2nd loop")

data2 = fs.readFile("./sample.csv", (error, data) => {
    csvData = parse(data)
    console.log("finish async read file")
})

for(let i=0; i<100000; i++) {
    console.log(i)
}
console.log("finish 3rd loop")
