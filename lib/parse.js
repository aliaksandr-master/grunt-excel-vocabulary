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

var parse = function (filepath, options) {
	var json = {};

	options = _.extend({
		set: function (resultJsonObject, columnName, sheetName, key, value) {
			if (!resultJsonObject.hasOwnProperty(columnName)) {
				resultJsonObject[columnName] = {};
			}

			resultJsonObject[columnName][key] = value;
		}
	}, options);

	xlsx.parse(filepath).forEach(function (sheet) {
		var columnNames = (sheet.data || []).shift() || [];
		columnNames.shift();

		_.each(sheet.data, function (row) {
			var key = prepareString(row.shift());

			key !== null && _.each(row, function (value, index) {
				value = prepareString(value);

				var columnName = prepareString(columnNames[index]);

				columnName !== null && value !== null && options.set(json, columnName, sheet.name, key, value);
			});
		});
	});

	return json;
};

module.exports = parse;