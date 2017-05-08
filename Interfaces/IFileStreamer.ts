export interface IFileStreamer {
	isThereFileChunks():boolean;

	stopFileReading():number; // returns status code

	readChunk():number;

	packChunk():number;

	SendChunkToClient():number;

	// -client- Recieve File Chunk
	// -client- Parse File Chunk
	// -client- Is There Track File in Cache ?
	// -client- Create Empty File in Cache for Current Track
	// -client- Add Chunk To Track File in Cache




	// readFileByChunks():void;

	streamFileByChunks():void;
}