console.log("test");
function changeText(Marketing) {
	Marketing.innerHTML = "Explore ";
	document.getElementById("Marketing").style.color = "Red";
	document.getElementById("Marketing").style.fontSize = "100px";
}
function upperCase() {
	const x = document.getElementById("website");
	x.value = x.value.toUpperCase();
}

function add(a, b) {
	result = a + b;
	console.log(result);
}

add(5, 2);
