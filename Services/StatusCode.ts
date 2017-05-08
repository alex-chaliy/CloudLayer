export enum EntityType {
	File = 10,
	File_IMAGE = 11,
	File_MPEG = 12,

	Some = 20,
	Some_A = 21,
	Some_B = 22
};
export const Status = {
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
export const StatusCodes = {
	STOP_FILE_READING__SUCCESS: '' + EntityType.File + Status.SUCCESS +
								Info[EntityType.File][Status.SUCCESS]['FILE_CHUNK_WAS_READ'],
	STOP_FILE_READING__ERROR: '' + EntityType.File + Status.ERROR +
							  Info[EntityType.File][Status.ERROR]['NO_INFO']
};

export let testStatusCode = ()=>{
	console.log( '\n -test Status Code- FILE_CHUNK_WAS_READ -\n' );
	console.log( StatusCodes['STOP_FILE_READING__SUCCESS'] );
	console.log( Info[EntityType.File][Status.SUCCESS]['FILE_CHUNK_WAS_READ'] );
};
