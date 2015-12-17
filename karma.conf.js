/* global module */
"use strict";

module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            {pattern: 'app/config.json', watched: true, served: true, included: false},
            {pattern: 'app/sandbox.js', included: false},
            {pattern: 'app/extensions/**/*', included: false},
            {pattern: 'app/components/**/*', included: false},
            {pattern: 'app/base/**/*', included: false},
            'app/main.js'
        ],

        autoWatch: false,

        singleRun: true,

        colors: true,

        logLevel: config.LOG_DEBUG,

        frameworks: ['jasmine', 'requirejs'],

        browsers: ['Chrome'], //browsers: ['Chrome', 'Safari', 'PhantomJS'],

        preprocessors: {
            'app/components/**/*.js': ['coverage'],
            'app/core/**/*.js': ['coverage'],
            'app/extensions/**/*.js': ['coverage']
        },

        reporters: ['junit', 'coverage', 'progress'],

        junitReporter: {
            outputDir: 'dist/reports/junit',
            outputFile: undefined,
            useBrowserName: true
        },

        coverageReporter: {
            type : 'lcov',
            dir : 'dist/reports/coverage/',
            subdir: '.'
        }

    });
};
