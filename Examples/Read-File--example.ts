// File System
import * as fs from 'fs';

export let readFile = ()=>{
	let someFile;

	fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', (err, data) => {
		console.log('\n [1] music-file reading... \n');
		if (err) throw err;
		console.log( data );
		someFile = data;
	});
};