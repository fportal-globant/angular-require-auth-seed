define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('FlickrCtrl', 
    	[
    		'$rootScope', '$scope', '$location','flickrService',
    		function ($rootScope, $scope, $location,flickrService) {
    			
			  	$scope.pics = [];

			  	$scope.flickrBusy = true;

			  	$scope.flickrTags = {tags: ''};

				// Use the instagram service and fetch a list of the popular pics
				flickrService.fetch($scope.flickrTags,function(data){
					for (var i = 0; i < data.length; i++) {
        				$scope.pics.push(data[i]);
      				}
				});

				// function used by infinite-scroll
				$scope.loadMore = function() {
					$scope.flickrBusy = true;
			    	flickrService.fetch($scope.flickrTags,function(data){
						for (var i = 0; i < data.length; i++) {
        					$scope.pics.push(data[i]);
        					$scope.flickrBusy = false;
      					}
					});
					
			  	};

			  	$scope.goToFlickr = function(item){
			  		window.open(item.link);
			  	}
			}
    ]);
});
