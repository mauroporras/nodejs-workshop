#!/usr/bin/env node

'use strict';

var MainMenu = require('./views/main.js');

// Prompt the main menu.
new MainMenu().prompt();
