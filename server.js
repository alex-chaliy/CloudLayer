"use strict";
exports.__esModule = true;
// Config
var Config_1 = require("./Services/Config");
//-- run server --
var express = require("express");
var app = express();
app.listen(Config_1.conf.serv.port, function () { console.log('server running at ' + Config_1.conf.serv.addr + ':' + Config_1.conf.serv.port); });
app.use("/", express.static(__dirname + '/client'));
// readFileByChunks(); 
