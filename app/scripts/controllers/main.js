'use strict';
/* global Tabletop:false */

/**
 * @ngdoc function
 * @name yoLisaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoLisaApp
 */
angular.module('yoLisaApp').controller('MainCtrl', ['$scope', '$sce', function ($scope, $sce) {

	$scope.articles = {};
	$scope.activities = {};

	Tabletop.init({
		key: '1sNdUNoHAZTbueB3AhM-wdinCnL-nnI4OocCJn6hecTM',
		callback: function(data){
			console.log(data);
			//outside of angular digest, hence apply
			$scope.$apply(function(){
				$scope.articles = data.Features.elements;
				$scope.activities = data.Activities.elements;
				console.log($scope.activities);
			});
			
		}
	});

	$scope.trust = function(body){
		return $sce.trustAsHtml(body);
	};




}]);
