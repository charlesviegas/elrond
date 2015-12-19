'use strict';

define(['angularMocks'], function () {

    describe('Suite de teste para elParametroService do componente Parametro', function () {

        beforeEach(function () {
            module('elParametro');
        });

        describe('buscar', function () {

            var elParametroService, $httpBackend, url = 'api/parametro';

            beforeEach(inject(function (_elParametroService_, _$httpBackend_) {
                elParametroService = _elParametroService_;
                $httpBackend = _$httpBackend_;
            }));

            it('o serviço deve estar definido', function () {
                expect(elParametroService).toBeDefined();
            });

            it('a busca deve retornar uma lista vazia', function () {
                $httpBackend.whenGET(url).respond({});
                elParametroService.buscar().then(function (response) {
                    expect(response.data).toEqual({});
                });
                $httpBackend.flush();
            });

        });


    });

});