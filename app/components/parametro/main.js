/**
 * @license Todos os direitos reservados a Codate.
 * @author Charles Viegas <charles.viegas@codate.com.br>
 * @ngdoc overview
 * @name elParametro
 *
 * @description
 *  Módulo principal do componente Home que é responsável
 *  por exibir e gerenciar a tela parâmetros da aplicação.
 */
define(
    [
        'sandbox',
        'components/parametro/event',
        'components/parametro/service',
        'components/parametro/controller',
        'text!components/parametro/view.html'
    ],
    function (sandbox, event, service, controller, view) {

        'use strict';

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

            /**
             * @ngdoc function
             * @name elParametro#initialize
             * @methodOf elParametro
             *
             * @description
             *  Inicializa o modulos retornando um objeto com o registro de todos os serviços do angular.
             *
             *  @return {Object} Objeto de configuração do módulo.
             */
            initialize: function () {
                return thisComponent;
            }

        };

    });