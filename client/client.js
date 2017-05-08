// to fix tsc-compiling error "  Cannot redeclare block-scoped variable 'c' "
// I have to use self-invoking function wrapper
;
(function () {
    var data = 'data';
})();
