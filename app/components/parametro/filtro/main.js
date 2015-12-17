/**
 * @license Todos os direitos reservados a Codate.
 * Subcomponente Filtro do componente Parametro
 */

'use strict';

define(['sandbox', 'text!components/parametro/filtro/view.html'], function (sandbox, view) {

    var thisComponent = {

        name: 'elParametroFiltro',

        directives: {
            filtro: ['elParametroFiltro', customDirective]
        }

    };

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

        initialize: function () {
            return thisComponent;
        }

    };

});