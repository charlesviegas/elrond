'use strict';

define(['components/home/main', 'angular', 'angularMocks'], function (main) {

    describe('Suite de teste para o componente Home', function () {

        beforeEach(function () {
            main.initialize();
            module('elHome');
        });

        describe('Testes para o roteador', function () {

            var testedState;

            beforeEach(inject(function (_$state_) {
                testedState = _$state_.get('layout.home');
            }));

            it('a url deve ser /home', function () {
                expect(testedState.url).toEqual('^/home');
            });

            it('deve ter um template definido', function () {
                expect(testedState.template).toBeDefined();
            });

        });
    });
});