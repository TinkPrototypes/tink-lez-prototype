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
    templateUrl: 'views/alle-aanvragen.html',
    //controller: 'MainCtrl'
  })
  .when('/alle-aanvragen', {
    templateUrl: 'views/alle-aanvragen.html',
  })
  .when('/nog-te-behandelen', {
    templateUrl: 'views/nog-te-behandelen.html',
  })
  .when('/alle-hotlists', {
    templateUrl: 'views/alle-hotlists.html',
  })
  .when('/uitgevoerde-programmas', {
    templateUrl: 'views/uitgevoerde-programmas.html',
  })
  .when('/parameters', {
    templateUrl: 'views/parameters.html',
  })
  .when('/tarieven', {
    templateUrl: 'views/tarieven.html',
  })
  .when('/standaardmails', {
    templateUrl: 'views/standaardmails.html',
  })
  .otherwise({
    redirectTo: '/'
  });
  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  // $locationProvider.hashPrefix('!');
});



