(function () {
    'use strict';

    angular.module('gemApp').controller('FoodCtrl', ['$scope','$http','$state', FoodCtrl]);

    function FoodCtrl($scope, $http, $state) {
        var vm = this;
        
		 $http.get("http://gemmagazines.net/gemwoman/gem_app_apis/food.php")
		.success(function (response) {$scope.names = response.posts;});
		//alert($scope.names);
	 };
})();

