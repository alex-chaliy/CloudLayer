// File System
import * as fs from 'fs';

import { IFileStreamer } from './../Interfaces/IFileStreamer';

export class FileStreamer implements IFileStreamer {


	constructor() {}


	isThereFileChunks():boolean {return true;}

	stopFileReading():number {return 1;}



	readChunk():number {
		return 1;
	}



	packChunk():number {return 1;}

	SendChunkToClient():number {return 1;}

	streamFileByChunks(socketIO: any):void {
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


					/** stream current chunk to client **/
					// socketIO.emit('FileChunk', data);


					// ! UNCOMMENT to Read all Chunks
					// readNextChunk();
				});
			}
			readNextChunk();
		});
	};
}