'use strict';

var util = require('util');
var Model = require('../ar/model.js');

var CourseStudent = function() {
  Model.call(this, 'courses_students');
};

util.inherits(CourseStudent, Model);

module.exports = CourseStudent;
