'use strict';

/**
 * @ngdoc overview
 * @name tinkApp
 * @description
 * # tinkApp
 *
 * Main module of the application.
 */
 angular
 .module('tinkApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ngRoute',
   'ngMessages',
   'ngSanitize',
   'ngTouch',
   'tink.navigation',
   'tink.tinkApi',
   'tink.timepicker',
   'tink.datepicker',
   'tink.interactivetable'
   ])
 .config(function ($routeProvider) { /*, $locationProvider */
  $routeProvider
  .when('/', {
    redirectTo: '/alle-aanvragen'
    //controller: 'MainCtrl'
  })
  .when('/alle-aanvragen', {
    templateUrl: 'views/alle-aanvragen.html',
  })
  .when('/alle-hotlists', {
    templateUrl: 'views/alle-hotlists.html',
  })
  .when('/detail-hotlists', {
    templateUrl: 'views/detail-hotlists.html',
  })
  .otherwise({
    templateUrl: 'views/not-implemented.html'
  });
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  // $locationProvider.hashPrefix('!');
});



