import * as fs from 'fs';

interface IFileStreamer {
	readFile():void;
	readFileByChunks():void;
}


let someFile;

fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', (err, data) => {
	console.log('\n [1] music-file reading... \n');
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
			console.log('\n--------------------\n another chunk ---> ', data);
			readNextChunk();
		});
	}
	readNextChunk();
});