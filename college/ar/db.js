// Database interface.

'use strict';

function DB() {
  this.tables = {};
  return this;
}

// DB singleton.
DB.getDB = function() {
  GLOBAL.COLLEGEAPP = GLOBAL.COLLEGEAPP || {};
  GLOBAL.COLLEGEAPP.DB = GLOBAL.COLLEGEAPP.DB || new DB();
  return GLOBAL.COLLEGEAPP.DB;
};

// Make sure that the table exists before any operation.
DB.prototype.prepareEntity = function(entity) {
  var table = entity.table;
  this.tables[table] = this.tables[table] || { currentId: 0, data: [] };
  delete entity.db;
  delete entity.table;
  return table;
};

// Increment metadata's id and return it.
DB.prototype.getId = function(table) {
  this.tables[table].currentId++;
  return this.tables[table].currentId;
};

DB.prototype.insert = function (entity) {
  var table = this.prepareEntity(entity);
  entity.id = this.getId(table);
  this.tables[table].data.push(entity);
  console.log('Current data: ' + JSON.stringify(this.tables));
};

DB.prototype.selectAll = function (entity) {
  var table = this.prepareEntity(entity);
  return this.tables[table].data;
};

DB.prototype.update = function (entity) {
  var table = this.prepareEntity(entity);
};

DB.prototype.delete = function (entity) {
  var table = this.prepareEntity(entity);
};

module.exports = DB;
