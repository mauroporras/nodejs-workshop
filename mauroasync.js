'use strict';

var MauroAsync = {};

MauroAsync.series = function(funcs, final) {
    this.total = funcs.length;
    this.results = [];

    var checkDone = function(result) {
        this.results.push(result);
        if (this.results.length === this.total) {
            final(this.results);
        }
    };

    for(var i = 0; i < this.total; i++) {
        funcs[i](checkDone.bind(this));
    }
};

var foo = function(cb) {
    setTimeout(function() {
      cb('foo');
    }, 1000);
};

var bar = function(cb) {
    setTimeout(function() {
      cb('bar');
    }, 500);
};

MauroAsync.series([foo, bar], function(results) {
    console.log(results);
});
