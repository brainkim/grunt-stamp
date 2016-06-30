/*
 * grunt-stamp
 * https://github.com/brainkim/grunt-stamp
 *
 * Copyright (c) 2013 Brian Kim
 * Licensed under the MIT license.
 */

'use strict';

function check(file, str, index) {
  return file.indexOf(str) !== index;
}

function checkBanner(file, banner) {
  return check(file, banner, 0);
}

function checkFooter(file, footer) {
  return check(file, footer, file.length - footer.length);
}

module.exports = function(grunt) {
  grunt.registerMultiTask('stamp', 'Add a banner or footer to files', function() {

    var options = this.options({
      banner: '',
      footer: ''
    });

    this.filesSrc.forEach(function(filepath) {
      if (grunt.file.isFile(filepath)) {
        var banner;
        var footer;
        var file = grunt.file.read(filepath);

        var re = /\r?\n$/;
        // Remove EOL
        if (re.test(file[file.length - 1])) {
          file = file.replace(re, '');
        }

        if (options.banner && checkBanner(file, options.banner)) {
          banner = options.banner;
        }

        if (options.footer && checkFooter(file, options.footer)) {
          footer = options.footer;
        }

        var newFile = [banner,
                       file,
                       footer]
          .filter(function(s) { return s; })
          .join(grunt.util.linefeed);

        grunt.file.write(filepath, newFile + grunt.util.linefeed);

        if (banner || footer) {
          grunt.verbose.writeln(filepath + ' stamped!');
        }
      }
    });
  });
};
