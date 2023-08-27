const {writeFileSync, readFileSync} = require('fs');
const path = require('path');

module.exports = {
    readJSON : (json) => JSON.parse(readFileSync(path.resolve(__dirname, json),'utf-8')),
    writeJson: (array, file)=>{
        writeFileSync(path.join(__dirname, `${file}.json`), JSON.stringify(array, null, 3), 'utf-8')
    }
}