getGradients();

function getGradients() {
	var gradientJSON = "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json";
	$.getJSON(gradientJSON, changeGradient(json));
}

function changeGradient(json) {
	console.log(json);
}