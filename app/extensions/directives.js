'use strict';

define(['sandbox'], function (sandbox) {

    var thisComponent = {
        module: 'elDirective',
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