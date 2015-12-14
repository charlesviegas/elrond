'use strict';

if (window.__karma__) {
    var allTestFiles = [];
    var TEST_REGEXP = /spec\.js$/;

    var pathToModule = function (path) {
        return path.replace(/^\/base\/app\//, '').replace(/\.js$/, '');
    };

    Object.keys(window.__karma__.files).forEach(function (file) {
        if (TEST_REGEXP.test(file)) {
            // Normalize paths to RequireJS module names.
            allTestFiles.push(pathToModule(file));
        }
    });
}

require.config({
    waitSeconds: 20,
    paths: {
        jquery: 'vendor/jquery/dist/jquery',
        angular: 'vendor/angular/angular',
        angularLocale: 'vendor/angular-i18n/angular-locale_pt-br',
        angularCookie: 'vendor/angular-cookies/angular-cookies',
        angularMocks: 'vendor/angular-mocks/angular-mocks',
        angularRouter: 'vendor/angular-ui-router/release/angular-ui-router',
        bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
        text: 'vendor/requirejs-text/text',
        underscore: 'vendor/underscore/underscore',
        sandbox: 'core/sandbox',
        app: 'core/app'
    },
    shim: {
        angular: {'exports': 'angular'},
        angularLocale: ['angular'],
        angularCookie: ['angular'],
        angularRouter: ['angular'],
        angularMocks: {
            deps: ['angular'],
            exports: 'angular.mock'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['angular', 'jquery']
        }
    },
    priority: [
        'angular'
    ],
    deps: window.__karma__ ? allTestFiles : [],
    callback: window.__karma__ ? window.__karma__.start : null,
    baseUrl: window.__karma__ ? '/base/app' : ''
});

require(['app'], function (app) {
    app.start({
        name: 'elApp',
        extensions: [
            'extensions/directives',
            'extensions/mock-parametro'
        ],
        components: [
            'components/layout/main',
            'components/home/main',
            'components/parametro/main',
            'components/parametro/detalhe/main',
            'components/parametro/filtro/main',
            'components/parametro/lista/main'
        ]
    });
});