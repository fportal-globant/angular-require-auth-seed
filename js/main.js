/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({    
    paths: {
        'jquery': '../lib/jquery/jquery-2.0.2',
        'twitter-bootstrap': '../lib/bootstrap/bootstrap',
        'infinite-scroll': '../lib/infinite-scroll/ng-infinite-scroll',
        'angular': '../lib/angular/angular',
        'angular-route': '../lib/angular-route/angular-route',
        'angular-resource': '../lib/angular-resource/angular-resource',
        'domReady': '../lib/requirejs-domready/domReady'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
            
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'twitter-bootstrap': {
            deps: ['jquery']
        },
        'infinite-scroll': {
            deps: ['jquery'], 
            deps: ['angular']
             
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        './app-bootstrap'
    ]
});
