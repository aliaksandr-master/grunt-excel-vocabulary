'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'lib/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		clean: [
			'.tmp'
		],

		excel_vocabulary: {
			convert: {
				expand: true,
				cwd: 'examples',
				dest: '.tmp'
			}
		},

		nodeunit: {
			tests: [ 'tests/*.js' ]
		}
	});

	grunt.registerTask('default', [
		'jshint',
		'clean',
		'excel_vocabulary',
		'nodeunit'
	]);

	gtunr.registerTask('test', [
		'default'
	]);

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
};
