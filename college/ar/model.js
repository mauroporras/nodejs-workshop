'use strict';

var DB = require('./db.js');

var Model = function(table) {
  this.db = DB.getDB();
  this.table = table;
};

Model.prototype.save = function() {
  this.db.insert(this);
};

Model.prototype.find = function() {
};

Model.prototype.all = function() {
  return this.db.selectAll(this);
};

module.exports = Model;
