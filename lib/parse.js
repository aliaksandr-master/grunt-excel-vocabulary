'use strict';

var _ = require('lodash');
var xlsx = require('node-xlsx');

var prepareString = function (str) {
	var _str = String(str).trim();

	return str == null || !_str.length ? null : _str;
};

var parseValue = function (value) {
	var booleanText = ['true', 'false'];
	var booleanValues = {'true': true, 'false': false};
	var newValue;
	var booleanParsed = false;


	if (_.includes(booleanText, value)) {
		newValue = booleanValues[value];
		booleanParsed = true;
	}

	if (!booleanParsed) {
		newValue = parseInt(value, 10);
		newValue = _.isNaN(newValue) ? value : newValue;
	}

	return newValue;
};
var parse = function (filepath, options) {
	var json = {};
	var columnObject = [];

	options = _.merge({
		set: function (resultJsonObject, columnName, sheetName, key, value) {
			if (!resultJsonObject.hasOwnProperty(columnName)) {
				resultJsonObject[ columnName ] = {};
			}
			resultJsonObject[ columnName ][ key ] = value;
		},
		setColumn: function (columnData, columnName, sheetName, key, value) {
			var row = {};

			row[ columnName ] = value;

			return row;
		}
	}, options);
	xlsx.parse(filepath).forEach(function (sheet) {
		var columnNames = (sheet.data || []).shift() || [];

		if (!options.isColumnOriented) {
			columnNames.shift();
		}


		_.each(sheet.data, function (row) {

			var tmpRow = options.isColumnOriented ? row : row.shift();
			var key = prepareString(tmpRow);


			if (key) {
				var columnData = {};

				_.forEach(row, function (value, index) {

					value = prepareString(value);

					var columnName = prepareString(columnNames[ index ]);

					if (columnName && value) {
						if (options.parseValues) {
							value = parseValue(value);
						}
						if (options.isColumnOriented) {
							columnData = _.merge(columnData, options.setColumn(json, columnName, sheet.name, key, value));
						} else {
							options.set(json, columnName, sheet.name, key, value);
						}

					}
				});
				if (options.isColumnOriented) {
					columnObject.push(columnData);
				}

			}
		});
	});

	return options.isColumnOriented ? columnObject : json;
};

module.exports = parse;
