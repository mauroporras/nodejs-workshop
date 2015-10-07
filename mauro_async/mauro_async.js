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

  funcs.forEach(function(f) {
    f(checkDone.bind(this));
  }.bind(this));
};


// Testing it.

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
