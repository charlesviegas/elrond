'use strict';

var el = {};

el.loadConfig = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var config = JSON.parse(xhttp.responseText);
            el.loadUnitTest();
            el.loadRequirejs(config);
        }
    };
    xhttp.open('GET', 'config.json', true);
    xhttp.send();
};

el.loadUnitTest = function() {
    if (window.__karma__) {
        var allTestFiles = [];
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
};

el.loadRequirejs = function(config) {

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