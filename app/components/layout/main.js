'use strict';

define(['core/sandbox', 'components/layout/controller', 'text!components/layout/view.html'], function (sandbox, controller, view) {

    var thisComponent = {
        module: 'elLayout',
        controller: 'elLayoutController',
        route: ['$stateProvider', function ($stateProvider) {
            $stateProvider.state('layout', {
                url: '^/',
                abstract: true,
                template: view,
                controller: thisComponent.controller
            });
        }]
    };

    function initialize() {
        sandbox.registerComponents(thisComponent.module)
            .controller(thisComponent.controller, controller)
            .config(thisComponent.route)
    }

    return {

        initialize: initialize

    };

});

