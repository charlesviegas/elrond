'use strict';

define(
    [
        'core/sandbox',
        'components/parametro/event',
        'components/parametro/service',
        'components/parametro/controller',
        'text!components/parametro/view.html'
    ],
    function (sandbox, event, service, controller, view) {

        var thisComponent = {
            module: 'elParametro',
            controller: 'elParametroController',
            service: 'elParametroService',
            constant: 'elParametroEvent',
            route: ['$stateProvider', function ($stateProvider) {
                $stateProvider.state('layout.parametro', {
                    url: '^/parametro',
                    template: view,
                    controller: thisComponent.controller
                });
            }]
        };


        function initialize() {
            sandbox.registerComponents(thisComponent.module)
                .controller(thisComponent.controller, controller)
                .service(thisComponent.service, service)
                .constant(thisComponent.constant, event)
                .config(thisComponent.route);
        }

        return {

            initialize: initialize

        };

    });