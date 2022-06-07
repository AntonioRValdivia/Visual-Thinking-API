const fs = require("fs");

class Reader {
    static readJsonFile(){
        return JSON.parse(fs.readFileSync("visualpartners.json"));
    }
}

module.exports = Reader;