'use strict';

var util = require('util');
var Model = require('../ar/model.js');

var Course = function() {
  Model.call(this, 'courses');
};

util.inherits(Course, Model);

module.exports = Course;
