var lumonosity = require('./islight.js');

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

console.log(lumonosity.lumonosity(r,g,b));
console.log(lumonosity.islight(r,g,b));
console.log(lumonosity.darken(r,g,b)); 