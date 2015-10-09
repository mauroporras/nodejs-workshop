// Enrollments menu.

'use strict';

var _ = require('lodash'),
    readline = require('readline'),
    Student = require('../models/student.js'),
    Course = require('../models/course.js'),
    CourseStudent = require('../models/course_student.js');

function EnrollmentsMenu() {
  return this;
}

EnrollmentsMenu.prototype.getPrompt = function() {
  return [
    'Students:',
    _.map(new Student().all(), function(e) {
      return [' - (', e.id, ') ', e.name].join('');
    }).join('\n'),
    'Courses:',
    _.map(new Course().all(), function(e) {
      return [' - (', e.id, ') ', e.name].join('');
    }).join('\n'),
    '> Your input (student id, course id): '
  ].join('\n');
};

// Capture enrollment information.
EnrollmentsMenu.prototype.prompt = function() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.field = -1;
  rl.courseStudent = new CourseStudent();

  rl.setPrompt(this.getPrompt());
  rl.prompt();

  rl.on('line', function(line) {
    rl.field += 1;
    switch(rl.field) {
      case 0:
        var ids = line.trim().split(',');
        rl.courseStudent.studentId = ids[0].trim();
        rl.courseStudent.courseId = ids[1].trim();
        rl.courseStudent.save();
        console.log('Student enrolled!\n');
        rl.close();

        var MainMenu = require('./main.js');
        new MainMenu().prompt();
        break;
    }
  });
};

module.exports = EnrollmentsMenu;
