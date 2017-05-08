"use strict";
exports.__esModule = true;
var EntityType;
(function (EntityType) {
    EntityType[EntityType["File"] = 10] = "File";
    EntityType[EntityType["File_IMAGE"] = 11] = "File_IMAGE";
    EntityType[EntityType["File_MPEG"] = 12] = "File_MPEG";
    EntityType[EntityType["Some"] = 20] = "Some";
    EntityType[EntityType["Some_A"] = 21] = "Some_A";
    EntityType[EntityType["Some_B"] = 22] = "Some_B";
})(EntityType = exports.EntityType || (exports.EntityType = {}));
;
exports.Status = {
    ERROR: '00',
    SUCCESS: '11'
};
var Info = (_a = {},
    _a[EntityType.File] = (_b = {},
        _b[exports.Status.ERROR] = {
            NO_INFO: '00',
            BAD_FILE: '01',
            READ_FILE_INTERRUPTED: '02'
            // ...
        },
        _b[exports.Status.SUCCESS] = {
            NO_INFO: '00',
            FILE_WAS_READ: '01',
            FILE_CHUNK_WAS_READ: '02'
            // ...
        },
        _b),
    _a);
exports.StatusCodes = {
    STOP_FILE_READING__SUCCESS: '' + EntityType.File + exports.Status.SUCCESS +
        Info[EntityType.File][exports.Status.SUCCESS]['FILE_CHUNK_WAS_READ'],
    STOP_FILE_READING__ERROR: '' + EntityType.File + exports.Status.ERROR +
        Info[EntityType.File][exports.Status.ERROR]['NO_INFO']
};
exports.testStatusCode = function () {
    console.log('\n -test Status Code- FILE_CHUNK_WAS_READ -\n');
    console.log(exports.StatusCodes['STOP_FILE_READING__SUCCESS']);
    console.log(Info[EntityType.File][exports.Status.SUCCESS]['FILE_CHUNK_WAS_READ']);
};
var _a, _b;
