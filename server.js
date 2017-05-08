"use strict";
exports.__esModule = true;
//-- run server --
var express = require("express");
var conf = {
    serv: {
        addr: 'http://localhost',
        port: 1010
    }
};
var app = express();
app.listen(conf.serv.port, function () { console.log('server running at ' + conf.serv.addr + ':' + conf.serv.port); });
app.use("/", express.static(__dirname + '/client'));
//-end- run server --
var fs = require("fs");
var EntityType;
(function (EntityType) {
    EntityType[EntityType["File"] = 10] = "File";
    EntityType[EntityType["File_IMAGE"] = 11] = "File_IMAGE";
    EntityType[EntityType["File_MPEG"] = 12] = "File_MPEG";
    EntityType[EntityType["Some"] = 20] = "Some";
    EntityType[EntityType["Some_A"] = 21] = "Some_A";
    EntityType[EntityType["Some_B"] = 22] = "Some_B";
})(EntityType || (EntityType = {}));
;
var Status = {
    ERROR: '00',
    SUCCESS: '11'
};
var Info = (_a = {},
    _a[EntityType.File] = (_b = {},
        _b[Status.ERROR] = {
            NO_INFO: '00',
            BAD_FILE: '01',
            READ_FILE_INTERRUPTED: '02'
            // ...
        },
        _b[Status.SUCCESS] = {
            NO_INFO: '00',
            FILE_WAS_READ: '01',
            FILE_CHUNK_WAS_READ: '02'
            // ...
        },
        _b),
    _a);
var StatusCodes = {
    STOP_FILE_READING__SUCCESS: '' + EntityType.File + Status.SUCCESS +
        Info[EntityType.File][Status.SUCCESS]['FILE_CHUNK_WAS_READ']
};
console.log(StatusCodes['STOP_FILE_READING__SUCCESS']);
console.log('\n---\n');
console.log(Info[EntityType.File][Status.SUCCESS]['FILE_CHUNK_WAS_READ']);
var someFile;
fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', function (err, data) {
    // console.log('\n [1] music-file reading... \n');
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
            // console.log('\n--------------------\n another chunk ---> ', data);
            readNextChunk();
        });
    };
    readNextChunk();
});
var _a, _b;
