require('util').inherits(QUEUE, require('events').EventEmitter);
function QUEUE(opts){
	if (!opts.name) return console.error("please specify name for queue");
	this.interval = opts.interval || 0;
	this.tasks = [];
	this.setNextTimeout();
}

QUEUE.prototype.proceed = function() {
	if (!this.tasks.length) return this.setNextTimeout();
	var task = this.tasks.shift();
	task();
	this.setNextTimeout();
}

QUEUE.prototype.setNextTimeout = function() {
	setTimeout(this.proceed.bind(this), this.interval);
}
QUEUE.prototype.addTask = function(f) {
	this.tasks.push(f);
	return this.tasks.length;
}

module.exports = QUEUE;
