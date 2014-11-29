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


	$scope.articles = [];
	$scope.activities = [];
	$scope.navItems = [];
	$scope.globalData = {};
	$scope.ready = false;



	Tabletop.init({
		key: '1sNdUNoHAZTbueB3AhM-wdinCnL-nnI4OocCJn6hecTM',
		callback: function(data){
			console.log(data);
			//outside of angular digest, hence apply
			$scope.$apply(function(){
				$scope.articles = data.Features.elements;
				$scope.activities = data.Activities.elements;
				$scope.navItems = data.Nav.elements;
				$scope.globalData = data.GlobalInfo.elements[0];


				$scope.ready = true;
			});
			
		}
	});

	$scope.trust = function(body){
		return $sce.trustAsHtml(body);
	};




}]);
