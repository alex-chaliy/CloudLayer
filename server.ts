// Config
import { conf } from './Services/Config';

//-- run server --
import * as express from 'express';

const app = express();
app.listen(conf.serv.port, ()=>{ console.log('server running at ' + conf.serv.addr+':'+conf.serv.port) });
app.use("/", express.static(__dirname + '/client'));
//-end- run server --


// File System
import * as fs from 'fs';


// Status Codes 
import * as _statusCode from './Services/StatusCode';
import { StatusCodes } from './Services/StatusCode';


// Interfaces
import { IFileStreamer } from './Interfaces/IFileStreamer';

// Classes
import { FileStreamer } from './Classes/FileStreamer';