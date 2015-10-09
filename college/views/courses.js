// Courses menu.

'use strict';

var _ = require('lodash'),
    readline = require('readline'),
    Course = require('../models/course.js');

function CoursesMenu() {
  return this;
}

// Capture course information.
CoursesMenu.prototype.prompt = function() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.field = -1;
  rl.course = new Course();

  rl.setPrompt('Name: ');
  rl.prompt();

  rl.on('line', function(line) {
    rl.field += 1;
    switch(rl.field) {
      case 0:
        rl.course.name = line.trim();
        rl.setPrompt('Minimum average grade: ');
        rl.prompt();
        break;
      default:
        rl.course.minAvgGrade = line.trim();
        rl.course.save();
        console.log('Course created!\n');
        rl.close();

        var MainMenu = require('./main.js');
        new MainMenu().prompt();
        break;
    }
  });
};

module.exports = CoursesMenu;
