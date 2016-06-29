# grunt-stamp

[![NPM version](https://img.shields.io/npm/v/grunt-stamp.svg?)](https://www.npmjs.com/package/grunt-stamp)
[![Linux Build Status](https://img.shields.io/travis/brainkim/grunt-stamp/master.svg?label=Linux%20build)](https://travis-ci.org/brainkim/grunt-stamp)
[![devDependency Status](https://img.shields.io/david/dev/brainkim/grunt-stamp.svg)](https://david-dm.org/brainkim/grunt-stamp#info=devDependencies)

>Add a banner or footer to files

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-stamp --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stamp');
```

## The "stamp" task

### Overview

Add a banner and/or a footer to your files. This task modifies all files in
place, so `dest` files are unnecessary. It's also idempotent, so you can simply
add it to the end of your build tasks and not worry about a banner or footer
being added multiple times. However, you do want to be careful about restamping
files with dynamic templates (e.g. `<%= grunt.today('isoDateTime') %>`).

In your project's Gruntfile, add a section named `stamp` to the data object
passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  stamp: {
    options: {
      banner: 'v<%= pkg.version %>',
      footer: 'Licensed under the MIT License'
    },
    yourTarget: {
      files: {
        src: 'build/*'
      }
    }
  }
});
```

### Options

#### options.banner

Type: `String`  
Default: none

A banner to add to your file. A line-break is inserted between the banner
and the file

#### options.footer

Type: `String`  
Default: none

A footer to add to your file. A line-break is inserted between the footer
and the file.

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 0.2.0 Compatibility with Grunt 1.x
* 0.1.0 Initial Release
