var request = require('request');
var _ = require('underscore');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var colors = JSON.parse(body);
    var rgb = _.find(colors, function(rgb) {return rgb.name.toLowerCase() ===  process.argv[2].toLowerCase()})
    console.log(rgb.rgb);
  }
})


