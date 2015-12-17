/**
 * @license Todos os direitos reservados a Codate.
 * Component Parametro
 */

'use strict';

define(
    [
        'sandbox',
        'components/parametro/event',
        'components/parametro/service',
        'components/parametro/controller',
        'text!components/parametro/view.html'
    ],
    function (sandbox, event, service, controller, view) {

        var thisComponent = {

            name: 'elParametro',

            controllers: {
                main: ['elParametroController', controller]
            },

            services: {
                main: ['elParametroService', service]
            },

            constants: {
                events: ['elParametroEvent', event]
            },

            configs: {
                router: ['$stateProvider', function ($stateProvider) {
                    $stateProvider.state('layout.parametro', {
                        url: '^/parametro',
                        template: view,
                        controller: thisComponent.controllers.main[0]
                    });
                }]
            }
        };

        return {

            initialize: function () {
                return thisComponent;
            }

        };

    });