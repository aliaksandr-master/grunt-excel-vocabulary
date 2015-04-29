'use strict';

var parse = require('./lib/parse');
var path = require('path');

var EXAMPLE_DIR = path.join(__dirname, '/../examples');

exports['file with one empty sheet'] = function (test) {
	test.doesNotThrow(function () {
		var json = parse(path.join(EXAMPLE_DIR, '/one-empty-sheet.xlsx'));

		test.deepEqual(json, require(path.join(EXAMPLE_DIR, '/one-empty-sheet.json')));
	});

	test.done();
};

exports['file with one non empty sheet'] = function (test) {
	test.doesNotThrow(function () {
		var json = parse(path.join(EXAMPLE_DIR, '/one-non-empty-sheet.xlsx'));

		test.deepEqual(json, require(path.join(EXAMPLE_DIR, '/one-non-empty-sheet.json')));
	});

	test.done();
};

exports['file with two non empty sheet'] = function (test) {
	test.doesNotThrow(function () {
		var json = parse(path.join(EXAMPLE_DIR, '/two-non-empty-sheets.xlsx'));

		test.deepEqual(json, require(path.join(EXAMPLE_DIR, '/two-non-empty-sheets.json')));
	});

	test.done();
};
