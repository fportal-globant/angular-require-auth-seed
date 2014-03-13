define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('InstagramCtrl', 
    	[
    		'$rootScope', '$scope', '$location','instagramService',
    		function ($rootScope, $scope, $location,instagramService) {
    			
			  	$scope.pics = [];

			  	$scope.instagramBusy = true;

				// Use the instagram service and fetch a list of the popular pics
				instagramService.fetchPopular(function(data){
					for (var i = 0; i < data.length; i++) {
        				$scope.pics.push(data[i]);
      				}
				});


			  	$scope.goToInstagram = function(item){
			  		window.open(item.link);
			  	}

				// function used by infinite-scroll
				$scope.loadMore = function() {
					$scope.instagramBusy = true;
			    	instagramService.fetchPopular(function(data){
						for (var i = 0; i < data.length; i++) {
        					$scope.pics.push(data[i]);
        					$scope.instagramBusy = false;
      					}
					});
					
			  	};
			}
    ]);
});
