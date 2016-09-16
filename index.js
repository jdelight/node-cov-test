const fs = require('fs');
const {join} = require('path');

const test = (b) => {
    if (b) {
        return JSON.parse(fs.readFileSync('./test-b.json', 'utf8'));
    } else {
        return (cb) => {
            fs.readFile('./test-a.json', 'utf8', function (err, data) {
                if (err) {
                    console.error(err);
                }
                cb(JSON.parse(data));
            });
        };
    }
};

module.exports = test;
