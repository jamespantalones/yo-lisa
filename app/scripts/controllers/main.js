'use strict';
/* global Tabletop:false */

/**
 * @ngdoc function
 * @name yoLisaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoLisaApp
 */
angular.module('yoLisaApp').controller('MainCtrl', [
	'$scope',
	'$sce',
	'$interval',
	'dataService',
	function ($scope, $sce, $interval, dataService) {


		$scope.articles = [];
		$scope.activities = [];
		$scope.navItems = [];
		$scope.globalData = {};
		$scope.ready = false;



		dataService.getData().then(function(data){
			$scope.articles = data.Features.elements;
			$scope.activities = data.Activities.elements;
			$scope.navItems = data.Nav.elements;
			$scope.globalData = data.GlobalInfo.elements[0];
			$scope.ready = true;

		});



		

		$scope.trust = function(body){
			return $sce.trustAsHtml(body);
		};

	}
]);
