'use strict';

var parse = require('./../lib/parse');
var gruntProcess = require('grunt-process/lib');

module.exports = function (grunt) {
	grunt.registerMultiTask('excel_vocabulary', function () {
		var options = this.options({
			beautify: true,
			keepEveryRowInFile: false,
			isColumnOriented: false
		});

		gruntProcess(grunt, this.files, {
			read: function (src, dest, fileObject) {
				return parse(src, options);
			},

			save: function (src, dest, resultJson, fileObject) {
				var files = {};

				if (options.keepEveryRowInFile) {
					var count = resultJson.length;
					var filename;

					for (var i = 0; i < count; i++) {
						filename = dest.replace(/(.\[a-zA-Z0-9]+)$/, i.toLowerCase() + '$1');

						files[ filename ] = JSON.stringify(resultJson[ i ], null, options.beautify ? 4 : null);
					}
				} else {
					files[ dest ] = JSON.stringify(resultJson, null, options.beautify ? 4 : null);
				}

				return files;
			}
		}, this.async());

	});
};
