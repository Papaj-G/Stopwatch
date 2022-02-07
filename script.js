import { Stopwatch } from "./stopwatch.class.js";
// HTML Elements refs
const stopwatchDisplay = document.getElementById("stopwatch");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");

const objStopwatch = new Stopwatch(false, 10);
objStopwatch.attach(stopwatchDisplay, btnStart);

btnStart.addEventListener("click", () => objStopwatch.start());
btnStop.addEventListener("click", () => objStopwatch.stop());
btnReset.addEventListener("click", () => objStopwatch.reset());
