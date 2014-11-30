'use strict';
/* global Tabletop:false */

/**
 * @ngdoc function
 * @name yoLisaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoLisaApp
 */
angular.module('yoLisaApp').controller('MainCtrl', ['$scope', '$sce', '$interval', function ($scope, $sce, $interval) {


	$scope.articles = [];
	$scope.activities = [];
	$scope.navItems = [];
	$scope.globalData = {};
	$scope.ready = false;



	//set init on interval and cancel on callback
	var init = $interval(function(){
		console.log('init');
		tabletop();
	}, 5000);


	function tabletop(){
		Tabletop.init({
			key: '1sNdUNoHAZTbueB3AhM-wdinCnL-nnI4OocCJn6hecTM',
			callback: function(data){
				$interval.cancel(init);
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
	}


	//initial tabletop call
	tabletop();
	

	$scope.trust = function(body){
		return $sce.trustAsHtml(body);
	};




}]);
