(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.name = '';
		
		$scope.CheckIfToMuch = function(){
			var menu = $scope.name;
			var result1 = menu.split('');
			var result2 = menu.split(',');
			var test1 = result1.length;
			var test2 = result2.length;
			if (test1 == 0) {
				$scope.message = "Please enter data first";
			} else if (test2 <= 3) {
				$scope.message = "Enjoy!";
			} else{
				$scope.message = "Too much!"
			}
		}
	}


})();