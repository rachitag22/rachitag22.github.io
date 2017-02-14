getGradients();

function getGradients() {
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