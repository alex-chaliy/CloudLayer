export interface IFileStreamer {
	isThereFileChunks():boolean;
	stopFileReading():number;

	readFileByChunks():void;
}