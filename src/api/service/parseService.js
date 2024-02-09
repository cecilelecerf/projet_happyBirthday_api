const fs = require("fs");
const { parse } = require("csv-parse");

exports.parseFile = function parseFile(filename) { 
    let results =  [];
    return new Promise((resolve, reject) => {
        fs.createReadStream(`./data/${filename}`)
        .pipe(parse({
            delimiter:";", 
            columns: true,
            bom: true,
            to_line: 5
        }))
        .on("data", function (row){
            results.push(row);
        })
        .on("end", function () {
            resolve(results);
        })
        .on("error", function (error){
            reject(error.message);
        })
});
}