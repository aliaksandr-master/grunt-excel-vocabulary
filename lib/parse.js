"use strict";

var _ = require('lodash');
var xlsx = require('node-xlsx');

var prepareString = function (str) {
	if (str == null) {
		return null;
	}

	str = String(str).trim();

	if (!str.length) {
		return null;
	}

	return str;
};

var parse = function (filepath) {
	var json = {};

	xlsx.parse(filepath).forEach(function (sheet) {
		var languages = sheet.data.shift();
		languages.shift();

		_.each(sheet.data, function (row) {
			var key = prepareString(row.shift());

			if (key == null) {
				return;
			}

			_.each(row, function (translation, index) {
				translation = prepareString(translation);

				var lang = prepareString(languages[index]);

				if (lang == null || translation == null) {
					return;
				}

				if (json[lang] == null) {
					json[lang] = {};
				}

				json[lang][key] = translation;
			});
		});
	});

	return json;
};

module.exports = parse;