'use strict';

define([], function () {

    return ['$scope', '$state', function ($scope, $state) {

        $scope.isActive = function(state){
            return (state === $state.current.name) ? 'active' : '';
        }

    }];

});

