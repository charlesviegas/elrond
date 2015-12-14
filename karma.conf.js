/* global module */
"use strict";

module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            {pattern: 'app/vendor/angular/angular.js', included: false},
            {pattern: 'app/vendor/angular-ui-router/release/angular-ui-router.js', included: false},
            {pattern: 'app/vendor/angular-i18n/angular-locale_pt-br.js', included: false},
            {pattern: 'app/vendor/angular-cookies/angular-cookies.js', included: false},
            {pattern: 'app/vendor/angular-mocks/angular-mocks.js', included: false},
            {pattern: 'app/vendor/requirejs-text/text.js', included: false},
            {pattern: 'app/vendor/jquery/dist/jquery.js', included: false},
            {pattern: 'app/vendor/underscore/underscore.js', included: false},
            {pattern: 'app/vendor/bootstrap/dist/js/bootstrap.js', included: false},
            {pattern: 'app/components/**/*', included: false},
            {pattern: 'app/extensions/**/*', included: false},
            {pattern: 'app/core/**/*', included: false},
            'app/main.js'
        ],

        autoWatch: true,

        colors: true,

        logLevel: config.LOG_DEBUG,

        frameworks: ['jasmine', 'requirejs'],

        browsers: ['Chrome'], //browsers: ['Chrome', 'Safari', 'PhantomJS'],

        preprocessors: {
            'app/components/**/*.js': ['coverage'],
            'app/core/**/*.js': ['coverage'],
            'app/extensions/**/*.js': ['coverage']
        },

        reporters: ['coverage', 'progress'],

        coverageReporter: {
            type : 'lcov',
            dir : '.tmp/reports/coverage/',
            subdir: '.'
        }

    });
};
