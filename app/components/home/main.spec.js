'use strict';

define(['components/home/main', 'angularMocks'], function (main) {

    describe('Suite de teste para o componente Home', function () {

        beforeEach(function () {
            main.initialize();
            module('elHome');
        });

        describe('Testes para o roteador', function () {


            var testedState;

            beforeEach(inject(function (_$state_) {
                testedState = _$state_.go('layout.home');
            }));


            xit('a url deve ser /home', function () {
                expect(testedState.url).toEqual('^/home');
            });

            /*
            xit('deve ter um template definido', function () {
                expect(testedState.template).toBeDefined();
            });
            */

        });
    });
});