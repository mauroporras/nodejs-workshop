'use strict';

var util = require('util');
var EventEmitter = require('events');

function MauroAsyncEvents() {
  EventEmitter.call(this);
}

util.inherits(MauroAsyncEvents, EventEmitter);

MauroAsyncEvents.prototype.series = function(funcs) {
  this.total = funcs.length;
  this.results = [];

  this.on('onedone', function(result) {
    this.results.push(result);
    if (this.results.length === this.total) {
      this.emit('done', this.results);
    }
  }.bind(this));

  funcs.forEach(function(f) {
    f(function(result) {
      this.emit('onedone', result);
    }.bind(this));
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

new MauroAsyncEvents()
.on('done', function(results) {
  console.log(results);
})
.series([foo, bar]);
