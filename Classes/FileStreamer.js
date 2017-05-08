"use strict";
exports.__esModule = true;
// File System
var fs = require("fs");
var FileStreamer = (function () {
    function FileStreamer() {
    }
    FileStreamer.prototype.isThereFileChunks = function () { return true; };
    FileStreamer.prototype.stopFileReading = function () { return 1; };
    FileStreamer.prototype.readChunk = function () {
        return 1;
    };
    FileStreamer.prototype.packChunk = function () { return 1; };
    FileStreamer.prototype.SendChunkToClient = function () { return 1; };
    FileStreamer.prototype.streamFileByChunks = function (socketIO) {
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
                    /** stream current chunk to client **/
                    // socketIO.emit('FileChunk', data);
                    // ! UNCOMMENT to Read all Chunks
                    // readNextChunk();
                });
            };
            readNextChunk();
        });
    };
    ;
    return FileStreamer;
}());
exports.FileStreamer = FileStreamer;
