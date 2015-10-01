// ES6 comes with String.prototype.repeat()
String.prototype.times = function(times) {
  var string = this.toString(),
      result = '';
  for(i = 0; i < times; i++) {
    result += string;
  }
  return result;
};
