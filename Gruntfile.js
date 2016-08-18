module.exports = function(grunt) {

    // Project configuration.
    var config = {
        pkg: grunt.file.readJSON('package.json')

    };

    require('load-grunt-config')(grunt, {data: config});
};
