'use strict';

define(['core/sandbox'], function (sandbox) {

    var route = ['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }];

    function start(options) {
        sandbox.ready(function () {

            defaults(options);

            initializeModules(options.extensions).done(function () {
                initializeModules(options.components).done(function () {
                    sandbox.registerApp(options.name).config(route);
                    sandbox.bootstrap(options.name);
                });
            });

        });
    }

    function initializeModules(modules) {
        var deferred = sandbox.deferred();
        require(modules, function () {
            for (var i = 0; i < arguments.length; i++) {
                arguments[i].initialize();
            }
            deferred.resolve(arguments);
        });
        return deferred.promise();
    }

    function defaults(options) {
        options.name = options.name || 'app';
        options.extensions = options.extensions || [];
        options.components = options.components || [];
    }

    return {

        start: start

    };

});