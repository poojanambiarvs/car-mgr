module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.registerTask('default', ['jshint']);
};