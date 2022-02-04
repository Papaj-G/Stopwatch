const { time } = require("console");

//window.addEventListener("DOMContentLoaded", () => {
var ticking = true;
var elapsedTime = 0;
const stopwatch = document.getElementById("stopwatch");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
btnStart.addEventListener("click", start);
btnStop.addEventListener("click", stop);
btnReset.addEventListener("click", reset);
stopwatch.innerText = elapsedTime;
var ticker = setInterval(tick, 1);
function tick() {
	if (ticking) {
		elapsedTime += 1;
	}
	stopwatch.innerText = formatTime(elapsedTime);
}
function formatTime(time) {
	return time;
}
function start() {
	ticking = true;
}
function stop() {
	ticking = false;
}
function reset() {
	elapsedTime = 0;
}
//});
