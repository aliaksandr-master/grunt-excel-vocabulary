'use strict';

var path = require('path');
var parse = require('./../lib/parse');

module.exports = function (grunt) {
	grunt.registerMultiTask('excel_vocabulary', function () {
		var options = this.options({
			root: process.cwd(),
			beautify: true,
			keepEveryRowInFile: false
		});

		this.files.forEach(function (f) {
			f.src.filter(function (filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				}

				return true;
			}).forEach(function (srcFilePath) {
				var resultJson = parse(path.resolve(options.root, srcFilePath), options);
				var resultJsonString;

				if (options.keepEveryRowInFile) {
					var count = resultJson.length;

					for (var i = 0; i < count; i++) {
						resultJsonString = JSON.stringify(resultJson[i], null, options.beautify ? 4 : null);
						grunt.file.write(f.dest + i.toLowerCase() + (f.ext || '.json'), resultJsonString);
						grunt.log.writeln('File "' + f.dest + i.toLowerCase() + '" created.');
					}
				} else {
					resultJsonString = JSON.stringify(resultJson, null, options.beautify ? 4 : null);
					grunt.file.write(f.dest, resultJsonString);
					grunt.log.writeln('File "' + f.dest + '" created.');
				}
			});
		});
	});
};
