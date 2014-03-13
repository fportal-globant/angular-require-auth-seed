define(['./module'], function (services) {
    'use strict';
    services.factory('flickrService', 
    	['$rootScope','$resource',

    	function($rootScope,$resource){

    		var factory = {};

            factory.fetch = function(tags,callback){
            	
                //doc: http://www.flickr.com/services/feeds/docs/photos_public/
				var api = $resource('http://api.flickr.com/services/feeds/photos_public.gne',{
					format: 'json', jsoncallback: 'JSON_CALLBACK' }, 
                    { 'load': { 'method': 'JSONP'}});

				api.load(tags,function(response){
					// Call the supplied callback function
					callback(response.items);
				});
            }
    		return factory;
    	}]
    );
});
