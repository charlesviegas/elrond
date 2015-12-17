/**
 * @license Todos os direitos reservados a Codate.
 * Página Home
 */

'use strict';

define(['text!components/home/view.html'], function (view) {

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