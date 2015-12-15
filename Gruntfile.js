"use strict";

var ENV = {
    src: 'app',
    dist: 'dist',
    browsers: ['Chrome'],
    deps: [
        'extensions/directives',
        'extensions/mock-parametro',
        'components/layout/main',
        'components/home/main',
        'components/parametro/main',
        'components/parametro/detalhe/main',
        'components/parametro/filtro/main',
        'components/parametro/lista/main'
    ]
};

function loadTasks() {
    var clean = require('./tasks/clean'),
        doc = require('./tasks/doc'),
        minify = require('./tasks/minify'),
        test = require('./tasks/test'),
        copy = require('./tasks/copy'),
        gzip = require('./tasks/gzip'),
        eslint = require('./tasks/eslint');

    return [clean, doc, minify, test, copy, gzip, eslint];
}

function initConfig(grunt, tasks) {

    var _ = require('underscore'), configs = {};

    tasks.forEach(function (task) {
        configs = _.extend(configs, task.getConfig(ENV));
    });

    grunt.initConfig(configs);
}

function loadNpmTasks(grunt, tasks) {
    tasks.forEach(function (task) {
        task.loadNpmTasks(grunt);
    });
}

function registerTasks(grunt) {
    grunt.registerTask('docs', ['clean', 'jsdoc', 'eslint']);
    grunt.registerTask('test', ['karma']);
    grunt.registerTask('dist', ['docs', 'test', 'requirejs:minifyCss', 'requirejs:minifyJs', 'copy', 'compress']);
    grunt.registerTask('default', ['dist']);
}


module.exports = function (grunt) {

    var tasks = loadTasks();

    initConfig(grunt, tasks);

    loadNpmTasks(grunt, tasks);

    registerTasks(grunt);
};