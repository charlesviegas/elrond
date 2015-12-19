/**
 * @license Todos os direitos reservados a Codate.
 * Mock dos servicos restful para o model Parametro
 */

'use strict';

define(['sandbox'], function (sandbox) {

    var thisComponent = {

        name: 'elMockParametro',

        runs: {
            mockParametro: ['$httpBackend', function ($httpBackend) {
                buscar($httpBackend);
                inserir($httpBackend);
                alterar($httpBackend);
                filtrar($httpBackend);
            }]
        },

        url: 'api/parametro',

        nextval: 3,

        repository: [
            {id: 1, nome: 'version', valor: '1.0', descricao: 'Versão do sistema atual'},
            {id: 2, nome: 'report.path', valor: '/opt/reports', descricao: 'Path dos relatórios do sistema'}
        ]
    };


    function buscar($httpBackend) {
        $httpBackend.whenGET(thisComponent.url).respond(thisComponent.repository);
    }

    function inserir($httpBackend) {
        $httpBackend.whenPOST(thisComponent.url).respond(function (method, url, data) {
            var inserted = JSON.parse(data);
            inserted.id = thisComponent.nextval++;
            thisComponent.repository.push(inserted);
            return [200, inserted, {}];
        });
    }

    function alterar($httpBackend) {
        $httpBackend.whenPUT(thisComponent.url).respond(function (method, url, data) {
            var updated = JSON.parse(data);
            var actual = sandbox.utils.findWhere(thisComponent.repository, {id: updated.id});
            if (actual) {
                actual.nome = updated.nome || actual.nome;
                actual.valor = updated.valor || actual.valor;
                actual.descricao = updated.descricao || actual.descricao;
            }
            return [200, actual, {}];
        });
    }

    function filtrar($httpBackend) {
        $httpBackend.whenPOST(thisComponent.url + '/filtro').respond(function (method, url, data) {
            var filter = JSON.parse(data);
            var result = sandbox.utils.where(thisComponent.repository, {nome: filter.nome});
            return [200, result, {}];
        });
    }

    return {

        initialize: function () {
            if (document.URL.match(/\?dev/)) {
                return thisComponent;
            }
            return null;
        }

    };

});