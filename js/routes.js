/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/instagram', {
      		templateUrl: 'views/instagram.html', 
      		controller:  'InstagramCtrl'
    	})
        .when('/flickr', {
            templateUrl: 'views/flickr.html', 
            controller:  'FlickrCtrl'
        })
    	.otherwise({ redirectTo: '/' });
    }]);
});
