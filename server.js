"use strict";
exports.__esModule = true;
var fs = require("fs");
var someFile;
fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', function (err, data) {
    console.log('\n [1] music-file reading... \n');
    if (err)
        throw err;
    // console.log( data );
    someFile = data;
});
// --------------------------------------
var CHUNK_SIZE = 0.1 * 1024 * 1024; // 0.1MB
var buffer = new Buffer(CHUNK_SIZE);
var filePath = './uploads/music/Xavier-Wulf---Hear-Yee.mp3';
fs.open(filePath, 'r', function (err, fd) {
    if (err)
        throw err;
    var readNextChunk = function () {
        fs.read(fd, buffer, 0, CHUNK_SIZE, null, function (err, nread) {
            if (err)
                throw err;
            if (nread === 0) {
                // done reading file, do any necessary finalization steps
                fs.close(fd, function (err) {
                    if (err)
                        throw err;
                });
                return;
            }
            var data;
            if (nread < CHUNK_SIZE)
                data = buffer.slice(0, nread);
            else
                data = buffer;
            // do something with `data`, then call `readNextChunk();`
            console.log('\n--------------------\n another chunk ---> ', data);
            readNextChunk();
        });
    };
    readNextChunk();
});
