// Teachers menu.

'use strict';

var _ = require('lodash'),
    readline = require('readline'),
    Teacher = require('../models/teacher.js');

function TeachersMenu() {
  return this;
}

// Capture teacher information.
TeachersMenu.prototype.prompt = function() {
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.field = -1;
  rl.teacher = new Teacher();

  rl.setPrompt('Name: ');
  rl.prompt();

  rl.on('line', function(line) {
    rl.field += 1;
    switch(rl.field) {
      case 0:
        rl.teacher.name = line.trim();
        rl.setPrompt('Address: ');
        rl.prompt();
        break;
      case 1:
        rl.teacher.address = line.trim();
        rl.setPrompt('Birth date: ');
        rl.prompt();
        break;
      default:
        rl.teacher.birthDate = line.trim();
        rl.teacher.save();
        console.log('Teacher created!\n');
        rl.close();

        var MainMenu = require('./main.js');
        new MainMenu().prompt();
        break;
    }
  });
};

module.exports = TeachersMenu;
