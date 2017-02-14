mainGradient();

function mainGradient() {
	var gradientJSON = "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json";
	$.getJSON(gradientJSON, function(json) {
		var gradientNum = Math.floor(Math.random() * json.length);
		var colors = json[gradientNum]["colors"];
		var color1 = colors[0];
		var color2 = colors[1];

		changeBackground(color1,color2);
		changeForeground(color1,color2);
	});

}

function changeBackground(color1, color2) {
	var direction = "bottom";
	var header = $(".main-header");

	var gradient = color1;
	header.css("background", gradient);

	gradient = "-webkit-linear-gradient(to " + direction + ", " + color1 + ", " + color2 + ")";
	header.css("background", gradient);
	
	gradient = "linear-gradient(to " + direction + ", " + color1 + ", " + color2 + ")";
	header.css("background", gradient);
}

function changeForeground(color1,color2) {
	avgRed = getRed(color1, color2);
	avgGreen = getGreen(color1, color2);
	avgBlue = getBlue(color1, color2);

	bgColor = getBackground(avgRed,avgGreen,avgBlue);

	if (bgColor == 0) {
		$(".name-title").css("color", "#ffffff");
		$(".name-subtitle").css("color", "#ffffff");
		$(".hr-light").css("border-color", "#ffffff");

	} else {
		$(".name-title").css("color", "#2c3e50");
		$(".name-subtitle").css("color", "#2c3e50");
		$(".hr-light").css("border-color", "#2c3e50");
	}
}

function getRed(color1, color2) {
	hex1 = color1.replace('#','');
	r1 = parseInt(hex1.substring(0,2), 16);

	hex2 = color2.replace('#','');
	r2 = parseInt(hex2.substring(0,2), 16);

	avg = (r1 + r2) / 2;
	return avg;
}

function getGreen(color1, color2) {
	hex1 = color1.replace('#','');
	g1 = parseInt(hex1.substring(2,4), 16);

	hex2 = color2.replace('#','');
	g2 = parseInt(hex2.substring(2,4), 16);

	avg = (g1 + g2) / 2;
	return avg;
}

function getBlue(color1, color2) {
	hex1 = color1.replace('#','');
	b1 = parseInt(hex1.substring(4,6), 16);

	hex2 = color2.replace('#','');
	b2 = parseInt(hex2.substring(4,6), 16);

	avg = (b1 + b2) / 2;
	return avg;
}

//Returns 0 for dark background and 1 for light background
function getBackground(r, g, b) {
	luminance = r * 0.299 + g * 0.587 + b * 0.114;
	console.log(luminance);

	if (luminance > 186) {
		return 1;
	} else {
		return 0;
	}
}