/**
 * @license Todos os direitos reservados a Codate.
 * Sandbox (Fachada para modulos da camada base)
 */

'use strict';

define(
    [
        'underscore',
        'jquery',
        'toastr',
        'bootstrap',
        'angular',
        'angularRouter',
        'angularLocale',
        'angularCookie',
        'angularAnimate',
        'angularMocks',
        'angularBootstrap'

    ],
    function (_, jquery, toastr) {

        return {

            utils: _,

            success: function (corpo, titulo) {
                toastr.success(corpo, titulo);
            },

            error: function (corpo, titulo) {
                toastr.error(corpo, titulo);
            }

        };

    });