'use strict';

define(['sandbox', 'text!components/parametro/filtro/view.html'], function (sandbox, view) {

    var thisComponent = {
        module: 'elParametroFiltro',
        directive: 'elParametroFiltro'
    };

    function initialize() {
        sandbox.registerExtensions(thisComponent.module)
            .directive(thisComponent.directive, customDirective)
    }

    function customDirective() {
        return {
            restrict: 'E',

            template: view,

            controller: ['$scope', 'elParametroEvent', function ($scope, elParametroEvent) {
                $scope.searchText = '';
                $scope.search = function () {
                    $scope.$parent.$broadcast(elParametroEvent.SEARCH_EVENT, {nome: $scope.searchText});
                }

            }]
        }
    }

    return {

        initialize: initialize

    };

});