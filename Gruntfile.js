var pkgJson = require('./package.json');
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        publish: {
            main: {
                src: [
                    'test/wallettest.js',
                ]
            },
            regex: {
                src: ['src/**/*', 'test/**/*'],
            }
        },
        bump: {
            options: {
                files: ['package.json'],
                push: false,
                commitMessage: 'Release v%VERSION% Eric Grill',
                pushTo: 'origin',
                updateConfigs: ['pkg']
            }
        },
    });
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-release');
    grunt.registerTask('default', ['release']);
}
