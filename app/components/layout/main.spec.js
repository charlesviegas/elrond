'use strict';

define(['legolas', 'angularMocks'], function (legolas) {

    describe('Suite de teste para o componente Layout', function () {

        beforeEach(function () {
            legolas.start({
                name: 'elrond',
                extensions: [],
                components: [
                    'components/layout/main'
                ]
            });
            module('elLayout');
        });

        describe('Testes para o controlador', function () {

            var $rootScope, testedController;

            beforeEach(inject(function (_$rootScope_, _$controller_) {
                $rootScope = _$rootScope_;
                var $state = {
                    current: {
                        name: 'layout'
                    }
                };
                testedController = _$controller_('elLayoutController', {$scope: $rootScope, $state: $state});
            }));


            it('deve estar definido', function () {
                expect(testedController).toBeDefined();
            });

            it('deve retornar active quando o state for igual a entrada', function () {
                expect($rootScope.isActive('layout')).toEqual('active');
            });

            it('deve retornar vazio quando o state for diferente da entrada', function () {
                expect($rootScope.isActive('layout.parametro')).toEqual('');
            });
        });

        describe('Testes para o roteador', function () {

            var testedState;

            beforeEach(inject(function (_$state_) {
                testedState = _$state_.get('layout');
            }));

            it('deve ser um estado abstrato', function () {
                expect(testedState.abstract).toBeTruthy();
            });

            it('deve ter um template definido', function () {
                expect(testedState.template).toBeDefined();
            });

            it('deve ter um controller definido', function () {
                expect(testedState.controller).toBeDefined();
            });

            it('o nome do controller deve ser elLayoutController', function () {
                expect(testedState.controller).toEqual('elLayoutController');
            });

        });
    });
});