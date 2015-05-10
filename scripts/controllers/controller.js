'use strict';

angular.module('redirection', ['ngStorage']).controller('MainCtrl', function($scope, $localStorage) {

  $scope.powerOn = $localStorage.powerOn;

  $scope.on = function() {
    $scope.onoff = 'Off';
    $scope.power = 'on';
    chrome.browserAction.setIcon({
      path: {
        38: "../../images/logo.png"
      },
    });
  };

  $scope.off = function() {
    $scope.onoff = 'On';
    $scope.power = 'off';
    chrome.browserAction.setIcon({
      path: {
        38: "../../images/logo-off.png"
      },
    });
  };

  $scope.save = function() {
    if ($localStorage.powerOn) {
      $localStorage.powerOn = false;
      $scope.off();
    } else {
      $localStorage.powerOn = true;
      $scope.on();
    }
  };

  if (localStorage['ngStorage-powerOn'] == null) {
    $localStorage.powerOn = true;
    $scope.on();
  } else if ($scope.powerOn) {
    $scope.on();
  } else {
    $scope.off();
  }

});