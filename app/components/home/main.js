/**
 * @license Todos os direitos reservados a Codate.
 * @author Charles Viegas <charles.viegas@codate.com.br>
 * @ngdoc overview
 * @name elHome
 *
 * @description
 *  Módulo principal do componente Home que é responsável por exibir e gerenciar a tela inicial da aplicação.
 */
define(['text!components/home/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'elHome',

        configs: {
            router: ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');
                $stateProvider.state('layout.home', {
                    url: '^/home',
                    template: view
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