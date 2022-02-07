import { Stopwatch } from "./stopwatch.class.js";
// HTML Elements refs
const stopwatchDisplay = document.getElementById("timer");
const btnStart = document.getElementById("btnStart");
const btnStop = document.getElementById("btnStop");
const btnReset = document.getElementById("btnReset");
const displayMS = document.getElementById("ms");
const displaySS = document.getElementById("ss");
const displayMM = document.getElementById("mm");
const displayHH = document.getElementById("hh");

const objStopwatch = new Stopwatch(true, 1);
objStopwatch.attach(stopwatchDisplay, btnStart, displayMS, displaySS, displayMM, displayHH);

btnStart.addEventListener("click", () => objStopwatch.start());
btnStop.addEventListener("click", () => objStopwatch.stop());
btnReset.addEventListener("click", () => objStopwatch.reset());
