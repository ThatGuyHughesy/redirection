'use strict';

angular.module('projectFreeTVRedirect', ['ngStorage']).controller('MainCtrl', function($scope, $localStorage) {

  $scope.toggle = $localStorage.toggle;

  $scope.save = function() {
    $localStorage.toggle = $scope.toggle;
  };

});