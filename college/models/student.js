'use strict';

var util = require('util');
var Person = require('./person.js');

var Student = function() {
  Person.call(this, 'students');
};

util.inherits(Student, Person);

Student.prototype.enrollToCourse = function() {
  console.info('foo');
};

module.exports = Student;
