"use strict";
exports.__esModule = true;
// Config
var Config_1 = require("./Services/Config");
//-- run server --
var express = require("express");
var _http = require("http");
var http = _http;
var socketIO = require("socket-io-server");
var app = express();
var server = http.Server(app);
// Initialize socket server
socketIO.init(server);
// Initialize http server 
server.listen(Config_1.conf.serv.port);
console.log('server running at ' + Config_1.conf.serv.addr + ':' + Config_1.conf.serv.port);
app.use("/", express.static(__dirname + '/client'));
// Classes
var FileStreamer_1 = require("./Classes/FileStreamer");
var _fileStreamer = new FileStreamer_1.FileStreamer();
_fileStreamer.streamFileByChunks(socketIO);
