
"use strict";

var parse = require('./lib/parse');

module.exports['file with one empty sheet'] = function (test) {
	var json = parse(__dirname + '/../examples/one-empty-sheet.xlsx');
	test.done();
};

module.exports['file with one non empty sheet'] = function (test) {
	var json = parse(__dirname + '/../examples/one-non-empty-sheet.xlsx');
	test.done();
};

module.exports['file with two non empty sheet'] = function (test) {
	var json = parse(__dirname + '/../examples/two-non-empty-sheets.xlsx');
	test.done();
};
