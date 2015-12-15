/**
 * @license Todos os direitos reservados a Codate.
 * Mock dos servicos restful para o model Parametro
 */

'use strict';

define(['core/sandbox'], function (sandbox) {

    var thisComponent = {
        module: 'elMockParametro',
        url: 'api/parametro',
        nextval: 3,
        repository: [
            {id: 1, nome: 'version', valor: '1.0', descricao: 'Versão do sistema atual'},
            {id: 2, nome: 'report.path', valor: '/opt/reports', descricao: 'Path dos relatórios do sistema'}
        ]
    };

    function initialize() {
        if (document.URL.match(/\?development/)) {
            sandbox.registerExtensions(thisComponent.module)
                .run(['$httpBackend', function ($httpBackend) {
                    buscar($httpBackend);
                    inserir($httpBackend);
                    alterar($httpBackend, sandbox);
                    filtrar($httpBackend, sandbox);
                }])
        }
    }

    function buscar($httpBackend) {
        $httpBackend.whenGET(thisComponent.url).respond(thisComponent.repository);
    }

    function inserir($httpBackend) {
        $httpBackend.whenPOST(thisComponent.url).respond(function (method, url, data) {
            var inserted = angular.fromJson(data);
            inserted.id = thisComponent.nextval++;
            thisComponent.repository.push(inserted);
            return [200, inserted, {}];
        });
    }

    function alterar($httpBackend, sandbox) {
        $httpBackend.whenPUT(thisComponent.url).respond(function (method, url, data) {
            var updated = angular.fromJson(data);
            var actual = sandbox.utils.findWhere( thisComponent.repository, {id: updated.id});
            if(actual){
                actual.nome = updated.nome || actual.nome;
                actual.valor = updated.valor || actual.valor;
                actual.descricao = updated.descricao || actual.descricao;
            }
            return [200, actual, {}];
        });
    }

    function filtrar($httpBackend, sandbox) {
        $httpBackend.whenPOST(thisComponent.url + '/filtro').respond(function (method, url, data) {
            var filter = angular.fromJson(data);
            var result = sandbox.utils.where( thisComponent.repository, {nome: filter.nome});
            return [200, result, {}];
        });
    }

    return {

        initialize: initialize

    };

});