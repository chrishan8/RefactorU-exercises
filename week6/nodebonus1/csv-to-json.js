var Converter = require("csvtojson").Converter;
var converter = new Converter({});

converter.on("end_parsed", function (output) {
   console.log(output);
});

require("fs").createReadStream("./input.csv").pipe(converter);