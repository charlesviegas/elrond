'use strict';

define([], function () {

    return ['$http', function ($http) {

        var that = this,
            url = 'api/parametro';

        that.inserir = function (parametro) {
            return $http({
                method: 'POST',
                url: url,
                data: JSON.stringify(parametro)
            });
        };

        that.alterar = function (id, parametro) {
            return $http({
                method: 'PUT',
                url: url + '/' + id,
                data: JSON.stringify(parametro)
            });
        };

        that.buscar = function () {
            return $http({
                method: 'GET',
                url: url
            });
        };

        that.filtrar = function (filtro) {
            return $http({
                method: 'POST',
                url: url + '/filtro',
                data: JSON.stringify(filtro)
            });
        }

    }];

});