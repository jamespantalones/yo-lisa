'use strict';

/**
 * @ngdoc overview
 * @name yoLisaApp
 * @description
 * # yoLisaApp
 *
 * Main module of the application.
 */
angular
  .module('yoLisaApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
