'use strict';

/**
 * @ngdoc function
 * @name miPrimerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miPrimerAppApp
 */
angular.module('miPrimerAppApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.divisor = 50;
    $scope.dividendo = 10;
    $scope.division = function(n1, n2){
      return n1/n2
    }

  });
