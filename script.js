// Random number generator
const result = document.getElementById("content");
const button = document.querySelector("a");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

button.addEventListener("click", function() {
	generateNumber(num1.value, num2.value);
});

function generateNumber(min, max){
	const maxValue = parseInt(max);
	const minValue = parseInt(min);
	let highervalue = maxValue;
	let lowerValue = minValue;

	if(minValue > maxValue) {
		highervalue = minValue;
		lowerValue = maxValue;
	}
	
	const randomNumber = Math.floor(Math.random() * 
		(highervalue - lowerValue + 1)) + lowerValue;

	if(!randomNumber && randomNumber != 0) {
		result.textContent = "Input a number, please";
	} else {
		result.textContent = randomNumber;
	}
}

//change Background color
const theme = document.querySelectorAll(".button");
const background = document.querySelector("body");
const creator = document.querySelector(".creator");

theme.forEach((color) => {
	color.addEventListener("click", e => {
		switch(color.id) {
			case "blue":
				background.style.backgroundColor = "#5370fd";
				creator.style.color = "black";
				break;
			case "red" :
				background.style.backgroundColor = "#bc0101";
				creator.style.color = "white";
				break;
			case "orange" :
				background.style.backgroundColor = "#ff8324";
				creator.style.color = "white";
				break;
			case "yellow" :
				background.style.backgroundColor = "#fff947";
				creator.style.color = "black";
				break;
			case "green" :
				background.style.backgroundColor = "#3fdb05";
				creator.style.color = "black";
				break;

		}
	})
})


// Time
let time = document.querySelector("#time");

setInterval(function() {
	let newTime = new Date();
	time.innerHTML = newTime;
}, 1000);