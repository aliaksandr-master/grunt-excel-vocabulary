'use strict';

module.exports = require('grunto')(function (grunt) {
	grunt.loadTasks('tasks');

	grunt.registerTask('default', [
		'test',
		'watch'
	]);

	grunt.registerTask('test', [
		'eslint',
		'clean',
		'excel_vocabulary',
		'nodeunit'
	]);

	return {
		eslint: {
			options: {
				configFile: '.eslintrc.json'
			},
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'lib/*.js',
				'<%= nodeunit.tests %>'
			]
		},

		clean: [
			'.tmp'
		],

		excel_vocabulary: {
			convert: {
				expand: true,
				cwd: 'examples',
				dest: '.tmp',
				ext: '.json',
				src: [
					'**/*.xlsx'
				]
			}
		},

		nodeunit: {
			tests: [ 'tests/*.js' ]
		},

		watch: {
			files: [
				'lib/**/*',
				'tests/**/*',
				'tasks/**/*',
				'examples/**/*'
			],
			tasks: [
				'test'
			]
		}
	};
});
