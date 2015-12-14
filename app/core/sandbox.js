'use strict';

define(
    [
        'underscore',
        'jquery',
        'bootstrap',
        'angular',
        'angularRouter',
        'angularLocale',
        'angularCookie',
        'angularMocks'

    ],
    function (_, jquery, bootstrap, angular) {

        var baseModules = ['ui.router', 'ngCookies'],
            extensionsModules = [],
            componentsModules = [];

        function enableMock(modules){
            if(document.URL.match(/\?development/)){
                modules.push('ngMockE2E');
            }
        }

        enableMock(baseModules);

        return {

            registerApp: function (name) {
                return angular.module(name, baseModules.concat(extensionsModules).concat(componentsModules));
            },

            registerExtensions: function (name) {
                extensionsModules.push(name);
                return angular.module(name, baseModules);
            },

            registerComponents: function (name) {
                componentsModules.push(name);
                return angular.module(name, baseModules.concat(extensionsModules));
            },

            ready: function (done) {
                angular.element().ready(done());
            },

            deferred: function () {
                return jquery.Deferred();
            },

            bootstrap: function (name) {
                angular.bootstrap(document, [name]);
            },

            utils: _

        };

    });