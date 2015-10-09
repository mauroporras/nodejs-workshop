// Enroll teacher menu.

'use strict';

var _ = require('lodash'),
    readline = require('readline'),
    Teacher = require('../models/teacher.js'),
    Course = require('../models/course.js');

function EnrollTeacherMenu() {
  return this;
}

EnrollTeacherMenu.prototype.getPrompt = function() {
  return [
    'Teachers:',
    _.map(new Teacher().all(), function(e) {
      return [' - (', e.id, ') ', e.name].join('');
    }).join('\n'),
    'Courses:',
    _.map(new Course().all(), function(e) {
      return [' - (', e.id, ') ', e.name].join('');
    }).join('\n'),
    '> Your input (teacher id, course id): '
  ].join('\n');
};

// Capture enrollment information.
EnrollTeacherMenu.prototype.prompt = function() {
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

module.exports = EnrollTeacherMenu;
