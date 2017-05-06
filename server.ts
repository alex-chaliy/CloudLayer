import * as fs from 'fs';

fs.readFile('./uploads/music/Xavier-Wulf---Hear-Yee.mp3', (err, data) => {
	console.log('\n music-file reading... \n');
	if (err) throw err;
	console.log(data);
});