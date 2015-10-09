// Main menu.

'use strict';

var _ = require('lodash'),
    readline = require('readline');

function MainMenu() {
  return this;
}

MainMenu.prototype.options = {
  '1': 'Create a new student',
  '2': 'Create a new teacher',
  '3': 'Create a new course',
  '4': 'Enroll student to a course',
  '5': 'Get teacher to teach a course',
  '6': 'Exit'
};

MainMenu.prototype.getPrompt = function() {
  return [
    'Options:',
    _.map(this.options, function(v, k) {
      return [k, '- ', v, '.'].join('');
    }).join('\n'),
    '> Pick one: '
  ].join('\n');
};

// Capture option.
MainMenu.prototype.prompt = function() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt(this.getPrompt());
  rl.prompt();

  rl.on('line', _.bind(function(line) {
    rl.close();
    line = line.trim();
    console.log('\n' + (this.options[line] || ''));
    switch(line) {
      case '1':
        var StudentsMenu = require('./students.js');
        new StudentsMenu().prompt();
        break;
      case '2':
        var TeachersMenu = require('./teachers.js');
        new TeachersMenu().prompt();
        break;
      case '3':
        var CoursesMenu = require('./courses.js');
        new CoursesMenu().prompt();
        break;
      case '4':
        var EnrollmentsMenu = require('./enrollments.js');
        new EnrollmentsMenu().prompt();
        break;
      case '5':
        var EnrollTeacherMenu = require('./enroll_teacher.js');
        new EnrollTeacherMenu().prompt();
        break;
      default:
        process.exit(0);
        break;
    }
  }, this));
};

module.exports = MainMenu;
