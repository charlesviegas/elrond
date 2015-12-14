'use strict';

define([], function () {

    return ['$scope', 'elParametroService', 'elParametroEvent', function ($scope, elParametroService, elParametroEvent) {

        $scope.parametros = [];

        $scope.parametroAtual = {};

        $scope.$on(elParametroEvent.SAVE_EVENT, function (event, model) {
            elParametroService.inserir(model).then(function (response) {
                initialize();
            });
        });

        $scope.$on(elParametroEvent.SEARCH_EVENT, function (event, filtro) {
            elParametroService.filtrar(filtro).then(function (response) {
                $scope.parametros = response.data;
            });
        });

        function initialize() {
            elParametroService.buscar().then(function (response) {
                $scope.parametros = response.data;
            });
        }

        initialize();

    }];

});

