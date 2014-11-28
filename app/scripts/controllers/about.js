'use strict';

/**
 * @ngdoc function
 * @name yoLisaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoLisaApp
 */
angular.module('yoLisaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
