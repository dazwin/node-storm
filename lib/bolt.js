var task = require('./task')
var types = require('./types')

module.exports = function(args, process) {
	if (typeof(process) !== 'function') {
		process = args;
		args = {};
	}

	var bolt = task()
	bolt.on('tuple', function(data) {
		process.call(bolt.collector, data)
	})
	bolt.spec = types.shellbolt(args)
	return bolt
}
