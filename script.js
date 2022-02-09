import { Stopwatch } from "./stopwatch.class.js";
// HTML Elements refs
const stopwatchDisplay = document.getElementById("display");
const button_Start = document.getElementById("button_Start");
const button_Stop = document.getElementById("button_Stop");
const lapList = document.getElementById("lapList");

const objStopwatch = new Stopwatch(true);

setInterval(() => {
	stopwatchDisplay.innerText = formatTime(
		objStopwatch.MM(),
		objStopwatch.SS(),
		Math.floor(objStopwatch.MS() / 10)
	);
}, 16);

function updateButtons() {
	if (objStopwatch.started && objStopwatch.paused) {
		button_Start.innerText = "resume";
	} else if (objStopwatch.started) {
		button_Start.innerText = "Lap";
	} else {
		button_Start.innerText = "start";
	}
	if (objStopwatch.paused) {
		button_Stop.innerText = "Reset";
	} else {
		button_Stop.innerText = "Stop";
	}
}
function formatTime(a, b, c) {
	return norm(a) + ":" + norm(b) + ":" + norm(c);
}
function norm(a) {
	if (a < 10) {
		return "0" + a;
	}
	return a;
}
function updateLaps() {
	const elementsForRemoval = document.querySelectorAll("#Lap");
	for (i = 0; i < elementsForRemoval.length; i++) {
		lapList.removeChild(elementsForRemoval[i]);
	}
	objStopwatch.lapTimes.forEach((lap) => {
		var newLapElement = document.createElement("div");
		newLapElement.innerText = formatTime(
			objStopwatch.MM(lap),
			objStopwatch.SS(lap),
			Math.floor(objStopwatch.MS(lap) / 10)
		);
		newLapElement.id = "Lap";
		newLapElement.className = "time";
		lapList.appendChild(newLapElement);
	});
}

button_Start.addEventListener("click", () => {
	objStopwatch.start();
	updateButtons();
	updateLaps();
});
button_Stop.addEventListener("click", () => {
	objStopwatch.stop();
	updateButtons();
	updateLaps();
});
