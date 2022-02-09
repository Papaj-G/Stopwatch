export class Stopwatch {
	constructor(ticking) {
		this.started = false;
		this.ticking = ticking ?? false;
		this.tickTimeOld = this.getCurrentTime();
		this.elapsedTime = 0;
		this.refreshrate = 1;
		this.lapTimes = [];
		this.startTime;
		if (ticking) {
			this.start();
		}
		this.clock = setInterval(() => this.tick(), this.refreshrate);
	}
	tick() {
		if (this.ticking) {
			var tickTimeNew = this.getCurrentTime();
			this.elapsedTime += tickTimeNew - this.tickTimeOld;
			this.tickTimeOld = tickTimeNew;
		}
	}
	start() {
		if (this.started) {
			this.lap();
		}
		this.ticking = true;
		this.tickTimeOld = this.getCurrentTime();
		this.startTime = this.tickTimeOld;
		this.started = true;
		this.paused = false;
	}
	stop() {
		if (this.paused) {
			this.reset();
			return;
		} else {
			this.ticking = false;
			this.paused = true;
		}
	}
	lap() {
		if (this.lapTimes.length == 0) {
			this.lapTimes.push(this.elapsedTime);
		} else {
			this.lapTimes.push(this.getCurrentTime() - this.startTime);
		}
	}
	reset() {
		this.elapsedTime = 0;
		this.lapTimes = [];
		this.started = false;
		this.paused = false;
		this.ticking = false;
	}
	getCurrentTime() {
		return new Date().getTime();
	}
	MS(number) {
		if (number) {
			return Math.floor(number % 1000);
		} else {
			return Math.floor(this.elapsedTime % 1000);
		}
	}
	SS(number) {
		if (number) {
			return Math.floor((number / 1000) % 60);
		} else {
			return Math.floor((this.elapsedTime / 1000) % 60);
		}
	}
	MM(number) {
		if (number) {
			return Math.floor((number / 1000 / 60) % 60);
		} else {
			return Math.floor((this.elapsedTime / 1000 / 60) % 60);
		}
	}
	HH(number) {
		if (number) {
			return Math.floor((number / 1000 / 60 / 60) % 24);
		} else {
			return Math.floor((this.elapsedTime / 1000 / 60 / 60) % 24);
		}
	}
}
