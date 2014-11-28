'use strict';
/* global Tabletop:false */

/**
 * @ngdoc function
 * @name yoLisaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoLisaApp
 */
angular.module('yoLisaApp').controller('MainCtrl', function ($scope) {

	$scope.articles = {};

	Tabletop.init({
		key: '1sNdUNoHAZTbueB3AhM-wdinCnL-nnI4OocCJn6hecTM',
		callback: function(data){
			console.log(data);
			//outside of angular digest, hence apply
			$scope.$apply(function(){
				$scope.articles = data;
			});
			
		},
		simpleSheet: true
	});




});
