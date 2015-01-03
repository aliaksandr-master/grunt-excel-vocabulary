[![npm](http://img.shields.io/npm/v/grunt-excel-vocabulary.svg?style=flat-square)](https://www.npmjs.com/package/grunt-excel-vocabulary)
[![npm](http://img.shields.io/npm/l/grunt-excel-vocabulary.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary)
[![devDependency Status](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary/dev-status.svg?style=flat-square)](https://david-dm.org/aliaksandr-pasynkau/grunt-excel-vocabulary#info=devDependencies)
[![Build Status](https://travis-ci.org/aliaksandr-pasynkau/grunt-excel-vocabulary.svg?branch=master&style=flat-square)](https://travis-ci.org/aliaksandr-pasynkau/grunt-excel-vocabulary)
[![Coverage Status](https://img.shields.io/coveralls/aliaksandr-pasynkau/grunt-excel-vocabulary.svg?style=flat-square)](https://coveralls.io/r/aliaksandr-pasynkau/grunt-excel-vocabulary?branch=master)

# grunt-excel-vocabulary

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

#### options.beautify
Type: `String`
Default value: `true`

For beautify output JSON in file

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
