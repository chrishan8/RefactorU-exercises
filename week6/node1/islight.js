var lumonosity = function(r, g, b) {
	return (0.2126*r + 0.7152*g + 0.0722*b);
}

var islight = function(r, g, b) {
	var value = lumonosity(r, g, b);
	if (value > 155) {
		return "light";
	}
	else {
		return "dark";
	}
}

var darken = function(r, g, b) {
	return {r: r*.8, g: g*.8, b: b*.8};
}

module.exports = {
	lumonosity: lumonosity,
	islight: islight,
	darken: darken
};