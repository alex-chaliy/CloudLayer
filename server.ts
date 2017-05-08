//-- run server --
import * as express from 'express';

const conf = {
	serv: {
		addr: 'http://localhost',
		port: 1010
	}
};

const app = express();
app.listen(conf.serv.port, ()=>{ console.log('server running at ' + conf.serv.addr+':'+conf.serv.port) });
app.use("/", express.static(__dirname + '/client'));
//-end- run server --



import * as fs from 'fs';


enum EntityType {
	File = 10,
	File_IMAGE = 11,
	File_MPEG = 12,

	Some = 20,
	Some_A = 21,
	Some_B = 22
};
const Status = {
	ERROR: '00',
	SUCCESS: '11'
}
const Info = {
	[EntityType.File] : {
		[Status.ERROR] : {
			NO_INFO: '00',
			BAD_FILE: '01',
			READ_FILE_INTERRUPTED: '02'
			// ...
		},
		[Status.SUCCESS] : {
			NO_INFO: '00',
			FILE_WAS_READ: '01',
			FILE_CHUNK_WAS_READ: '02'
			// ...
		}
	}
}
const StatusCodes = {
	STOP_FILE_READING__SUCCESS: '' + EntityType.File + Status.SUCCESS +
								Info[EntityType.File][Status.SUCCESS]['FILE_CHUNK_WAS_READ']
};

console.log(StatusCodes['STOP_FILE_READING__SUCCESS']);
console.log('\n---\n');
console.log(Info[EntityType.File][Status.SUCCESS]['FILE_CHUNK_WAS_READ']);



interface IFileStreamer {
	isThereFileChunks():boolean;
	stopFileReading():number;

	readFileByChunks():void;
}


let someFile;

fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', (err, data) => {
	// console.log('\n [1] music-file reading... \n');
	if (err) throw err;
	// console.log( data );
	someFile = data;
});


// --------------------------------------

const CHUNK_SIZE = 0.1 * 1024 * 1024; // 0.1MB
const buffer = new Buffer(CHUNK_SIZE);
const filePath = './uploads/music/Xavier-Wulf---Hear-Yee.mp3';

fs.open(filePath, 'r', (err, fd)=>{ // fd - file data
	if (err) throw err;
	let readNextChunk = ()=>{
		fs.read(fd, buffer, 0, CHUNK_SIZE, null, (err, nread)=>{
			if (err) throw err;
			if (nread === 0) {
				// done reading file, do any necessary finalization steps

				fs.close(fd, (err)=>{
					if (err) throw err;
				});
				return;
			}

			let data;
			if (nread < CHUNK_SIZE)
				data = buffer.slice(0, nread);
			else
				data = buffer;

			// do something with `data`, then call `readNextChunk();`
			// console.log('\n--------------------\n another chunk ---> ', data);
			readNextChunk();
		});
	}
	readNextChunk();
});