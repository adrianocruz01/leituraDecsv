let address = {
    "type": "",
    "tags": [],
    "address": ""
}

let person = {
    "fullname": "",
    "eid": "",
    "groups": [],
    "address": [],
    "invisible": true,
    "see_all": false
}

let output = [];

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'input.csv');
const arquivo = fs.readFileSync(caminho, { encoding: 'utf-8' });
const arraycsv = arquivo.split('\n');

for (i = 1; i < arraycsv.length; i++) {
    let listTemp = arraycsv[i].split(',')
    let object = {
        "fullname": listTemp[0],
        "eid": listTemp[0],
        "groups": [],
        "address": [],
        "invisible": true,
        "see_all": false,
    }
}

console.log(arraycsv[2])