/**
 * @license Todos os direitos reservados a Codate.
 * Sandbox (Fachada para modulos da camada base)
 */

'use strict';

define(
    [
        'underscore',
        'jquery',
        'bootstrap',
        'angular',
        'angularRouter',
        'angularLocale',
        'angularCookie',
        'angularAnimate',
        'angularMocks'

    ],
    function (_, jquery, bootstrap, angular) {

        return {

            utils: _

        };

    });