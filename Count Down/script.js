function ChangeToGreen(number) {
	document.getElementById("number").style.color = "Green";
	document.getElementById("number").style.borderColor = "Green";
}
function ChangeToRed(number) {
	document.getElementById("number").style.color = "Red";
	document.getElementById("number").style.borderColor = "Red";
}

// try

// CountDown

var X = document.getElementById("number");
let time = 10;
X.innerHTML = time;
console.log("IM here");

// const countdown = setInterval(() => {
// 	time--;
// 	X.innerHTML = time;
// 	if (time <= 0) {
// 		clearInterval(countdown);
// 	}
// }, 1000);

// var Start = 10;

// BCD.addEventListener("click", function () {});

// function reset() {
// 	clearInterval(Start);
// }
// BR.addEventListener("click", function () {
// 	time.value = 10;
// 	reset();
// });

function count() {
	let time = parseInt(document.getElementById("number").innerHTML);
	let timer = function () {
		if (time <= 0) {
			clearInterval(myInterval);
		}
		document.getElementById("number").innerHTML = time;
		time -= 1;
	};
	let myInterval = setInterval(timer, 1000);
}
function reset() {
	document.querySelector("#number").innerHTML = 10;
}
