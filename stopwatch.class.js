export class Stopwatch {
	constructor(ticking, refreshrate) {
		this.ticking = ticking ?? false;
		this.tickTimeOld = this.getCurrentTime();
		this.tickTimeDelta = 0;
		this.refreshrate = refreshrate ?? 1;
		this.refOutputElement;
		this.refButtonElement;
		this.paused = false;
		this.started = false;
		if (ticking) {
			this.started = true;
		}
		this.clock = setInterval(() => this.tick(), this.refreshrate);
	}
	tick() {
		if (this.ticking) {
			var tickTimeNew = this.getCurrentTime();
			this.tickTimeDelta += tickTimeNew - this.tickTimeOld;
			this.tickTimeOld = tickTimeNew;
			this.updateAttachedRef();
		}
	}
	start() {
		this.ticking = true;
		this.tickTimeOld = this.getCurrentTime();
		this.started = true;
		this.paused = false;
		this.updateAttachedRef();
	}
	stop() {
		this.ticking = false;
		if (this.started) {
			this.paused = true;
		}
		this.updateAttachedRef();
	}

	reset() {
		this.tickTimeOld = this.getCurrentTime();
		this.tickTimeDelta = 0;
		this.started = false;
		this.paused = false;
		this.updateAttachedRef();
	}
	getCurrentTime() {
		return new Date().getTime();
	}
	formatTime(time) {
		var ms = time;
		var ss = Math.floor(time / 1000);
		var mm = Math.floor(ss / 60);
		var hh = Math.floor(mm / 60);
		return (hh % 24) + "h " + (mm % 60) + "m " + (ss % 60) + "s " + (ms % 1000);
	}
	attach(output, btn) {
		this.refButtonElement = btn;
		this.refOutputElement = output;
	}
	updateAttachedRef() {
		if (this.refOutputElement) {
			this.refOutputElement.innerText = this.formatTime(this.tickTimeDelta);
		}
		if (this.refButtonElement) {
			if (this.paused) {
				this.refButtonElement.innerText = "Resume";
			} else {
				this.refButtonElement.innerText = "Start";
			}
		}
	}
}
