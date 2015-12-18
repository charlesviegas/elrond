/**
 * @license Todos os direitos reservados a Codate.
 * Layout principal usado por todas as páginas
 */

'use strict';

define(['text!extensions/layout/view.html'], function (view) {

    var thisComponent = {

        name: 'elLayout',

        controllers: {
            main: ['elLayoutController', ['$scope', '$state', function ($scope, $state) {
                $scope.isActive = function (state) {
                    return (state === $state.current.name) ? 'active' : '';
                }
            }]]
        },

        configs: {
            router: ['$stateProvider', function ($stateProvider) {
                $stateProvider.state('layout', {
                    url: '^/',
                    abstract: true,
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

