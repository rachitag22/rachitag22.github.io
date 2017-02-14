mainGradient();

function mainGradient() {
	var gradientJSON = "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json";
	$.getJSON(gradientJSON, function(json) {
		var gradientNum = Math.floor(Math.random() * json.length);
		var colors = json[gradientNum]["colors"];
		var color1 = colors[0];
		var color2 = colors[1];
		var direction = "bottom";

		var header = $(".main-header");

		var gradient = color1;
		header.css("background", gradient);

		gradient = "-webkit-linear-gradient(to " + direction + ", " + color1 + ", " + color2 + ")";
		header.css("background", gradient);
		
		gradient = "linear-gradient(to " + direction + ", " + color1 + ", " + color2 + ")";
		header.css("background", gradient);
	});

}

function convertHex(hex){
    hex = hex.replace('#','');
    r = parseInt(hex.substring(0,2), 16);
    g = parseInt(hex.substring(2,4), 16);
    b = parseInt(hex.substring(4,6), 16);
}