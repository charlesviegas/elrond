/**
 * @license Todos os direitos reservados a Codate.
 * Widgets comuns
 */

'use strict';

define(['core/sandbox'], function (sandbox) {

    var thisComponent = {
        module: 'elWidgets',
        directiveDefault: 'elBtnDefault',
        directivePrimary: 'elBtnPrimary'
    };

    function initialize() {
        sandbox.registerExtensions(thisComponent.module)
            .directive(thisComponent.directiveDefault, botaoDefault)
            .directive(thisComponent.directivePrimary, botaoPrimario)
    }

    function botaoDefault() {
        return {
            transclude: true,
            scope: {
                click: '&click'
            },
            restrict: 'E',
            template: '<a class="btn btn-default" href="#" ng-click="click($event)" role="button"><ng-transclude></ng-transclude></a>'
        }
    }

    function botaoPrimario() {
        return {
            transclude: true,
            scope: {
                click: '&click'
            },
            restrict: 'E',
            template: '<a class="btn btn-primary" href="#" ng-click="click($event)" role="button"><ng-transclude></ng-transclude></a>'
        }
    }

    return {

        initialize: initialize

    };

});