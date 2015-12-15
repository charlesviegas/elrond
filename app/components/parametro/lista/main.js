'use strict';

define(['core/sandbox', 'text!components/parametro/lista/view.html'], function (sandbox, view) {

    var thisComponent = {
        module: 'elParametroLista',
        directive: 'elParametroLista'
    };

    function initialize() {
        sandbox.registerExtensions(thisComponent.module)
            .directive(thisComponent.directive, customDirective)
    }

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                parametros: '=items'
            },
            controller: ['$scope', 'elParametroEvent', function ($scope, elParametroEvent) {
                $scope.select = function ($event, parametro) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.$parent.$broadcast(elParametroEvent.SELECT_EVENT, parametro);
                }
            }]
        }
    }

    return {

        initialize: initialize

    };

});