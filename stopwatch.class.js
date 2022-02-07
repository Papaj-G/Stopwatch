export class Stopwatch {
	constructor(ticking, refreshrate) {
		this._ms;
		this._ss;
		this._mm;
		this._hh;
		this.paused = false;
		this.started = false;
		this.ticking = ticking ?? false;
		this.tickTimeOld = this.getCurrentTime();
		this.elapsedTime = 0;
		this.refreshrate = refreshrate ?? 1;
		this.refOutputElement;
		this.refOutputElementMS;
		this.refOutputElementSS;
		this.refOutputElementMM;
		this.refOutputElementHH;
		this.refButtonElement;

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
		this.elapsedTime = 0;
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
	attach(output, btn, ms, ss, mm, hh) {
		this.refButtonElement = btn;
		this.refOutputElement = output;
		this.refOutputElementMS = ms;
		this.refOutputElementSS = ss;
		this.refOutputElementMM = mm;
		this.refOutputElementHH = hh;
	}
	updateAttachedRef() {
		if (this.refOutputElement) {
			this.refOutputElement.innerText = this.formatTime(this.elapsedTime);
		}
		if (this.refButtonElement) {
			if (this.paused) {
				this.refButtonElement.innerText = "Resume";
			} else {
				this.refButtonElement.innerText = "Start";
			}
		}
		if (this.refOutputElementMS) {
			this.refOutputElementMS.innerText = this.MS();
		}
		if (this.refOutputElementSS) {
			this.refOutputElementSS.innerText = this.SS();
		}
		if (this.refOutputElementMM) {
			this.refOutputElementMM.innerText = this.MM();
		}
		if (this.refOutputElementHH) {
			this.refOutputElementHH.innerText = this.HH();
		}
	}
	MS() {
		return Math.floor(this.elapsedTime % 1000);
	}
	SS() {
		return Math.floor((this.elapsedTime / 1000) % 60);
	}
	MM() {
		return Math.floor((this.elapsedTime / 1000 / 60) % 60);
	}
	HH() {
		return Math.floor((this.elapsedTime / 1000 / 60 / 60) % 24);
	}
}
