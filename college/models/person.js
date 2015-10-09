'use strict';

var util = require('util');
var Model = require('../ar/model.js');

var Person = function(table) {
  Model.call(this, table);
};

util.inherits(Person, Model);

module.exports = Person;
