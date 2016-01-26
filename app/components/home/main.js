/**
 * @license Todos os direitos reservados a Codate.
 * @author Charles Viegas <charles.viegas@codate.com.br>
 * @ngdoc overview
 * @name elHome
 *
 * @description
 *  Módulo principal do componente Home que é responsável por exibir e gerenciar a tela inicial da aplicação.
 */
define(['text!components/home/view.html'], function (view) {

    'use strict';

    var thisComponent = {

        name: 'elHome',

        controllers: {
            main: ['elHomeController', ['$scope', function($scope){
                $scope.singleModel = 1;
                $scope.isCollapsed = false;

                $scope.selected = undefined;

                $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

                $scope.items = [
                    'The first choice!',
                    'And another choice for you.',
                    'but wait! A third!'
                ];

                $scope.status = {
                    isopen: false
                };

                $scope.toggled = function(open) {
                    $log.log('Dropdown is now: ', open);
                };

                $scope.toggleDropdown = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.isopen = !$scope.status.isopen;
                };

                $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));


                // Any function returning a promise object can be used to load values asynchronously
                $scope.getLocation = function(val) {
                    return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                        params: {
                            address: val,
                            sensor: false
                        }
                    }).then(function(response){
                        return response.data.results.map(function(item){
                            return item.formatted_address;
                        });
                    });
                };



            }]]
        },

        configs: {
            router: ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');
                $stateProvider.state('layout.home', {
                    url: '^/home',
                    template: view,
                    controller: thisComponent.controllers.main[0]
                });
            }]
        }
    };

    return {

        initialize: function () {
            return thisComponent;
        }

    };

});