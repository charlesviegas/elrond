/**
 * @license Todos os direitos reservados a Codate.
 * @author Charles Viegas <charles.viegas@codate.com.br>
 * @ngdoc service
 * @name elParametro.elParametroService
 * @requires $http
 *
 * @description
 *  Serviço responsável pela recuperação e manutenção
 *  dos parâmetros da aplicação entre servidor e cliente.
 */
define([], function () {

    'use strict';

    return ['$http', function ($http) {

        var that = this,
            url = 'api/parametro';

        /**
         * @ngdoc method
         * @name elParametro.elParametroService#inserir
         * @methodOf elParametro.elParametroService
         *
         * @description
         * Insere um novo parâmetro no repositório da aplicação.
         *
         * @param {Object} parametro Um objeto contendo os dados de um novo Parâmetro da aplicação.
         * @returns {HttpPromise} Retorna uma promessa que vai ser resolvida quando a requisição for resolvida.
         */
        that.inserir = function (parametro) {
            return $http({
                method: 'POST',
                url: url,
                data: JSON.stringify(parametro)
            });
        };

        /**
         * @ngdoc method
         * @name alterar
         * @methodOf elParametro.elParametroService
         *
         * @description
         * Altera um parâmetro no repositório da aplicação.
         *
         * @param {Number} id O identificador único do parâmetro.
         * @param {Object} parametro Um objeto contendo os dados do Parâmetro a serem alterados da aplicação.
         * @returns {HttpPromise} Retorna uma promessa que vai ser resolvida quando a requisição for resolvida.
         */
        that.alterar = function (id, parametro) {
            return $http({
                method: 'PUT',
                url: url + '/' + id,
                data: JSON.stringify(parametro)
            });
        };

        /**
         * @ngdoc method
         * @name buscar
         * @methodOf elParametro.elParametroService
         *
         * @description
         * Retorna uma lista com todos os parâmetros registrados no repositório da aplicação.
         *
         * @returns {HttpPromise} Retorna uma promessa que vai ser resolvida quando a requisição for resolvida.
         */
        that.buscar = function () {
            return $http({
                method: 'GET',
                url: url
            });
        };

        /**
         * @ngdoc method
         * @name filtrar
         * @methodOf elParametro.elParametroService
         *
         * @description
         * Retorna uma lista com todos os parâmetros filtros pelo critério de pesquisa informado.
         *
         * @param {Object} filtro Um objeto contendo os dados do Parâmetro a serem filtrados.
         * @returns {HttpPromise} Retorna uma promessa que vai ser resolvida quando a requisição for resolvida.
         */
        that.filtrar = function (filtro) {
            return $http({
                method: 'POST',
                url: url + '/filtro',
                data: JSON.stringify(filtro)
            });
        }

    }];

});