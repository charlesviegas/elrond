/**
 * @license Todos os direitos reservados a Codate.
 * Subcomponente Detalhe do componente Parametro
 */

'use strict';

define(['sandbox', 'text!components/parametro/detalhe/view.html'], function (sandbox, view) {

    var thisComponent = {

        name: 'elParametroDetalhe',

        directives: {
            detalhe: ['elParametroDetalhe', customDirective]
        }
    };

    function customDirective() {
        return {
            restrict: 'E',
            template: view,
            scope: {
                parametro: '=item'
            },
            controller: ['$scope', 'elParametroEvent', function ($scope, elParametroEvent) {

                $scope.editing = false;

                $scope.new = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.editing = true;
                    $scope.parametro = {};
                };

                $scope.save = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    var dados = $scope.parametro;
                    $scope.editing = false;
                    $scope.parametro = {};
                    $scope.$parent.$broadcast(elParametroEvent.SAVE_EVENT, dados);
                };

                $scope.cancel = function ($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.editing = false;
                    $scope.parametro = {};
                };

                $scope.$on(elParametroEvent.SELECT_EVENT, function (event, dados) {
                    $scope.parametro = dados;
                    $scope.editing = true;
                });

                $scope.$on(elParametroEvent.SEARCH_EVENT, function () {
                    $scope.parametro = {};
                    $scope.editing = false;
                });
            }]
        };
    }

    return {

        initialize: function () {
            return thisComponent;
        }

    };

});