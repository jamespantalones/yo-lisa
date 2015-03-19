'use strict';

/**
 * @ngdoc service
 * @name yoLisaApp.dataService
 * @description
 * # dataService
 * Service in the yoLisaApp.
 */
angular.module('yoLisaApp').service('dataService', function ($http, $q) {

	var getData = function(){
		var deferred = $q.defer();

		$http.get('https://s3.amazonaws.com/lisa-data/data.json').success(function(response){
			deferred.resolve(response);
		}).error(function(err){
			deferred.reject(err);
		});

		return deferred.promise;
	};


	return{
		getData: function(){
			return getData();
		}
	};
});
