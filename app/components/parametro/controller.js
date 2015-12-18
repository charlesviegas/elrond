/**
 * @license Todos os direitos reservados a Codate.
 * @author Charles Viegas <charles.viegas@codate.com.br>
 * @ngdoc object
 * @name elParametro.elParametroController
 *
 * @requires $scope
 * @requires elParametro.elParametroService
 * @requires elParametro.elParametroEvent
 *
 * @description
 *  Controlador principal do componente do parâmetros.
 */
define([], function () {

    'use strict';

    return ['$scope', 'elParametroService', 'elParametroEvent', function ($scope, elParametroService, elParametroEvent) {

        /**
         * @ngdoc property
         * @name elParametro.elParametroController#parametros
         * @propertyOf elParametro.elParametroController
         *
         * @description
         * Lista de parametros mantidos pelo controlador logo após recuperado do repositório da aplicação.
         */
        $scope.parametros = [];

        /**
         * @ngdoc property
         * @name elParametro.elParametroController#parametroAtual
         * @propertyOf elParametro.elParametroController
         *
         * @description
         * Parâmetro atualmente selecionado.
         */
        $scope.parametroAtual = {};

        /**
         * @ngdoc event
         * @name elParametro.elParametroController#SAVE_EVENT
         * @eventOf elParametro.elParametroController
         *
         * @description
         *  Escuta o evento disparado quando há uma tentativa inserção ou alteração de parâmetro no repositório da aplicação.
         */
        $scope.$on(elParametroEvent.SAVE_EVENT, function (event, model) {
            elParametroService.inserir(model).then(function (response) {
                initialize();
            });
        });

        /**
         * @ngdoc event
         * @name elParametro.elParametroController#SEARCH_EVENT
         * @eventOf elParametro.elParametroController
         *
         * @description
         *  Escuta o evento disparado quando o filtro da busca de parametros é disparado.
         */
        $scope.$on(elParametroEvent.SEARCH_EVENT, function (event, filtro) {
            elParametroService.filtrar(filtro).then(function (response) {
                $scope.parametros = response.data;
            });
        });

        /**
         * @ngdoc function
         * @name elParametro.elParametroController#initialize
         * @methodOf elParametro.elParametroController
         *
         * @description
         *  Inicializa o controlador, recuperando todos os dados necessários.
         */
        function initialize() {
            elParametroService.buscar().then(function (response) {
                $scope.parametros = response.data;
            });
        }

        initialize();

    }];

});