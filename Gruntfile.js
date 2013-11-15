/*
 * grunt-stamp
 * https://github.com/brainkim/grunt-stamp
 *
 * Copyright (c) 2013 Brian Kim
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    copy: {
      tests: {
        expand: true,
        src: 'test/fixtures/*',
        dest: 'tmp/',
        flatten: true
      }
    },

    stamp: {
      testdir: {
        options: {
          banner: 'banner',
          footer: 'footer'
        },
        files: {
          src: 'tmp/*'
        }
      },
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Run stamp twice to make sure it's idempotent
  grunt.registerTask('test', ['clean', 'copy', 'stamp', 'stamp', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
