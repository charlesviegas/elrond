/**
 * @license Todos os direitos reservados a Codate.
 * Subcomponente Lista do componente Parametro
 */

'use strict';

define(['sandbox', 'text!components/parametro/lista/view.html'], function (sandbox, view) {

    var thisComponent = {

        name: 'elParametroLista',

        directives: {
            lista: ['elParametroLista', customDirective]
        }

    };

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

        initialize: function () {
            return thisComponent;
        }

    };

});