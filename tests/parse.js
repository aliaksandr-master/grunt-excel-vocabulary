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

exports['Parses the excel sheet into an object based on column'] = function (test) {
	test.doesNotThrow(function () {
		var options = {
			isColumnOriented: true
		};
		var json = parse(path.join(EXAMPLE_DIR, '/column-oriented.xlsx'), options);

		test.deepEqual(json, require(path.join(EXAMPLE_DIR, '/column-oriented.json')));
	});

	test.done();
};

exports['Parses the values into boolean or integer'] = function (test) {
	test.doesNotThrow(function () {
		var options = {
			isColumnOriented: true,
			parseValues: true
		};
		var json = parse(path.join(EXAMPLE_DIR, '/column-oriented.xlsx'), options);

		test.deepEqual(json, require(path.join(EXAMPLE_DIR, '/column-oriented-values-parsed.json')));
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
