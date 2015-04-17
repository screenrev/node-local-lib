var fs = require('fs');
var debug = require('debug')('local-lib');

['lib', 'library'].forEach(function(path) {
	var libs = [];

	try {
		libs = fs.readdirSync(__dirname + '/../../' + path);
	}
	catch (e) {}

	libs.forEach(function(lib) {
		if (/^\./.test(lib)) return; // ignore dotfiles
		debug('loading library "%s"', lib);
		exports[lib.split('.')[0]] = require('../../' + path + '/' + lib);
	});
});
