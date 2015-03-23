'use strict';

angular.module('projectFreeTVRedirect', ['ngStorage']).controller('MainCtrl', function($scope, $localStorage) {

  $scope.toggle = $localStorage.toggle;

  if (localStorage['ngStorage-toggle'] == null) {
    $localStorage.toggle = true;
  }

  $scope.save = function() {
    $localStorage.toggle = $scope.toggle;
  };

});