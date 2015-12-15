'use strict';

var el = {};

el.loadConfig = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var config = JSON.parse(xhttp.responseText);
            var allTestFiles = el.loadUnitTest();
            el.loadRequirejs(allTestFiles, config);
        }
    };
    var url = 'config.json';
    if (window.__karma__) {
        url = '/base/app/' + url;
    }
    xhttp.open('GET', url, true);
    xhttp.send();
};

el.loadUnitTest = function () {
    var allTestFiles = [];
    if (window.__karma__) {
        var TEST_REGEXP = /spec\.js$/;

        var pathToModule = function (path) {
            return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
        };

        Object.keys(window.__karma__.files).forEach(function (file) {
            if (TEST_REGEXP.test(file)) {
                // Normalize paths to RequireJS module names.
                allTestFiles.push(pathToModule(file));
            }
        });
    }
    return allTestFiles;
};

el.loadRequirejs = function (allTestFiles, config) {

    var mydeps = config.extensions.concat(config.components);

    require.config({
        name: "main",
        waitSeconds: 20,
        paths: config.paths,
        shim: config.shim,
        priority: [
            'jquery',
            'angular'
        ],
        deps: window.__karma__ ? mydeps.concat(allTestFiles) : mydeps,
        callback: window.__karma__ ? window.__karma__.start : null,
        baseUrl: window.__karma__ ? '/base/app' : ''
    });

    require(['core/app'], function (app) {
        app.start({
            name: 'elApp',
            extensions: config.extensions,
            components: config.components
        });
    });
};

el.loadConfig();