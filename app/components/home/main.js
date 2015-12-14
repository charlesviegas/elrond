'use strict';

define(['sandbox', 'text!components/home/view.html'], function (sandbox, view) {

    var thisComponent = {
        module: 'elHome',
        route: ['$stateProvider', function ($stateProvider) {
            $stateProvider.state('layout.home', {
                url: '^/home',
                template: view
            });
        }]
    };

    function initialize() {
        sandbox.registerComponents(thisComponent.module)
            .config(thisComponent.route)
    }

    return {

        initialize: initialize

    };

});