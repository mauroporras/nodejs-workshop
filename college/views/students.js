// Students menu.

'use strict';

var _ = require('lodash'),
    readline = require('readline'),
    Student = require('../models/student.js');

function StudentsMenu() {
  return this;
}

// Capture student information.
StudentsMenu.prototype.prompt = function() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.field = -1;
  rl.student = new Student();

  rl.setPrompt('Name: ');
  rl.prompt();

  rl.on('line', function(line) {
    rl.field += 1;
    switch(rl.field) {
      case 0:
        rl.student.name = line.trim();
        rl.setPrompt('Address: ');
        rl.prompt();
        break;
      case 1:
        rl.student.address = line.trim();
        rl.setPrompt('Birth date: ');
        rl.prompt();
        break;
      default:
        rl.student.birthDate = line.trim();
        rl.student.save();
        console.log('Student created!\n');
        rl.close();

        var MainMenu = require('./main.js');
        new MainMenu().prompt();
        break;
    }
  });
};

module.exports = StudentsMenu;
