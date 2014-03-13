define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('MainCtrl', 
    	[
    		'$rootScope', '$scope',
    		function ($rootScope, $scope) {
			  	$scope.controller = "Home";
			}
    ]);
});
