const fs = require("fs")
const csv = require("csv")

let newData = []

function createRandomNumber(length) {
    var char = ""
    var charset = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < length; i++) {
        char += charset[Math.floor(Math.random() * charset.length)]
    }
    console.log(char)
    return char
}

for (let i =0; i < 10000; i++) {
    var row = []
    var randchar = createRandomNumber(10)
    row.push(i+1)
    row.push(randchar)
    newData.push(row)
}

csv.stringify(newData, (error, output) => {
    fs.writeFile("sample.csv", output, (error) => {
        console.log(error)
    })
})
