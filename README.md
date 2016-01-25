[![npm](http://img.shields.io/npm/v/grunt-excel-vocabulary.svg?style=flat-square)](https://www.npmjs.com/package/grunt-excel-vocabulary)
[![npm](http://img.shields.io/npm/l/grunt-excel-vocabulary.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/grunt-excel-vocabulary.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/grunt-excel-vocabulary)
[![Coverage Status](https://img.shields.io/coveralls/aliaksandr-pasynkau/grunt-excel-vocabulary.svg?style=flat-square)](https://coveralls.io/r/aliaksandr-pasynkau/grunt-excel-vocabulary?branch=master)

# grunt-excel-vocabulary

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aliaksandr-pasynkau/grunt-excel-vocabulary?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-excel-vocabulary --save
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-excel-vocabulary');
```

## The "excel_vocabulary" task

### Overview
In your project's Gruntfile, add a section named `excel_vocabulary` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  excel_vocabulary: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.root
Type: `String`
Default value: `process.cwd()`

if you need put your translation excel files somewhere in file system, not in process.cwd

#### options.parseValues
Type: `Boolean`
Default value: `false`

If set to true will parse values into integer or boolean when they are strings with boolean or integer shape.

#### options.beautify
Type: `String`
Default value: `true`

For beautify output JSON in file

#### options.keepEveryRowInFile
Type: `boolean`
Default value: `false`

For writting language entries into separated json files

#### options.isColumnOriented
Type: `Boolean`
Default value: `false`

If this value is set to true, then the json object will be created based on columns of the
excel file. This means that the output will be an array of objects, in which, each object
will have as key the first row, and as value the text inside the next rows.

#### options.set
Type: `Function`

Function that loads the json object with the data of the row in the excel file. By default:
```js
set: function (resultJsonObject, columnName, sheetName, key, value) {
    if (!resultJsonObject.hasOwnProperty(columnName)) {
        resultJsonObject[columnName] = {};
    }

    resultJsonObject[columnName][key] = value;
}
```

#### options.setColumn
Type: `Function`

If the option 'isColumnOriented' is set to true, this function will be called
when loading the column data. By default:
```js
setColumn: function (columnData, columnName, sheetName, key, value) {
    var row = {};

    row[ columnName ] = value;

    return row;
}
```

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  excel_vocabulary: {
    first: {
      options: {
        beautify: false
      }
      files: [
        { 'translations.json': 'translation.xlsx' },
        { src: 'translation.xlsx', dest: 'translation.json' }
      ],
    },
    second: {
      files: [{
        expand: true,
        cwd: 'path/to/source/dir',
        dest: 'path/to/build/dir',
        src: [
          '**/*.xlsx'
        ],
        ext: '.json'
      }],
    }
  },
});
```

## Excel File:
First row is a column names. First column of each row will be a key name.

Example:
![file example](/doc/sheet_screen.png?raw=true)
(cell colors is not matter)

## License
MIT

## Support
If you have any problems, catch the bug or have any suggestion - please [find an existing issue or create new](https://github.com/aliaksandr-pasynkau/grunt-excel-vocabulary/issues)

## Contributing
Do that! [How to contribute open-source projects](https://guides.github.com/activities/contributing-to-open-source/)

run the tests by following command
```shell
$ npm test
```

### Together we can change the world!
