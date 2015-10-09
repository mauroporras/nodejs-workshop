'use strict';

var util = require('util');
var Person = require('./person.js');

var Teacher = function() {
  Person.call(this, 'teachers');
};

util.inherits(Teacher, Person);

module.exports = Teacher;
