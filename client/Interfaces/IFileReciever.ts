export interface IFileReciever {
	// -client- Recieve File Chunk
	recieveFileChunk():number; // -1 means error; 1 - successfully recieved

	// -client- Parse File Chunk
	rarseFileChunk():number;

	// -client- Is There Track File in Cache ?
	isThereTrackFileInCache():boolean;

	// -client- Create Empty File in Cache for Current Track
	createEmptyFileInCache():number;

	// -client- Add Chunk To Track File in Cache
	addChunkToTrackFile():number;

}