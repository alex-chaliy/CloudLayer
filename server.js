"use strict";
exports.__esModule = true;
var fs = require("fs");
fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', function (err, data) {
    console.log('\n music-file reading... \n');
    if (err)
        throw err;
    console.log(data);
});
