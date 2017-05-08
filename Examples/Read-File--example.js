"use strict";
exports.__esModule = true;
// File System
var fs = require("fs");
exports.readFile = function () {
    var someFile;
    fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', function (err, data) {
        console.log('\n [1] music-file reading... \n');
        if (err)
            throw err;
        console.log(data);
        someFile = data;
    });
};
