'use strict';

angular.module('redirection', ['ngStorage']).controller('MainCtrl', function($scope, $localStorage) {

    $scope.on = function() {
        $scope.state = 'on';
    };

    $scope.off = function() {
        $scope.state = 'off';
    };

    $scope.changeState = function() {
        if ($localStorage.power) {
            $localStorage.power = false;
            $scope.off();
        } else {
            $localStorage.power = true;
            $scope.on();
        }
    };
    
    $scope.init = function() {
        $scope.count = $localStorage.count;
        if (localStorage['ngStorage-count'] == null) {
            $localStorage.count = 0;
            $scope.count = $localStorage.count;
        }

        $scope.power = $localStorage.power;
        if (localStorage['ngStorage-power'] == null) {
            $localStorage.power = true;
            $scope.on();
        } else if ($scope.power) {
            $scope.on();
        } else {
            $scope.off();
        }
    };

});
