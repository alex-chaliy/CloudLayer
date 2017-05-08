import { IFileStreamer } from './../Interfaces/IFileStreamer';

export class FileStreamer implements IFileStreamer {
	isThereFileChunks():boolean {return true;}

	stopFileReading():number {return 1;}



	readChunk():number {
		return 1;
	}



	packChunk():number {return 1;}

	SendChunkToClient():number {return 1;}

	streamFileChunk():void {};
}