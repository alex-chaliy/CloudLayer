// to fix tsc-compiling error "  Cannot redeclare block-scoped variable 'c' "
// I have to use self-invoking function wrapper
;
(function () {
    var b = '000 sd';
    var sdfdsf = 555;
    var c = 7;
})();
