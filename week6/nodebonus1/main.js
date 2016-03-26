var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.on("end_parsed", function (output) {
   console.log(output); //here is your result jsonarray 
});
 
//read from file 
require("fs").createReadStream("./input.csv").pipe(converter);